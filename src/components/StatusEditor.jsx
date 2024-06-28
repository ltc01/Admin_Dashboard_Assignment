import React, { useContext, useState } from "react";
import { MainContext } from "../context/TransactionProvider";

const StatusEditor = ({ handleStatusChange, saveStatus }) => {
  const { currentTransaction, newStatus, setOpen } = useContext(MainContext);
  return (
    <div className="top-0 left-0 right-0 bottom-0 absolute bg-black/75">
      <div className="mx-auto w-fit mt-[8%] bg-blue-100 border border-blue-800 rounded-2xl p-[4%]">
        <h2 className="text-2xl font-bold text-center pb-4 text-blue-950">
          Edit Transaction Status
        </h2>
        {currentTransaction && (
          <>
          <p className="py-2"><span className=" font-semibold text-lg text-blue-950">
              Customer Name:</span> {currentTransaction.user.name}
            </p>
            <p className="pb-2">
              <span className=" font-semibold text-lg text-blue-950">
                Transaction ID:{" "}
              </span>{" "}
              {currentTransaction.id}
            </p>
            


            <label className="font-semibold text-lg pb-4 text-blue-950">
              Change status:
              <select
                value={newStatus}
                onChange={handleStatusChange}
                className="text-center w-fit rounded-full bg-slate-50 px-2 py-1 mx-2  text-blue-950"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>
            <br />
            <div className="pt-[9%] text-center">
              <button
                onClick={saveStatus}
                className="mt-3 bg-blue-400 hover:bg-blue-800 text-white p-2 rounded-full px-10 font-semibold mx-2"
              >
                Save
              </button>
              <button
                onClick={() => setOpen(false)}
                className=" font-semibold mx-2 bg-slate-50 hover:bg-black/10 text-blue-950 p-2 rounded-full px-10"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusEditor;
