"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `


    type AuthResponse {
        message: String 
        succesful: Boolean
    }

    type User {
        username: String
        password: String
        email: String
        rank: Int
    }

    type Query {
        me: User
    }

    type Mutation {
        signIn ( username: String!, password: String! ): AuthResponse
        createUser ( username: String!, password: String!, confirmPassword: String! email: String! ): AuthResponse
    }

`;
exports.default = typeDefs;
