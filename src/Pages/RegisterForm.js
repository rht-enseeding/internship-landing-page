import axios from "axios";
import React, { useEffect, useState } from "react";
import { UpdateUserInfoApi } from "../API";
import "../Styles/Login/RegisterForm.scss";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import NotFound from "../Components/NotFoundPrivate/NotFound";
import { useDispatch } from "react-redux";
import {  setUserInfo, setUserStatus } from "../redux/actions/userinfoAction";

const RegisterForm = ({
  user,
  // setUser,
  userinfo,
  // setUserinfo,
  token,
  setToken,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [upload, setUpload] = useState(true);
  useEffect(() => {
    var url = window.location.href;
    var headers = /[?&]trk=([^&#]*)/;
    var payload = /[?&]s_kw=([^&#]*)/;
    var signature = /[?&]sc_channel=([^&#]*)/;
    var match1 = headers.exec(url);
    var match2 = payload.exec(url);
    var match3 = signature.exec(url);
    var hdr =
      match1 && match1.length > 1 ? decodeURIComponent(match1[1]) : null;
    var pyld =
      match2 && match2.length > 1 ? decodeURIComponent(match2[1]) : null;
    var sgn =
      match3 && match3.length > 1 ? decodeURIComponent(match3[1]) : null;
    
    if(hdr && pyld && sgn){
      setUpload(true)
      Cookies.set('token', `${hdr}.${pyld}.${sgn}`)
      setToken(`${hdr}.${pyld}.${sgn}`)
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({
    fullName: userinfo.fullName || "",
    title: "",
    profile: "",
    resume: [],
    skills: [],
    qualification: [],
    certificates: [],
    experience: [],
    preferences: [],
    social_media: [],
    documents: [],
  });

  const handleChange = (e) => {
    setRegister((prevRegister) => {
      return e.target.type === "file"
        ? {
            ...prevRegister,
            [e.target.name]: e.target.files[0],
          }
        : {
            ...prevRegister,
            [e.target.name]: e.target.value,
          };
    });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const headers = {
      Token: `${token}`,
    };
    try {
      // const response = await axios.put(UpdateUserInfoApi, register, {
      //   headers,
      // });
      console.log(register);
      dispatch(setUserInfo(register));
      dispatch(setUserStatus(true));
      // dispatch(setUserColor());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return !upload ? (
    <NotFound />
  ) : (
    <div className="registerForm">
      <div className="registerFormMain">
        <h1>Register Yourself to Get Started</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-main">
            <div className="left">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={handleChange}
                defaultValue={register.fullName}
              />
              <label htmlFor="profile">Profile</label>
              <textarea
                name="profile"
                id="profile"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
              <label htmlFor="skills">Skills</label>
              <select name="skills" id="skills" onChange={handleChange}>
                <option value="">Select</option>
                <option value="deneme">Deneme</option>
                <option value="deneme2">Deneme2</option>
                <option value="deneme3">Deneme3</option>
              </select>
              <label htmlFor="resume">Upload Resume</label>
              <div className="file-input">
                {register.resume.name || <img src={upload} alt="" />}
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
              />
              <label htmlFor="experience">Upload Experience</label>
              <div className="file-input">
                {register.experience.name || <img src={upload} alt="" />}
                <input
                  type="file"
                  name="experience"
                  id="experience"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="right">
              <label htmlFor="preferences">Preferences</label>
              <select
                name="preferences"
                id="preferences"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="deneme">Deneme</option>
                <option value="deneme2">Deneme2</option>
                <option value="deneme3">Deneme3</option>
              </select>
              <label htmlFor="documents">Upload Documents</label>
              <div className="file-input">
                {register.documents.name || <img src={upload} alt="" />}
                <input
                  type="file"
                  name="documents"
                  id="documents"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="social-media">Social Media Links</label>
              <input
                type="text"
                id="social-media"
                name="social-media"
                onChange={handleChange}
              />
              <label htmlFor="qualification">Qualifications</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                onChange={handleChange}
              />
              <label htmlFor="certifications">Upload Certifications</label>
              <div className="file-input">
                {register.certificates.name || <img src={upload} alt="" />}
                <input
                  type="file"
                  name="certificates"
                  id="certificates"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
