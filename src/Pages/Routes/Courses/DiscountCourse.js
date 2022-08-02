import React from 'react';
import CourseCart from './CourseCart';
import courseImg from '../../../img/assets/LearningProgram/Live.png'
const DiscountCourse = () => {
    const discountCourses = [
        {
            id: 1,
            img: courseImg,
            title: 'Buy this course',
            price: 100

        },
        {
            id: 2,
            img: courseImg,
            title: 'Buy this course',
            price: 500

        },
        {
            id: 3,
            img: courseImg,
            title: 'Buy this course',
            price: 100

        },
        {
            id: 4,
            img: courseImg,
            title: 'Buy this course',
            price: 150

        }
    ]
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