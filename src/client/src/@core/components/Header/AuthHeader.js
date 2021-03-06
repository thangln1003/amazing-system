import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      className="navbar-primary navbar-transparent navbar-absolute navbar navbar-inverse"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/admin/dashboard">Amazing System</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
          <Nav className="justify-content-start"></Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/admin/dashboard">
              <i className="fa fa-th-list" />
              <p>Dashboard</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/auth/login">
              <i className="fa fa-drivers-license-o" />
              <p>Login</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/auth/register">
              <i className="fa fa-user-circle-o" />
              <p>Register</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/auth/lock-screen">
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
