import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Book from "./Book";

const BooksCarousel = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-10">
      <section id="team-section">
        <div className="container mx-auto">
          <div className="mb-12 w-full mx-auto">
            <h3 className="text-center text-4xl font-bold text-violet-800 pt-10">
              Books
            </h3>
          </div>

          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4">
            <div></div>
          </div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {books?.slice(-6).map((book, index) => (
                <div>
                  <Book key={index} book={book}></Book>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BooksCarousel;
