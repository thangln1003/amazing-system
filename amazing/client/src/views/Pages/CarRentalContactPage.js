import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import Datetime from 'react-datetime';
import ReactTable from '@core/components/Table/ReactTable';
import makeData from '@core/components/Table/makeData';
import Button from '@core/components/CustomButton/CustomButton';

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

  // const data = React.useMemo(() => makeData(30000), []);
  const initialState = { sortBy: [{ id: 'firstName' }] };
  const [data, setData] = useState([]);

  const fectDateHandler = React.useCallback(() => {
    const data = makeData(30000);
    setData(data);
  });

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Form id="frmSearching">
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Contact NO. <span className="star">*</span>
                  </Form.Label>
                  <Col lg={1} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email" />
                    {form.emailError}
                  </Col>
                  <Form.Label column lg={1} md={2}>
                    Contact NO. <span className="star">*</span>
                  </Form.Label>
                  <Col lg={1} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email" />
                    {form.emailError}
                  </Col>
                  <Form.Label column lg={1} md={2}>
                    Contact NO. <span className="star">*</span>
                  </Form.Label>
                  <Col lg={1} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email" />
                    {form.emailError}
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Contact Title <span className="star">*</span>
                  </Form.Label>
                  <Col lg={1} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email" />
                    {form.emailError}
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Basis Date <span className="star">*</span>
                  </Form.Label>
                  <Col lg={1} md={2}>
                    <Datetime
                      dateFormat="DD/MM/YYYY"
                      timeFormat={false}
                      inputProps={{ placeholder: 'From Date' }}
                      defaultValue={new Date()}
                    />
                  </Col>
                  <span className="d-none d-sm-block">~</span>
                  <Col lg={1} md={2}>
                    <Datetime
                      dateFormat="DD/MM/YYYY"
                      timeFormat={false}
                      inputProps={{ placeholder: 'To Date' }}
                      defaultValue={new Date()}
                    />
                  </Col>
                  <Col md={1}>
                    <Button simple fill wd variant="primary" size="sm" onClick={fectDateHandler}>
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
