import React, { useContext, useState } from 'react'
import { MainContext } from '../context/TransactionProvider'

const StatusEditor = ({handleStatusChange,saveStatus}) => {
    const {currentTransaction,newStatus, setOpen} = useContext(MainContext)
    return (
        <div className="popup-content">
          <h2>Edit Transaction Status</h2>
          {currentTransaction && (
            <>
              <p>Transaction ID: {currentTransaction.id}</p>
              <p>Customer Name: {currentTransaction.user.name}</p>
              <label>
                Status:
                <select value={newStatus} onChange={handleStatusChange}>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </label>
              <br />
              <button onClick={saveStatus}>Save</button>
              <button onClick={()=>setOpen(false)}>Cancel</button>
            </>
          )}
        </div>
    )
  }

export default StatusEditor