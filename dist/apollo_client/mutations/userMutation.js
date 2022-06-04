"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGNIN = exports.TokenData = void 0;
const client_1 = require("@apollo/client");
exports.TokenData = (0, client_1.gql) `
    fragment data on User {
        token
        username
    }
`;
exports.SIGNIN = (0, client_1.gql) `
    ${exports.TokenData}
    mutation signIn ($username: String!, $password: String!) {
        signIn (username: $username, password: $password) {
            message
            data {
                ...data
            }
        }
    }
`;
