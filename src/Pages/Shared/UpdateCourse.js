import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "./Loading";

const UpdateCourse = () => {
  const { id } = useParams();
  const [updateCourse, serUpdateCourse] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://immense-meadow-70411.herokuapp.com/course/${id}`)
      .then((res) => serUpdateCourse(res.data));
    setLoading(false);
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  const {
    notes,
    quizzes,
    videos,
    hours,
    img,
    about,
    education,
    instructorName,
    ShortDescription,
    price,
    title,
    classCourse,
  } = updateCourse;

  const handleUpdateCourse = (event) => {
    event.preventDefault();
    const getImg = event.target.image.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const shortDesc = event.target.sortDesc.value;
    const instructorName = event.target.instructorName.value;
    const education = event.target.education.value;
    const about = event.target.about.value;
    const hour = event.target.hour.value;
    const videos = event.target.videos.value;
    const quiz = event.target.quiz.value;
    const note = event.target.note.value;

    const updateCourse = {
      classCourse: classCourse,
      img: getImg,
      title: title,
      price: price,
      state: "unread",
      ShortDescription: shortDesc,
      instructorImg: getImg,
      instructorName: instructorName,
      education: education,
      objective: {
        point1:
          "Necessary spoken English skills for job interviews, presentations, local and foreign client meetings, conversations with colleagues.",
        point2:
          "Cover letter/ resume writing to apply for jobs and email/ report writing in English.",
        point3:
          "Speaking English using the right words and the correct pronunciation in the office, hangouts with colleagues, and in meetings.",
      },
      about: about,
      syllabus: {
        free: {
          title: "Resume, Cover Letter, LinkedIn",
          point1: "Resume Writing",
          point2: "Cover Letter Writing",
          point3: "LinkedIn Profile Setup",
        },
        email: {
          title: "Email Writing",
          point1: "Email basic Writing",
          point2: "Meeting Calling Template",
          point3: "Cold email send",
        },
        monologues: {
          title: "How to Speak English",
          point1: "How to give introduction",
          point2: "How to give presentation",
          point3: "How to promot your office",
        },
      },
      video: getImg,
      promoCode: "bk5283",
      Enrolled: 25,
      hours: hour,
      videos: videos,
      quizzes: quiz,
      notes: note,
      transcripts: 10,
    };

    axios
      .put(
        `https://immense-meadow-70411.herokuapp.com/courseUpdate/${id}`,
        updateCourse
      )
      .then((res) => {
        toast.success(`Update ${classCourse}`);
        event.target.reset();
      });
    console.log(updateCourse);
  };

  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto font-serif px-8 pb-12"
        onSubmit={handleUpdateCourse}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Update Courses Here
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Course Title:
                </span>
              </label>
              <input
                required
                type="text"
                name="title"
                placeholder={title}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Course Image:
                </span>
              </label>
              <input
                required
                type="text"
                name="image"
                placeholder={img}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Course Price:
                </span>
              </label>
              <input
                required
                type="number"
                name="price"
                placeholder={price}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Course Description:
                </span>
              </label>
              <textarea
                required
                type="text"
                name="sortDesc"
                placeholder={ShortDescription}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Instructor Name:
                </span>
              </label>
              <input
                required
                type="text"
                name="instructorName"
                placeholder={instructorName}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Instructor Education:
                </span>
              </label>
              <textarea
                required
                type="text"
                name="education"
                placeholder={education}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  About Course:
                </span>
              </label>
              <textarea
                required
                type="text"
                name="about"
                placeholder={about}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Total Video Duration:
                </span>
              </label>
              <input
                required
                type="number"
                name="hour"
                placeholder={hours}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Total Videos:
                </span>
              </label>
              <input
                required
                type="Number"
                name="videos"
                placeholder={videos}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">Total Quiz</span>
              </label>
              <input
                required
                type="Number"
                name="quiz"
                placeholder={quizzes}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Total Notes:
                </span>
              </label>
              <input
                required
                type="Number"
                name="note"
                placeholder={notes}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Update Course"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default UpdateCourse;
