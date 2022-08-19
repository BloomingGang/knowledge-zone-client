import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://immense-meadow-70411.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin.");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-sm btn-primary bg-gradient-to-r from-blue-500 to-violet-700 border-0 "
          >
            Make Admin
          </button>
        ) : (
          <h1 className="font-bold text-xl text-green-600">ADMIN</h1>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
