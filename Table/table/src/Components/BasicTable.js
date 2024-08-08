import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";

function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableinstance = useTable({
    columns,
    data,
  }); // Step 3: Step 3: Use the data and columns defined to create a table instance using react-table.

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableinstance; // Step 5: Use the table intance created in step 3 to bring life to the HTML defined in step 4. These are function and arrays.
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => {
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>;
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BasicTable;
