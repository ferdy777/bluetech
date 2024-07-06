import React from "react";
import { TableRow } from "../../context/TableContext";

interface Props {
  item: TableRow;
  index: number;
}

const TableRowItem = ({ item, index }: Props) => {
  const {
    Brand,
    CostPrice,
    Description,
    Image,
    Name,
    Quantity,
    SKU,
    Size,
    Title,
  } = item;
  return (
    <tr className="border-b w-full flex gap-8 items-center justify-between px-4">
      <td className=" p-1 w-[20px] text-left">
        <input type="checkbox" />
      </td>
      <td className=" w-[35px] p-1 text-left">{index + 1}</td>
      <td className="p-1 w-[60px] text-left">
        <img src={Image} alt="Product" className="w-13 h-13 " />
      </td>
      <td className="p-1 w-[90px] text-left">{SKU}</td>
      <td className=" text-left w-[120px] p-1">{Name}</td>
      <td className="p-1 flex-1 text-left">{Title}</td>
      <td className="p-1 flex-1 text-left">{Description}</td>
      <td className="p-1 w-[60px] text-left">{Brand}</td>
      <td className="p-1 w-[85px] text-left">{CostPrice}</td>
      <td className="p-1 w-[75px] text-left">{Quantity}</td>
      <td className="p-1 w-[60px] text-left">{Size}</td>
    </tr>
  );
};

export default TableRowItem;
