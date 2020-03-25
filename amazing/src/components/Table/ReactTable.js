import React from 'react';
import { Table, Pagination, Row, Col } from 'react-bootstrap';
import { useTable, useGroupBy, useFilters, useSortBy, useExpanded, usePagination } from 'react-table';
import Select from 'react-select';

const ReactTable = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  const pageSizeOptions = [10, 20, 30, 40, 50];
  const totalCount = data.length;

  return (
    <div className="ReactTable">
      <Row>
        <Col md={4}>
          <div className="ReactTable-info--header">
            Show{' '}
            <select
              className="form-control form-control-sm"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {pageSizeOptions.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>{' '}
            entries <em>(in {totalCount} entries)</em>
          </div>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Pagination>
            <Pagination.First onClick={() => gotoPage(0)} disabled={pageIndex === 0} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <input
              className="form-control form-control-sm"
              type="number"
              value={pageIndex + 1 || 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex === pageCount - 1} />
          </Pagination>
        </Col>
      </Row>
      <Table striped bordered hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row>
        <Col md={4}>
          <div className="ReactTable-info">
            Showing {pageSize * pageIndex + 1} to{' '}
            {pageIndex === pageCount - 1 ? totalCount : pageSize * (pageIndex + 1)} of {totalCount} entries
          </div>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Pagination>
            <Pagination.First onClick={() => gotoPage(0)} disabled={pageIndex === 0} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <input
              className="form-control form-control-sm"
              type="number"
              value={pageIndex + 1 || 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex === pageCount - 1} />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default ReactTable;
