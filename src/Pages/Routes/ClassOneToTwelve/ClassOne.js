import React from 'react';
import courseImg from '../../../img/assets/LearningProgram/Live.png'
import ClassesCart from './ClassesCart';

const ClassOne = () => {
    const classOne = [
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
              classOne?.map((course)=> <ClassesCart
              key={course.id}
              course={course}
              >

              </ClassesCart> ) 
            }
        </div>
    );
};

export default ClassOne;