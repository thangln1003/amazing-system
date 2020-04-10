import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const expandable = { expandedRowRender: (record) => <p>{record.description}</p> };
const pagination = { position: ['topRight', 'bottomRight'] };
const footer = () => 'Here is footer';

const AntTable = (props) => {
  const { columns, dataSource, loading, rowKey, ...rest } = props;
  const [state] = useState({
    bordered: true,
    pagination,
    size: 'small',
    expandable: rest.expandable ? expandable : undefined,
    title: rest.title ? rest.title : undefined,
    showHeader: true,
    footer,
    rowSelection: {},
    hasData: dataSource ?? false,
    tableLayout: undefined,
  });

  return (
    <Table
      rowKey={rowKey}
      loading={loading}
      dataSource={state.hasData ? dataSource : null}
      columns={columns}
      {...state}
      {...rest}
    />
  );
};

export default AntTable;
