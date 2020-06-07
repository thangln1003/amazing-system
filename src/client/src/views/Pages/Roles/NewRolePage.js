import React from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import Button from '@core/components/CustomButton';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Actions from 'store/actions';

const NewRolePage = (props) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('*Role Name is required'),
  });

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>New Role</Card.Title>
              <Formik
                initialValues={{ name: '', description: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setStatus, setSubmitting, resetForm, setErrors }) => {
                  try {
                    setSubmitting(true);

                    dispatch(Actions.createRole(values));

                    resetForm();
                    setStatus({ success: true });
                    setSubmitting(false);
                  } catch (err) {
                    setStatus({ success: false });
                    setSubmitting(false);
                    setErrors({ submit: err.message });
                  }
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <Form id="frmNewRole" noValidate onSubmit={handleSubmit}>
                    <Form.Group as={Row}>
                      <Form.Label column lg={1} md={2}>
                        Role Name <span className="star">*</span>
                      </Form.Label>
                      <Col lg={2} md={2}>
                        <FormControl
                          autoComplete="off"
                          size="sm"
                          type="text"
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column lg={1} md={2}>
                        Description
                      </Form.Label>
                      <Col lg={2} md={2}>
                        <FormControl
                          autoComplete="off"
                          size="sm"
                          type="text"
                          name="description"
                          onChange={handleChange}
                          value={values.description}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Col lg={2} md={2}>
                        <Button fill variant="info" size="sm" type="submit">
                          Save
                        </Button>
                        <Button variant="default" size="sm" as={Link} to="/admin/roles">
                          Cancel
                        </Button>
                      </Col>
                    </Form.Group>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewRolePage;
