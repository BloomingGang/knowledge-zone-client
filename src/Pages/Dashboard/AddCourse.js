import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const AddCourse = () => {
  const selectCourse = [
    "classOne",
    "classTwo",
    "classThree",
    "classFour",
    "classFive",
    "classSix",
    "classSeven",
    "classEight",
    "classNine",
    "classTen",
    "classEleven",
    "classTwelve",
    "liveCourse",
    "discountCourse",
    "entertainCourse",
    "freeCourse",
    "islamicCourse",
    "kidsCourse",
    "specialCourse",
  ];
  const handleAddCourse = (event) => {
    event.preventDefault();

    const classCourse = event.target.course.value;
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

    const addCourse = {
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

    axios.post(`http://localhost:5000/addCourse`, addCourse).then((res) => {
      toast.success(`Add a Course for ${classCourse}`);
      event.target.reset();
    });
    console.log(addCourse);
  };
  return (
    <div className="p-12 bg-violet-200">
      <form
        className="bg-violet-300 rounded-xl md:w-2/3 mx-auto font-serif px-8 pb-12"
        onSubmit={handleAddCourse}
      >
        <h1 className="text-center p-8 text-3xl font-bold pb-16 text-violet-900 ">
          Add Courses Here
        </h1>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-6">
            <label class="label">
              {" "}
              <span className="label-text text-lg font-sans">
                Courses Type:
              </span>
            </label>
            <select
              name="course"
              required
              class="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Course Name:
              </option>
              {selectCourse.map((course) => (
                <option>{course}</option>
              ))}
            </select>
          </div>

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
                placeholder="Course Title"
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
                placeholder="Course Image url"
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
                placeholder="Course Price"
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
                placeholder="Course Description"
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
                placeholder="Instructor Name"
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
                placeholder="Instructor Education"
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
                placeholder="About Course"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Total video duration:
                </span>
              </label>
              <input
                required
                type="number"
                name="hour"
                min={1}
                placeholder="Total video duration"
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
                min={1}
                placeholder="Total Videos"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                {" "}
                <span className="label-text text-lg font-sans">
                  Total Quiz:
                </span>
              </label>
              <input
                required
                type="Number"
                name="quiz"
                min={1}
                placeholder="Total Quiz"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="mb-6">
            <div class="form-control w-full max-w-xs pb-8">
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
                min={1}
                placeholder="Total Notes"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Course"
          className="btn w-full bg-violet-900 mx-auto block hover:bg-transparent hover:text-violet-900 hover:border-violet-900"
        />
      </form>
    </div>
  );
};

export default AddCourse;
