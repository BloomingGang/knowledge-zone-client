import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UserRow = ({ user, index }) => {
  const { _id, email, role } = user;
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do You Want To Delete This ??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#eb2f06",
      cancelButtonColor: "#00ab41",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your File Has Been Deleted !!", "success");
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            window.location.reload();
          });
      }
    });
  };
  return (
    <tr className="text-center">
      <th className="font-bold text-xl">{index + 1}</th>
      <td className="font-bold text-xl">{email}</td>
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-sm btn-primary bg-gradient-to-r from-blue-500 to-violet-700 border-0 "
          >
            Make Admin
          </button>
        ) : (
          <h1 className="font-bold text-xl text-green-500">ADMIN</h1>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          // className="btn btn-sm bg-red-600 hover:bg-red-500 border-0 "
          className="text-red-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 mt-4 mx-2"
        >
          <TrashIcon className="h-9 w-9 cursor-pointer" />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
