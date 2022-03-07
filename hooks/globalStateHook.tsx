
import { createContext, useContext, useReducer } from "react";

const context = {
    state: {

    }, 
    dispatch: () => {

    }
}

type globalStateProvider = {
    childern: React.ReactNode
}

const Context = createContext(context);

export const ContextProvider = ({ childern } : globalStateProvider) => {

    const [ state, dispatch ] = useReducer(  )

    return <Context.Provider value={ context }>{childern}</Context.Provider>
}

export const useGlobalState = () => {
    return useContext(Context)
}