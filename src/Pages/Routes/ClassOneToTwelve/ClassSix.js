import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassSix = () => {
    const [classSix, setClassSix] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classSix")
            .then(res => res.json())
            .then(data => setClassSix(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 '>
            {
                classSix?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassSix;