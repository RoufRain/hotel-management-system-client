import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Rooms from "../Components/Home/Rooms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/rooms",
        element: <Rooms> </Rooms>,
      },
    ],
  },
]);

export default router;
