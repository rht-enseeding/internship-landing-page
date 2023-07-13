import React from "react";
// import { Accodiondata } from "../../../config";
// import { BlogCardData } from "../../../config";
import AccordionCard from "./AccordianCard/AccordianCard";
import { Accodiondata } from "../config/data";

// import color from "../../../constant";
// import AccordionCard from "../../../components/cards/AccordianCard";

function FAQ({ data }) {
  return (
    <>
      <div
        className="row m-0 d-flex justify-content-center my-5 py-3 py-md-5"
        style={{ background: "#f5f5f5" }}
      >
        <p
          className="text-center py-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <b>FAQ's</b>
        </p>
        <h1
          className=" text-center col-12 py-2 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Trending Questions
        </h1>
        <div className="col-11 col-lg-7 col-sm-12">
          <div className="row">
            {Accodiondata.map((items) => {
              return <AccordionCard data={items} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
