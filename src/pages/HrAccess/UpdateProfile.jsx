import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loading";
import MetaData from "../../components/MetaData";
import { clearError, updateProfile } from "../../redux/actions/hrAction";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      name: name,
      email: email,
    };
    dispatch(updateProfile(userData));
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
      <MetaData title={"Update Profile"} />
      <form onSubmit={handleSubmit} className=" bg-white shadow-btn rounded-xl w-11/12 lg:w-4/12">
        <p className="mt-5 text-center text-lg font-poppins font-medium">
          Update Profile
        </p>
        <div className=" px-5 py-4">
          <div className="my-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter  Name"
              className="w-full px-2 py-2 border-black border-2 rounded-lg border-solid"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>

          <div className="my-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-2 py-2 border-black border-2 rounded-lg border-solid"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="my-2">
            <label>User Name (Not Editable)</label>

            <p className="w-full px-2 py-2 border-black border-2 rounded-lg border-solid">
              {user && user.userName}
            </p>
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

export default UpdateProfile;
