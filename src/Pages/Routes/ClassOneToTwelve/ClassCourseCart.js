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
                    <hr  className='border-2'/>
                    <div className="flex  justify-between items-center">
                        <span > <span className='text-xl font-bold'>Price:</span>  <span className='text-lg font-bold text-primary'>${price}</span></span>
                        <button 
                        className="border-2 shadow-lg hover:bg-transparent hover:text-black p-2 rounded-lg bg-primary text-white font-bold transition duration-300"
                        onClick={()=>handleCourse(_id)}
                        >Enroll Now</button>
                    </div>
                   <div>
                   <hr  className='border-2 mb-3'/>
                    <div className='flex justify-between'>
                        <button className='bg-[#7d16eb] border-2 border-gray-700 rounded-lg px-2 py-2 hover:bg-transparent text-white hover:text-black transition duration-300'>Add</button>
                        <button className='bg-[#7d16eb] border-2 border-gray-700 rounded-lg px-2 py-2 hover:bg-transparent text-white hover:text-black transition duration-300'>Delete</button>
                        <button className='bg-[#7d16eb] border-2 border-gray-700 rounded-lg px-2 py-2 hover:bg-transparent text-white hover:text-black transition duration-300'>Update</button>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default ClassCourseCart;