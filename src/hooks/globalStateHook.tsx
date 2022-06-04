
import { createContext, ReactNode, useContext, useReducer } from "react";

const initialState = {

}

const reducer = () => {
    return {}
}

const context = {
    state: {

    }, 
    dispatch: () => {

    }
}


export const Context = createContext(context) 

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