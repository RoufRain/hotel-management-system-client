import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Rooms from "../Components/Home/Rooms";
import RoomDetails from "../Components/RoomDetails/RoomDetails";
import SignIn from "../Components/Shared/SignIn";
import SignUp from "../Components/Shared/SignUp";
import Bookings from "../Components/RoomDetails/Bookings";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ContactUs from "../Components/Shared/ContactUs";
import ErrorPage from "../Components/Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/contactUs",
        element: <ContactUs> </ContactUs>,
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
        element: (
          <PrivateRoute>
            <RoomDetails> </RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings> </Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
