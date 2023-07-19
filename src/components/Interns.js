import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Interns, contact } from "../assets";

const Intern = () => {
  return (
    <div className="container d-none d-md-block">
      <div
        className="row m-0 my-3 py-md-3  d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#f5f5f5", borderRadius: "15px" }}
      >
        <div className="col-lg-7  d-none d-lg-block ps-0 ps-sm-4">
          <h3 style={{ fontSize: "30px", fontWeight: "700" }}>Interns</h3>
          <div className="">
            <p className=" p-sm-1  internboxtext" >
              Practical experience and learning opportunities within a<br />
              professional setting.
            </p>
          </div>

          <ul className="p-0">
            <li className="py-1 row d-flex align-items-baseline" >
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="internboxtext Text-1 col-11 col-sm-10 col-md-11 d-flex justify-content-center flex-column">
                Representation or plan for a product, structure, or concept.{" "}
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
                Utilizing artistic and innovative skills to develop visually
                appealing
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
                Solving design challenges by considering aesthetics,
                functionality
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
                Utilizing various design software and tools to bring ideas to
                life{" "}
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

        <div className="col-12  py-2 py-sm-2  col-lg-5  pe-0 pe-sm-4">
          <img
            src={Interns}
            alt="internimg"
            className="img-fluid"
            style={{ width: " 100%", maxHeight: "30rem" }}
          />
        </div>
        <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
          <h3 className="pt-3">Interns</h3>

          <div className="py-3">
            <text className="Text-1">
              Practical experience and learning opportunities within a
              professional setting.
            </text>
          </div>

          <ul className="p-0">
            <li className="py-1 row">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="Text-1 col-9 col-sm-10  col-md-9 d-flex justify-content-center flex-column">
                representation or plan for a product, structure, or concept.{" "}
              </text>
            </li>
            <li className="py-1 row">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                Utilizing artistic and innovative skills to develop visually
                appealing
              </text>
            </li>
            <li className="py-1 row">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                Solving design challenges by considering aesthetics,
                functionality{" "}
              </text>
            </li>
            <li className="py-1 row">
              <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
                <AiFillCheckCircle
                  className="p-0"
                  style={{ color: "navy" }}
                />
              </span>
              <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
                Utilizing various design software and tools to bring ideas to
                life
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

export default Intern;
