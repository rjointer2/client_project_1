"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const express_session_1 = __importDefault(require("express-session"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
const combineResolvers_1 = __importDefault(require("./resolvers/combineResolvers"));
const context_1 = __importDefault(require("./middleware/context"));
const connectDB_1 = __importDefault(require("./connectDB"));
const configs_1 = __importDefault(require("./configs"));
const dev = process.env.NODE_ENV !== 'development';
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
const _port = 3000;
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: combineResolvers_1.default,
    context: context_1.default
});
app.prepare().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const expressLib = (0, express_1.default)();
    expressLib.get('*', (req, res) => {
        console.log('k');
        return handle(req, res);
    });
    expressLib.use((0, express_session_1.default)({
        "secret": process.env.SECRET,
        "resave": true,
        store: new connect_mongo_1.default({
            mongoUrl: configs_1.default,
        }),
        "name": "__tu7821_us",
        "cookie": {
            maxAge: 2 * 60 * 60 * 1000
        }
    }));
    (0, connectDB_1.default)();
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app: expressLib, });
    // Express instance passed is 
    expressLib.listen(_port, () => {
        console.log('server started!');
        console.log(apolloServer.graphqlPath);
    });
}));
