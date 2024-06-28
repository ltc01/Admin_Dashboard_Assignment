import { MdOutlineDashboardCustomize } from "react-icons/md";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  // const location = useLocation();
  return (
    <>
      <nav className="md:fixed md:pt-20 md:w-[25%] md:h-screen h-full p-4 bg-blue-950 font-semibold text-xl ">
        <ul className="flex md:flex-col text-white ">
          <li className="p-2 mr-2 hover:text-yellow-200 hover:underline">
            <Link to={"/"} className="">
              <FaHome className="inline mx-3" /> Home
            </Link>
          </li>
          <li className="p-2 hover:text-yellow-200 hover:underline">
            <Link to={"/admin"}>
              <MdOutlineDashboardCustomize className=" mx-3 inline"/> Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
