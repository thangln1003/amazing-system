import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
            <h1>Login Page</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;