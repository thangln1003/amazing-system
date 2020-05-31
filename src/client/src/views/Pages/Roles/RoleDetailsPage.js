import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Button from '@core/components/CustomButton';
import { Divider } from 'antd';

const RoleDetailsPage = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col>Summary</Col>
                  <Col className="d-flex justify-content-end">
                    <Button fill variant="danger" size="sm" type="button">
                      Delete Role
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              <Form id="frmRoleDetails">
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Role Name
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>Dev Master</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Role Description
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>Dev Master</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Created Date
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p column lg={2} md={2}>
                      2020-05-03 12:00:00Z
                    </p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Created By
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>system</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Updated Date
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>2020-05-03 12:00:00Z</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Updated By
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>system</p>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RoleDetailsPage;
