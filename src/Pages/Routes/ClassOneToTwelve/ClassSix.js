import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassesCart from "./ClassesCart";

const ClassSix = () => {
  const [classSix, setClassSix] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://frozen-sierra-37797.herokuapp.com/classSix")
      .then((res) => res.json())
      .then((data) => {
        setClassSix(data)
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classSix?.map((course) => (
        <ClassesCart key={course._id} course={course}></ClassesCart>
      ))}
    </div>
  );
};

export default ClassSix;
