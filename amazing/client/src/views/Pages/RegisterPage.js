import React from 'react';
import { Card, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '@core/components/CustomButton/CustomButton';
import Checkbox from '@core/components/CustomCheckbox/CustomCheckbox';
import * as Yup from 'yup';
import { Formik } from 'formik';

const RegisterPage = (props) => {
  // Schema for yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('*Email is required')
      .email('*Must be a valid email address')
      .max(100, '*Email must be less than 100 characters'),
    password: Yup.string().when('email', {
      is: (val) => (val && val.length > 5 ? true : false),
      then: Yup.string().required('*Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
    }),
  });

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 6 }} sm={{ span: 8, offset: 4 }}>
          <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
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
                        <Form.Group controlId="formPassword">
                          <Form.Label>First Name</Form.Label>
                          <FormControl
                            autoComplete="off"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.value}
                            isInvalid={!!errors.password}
                          />
                          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="formPassword">
                          <Form.Label>Last Name</Form.Label>
                          <FormControl
                            autoComplete="off"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.value}
                            isInvalid={!!errors.password}
                          />
                          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                          <Form.Group controlId="formPassword">
                            <Form.Label>Register ID</Form.Label>
                            <FormControl
                              autoComplete="off"
                              placeholder="Password"
                              type="password"
                              name="password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.value}
                              isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
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
                            value={values.value}
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
