import { useEffect, useState } from "react";
import MetaData from "../../../components/MetaData";
import { useDispatch, useSelector } from "react-redux";
import Imag from "../../../assets/Avatar/Profile.png";
import { Link } from "react-router-dom";
import LineChart from "../../../components/LineChart";
import {
  getAllProject,
  getMonthlyRevenue,
  getRevenue,
  getTopCustomer,
  getTotalDeposit,
  getTotalWithdraw,
  getUnpaidCustomer,
} from "../../../redux/actions/adminAction";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { revenue, monRevenue, dailyRevenue } = useSelector(
    (state) => state.revenue
  );
  const { topcustomer, unpaidcustomer } = useSelector(
    (state) => state.customer
  );

  const { projects } = useSelector((state) => state.projects);
  const {
    totalDeposit,
    chairmanDeposit,
    mdDeposit,
    totalWithdraw,
    chairmanWithdraw,
    mdWithdraw,
  } = useSelector((state) => state.totalPayment);


  const data1 = [
    {
      month: "JAN",
    },
    {
      month: "FEB",
    },
    {
      month: "MAR",
    },
    {
      month: "APR",
    },
    {
      month: "MAY",
    },
    {
      month: "JUN",
    },
    {
      month: "JUL",
    },
    {
      month: "AUG",
    },
    {
      month: "SEP",
    },
    {
      month: "OCT",
    },
    {
      month: "NOV",
    },
    {
      month: "DEC",
    },
  ];
  const [data, setData] = useState({
    labels: data1.map((val) => val.month),
    datasets: [
      {
        label: "Month Wise Revenue",
        data: [],
        backgroundColor: ["#191D88"],
      },
    ],
  });

  const firstName = user.name.split(" ");

  //To Local String
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    setData({
      labels: data1.map((val) => val.month),
      datasets: [
        {
          label: "Month Wise Revenue",
          data: monRevenue && monRevenue.map((val) => val),
          backgroundColor: ["#191D88"],
        },
      ],
    });
    console.log(totalWithdraw)
    dispatch(getRevenue());
    dispatch(getMonthlyRevenue());
    dispatch(getTotalDeposit());
    dispatch(getTotalWithdraw());
    dispatch(getTopCustomer())
    dispatch(getAllProject())
    dispatch(getUnpaidCustomer())
  }, [monRevenue]);
  console.log()
  return (
    <>
      <MetaData title={"Admin Dashboard"} />
      <div className="px-3 sm:px-12 md:px-12 pt-14 md:py-20 ">
        {/* ============== Welcome Section ==================*/}

        <div className="flex flex-col md:flex-row md:items-center">
          <h1
            style={{ textShadow: "1px 1px 2px #000" }}
            className="font-poppins  font-semibold text-blue2 text-2xl md:text-4xl lg:text-5xl mt-5 "
          >
            Welcome
            {user.name ? (
              <span className="ml-2 ">{firstName[0]}</span>
            ) : (
              <span className="ml-2">Pantha</span>
            )}
          </h1>
          <sub className="my-1  md:my-0 md:mx-5 font-light font-poppins">
            Have a good Day!
          </sub>
        </div>

        {/* ====================== Total Revenue Section ======================*/}
        <div className="mt-4 md:mt-10 flex flex-col lg:flex-row items-center w-full">
          <div className="w-full lg:w-8/12">
            <div className="  flex flex-col md:flex-row  justify-between">
              <div className="bg-blue1 shadow-box1 h-32 rounded-3xl  mt-5 md:mt-0 md:mr-5  w-full lg:w-1/2  px-5 py-5">
                <p className="text-xl font-poppins text-white">Revenue</p>
                <p className="text-3xl mt-2 font-medium">
                  {revenue && revenue !== null ? numberWithCommas(revenue):<span style={{fontSize:"22px"}}>Please refresh this page</span>}
                </p>
              </div>
              <div className="bg-blue1 shadow-box1 h-32 rounded-3xl mt-5 md:mt-0  w-full lg:w-1/2 px-5 py-5">
                <p className="text-xl font-poppins text-white">Total Deposit</p>
                <p className="text-3xl mt-2 font-medium">
                  {totalDeposit && totalDeposit !=null ? numberWithCommas(totalDeposit):<span style={{fontSize:"22px"}}>Please refresh this page</span>}
                </p>
              </div>
            </div>
            <div className="  flex  flex-col md:flex-row justify-between mt-0 md:mt-5">
              <div className=" bg-blue1 shadow-box1 h-32 rounded-3xl  mt-5 md:mt-0 md:mr-5  w-full lg:w-1/2 px-5 py-5">
                <p className="text-xl font-poppins text-white">
                  Total Withdraw
                </p>
                <p className="text-3xl mt-2 font-medium">
                  {totalWithdraw && totalWithdraw !== null ? numberWithCommas(totalWithdraw):<span style={{fontSize:"22px"}}>Please refresh this page</span>}
                </p>
              </div>
              <div className=" bg-blue1 shadow-box1 h-32 rounded-3xl  mt-5 md:mt-0  w-full lg:w-1/2  px-5 py-5">
                <p className="text-xl font-poppins text-white">Daily Revenue</p>
                <p className="text-3xl mt-2 font-medium">
                  {dailyRevenue &&  numberWithCommas(dailyRevenue)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full  lg:w-4/12 pl-0 lg:pl-4 mt-12 lg:mt-0 pb-4 ">
            <div className=" bg-blue1  shadow-box1 rounded-xl lg:h-64 pb-8   relative">
              <div className=" absolute top-minus w-full  ">
                <div className=" bg-black w-8/12 sm:w-6/12 md:w-4/12 lg:w-7/12 mx-auto py-2 rounded-md">
                  <div className="text-white  font-medium font-rubik flex items-center justify-center">
                    <p>Chairman And MD</p>
                  </div>
                </div>
              </div>
              <div className="px-5 pt-10 ">
                <div>
                  <p className="font-poppins font-bold text-lg text-white mb-2">
                    Total Deposit
                  </p>
                  <div className="flex justify-between items-center">
                    <p className=" text-white">Chairman </p>
                    <p className="text-white">
                      {chairmanDeposit && chairmanDeposit !=null ? numberWithCommas(chairmanDeposit) :<span >0</span>}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className=" text-white">MD</p>
                    <p className="text-white">
                      {mdDeposit && mdDeposit !==null ? numberWithCommas(mdDeposit):<span>0</span>}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-poppins font-bold text-lg text-white mb-2">
                    Total Withdraw
                  </p>
                  <div className="flex justify-between items-center">
                    <p className=" text-white">Chairman </p>
                    <p className="text-white">
                      {chairmanWithdraw && chairmanDeposit !=null ? numberWithCommas(chairmanWithdraw):<span>0</span>}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className=" text-white">MD</p>
                    <p className="text-white">
                      {mdWithdraw && mdWithdraw !=null ? numberWithCommas(mdWithdraw):<span>0</span>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================== Month Wise Revenue ==================== */}
        <div className="mt-4 md:mt-10 flex flex-col lg:flex-row items-center w-full">
          <div className="w-full lg:w-8/12 mt-9 shadow-sm bg-white rounded-lg p-5 ">
            <LineChart chartData={data} style={{backgroundColor:"#fff"}} />
          </div>
          <div className="w-full  lg:w-4/12 pl-0 lg:pl-4 mt-12 lg:mt-0 pb-4 ">
            <div className=" bg-blue1  shadow-box1 rounded-xl relative">
              <div className=" absolute top-minus w-full  ">
                <div className=" bg-black w-8/12 sm:w-6/12 md:w-4/12 lg:w-7/12 mx-auto py-2 rounded-md">
                  <p className="text-white text-center font-medium font-rubik">
                    Top Customer
                  </p>
                </div>
              </div>
              <div className="pt-10 pb-4 h-64 overflow-y-auto">
                {topcustomer &&
                  topcustomer.map((val, ind) => {
                    return (
                      <Link key={ind} className="flex items-center  px-12 mt-2">
                        <img
                          src={Imag}
                          alt="name"
                          className="h-10 w-10 rounded"
                        />
                        <div>
                          <p className="ml-2 font-poppins text-medium font-medium text-white hover:text-blue-100">
                            {val.client.name}
                          </p>
                          <p className="ml-2 font-poppins text-xs font-medium text-gray-200 hover:text-blue-100">
                            <span className=" text-green-400 font-bold">
                              Amount:
                            </span>
                            <span> {val.amount}</span>
                          </p>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-10  w-full">
          <p className="font-poppins text-3xl font-bold">Projects</p>
          <div className="flex flex-col lg:flex-row  w-full">
            <div className="w-full lg:w-8/12">
              <div className="mt-16 ">
                {projects &&
                  projects.slice(0, 3).map((val, ind) => {
                    return (
                      <div
                        className=" bg-white px-8 pb-5 pt-16 rounded-xl relative mt-12"
                        style={{ boxShadow: "0px 0px 5px 0px #000" }}
                        key={ind}
                      >
                        <div className="absolute top-minus1 w-50 bg-blue1 px-5 py-3 rounded-lg">
                          <p className="text-white font-bold">{val.name}</p>
                        </div>
                        <p>{val.description}</p>
                        <p className="mt-5">
                          <span className="font-bold">Code</span> : {val.code}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-full  lg:w-4/12 pl-0 lg:pl-4 mt-12 lg:mt-0 pb-4 ">
              <div className=" bg-blue1  shadow-box1 rounded-xl relative">
                <div className=" absolute top-minus w-full  ">
                  <div className=" bg-black w-8/12 sm:w-6/12 md:w-4/12 lg:w-7/12 mx-auto py-2 rounded-md">
                    <p className="text-white text-center font-medium font-rubik">
                      Top Unpaid Customer
                    </p>
                  </div>
                </div>
                <div className="pt-10 pb-4 h-64 overflow-y-auto">
                  {unpaidcustomer &&
                    unpaidcustomer.map((val, ind) => {
                      return (
                        <Link
                          key={ind}
                          className="flex items-center  px-12 mt-2"
                        >
                          <img
                            src={Imag}
                            alt="name"
                            className="h-10 w-10 rounded"
                          />
                          <div>
                            <p className="ml-2 font-poppins text-medium font-medium text-white hover:text-blue-100">
                              {val.client.name}
                            </p>
                            <p className="ml-2 font-poppins text-xs font-medium text-gray-200 hover:text-blue-100">
                              <span className=" text-green-400 font-bold">
                                Due:
                              </span>
                              <span> {val.amount}</span>
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
