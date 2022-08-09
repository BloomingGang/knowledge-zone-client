import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import ClassesCart from "./ClassesCart";
import { useNavigate } from 'react-router-dom';

const ClassOne = () => {
  const navigate = useNavigate();
  const handlePurchase = id => {
    navigate(`/coursesInfo/${id}`);
}

  const classOne = [
    {"_id":1,
      "img": "https://i.ibb.co/KVL15KR/class-1.png",
      "title": "Buy this course",
      "price": 99
    },
    {"_id":2,
      "img": "https://i.ibb.co/KVL15KR/class-1.png",
      "title": "Buy this course",
      "price": 99
    },
    {"_id":3,
      "img": "https://i.ibb.co/KVL15KR/class-1.png",
      "title": "Buy this course",
      "price": 99
    },
    {"_id":4,
      "img": "https://i.ibb.co/KVL15KR/class-1.png",
      "title": "Buy this course",
      "price": 99
    },
  ]
  // const [classOne, setClassOne] = useState([]);
  // const [loading,setLoading]=useState(true);
  // useEffect(() => {
  //   fetch("https://frozen-sierra-37797.herokuapp.com/classOne")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClassOne(data);
  //       setLoading(false);
  //     });
  // }, []);
  // if(loading){
  //   return <Loading></Loading>
  // }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 px-5 ">

      {classOne?.map((course) => (
        <ClassesCart key={course._id} course={course} handlePurchase={handlePurchase} ></ClassesCart>
      ))}
    </div>
  );
};

export default ClassOne;
