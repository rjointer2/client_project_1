"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCacheUser = exports.useUser = void 0;
const client_1 = require("@apollo/client");
const userQuery_1 = require("../@apollo_client/querys/userQuery");
const useUser = () => {
    const { data, loading, error } = (0, client_1.useQuery)(userQuery_1.ME);
    return {
        data, loading, error
    };
};
exports.useUser = useUser;
const useCacheUser = () => {
    const { data, loading, error } = (0, client_1.useQuery)(userQuery_1.ME, {
        fetchPolicy: 'cache-only'
    });
    return {
        me: data === null || data === void 0 ? void 0 : data.me, loading, error
    };
};
exports.useCacheUser = useCacheUser;
