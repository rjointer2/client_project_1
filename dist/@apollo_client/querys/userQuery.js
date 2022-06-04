"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = void 0;
const client_1 = require("@apollo/client");
exports.me = (0, client_1.gql) `
    query {
        me {
            username
        }
    }
`;
