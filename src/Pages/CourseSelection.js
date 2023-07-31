import React, { useEffect, useState } from "react";
// import { courses } from "../helper/CoursesData";
import crs1 from "../Assets/crs1.png";
import crs2 from "../Assets/crs2.png";
import crs3 from "../Assets/crs3.png";
import crs4 from "../Assets/crs4.png";
import "../Styles/CourseSelection/CourseSelection.scss";
import { useNavigate } from "react-router";
import axios from "axios";
import { GetAllCoursesApi } from "../API";

const CourseSelection = ({token}) => {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const headers = {
      Token: `${token}` 
    }
    axios
      .get(GetAllCoursesApi, {
        headers
      }) // Replace with your API endpoint
      .then((response) => {
        setCourses(response.data.data.courses);
        // console.log(response.data.data.courses)
      })
      .catch((error) => {
        console.error("Error fetching courses gelmedi:", error);
      });
  }, [token]);
  
  return (
    <div className="courseSelection">
      <div className="courseHeader">
        <div className="headerLeft">Our Popular Courses</div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <div className="dropdown-item">
                Action
              </div>
            </li>
            <li>
              <div className="dropdown-item">
                Another action
              </div>
            </li>
            <li>
              <div className="dropdown-item">
                Something else here
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="courses">
        {courses?.map((course, index) => {
          return (
            <div className="course" key={index} onClick={() => navigate(`${course._id}`)}>
              <div className="course-img">
                <img src={course.course_thumb_image} alt="" />
              </div>
              <div className="course-info">
                <div className="course-title">{course.course_name}</div>
                <div className="course-description">{course.course_description}</div>
                <hr />
                <div className="course-features">
                  <div className="course-feature">
                    <img src={crs1} alt="" />
                    <span>Recorded Lecture</span>
                  </div>
                  <div className="course-feature">
                    <img src={crs2} alt="" />
                    <span>Enrolled</span>
                  </div>
                  <div className="course-feature">
                    <img src={crs3} alt="" />
                    <span>Course Hours</span>
                  </div>
                  <div className="course-feature">
                    <img src={crs4} alt="" />
                    <span>{course.ranking || 4.7}</span>
                  </div>
                </div>
                <div className="course-button">ENROLL NOW</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSelection;
