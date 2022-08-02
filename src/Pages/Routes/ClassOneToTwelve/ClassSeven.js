import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassSeven = () => {
    const [classSeven, setClassSeven] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classSeven")
            .then(res => res.json())
            .then(data => setClassSeven(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 '>
            {
                classSeven?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassSeven;