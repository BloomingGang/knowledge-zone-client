import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClassCourseCart = ({course}) => {
    const {price,title,img,_id,classCourse}=course
    const navigate = useNavigate();
    const handleCourse = id => {
      navigate(`/${classCourse}/coursesInfo/${id}`);
  }
   
    return (
            <section>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={img} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {title}</h2>
                    <div className="divider"></div>
                    <div className="flex  justify-between items-center">
                        <span > <span className='text-xl font-bold'>Price:</span>  <span className='text-lg font-bold text-primary'>${price}</span></span>
                        <button 
                        className="btn btn-primary"
                        onClick={()=>handleCourse(_id)}
                        >Enroll Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassCourseCart;