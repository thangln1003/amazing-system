import React from 'react';
import { Card, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '@core/components/CustomButton/CustomButton';
import * as Yup from 'yup';
import { Formik } from 'formik';

const RegisterPage = (props) => {
  // Schema for yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('*Email is required')
      .email('*Must be a valid email address')
      .max(100, '*Email must be less than 100 characters'),
  });

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 6 }} sm={{ span: 8, offset: 4 }}>
          <Formik
            initialValues={{ firstName: '', lastName: '', registerId: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              // Simulate submitting to database, shows us values submitted, resets form
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);

                props.history.push('/dashboard');
              }, 500);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Card>
                  <Card.Header className="text-center">Registration</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="formFirstName">
                          <Form.Label>First Name</Form.Label>
                          <FormControl
                            autoComplete="off"
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            isInvalid={!!errors.firstName}
                          />
                          <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="formLastName">
                          <Form.Label>Last Name</Form.Label>
                          <FormControl
                            autoComplete="off"
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            isInvalid={!!errors.lastName}
                          />
                          <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="formRegisterId">
                          <Form.Label>Register ID</Form.Label>
                          <FormControl
                            autoComplete="off"
                            placeholder="Register ID"
                            type="text"
                            name="registerId"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.registerId}
                            isInvalid={!!errors.registerId}
                          />
                          <Form.Control.Feedback type="invalid">{errors.registerId}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="formEmail">
                          <Form.Label>Email address</Form.Label>
                          <FormControl
                            autoComplete="off"
                            placeholder="Enter email"
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>

                  <Card.Footer className="text-center">
                    <Button variant="info" fill wd type="submit" disabled={isSubmitting}>
                      Login
                    </Button>
                  </Card.Footer>
                </Card>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
