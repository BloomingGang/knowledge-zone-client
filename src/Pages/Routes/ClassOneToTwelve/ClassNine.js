import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassNine = () => {
    const [classNine, setClassNine] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classNine")
            .then(res => res.json())
            .then(data => setClassNine(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 px-5'>
            {
                classNine?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassNine;