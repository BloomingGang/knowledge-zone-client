import React, { useEffect, useState } from 'react';
import CourseCart from './CourseCart';

const IslamicCourse = () => {
    


    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                discountCourse?.map((course) => <CourseCart
                    key={course._id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default IslamicCourse;