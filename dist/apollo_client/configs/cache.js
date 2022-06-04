"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bearToken = void 0;
const cache_1 = require("@apollo/client/cache");
const client_1 = require("@apollo/client");
exports.bearToken = (0, client_1.makeVar)('');
const cache = new cache_1.InMemoryCache({
    typePolicies: {
        Token: {
            fields: {
                data: {
                    read(existing) {
                        existing.token === "" ?
                            (0, exports.bearToken)("") : (0, exports.bearToken)(existing.token);
                    }
                }
            }
        }
    }
});
exports.default = cache;
