"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGNIN = exports.ME_DATA = void 0;
const client_1 = require("@apollo/client");
exports.ME_DATA = (0, client_1.gql) `
    fragment data on User {
        username
        email
        rank
    }
`;
exports.SIGNIN = (0, client_1.gql) `
    ${exports.ME_DATA}
    mutation signIn ($username: String!, $password: String!) {
        signIn (username: $username, password: $password) {
            message
            data {
                ...data
            }
        }
    }
`;
