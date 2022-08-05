import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';


const FreeCourse = () => {
    const [freeCourses, setFreeCourses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/freeCourse")
            .then(res => res.json())
            .then(data => setFreeCourses(data))
    }, [])

   const v= [
        {
            
            "img": "https://i.ibb.co/D4Nw56x/discount-Course.jpg",
            "title": "Buy this course",
            "price": 50

        },
        {
            
            "img": "https://i.ibb.co/D4Nw56x/discount-Course.jpg",
            "title": "Buy this course",
            "price": 100

        },
        {
            
            "img": "https://i.ibb.co/D4Nw56x/discount-Course.jpg",
            "title": "Buy this course",
            "price": 150

        },
        {
            
            "img": "https://i.ibb.co/D4Nw56x/discount-Course.jpg",
            "title": "Buy this course",
            "price": 150

        }
        
    ]



    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                freeCourses?.map((course) => <CourseCart
                    key={course._id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default FreeCourse;