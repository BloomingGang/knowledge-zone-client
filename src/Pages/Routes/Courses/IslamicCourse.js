import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';

const IslamicCourse = () => {
    const [islamicCourse, setIslamicCourse] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/islamicCourse")
            .then(res => res.json())
            .then(data => setIslamicCourse(data))
    }, [])


    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                islamicCourse?.map((course) => <CourseCart
                    key={course._id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default IslamicCourse;
