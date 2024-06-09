import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboard from "./Dashboard/AdminDashboard";
import HrDashboard from "./Dashboard/HrDashboard";
import NotFound from "../NotFound";
import ManagerDashboard from "./Dashboard/ManagerDashboard";
import ClientDashboard from "./Dashboard/ClientDashboard";
import {
  getAllProject,
  getTopCustomer,
  getUnpaidCustomer,
} from "../../redux/actions/adminAction";
const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);
  
  useEffect(()=>{
    dispatch(getAllProject());
    dispatch(getTopCustomer());
    dispatch(getUnpaidCustomer());
  },)
  if (user.role === "Admin") {
    return <AdminDashboard />;
  } else if (user.role === "Hr") {
    return <HrDashboard />;
  } else if (user.role === "Manager") {
    return <ManagerDashboard />;
  } else if (user.role === "Client") {
    return <ClientDashboard />;
  } else {
    return <NotFound />;
  }
};

export default Home;
