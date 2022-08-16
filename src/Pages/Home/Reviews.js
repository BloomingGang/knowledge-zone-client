import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
// import quote from '../../../src/img/quote.png'
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Reviews = () => {
  const [reviwe, setreviwe] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/addreview`)
      .then((response) => response.json())
      .then((data) => setreviwe(data));
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
      <section
        // className='my-20'
        id="team-section"
      >
        <div className="container mx-auto">
          <div className="mb-12 w-full mx-auto">
            <h3 className="text-center text-4xl font-bold text-violet-800 pt-10">
              Millions Of Happy Students And Counting
            </h3>
          </div>

          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4">
            <div></div>
          </div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {reviwe.map((reviwe) => (
                <div className="bg-white rounded-xl py-2">
                  <h2 className="font-bold text-lg px-5 pb-2">{reviwe.name}</h2>
                  <p className="px-5 pb-3 text-justify">{reviwe.comment}</p>
                  <div className="px-5">
                    <div className="flex justify-start items-center text-bold font-serif">
                      {/* <p>Ratting: </p> */}
                      <p>
                        <Rating
                          readonly
                          initialRating={reviwe.ratting}
                          emptySymbol={
                            <AiOutlineStar color="orange" size={"15px"} />
                          }
                          fullSymbol={
                            <AiFillStar color="orange" size={"15px"} />
                          }
                        />
                      </p>
                    </div>
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

export default Reviews;
