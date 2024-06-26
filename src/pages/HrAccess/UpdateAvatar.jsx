import React, { useEffect, useState } from "react";
import Profile from "../../assets/Avatar/Profile2.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loading";
import MetaData from "../../components/MetaData";
import { clearError, updateAvatar } from "../../redux/actions/hrAction";

const UpdateAvatar = () => {
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState();
  const chooseAvatar = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      avatar: avatar,
    };
    dispatch(updateAvatar(userData));
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
      <MetaData title={"Update Profile Picture"} />
      <form onSubmit={handleSubmit} className=" bg-white shadow-btn rounded-xl w-11/12 md:w-4/12">
        <p className="mt-5 text-center text-lg font-poppins font-medium">
          Update Profile Picture
        </p>
        <div className=" px-5 py-4">
          <div className="my-2 mb-4">
            <img
              src={user && user.avatar ? user.avatar.url : Profile}
              className="h-40 w-full"
            />
          </div>

          <div className="my-2">
            <input
              type="file"
              placeholder="Enter email"
              className="w-full px-2 py-2 border-black border-2 rounded-lg border-solid"
              required
              name="avatar"
              onChange={chooseAvatar}
            />
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

export default UpdateAvatar;
