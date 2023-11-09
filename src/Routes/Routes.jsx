import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Rooms from "../Components/Home/Rooms";
import RoomDetails from "../Components/RoomDetails/RoomDetails";
import SignIn from "../Components/Shared/SignIn";
import SignUp from "../Components/Shared/SignUp";
import Bookings from "../Components/RoomDetails/Bookings";

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
      {
        path: "/signin",
        element: <SignIn> </SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp> </SignUp>,
      },

      {
        path: "/roomDetails/:id",
        element: <RoomDetails> </RoomDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/bookings",
        element: <Bookings> </Bookings>,
      },
    ],
  },
]);

export default router;
