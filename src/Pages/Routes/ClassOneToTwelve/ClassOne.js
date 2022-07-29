import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassOne = () => {

    const [classOne, setClassOne] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classOne")
            .then(res => res.json())
            .then(data => setClassOne(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 px-5'>
            {
                classOne?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassOne;