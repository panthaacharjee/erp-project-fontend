import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProject } from "../../redux/actions/adminAction";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import MetaData from "../../components/MetaData";

const AllProject = () => {
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.projects);
  const [keyword, setKeyword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllProject(keyword));
  };
  useEffect(() => {
    dispatch(getAllProject());
  }, []);
  return (
    <div className="px-3 sm:px-12 md:px-12 pt-14 md:py-20 ">
      <MetaData title={"All Project"} />
      <div className="mt-5 bg-blue2 rounded-lg px-5 py-2 text-white flex justify-between items-center relative">
        <h3 className=" text-sm lg:text-xl font-poppins font-bold">All Project</h3>
        <form onSubmit={handleClick} className="w-8/12 md:w-3/12">
          <input
            type="text"
            placeholder="search a client"
            className="w-full px-3 py-1 rounded-md text-white"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        <p className="absolute right-6 text-black text-lg">
          <BiSearchAlt2 />
        </p>
      </div>
      {loading === true ? (
        <p className="text-md font-bold text-black font-poppins mt-5">
          Wait................
        </p>
      ) : (
        <div className="flex flex-col md:flex-row flex-wrap mt-3 lg:mt-8">
          {projects && projects.length <= 0 ? (
            <p className="mt-5">No Project Found</p>
          ) : null}
          {projects &&
            projects.map((val, ind) => {
              return (
                <Link
                  to={`/project/${val._id}`}
                  key={ind}
                  className="flex  w-full min-h-28 md:w-3/12 mb-5 lg:mb-0 lg:mt-2 "
                >
                  <div className="w-full mr-2 bg-blue3 rounded-2xl">
                    <div className="p-3 text-white font-poppins text-sm">
                      <div className="flex justify-between">
                        <p className="font-bold font-poppins">{val.name}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Code {val.code}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mt-2">{val.description.slice(0, 150)}........</p>
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

export default AllProject;
