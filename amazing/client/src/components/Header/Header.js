import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import NavbarLinks from './NavbarLinks';

const Header = () => {
  return (
    <Navbar className="navbar-default" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/dashboard">Amazing</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
          <NavbarLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
