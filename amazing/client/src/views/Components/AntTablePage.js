import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import Datetime from 'react-datetime';
import AntTable from '@core/components/Table/AntTable';
import CoreUtils from '@core/utils';
import Button from '@core/components/CustomButton/CustomButton';

import axios from 'axios';

const AntTablePage = (props) => {
  const [table, setTable] = useState({
    data: [],
    loading: false,
  });

  const columns = React.useMemo(
    () => [
      {
        title: 'Contact No',
        width: 100,
        dataIndex: 'contactNo',
        key: 'contactNo',
        fixed: 'left',
        ellipsis: true,
        sorter: (a, b) => CoreUtils.sorter(a.contactNo, b.contactNo),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Contact Title',
        width: 100,
        dataIndex: 'contactTitle',
        key: 'contactTitle',
        fixed: 'left',
        ellipsis: true,
      },
      {
        title: 'Biz Partner',
        dataIndex: 'bizPartner',
        key: 'bizPartner',
        width: 150,
      },
      {
        title: 'Personal In Charge',
        dataIndex: 'poc',
        key: 'poc',
        width: 150,
      },
      {
        title: 'Car Plate',
        dataIndex: 'carPlate',
        key: 'carPlate',
        width: 150,
      },
      {
        title: 'Contract Status',
        dataIndex: 'contractStatus',
        key: 'contractStatus',
        width: 150,
      },
      {
        title: 'Contracted By',
        dataIndex: 'contractedBy',
        key: 'contractedBy',
        width: 150,
      },
      {
        title: 'Effect From',
        dataIndex: 'effectFrom',
        key: 'effectFrom',
        width: 150,
      },
      {
        title: 'Effect To',
        dataIndex: 'effectTo',
        key: 'effectTo',
        width: 150,
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
      },
    ],
    []
  );

  const fectDateHandler = useCallback(() => {
    setTable({ loading: true });

    setTimeout(() => {
      const request = axios.get('/api/carRentals');
      request.then((response) => {
        const data = response.data;
        setTable({ data: [...data], loading: false });
      });
    }, 1000);
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

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
                    <FormControl autoComplete="off" size="sm" type="text" name="contactNo" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Contact Title <span className="star">*</span>
                  </Form.Label>
                  <Col lg={1} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="contactTitles" />
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
                    <Button fill variant="primary" size="sm" onClick={fectDateHandler}>
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
              <AntTable
                columns={columns}
                rowKey={(record) => record.id}
                dataSource={table.data}
                scroll={{ x: 1500, y: 500 }}
                loading={table.loading}
                onChange={onChange}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AntTablePage;
