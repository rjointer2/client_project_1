"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalState = exports.GlobalState = exports.Context = void 0;
const react_1 = require("react");
const initialState = {};
const reducer = () => {
    return {};
};
const context = {
    state: {},
    dispatch: () => {
    }
};
exports.Context = (0, react_1.createContext)(context);
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
