"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
// react
const client_1 = require("@apollo/client");
const react_1 = __importStar(require("react"));
// styles
const react_bootstrap_1 = require("react-bootstrap");
// apollo client
const userMutation_1 = require("../../@apollo_client/mutations/userMutation");
// components
const Spinner_1 = __importDefault(require("../Spinner/Spinner"));
function SignUp() {
    const executedRender = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(() => {
        executedRender.current++;
        console.log(executedRender.current);
    });
    const [validation, setValidation] = (0, react_1.useState)({ isInValid: false, isValid: false });
    const [form, setForm] = (0, react_1.useState)({
        username: "", password: "", confirmPassword: "", email: ""
    });
    const [createUser, { data, loading, error }] = (0, client_1.useMutation)(userMutation_1.SIGNUP);
    const eventHandler = (e) => {
        // this function will fire twice on the browser on the dom load
        // if the user has the password fill in the input fields
        const { name, value } = e.currentTarget;
        setForm(s => { return Object.assign(Object.assign({}, s), { [name]: value }); });
        if (validation.isInValid === false)
            return;
        setValidation(s => {
            return Object.assign(Object.assign({}, s), { isInValid: false, isValid: false });
        });
    };
    const submitHandler = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield createUser({ variables: {
                    "username": form.username,
                    "password": form.password,
                    "confirmPassword": form.confirmPassword,
                    "email": form.email,
                } });
            window.location.replace('/');
        }
        catch (err) {
            setValidation(s => {
                return Object.assign(Object.assign({}, s), { isInValid: true, isValid: false });
            });
        }
    });
    return (<react_bootstrap_1.Form onSubmit={submitHandler}>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="username">
          <react_bootstrap_1.Form.Label>Username</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="name" placeholder="Please Enter Email" name="username" onChange={eventHandler} isInvalid={validation.isInValid} isValid={validation.isValid}/>
          <react_bootstrap_1.Form.Text className="text-muted">
            
          </react_bootstrap_1.Form.Text>
        </react_bootstrap_1.Form.Group>

        <react_bootstrap_1.Form.Group className="mb-3" controlId="password">
          <react_bootstrap_1.Form.Label>Password</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="password" placeholder="Password" name="password" onChange={eventHandler} isInvalid={validation.isInValid} isValid={validation.isValid}/>
        </react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicCheckbox">
        </react_bootstrap_1.Form.Group>
        
        <react_bootstrap_1.Form.Group className="mb-3" controlId="confirmpassword">
          <react_bootstrap_1.Form.Label>Confirm Password</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onChange={eventHandler} isInvalid={validation.isInValid} isValid={validation.isValid}/>
        </react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicCheckbox">
        </react_bootstrap_1.Form.Group>

        <react_bootstrap_1.Form.Group className="mb-3" controlId="email">
          <react_bootstrap_1.Form.Label>Email</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="email" placeholder="Email" name="email" onChange={eventHandler} isInvalid={validation.isInValid} isValid={validation.isValid}/>
        </react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicCheckbox">
        </react_bootstrap_1.Form.Group>

        <div style={{ display: 'flex', flexDirection: "column" }}>
            <br />
            <react_bootstrap_1.Button variant="primary" type="submit" disabled={validation.isInValid} style={{ display: 'flex', justifyContent: 'center' }}>
                {loading ? <Spinner_1.default /> : 'Submit'}
            </react_bootstrap_1.Button>
            <br />
            <react_bootstrap_1.Form.Text className="text-muted" style={{ color: 'red' }}>
                {error ? error.message : ''}
                {data ? data.createUser.message : ''}
            </react_bootstrap_1.Form.Text>
        </div>
      </react_bootstrap_1.Form>);
}
exports.default = SignUp;
