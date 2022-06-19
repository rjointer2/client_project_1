
import { createContext, ReactNode, useContext, useReducer } from "react";
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


export const Context = createContext({ state: initialState, dispatch: ({ type } : ActionMap) => {} }) 

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
