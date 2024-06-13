import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAttendence } from "../../redux/actions/hrAction";

const Attendence = () => {
  const dispatch = useDispatch();
  const { allAttendence } = useSelector((state) => state.attendence);
  const [selectedTime, setSelectedTime] = useState(Date.now())
  // const [searchTime, setSearchTime]=useState(new Date(selectedTime))
  const result =
    allAttendence && allAttendence.filter((val) => new Date(selectedTime).getTime() === new Date(val.time).getTime());
  console.log(selectedTime)
  useEffect(() => {
    dispatch(getAttendence());
  }, []);
  return (
    <div className="px-3 sm:px-12 md:px-12 py-20">
      <div className=" bg-sky-400 flex justify-between items-center px-5 py-2 rounded-md">
        <p className="font-light md:font-semibold text-white">Employee Attendence</p>
        <div className="flex items-center ">
          <input type="date" className="px-5 py-1 h-9 mr-1 rounded-l-lg" onChange={(e)=>setSelectedTime(e.target.value)}/>
          <button className="  cursor-pointer bg-white  text-black rounded-r-lg px-4 h-9 text-md font-bold">
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        <table className="w-full mt-5 bg-slate-400 text-center border-l-2 border-r-2 border-cyan-950 border-b-2">
          <tr className=" bg-blue-300 ">
            <td className="py-2 border-2 font-medium border-cyan-900">
              Serial No
            </td>
            <td className="py-2 border-2 font-medium border-cyan-900">
              Employee Name
            </td>
            <td className="py-2 border-2 font-medium border-cyan-900">
              Employee ID
            </td>
            <td className="py-2 border-2 font-medium border-cyan-900">
              Status
            </td>
          </tr>
          {/* {result ?
            result?.data.map((val, ind) => {
              return (
                <tr className="">
                  <td className="py-2 border-2 border-cyan-900">{ind + 1}</td>
                  <td className="py-2 border-2 border-cyan-900">
                    {val.id.name}
                  </td>
                  <td className="py-2 border-2 border-cyan-900">{val.id.id}</td>
                  <td className="py-2 border-2 border-cyan-900">
                    {val.status}
                  </td>
                </tr>
              );
            }):<p>Select A Date</p>} */}
        </table>
      </div>
    </div>
  );
};

export default Attendence;
