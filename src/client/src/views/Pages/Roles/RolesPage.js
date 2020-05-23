import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import Moment from 'react-moment';
import AntTable from '@core/components/Table/AntTable';
import CoreUtils from '@core/utils';
import Button from '@core/components/CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import * as Actions from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const RolesPage = (props) => {
  const dispatch = useDispatch();
  const roles = useSelector(({ gus }) => gus.roles.data);

  const [table, setTable] = useState(roles);
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
  });

  const fetchDataHandler = useCallback(
    (event) => {
      event.preventDefault();

      setTable({ loading: true });

      dispatch(Actions.fetchRoles());

      setTable({ loading: false });
    },
    [dispatch]
  );

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
      // width: 150,
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      defaultSortOrder: 'ascend',
      sortDirections: ['ascend', 'descend'],
      sorter: (a, b) => CoreUtils.sorter(a.name, b.name),
      ...getColumnSearchProps('name'),
      render: (text, row) => {
        return <Link to={`/admin/roles/${row.name}`}>{text}</Link>;
      },
    },
    {
      title: 'Description',
      // width: 150,
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
      width: 300,
      render: (value) => {
        return <Moment format="DD/MM/YYYY hh:mm:ss">{value}</Moment>;
      },
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   width: 150,
    //   filters: [
    //     {
    //       text: 'Active',
    //       value: 'Active',
    //     },
    //     {
    //       text: 'Inactive',
    //       value: 'Inactive',
    //     },
    //   ],
    //   align: 'center',
    //   filterMultiple: true,
    //   onFilter: (value, record) => record.status.indexOf(value) === 0,
    //   render: (value) => {
    //     let color = '';
    //     if (value === 'Active') {
    //       color = 'green';
    //     } else {
    //       color = 'volcano';
    //     }
    //     return (
    //       <Tag color={color} key={value}>
    //         {value.toUpperCase()}
    //       </Tag>
    //     );
    //   },
    // },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      align: 'center',
      render: () => <a href="#">action</a>,
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Roles</Card.Title>
              <Form id="frmSearching" noValidate onSubmit={fetchDataHandler}>
                <Form.Group as={Row}>
                  <Form.Label column lg={1} md={2}>
                    Role Name
                  </Form.Label>
                  <Col lg={2} md={2}>
                    <FormControl autoComplete="off" size="sm" type="text" name="name" />
                  </Col>
                  <Col md={2}>
                    <Button fill variant="primary" size="sm" type="submit">
                      <i className="fa fa-search"></i>
                    </Button>
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col md={2}>
                    <Button fill variant="info" size="sm" type="button" as={Link} to="/admin/roles/new">
                      Create Role
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
                dataSource={roles}
                scroll={{ x: 1500, y: 500 }}
                loading={false}
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

// export default withReducer('gus', reducer)(RolesPage);
export default RolesPage;
