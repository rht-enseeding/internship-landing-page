import React, { useEffect, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import imageicon from "../Assets/image1.png";
import "../App.css";
import axios from "axios";
import { GetInternshipApi } from "../API";

const InternshipPage = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  useEffect(() => {
    axios
      .get(GetInternshipApi) // Replace with your API endpoint
      .then((response) => {
        setInternships(response.data.data.message);
        setFilteredInternships(response.data.data.message);
        setSpecialities([
          ...new Set(
            response.data.data.message.flatMap(
              (internship) => internship.internshipTitle
            )
          ),
        ]);
      })
      .catch((error) => {
        console.error("Error fetching internships", error);
      });
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const locationChange = (e) => {
    let filteredList = internships.filter((internship) =>
      internship.internshipLocation.includes(e.target.value)
    );
    // console.log(filteredList);
    setFilteredInternships(filteredList);
  };

  return (
    <div className="InternshipPage p-1 ">
      <div className="d-flex justify-content-center direction-row row flex-wrap gap-3 w-100">
        <div className="filter-section ms-3 border rounded-2 shadow-sm p-2 col-sm">
          <div className="d-flex direction-row justify-content-between align-items-center">
            <p className="fw-bold fs-2">Filter</p>
            <div className="d-flex direction-row text-secondary justify-content-end">
              <h6 className="fs-6 ">Clear all </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x d"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </div>
          <form>
            <p>
              <b> Location</b>{" "}
            </p>
            <div className="rounded-2 border border-secondary mx-2 my-2 mb-4 ">
              <InputGroup style={{}}>
                <InputGroup.Text
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-paperclip"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>
                  </div>
                </InputGroup.Text>
                <FormControl
                  style={{ border: "none", backgroundColor: "transparent" }}
                  placeholder="NewYork"
                  size="sm"
                  required
                  onChange={locationChange}
                />

                <InputGroup.Text
                  style={{
                    border: "transparent",
                    backgroundColor: "transparent",
                  }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-camera"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                      <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </div>
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="mb-2">
              <p>
                <b> Availabilty</b>{" "}
              </p>
              <div>
                <input
                  type="radio"
                  id="freelance"
                  name="radioGroup"
                  value="freelance"
                  checked={selectedOption === "freelance"}
                  onChange={handleOptionChange}
                  className="mx-2"
                />
                <label htmlFor="freelance" className="mx-3 mb-3 fw-medium">
                  Freelance/contract
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="fulltime"
                  name="radioGroup1"
                  value="fulltime"
                  checked={selectedOption === "fulltime"}
                  onChange={handleOptionChange}
                  className="mx-2"
                />
                <label htmlFor="fulltime" className="mx-3 mb-3 fw-medium">
                  Full Time
                </label>
              </div>
            </div>
            <div className="mx-2 ">
              <p>
                <b>Jobs you might like</b>
              </p>
              <div>
                <input
                  type="radio"
                  id="bestmatches"
                  name="radioGroup"
                  value="bestmatches"
                  checked={selectedOption === "bestmatches"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="bestmatches" className="mx-3 mb-3 fw-medium">
                  Best Matches
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="mostrecent"
                  name="radioGroup"
                  value="mostrecent"
                  checked={selectedOption === "mostrecent"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="mostrecent" className="mx-3 mb-3 fw-medium">
                  Most Recent
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="SavedJob"
                  name="radioGroup"
                  value="SavedJob"
                  checked={selectedOption === "SavedJob"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="SavedJob" className="mx-3 mb-3 fw-medium">
                  Saved Job
                </label>
              </div>
            </div>
            <div className="mb-2">
              <p>
                <b>Status for Work</b>
              </p>
              <div className="d-flex direction-row mx-2 justify-content-between ">
                <div className="">
                  <input
                    type="radio"
                    id="workstatus"
                    name="radioGroup"
                    value="workstatus"
                    checked={selectedOption === "workstatus"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="workstatus" className="mx-3 mb-3 fw-medium">
                    Work Status
                  </label>
                </div>
                <p>
                  <b>2340</b>
                </p>
              </div>
            </div>
            <div className="ms-1 w-100">
              <p>
                <b>Specialities</b>
              </p>
              {specialities.map((speciality,index) => {
                return (
                  <div className="d-flex direction-row mx-2 justify-content-between" key={index}>
                    <div>
                      <input
                        type="radio"
                        id="graphic"
                        name="SpecialGroup1"
                        value="graphic"
                        checked={selectedOption === "graphic"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="graphic" className="mx-3 mb-3 fw-medium">
                        {speciality}
                      </label>
                    </div>
                    <p>
                      <b>2340</b>
                    </p>
                  </div>
                );
              })}
            </div>
          </form>
        </div>

        <div className="d-flex flex-column gap-4  col-sm">
          <div className="rounded-2 p-2 container-fluid border border-secondary  gap-3 w-100">
            {filteredInternships.map((internship,index) => {
              return (
                <div
                  className=" rounded-2 m-3 d-flex direction-row gap-2 p-3"
                  style={{ backgroundColor: "#FBFBFB" }}
                  key={index}
                >
                  <img
                    src={imageicon}
                    alt=""
                    width={"70px"}
                    height={"70px"}
                    className="rounded-2"
                  />
                  <div className="w-100">
                    <div className="d-flex direction-row justify-content-between">
                      <p>
                        <b>{internship.internshipTitle}</b>
                      </p>
                      <p className="text-secondary">2 Hours Ago</p>
                    </div>
                    <h5>Hourly Based Job: $100-$120</h5>
                    <p>
                      <b>Job Description:</b> {internship.internshipDescription}
                    </p>
                    <p>
                      <b>Responsibilities:</b> {internship.responsibilities}
                    </p>
                    <p>
                      <b>Location:</b> {internship.internshipLocation}
                    </p>
                    <div className="d-flex direction-row gap-3">
                      {internship.skills[0].split(", ").map((skill,index) => {
                        return (
                          <h5
                            className="rounded-pill px-3 py-2"
                            style={{
                              backgroundColor: "#FAECEE",
                              color: "#EC3B57",
                            }}
                            key={index}
                          >
                            {skill}
                          </h5>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
