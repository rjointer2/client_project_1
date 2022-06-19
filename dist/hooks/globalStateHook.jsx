"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalState = exports.GlobalState = exports.Context = void 0;
const react_1 = require("react");
const initialState = { user: null, theme: 'Light', };
const userReducer = (state, action) => {
    return state;
};
const themeReducer = (state, action) => {
    return state;
};
const combineReducers = (reducers) => (state, action) => Object.keys(reducers).reduce((acc, prop) => (Object.assign(Object.assign({}, acc), { [prop]: reducers[prop](acc[prop], action) })), state);
exports.Context = (0, react_1.createContext)({ state: initialState, dispatch: ({ type }) => { } });
function GlobalState({ children }) {
    const [state, dispatch] = (0, react_1.useReducer)(combineReducers({
        user: userReducer, theme: themeReducer
    }), initialState);
    return (<exports.Context.Provider value={{ state, dispatch }}>
            {children}
        </exports.Context.Provider>);
}
exports.GlobalState = GlobalState;
const useGlobalState = () => {
    return (0, react_1.useContext)(exports.Context);
};
exports.useGlobalState = useGlobalState;
