"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserResolver = void 0;
const client_1 = require("@apollo/client");
const globalStateHook_1 = require("../../hooks/globalStateHook");
const userQuery_1 = require("../querys/userQuery");
const setUserResolver = () => {
    const { data, loading, error } = (0, client_1.useQuery)(userQuery_1.ME);
    const { dispatch } = (0, globalStateHook_1.useGlobalState)();
    return { data, loading, error };
};
exports.setUserResolver = setUserResolver;
