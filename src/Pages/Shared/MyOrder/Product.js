import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useMyOrder from "../../../hooks/useMyOrder";

const Product = ({ order, index }) => {
  // const [myOrder, setMyOrder] = useMyOrder([]);
  const { _id, productName, email ,paid} = order;
  console.log(order,'order detail');
  const navigate = useNavigate();

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const url = `http://localhost:5000/order/${id}`;

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
        {paid!==true ?

        <button
          onClick={() => navigate(`/payment/${_id}`)}
          className={`btn btn-sm bg-violet-800 hover:bg-transparent hover:text-violet-900 hover:border-violet-900`}
        >
          PAY
        </button>
        :
        <button
          
          className={`btn-disabled text-[black]  btn btn-sm bg-transparent border-b-violet-900`}
        >
          PAID
        </button>
        }
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className={ `${paid===true && 'btn-disabled'}  btn btn-sm bg-red-500  hover:text-red-500 hover:border-red-500 `}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Product;
