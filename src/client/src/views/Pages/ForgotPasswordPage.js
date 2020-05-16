import React from 'react';
import { Card, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '@core/components/CustomButton/CustomButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from "react-router-dom";

const ForgotPasswordPage = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('*Email is required')
      .email('*Must be a valid email address')
      .max(100, '*Email must be less than 100 characters'),
  });

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
          <Formik
            initialValues={{ email: '' }}
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
                  <Card.Header className="text-center">Recover Your Password</Card.Header>
                  <Card.Body>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email*</Form.Label>
                      <FormControl
                        autoComplete="off"
                        placeholder="Enter your Email"
                        type="text"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="info" fill wd type="submit" block disabled={isSubmitting}>
                      Send Reset Link
                    </Button>
                    <Link to="/login">Go back to login</Link>
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

export default ForgotPasswordPage;
