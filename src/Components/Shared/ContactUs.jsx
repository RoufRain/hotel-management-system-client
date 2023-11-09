import { GrMapLocation } from "react-icons/gr";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
  return (
    <div>
      <div className="flex-col justify-center border bg-slate-300 w-2/3 mx-auto m-10 p-5">
        <h2 className="text-center font-poppins text-2xl font-semibold m-5">
          Contact Us
        </h2>
      </div>
      <div className="flex-col justify-center w-2/3 mx-auto m-10 p-5">
        <h1 className="text-center text-lg font-poppins font-medium">
          Contact us if you need our services. We will be happy to make your
          residential memorable!
        </h1>
      </div>

      <div className="mt-10 mb-10">
        <div className="grid justify-center md:grid-cols-2  lg:grid-cols-3 max-w-7xl mx-auto md:pl-10 space-y-3">
          <div className="card w-80 bg-blue-400 shadow-xl">
            <div className="flex justify-center mt-10 ">
              <p>
                <GrMapLocation className="h-12 w-12"></GrMapLocation>
              </p>
            </div>
            <div className="card-body items-center ">
              <h2 className="card-title">Address</h2>
              <p>33/7 Mirpur, Dhaka</p>
            </div>
          </div>
          <div className="card w-80 bg-red-400 shadow-xl">
            <div className="flex justify-center mt-10 ">
              <p>
                <BsTelephoneInbound className="h-12 w-12"></BsTelephoneInbound>
              </p>
            </div>
            <div className="card-body items-center ">
              <h2 className="card-title">Phone</h2>
              <p>++0100000000000</p>
            </div>
          </div>
          <div className="card w-80 bg-green-400 shadow-xl">
            <div className="flex justify-center mt-10 ">
              <p>
                <HiOutlineMail className="h-12 w-12"></HiOutlineMail>
              </p>
            </div>
            <div className="card-body items-center">
              <h2 className="card-title">Email</h2>
              <p>info@hotelgoldenhouse.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
