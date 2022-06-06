"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// apollo client
const Navbar_1 = __importDefault(require("../components/Navbar/Navbar"));
const react_bootstrap_1 = require("react-bootstrap");
const SignIn = () => {
    //const { submitHandler } = useUserSessionHook('signUp');
    return (<div>
        <Navbar_1.default />
        <react_bootstrap_1.Form onSubmit={() => { }}>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="username">
          <react_bootstrap_1.Form.Label>Username</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="name" placeholder="Please Enter Email"/>
          <react_bootstrap_1.Form.Text className="text-muted">
            
          </react_bootstrap_1.Form.Text>
        </react_bootstrap_1.Form.Group>

        <react_bootstrap_1.Form.Group className="mb-3" controlId="password">
          <react_bootstrap_1.Form.Label>Password</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="password" placeholder="Password"/>
        </react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicCheckbox">
        </react_bootstrap_1.Form.Group>
        
        <react_bootstrap_1.Form.Group className="mb-3" controlId="confirmpassword">
          <react_bootstrap_1.Form.Label>Confirm Password</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="password" placeholder="Confirm Password"/>
        </react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicCheckbox">
        </react_bootstrap_1.Form.Group>

        <react_bootstrap_1.Form.Group className="mb-3" controlId="email">
          <react_bootstrap_1.Form.Label>Email</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="email" placeholder="Email"/>
        </react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicCheckbox">
        </react_bootstrap_1.Form.Group>

        <react_bootstrap_1.Button variant="primary">Submit</react_bootstrap_1.Button>
      </react_bootstrap_1.Form>
      </div>);
};
exports.default = SignIn;
