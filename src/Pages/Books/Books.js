import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 px-5">
        {book.map((bo) => (
          <Book key={bo._id} book={bo}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
