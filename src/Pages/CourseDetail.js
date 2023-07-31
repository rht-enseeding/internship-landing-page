import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { courses } from "../helper/CoursesData";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import timerpause from "../Assets/timerpause.png";
import frame from "../Assets/frame.png";
import arrow from "../Assets/arrow.png";
import cd1 from "../Assets/cd1.png";
import cd2 from "../Assets/cd2.png";
import cd3 from "../Assets/cd3.png";
import cd4 from "../Assets/cd4.png";
import cdiFooter from "../Assets/cdiFooter.png";
import video from "../Assets/video.png";
import "../Styles/CourseSelection/CourseDetail.scss";
import { GetCourseApi } from "../API";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState("")
  // let course = courses.filter((course) => course.id.toString() === id)[0];
  useEffect(() => {
    axios
      .get(`${GetCourseApi}/${id}`) // Replace with your API endpoint
      .then((response) => {
        setCourse(response.data.data.course);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);
  return (
    <div className="CourseDetail">
      <div className="course-detail-header mb-3">{course.course_name}</div>
      <div className="course-detail-info">
        <div className="cdi-left">
          <div className="cdi-description my-3">{course.course_description}</div>
          <div className="cdi-ranking my-3">
            <span className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            {course.ranking} (479 reviews){" "}
            <span>81,172 enrolled on this course</span>
          </div>
          <div className="cdi-img my-3">
            <img src={course.course_thumb_image} alt="" />
          </div>
          <div className="cdi-features my-3">
            <div className="cdi-feature">
              <img src={frame} alt="" />
              <span>
                Duration <span className="d-block">{course.course_duration} weeks</span>
              </span>
            </div>
            <div
              className="cdi-feature"
              style={{
                borderLeft: "2px solid black",
                borderRight: "2px solid black",
                width: "220px",
              }}
            >
              <img src={timerpause} alt="" />
              <span>
                Weekly study <span className="d-block">2 hours</span>
              </span>
            </div>
            <div className="cdi-feature">
              <img src={arrow} alt="" />
              <span>Unlimited Subscription</span>
            </div>
          </div>
        </div>
        <div className="cdi-right">
          <div className="cdi-right-main">
            <div className="cdi-r-title">{course.title}</div>
            <div className="cdi-r-ranking">
            <span className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
              {course.ranking} (479 reviews){" "}
            </div>
            <div className="cdi-r-enroll">81,172 enrolled on this course</div>
            <div className="cdi-r-feature">
              <img src={cd1} alt="" />
              <span>{course.course_duration} weeks</span>
            </div>
            <div className="cdi-r-feature">
              <img src={cd2} alt="" />
              <span>2 hours per week</span>
            </div>
            <div className="cdi-r-feature">
              <img src={cd3} alt="" />
              <span>Digital certificate when eligible</span>
            </div>
            <div className="cdi-r-feature">
              <img src={cd4} alt="" />
              <span>Introductory level</span>
            </div>
            <div className="cdi-r-button">Watch Videos</div>
          </div>
          <div className="cdi-right-footer mt-3">
            <span>Find out more</span> about how to join this course
          </div>
        </div>
      </div>
      <div className="course-detail-below mt-5">
        <h1 className="mt-5">
          Learn the professional career development tools to get your career on
          track
        </h1>
        <p>
          Most people want to achieve career success, but how can you make it a
          reality?
        </p>
        <p>
          On this course, you’ll get the tools to take your career to the next
          level.
        </p>
        <p>
          Using planning tools, you’ll establish goals for your career and how
          to achieve them.
        </p>
        <p>
          You’ll learn how to navigate the process of applying for jobs and
          interviews, and consider the importance of transferable skills and
          creating the right professional networks.
        </p>
        <div className="cdb-video mt-5">
          <img src={course.demo_video_src} alt="" />
          <div className="cdb-video-play">
            <AiFillPlayCircle />
          </div>
        </div>
        <div className="cdb-download mt-3 mb-5">
          Download video: <span>standard or HD</span>
        </div>
      </div>
      <div className="course-detail-footer mt-5">
        <div>
          <h1>What topics will you cover?</h1>
          <ul>
            <li>Careers in the modern professional landscape</li>
            <li>
              What topics will you cover? Careers in the modern professional
              landscape
            </li>
            <li>How to use vision boards to identify your own career
              roadmap</li>
            <li>Exploring goal setting and understanding value propositions</li>
            <li>Goal setting</li>
            <li>Building a professional network</li>
            <li>Building relationships</li>
            <li>Dealing with change and always being ready to learn</li>
          </ul>
        </div>
        <div className="course-detail-footer-img">
          <img src={cdiFooter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
