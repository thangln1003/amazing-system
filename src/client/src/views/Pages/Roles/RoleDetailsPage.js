import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Button from '@core/components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from 'store/actions';

const RoleDetailsPage = (props) => {
  const dispatch = useDispatch();
  const role = useSelector(({ gus }) => gus.role.data);
  const { name } = props.match.params;

  useEffect(() => {
    dispatch(Actions.getRole(name));
  }, [dispatch, name]);

  const deleteHandler = () => {
    dispatch(Actions.openDialog({ headerTitle: 'Delete Role' }));
  };

  if (!role || (role && name !== role.name)) {
    return 'Loading';
  }

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
                    <Button fill variant="danger" size="sm" type="button" onClick={deleteHandler}>
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
                    <p>{role.name}</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Role Description
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>{role.description}</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Created Date
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>{role.createdAt}</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Created By
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>{role.createdBy}</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Updated Date
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>{role.updatedAt}</p>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Updated By
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <p>{role.updatedBy}</p>
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
