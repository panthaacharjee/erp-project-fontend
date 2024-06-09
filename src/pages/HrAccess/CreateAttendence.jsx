import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  clearSuccess,
  createAttendence,
  getEmployee,
} from "../../redux/actions/hrAction";
import AttendenceTable from "./Extra/AttendenceTable";
import { toast } from "react-toastify";
import Loader from "../../components/Loading";

const CreateAttendence = () => {
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.employee);
  const { success, error, loading } = useSelector((state) => state.attendence);

  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const handleAttendence = () => {
    if (date) {
      if (data.length === employee.length) {
        let userdata = {
          time: date,
          data,
        };
        dispatch(createAttendence(userdata));
      } else {
        toast("Please click all press button");
      }
    } else {
      toast("Please Enter A Date");
    }
  };
  useEffect(() => {
    if (success) {
      toast(success);
    }
    if (error) {
      toast(error);
    }
    clearError();
    clearSuccess();
    dispatch(getEmployee(""));
  }, []);
  return (
    <div className="px-3 sm:px-12 md:px-12 py-20">
      <div className="bg-sky-400 flex justify-between items-center px-5 py-2 rounded-md">
        <p className="font-semibold text-white">Attendence Create</p>
        <input
          type="date"
          className="px-3 py-1 rounded-md"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
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
          <td className="py-2 border-2 font-medium border-cyan-900">Status</td>
          <td className="py-2 border-2 font-medium border-cyan-900">Action</td>
        </tr>
        {employee &&
          employee.map((val, ind) => {
            return (
              <AttendenceTable
                key={ind}
                val={val}
                setData={setData}
                data={data}
                ind={ind}
              />
            );
          })}
      </table>
      <div className="relative w-full ">
        <button
          onClick={handleAttendence}
          className="px-5 py-2 rounded-sm w-40 absolute right-0 font-medium mt-5  bg-cyan-700 text-white"
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CreateAttendence;
