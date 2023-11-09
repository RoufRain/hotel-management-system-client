import React from "react";

const BookingRow = ({ booking, handleCancel }) => {
  const {
    _id,
    customerName,
    title,
    price,
    service,
    email,
    image,
    date,
    status,
  } = booking;
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>
        {date} <br></br>
        <span>
          <button className="bg-[#d7cfcd] font-semibold w-30 rounded-md p-1">
            Update
          </button>
        </span>
      </td>
      <th>
        <label>
          <button
            onClick={() => handleCancel(_id)}
            className="btn btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>{" "}
            <span>Cancel</span>
          </button>
        </label>
      </th>
    </tr>
  );
};

export default BookingRow;
