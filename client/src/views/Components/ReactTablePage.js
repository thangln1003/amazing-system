import React from 'react';
import ReactTable from '@core/components/Table/ReactTable';
import makeData from '@fake-db/db/makeData';
import { Card } from 'react-bootstrap';

const ReactTablePage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'no',
        width: 30,
      },
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
        align: 'right',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        width: 50,
        align: 'right',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        disableSortBy: true,
      }
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
