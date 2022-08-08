import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassesCart from "./ClassesCart";

const ClassFIve = () => {
  const [classFive, setClassFive] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://immense-meadow-70411.herokuapp.com/classFive")
      .then((res) => res.json())
      .then((data) => {
        setClassFive(data)
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classFive?.map((course) => (
        <ClassesCart key={course._id} course={course}></ClassesCart>
      ))}
    </div>
  );
};

export default ClassFIve;
