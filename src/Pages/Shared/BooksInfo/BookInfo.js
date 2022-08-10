import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/${id}`)
      .then((data) => setBook(data.data));
    // fetch(`http://localhost:5000/book/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => setBook(data));
  }, [id]);
  const { description, userName, img, page, writer, _id } = book;
  return (
    <div>
      <h1>{userName}</h1>
      <h1>{description}</h1>
      <img src={img} alt="" />
      <h1>{page}</h1>
      <h1>{writer}</h1>

      {!book.paid && (
        <button
          onClick={() => navigate(`/payment/${_id}`)}
          className="btn btn-primary"
        >
          Buy Now
        </button>
      )}
      {book.paid && <span className="text-primary">Bought It</span>}
    </div>
  );
};

export default BookInfo;
