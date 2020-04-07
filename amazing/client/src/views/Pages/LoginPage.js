import React from 'react';
import { Card, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '../../components/CustomButton/CustomButton';
import Checkbox from '../../components/CustomCheckbox/CustomCheckbox';
import * as Yup from 'yup';
import { Formik } from 'formik';

const LoginPage = (props) => {
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
        <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
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
                  <Card.Header className="text-center">Login</Card.Header>
                  <Card.Body>
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
                    <Form.Group controlId="formRememberMe">
                      <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        label="Remember me"
                        checked={values.value}
                        className={`form-check-input${errors.rememberMe && touched.rememberMe ? ' is-invalid' : ''}`}
                      />
                    </Form.Group>
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

export default LoginPage;
