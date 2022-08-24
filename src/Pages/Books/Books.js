import React, { useEffect, useState } from "react";
import LiveChat from "../ContactUs/LiveChat";
import Book from "./Book";
import BookModal from "./BookModal";

const Books = () => {
  const [book, setBook] = useState([]);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-10 px-8 py-16">
        {book.map((bo) => (
          <Book setModal={setModal} key={bo._id} book={bo}></Book>
        ))}
        <LiveChat />
      </div>
      {modal && <BookModal modal={modal}></BookModal>}
    </div>
  );
};

export default Books;
