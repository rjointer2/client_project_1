"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userResolvers_1 = require("./userResolvers");
const resolvers = {
    Query: {
        me: userResolvers_1.me
    },
    Mutation: {
        signIn: userResolvers_1.signIn,
        createUser: userResolvers_1.createUser
    },
};
exports.default = resolvers;
