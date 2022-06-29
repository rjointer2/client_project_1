"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// react
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
// styles
const Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
// hooks
const useUser_1 = require("../../hooks/useUser");
function Navbar() {
    const { data, loading, error } = (0, useUser_1.useUser)();
    return (<Navbar_1.default bg="light" expand="lg">
      <react_bootstrap_1.Container>
        <Navbar_1.default.Brand href="#home">Logo</Navbar_1.default.Brand>
        <Navbar_1.default.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar_1.default.Collapse id="basic-navbar-nav" style={{
            paddingLeft: '70%'
        }}>
          <react_bootstrap_1.Nav className="me-auto">
            <react_bootstrap_1.Nav.Link href="/signin" style={{ width: '80px' }}>
              Sign In
            </react_bootstrap_1.Nav.Link>
            <react_bootstrap_1.Nav.Link href="/signup" style={{ width: '80px' }}>
              Sign Up
            </react_bootstrap_1.Nav.Link>

            <react_bootstrap_1.NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <react_bootstrap_1.NavDropdown.Item href="#action/3.3">View Ranking</react_bootstrap_1.NavDropdown.Item>
              <react_bootstrap_1.NavDropdown.Item href="#action/3.3">View Wiki</react_bootstrap_1.NavDropdown.Item>
              {(data === null || data === void 0 ? void 0 : data.me) ? <>
                  <react_bootstrap_1.NavDropdown.Item href="#action/3.3">Create Room</react_bootstrap_1.NavDropdown.Item>
                  <react_bootstrap_1.NavDropdown.Item href="#action/3.3">Find Room</react_bootstrap_1.NavDropdown.Item>
                </> :
            null}
            </react_bootstrap_1.NavDropdown>
        </react_bootstrap_1.Nav>
      </Navbar_1.default.Collapse>
      </react_bootstrap_1.Container>
    </Navbar_1.default>);
}
exports.default = Navbar;
