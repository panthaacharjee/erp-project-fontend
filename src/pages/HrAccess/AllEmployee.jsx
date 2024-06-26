import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../redux/actions/hrAction";
import Imag from "../../assets/Avatar/Profile2.png";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import MetaData from "../../components/MetaData";

const AllEmployee = () => {
  const dispatch = useDispatch();
  const { employee, aloading } = useSelector((state) => state.employee);
  const [keyword, setKeyword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getEmployee(keyword));
  };
  useEffect(() => {
    dispatch(getEmployee(keyword));
  }, [keyword]);
  return (
    <div className="px-3 sm:px-12 md:px-12 pt-14 md:py-20 pb-5">
      <MetaData title={"All Employee"} />
      <div className="mt-5 bg-blue2 rounded-lg px-5 py-2 text-white flex justify-between items-center relative">
        <h3 className="text-sm lg:text-xl font-poppins font-bold">All Employee</h3>
        <form onSubmit={handleClick} className="w-7/12 md:w-3/12">
          <input
            type="text"
            placeholder="employee name"
            className="w-full px-3 py-1 rounded-md text-white"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        <p className="absolute right-6 text-white text-lg">
          <BiSearchAlt2 />
        </p>
      </div>

      {aloading === true ? (
        <p className="text-md font-bold text-black font-poppins mt-5">
          Wait................
        </p>
      ) : (
        <div className="flex flex-col md:flex-row flex-wrap  mt-0 md:mt-8">
          {employee && employee.length <= 0 ? (
            <p className="mt-5">No Employee Found</p>
          ) : null}
          {employee &&
            employee.map((val, ind) => {
              return (
                <Link
                  to={`/employee/${val._id}`}
                  key={ind}
                  className="flex w-full md:w-3/12  mt-5 md:mt-2"
                >
                  <div className="w-full mr-2 bg-blue3 border-2 border-sky-300 rounded-2xl">
                    <div>
                      {val.avatar ? (
                        <img
                          src={val.avatar.url}
                          alt="client image"
                          className="w-full h-56 rounded-t-2xl"
                        />
                      ) : (
                        <img
                          src={Imag}
                          alt="client image"
                          className="w-full h-56 rounded-t-2xl"
                        />
                      )}
                    </div>
                    <div className="p-3 text-white font-poppins text-sm">
                      <div className="flex justify-between">
                        <p className="font-bold">Name</p>
                        <p>{val.name}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Id</p>
                        <p>{val.id}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Mobile No.</p>
                        <p>{val.mobile}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AllEmployee;
