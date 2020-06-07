import React, { useState, useCallback, useRef } from 'react';
import { Container, Row, Col, Card, Form, FormControl } from 'react-bootstrap';
import _ from '@lodash';
import Moment from 'react-moment';
import AntTable from '@core/components/Table/AntTable';
import CoreUtils from '@core/utils';
import Button from '@core/components/CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import * as Actions from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const RolesPage = (props) => {
  const dispatch = useDispatch();
  const roles = useSelector(({ gus }) => gus.roles);
  const [setPage] = useState({
    current: 1,
    pageSize: 10,
  });

  const debounceFetchHandler = _.debounce((value) => {
    dispatch(Actions.isLoading(true));
    dispatch(Actions.fetchRoles(value));
  }, 200);

  const submitDataHandler = useCallback(
    (e) => {
      const form = e.currentTarget;

      e.preventDefault();
      debounceFetchHandler(form['name'].value);
    },
    [debounceFetchHandler]
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
      title: 'Role description',
      // width: 150,
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      defaultSortOrder: 'ascend',
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Created date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 300,
      render: (value) => {
        return <Moment format="YYYY/MM/DD hh:mm:ss">{value}</Moment>;
      },
    },
    {
      title: 'Updated date',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 300,
      render: (value) => {
<<<<<<< HEAD
        console.log(value);
        return <Moment format="YYYY/MM/DD hh:mm:ss">{value}</Moment>;
=======
        return <Moment format="DD/MM/YYYY hh:mm:ss">{value}</Moment>;
>>>>>>> 8085ea52a5b8e621876e91a0c44d11b0c73c9b06
      },
    },
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
              <Card.Title>
                <Row>
                  <Col>Roles</Col>
                  <Col className="d-flex justify-content-end">
                    <Button fill variant="info" size="sm" type="button" as={Link} to="/admin/roles/new">
                      Create Role
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              <Form id="frmSearching" noValidate onSubmit={submitDataHandler}>
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
                dataSource={roles.data}
                scroll={{ x: 1500, y: 500 }}
                loading={roles.loading}
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
