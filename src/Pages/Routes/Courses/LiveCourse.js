import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import CourseCart from './CourseCart';

const LiveCourse = () => {
    const [liveCourse, setLiveCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://immense-meadow-70411.herokuapp.com/liveCourse")
            .then(res => res.json())
            .then(data => {
                setLiveCourse(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                liveCourse?.map((course) => <CourseCart
                    key={course._id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default LiveCourse;