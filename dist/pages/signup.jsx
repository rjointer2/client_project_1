"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// apollo client
const Navbar_1 = __importDefault(require("../components/Navbar/Navbar"));
// components
const SignUp_1 = __importDefault(require("../components/SignUp/SignUp"));
const SignIn = () => {
    return (<div>
        <Navbar_1.default />
        <SignUp_1.default />
      </div>);
};
exports.default = SignIn;
