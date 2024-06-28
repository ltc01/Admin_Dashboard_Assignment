import React, { useContext, useState } from "react";
import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import { MainContext } from "../context/TransactionProvider";

const Dashboard = ({ updatedTransList, handleUpdateStatus }) => {
  return (
      <div className="md:pl-[30%] py-12 bg-slate-100 w-full h-[100%]">
        <div className="bg-white md:float-right mx-auto md:mr-[5%] p-8 md:p-10 rounded-3xl w-[90%] h-[100%]">
          <h1 className="md:text-4xl text-2xl font-semibold">
            Welcome to Dashboard!
            </h1>
          <div className="flex flex-col lg:flex-row justify-between p-3 mt-5 md:p-5 md:m-2">
            <SearchBar />
            <FilterBar />
          </div>
          <TransactionList
            transactions={updatedTransList}
            updateTransactionStatus={handleUpdateStatus}
          />
        </div>
      </div>
  );
};

export default Dashboard;
