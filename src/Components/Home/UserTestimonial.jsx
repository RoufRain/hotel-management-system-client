import client1 from "../../assets/images/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg";
import client2 from "../../assets/images/ethan-hoover-0YHIlxeCuhg-unsplash.jpg";
import client3 from "../../assets/images/vivek-kumar-a-_1PPjnbUg-unsplash.jpg";

const UserTestimonial = () => {
  return (
    <div className="mt-10 mb-10 ">
      <div className="flex justify-center text-3xl font-medium font-poppins border  font-mono bg-slate-300 p-5 ">
        <h1>Our Customer Review</h1>
      </div>
      <div className="grid justify-center md:grid-cols-2  lg:grid-cols-3 md:pl-10 space-y-3">
        <div
          className="card w-80 lg:w-96 bg-base-100 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <figure className="px-10 pt-3 ">
            <img src={client1} alt="" className="h-40 w-40 rounded-full" />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">Nick Johnson</h2>
            <p>
              "The Single Room was perfect for my solo trip. The 50% off offer
              was a pleasant surprise. Cozy and well-equipped, I couldn't ask
              for more!
            </p>
          </div>
        </div>
        <div
          className="card w-80 lg:w-96 bg-base-100 shadow-xl"
          data-aos="fade-up"
        >
          <figure className="px-10 pt-3 ">
            <img src={client2} alt="" className="h-40 w-40 rounded-full" />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title">John Smith</h2>
            <p>
              A fantastic stay! The Double Room was spacious, and the 50%
              discount made it even better. Comfortable, clean, and great
              service. Will definitely return.
            </p>
          </div>
        </div>
        <div
          className="card w-80 lg:w-96 bg-base-100 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <figure className="px-10 pt-3 ">
            <img src={client3} alt="" className="h-40 w-40 rounded-full" />
          </figure>
          <div className=" card-body items-center">
            <h2 className="card-title">Emily Davis</h2>
            <p>
              Our family loved the Family Room. The 50% discount made it an
              excellent deal. Spacious, clean, and kid-friendly. We had a
              memorable stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonial;
