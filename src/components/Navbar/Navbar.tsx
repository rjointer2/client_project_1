
// next
import Link from 'next/link';

// react
import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

// styles
import Navnar from 'react-bootstrap/Navbar';


export default function Navbar() {
  return (
    <Navnar bg="light" expand="lg" >
      <Container>
        <Navnar.Brand href="#home">Logo</Navnar.Brand>
        <Navnar.Toggle aria-controls="basic-navbar-nav" />
        <Navnar.Collapse id="basic-navbar-nav" style={{  
          paddingLeft: '70%'
        }} >
          <Nav className="me-auto">
            <Nav.Link href="/signin" style={{ width: '80px' }} >Sign In</Nav.Link>
            <Nav.Link href="/signup" style={{ width: '80px' }} >Sign Up</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navnar.Collapse>
      </Container>
    </Navnar>
  )
}
