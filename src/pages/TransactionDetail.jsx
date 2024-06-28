import React from 'react'
import BackBtn from '../components/BackBtn'
import { useParams } from 'react-router-dom'


const TransactionDetail = ({transaction}) => {
  const { id } = useParams();
  const userDetail = transaction.find(trans => trans.id === id)
  return (
    <>
    <BackBtn />
    <div>Transaction Detail</div>
    <div className="">
      <h3 className=''>Transaction ID: {userDetail.id}</h3>
      <p className=''>Account owner: {userDetail.user.name}</p>
      <p className=''>Email Address: {userDetail.user.email}</p>
      <p className=''>Transaction Amount: {userDetail.amount}</p>
      <p className=''>Date: {userDetail.date}</p>
      <p className=''>Current Status: {userDetail.status}</p>
      
    </div>
    </>
  )
}

export default TransactionDetail