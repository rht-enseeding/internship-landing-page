import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Dashboard from "../Pages/Dashboard";
import CourseSelection from "../Pages/CourseSelection";
import TeacherSelection from "../Pages/TeacherSelection";
import CourseMilestone from "../Pages/CourseMilestone";
import CourseMilestoneEmpty from "../Pages/CourseMilestoneEmpty";
import Message from "../Pages/Message";
import InternshipPage from "../Pages/InternshipPage";
import Header from "../Components/Navbar/Header";
import Assignment from "../Pages/Assignment";
import Projects from "../Pages/Projects";
import CourseDetail from '../Pages/CourseDetail'
import AssignmentDetail from '../Pages/AssignmentDetail'
import ProjectDetail from '../Pages/ProjectDetail'
import TeacherProfile from "../Pages/TeacherProfile"
import UserProfile from "../Pages/UserProfile";
import NotFound from "../Pages/NotFound";
import { useSelector } from "react-redux";

const AppRouter = ({
  user,
  userinfo,
  token,
  setToken,
}) => {
  const {activePageNew} = useSelector((state)=> state.activePageNew)
  const [sideMenu, setSideMenu] = useState(false);
  const [activePage, setActivePage] = useState(activePageNew);
  return (
    <BrowserRouter>
      <div className="router w-100">
        <Navbar
          sideMenu={sideMenu}
          setSideMenu={setSideMenu}
          user={user}
          activePage={activePage}
        />
        <Header
          sideMenu={sideMenu}
          setSideMenu={setSideMenu}
          userinfo={userinfo}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                userinfo={userinfo}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path="/course-selection"
            element={<CourseSelection token={token} setToken={setToken} />}
          />
          <Route path="/course-selection/:id" element={<CourseDetail />} />
          <Route
            path="/teacher-selection"
            element={<TeacherSelection token={token} setToken={setToken} />}
          />
          <Route path="/teacher-profile/:id" element={<TeacherProfile />} />
          <Route path="/course-milestone" element={<CourseMilestone />} />
          <Route path="/message" element={<Message />} />
          <Route path="/internship-page" element={<InternshipPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/assignment-detail" element={<AssignmentDetail />} />
          <Route
            path="/user-profile"
            element={
              <UserProfile userinfo={userinfo} token={token} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
