import React from "react";
import { useNavigate } from "react-router-dom";
import useMyOrder from "../../../hooks/useMyOrder";

const Product = ({ order, index }) => {
  console.log(order);
  const [myOrder, setMyOrder] = useMyOrder([]);
  const { _id, productName, email } = order;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myOrder.filter((order) => order._id !== id);
          setMyOrder(remaining);
          window.location.reload();
        });
    }
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
