import React from "react";
import logo from "../../assets/images/Logo.png";
import nav from "../../assets/images/Nav.png";
import { CiSearch } from "react-icons/ci";
import { FaBellSlash } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useTableContext } from "../../context/TableContext";

const Header = () => {
  const { handleSetSearch, search } = useTableContext();
  return (
    <header className="bg-white p-4 flex justify-between max-w-[1400px] w-[95%] mx-auto items-center">
      <div className="flex items-center gap-10">
        <div className="">
          <img src={logo} alt="Unlimi" className="h-12" />
        </div>
        <div className="flex border items-center px-3 rounded-lg ">
          <CiSearch className="w-5 h-5 text-black" />
          <input
            type="search"
            onChange={handleSetSearch}
            value={search}
            placeholder="Search by products..."
            className="ml-4 p-2 rounded outline-0 "
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FaBellSlash className="text-gray w-5 h-5" />
          <img src={nav} alt="User" className="h-8" />
          <span>heko</span>
          <FaAngleDown className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
