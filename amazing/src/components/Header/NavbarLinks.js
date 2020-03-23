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
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			<Nav className="justify-content-end">
				<Nav.Link href="#account">Account</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#">Logout</Nav.Link>
			</Nav>
		</>
	);
};

export default NavbarLinks;
