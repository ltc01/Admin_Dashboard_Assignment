import React from 'react'
import BackBtn from '../components/BackBtn'
import { useParams } from 'react-router-dom'


const TransactionDetail = ({transaction}) => {
  const { id } = useParams();
  const userDetail = transaction.find(trans => trans.id === id)
  return (
    <>
    <BackBtn />
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-slate-200 border-2 border-slate-400 rounded-3xl shadow-lg p-10">
    <h1 className="text-2xl font-bold text-center pb-4 text-blue-950">Transaction Detail</h1>
    <div className="">
      <h3 className="text-lg font-semibold  text-blue-950">Transaction ID: <span className="">{userDetail.id}</span></h3>
      <p className=" font-semibold text-lg text-blue-950">Account owner: <span className="">{userDetail.user.name}</span></p>
      <p className="  text-blue-950 font-semibold text-lg">Email Address: <span className="">{userDetail.user.email}</span></p>
      <p className=" font-semibold text-lg text-blue-950">Transaction Amount: <span className="">{userDetail.amount}</span></p>
      <p className="  text-blue-950 font-semibold text-lg">Date: <span className="">{userDetail.date}</span></p>
      <p className="text-lg text-blue-950 font-semibold ">Current Status: <span className="">{userDetail.status}</span></p>
      
    </div>
    </div>
    </div>
    </>
  )
}

export default TransactionDetail