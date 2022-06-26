"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ME = void 0;
const client_1 = require("@apollo/client");
exports.ME = (0, client_1.gql) `
    query {
        me {
            username
            email
        }
    }
`;
