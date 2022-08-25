import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../firebase.init";

const CheckoutForm = ({ course }) => {
  const [user] = useAuthState(auth);
  const [clientSecret, setClientSecret] = useState("");
  const [cartError, setCartError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price,_id } = course;
  const { displayName, email } = user;
  console.log(user);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCartError(error?.message || "");
    setSuccess("");

    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: displayName,
            email: email,
          },
        },
      });
    if (intentError) {
      setCartError(intentError?.message);
    } else {
      setCartError("");
      setTransactionId(paymentIntent.id);
      setSuccess("congrats! your payment is completed! ");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Successful !!",
        showConfirmButton: false,
        timer: 1500,
      });

      const payment = {
        transactionId: paymentIntent.id
    }

    fetch(`http://localhost:5000/enrollCourse/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(payment)
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm bg-blue-500 mt-6 border-0"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cartError && <p className="text-red-500">{cartError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            your transaction Id:{" "}
            <span className="text-blue-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;