import React, { useEffect, useState } from "react";
import img1 from "../../../img/assets/10001.jpg";
import img2 from "../../../img/assets/10002.jpg";
import img3 from "../../../img/assets/10003.jpg";
import img4 from "../../../img/assets/10005 (2).jpg";
import img5 from "../../../img/assets/10006 (2).jpg";
import Loading from "../../Shared/Loading";
import InstructorCard from "./InstructorCard";

const Bengali = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(instructors);
  useEffect(() => {
    fetch("http://localhost:5000/instructors/Bengali")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    <Loading></Loading>;
  }

  return (
    <div className="mx-8 mb-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {instructors?.map((instructor, index) => (
        <InstructorCard
          key={instructor._id}
          instructor={instructor}
        ></InstructorCard>
      ))}
    </div>
  );
};

export default Bengali;
