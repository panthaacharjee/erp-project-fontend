import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDeposit, getAllWithdraw } from "../../redux/actions/adminAction";
import { Link } from "react-router-dom";

import SingleWithdraw from "./SingleWithdraw";
import SingleDeposit from "./SingleDeposit";

const PaymentHistory = () => {
  const dispatch = useDispatch();
  const { allDeposit, allWithdraw } = useSelector((state) => state.allpayment);

  let totalDepsoit = 0;
  if (allDeposit) {
    for (var i = 0; i < allDeposit.length; i++) {
      totalDepsoit = totalDepsoit + allDeposit[i].amount;
    }
  }
  let totalWithdraw = 0;
  if (allWithdraw) {
    for (var i = 0; i < allWithdraw.length; i++) {
      totalWithdraw = totalWithdraw + allWithdraw[i].amount;
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    dispatch(getAllDeposit());
    dispatch(getAllWithdraw());
  }, [allDeposit, allWithdraw]);
  return (
    <div className="px-5  sm:px-12 md:px-12 pt-16 md:py-20 pb-10">
      <div className="w-full flex justify-center">
        <div className="  bg-cyan-950 shadow-lg shadow-black px-5 py-4 w-full md:w-6/12 lg:4/12 rounded-lg">
          <p className="text-xl text-white text-center  bg-cyan-500 font-bold font-poppins rounded-lg py-2">
            Withraw & Deposit Summary
          </p>
          <div className="flex justify-between text-white text-lg font-medium mt-5">
            <p>Total Deposit</p>
            <p>{numberWithCommas(totalDepsoit)}</p>
          </div>
          <div className="flex justify-between text-white text-lg font-medium mt-2">
            <p>Total Withdraw</p>
            <p>{numberWithCommas(totalWithdraw)}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row mt-20">
        <div className=" bg-black shadow-lg shadow-black w-full  md:w-6/12 lg:w-5/12   p-4 rounded-xl">
          <p className="text-sm md:text-md lg:text-lg text-white text-center bg-red-400 py-2 rounded-lg">
            Deposit History
          </p>
          <div className=" h-72 overflow-y-auto mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-accent">
                  <th>SL</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {/* row 1 */}
                {allDeposit &&
                allDeposit.map((val, ind) => {
                  return <SingleDeposit val={val} ind={ind} />;
                })}
              </tbody>
            </table>
          </div>
          <div className="text-center w-full pt-5">
            <Link
              to="/create/deposit"
              className="bg-green-800 py-1 px-5 rounded-xl  text-white text-xs font-poppins "
            >
              Add New
            </Link>
          </div>
        </div>
        <div className="bg-black shadow-lg shadow-black w-full  md:w-6/12 lg:w-5/12   p-4 rounded-xl mt-10 lg:mt-0">
          <p className="text-sm md:text-md lg:text-lg text-white text-center bg-red-400 py-2 rounded-lg">
            Withdraw History
          </p>
          <div className=" h-72 overflow-y-auto mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-accent">
                  <th>SL</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {/* row 1 */}
                {allWithdraw &&
                  allWithdraw.map((val, ind) => {
                return <SingleWithdraw val={val} ind={ind} />;
              })}
              </tbody>
            </table>
          </div>
          <div className="text-center w-full">
            <Link
              to="/create/withdraw"
              className="bg-red-600 py-1 px-5 rounded-xl  text-white text-xs font-poppins  "
            >
              Add New
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
