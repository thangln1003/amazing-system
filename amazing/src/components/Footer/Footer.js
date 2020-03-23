import React from 'react';
import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="footer">
			<Container fluid>
				<nav className="pull-left">
					<ul>
						<li>
							<a href="#pablo">Home</a>
						</li>
						<li>
							<a href="#pablo">Company</a>
						</li>
						<li>
							<a href="#pablo">Portfolio</a>
						</li>
						<li>
							<a href="#pablo">Blog</a>
						</li>
					</ul>
				</nav>
				<p className="copyright pull-right">
					&copy; {new Date().getFullYear()}{' '}
					<a href="http://www.creative-tim.com?ref=lbr-footer">Creative Tim</a>, made with love for a better
					web
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
