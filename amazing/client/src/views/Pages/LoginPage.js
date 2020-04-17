import React from 'react';
import { Card, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '@core/components/CustomButton/CustomButton';
import Checkbox from '@core/components/CustomCheckbox/CustomCheckbox';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Divider } from 'antd';
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  // Schema for yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('*User ID is required')
      .min(6, '*User ID must be greater than 5 characters')
      .max(100, '*User ID must be less than 100 characters'),
    password: Yup.string().when('username', {
      is: (val) => (val && val.length > 5 ? true : false),
      then: Yup.string()
        .required('*Password is required')
        .min(8, '*Password is too short - should be 8 chars minimum.'),
    }),
  });

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
          <Formik
            initialValues={{ username: '', password: '', rememberMe: true }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              // Simulate submitting to database, shows us values submitted, resets form
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);

                props.history.push('/admin/dashboard');
              }, 500);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Card>
                  <Card.Header className="text-center">Login</Card.Header>
                  <Card.Body>
                    <Form.Group controlId="formUserID">
                      <Form.Label>User ID</Form.Label>
                      <FormControl
                        autoComplete="off"
                        placeholder="Enter User ID"
                        type="text"
                        name="username"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.value}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
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

                    <Form.Group as={Row}>
                      <Col md={6}>
                        <Checkbox
                          id="rememberMe"
                          name="rememberMe"
                          label="Remember me"
                          value={values.value}
                          className={`form-check-input${errors.rememberMe && touched.rememberMe ? ' is-invalid' : ''}`}
                        />
                      </Col>
                      <Col md={6}>
                        <Link to="/auth/forgot-password">Forgot Password?</Link>
                      </Col>
                    </Form.Group>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="info" fill wd type="submit" block disabled={isSubmitting}>
                      Login
                    </Button>
                    <Divider>OR</Divider>
                    <Button variant="primary" fill wd type="button" size="sm" disabled={isSubmitting}>
                      Login with Google
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

export default LoginPage;
