import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import colors from "../Constant";
import {
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  Rectangle6,
  Rectangle7,
  Rectangle8,
  TeacherProfileImage,
  Vector1,
  Vector2,
  Vector3,
} from "../Assets";
import { AiFillStar } from "react-icons/ai";
import Progessbar from "../Components/Progressbar";
import { GrCircleInformation } from "react-icons/gr";
import { useLocation, useParams } from "react-router";
import { getSingleTeacherSelectionAction } from "../redux/actions/teacherSelectionAction";
import { useDispatch, useSelector } from "react-redux";

function TeacherProfile() {
  const { state: data } = useLocation();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date(data.createdAt)
  // console.log(data);

  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id", id);
  const { teachers } = useSelector((state) => state.teacherSelection.user);
  // console.log("teacherDetail ", teachers);
  const teacherProfileDetail = teachers && teachers[0];
  const loading = useSelector((state) => state.teacherSelection.loading);
  const error = useSelector((state) => state.teacherSelection.error);
  useEffect(() => {
    dispatch(getSingleTeacherSelectionAction(id));
  }, [dispatch]);

  return (
    <div className="teacherDetail bg-white   d-flex flex-column justify-content-center align-items-center">
      <div className="col-10  col-lg-9 p-0  w-100">
        <div className="row m-0 d-flex justify-content-evenly ">
          <text
            className="py-2 ps-4 col-12"
            style={{
              fontFamily: "Source Sans Pro",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "35.71px",
              letterSpacing: "-1%",
              color: colors.Dark,
              paddingLeft: "5px",
            }}
          >
            Teacher Selection
          </text>
          <div
            className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4 py-4 px-4 my-2"
            style={{
              border: "1px solid",
              borderColor: colors.ShadowGrey,
              borderRadius: "15px",
              background: colors.Light,
            }}
          >
            <div className="row m-0  d-flex justify-content-center align-items-center ">
              <div className="col-6">
                <div
                  className="row "
                  style={{ position: "relative", zIndex: "0" }}
                >
                  <img
                    src={data.profilePic}
                    style={
                      {
                        // height: "22vh",
                        border:"3px solid red"
                      }
                    }
                  />
                </div>
                <div
                  className="row d-flex justify-content-center pb-2"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    marginTop: "-5px",
                    background: colors.Light,
                    position: "relative",
                    zIndex: "1",
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "10px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.Dark,
                    }}
                  >
                    {/* Level 2 */}
                    {teachers && teacherProfileDetail.expertise}
                  </text>
                  <Progessbar bgcolor={colors.TextPurple} />
                </div>
              </div>
              <text
                className="text-center pt-3"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "21px",
                  lineHeight: "31.43px",
                  letterSpacing: "-1%",
                  color: colors.Dark,
                }}
              >
                {data.teacherName}
              </text>
              <text
                className="text-center  py-1"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "15.08px",
                  letterSpacing: "-1%",
                  color: colors.TextGrey,
                }}
              >
                {data.qualification.fieldOfStudy}
              </text>
              <text
                className="text-center pb-3"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "23.88px",
                  letterSpacing: "-1%",
                  color: colors.Dark,
                }}
              >
                <span style={{ color: colors.yellow }}>
                  <AiFillStar />
                </span>
                <span style={{ color: colors.yellow }}>
                  <AiFillStar />
                </span>
                <span style={{ color: colors.yellow }}>
                  <AiFillStar />
                </span>
                <span style={{ color: colors.yellow }}>
                  <AiFillStar />
                </span>
                <span style={{ color: colors.yellow }}>
                  <AiFillStar />
                </span>
                4.7
              </text>
              <div className="col-12 d-flex justify-content-between align-items-center p-0 py-1">
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Designation
                </text>
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.TextPurple,
                  }}
                >
                  {data.designation}
                </text>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-center p-0 py-1">
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Email Address
                </text>
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.TextPurple,
                  }}
                >
                  {data.email}
                </text>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-center p-0 py-1">
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Phone No
                </text>
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.TextPurple,
                  }}
                >
                  {data.contactNo}
                </text>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-center p-0 py-1">
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Joining Date
                </text>
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.TextPurple,
                  }}
                >
                  {
                    date.getDay() +  month[date.getMonth()] +" " + date.getFullYear()
                  }
                </text>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-center p-0 py-1">
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Expertise
                </text>
                <text
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "21.0px",
                    letterSpacing: "-1%",
                    color: colors.TextPurple,
                  }}
                >
                  {data.expertise}
                </text>
              </div>
            </div>
          </div>
          <div
            className="col-11 col-md-5 col-lg-6 col-xl-7 border my-2"
            style={{
              border: "1px solid",
              borderColor: colors.ShadowGrey,
              borderRadius: "15px",
              background: colors.Light,
            }}
          >
            <div className="row d-flex justify-content-between align-items-center py-3">
              <text
                className="col-4"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "21px",
                  letterSpacing: "-1%",
                  color: colors.Dark,
                }}
              >
                Course Details
              </text>
              <div className="d-flex justify-content-end">
                <GrCircleInformation />
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center pb-2 pt-3">
              <div className="col-1">
                <img
                  src={Rectangle1}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7 ">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Graphic Design
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  John Doe won 1st place in "Chess"
                </text>
              </div>
              <div className="col-4 col-sm-3 col-md-4 col-lg-3 d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center "
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    1 Day ago
                  </text>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center py-2">
              <div className="col-1">
                <img
                  src={Rectangle2}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Machine learning
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  Justin Lee participated in "Carrom"
                </text>
              </div>
              <div className="col-4 col-sm-2 col-md-4 col-lg-3  d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    2 hours ago
                  </text>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center py-2">
              <div className="col-1">
                <img
                  src={Rectangle3}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Data Science
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  Justin Leeattended internation conference in "St.John School"
                </text>
              </div>
              <div className="col-4 col-sm-2 col-md-4 col-lg-3  d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    2 Week ago
                  </text>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center py-2">
              <div className="col-1">
                <img
                  src={Rectangle4}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Networking
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  John Doe won 1st place in "Chess"
                </text>
              </div>
              <div className="col-4 col-sm-2 col-md-4 col-lg-3  d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    3 Day ago
                  </text>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center py-2">
              <div className="col-1">
                <img
                  src={Rectangle5}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Cloud Computing
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  John Doe won 1st place in "Chess"
                </text>
              </div>
              <div className="col-4 col-sm-2 col-md-4 col-lg-3  d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    1 Day ago
                  </text>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center py-2">
              <div className="col-1">
                <img
                  src={Rectangle6}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Cryptocurrency
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  Justin Lee participated in "Carrom"
                </text>
              </div>
              <div className="col-4 col-sm-2 col-md-4 col-lg-3  d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    2 hours ago
                  </text>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center py-2">
              <div className="col-1">
                <img
                  src={Rectangle7}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Digital Marketing
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  Justin Leeattended internation conference in "St.John School"
                </text>
              </div>
              <div className="col-4 col-sm-2 col-md-4 col-lg-3  d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    2 Week ago
                  </text>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center pt-2 pb-4">
              <div className="col-1">
                <img
                  src={Rectangle8}
                  style={{
                    height: "5vh",
                  }}
                />
              </div>
              <div className="col-5 col-sm-8 col-md-5 col-lg-7">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  Product Designer
                </text>
                <text
                  className="row d-none d-xl-block"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  John Doe won 1st place in "Chess"
                </text>
              </div>
              <div className="col-4 col-sm-2 col-md-4 col-lg-3  d-flex justify-content-end align-items-center">
                <div
                  className="row m-0"
                  style={{
                    border: "1px solid",
                    borderColor: colors.ShadowGrey,
                    borderRadius: "5px",
                    background: colors.brownOrange,
                    opacity: 0.8,
                  }}
                >
                  <text
                    className="text-center"
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "23.88px",
                      letterSpacing: "-1%",
                      color: colors.TextDarkGrey,
                    }}
                  >
                    3 Day ago
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 d-flex justify-content-center justify-content-sm-around py-2">
          <div className="col-10 col-sm-3 ">
            <div
              className="row d-flex justify-content-between align-items-center p-3"
              style={{
                boxShadow: "0px 0px 3px 3px rgba(44, 50, 63, 0.02)",
                borderRadius: "10px",
              }}
            >
              <div className="col-9">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  Students
                </text>
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "bold",
                    fontSize: "15px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  50055
                </text>
              </div>
              <div className="col-3">
                <img
                  src={Vector1}
                  style={{
                    height: "6vh",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-3 ">
            <div
              className="row d-flex justify-content-between align-items-center p-3"
              style={{
                boxShadow: "0px 0px 3px 3px rgba(44, 50, 63, 0.02)",
                borderRadius: "10px",
              }}
            >
              <div className="col-9">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  Awards
                </text>
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "bold",
                    fontSize: "15px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  50+
                </text>
              </div>
              <div className="col-3">
                <img
                  src={Vector2}
                  style={{
                    height: "6vh",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-3 ">
            <div
              className="row d-flex justify-content-between align-items-center p-3"
              style={{
                boxShadow: "0px 0px 3px 3px rgba(44, 50, 63, 0.02)",
                borderRadius: "10px",
              }}
            >
              <div className="col-9">
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "21px",
                    letterSpacing: "-1%",
                    color: colors.TextGrey,
                  }}
                >
                  Department
                </text>
                <text
                  className="row"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: "bold",
                    fontSize: "15px",
                    lineHeight: "18px",
                    letterSpacing: "-1%",
                    color: colors.Dark,
                  }}
                >
                  30+
                </text>
              </div>
              <div className="col-3">
                <img
                  src={Vector3}
                  style={{
                    height: "6vh",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
