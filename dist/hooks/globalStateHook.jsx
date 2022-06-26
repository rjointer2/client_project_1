"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalState = exports.GlobalState = exports.Context = void 0;
const react_1 = require("react");
const initialState = {
    user: null, theme: false
};
const actions = {
    user: {
        SIGN_IN: 'SIGN_IN',
        SIGN_OUT: 'SIGN_OUT'
    },
    theme: {
        LIGHT_MODE: 'LIGHT_MODE',
        DARK_MODE: 'DARK_MODE'
    }
};
const reducer = (state, action) => {
    /*  Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action),
    }),
    state
); */
    const combineActions = (actions) => {
        const i = Object.keys(actions).reduce((previousValue, currentValue) => (Object.assign(Object.assign({}, previousValue), { ['actions']: {} })), actions);
        console.log(i);
    };
    return state;
};
exports.Context = (0, react_1.createContext)({ state: initialState, dispatch: (type) => { } });
function GlobalState({ children }) {
    const [state, dispatch] = (0, react_1.useReducer)(reducer, initialState);
    return (<exports.Context.Provider value={{ state, dispatch }}>
            {children}
        </exports.Context.Provider>);
}
exports.GlobalState = GlobalState;
const useGlobalState = () => {
    return (0, react_1.useContext)(exports.Context);
};
exports.useGlobalState = useGlobalState;
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
