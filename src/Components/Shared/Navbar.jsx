import { Link } from "react-router-dom";
import logo from "../../assets/images/hotel-logo-design.gif";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>

      {user?.email ? (
        <li>
          <Link to="/bookings">My Bookings</Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="">
          <img src={logo} alt="" className="h-12 w-32 rounded-md" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {user?.email ? (
        <div className="navbar-end">
          <button className="btn btn-primary" onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/signin">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
