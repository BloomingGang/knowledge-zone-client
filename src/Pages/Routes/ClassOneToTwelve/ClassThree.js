import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassesCart from "./ClassesCart";

const ClassThree = () => {
  const [classThree, setClassThree] = useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    fetch("https://frozen-sierra-37797.herokuapp.com/classThree")
      .then((res) => res.json())
      .then((data) => {
        setClassThree(data)
        setLoading(false);
      });
  }, []);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">
      {classThree?.map((course) => (
        <ClassesCart key={course._id} course={course}></ClassesCart>
      ))}
    </div>
  );
};

export default ClassThree;
