import bg_image from "../../assets/images/bg_image_banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero "
      //   style={{ backgroundImage: { bg_image } }}
    >
      <img
        src={bg_image}
        className="w-full h-[600px] md:h-[650px] rounded-lg"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {" "}
            Affordable Price For Room Servicing!
          </h1>
          <p className="mb-5">
            There are many variations of room are available.
          </p>
          <button className="p-3 rounded-md btn-outline border text-white">
            Explore Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
