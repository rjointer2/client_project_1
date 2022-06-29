
// next
import Link from 'next/link';

// react
import React, { useEffect } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

// styles
import Navnar from 'react-bootstrap/Navbar';


// hooks
import {useUser} from '../../hooks/useUser';


export default function Navbar() {

  const { data, loading, error } = useUser();

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
              Sign In
            </Nav.Link>
            <Nav.Link href="/signup" style={{ width: '80px' }} >
              Sign Up
            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">View Ranking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">View Wiki</NavDropdown.Item>
              {
                data?.me ? <>
                  <NavDropdown.Item href="#action/3.3">Create Room</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Find Room</NavDropdown.Item>
                </> :
                null
              }
            </NavDropdown>
        </Nav>
      </Navnar.Collapse>
      </Container>
    </Navnar>
  )
}
