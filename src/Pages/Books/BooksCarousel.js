import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";

const BooksCarousel = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const handleBook = (id) => {
    navigate(`/book/${id}`);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      gap: "20px",
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

          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4"></div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {books?.slice(-6).map((book, index) => (
                <div className="border-2 rounded-lg">
                  <img className="" src={book.img} alt="" />
                  <hr />
                  <h1 className="text-center text-sm md:text-xl p-2 md:p-3 font-semibold pt-2 pb-2 md:pb-4 truncate">
                    {book.bookName}
                  </h1>
                  <hr />
                  <div className="flex justify-center items-center text-sm md:text-lg font-medium md:font-semibold cursor-pointer py-2 md:py-3 text-blue-700">
                    <button onClick={() => handleBook(book._id)}>
                      Viwe Details
                    </button>
                  </div>
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
