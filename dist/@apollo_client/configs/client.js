"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const cache_1 = __importDefault(require("./cache"));
const httpLink = (0, client_1.createHttpLink)({
    uri: 'http://localhost:3000/graphql',
});
const client = new client_1.ApolloClient({
    cache: cache_1.default,
    link: httpLink,
    credentials: 'include',
});
exports.default = client;
