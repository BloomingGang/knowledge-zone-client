import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';

const KidsCourse = () => {
    const [kidsCourse, setKidsCourse] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/kidsCourse")
            .then(res => res.json())
            .then(data => setKidsCourse(data))
    }, [])


    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                kidsCourse?.map((course) => <CourseCart
                    key={course._id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default KidsCourse;
