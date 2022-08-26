import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassCourseCart from "./ClassCourseCart";

const ClassEleven = () => {
  const [classThree, setClassThree] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://desolate-beach-15424.herokuapp.com/courses/classEleven")
      .then((res) => res.json())
      .then((data) => {
        setClassThree(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 ">
      {classThree?.map((course) => (
        <ClassCourseCart key={course._id} course={course}></ClassCourseCart>
      ))}
    </div>
  );
};

export default ClassEleven;
