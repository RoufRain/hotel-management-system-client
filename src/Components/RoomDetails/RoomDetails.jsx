import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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

  const { user } = useContext(authContext);

  const [date, setDate] = useState();
  //   console.log("date", date);

  const handleBookRoom = () => {
    const email = user?.email;
    const booking = {
      id: _id,
      email,
      title,
      image: room_images,
      price: price_per_night,
      size: room_size,
      availability,
      date,
    };
    console.log(booking);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to booking room!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/bookings", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(booking),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Booked!",
                text: "Your room has been Booked.",
                icon: "success",
              });
            }
          });
      }
    });

    //for sending to bookings (database)
  };

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
            <p>
              <span className="font-bold">Select Date:</span>{" "}
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </p>
            <button
              onClick={handleBookRoom}
              className="bg-[#FF3811] font-semibold w-30 rounded-md p-2"
            >
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
