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
					id="basic-nav-dropdown"
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
