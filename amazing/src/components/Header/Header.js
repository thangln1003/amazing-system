import React from 'react';
import { Navbar } from 'react-bootstrap';

import NavbarLinks from './NavbarLinks';

const Header = () => {
	return (
		<Navbar className='navbar-default' expand="lg">
			<Navbar.Brand href="#home">Amazing System</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse id="basic-navbar-nav">
				<NavbarLinks />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
