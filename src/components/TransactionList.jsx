import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StatusEditor from "./StatusEditor";
import swal from 'sweetalert';
import { MainContext } from "../context/TransactionProvider";

const TransactionList = ({transactions, updateTransactionStatus}) => {
  const {setCurrentTransaction,setNewStatus,setOpen,newStatus,currentTransaction, open} = useContext(MainContext)
  const openPopup = (transaction) => {
    setCurrentTransaction(transaction);
    setNewStatus(transaction.status);
    setOpen(true);
  };
  const saveStatus = () => {
    updateTransactionStatus(currentTransaction.id, newStatus);
    swal({
      title: "Done",
      text: "Status updated successfully",
      icon: "success",
      button: "OK",
    });
    setOpen(false);
    setCurrentTransaction(null);
  };
  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };
  return (
    <>
      <div>
        <h1>Transactions List</h1>
        {transactions && transactions.length > 0 ? (
          <>
          <table>
            <thead>
              <tr>
                <th>Sr. no</th>
                <th>Transaction ID</th>
                <th>Customer name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trans, index) => (
                <tr key={trans.id}>
                  <td>{index + 1}</td>
                  <td>{trans.id}</td>
                  <td>
                    <Link to={`/transactions/${trans.id}`}>
                      {trans.user.name}
                    </Link>
                  </td>
                  <td>{trans.amount}</td>
                  <td>{trans.date}</td>
                  <td>{trans.status}</td>
                  <td>
                    <button onClick={() => openPopup(trans)}>Edit</button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </>
        ) : (
          <p>No Transactions Available!</p>
        )}
      </div>
      {open && (
        <StatusEditor
          currentTransaction={currentTransaction}
          handleStatusChange={handleStatusChange}
          newStatus={newStatus}
          saveStatus={saveStatus}
          setOpen={setOpen}
        />
      ) }
    </>
  );
};

export default TransactionList;
