import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import ClassCourseCart from '../ClassOneToTwelve/ClassCourseCart';


const IslamicCourse = () => {
    const [islamicCourse, setIslamicCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/courses/islamicCourse")
            .then(res => res.json())
            .then(data => {
                setIslamicCourse(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                islamicCourse?.map((course) => <ClassCourseCart
                    key={course._id}
                    course={course}
                >

                </ClassCourseCart>)
            }
        </div>
    );
};

export default IslamicCourse;
