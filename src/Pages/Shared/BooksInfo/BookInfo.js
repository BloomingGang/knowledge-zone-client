import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
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
   

   const handleOrder = (e) => {
     e.preventDefault();
     const userName = e.target.name.value;
     const email = e.target.email.value;
     const address = e.target.address.value;
     const number = e.target.number.value;
     const productName = name;

     const order = {
       userName,
       email,
       address,
       productName,
       img,
       price,
       number,
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
           e.target.reset();
           alert('order success')
           navigate("/");
         }
       });
   };
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="shadow-xl rounded-2xl">
            <div className="flex justify-center">
              <img className="max-h-[300px]" src={img} alt="" />
            </div>
            <div className="p-4">
              <p>Name:{name}</p>
              <p>{description}</p>
              <p>Price:{price} per Book</p>
            </div>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleOrder}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={user?.displayName}
                    name="name"
                    readOnly
                    disabled
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    name="email"
                    readOnly
                    disabled
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    name="address"
                    required
                    className="input input-bordered"
                  />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    name="number"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
