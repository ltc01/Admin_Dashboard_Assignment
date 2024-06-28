import { FaUserTie } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

export const Admin=()=>{
  return (<FaUserTie className="text-blue-900 text-2xl absolute right-[5%] border-2 border-yellow-500 w-10 h-10 p-1 rounded-full top-[8%]" />)
}
const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-slate-200 border-2 border-slate-400 rounded-3xl shadow-lg p-10">
        <h1 className=" font-bold text-3xl pb-5 text-center text-blue-950">
          Hello! Welcome to Jifyyy.
        </h1>
        <p className="text-lg font-bold text-blue-950 pb-2">It's a simple web app, where you can:</p>
        <ul className="list-disc ml-9 text-blue-950">
          <li>Manage and review financial transactions.</li>
          <li>Update transaction statuses.</li>
          <li>View, Filter with status of transactions </li>
          <li>Search transactions by transaction id or user name.</li>
          <li>Use Dashboard too get started!</li>
        </ul>
        <button className="bg-blue-950 text-white px-6 py-2 rounded-full hover:bg-blue-700 float-right font-semibold mt-7 ">
          <Link to={"/admin"} >Get Started </Link>
        </button>
      </div>
      <FaUserTie className="text-blue-900 text-2xl absolute right-[5%] border-2 border-yellow-500 w-10 h-10 p-1 rounded-full top-[8%]" />
    </div>
  );
};

export default Home;
