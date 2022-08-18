import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import quote from "../../../src/img/quote.png";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Reviews = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/addreview`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
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
              Millions Of Happy Students And Counting
            </h3>
          </div>

          <div className="flex lg:justify-between lg:flex-row flex-col lg:mx-0 mx-2 lg:mb-0 mb-4">
            <div></div>
          </div>
          <div>
            <Carousel swipeable="true" responsive={responsive} infinite={true}>
              {reviews.slice(-9).map((review, index) => (
                <div key={index} class="p-4 w-full">
                  <div class="h-full bg-indigo-100 p-8 rounded-xl">
                    <img src={quote} width={30} alt="" />
                    <p class="leading-relaxed mb-6">{review.comment}</p>
                    <a class="inline-flex items-center" href="/">
                      <img
                        alt=""
                        src={review.image}
                        class="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <p>
                          <Rating
                            readonly
                            initialRating={review.ratting}
                            emptySymbol={
                              <AiOutlineStar color="orange" size={"15px"} />
                            }
                            fullSymbol={
                              <AiFillStar color="orange" size={"15px"} />
                            }
                          />
                        </p>
                        <span class="title-font font-medium text-indigo-800">
                          {review.name}
                        </span>
                      </span>
                    </a>
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
