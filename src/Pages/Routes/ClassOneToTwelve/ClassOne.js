import React, { useEffect, useState } from "react";
import ClassesCart from "./ClassesCart";

const ClassOne = () => {
  const [classOne, setClassOne] = useState([]);
  useEffect(() => {
    fetch("https://frozen-sierra-37797.herokuapp.com/classOne")
      .then((res) => res.json())
      .then((data) => setClassOne(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classOne?.map((course) => (
        <ClassesCart key={course._id} course={course}></ClassesCart>
      ))}
    </div>
  );
};

export default ClassOne;
