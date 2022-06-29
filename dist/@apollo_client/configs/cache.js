"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = require("@apollo/client/cache");
const cache = new cache_1.InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                me: {
                    read(existing, options) {
                        return existing;
                    }
                }
            }
        }
    }
});
exports.default = cache;
