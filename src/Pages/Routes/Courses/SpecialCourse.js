import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';

const SpecialCourse = () => {
    const [specialCourse, setSpecialCourse] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/specialCourse")
            .then(res => res.json())
            .then(data => setSpecialCourse(data))
    }, [])
   
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
              specialCourse?.map((course)=> <CourseCart
              key={course.id}
              course={course}
              >

              </CourseCart> ) 
            }
        </div>
    );
};

export default SpecialCourse;

