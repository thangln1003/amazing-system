import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, FormControl, Radio } from 'react-bootstrap';
import Datetime from 'react-datetime';
import ReactTable from '@core/components/Table/ReactTable';
import makeData from '@fake-db/db/makeData';


const StdUI01 = () => {
  const [form, setForm] = useState({ emailError: null, });

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
        width: 50,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        width: 50,
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        disableSortBy: true,
      }
    ],
    []
  );

  const data = React.useMemo(() => makeData(30000), []);
  const initialState = { sortBy: [{ id: 'firstName' }] };

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Form id="frmSearching">
                <Form.Group as={Row}>
                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                  <Form.Label column lg={1}>Label. <span className="star">*</span></Form.Label>
                  <Col md={2}><FormControl autoComplete="off" size="sm" type="text" name="email" /></Col>

                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1}>Basis Date <span className="star">*</span></Form.Label>
                  <Col md={1}> <Datetime
                    dateFormat="YYYY/MM/DD"
                    timeFormat={false}
                    inputProps={{ placeholder: 'From Date' }}
                    defaultValue={new Date()}
                  />
                  </Col>
                  <Col md={1}>
                    <Datetime
                      dateFormat="YYYY/MM/DD"
                      timeFormat={false}
                      inputProps={{ placeholder: 'To Date' }}
                      defaultValue={new Date()}
                    />
                  </Col>


                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>6-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>6-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>8-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>8-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>3-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>9-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>9-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>3-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>4-md</legend>
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StdUI01;
