
import { createContext, ReactNode, useContext, useReducer } from "react";
import { UserSchema } from "../@apollo_server/MongoDB/models";

type State<S> = S;

type Action<A> = A;

type Reducer<S, A> = ( state: S, action: A ) => S;

type CombineReducer<S, A> = ( r: {
    [ P in keyof S ]: P extends keyof A ? Reducer<S[P], A[P]> : never
}) => ( state: S, action: A ) => S

/* Customized Types */

type StateTypes = State<{
    theme: boolean
    user: UserSchema | null
}>;

type ActionTypes = Action<{
    theme: {
        LIGHT_MODE: 'LIGHT_MODE'
        DARK_MODE: 'DARK_MODE'
    }
    user: {
        SIGN_IN: 'SIGN_IN'
        SIGN_OUT: 'SIGN_OUT'
    }
    [i: string]: any
}>

const initialState: StateTypes = {
    user: null, theme: false
}

const actions: ActionTypes = {
    user: {
        SIGN_IN: 'SIGN_IN',
        SIGN_OUT: 'SIGN_OUT'
    }, 
    theme: {
        LIGHT_MODE: 'LIGHT_MODE',
        DARK_MODE: 'DARK_MODE'
    }
}


const reducer: Reducer<
    StateTypes, ActionTypes
> = ( state: StateTypes, action: ActionTypes ) => {


    (( obj = {} ) => {
        for( let key in actions ) {
            Object.assign( obj, actions[key] )
        }
        return obj
    })()
 
    return state

}

export const Context = createContext({ state: initialState, dispatch: ( type: ActionTypes) => {} }) 


export function GlobalState({ children } : { children: ReactNode }) {
    const [ state, dispatch ] = useReducer( reducer, initialState );

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalState = () => {
    return useContext(Context)
}

//type h = CheckReducerName<"userReducer", keyof StateTypes>






/* 
import { createContext, ReactNode, useContext, useReducer } from "react";
import cache from "../@apollo_client/configs/cache";
import { ME } from "../@apollo_client/querys/userQuery";
import { UserSchema } from "../@apollo_server/MongoDB/models";

type UserState = null | UserSchema;
type ThemeState = 'Light' | 'Dark';

type UserActions = 'SIGNIN' | 'SIGNOUT';
type ThemeActions = 'LIGHT' | 'DARK';

type ActionMap = { type:  UserActions & ThemeActions };
type StateMap = { user: UserState, theme: ThemeState, [i: string]: any }

type Reducer<S, A> = (state: S, action: A) => S;

type MainReducer<S, A> = (
    reducers: { [ i: string ]: Reducer<S, A> }
) => Reducer<S, A>;



const initialState: StateMap = { user: null, theme: 'Light', };

const userReducer: Reducer<StateMap, ActionMap> = ( state, action ) => {
    const i = cache.readQuery({
        query: ME,
    });

    console.log(i)
    return state
}

const themeReducer: Reducer<StateMap, ActionMap> = ( state, action ) => {
    return state
}

const combineReducers: MainReducer<StateMap, ActionMap> = (reducers) => (state, action) =>
  Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action),
    }),
    state
);


export const Context = createContext({ state: initialState, dispatch: ({ type } : { type: ActionMap }) => {} }) 

export function GlobalState({ children } : { children: ReactNode }) {
    const [ state, dispatch ] = useReducer( combineReducers({ 
        user: userReducer, theme: themeReducer 
    }), initialState );

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalState = () => {
    return useContext(Context)
}
 */