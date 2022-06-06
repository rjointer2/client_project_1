"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// react 
const react_1 = require("react");
// components
const Navbar_1 = __importDefault(require("../components/Navbar/Navbar"));
const SignIn_1 = __importDefault(require("../components/SignIn/SignIn"));
const SignUp = () => {
    (0, react_1.useEffect)(() => {
        console.log('rerendered!');
    });
    return (<div>
      <Navbar_1.default />
      <SignIn_1.default />
    </div>);
};
exports.default = SignUp;
