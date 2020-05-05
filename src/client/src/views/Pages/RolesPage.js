import React, { useState, useCallback, useRef } from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import Moment from 'react-moment';
import Datetime from 'react-datetime';
import AntTable from '@core/components/Table/AntTable';
import CoreUtils from '@core/utils';
import Button from '@core/components/CustomButton/CustomButton';

import axios from 'axios';

import { Input, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const RolesPage = (props) => {
  const [table, setTable] = useState({
    data: [],
    loading: false,
  });
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
  });

  const fetchDataHandler = useCallback(() => {
    setTable({ loading: true });

    setTimeout(() => {
      const request = axios.get('/api/carRentals');
      request.then((response) => {
        const data = response.data;
        setTable({ data: [...data], loading: false });
      });
    }, 1000);
  }, []);

  const [search, setSearch] = useState({
    searchText: '',
    searchedColumn: '',
  });
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearch({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearch({ searchText: '' });
  };

  const searchInput = useRef(null);
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button onClick={() => handleReset(clearFilters)} size="sm" style={{ width: 90, marginRight: 8 }}>
          Reset
        </Button>
        <Button
          fill
          variant="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          size="sm"
          style={{ width: 90 }}
        >
          <i className="fa fa-search"></i>
          Search
        </Button>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => {
      return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select());
      }
    },
    render: (text) =>
      search.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[search.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Role name',
      width: 150,
      dataIndex: 'roleName',
      key: 'roleName',
      ellipsis: true,
      defaultSortOrder: 'ascend',
      sortDirections: ['ascend', 'descend'],
      sorter: (a, b) => CoreUtils.sorter(a.roleName, b.roleName),
      ...getColumnSearchProps('roleName'),
    },
    {
      title: 'Description',
      width: 150,
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      defaultSortOrder: 'ascend',
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Created date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 150,
      render: (value) => {
        return <Moment format="DD/MM/YYYY hh:mm:ss">{value}</Moment>;
      },
    },
  ];

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
                  <Col lg={2} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="contactNo" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Contact Title <span className="star">*</span>
                  </Form.Label>
                  <Col lg={2} md={2}>
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
                  <Col lg={1} md={2}>
                    <Datetime
                      dateFormat="DD/MM/YYYY"
                      timeFormat={false}
                      inputProps={{ placeholder: 'To Date' }}
                      defaultValue={new Date()}
                    />
                  </Col>
                  <Col md={1}>
                    <Button fill variant="primary" size="sm" onClick={fetchDataHandler}>
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
                pagination={{
                  position: ['topRight', 'bottomRight'],
                  onChange(current, pageSize) {
                    setPage({ current, pageSize });
                  },
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RolesPage;
