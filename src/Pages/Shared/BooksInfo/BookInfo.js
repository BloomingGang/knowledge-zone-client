import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading";

const BookInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: book,
  } = useQuery(["book", id], () =>
    fetch(`https://immense-meadow-70411.herokuapp.com/book/${id}`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;
  const { description, name, img, price } = book;

  const handleOrder = () => {
    const userName = user?.displayName;
    const email = user?.email;
    const productName = name;

    const order = {
      userName,
      email,
      productName,
      img,
      price,
    };
    fetch("https://immense-meadow-70411.herokuapp.com/order", {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const id = data.insertedId;
          navigate(`/payment/${id}`);
        }
      });
  };

  return (
    <div className="w-8/12 mx-auto my-10">
      <div className=" shadow-xl rounded-2xl">
        <div className="flex justify-center">
          <img className="max-h-[300px]" src={img} alt="" />
        </div>
        <div className="p-4">
          <p>Name:{name}</p>
          <p>{description}</p>
          <p>Price:{price} per Book</p>
          <button onClick={handleOrder} className="btn btn-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
