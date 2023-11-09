import family_room from "../../assets/images/family-room-2-870x500.jpg";
import luxary_room from "../../assets/images/luxary room-1-870x500.jpg";

const FeaturedRoom = () => {
  return (
    <div className="mt-20 bg-slate-50 mb-10">
      <div className="text-center text-4xl font-semibold  mt-10">
        <h1 className="pt-10">Hotel Feature room</h1>
      </div>

      <div className="grid lg:grid-cols-2 mt-10 gap-3 mb-10">
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
          <figure className="px-8 pt-10">
            <img
              src={family_room}
              alt="image not found"
              className="h-[300px] w-full rounded-xl"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Family Room 2</h2>
            <p className="  text-md">
              Our Double Room is a spacious and welcoming choice for couples or
              friends traveling together. Featuring a large and comfortable bed,
              a seating area, and an en-suite bathroom, it's ideal for a
              relaxing and enjoyable stay. With its ample space and modern
              amenities, this room ensures you have a comfortable and memorable
              visit. Whether you're on a romantic getaway or a trip with a
              companion, our Double Room provides the perfect accommodation.
              Book now and enjoy a delightful stay in our Double Room.
            </p>
            <p className="text-[#FF3811] font-bold text-lg">
              $Price : <span className="font-bold text-2xl">$330.00</span>/night
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
          <figure className="px-8 pt-10">
            <img
              src={luxary_room}
              alt="image not found"
              className="h-[300px] w-full rounded-xl"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Family Room 2</h2>
            <p className="  text-md">
              Our Double Room is a spacious and welcoming choice for couples or
              friends traveling together. Featuring a large and comfortable bed,
              a seating area, and an en-suite bathroom, it's ideal for a
              relaxing and enjoyable stay. With its ample space and modern
              amenities, this room ensures you have a comfortable and memorable
              visit. Whether you're on a romantic getaway or a trip with a
              companion, our Double Room provides the perfect accommodation.
              Book now and enjoy a delightful stay in our Double Room.
            </p>
            <p className="text-[#FF3811] font-bold text-lg">
              $Price : <span className="font-bold text-2xl">$330.00</span>/night
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
