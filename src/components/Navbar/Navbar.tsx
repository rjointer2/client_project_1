
// next
import Link from 'next/link';

// react
import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

// styles
import Navnar from 'react-bootstrap/Navbar';
import { useGlobalState } from '../../hooks/globalStateHook';


export default function Navbar() {

  const { state, dispatch } = useGlobalState();
  const { user } = state;

  return (
    <Navnar bg="light" expand="lg" >
      <Container>
        <Navnar.Brand href="#home">Logo</Navnar.Brand>
        <Navnar.Toggle aria-controls="basic-navbar-nav" />
        <Navnar.Collapse id="basic-navbar-nav" style={{  
          paddingLeft: '70%'
        }} >
          <Nav className="me-auto">
            <Nav.Link href="/signin" style={{ width: '80px' }} >
              { user ? 'Sign Out' : 'Sign in' }
            </Nav.Link>
            { user ? null : 
              <Nav.Link href="/signup" style={{ width: '80px' }} >
                Sign Up
              </Nav.Link> 
            }
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Find A Room</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Create A Room</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">View Ranking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">View Wiki</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navnar.Collapse>
      </Container>
    </Navnar>
  )
}
