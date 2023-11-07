import { useEffect, useState } from "react";
import RoomCards from "./RoomCards";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((rooms) => (
          <RoomCards key={rooms._id} rooms={rooms}>
            {" "}
          </RoomCards>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
