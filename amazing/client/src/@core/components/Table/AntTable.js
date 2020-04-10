import React, { useState } from 'react';
import { Table } from 'antd';

const expandable = { expandedRowRender: (record) => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'both' };

const AntTable = (props) => {
  const { columns, dataSource, loading, rowKey, ...rest } = props;

  const [state] = useState({
    bordered: true,
    pagination,
    size: 'small',
    expandable: rest.expandable ? expandable : undefined,
    title: undefined,
    showHeader,
    footer: rest.footer ? footer : undefined,
    rowSelection: {},
    scroll: undefined,
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
