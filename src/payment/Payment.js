import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Pages/Shared/Loading";
import auth from "./../firebase.init";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LUplwAHqVh6YNbtXIh1r6cMllP3ijNonJXLdAzUIPdOb5UTUwLZ4gzoYwjJVPuIVFJwIySNyL06PnrSOLJDnlRY00SXGHN8mD"
);

const Payment = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://immense-meadow-70411.herokuapp.com/payment/${id}`;
  const { data: course, isLoading } = useQuery(["payment", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(course);
  const { productName, price, img } = course;
  return (
    <div className=" w-3/5 mx-auto min-h-screen my-20">
      <div className=" bg-base-100 shadow-xl text-center font-serif py-4">
        <p className="font-bold text-blue-500">Hello, {user.displayName}</p>
        <h2 className=" text-center text-2xl font-bold">
          Please pay for {productName}
        </h2>
        <div class="avatar my-4">
          <div class="w-24 mask mask-hexagon flex justify-center items-center">
            <img src={img} alt="" />
          </div>
        </div>
        <p>Please Pay : $ {price}</p>
      </div>
      <div className="card bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm course={course} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
