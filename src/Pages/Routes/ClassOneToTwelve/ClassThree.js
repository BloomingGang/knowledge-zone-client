import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassThree = () => {
    const [classThree, setClassThree] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classThree")
            .then(res => res.json())
            .then(data => setClassThree(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 px-5'>
            {
                classThree?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
};

export default ClassThree;