import React, { useEffect, useState } from "react";
import {
  HiOutlineArrowTrendingUp,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentChartBar,
} from "react-icons/hi2";
import { GrDocumentTime } from "react-icons/gr";
import { TbCertificate, TbEaseInControlPoint } from "react-icons/tb";
import { TfiPencilAlt } from "react-icons/tfi";
import { dashSections, teachers } from "../helper/DashboardData";
import product from "../Assets/product.png";
import python from "../Assets/python.png";
import game from "../Assets/game.png";
import ui from "../Assets/ui.png";
import web from "../Assets/web.png";
import leadership from "../Assets/leadership.png";
import peoples from "../Assets/peoples.png";
import graph from "../Assets/graph.png";
import img4 from "../Assets/image 13.png";
import teacher from "../Assets/teacher.png";
import "../Styles/Dashboard/Dashboard.scss";
import { useNavigate } from "react-router";
import Piechart from "../Components/PieChart/Piechart";
import Apexchart from "../Components/PieChart/Apexchart";

const Dashboard = ({ userinfo, activePage, setActivePage }) => {

  const [timezone, setTimezone] = useState("Good Morning");
  useEffect(() => {
    let hour = new Date().getHours();
    // console.log(date);
    if (hour >= 0 && hour < 12) {
      setTimezone("Good Morning");
    } else if (hour >= 12 && hour < 17) {
      setTimezone("Good Afternoon");
    } else if (hour >= 17 && hour < 24) {
      setTimezone("Good Evening");
    }
  }, []);

  const navigate = useNavigate()
  return (
    <div className="dashboard">

      <div className="dash-top">
        <div className="dash-hello">
        <div className="hello-main">
            {timezone}{" "}
            {userinfo.fullName.split("")[0].toUpperCase() +
              userinfo.fullName.slice(1) || ""}{" "}
            👋
          </div>
          <div className="hello-below">
            Welcome Back! Hope you are doing Great.
          </div>
        </div>
        <div className="dash-sections my-3 mt-2"
          style={{ width: 1090 }}>
          {dashSections.map((dashSection, index) => {
            return (
              <div
                key={index}
                className="dash-section"
                style={{ backgroundColor: `${dashSection.background}` }}
                onClick={() => {
                  switch (dashSection.title) {
                    case "Explore Courses":
                      setActivePage("courseSelection");
                      navigate("/courseSelection")
                      break;
                    case "Apply Internship":
                      setActivePage("InternshipPage");
                      navigate("/InternshipPage")
                      break;
                    case "Global Teachers":
                      setActivePage("teacherSelection");
                      navigate("/teacherSelection")
                      break;
                    case "Interns Networking":
                      setActivePage("Message");
                      navigate("/Message")
                      break;
                  }
                }}
              >
                <div className="sec-img" >
                  <img src={dashSection.image} alt="" />
                </div>
                <div className="sec">
                  <div className="sec-title">{dashSection.title}</div>
                  <div className="sec-button">See More</div>
                </div>
                <div className="sec-graph">
                  <HiOutlineArrowTrendingUp />
                </div>
              </div>
            );
          })}
          <div
            className="dash-section"
            style={{ backgroundColor: "rgb(236,59,87)" }}
            onClick={() => {
              switch ("Interns Networking") {
                case "Explore Courses":
                  setActivePage("courseSelection");
                  navigate("/courseSelection")
                  break;
                case "Apply Internship":
                  setActivePage("InternshipPage");
                  navigate("/InternshipPage")
                  break;
                case "Global Teachers":
                  setActivePage("teacherSelection");
                  navigate("/teacherSelection")
                  break;
                case "Interns Networking":
                  setActivePage("Message");
                  navigate("/Message")
                  break;
              }
            }}
          >
            <div className="sec-img" >
              <img src={img4} alt="" />
            </div>
            <div className="sec">
              <div className="sec-title">Interns Networking</div>
              <div className="sec-button">See More</div>
            </div>
            <div className="sec-graph">
              <HiOutlineArrowTrendingUp />
            </div>
            <span className="cover">
              <p>Coming Soon</p>
            </span>
          </div>
        </div>
      </div>


      <div className="dash-analytics mb-5">
        <div className="piechartsection">
          {/* <Piechart /> */}

          <Apexchart />
          <h3>Assignments
          </h3>
        </div>
        <div className="piechartsection">
          {/* <Piechart /> */}
          <Apexchart />

          <h3>Attendance</h3>
        </div>
        <div className="piechartsection">
          {/* <Piechart /> */}
          <Apexchart />

          <h3>Quizes</h3>
        </div>
      </div>

     <div className="dash-analytics my-5">
        <div className="analytics-left">
          <div className="analytic-l-header mb-3">Score Analytics</div>
          <div className="analytic-lb">
            <div className="analytic-lb-graph">
              <img src={graph} alt="" />
            </div>
            <div className="analytic-lb-graphContent">
              <ul>
                <li>Learning Score</li>
                <li>Assignment Score</li>
                <li>Project Score</li>
                {/* <li>Companies Where You Can Apply</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="analytics-right">
          <div className="analytic-rl">
            <div className="analytic-rl-pp">
              <img src={teacher} alt="" />
            </div>
            <div className="analytic-rl-name">Rickey Powers</div>
            <div className="analytic-rl-position">Web Designing Course</div>
            <div className="analytic-rl-feature1 mt-3">
              <div className="feature1-logo">
                <HiOutlineDocumentChartBar />
              </div>
              <div className="feature1-info">
                <div className="feature1-info-no">126</div>
                <div className="feature1-info-name">Earned Points</div>
              </div>
            </div>
          </div>
          <div className="analytic-rr">
            <div className="plus">+</div>
            <div className="analytic-rr-feature2">
              <div className="feature2-logo">
                <GrDocumentTime />
              </div>
              <div className="feature2-info">
                <div className="feature2-info-no">126</div>
                <div className="feature2-info-name">Assignments</div>
              </div>
            </div>
            <div className="analytic-rr-feature2">
              <div className="feature2-logo">
                <TbCertificate />
              </div>
              <div className="feature2-info">
                <div className="feature2-info-no">200</div>
                <div className="feature2-info-name">Certificates</div>
              </div>
            </div>
            <div className="analytic-rr-feature2">
              <div className="feature2-logo">
                <HiOutlineClipboardDocumentList />
              </div>
              <div className="feature2-info">
                <div className="feature2-info-no">90%</div>
                <div className="feature2-info-name">Attendance</div>
              </div>
            </div>
            <div className="analytic-rr-feature2">
              <div className="feature2-logo">
                <TfiPencilAlt />
              </div>
              <div className="feature2-info">
                <div className="feature2-info-no">120</div>
                <div className="feature2-info-name">Quizes</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="dash-leadership" >
        <div className="leadership-l">
          <div className="leadership-l-header">Leadership Board</div>
          <div className="leadership-l-headerBelow ">#Candidates Ranking</div>
          <div className="teachers mt-4" >
            {teachers.map((teacher, index) => {
              return (
                <div key={index} className="teacher" >
                  {/* <div className="teacher-rank">⭐ {teacher.rank}</div> */}
                  <div className="teacher-pp">
                    {/* <img src={teacher.pp} alt="" /> */}
                    {!userinfo.profilePic ? (
                      <div className="nameCircle  customimg" >{userinfo.fullName.split("")[0].toUpperCase()}</div>
                    ) : (
                      <img
                        className="rounded-circle"
                        src={teacher.pp}
                        alt="imageicon"
                        width={"100%"}
                      // height={"30px"}
                      />
                    )}
                  </div>
                  <div className="teacher-name"> {userinfo.fullName.split("")[0].toUpperCase() +
                    userinfo.fullName.slice(1) || ""}</div>
                  <div className="teacher-title">{teacher.title}</div>
                  <div className="teacher-button">View Profile</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="leadership-r">
          <div className="leadership-r-up">
            <span className="cover">
              <p>Coming Soon</p>
            </span>
            <div className="r-up-header">Communities Feed</div>
            <div className="r-up-list">
              <ul>
                <li>
                  <img src={web} alt="" />
                  Web Designing Course
                </li>
                <li>
                  <img src={product} alt="" />
                  Product Designing Course
                </li>
                <li>
                  <img src={game} alt="" />
                  Game Development
                </li>
                <li>
                  <img src={ui} alt="" />
                  UI UX Designer Course
                </li>
                <li>
                  <img src={python} alt="" />
                  Python Coding Course
                </li>
                <li>
                  <img src={ui} alt="" />
                  UI UX Designer Course
                </li>
              </ul>
            </div>
          </div>
          <div className="leadership-r-below">
            <span className="cover">
              <p>Coming Soon</p>
            </span>
            <div className="r-below-img">
              <img src={leadership} alt="" style={{ width: 310 }} />
            </div>
            <div className="r-below-header">
              Learn Freelancing Skills By Joining Our Event
            </div>
            <div className="r-below-below">
              <img src={peoples} alt="" />
              12+ People interested in this event
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
