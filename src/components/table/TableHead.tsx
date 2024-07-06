import React from "react";

const TableHead = () => {
  return (
    <thead className="bg-blue-50 flex w-full justify-center items-center border rounded-lg">
      <tr className="w-full flex gap-8 items-center justify-between px-4">
        <th className="p-1 w-[20px] text-left ">
          <input type="checkbox" />
        </th>
        <th className="p-1 w-[35px] text-left">S/N</th>
        <th className="p-1 text-left w-[60px]">Image</th>
        <th className=" w-[90px] p-1 text-left">SKU</th>
        <th className="p-1 w-[120px] text-left">Name</th>
        <th className="p-1 flex-1 text-left">Title</th>
        <th className="p-1 flex-1 text-left">Description</th>
        <th className="p-1 w-[60px] text-left">Brand</th>
        <th className="p-1 w-[85px] text-left">CostPrice</th>
        <th className="p-1 w-[75px] text-left">Quantity</th>
        <th className="p-1 w-[60px] text-left">Size</th>
      </tr>
    </thead>
  );
};

export default TableHead;
