import React from "react";
import "../../Styles/Navbar/Navbar.scss";
import { BsCalendar4Week, BsGraphUp, BsPersonCircle } from "react-icons/bs";
import { SlBookOpen, SlGraduation } from "react-icons/sl";
import { TbChecklist, TbMessage2Code, TbMessageDots } from "react-icons/tb";
import {
  HiOutlinePencilSquare,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineVerticalRight } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import plan from "../../Assets/plan.png";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../redux/actions/activePageAction";
import { setUserStatus } from "../../redux/actions/userinfoAction";

const Navbar = ({ sideMenu }) => {
  // const [activePage, setActivePage] = useState("dashboard");
  const dispatch = useDispatch();
  const { activePageNew } = useSelector((state) => state.activePageNew);
  // console.log(activePageNew);
  const navigate = useNavigate();
  return (
    <div
      className="navigation-bar"
      style={sideMenu ? { display: "block" } : {}}
    >
      <div className="large-side">
        <div className="larger-up mb-5">
          <div className="close-btn"></div>
          {/* <div className="logo">
            <div className="logo-up">
              Enseedling <span>Group</span>
            </div>
            <div className="logo-below">A Day At Startup</div>
          </div> */}
          <div className="link-area">
            <div
              className={activePageNew === "dashboard" ? "link active" : "link"}
              id="dashboard"
              onClick={(e) => {
                dispatch(setActivePage("dashboard"));
                navigate("/");
              }}
            >
              <span>
                <BsGraphUp />
              </span>
              Dashboard
            </div>
            <div
              className={
                activePageNew === "course-selection" ? "link active" : "link"
              }
              id="courseSelection"
              onClick={(e) => {
                dispatch(setActivePage("course-selection"));
                navigate("/course-selection");
              }}
            >
              <span>
                <SlBookOpen />
              </span>
              Course Selection
            </div>
            <div
              className={
                activePageNew === "teacher-selection" ? "link active" : "link"
              }
              id="teacherSelection"
              onClick={(e) => {
                dispatch(setActivePage("teacher-selection"));
                navigate("/teacher-selection");
              }}
            >
              <span>
                <SlGraduation />
              </span>
              Teacher Selection
            </div>
            <div
              className={
                activePageNew === "course-milestone" ? "link active" : "link"
              }
              id="courseMilestone"
              onClick={(e) => {
                dispatch(setActivePage("course-milestone"));
                navigate("/course-milestone");
              }}
            >
              <span>
                <BsCalendar4Week />
              </span>
              Course Milestone
            </div>
            <div
              className={activePageNew === "projects" ? "link active" : "link"}
              id="projects"
              onClick={(e) => {
                dispatch(setActivePage("projects"));
                navigate("projects");
              }}
            >
              <span>
                <TbChecklist />
              </span>
              Projects
            </div>
            <div
              className={
                activePageNew === "assignment" ? "link active" : "link"
              }
              id="assignment"
              onClick={(e) => {
                dispatch(setActivePage("assignment"));
                navigate("assignment");
              }}
            >
              <span>
                <TbMessage2Code />
              </span>
              Assignment
            </div>
            <div
              className={
                activePageNew === "internship-page" ? "link active" : "link"
              }
              id="InternshipPage"
              onClick={(e) => {
                dispatch(setActivePage("internship-page"));
                navigate("internship-page");
              }}
            >
              <span>
                <HiOutlinePencilSquare />
              </span>
              Apply For Internship
            </div>
            <div
              className={
                activePageNew === "resume-services" ? "link active" : "link"
              }
              id="resumeServices"
              onClick={(e) => {
                dispatch(setActivePage("resume-services"));
              }}
            >
              <span>
                <IoNewspaperOutline />
              </span>
              Resume Services
            </div>
            <div
              className={
                activePageNew === "interview-preparation"
                  ? "link active"
                  : "link"
              }
              id="interviewPreparation"
              onClick={(e) => {
                dispatch(setActivePage("interview-preparation"));
              }}
            >
              <span>
                <HiOutlinePresentationChartLine />
              </span>
              Interview Preparation
            </div>
            <div
              className={
                activePageNew === "mock-interview" ? "link active" : "link"
              }
              id="mockInterview"
              onClick={(e) => {
                dispatch(setActivePage("mock-interview"));
              }}
            >
              <span>
                <AiOutlineVerticalRight />
              </span>
              Mock Interview
            </div>
            <div
              className={
                activePageNew === "linkedIn-builder" ? "link active" : "link"
              }
              id="linkedInBuilder"
              onClick={(e) => {
                dispatch(setActivePage("linkedIn-builder"));
              }}
            >
              <span>
                <BsPersonCircle />
              </span>
              LinkedIn Profile Builder
            </div>
          </div>
          <div className="nav-divider"></div>
          <div className="large-below">
            <div
              className={activePageNew === "message" ? "link active" : "link"}
              id="Message"
              onClick={(e) => {
                dispatch(setActivePage("message"));
                navigate("/message");
              }}
            >
              <span>
                <TbMessageDots />
              </span>
              Message
            </div>
            <div
              className="link"
              onClick={() => {
                Cookies.remove("token");
                navigate("/");
                dispatch(setUserStatus(false));
              }}
            >
              <span>
                <BiLogIn />
              </span>
              Log out
            </div>
          </div>
        </div>
        <div className="large-footer-plan ">
          <div className="plan">
            Upgrade Your Plan to <span>Pro Plan</span>
          </div>
          <div className="plan-img">
            <img src={plan} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
