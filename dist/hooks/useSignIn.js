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
const client_1 = require("@apollo/client");
const react_1 = require("react");
const userMutation_1 = require("../@apollo_client/mutations/userMutation");
function useSignIn(e) {
    e.preventDefault();
    // This is for development purposes, to avoid unnecessary
    // misfires and extra request on dev env
    const exceutedSideEffect = (0, react_1.useRef)(false);
    const [signIn] = (0, client_1.useMutation)(userMutation_1.SIGNIN);
    (0, react_1.useEffect)(() => {
        if (exceutedSideEffect.current)
            return;
        (() => __awaiter(this, void 0, void 0, function* () {
            const i = yield signIn({
                variables: {
                    "username": "test1",
                    "password": "test1",
                    "email": "test1@gmail.com",
                }
            });
            console.log(i.data);
        }))();
        exceutedSideEffect.current = true;
    }, []);
}
exports.default = useSignIn;
