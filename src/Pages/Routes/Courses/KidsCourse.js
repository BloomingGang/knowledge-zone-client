import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import CourseCart from './CourseCart';

const KidsCourse = () => {
    const [kidsCourse, setKidsCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://immense-meadow-70411.herokuapp.com/kidsCourse")
            .then(res => res.json())
            .then(data => {
                setKidsCourse(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                kidsCourse?.map((course) => <CourseCart
                    key={course._id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default KidsCourse;
