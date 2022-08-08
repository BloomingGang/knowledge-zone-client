import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassesCart from "./ClassesCart";

const ClassEight = () => {
  const [classEight, setClassEight] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://immense-meadow-70411.herokuapp.com/classEight")
      .then((res) => res.json())
      .then((data) => {
        setClassEight(data)
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classEight?.map((course) => (
        <ClassesCart key={course._id} course={course}></ClassesCart>
      ))}
    </div>
  );
};
export default ClassEight;
