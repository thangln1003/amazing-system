import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const NavbarLinks = () => {
  const notification = (
    <div>
      <i className="fa fa-globe" />
      <b className="caret" />
      <span className="notification">5</span>
      <p className="hidden-lg hidden-md">Notification</p>
    </div>
  );

  return (
    <>
      <Nav className="justify-content-start">
        <Nav.Link href="dashboard">Dashboard</Nav.Link>
        <Nav.Link href="typography">Typography</Nav.Link>
        <NavDropdown alignRight title="Dropdown" id="basic-nav-dropdown1">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="justify-content-end">
        <NavDropdown
          alignRight
          title={
            <div>
              <i className="fa fa-bell-o" />
              <span className="notification">5</span>
              <p className="d-md-none d-lg-none">
                Notifications
                <b className="caret" />
              </p>
            </div>
          }
          id="basic-nav-dropdown2"
          bsPrefix="dropdown-with-icons dropdown"
        >
          <NavDropdown.Item href="#action/2.1">
            Notification 1
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/2.2">
            Notification 2
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/2.3">
            Notification 3
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/2.4">
            Notification 4
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/2.5">
            Another notifications
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          alignRight
          title={
            <div>
              <i className="fa fa-list" />
              <p className="d-md-none d-lg-none">
                More
                <b className="caret" />
              </p>
            </div>
          }
          id="basic-nav-dropdown3"
          bsPrefix="dropdown-with-icons dropdown"
        >
          <NavDropdown.Item disabled href="#action/3.1">
            <i className="pe-7s-mail" />
            Message
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            <i className="pe-7s-help1" />
            Help Center
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            <i className="pe-7s-tools" />
            Settings
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            <i className="pe-7s-lock" />
            Lock Screen
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">
            <div className="text-danger">
              <i className="pe-7s-close-circle" /> Log out
            </div>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default NavbarLinks;
