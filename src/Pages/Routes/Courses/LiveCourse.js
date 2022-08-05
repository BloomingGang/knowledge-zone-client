import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';

const LiveCourse = () => {
    const [liveCourse, setLiveCourse] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/liveCourse")
            .then(res => res.json())
            .then(data => setLiveCourse(data))
    }, [])
   
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
              liveCourse?.map((course)=> <CourseCart
              key={course.id}
              course={course}
              >

              </CourseCart> ) 
            }
        </div>
    );
};

export default LiveCourse;