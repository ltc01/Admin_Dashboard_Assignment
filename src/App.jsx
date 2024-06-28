import React, { useContext } from "react";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TransactionDetail from "./pages/TransactionDetail";
import { MainContext } from "./context/TransactionProvider";

const App = () => {
  const {
    transactions,
    setTransactions,
    searchItem,
    filterStatus,
  } = useContext(MainContext);


  const updatedTransList = transactions.filter((trans) => {
    const searchTransaction = searchItem
      ? trans.user.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        trans.id.includes(searchItem)
      : true;
    const filteredTransaction = filterStatus
      ? trans.status === filterStatus
      : true;

    return searchTransaction && filteredTransaction;
  });

  const handleUpdateStatus = (id, status) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, status } : transaction
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Dashboard updatedTransList={updatedTransList} handleUpdateStatus={handleUpdateStatus} />} />
          <Route path="/transactions/:id" element={<TransactionDetail transaction={transactions} />} />
        </Routes>
    </div>
  );
};

export default App;
