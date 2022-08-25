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
    fetch(`https://shielded-forest-27142.herokuapp.com/books`)
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
            <h3
              className="text-center text-4xl font-bold text-violet-800 pt-10"
              data-aos-delay="200"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Books
            </h3>
          </div>

          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4"></div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {books?.slice(-6).map((book, index) => (
                <div
                  className="relative"
                  key={index}
                  data-aos-delay="200"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div
                    onClick={() => handleBook(book._id)}
                    className="cursor-pointer flex justify-center"
                  >
                    <img className="rounded-lg" src={book.img} alt="" />
                  </div>
                  {/* <div className="text-center absolute">
                    <button   className="btn btn-xs border-violet-800 rounded-lg bg-violet-800 text-white font-bold hover:bg-transparent hover:text-violet-900 hover:border-violet-900" 
                    onClick={() => handleBook(book._id)}>
                      View Details
                    </button>
                  </div> */}
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
