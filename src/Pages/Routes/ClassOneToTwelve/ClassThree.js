import React, { useEffect, useState } from "react";
import ClassesCart from "./ClassesCart";

const ClassThree = () => {
  const [classThree, setClassThree] = useState([]);
  useEffect(() => {
    fetch("https://frozen-sierra-37797.herokuapp.com/classThree")
      .then((res) => res.json())
      .then((data) => setClassThree(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classThree?.map((course) => (
        <ClassesCart key={course._id} course={course}></ClassesCart>
      ))}
    </div>
  );
};

export default ClassThree;
