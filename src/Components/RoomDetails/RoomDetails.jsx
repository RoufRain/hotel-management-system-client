import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const rooms = useLoaderData();
  const {
    title,
    _id,
    room_images,
    price_per_night,
    description,
    room_size,
    availability,
  } = rooms;

  return (
    <div>
      <div className=" bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={room_images} className="w-1/2 rounded-lg shadow-2xl" />
          <div className="w-1/2 space-y-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1>
              <span className=" font-bold">Size: </span>
              {room_size}
            </h1>
            <p>
              <span className="font-bold">Description:</span> {description}
            </p>
            <p>
              <span className="font-bold">availability:</span> {availability}
            </p>
            <p>
              <span className="font-bold">Price/night:</span> {price_per_night}
            </p>
            <button className="bg-[#FF3811] font-semibold w-30 rounded-md p-2">
              Booking Now!
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-2xl font-semibold">Review: 0</p>
      </div>
    </div>
  );
};

export default RoomDetails;
