import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <nav className="md:fixed md:pt-20 md:w-[25%] md:h-screen h-full p-4 bg-blue-950 font-semibold text-xl ">
        <ul className="flex md:flex-col text-white ">
          <li className="p-2 mr-2 hover:text-yellow-200 hover:underline">
            <Link to={"/"} className="">
              Home
            </Link>
          </li>
          <li className="p-2 hover:text-yellow-200 hover:underline">
            <Link to={"/admin"}>Dashboard</Link>
          </li>    
        </ul>
        <button className="absolute right-[5%] top-4 p-2 text-white md:text-blue-950  hover:text-yellow-200 hover:underline">
          {location.pathname === "/admin" ? "Logout" : "Login"}
        </button>
      </nav>
    </>
  );
};

export default Header;
