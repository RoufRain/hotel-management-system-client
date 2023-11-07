import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <Outlet> </Outlet>
    </div>
  );
};

export default MainLayout;
