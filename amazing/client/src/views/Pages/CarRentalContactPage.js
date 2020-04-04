import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import Datetime from 'react-datetime';
import ReactTable from '../../components/Table/ReactTable';
import Button from '../../components/CustomButton/CustomButton';

import makeData from '../../components/Table/makeData';

const CarRentalContactPage = () => {
  const [form, setForm] = useState({
    emailError: null,
  });

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
      },
    ],
    []
  );

  const initialState = { sortBy: [{ id: 'firstName' }] };
  const [data, setData] = React.useState([]);

  const fetchDataHandler = React.useCallback(() => {
    const data = makeData(30000);
    setData(data);
  });

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column lg={1}>
                    Contact NO. <span className="star">*</span>
                  </Form.Label>
                  <Col md={1}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email" />
                    {form.emailError}
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1}>
                    Contact Title <span className="star">*</span>
                  </Form.Label>
                  <Col md={1}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email" />
                    {form.emailError}
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1}>
                    Basis Date <span className="star">*</span>
                  </Form.Label>
                  <Col md={1}>
                    <Datetime
                      dateFormat="DD/MM/YYYY"
                      timeFormat={false}
                      inputProps={{ placeholder: 'From Date' }}
                      defaultValue={new Date()}
                    />
                  </Col>
                  <Col md={1}>
                    <Datetime
                      dateFormat="DD/MM/YYYY"
                      timeFormat={false}
                      inputProps={{ placeholder: 'To Date' }}
                      defaultValue={new Date()}
                    />
                  </Col>
                  <Col>
                    <Button fill size="sm" onClick={fetchDataHandler}>
                      <i className="fa fa-search"></i>
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>
                <legend>Card Rental Contact Information</legend>
              </Card.Title>
              <ReactTable columns={columns} data={data} initialState={initialState} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CarRentalContactPage;
