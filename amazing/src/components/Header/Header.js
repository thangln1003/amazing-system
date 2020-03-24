import React from 'react';
import { Navbar } from 'react-bootstrap';

import NavbarLinks from './NavbarLinks';

const Header = () => {
	return (
		<Navbar className='navbar-default' expand="lg">
			<Navbar.Brand href="#home">Amazing</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
				<NavbarLinks />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
