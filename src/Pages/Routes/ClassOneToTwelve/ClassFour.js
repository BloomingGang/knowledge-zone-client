import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassFour = () => {
    const [classFour, setClassFour] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classFour")
            .then(res => res.json())
            .then(data => setClassFour(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 px-5'>
            {
                classFour?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassFour;