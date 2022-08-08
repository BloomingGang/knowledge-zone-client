import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import CourseCart from './CourseCart';


const FreeCourse = () => {
    const [freeCourses, setFreeCourses] = useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        fetch("https://frozen-sierra-37797.herokuapp.com/freeCourse")
            .then(res => res.json())
            .then(data => {
                setFreeCourses(data)
                setLoading(false);
            })
    }, [])

    if(loading){
        return <Loading></Loading>
      }
   
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5'>
            {
                freeCourses?.map((course) => <CourseCart
                    key={course._id}
                    course={course}
                >

                </CourseCart>)
            }
        </div>
    );
};

export default FreeCourse;