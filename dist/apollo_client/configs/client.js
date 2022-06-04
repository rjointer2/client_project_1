"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const persisted_queries_1 = require("@apollo/client/link/persisted-queries");
const cache_1 = __importDefault(require("./cache"));
const crypto_hash_1 = require("crypto-hash");
const persistedQueriesLink = (0, persisted_queries_1.createPersistedQueryLink)({ sha256: crypto_hash_1.sha256 });
const httpLink = (0, client_1.createHttpLink)({
    uri: 'http://localhost:3000/graphql',
});
const client = new client_1.ApolloClient({
    cache: cache_1.default,
    link: persistedQueriesLink.concat(httpLink),
    credentials: 'include',
});
exports.default = client;
