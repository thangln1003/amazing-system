import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = (props) => {
  const { transparent, fluid } = props;

  return (
    <footer className={'footer' + (transparent !== undefined ? ' footer-transparent' : '')}>
      <Container fluid={fluid !== undefined ? true : false}>
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
          <a href="http://expertseeking.com" target="_blank" rel="noopener noreferrer">
            Amazing Team
          </a>
          , made with <i className="fa fa-heart heart" /> for a better web
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
