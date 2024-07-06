import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table: React.FC = () => {
  return (
    <div className="max-w-[1400px] w-[95%] px-10 mx-auto">
      <div className="mx-auto p-1">
        <h2 className="text-2xl font-medium mt-10 mb-7">Department List</h2>
        <div className=" overflow-x-auto">
          <table className="w-full items-center space-y-5 bg-white">
            <TableHead />
            <div className="my-4" />
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
