
// next
import Link from 'next/link';

// react
import React, { useEffect } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

// styles
import Navnar from 'react-bootstrap/Navbar';
import { useGlobalState } from '../../hooks/globalStateHook';

// hooks
import { setUserResolver } from '../../@apollo_client/resolvers/userResolvers';
import cache from '../../@apollo_client/configs/cache';


export default function Navbar() {

  const { dispatch } = useGlobalState();
  dispatch()


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

            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  
              <NavDropdown.Item href="#action/3.3">View Ranking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">View Wiki</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navnar.Collapse>
      </Container>
    </Navnar>
  )
}
