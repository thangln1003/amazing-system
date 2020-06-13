import React, { useCallback, useState } from 'react';
import { Container, Row, Col, Card, Form, FormControl} from 'react-bootstrap';
import Datetime from 'react-datetime';
import ReactTable from '@core/components/Table/ReactTable';
import Button from '@core/components/CustomButton/CustomButton';

import axios from 'axios';

const Layout001 = () => {
  const [form] = useState({
    //emailError: null,
  });

  const [loading, setLoading] = useState(false);

  const showAlert = (data) => {
    
  };

  const alertOption = {
    title : 'Alert Popup',
    message : 'Hello Cu',
    button:[
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      },
    ],
    childrenElement: () => <div />,
    customUI: ({ onClose }) => <div>Custom UI</div>,
    closeOnEscape: true,
    closeOnClickOutside: true,
    willUnmount: () => {},
    afterClose: () => {}
  }

  confirmAlert(alertOption);

  const editEvent = (dataItem) => {
    alert('Edit event');
    console.log(dataItem);
  };

  const deleteEvent = (dataItem) => {
    alert('Delete event');
    console.log(dataItem);
  };

  const doConfirmEvent = (dataItem) => {
    alert('Confirm event');
    console.log(dataItem);
  };

  const doCancelEvent = (dataItem) => {
    alert('Cancel event');
    console.log(dataItem);
  };

  const doExecuteEvent = (dataItem) => {
    alert('Execute event');
    console.log(dataItem);
  };

  const doSettelEvent = (dataItem) => {
    alert('Settle event');
    console.log(dataItem);
  };

  const doRevertEvent = (dataItem) => {
    alert('Revert Settle event');
    console.log(dataItem);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'no',
        width: 50,
      },
      {
        Header: 'Contact NO',
        accessor: 'contactNo',
      },
      {
        Header: 'Contact Title',
        accessor: 'contactTitle',
      },
      {
        Header: 'Biz Partner',
        accessor: 'bizPartner',
      },
      {
        Header: 'Personal In Charge',
        accessor: 'poc',
      },
      {
        Header: 'Car Plate',
        accessor: 'carPlate',
      },
      {
        Header: 'Contract Status',
        accessor: 'contractStatus',
      },
      {
        Header: 'Contracted By',
        accessor: 'contractedBy',
      },
      {
        Header: 'Effect From',
        accessor: 'effectFrom',
        dateFormat: 'YYYY/MM/DD hh:mm:ss',
      },
      {
        Header: 'Effect To',
        accessor: 'effectTo',
        dateFormat: 'YYYY/MM/DD hh:mm:ss',
      },
    ],
    []
  );

  const initialState = { sortBy: [{ id: 'contactNo' }] };
  const [data, setData] = useState([]);

  const fectDateHandler = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      const request = axios.get('/api/carRentals');
      request.then((response) => {
        const data = response.data;
        setData(data);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Form id="frmSearching">
                
                <Form.Group as={Row}>
                  <Form.Label className="col-lg-0-7" column md={2}>
                    Contact NO. <span className="star">*</span>
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email"  />
                    {form.emailError}
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label className="col-lg-0-7" column md={2}>
                    Contact Title <span className="star">*</span>
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="email" />
                    {form.emailError}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label className="col-lg-0-7" column md={2}></Form.Label>
                  <Col lg={2} md={2}>
                    <Button fill variant="primary"  size="sm" onClick={fectDateHandler}><i className="fa fa-search"></i></Button>{' '}
                    <Button fill variant="primary"  size="sm">Advanced Search</Button>{' '}
                    <Button fill variant="primary"  size="sm">Create</Button>{' '}
                    <Button fill variant="primary"  size="sm">Save</Button>{' '}
                    <Button fill variant="danger"   size="sm">Del</Button>{' '}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="align-items-center">
                  <Form.Label className="col-lg-0-7" column md={2}></Form.Label>
                  <Col lg={2} md={2}>
                    <Button fill variant="primary"  size="sm" onClick={editEvent}>Act 01</Button>{' '}
                    <Button fill variant="primary"  size="sm" onClick={editEvent}>Act 02</Button>{' '}
                    <Button fill variant="primary"  size="sm" onClick={editEvent}>Act 03</Button>{' '}
                    <Button fill variant="primary"  size="sm" onClick={editEvent}>Act 04</Button>{' '}
                    <Button fill variant="primary"  size="sm" onClick={confirmAlert}>Act 05</Button>{' '}
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
              <ReactTable
                columns={columns}
                data={data}
                initialState={initialState}
                events={{ editEvent, deleteEvent }}
                loading={loading}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout001;
