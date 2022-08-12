import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "../ClassOneToTwelve/ClassCourseCart";
const DiscountCourse = () => {
  const [discountCourses, setDiscountCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/courses/discountCourse")
      .then((res) => res.json())
      .then((data) => {
        setDiscountCourses(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mx-5">
      {discountCourses?.map((course) => (
        <ClassCourseCart key={course.id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default DiscountCourse;
