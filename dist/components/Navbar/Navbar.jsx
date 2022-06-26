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
const userResolvers_1 = require("../../@apollo_client/resolvers/userResolvers");
function Navbar() {
    const { data, loading, error } = (0, userResolvers_1.setUserResolver)();
    return (<Navbar_1.default bg="light" expand="lg">
      <react_bootstrap_1.Container>
        <Navbar_1.default.Brand href="#home">Logo</Navbar_1.default.Brand>
        <Navbar_1.default.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar_1.default.Collapse id="basic-navbar-nav" style={{
            paddingLeft: '70%'
        }}>
          <react_bootstrap_1.Nav className="me-auto">
            <react_bootstrap_1.Nav.Link href="/signin" style={{ width: '80px' }}>

            </react_bootstrap_1.Nav.Link>

            <react_bootstrap_1.NavDropdown title="Dropdown" id="basic-nav-dropdown">
  
              <react_bootstrap_1.NavDropdown.Item href="#action/3.3">View Ranking</react_bootstrap_1.NavDropdown.Item>
              <react_bootstrap_1.NavDropdown.Item href="#action/3.3">View Wiki</react_bootstrap_1.NavDropdown.Item>
            </react_bootstrap_1.NavDropdown>
        </react_bootstrap_1.Nav>
      </Navbar_1.default.Collapse>
      </react_bootstrap_1.Container>
    </Navbar_1.default>);
}
exports.default = Navbar;
