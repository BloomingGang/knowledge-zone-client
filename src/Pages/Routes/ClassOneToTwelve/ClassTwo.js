import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassesCart from "./ClassesCart";

const ClassTwo = () => {
  const [classTwo, setClassTwo] = useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    fetch("https://immense-meadow-70411.herokuapp.com/classTwo")
      .then((res) => res.json())
      .then((data) => {
        setClassTwo(data)
        setLoading(false);
      });
  }, []);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classTwo?.map((course) => (
        <ClassesCart key={course._id} course={course}></ClassesCart>
      ))}
    </div>
  );
};

export default ClassTwo;
