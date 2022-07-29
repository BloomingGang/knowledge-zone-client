import React from 'react';
import CourseCart from './CourseCart';
import courseImg from '../../../img/assets/LearningProgram/Live.png'

const FreeCourse = () => {
    const freeCourses = [
        {
            _id: 1,
            img: courseImg,
            title: 'Buy this course',
            price: 1000

        },
        {
            _id: 1,
            img: courseImg,
            title: 'Buy this course',
            price: 100

        },
        {
            _id: 3,
            img: courseImg,
            title: 'Buy this course',
            price: 2000

        },
        {
            _id: 4,
            img: courseImg,
            title: 'Buy this course',
            price: 1500

        }
    ]
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
              freeCourses?.map((course)=> <CourseCart
              key={course._id}
              course={course}
              >

              </CourseCart> ) 
            }
        </div>
    );
};

export default FreeCourse;