import React from "react";
// import { Accodiondata } from "../../../config";
// import { BlogCardData } from "../../../config";
// import AccordionCard from "./AccordianCard/AccordianCard";
import Accordian from "./AccordianCard/Accordian";
import "./AccordianCard/Accordian.css";
import { Accodiondata } from "../config/data";

// import color from "../../../constant";
// import AccordionCard from "../../../components/cards/AccordianCard";

function FAQ({ data }) {
  return (
    <>
      <div
        className="row m-0 d-flex justify-content-center my-5 py-3 py-md-5   d-none d-md-flex "
        style={{ background: "#f5f5f5" }}
      >
        <p
          className="text-center "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <b className="faqp">FAQ's</b>
        </p>
        <h1
          className=" text-center col-12  faqh1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Trending Questions
        </h1>
        <div className="col-11 col-lg-7 col-sm-12">
          <div className="row">
            <Accordian
              heading={"What are my requirements to apply for internships?"}
              para={
                "The internship listings on our platform will provide detailed information about each position's requirements and eligibility criteria."
              }
            />
            <Accordian
              heading={"Are the internships on your platform paid or unpaid?"}
              para={
                "We will specify on each internship listing on our platform whether it is a paid or unpaid internship."
              }
            />
            <Accordian
              heading={"How can I increase my chances an internship through your platform?"}
              para={
                "Make sure your profile is complete and highlights your relevant skills, experiences, and educational background. Furthermore, to stay ahead of the competition, check the platform on a regular basis for new internship listings and submit applications promptly."
              }
            />
            <Accordian
              heading={"Can I apply for internships outside of my location?"}
              para={
                "Absolutely! Our platform supports internships both locally and internationally. You can search for internships based on location preferences or explore remote internship opportunities."
              }
            />
            <Accordian
              heading={
                "How can I use this platform as an employer?"
              }
              para={
                "As an employer, you can post internship opportunities, review applications, and communicate with potential candidates in one place."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
