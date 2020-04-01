import React from 'react';
import { Table, Pagination, Row, Col } from 'react-bootstrap';
import { useBlockLayout, useTable, useGroupBy, useFilters, useSortBy, useExpanded, usePagination } from 'react-table';

const ReactTable = ({ columns, data, initialState }) => {
  const defaultColumn = React.useMemo(
    () => ({
      width: Math.round(window.innerWidth * 0.1),
    }),
    []
  );

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
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 10, ...initialState },
      disableSortRemove: true,
    },
    // useBlockLayout,
    useSortBy,
    usePagination
  );

  const pageSizeOptions = [10, 20, 30, 40, 50];
  const totalCount = data.length;

  return (
    <div className="ReactTable">
      <Row>
        <Col md={5}>
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
        <Col md={{ span: 4, offset: 3 }}>
          <Pagination>
            <Pagination.First onClick={() => gotoPage(0)} disabled={pageIndex === 0} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <li className="page-item">
              <input
                className="form-control form-control-sm"
                type="number"
                value={pageIndex + 1 || 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
              />
            </li>
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex === pageCount - 1} />
          </Pagination>
        </Col>
      </Row>
      <Table striped bordered hover responsive size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps({ className: 'react-table-row' })}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    className: `react-table-column-flex-grow-${column.flexGrow ?? 1}`,
                    ...column.getSortByToggleProps(),
                  })}
                >
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span
                    className={
                      column.disableSortBy
                        ? ''
                        : column.isSorted
                        ? column.isSortedDesc
                          ? 'fa fa-sort-desc'
                          : 'fa fa-sort-asc'
                        : 'fa fa-sort'
                    }
                  ></span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps({ className: 'react-table-row' })}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        className: `react-table-column-flex-grow-${cell.column.flexGrow ?? 1}`,
                      })}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row>
        <Col md={5}>
          <div className="ReactTable-info">
            Showing {pageSize * pageIndex + 1} to{' '}
            {pageIndex === pageCount - 1 ? totalCount : pageSize * (pageIndex + 1)} of {totalCount} entries
          </div>
        </Col>
        <Col md={{ span: 4, offset: 3 }}>
          <Pagination>
            <Pagination.First onClick={() => gotoPage(0)} disabled={pageIndex === 0} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <li className="page-item">
              <input
                className="form-control form-control-sm"
                type="number"
                value={pageIndex + 1 || 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
              />
            </li>
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex === pageCount - 1} />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default ReactTable;
