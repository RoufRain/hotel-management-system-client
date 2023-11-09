import { Link } from "react-router-dom";

const RoomCards = ({ rooms }) => {
  const { _id, room_images, title, price_per_night } = rooms;

  return (
    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
      <figure className="px-8 pt-10">
        <img
          src={room_images}
          alt="image not found"
          className="h-52 w-full rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-[#FF3811] font-bold text-md">
          $Price : {price_per_night}
        </p>

        <Link to={`/roomDetails/${_id}`}>
          <button className="bg-[#FF3811] font-semibold w-30 rounded-md p-2">
            See Details...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCards;
