import React from 'react';
import ReactTable from '../../components/Table/ReactTable';
import makeData from '../../components/Table/makeData';
import { Card } from 'react-bootstrap';

const ReactTablePage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        flexGrow: 4
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        flexGrow: 4
      },
      {
        Header: 'Age',
        accessor: 'age'
      },
      {
        Header: 'Visits',
        accessor: 'visits'
      },
      {
        Header: 'Status',
        accessor: 'status',
        flexGrow: 2
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        disableSortBy: true,
        flexGrow: 2
      },
      {
        Header: 'Actionss',
        disableSortBy: true,
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(30000), []);
  const initialState = { sortBy: [{ id: 'firstName' }] };

  return (
    <Card>
      <Card.Body>
        <ReactTable columns={columns} data={data} initialState={initialState} />
      </Card.Body>
    </Card>
  );
};

export default ReactTablePage;
