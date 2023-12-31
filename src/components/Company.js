import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Interns, company, contact } from "../assets";

const Company = () => { 
    return (
      <div className="container">
        <div
          className="row m-0 my-5 py-md-5  d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#f5f5f5", borderRadius: "15px" }}
        >
          <div className="col-lg-5  d-none d-lg-block ps-0 ps-sm-4">
            <h3>Company</h3>
            <div className="py-1">
              <text className="Text-1 p-sm-1">
                Simplifying Complexity, Empowering Growth.
              </text>
            </div>

            <ul className="p-0">
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                  simplifying complex processes, making them more accessible{" "}
                </text>
              </li>
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                  providing them with the tools and resources they need to
                  succeed.{" "}
                </text>
              </li>
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                  Innovation is at the core of our company{" "}
                </text>
              </li>
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                  Customer satisfaction is our top priority{" "}
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

          <div className="col-12 py-3 col-lg-5  py-lg-0">
            <img
              src={company}
              alt=""
              className="img-fluid"
              style={{ width: " 100%", maxHeight: "25rem" }}
            />
          </div>
          <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
            <text className=" ">Company </text>
            <br />
            <div className="py-3">
              <text className="Text-1">
                Simplifying Complexity, Empowering Growth.
              </text>
            </div>

            <ul className="p-0">
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10  col-md-9 d-flex justify-content-center flex-column">
                  simplifying complex processes, making them more accessible{" "}
                </text>
              </li>
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                  providing them with the tools and resources they need to
                  succeed.{" "}
                </text>
              </li>
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                  Innovation is at the core of our company{" "}
                </text>
              </li>
              <li className="py-2 row">
                <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                  <AiFillCheckCircle
                    className="p-0"
                    style={{ color: "navy" }}
                  />
                </span>
                <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                  Customer satisfaction is our top priority{" "}
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

export default Company;
