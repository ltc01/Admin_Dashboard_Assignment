import React, { createContext, useState } from "react";
import transactionData from "../../transactionData.json";

export const MainContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionData);
  const [filterStatus, setFilterStatus] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [open, setOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const provideValue = {
    setCurrentTransaction,
    setNewStatus,
    setTransactions,
    transactions,
    currentTransaction,
    newStatus,
    open,
    setOpen,
    searchItem,
    setSearchItem,
    filterStatus,
    setFilterStatus,

  };
  return (
    <MainContext.Provider value={provideValue}>
      {children}
    </MainContext.Provider>
  );
};

export default TransactionProvider;
