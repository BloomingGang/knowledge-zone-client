import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';
const DiscountCourse = () => {

    const [discountCourses, setDiscountCourses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/discountCourse")
            .then(res => res.json())
            .then(data => setDiscountCourses(data))
    }, [])
   
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
              discountCourses?.map((course)=> <CourseCart
              key={course.id}
              course={course}
              >

              </CourseCart> ) 
            }
        </div>
    );
};

export default DiscountCourse;