import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading";

const ClassCourseDetails = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios

      .get(`https://immense-meadow-70411.herokuapp.com/course/${id}`)

      .then((res) => setCourseInfo(res.data));
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  const {
    title,
    img,
    ShortDescription,
    objective,
    instructorImg,
    instructorName,
    education,
    about,
    syllabus,
    price,
    Enrolled,
    hours,
    videos,
    quizzes,
    notes,
    transcripts,
  } = courseInfo;

  const handleCourseOrder = () => {
    const userName = user?.displayName;
    const email = user?.email;
    const productName = title;

    const order = {
      userName,
      email,
      productName,
      img,
      price,
    };

    fetch("https://immense-meadow-70411.herokuapp.com/order", {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/myOrder");
        }
      });
  };
  return (
    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12 py-12">
      <div>
        <h1 className="text-3xl text-violet-800 mb-4">{title}</h1>
        <p>{ShortDescription}</p>

        <div className="py-8">
          <h1 className="text-2xl text-violet-700 mb-4">Instructor</h1>
          <div className="flex border-2 rounded-xl p-6">
            <div class="avatar mr-8">
              <div class="w-20 rounded-full">
                <img src={instructorImg} alt=""/>
              </div>
            </div>
            <div>
              <h2 className="text-xl text-violet-700">{instructorName}</h2>
              <h3>{education}</h3>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-violet-700 mb-4">
            What you will learn from this course
          </h1>
          <div className="border-2 rounded-xl">
            <div className="p-6">
              <p>
                <i class="text-indigo-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>
                {objective?.point1}
              </p>
              <p>
                <i class="text-indigo-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
                {objective?.point2}
              </p>
              <p>
                {" "}
                <i class="text-indigo-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>
                {objective?.point3}
              </p>
            </div>

            <hr />

            <div className="p-6">
              <h1 className="text-xl text-violet-700 mb-4">
                About This Course
              </h1>
              <p>{about}</p>
            </div>
          </div>
        </div>

        <div className="py-6">
          <h1 className="text-2xl text-violet-700 mb-4">Course Syllabus</h1>
          <div className="border-2 rounded-xl p-6">
            <div
              tabindex="0"
              class="collapse collapse-arrow  bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium hover:text-violet-800">
                {syllabus?.free?.title}
              </div>
              <div class="collapse-content">
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.free?.point1}
                </p>
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.free?.point2}
                </p>
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.free?.point3}
                </p>
              </div>
            </div>
            <hr />
            <div
              tabindex="0"
              class="collapse collapse-arrow  bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium hover:text-violet-800">
                {syllabus?.email?.title}
              </div>
              <div class="collapse-content">
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.email?.point1}
                </p>
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.email?.point2}
                </p>
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.email?.point3}
                </p>
              </div>
            </div>
            <hr />
            <div
              tabindex="0"
              class="collapse collapse-arrow  bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium hover:text-violet-800">
                {syllabus?.monologues?.title}
              </div>
              <div class="collapse-content">
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.monologues?.point1}
                </p>
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.monologues?.point2}
                </p>
                <p>
                  <i class="text-indigo-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
                  {syllabus?.monologues?.point3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-2 rounded-xl">
          <img className="w-full rounded-xl" src={img} alt="" />
          <div className="p-8">
            <div className="flex justify-between">
              <a className="text-indigo-700" href="/">
                <u>Promo Code</u>
              </a>
              <p className="text-xl font-bold">$ {price}</p>
            </div>

            <button
              onClick={handleCourseOrder}
              class="btn btn-primary w-full my-4"
            >
              Buy the Course
            </button>
            <div className="flex justify-between py-6">
              <div className="flex items-center">
                <div>
                  <i class="text-indigo-900 mr-4 font-bold text-3xl fa-solid fa-users"></i>
                </div>
                <div>
                  <p>Enrolled</p>
                  <p>{Enrolled} Learners</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <i class="text-indigo-900 mr-4 font-bold text-3xl fa-solid fa-clock"></i>
                </div>
                <div>
                  <p>Hours Required</p>
                  <p>{hours} Hours</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="flex justify-between py-6">
              <div>
                <p>
                  <i class="text-indigo-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
                  {videos} Videos
                </p>
                <p>
                  <i class="text-indigo-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
                  {notes} Notes
                </p>
              </div>
              <div>
                <p>
                  <i class="text-indigo-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
                  {quizzes} Sets of Quizzes
                </p>
                <p>
                  <i class="text-indigo-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
                  {transcripts} Transcripts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCourseDetails;
