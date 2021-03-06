import React, { useState, useEffect } from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { Table, Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const expandable = { expandedRowRender: (record) => <p>{record.description}</p> };

const Title = (props) => {
  const { totalCount } = props;

  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle id="dropdown-actions" size="sm" className="btn-fill" disabled={!totalCount}>
        <i className="fa fa-download"></i>Export{' '}
      </Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
        <Dropdown.Item bsPrefix="dropdown-item has-icon" as="button" onClick={() => alert('Export to Excel')}>
          <i className="fa fa-file-excel-o text-success"></i>Export to Excel
        </Dropdown.Item>
        <Dropdown.Item bsPrefix="dropdown-item has-icon" as="button" onClick={() => alert('Export to PDF')}>
          <i className="fa fa-file-pdf-o text-danger"></i>Export to PDF
        </Dropdown.Item>
        <Dropdown.Item bsPrefix="dropdown-item has-icon" as="button" onClick={() => alert('Export to CSV')}>
          <i className="fa fa-file-code-o"></i>Export to CSV
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Footer = (props) => {
  const { current, pageSize, totalCount, pageData } = props;
  const pageIndex = current - 1;
  const pageCount = pageData.length;

  return `Showing ${pageIndex * pageSize + 1} to ${
    pageCount < pageSize ? totalCount : pageSize * (pageIndex + 1)
  } of ${totalCount} entities`;
};

const AntTable = (props) => {
  const { columns, dataSource, loading, rowKey, ...rest } = props;
  const [data, setData] = useState({
    current: 1,
    pageSize: 10,
    totalCount: 0,
  });

  const [state, setState] = useState({
    bordered: true,
    // pagination,
    size: 'small',
    expandable: rest.expandable ? expandable : undefined,
    // title: rest.title ? rest.title : undefined,
    showHeader: true,
    rowSelection: {},
    hasData: dataSource ?? false,
    tableLayout: undefined,
  });

  useEffect(() => {
    setData({
      ...data,
      totalCount: dataSource ? dataSource.length : 0,
    });
  }, [dataSource]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);

    setData((state) => {
      return {
        current: pagination.current,
        pageSize: pagination.pageSize,
        totalCount: extra.currentDataSource.length,
      };
    });
  };

  return (
    <Table
      rowKey={rowKey}
      loading={loading}
      dataSource={state.hasData ? dataSource : null}
      dataSource={dataSource}
      columns={columns}
      onChange={onChange}
      title={() => Title({ ...data })}
      footer={(pageData) => Footer({ pageData, ...data })}
      {...state}
      {...rest}
    />
  );
};

export default AntTable;
