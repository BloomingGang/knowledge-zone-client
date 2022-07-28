import React, { useEffect, useState } from 'react';
import ClassesCart from './ClassesCart';

const ClassEight = () => {
    const [classEight, setClassEight] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/classEight")
            .then(res => res.json())
            .then(data => setClassEight(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4 px-5'>
            {
                classEight?.map((course) => <ClassesCart
                    key={course._id}
                    course={course}
                >

                </ClassesCart>)
            }
        </div>
    );
        }
export default ClassEight;