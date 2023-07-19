import React from "react";
import { Card } from "react-bootstrap";
import { apply1, apply2, apply3 } from "../assets";
// import { history, maldive1, mission, vssion } from "../../assets";

const ApplyNow = () => {

  const carde = {
    //  color: "#6641AA",
    //  fontWeight: "800",
    border: "none",
    textAlign: "start",
    borderRadius: "15px",
    height: "100%",
    maxHeight: "auto",
    background: "#2D1D64",
    color: "white",

    // margin: "20px",
    padding: "15px 6px"
  };
  const topic = {
    fontWeight: "bolder",
    fontSize: "25px",
    margin: "5px",
    color: "teal",
  };
  const handleColumnClick = (link) => {
    window.location.href = link; // Redirect to the provided link
  };

  const para = {};
  return (
    <div className="container-fluid row d-flex justify-content-center  py-3 py-md-5  my-sm-5 mx-0 px-0">
      <div className="col-12   col-md-6 col-lg-4  py-2 py-md-1 text-start">
        <Card
          style={carde}
          onClick={() => handleColumnClick("https://app.interncove.com/")}
          className="effect"
        >
          <Card.Body>
            <Card.Title className="cardtitle " >
              Guarantee Courses
            </Card.Title>

            <Card.Text className="pt-4">
              <h3 className="cardtext">100% Internship Guaranteed Courses Available</h3>
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Text className="pt-4">
                <h3
                  style={{
                    color: "#F90",
                    fontSize: "23px",
                    fontWeight: "700",
                  }}
                >
                  APPLY NOW
                </h3>
              </Card.Text>{" "}
              <img src={apply1} alt="" />
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-12  d-flex justify-content-center col-md-6 col-lg-4 my-1 py-2 py-md-1 text-start">
        <Card
          style={carde}
          onClick={() => handleColumnClick("https://app.interncove.com/")}
          className="effect"
        >
          <Card.Body>
            <Card.Title className="cardtitle" >
              Internship Training
            </Card.Title>

            <Card.Text className="pt-4">
              <h3 className="cardtext">Join us in Best-in-Class Certification Training</h3>
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Text className="pt-4">
                <h3
                  style={{
                    color: "#F90",
                    fontSize: "23px",
                    fontWeight: "700",
                  }}
                >
                  APPLY NOW
                </h3>
              </Card.Text>{" "}
              <img src={apply2} alt="" />
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-12  d-flex justify-content-center col-md-6 col-lg-4 my-1 py-2 py-md-1 text-start">
        <Card
          style={carde}
          onClick={() => handleColumnClick("https://app.interncove.com/")}
          className="effect"
        >
          <Card.Body>
            <Card.Title className="cardtitle" >
              Trending Jobs
            </Card.Title>

            <Card.Text className="pt-4">
              <h3 className="cardtext">Amazing Opportunities Available Now</h3>
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Text className="pt-4">
                <h3
                  style={{
                    color: "#F90",
                    fontSize: "23px",
                    fontWeight: "700",
                  }}
                >
                  APPLY NOW
                </h3>
              </Card.Text>{" "}
              <img src={apply3} alt="" />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ApplyNow;
