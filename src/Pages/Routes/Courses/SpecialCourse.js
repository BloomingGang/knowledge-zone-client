import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import CourseCart from "./CourseCart";

const SpecialCourse = () => {
  const [specialCourse, setSpecialCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://immense-meadow-70411.herokuapp.com/courses/specialCourse")
      .then((res) => res.json())
      .then((data) => {
        setSpecialCourse(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 ">
      {specialCourse?.map((course) => (
        <CourseCart key={course.id} course={course}></CourseCart>
      ))}
    </div>
  );
};

export default SpecialCourse;
