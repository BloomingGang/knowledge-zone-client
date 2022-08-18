import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCart = ({course}) => {
    const {_id,price,title,img}=course
    const navigate =useNavigate()

    return (
      <section>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="course" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {title}</h2>
            <div className="divider"></div>
            <div className="flex  justify-between items-center">
              <span>
                {" "}
                <span className="text-xl font-bold">Price:</span>{" "}
                <span className="text-lg font-bold text-primary">${price}</span>
              </span>
              {!course.paid && (
                <button
                  onClick={() => navigate(`/payment/${_id}`)}
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              )}
              {course.paid && <span className="text-primary">Bought It</span>}
            </div>
          </div>
        </div>
      </section>
    );
};

export default CourseCart;