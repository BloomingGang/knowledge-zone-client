import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "./ClassCourseCart";

const ClassOne = () => {
  const [classOne, setClassOne] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/courses/classOne`)
      .then((res) => res.json())
      .then((data) => {
        setClassOne(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading> </Loading>;
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classOne?.map((course) => (
        <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default ClassOne;
