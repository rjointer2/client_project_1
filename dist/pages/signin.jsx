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
// apollo client
const client_1 = require("@apollo/client");
const userMutation_1 = require("../@apollo_client/mutations/userMutation");
const react_1 = require("react");
const Navbar_1 = __importDefault(require("../components/Navbar/Navbar"));
const SignIn = () => {
    const [signIn] = (0, client_1.useMutation)(userMutation_1.SIGNIN);
    (0, react_1.useEffect)(() => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const i = yield signIn({
                variables: {
                    "username": "test1",
                    "password": "test1",
                    "email": "test1@gmail.com",
                }
            });
            console.log(i.data);
        }))();
    }, []);
    return (<div>
        <Navbar_1.default />
      </div>);
};
exports.default = SignIn;
/*
<form>
          <label>Username</label>
          <input value={""} name="username" onChange={() => {}} />
          <label>Password</label>
          <input value={""} name="password" onChange={() => {}} />
          <label>Confirm Password</label>
          <input value={""} name="confirmpassword" onChange={() => {}} />
          <label>Email</label>
          <input value={""} name="password" onChange={() => {}} />
          <Link href="/signup">
            <a>Don't Have a Account? Sign Up Today!</a>
          </Link>
        </form>

*/ 
