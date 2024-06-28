import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StatusEditor from "./StatusEditor";
import swal from 'sweetalert';
import { MainContext } from "../context/TransactionProvider";
// import { FaEdit } from "react-icons/fa";

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
      <div className="p-5 rounded-3xl">
        <h1 className="text-2xl mb-5 py-2 text-blue-950 rounded-xl text-center font-semibold">Transactions List</h1>
        {transactions && transactions.length > 0 ? (
          <div className="overflow-x-auto">
          <table className="border mx-auto border-slate-400 p-6">
            <thead className="text-white bg-blue-950 p-6">
              <tr >
                <th className="p-2 pl-4">Sr. no</th>
                <th className="p-2">Transaction ID</th>
                <th className="p-2 px-8">Customer name</th>
                <th className="p-2 px-8">Amount</th>
                <th className="p-2 px-10">Date</th>
                <th className="p-2 px-8">Status</th>
                <th className="p-2 px-12">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trans, index) => (
                <tr key={trans.id} className="text-center">
                  <td className="py-2 font-semibold">{index + 1}.</td>
                  <td>{trans.id}</td>
                  <td className="hover:text-red-600 hover:underline">
                    <Link to={`/transactions/${trans.id}`}>
                      {trans.user.name}
                    </Link>
                  </td>
                  <td>${trans.amount}</td>
                  <td>{trans.date}</td>
                  <td 
                  className={`font-semibold ${trans.status === "Pending" ? "text-orange-600" : trans.status === "Approved" ? "text-emerald-700": "text-rose-600"}`}>
                    {trans.status}
                    </td>
                  <td>
                    <button onClick={() => openPopup(trans)}
                    className="text-blue-800 bg-blue-100 px-3 hover:bg-blue-700 hover:text-white rounded-lg"
                    >Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
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
