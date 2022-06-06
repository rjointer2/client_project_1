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
Object.defineProperty(exports, "__esModule", { value: true });
// react
const react_1 = require("react");
// apollo client
const client_1 = require("@apollo/client");
const userMutation_1 = require("./userMutation");
/**
 * @name useUserSessionHook
 * @argument actionType string of 'signIn' | 'signUp' | 'signOut'
 * @description takes a actiontype string to perform a query to
 * start or remove a user session on the server
*/
function useUserSessionHook(actionType) {
    const exceutedSideEffect = (0, react_1.useRef)(false);
    const [signIn] = (0, client_1.useMutation)(userMutation_1.SIGNIN);
    const [signUp] = (0, client_1.useMutation)(userMutation_1.SIGNUP);
    const submitHandler = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (typeof actionType !== typeof String()) {
            console.error('A type of actiontype string or argument was not provided...');
            return;
        }
        if (actionType === 'signIn') {
            const i = yield signIn({
                variables: {
                    "username": "test1",
                    "password": "test1",
                }
            });
            console.log(i.errors);
        }
        if (actionType === 'signUp') {
            const i = yield signUp({
                variables: {
                    "username": "test1",
                    "password": "test1",
                    "email": "test1@gmail.com",
                }
            });
            console.log(i);
        }
    });
    return {
        submitHandler
    };
}
exports.default = useUserSessionHook;
