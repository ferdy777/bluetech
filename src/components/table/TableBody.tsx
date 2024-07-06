import React from "react";
import { useTableContext } from "../../context/TableContext";
import TableRowItem from "./TableRow";
// import { TableContext } from "../../context/TableContext";

const TableBody = () => {
  const { data, loading, error } = useTableContext();

  if (loading) {
    return (
      <tbody>
        <tr>
          <td className="px-4 py-2 sm:px-6 text-center">Loading...</td>
        </tr>
      </tbody>
    );
  }

  if (error) {
    return (
      <tbody>
        <tr>
          <td className="px-4 py-2 sm:px-6 text-center text-red-500">
            {error}
          </td>
        </tr>
      </tbody>
    );
  }

  if (!data.length) {
    return (
      <tbody>
        <tr>
          <td className="px-4 py-2 sm:px-6 text-center">No data found</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="text-gray-700 w-full block border rounded-lg">
      {data.map((row, rowIndex) => (
        <TableRowItem index={rowIndex} item={row} key={rowIndex} />
      ))}
    </tbody>
  );
};

export default TableBody;
