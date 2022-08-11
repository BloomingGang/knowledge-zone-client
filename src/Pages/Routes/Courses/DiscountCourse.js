import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import CourseCart from './CourseCart';
const DiscountCourse = () => {

    const [discountCourses, setDiscountCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://immense-meadow-70411.herokuapp.com/discountCourse")
            .then(res => res.json())
            .then(data => {
                setDiscountCourses(data)
                setLoading(false);
            })
    }, [])
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                discountCourses?.map((course) => <CourseCart
                    key={course.id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default DiscountCourse;