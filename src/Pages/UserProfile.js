import React, { useState, useEffect } from "react";
import "../App.css";
import imageicon from "../Assets/image1.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { userProfile } from "../helper/UserProfileData";
import "../Styles/UserProfile/Userprofile.css";
import education from "../Assets/education.png";
import {
  Download,
  PencilSquare,
  Plus,
  PlusLg,
  XLg,
} from "react-bootstrap-icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { saveFormData, updateEducation, initializeFormData } from "../redux/actions/formAction";
import axios from "axios";
import { GetUserInfoApi, UpdateUserInfoApi } from "../API";

const UserProfile = ({ token, formData, initializeFormData, saveFormData, updateEducation }) => {
  const [popexperience, setPopupExperience] = useState(false);
  const [popeducation, setPopupEducation] = useState(false);
  const [popcertificate, setPopupCertificate] = useState(false);
  const [popsocial, setPopupsocial] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState(false);

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const headers = {
      Token: `${token}`,
    };
    axios
      .get(GetUserInfoApi, { headers })
      .then((response) => {
        setUserInfo(response.data.data.userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    initializeFormData(formData);
  }, [formData, initializeFormData]);

  const [basicInfo, setBasicInfo] = useState({
    phone: "",
    email: "",
    resume: null,
  });

  const [experience, setExperience] = useState({
    company: "",
    title: "",
    fromDate: "",
    toDate: "",
    isCurrentlyWorking: false,
    desc: "",
  });

  const [userEducation, setEducation] = useState({
    college: "",
    degree: "",
    fieldOfStudy: "",
    fromDate: "",
    toDate: "",
    isCurrentlyStudying: false,
    description: "",
  });

  const [certificate, setCertificate] = useState({
    certificate: "",
    organization: "",
    fromDate: "",
    toDate: "",
    isCurrentlyWorkingCert: false,
    description: "",
  });

  const [socialLinks, setSocialLinks] = useState({
    github: "",
    google: "",
    linkedin: "",
  });

  useEffect(() => {
    if (formData) {
      setBasicInfo((prevState) => ({
        ...prevState,
        phone: formData.phone || "",
        email: formData.email || "",
      }));
      // Initialize other state variables based on formData
      // For example, setExperience, setEducation, setCertificate, setSocialLinks
    }
  }, [formData]);

  // Basic Info Handlers
  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setBasicInfo((prevState) => ({
      ...prevState,
      resume: file,
    }));
  };

  const handleBasicInfoSubmit = (e) => {
    e.preventDefault();
    dispatch(saveFormData(basicInfo));
    setPopUpVisible(!popUpVisible);
    console.log("Form data saved in Redux:", basicInfo);

    const headers = {
      Token: `${token}`,
    };
    axios
      .put(UpdateUserInfoApi, basicInfo, { headers })
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  // Experience Handlers
  const handleExperienceInputChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    dispatch(saveFormData(experience));
    setPopupExperience(!popexperience);
    console.log("Form data saved in Redux:", experience);
  };

  const handleCurrentlyWorkingChange = () => {
    setExperience((prevState) => ({
      ...prevState,
      isCurrentlyWorking: !prevState.isCurrentlyWorking,
    }));
  };

  // Education Handlers
  const handleEducationInputChange = (e, field) => {
    const { name, value, checked, type } = e.target;
    console.log("Education input change:", name, value, checked, type);
    if (type === "checkbox") {
      setEducation((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setEducation((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [name]: value,
        },
      }));
    }
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    console.log("handleEducationSubmit called");
    dispatch(saveFormData(userEducation));
    setPopupEducation(false);
    console.log("Form data saved in Redux:", userEducation);
  };

  const handleCurrentlyStudyingChange = () => {
    setEducation((prevState) => ({
      ...prevState,
      isCurrentlyStudying: !prevState.isCurrentlyStudying,
    }));
  };

  // Certificate Handlers
  const handleCertificateInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log("Certificate input change:", name, value, checked, type);
    if (type === "checkbox") {
      setCertificate((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setCertificate((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleCertificateSubmit = (e) => {
    e.preventDefault();
    console.log("handleCertificateSubmit called");
    dispatch(saveFormData(certificate));
    setPopupCertificate(false);
    console.log("Form data saved in Redux:", certificate);
  };

  const handleCurrentlyWorkingChangeCert = () => {
    setCertificate((prevState) => ({
      ...prevState,
      isCurrentlyWorkingCert: !prevState.isCurrentlyWorkingCert,
    }));
  };

  // Social Handlers
  const handleSocialInputChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSocialSubmit = (e) => {
    e.preventDefault();
    dispatch(saveFormData(socialLinks));
    setPopupsocial(false);
    console.log("Form data saved in Redux:", socialLinks);
  };

  return !userInfo ? (
    <div>
      <h2>User information not found</h2>
    </div>
  ) : (
    <>
      <div className="userprofile">
        {console.log(userInfo)}
        <div className="userprofilesectionleft">
          <div className="head">
            {!userInfo.profilePic ? (
              <div className="profileimg">
                {/* {userInfo.fullName.split("")[0].toUpperCase()} */}
              </div>
            ) : (
              <img
                className="rounded-circle"
                // src={teacher.pp}
                alt="imageicon"
                width={"100%"}
              // height={"30px"}
              />
            )}
            {/* {userInfo.fullName && (
  <h5>
    {userInfo.fullName.split("")[0].toUpperCase() +
      userInfo.fullName.slice(1) || ""}
  </h5>
)} */}
            <p>Mern Stack</p>
          </div>
          <PencilSquare className="editicon" />
          <div className="descriptionbox">
            <h5>i am web dev</h5>
          </div>
          <div className="skillsection">
            <h3>Skills</h3>
            <div className="skill">
              <p>React Js</p>
            </div>
          </div>
        </div>
        <div className="userprofilesectionright">
          <div className="basicInformation">
            <div className="head">
              <h5 style={{ fontWeight: 600 }}>Basic Information</h5>
              <PencilSquare
                className="editicon"
                onClick={() => setPopUpVisible(!popUpVisible)}
              />
            </div>
            <div className="detail">
              <div className="detailrow">
                <div>
                  <h6>PHONE</h6>
                  <p>1333666999</p>
                </div>
                <div>
                  <h6>Email</h6>
                  <p>Bob@email.con</p>
                </div>
              </div>
            </div>
            <div className="userprofilebtn">
              <Download /> <span>Download Resume</span>
            </div>
          </div>
          <div className="experience">
            <h5 style={{ fontWeight: 600 }}>Experience</h5>
            <PlusLg
              className="plusicon"
              onClick={() => setPopupExperience(!popexperience)}
            />
          </div>
          <div className="education">
            <h5 style={{ fontWeight: 600 }}>Education</h5>
            <PlusLg
              className="plusicon"
              onClick={() => setPopupEducation(!popeducation)}
            />
          </div>
          <div className="certificate">
            <h5 style={{ fontWeight: 600 }}>Certificate</h5>
            <PlusLg
              className="plusicon"
              onClick={() => setPopupCertificate(!popcertificate)}
            />
          </div>
          <div className="social">
            <h5 style={{ fontWeight: 600 }}>Social Links</h5>
            <PlusLg
              className="plusicon"
              onClick={() => setPopupsocial(!popsocial)}
            />
          </div>

          {/* pop basic info */}

          {popUpVisible && (
            <div className="popup">
              <div className="box">
                <div className="head">
                  <h5>Add Basic Information</h5>
                  <XLg
                    className="crossicon"
                    onClick={() => setPopUpVisible(!popUpVisible)}
                  />
                </div>
                <div className="main">
                  <form action="" onSubmit={handleBasicInfoSubmit}>
                    <div className="container">
                      <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          placeholder="Enter your phone number"
                          name="phone"
                          onChange={handleBasicInfoChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          name="email"
                          onChange={handleBasicInfoChange}
                        />
                      </div>
                    </div>
                    <div className="container">
                      <div>
                        <label htmlFor="resume">Upload Resume</label>
                        <input
                          type="file"
                          name="resume"
                          onChange={handleResumeUpload}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="foot">
                  <button
                    className="blue"
                    onClick={() => setPopUpVisible(!popUpVisible)}
                  >
                    Save
                  </button>
                  <button
                    className="orange"
                    onClick={() => setPopUpVisible(!popUpVisible)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* pop experience */}
          {popexperience && (
            <div className="popup">
              <div className="box">
                <div className="head">
                  <h5>Add Experience</h5>
                  <XLg
                    className="crossicon"
                    onClick={() => setPopupExperience(!popexperience)}
                  />
                </div>
                <div className="main">
                  <form action="" onSubmit={handleExperienceSubmit}>
                    <div className="container">
                      <div>
                        {" "}
                        <label htmlFor="company">Company</label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          name="company"
                          onChange={handleExperienceInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          placeholder="Title"
                          name="title"
                          onChange={handleExperienceInputChange}
                        />
                      </div>
                    </div>
                    <div className="container">
                      <div>
                        <label htmlFor="fromDate">From</label>
                        <input
                          type="date"
                          value={experience.fromDate}
                          onChange={(e) =>
                            setExperience({
                              ...experience,
                              fromDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="toDate">To</label>
                        <input
                          type="date"
                          value={experience.toDate}
                          onChange={(e) =>
                            setExperience({
                              ...experience,
                              toDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          checked={education.isCurrentlyWorking}
                          onChange={handleCurrentlyWorkingChange}
                        />
                        <span>I am currently working in this role</span>
                      </div>
                    </div>
                    <label htmlFor="desc">Description</label>
                    <textarea
                      rows="4"
                      name="desc"
                      onChange={handleExperienceInputChange}
                    ></textarea>
                  </form>
                </div>
                <div className="foot">
                  <button
                    className="blue"
                    onClick={() => setPopupExperience(!popexperience)}
                  >
                    Save
                  </button>
                  <button
                    className="orange"
                    onClick={() => setPopupExperience(!popexperience)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* pop education */}

          {popeducation && (
            <div className="popup">
              <div className="box">
                <div className="head">
                  <h5>Add Education</h5>
                  <XLg
                    className="crossicon"
                    onClick={() => setPopupEducation(!popeducation)}
                  />
                </div>
                <div className="main">
                  <form action="" onSubmit={handleEducationSubmit}>
                    <div className="container">
                      <div>
                        <label htmlFor="college">College Name</label>
                        <input
                          type="text"
                          placeholder="College Name"
                          name="college"
                          onChange={(e) =>
                            handleEducationInputChange(e, "userEducation")
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="degree">Degree</label>
                        <input
                          type="text"
                          placeholder="Degree"
                          name="degree"
                          onChange={handleEducationInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="fieldOfStudy">Field of Study</label>
                        <input
                          type="text"
                          placeholder="Field of Study"
                          name="fieldOfStudy"
                          onChange={handleEducationInputChange}
                        />
                      </div>
                    </div>

                    <div className="container">
                      <div>
                        <label htmlFor="">From</label>
                        <input
                          type="date"
                          value={userEducation.fromDate}
                          onChange={(e) =>
                            setEducation({
                              ...userEducation,
                              fromDate: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="toDate">To</label>
                        <input
                          type="date"
                          value={userEducation.toDate}
                          onChange={(e) =>
                            setEducation({
                              ...userEducation,
                              toDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          checked={userEducation.isCurrentlyStudying}
                          onChange={handleCurrentlyStudyingChange}
                        />
                        <span>I am currently working in this role</span>
                      </div>
                    </div>
                    <label htmlFor="">Description</label>
                    <textarea
                      rows="4"
                      name="description"
                      onChange={handleEducationInputChange}
                    ></textarea>
                  </form>
                </div>
                <div className="foot">
                  <button
                    className="blue"
                    onClick={() => setPopupEducation(!popeducation)}
                  >
                    Save
                  </button>
                  <button
                    className="orange"
                    onClick={() => setPopupEducation(!popeducation)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}


          {/* pop certificate */}

          {popcertificate && (
            <div className="popup">
              <div className="box">
                <div className="head">
                  <h5>Add Certificate</h5>
                  <XLg
                    className="crossicon"
                    onClick={() => setPopupCertificate(!popcertificate)}
                  />
                </div>
                <div className="main">
                  <form action="" onSubmit={handleCertificateSubmit}>
                    <div className="container">
                      <div>
                        <label htmlFor="">Certificate</label>
                        <input
                          type="text"
                          placeholder="Certificate Name"
                          name="certificate"
                          onChange={handleCertificateInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Organization</label>
                        <input
                          type="text"
                          placeholder="Organization"
                          name="organization"
                          onChange={handleCertificateInputChange}
                        />
                      </div>
                    </div>

                    <div className="container">
                      <div>
                        <label htmlFor="">From</label>
                        <input
                          type="date"
                          value={certificate.fromDate}
                          onChange={(e) =>
                            setCertificate({
                              ...certificate,
                              fromDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="">To</label>
                        <input
                          type="date"
                          value={certificate.toDate}
                          onChange={(e) =>
                            setCertificate({
                              ...certificate,
                              toDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          checked={certificate.isCurrentlyWorking}
                          onChange={handleCurrentlyWorkingChangeCert}
                        />
                        <span>I am currently working in this role</span>
                      </div>
                    </div>
                    <label htmlFor="">Description</label>
                    <textarea
                      rows="4"
                      name="description"
                      onChange={handleCertificateInputChange}
                    ></textarea>
                  </form>
                </div>
                <div className="foot">
                  <button
                    className="blue"
                    onClick={() => setPopupCertificate(!popcertificate)}
                  >
                    Save
                  </button>
                  <button
                    className="orange"
                    onClick={() => setPopupCertificate(!popcertificate)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* pop social */}

          {popsocial && (
            <div className="popup">
              <div className="box">
                <div className="head mb-5">
                  <h5>Add Certificate</h5>
                  <XLg
                    className="crossicon"
                    onClick={() => setPopupsocial(!popsocial)}
                  />
                </div>
                <div className="main">
                  <form action="">
                    <label htmlFor="">Github</label>
                    <input
                      type="text"
                      placeholder=""
                      name="github"
                      value={socialLinks.github}
                      onChange={handleSocialInputChange}
                    />

                    <label htmlFor="">Google</label>
                    <input
                      type="text"
                      placeholder=""
                      name="google"
                      value={socialLinks.google}
                      onChange={handleSocialInputChange}
                    />

                    <label htmlFor="">LinkedIn</label>
                    <input
                      type="text"
                      placeholder=""
                      name="linkedin"
                      value={socialLinks.linkedin}
                      onChange={handleSocialInputChange}
                    />
                  </form>
                </div>
                <div className="foot">
                  <button className="blue" onClick={handleSocialSubmit}>
                    Save
                  </button>
                  <button
                    className="orange"
                    onClick={() => setPopupsocial(!popsocial)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: (formData) => dispatch(saveFormData(formData)),
    updateEducation: (educationData) => dispatch(updateEducation(educationData)),
    initializeFormData: (formData) => dispatch(initializeFormData(formData))
  };
};

export default connect(null, mapDispatchToProps)(UserProfile);