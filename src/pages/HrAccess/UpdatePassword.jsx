import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loading";
import MetaData from "../../components/MetaData";
import { clearError, updatePassword } from "../../redux/actions/hrAction";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector((state) => state.profile);

  const [nPass, setNPass] = useState();
  const [cPass, setCPass] = useState();
  const [oPass, setOPass] = useState();
  const [passErr, setPassErr] = useState();
  const handleSubmit = (e) => {
    let userData = {
      newPassword: nPass,
      oldPassword: oPass,
    };
    e.preventDefault();
    if (nPass.length > 7) {
      if (cPass === nPass) {
        dispatch(updatePassword(userData));
      } else {
        setPassErr("Password Did Not Match");
      }
    } else {
      setPassErr("Password should be greater than 8 characters");
    }
  };

  useEffect(() => {
    if (success) {
      toast(success);
    }
    if (error) {
      toast(error);
      clearError();
    }
  }, [success, error]);
  return (
    <div className="flex justify-center items-center pt-20 mb-5 h-screen">
      <MetaData title={"Update Password"} />
      <form onSubmit={handleSubmit} className=" bg-white shadow-btn rounded-xl w-11/12 lg:w-4/12">
        <p className="mt-5 text-center text-lg font-poppins font-medium">
          Update Password
        </p>
        <div className=" px-5 py-4">
          <div className="my-2">
            <label>Old Password</label>
            <input
              type="text"
              placeholder="Enter old password"
              className="w-full px-2 py-2 border-black border-2 rounded-lg border-solid"
              required
              onChange={(e) => {
                setOPass(e.target.value);
              }}
            />
          </div>
          <div className="my-2">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-2 py-2 border-black border-2 rounded-lg border-solid"
              required
              onChange={(e) => setNPass(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Repeat new password"
              className="w-full px-2 py-2 border-black border-2 rounded-lg border-solid"
              required
              onChange={(e) => setCPass(e.target.value)}
            />
          </div>
          <div>
            <p className=" text-red-700 text-sm">{passErr}</p>
          </div>
          <div className="  mt-5">
            <button className="w-full bg-green-600 px-3 py-2 rounded-md text-white">
              {loading ? <Loader /> : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
