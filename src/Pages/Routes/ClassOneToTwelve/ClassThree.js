import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "./ClassCourseCart";

const ClassThree = () => {
  const [classThree, setClassThree] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/courses/classThree")
      .then((res) => res.json())
      .then((data) => {
        setClassThree(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classThree?.map((course) => (
        <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default ClassThree;
