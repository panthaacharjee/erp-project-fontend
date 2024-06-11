
import {useSelector } from "react-redux";
import AdminDashboard from "./Dashboard/AdminDashboard";
import HrDashboard from "./Dashboard/HrDashboard";
import NotFound from "../NotFound";
import ManagerDashboard from "./Dashboard/ManagerDashboard";
import ClientDashboard from "./Dashboard/ClientDashboard";

const Home = () => {
  const { user } = useSelector((state) => state.user);
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
