import { Link } from "react-router-dom";
import logImage from "../../assets/images/login.svg";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn } = useContext(authContext);

  const signInHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //signIn k call kore
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        Swal.fire({
          title: "Success!",
          text: "Your Login Successful.",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal("Credential Does Not Match!", "Error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-3/4 lg:w-1/2 mr-5 text-center lg:text-left">
          <img src={logImage} alt="" />
        </div>
        <div className=" card flex-shrink-0 w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-4 font-bold">Login now!</h1>

          <form onSubmit={signInHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="login"
                className="p-3 rounded-md bg-[#FF3811] text-white"
              />
            </div>
          </form>
          <div>
            <p className="text-[#737373] font-semibold text-center mb-4">
              New to Here?{" "}
              <Link to="/signup" className="text-[#FF3811] font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
