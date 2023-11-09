import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  //use loading state from authcontext page
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signup"></Navigate>;
};

export default PrivateRoute;
