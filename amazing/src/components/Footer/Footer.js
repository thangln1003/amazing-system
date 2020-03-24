import React from 'react';
import { Container } from 'react-bootstrap';

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
					&copy; {1900 + new Date().getYear()}{' '}
					<a href="https://www.creative-tim.com?ref=lbdpr-footer" target="_blank" rel="noopener noreferrer">
						Creative Tim
					</a>
					, made with <i className="fa fa-heart heart" /> for a better web
				</p>
			</Container>
		</footer>
	);
};

export default Footer;