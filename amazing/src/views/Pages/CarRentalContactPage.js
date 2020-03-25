import React, { useState } from 'react';
import { Container, Breadcrumb, Row, Col, Card, Form, FormControl } from 'react-bootstrap';

const CarRentalContactPage = () => {
  const [form, setForm] = useState({
    emailError: null,
  });

  return (
    <div className="main-content">
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Breadcrumb 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Car Rental Contact Mgnt</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column lg={1}>
                      Contact NO. <span className="star">*</span>
                    </Form.Label>
                    <Col md={2}>
                      <FormControl
                        autoComplete="off"
                        size="sm"
                        type="text"
                        name="email"
                        onChange={(event) => this.handleEmailChange(event)}
                      />
                      {form.emailError}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column lg={1}>
                      Contact Title <span className="star">*</span>
                    </Form.Label>
                    <Col md={2}>
                      <FormControl
                        size="sm"
                        type="text"
                        name="email"
                        onChange={(event) => this.handleEmailChange(event)}
                      />
                      {form.emailError}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column lg={1}>
                      Basis Date <span className="star">*</span>
                    </Form.Label>
                    <Col md={2}>
                      <FormControl
                        size="sm"
                        type="text"
                        name="email"
                        onChange={(event) => this.handleEmailChange(event)}
                      />
                      {form.emailError}
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarRentalContactPage;
