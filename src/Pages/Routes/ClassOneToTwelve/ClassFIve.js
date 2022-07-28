import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassFIve = () => {
    const [classFive, setClassFive] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classFive")
            .then(res => res.json())
            .then(data => setClassFive(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 px-5'>
            {
                classFive?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassFIve;