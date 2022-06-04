"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const SignUp = () => {
    return (<div>
        <form>
          <label>Username</label>
          <input value={""} name="username" onChange={() => { }}/>
          <label>Password</label>
          <input value={""} name="password" onChange={() => { }}/>
          <link_1.default href="/signin">
            <a>Have a Account? Sign In Now!</a>
          </link_1.default>
        </form>
      </div>);
};
exports.default = SignUp;
