import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import NavbarLinks from './NavbarLinks';

const AuthHeader = () => {
  return (
    <Navbar className="navbar-primary navbar-transparent navbar-absolute" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Amazing</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
          <NavbarLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthHeader;
