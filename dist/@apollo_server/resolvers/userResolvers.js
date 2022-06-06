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
exports.me = exports.createUser = exports.signIn = void 0;
const models_1 = __importDefault(require("../MongoDB/models"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const apollo_server_express_1 = require("apollo-server-express");
const signIn = (_, args, middleware) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.default.findOne({ username: args.username });
    let message = "Failed To Sign In! :[";
    if (!user) {
        throw new apollo_server_express_1.ApolloError(`No User was found when queryed for ${args.username}...`);
    }
    if (!(yield bcrypt_1.default.compare(args.password, user.password))) {
        throw new apollo_server_express_1.ApolloError('Incorrect Password Used When Signing In...');
    }
    user.password = "";
    middleware.authorize(user);
    message = "Sign In Successfully!";
    return {
        message
    };
});
exports.signIn = signIn;
const createUser = (_, args, middleware) => __awaiter(void 0, void 0, void 0, function* () {
    args.password = yield bcrypt_1.default.hash(args.password, 10);
    return yield models_1.default.create(args).then(user => {
        middleware.authorize(user.id);
        return {
            message: "User Created Successfully...",
        };
    }).catch((err) => {
        let message = "Errors when creating User,";
        if (err.message.includes('password'))
            message += " Password doesn't filfull requirements, ";
        if (err.message.includes('username'))
            message += " Username already exist, ";
        if (err.message.includes('email'))
            message += " Email has beem used already, ";
        return {
            message,
            data: null
        };
    });
});
exports.createUser = createUser;
const me = (_, __, middleware) => __awaiter(void 0, void 0, void 0, function* () {
    middleware.authenticate();
    return {
        username: ""
    };
});
exports.me = me;
