import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useMyOrder from "../../../hooks/useMyOrder";

const Product = ({ order, index }) => {
  const [myOrder, setMyOrder] = useMyOrder([]);
  const { _id, productName, email } = order;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const url = `https://immense-meadow-70411.herokuapp.com/order/${id}`;
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
    <tr>
      <th>{index + 1}</th>

      <td>{productName}</td>

      <td>{email}</td>
      <td>
        <button
          onClick={() => navigate(`/payment/${_id}`)}
          className="btn btn-sm btn-primary border-0 "
        >
          PAY
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm bg-red-500 border-0 "
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Product;
