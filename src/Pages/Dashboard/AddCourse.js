import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddCourse = () => {

    const selectCourse = ["classOne", "classTwo", "classThree", "classFour", "classFive", "classSix", "classSeven", "classEight", "classNine", "classTen", "classEleven", "classTwelve", "liveCourse", "discountCourse", "entertainCourse", "freeCourse", "islamicCourse", "kidsCourse", "specialCourse"]
    const handleAddCourse = (event) => {
        event.preventDefault();

        const classCourse=event.target.course.value;
        const getImg =event.target.image.value;
        const title= event.target.title.value;
        const price =event.target.price.value;
        const shortDesc =event.target.sortDesc.value;
        const instructorName=event.target.instructorName.value;
        const education =event.target.education.value;
        const about =event.target.about.value;
        const hour =event.target.hour.value;
        const videos =event.target.videos.value;
        const quiz =event.target.quiz.value;
        const note =event.target.note.value;

        const addCourse = {
            "classCourse": classCourse,
            "img": getImg,
            "title": title,
            "price": price,
            "state": "unread",
            "ShortDescription": shortDesc,
            "instructorImg": getImg,
            "instructorName": instructorName,
            "education": education,
            "objective": {
                "point1": "Necessary spoken English skills for job interviews, presentations, local and foreign client meetings, conversations with colleagues.",
                "point2": "Cover letter/ resume writing to apply for jobs and email/ report writing in English.",
                "point3": "Speaking English using the right words and the correct pronunciation in the office, hangouts with colleagues, and in meetings."
            },
            "about": about,
            "syllabus": {
                "free": {
                    "title": "Resume, Cover Letter, LinkedIn",
                    "point1": "Resume Writing",
                    "point2": "Cover Letter Writing",
                    "point3": "LinkedIn Profile Setup"
                },
                "email": {
                    "title": "Email Writing",
                    "point1": "Email basic Writing",
                    "point2": "Meeting Calling Template",
                    "point3": "Cold email send"
                },
                "monologues": {
                    "title": "How to Speak English",
                    "point1": "How to give introduction",
                    "point2": "How to give presentation",
                    "point3": "How to promot your office"
                }
            },
            "video": getImg,
            "promoCode": "bk5283",
            "Enrolled": 25,
            "hours": hour,
            "videos": videos,
            "quizzes": quiz,
            "notes": note,
            "transcripts": 10



        }

        axios.post(`http://localhost:5000/addCourse`, addCourse)
            .then(res => {
                toast.success(`Add a Course for ${classCourse}`);
                event.target.reset();
            })
        console.log(addCourse);
    };
    return (
        <div>
            <form className='container mx-auto ' onSubmit={handleAddCourse}>
                <div className='grid grid-cols-4 gap-4'>
                    <div className="mb-6">
                    <label class="label"> <span class="label-text">Courses Type</span></label>
                        <select name='course' required class="select select-bordered w-full max-w-xs">
                            <option  disabled selected>Select Course Name</option>
                            {
                                selectCourse.map(course => <option>{course}</option>)
                            }

                        </select>
                    </div>

                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span  class="label-text">Course Title</span></label>
                            <input required type="text" name="title" placeholder="Course title" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Course Image</span></label>
                            <input required type="text" name='image' placeholder="Course Image Url" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Course Price</span></label>
                            <input required type="number" name='price' placeholder="Course Price" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Course Description</span></label>
                            <textarea  required type="text" name='sortDesc' placeholder="Course Description" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Instructor Name</span></label>
                            <input required type="text" name='instructorName' placeholder="Instructor Name" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Instructor Education</span></label>
                            <textarea required type="text" name='education' placeholder="Instructor Education" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">About Course</span></label>
                            <textarea required type="text" name='about' placeholder="About Course" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Total video duration</span></label>
                            <input required type="number" name='hour' placeholder="Total video duration" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Total Videos</span></label>
                            <input required type="Number" name='videos' placeholder="Total Videos" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Total Quiz</span></label>
                            <input required type="Number" name='quiz' placeholder="Total Quiz" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div class="form-control w-full max-w-xs">
                            <label class="label"> <span class="label-text">Total Notes</span></label>
                            <input required  type="Number" name='note' placeholder="Total Notes" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Add Course" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" style={{ display: 'block', width: '100%' }} />
            </form>
        </div>
    );
};

export default AddCourse;