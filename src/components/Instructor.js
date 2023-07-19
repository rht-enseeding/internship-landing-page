import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { instructor } from "../assets";

const Instructor = () => {
  return (
    <div className="container  d-none d-md-block">
      <div
        className="row m-0 my-5 py-3 py-md-3 px-2 d-flex justify-content-between align-items-start"
        style={{ backgroundColor: "#f5f5f5", borderRadius: "15px" }}
      >
        <div className="col-12 col-lg-5 py-3 py-lg-0">
          <img
            src={instructor}
            alt="instructorimg"
            className="img-fluid"
            style={{ width: " 100%", maxHeight: "25rem" }}
          />
        </div>
        <div className="col-11 col-lg-7 ">
          <h3 className=" " style={{ fontSize: "30px", fontWeight: "700" }}>Instructor</h3>
          <div className="">
            <p className=" p-sm-1  internboxtext" >
              Engaging and Knowledgeable Instructor for an Exceptional<br />
              Learning Experience.
            </p>
          </div>

          <ul className="p-0">
            <li className="py-1 row d-flex align-items-baseline">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="internboxtext Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                Extensive knowledge and expertise in the subject matter.
              </text>
            </li>
            <li className="py-1 row d-flex align-items-baseline">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="internboxtext Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                Teaching methods to captivate and involve learners.{" "}
              </text>
            </li>
            <li className="py-1 row d-flex align-items-baseline">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="internboxtext Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                Assistance to students throughout their learning journey.
              </text>
            </li>
            <li className="py-1 row d-flex align-items-baseline">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="internboxtext Text-1 col-11 col-sm-10 col-md-11 d-flex justify-content-center flex-column">
                Focuses on achieving measurable outcomes and student success.{" "}
              </text>
            </li>
            {/* <li className="py-3 row ps-3">
                <text className="Text-1-bold col-4 col-sm-2 col-lg-3 d-flex justify-content-center flex-column p-0">
                  learn more
                </text>
                <span className="col-1  d-flex justify-content-center flex-column">
                  <BsArrowRight className="p-0" />
                </span>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
