import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassTwo = () => {
    const [classTwo, setClassTwo] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classTwo")
            .then(res => res.json())
            .then(data => setClassTwo(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 px-5'>
            {
                classTwo?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassTwo;