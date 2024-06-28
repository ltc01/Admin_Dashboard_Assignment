import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <nav className="lg:pt-20 lg:w-[20%] lg:h-screen h-full px-10 lg:pr-36 lg:pl-10 p-4 bg-blue-950 font-semibold text-xl ">
        <ul className="flex lg:flex-col list-none text-white ">
          <li className="p-3 px-5 hover:text-yellow-200 hover:underline">
            <Link to={"/"} className="">
              Home
            </Link>
          </li>
          <li className="p-3 px-5 hover:text-yellow-200 hover:underline">
            <Link to={"/admin"}>Dashboard</Link>
          </li>
        </ul>
        <button className="absolute right-20 p-2  hover:text-yellow-200 hover:underline">
          {location.pathname === "/admin" ? "Logout" : "Login"}
        </button>
      </nav>
    </>
  );
};

export default Header;
