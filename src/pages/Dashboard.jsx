import React, { useContext, useState } from "react";
import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import { MainContext } from "../context/TransactionProvider";

const Dashboard = ({updatedTransList, handleUpdateStatus}) => {
  return (
    <>
      <div className="grid-cols-2">
        <h1 className="">Admin Dahsboard!</h1>
        <div className="">
        <SearchBar />
        <FilterBar />
        <TransactionList
          transactions={updatedTransList}
          updateTransactionStatus={handleUpdateStatus}
        />

        </div>
      </div>
    </>
  );
};

export default Dashboard;
