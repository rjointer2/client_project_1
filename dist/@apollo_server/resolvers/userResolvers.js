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
    for (let input in args) {
        if (args[input] === '')
            throw new apollo_server_express_1.ApolloError(`All fields aren't fill out, please fill out fields to create a account`);
    }
    if (args.password !== args.confirmPassword)
        throw new apollo_server_express_1.ApolloError('The passwords entered did not match, please try again...');
    if (args.username.length > 5)
        throw new apollo_server_express_1.ApolloError('Username must be at least 6 characters long');
    try {
        const _hashPasswored = yield bcrypt_1.default.hash(args.password, 12);
        args.password = _hashPasswored;
        const user = yield models_1.default.create(args);
        middleware.authorize(user);
        return {
            message: 'Successfully Register Account!'
        };
    }
    catch (err) {
        console.log(err);
        if (!err)
            throw new apollo_server_express_1.ApolloError('no error thrown, bad server handle made..');
        if (!(typeof err === 'object'))
            throw new apollo_server_express_1.ApolloError('unknown error thrown, server failed to evaluate issue...');
        if (err.hasOwnProperty('message')) {
            let error = err;
            if (error.message.includes("username_1"))
                throw new apollo_server_express_1.ApolloError(`Username: ${args.username} has been used already...`);
            if (error.message.includes("email_1"))
                throw new apollo_server_express_1.ApolloError(`Email: ${args.email} has been used already...`);
            throw new apollo_server_express_1.ApolloError(error.message);
        }
    }
});
exports.createUser = createUser;
const me = (_, __, middleware) => __awaiter(void 0, void 0, void 0, function* () {
    const user = middleware.authenticate();
    return user;
});
exports.me = me;
