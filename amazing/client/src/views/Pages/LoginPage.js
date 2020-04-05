import React from 'react';
import { Card, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '../../components/CustomButton/CustomButton';
import Checkbox from '../../components/CustomCheckbox/CustomCheckbox';

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
          <form>
            <Card>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <FormControl placeholder="Enter email" type="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <FormControl placeholder="Password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <Checkbox number="1" label="Remember me" />
                </Form.Group>
                <Button variant="info" fill wd size="sm">
                  Login
                </Button>
              </Card.Body>
            </Card>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
