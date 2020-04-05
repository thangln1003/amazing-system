import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import NavbarLinks from './NavbarLinks';

const AuthHeader = () => {
  return (
    <Navbar collapseOnSelect className="navbar-primary navbar-transparent navbar-absolute" expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">Amazing System</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
          <Nav className="justify-content-start"></Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/dashboard">
              <i className="fa fa-th-list" />
              <p>Dashboard</p>
            </Nav.Link>
            <Nav.Link href="/auth/login">
              <i className="fa fa-drivers-license-o" />
              <p>Login</p>
            </Nav.Link>
            <Nav.Link href="/auth/register">
              <i className="fa fa-user-circle-o" />
              <p>Register</p>
            </Nav.Link>
            <Nav.Link href="/auth/lock-screen">
              <i className="fa fa-lock" />
              <p>Lock Screen</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthHeader;
