import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookInfo = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/${id}`)
      .then((data) => setBook(data.data));
    // fetch(`http://localhost:5000/book/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => setBook(data));
  }, []);
  const { description, userName, img } = book;
  return (
    <div>
      <h1>{id}</h1>
      <h1>{userName}</h1>
      <h1>{description}</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default BookInfo;
