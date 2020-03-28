import React from 'react';
import ReactTable from '../../components/Table/ReactTable';
import makeData from '../../components/Table/makeData';
import { Card } from 'react-bootstrap';

const ReactTablePage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(30000), []);

  return (
    <Card>
      <Card.Body>
        <ReactTable columns={columns} data={data} />
      </Card.Body>
    </Card>
  );
};

export default ReactTablePage;
