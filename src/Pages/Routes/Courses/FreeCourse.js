import React from 'react';
import CourseCart from './CourseCart';
import courseImg from '../../../img/assets/LearningProgram/Live.png'

const FreeCourse = () => {
    const freeCourses = [
        {
            id: 1,
            img: courseImg,
            title: 'Buy this course',
            price: 1000

        },
        {
            id: 1,
            img: courseImg,
            title: 'Buy this course',
            price: 100

        },
        {
            id: 3,
            img: courseImg,
            title: 'Buy this course',
            price: 2000

        },
        {
            id: 4,
            img: courseImg,
            title: 'Buy this course',
            price: 1500

        }
    ]
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
              freeCourses?.map((course)=> <CourseCart
              key={course.id}
              course={course}
              >

              </CourseCart> ) 
            }
        </div>
    );
};

export default FreeCourse;