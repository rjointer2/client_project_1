"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = require("@apollo/client/cache");
const cache = new cache_1.InMemoryCache({});
exports.default = cache;
