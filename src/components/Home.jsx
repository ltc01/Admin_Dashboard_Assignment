import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-slate-200 border-2 border-slate-400 rounded-3xl shadow-lg p-10">
        <h1 className="font-bold text-3xl pb-5 text-center text-blue-950">
          Hello, Welcome to Jifyyy!
        </h1>
        <p className="text-lg font-bold text-blue-950 pb-2">It's a simple web app, where you can:</p>
        <ul className="list-disc ml-9 text-blue-950">
          <li>Manage and review financial transactions.</li>
          <li>Update transaction statuses.</li>
          <li>View, Filter with status of transactions </li>
          <li>Search transactions by transaction id or user name.</li>
          <li>Use Dashboard too get started!</li>
        </ul>
        {/* <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default Home;
