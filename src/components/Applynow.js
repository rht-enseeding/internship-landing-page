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
color:"white",

    // margin: "20px",
    padding:"15px"    
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
    <div className="container-fluid row d-flex justify-content-center  py-3 py-md-5 px-5 my-sm-5 ">
      <div className="col-12   col-md-6 col-lg-4  py-2 py-md-1 text-start">
        <Card
          style={carde}
          onClick={() => handleColumnClick("https://app.interncove.com/")}
          className="effect"
        >
          <Card.Body>
            <Card.Title className="cardtitle">Internship Training</Card.Title>

            <Card.Text className="pt-4">
              <h3>100% Internship Guaranteed Courses Available</h3>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Card.Text className="pt-4">
                <h3
                  style={{
                    color: "#FF9900",
                    fontSize: "25px",
                    fontWeight: "bold",
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
            <Card.Title className="cardtitle">Internship Training</Card.Title>

            <Card.Text className="pt-4">
              <h3>Join us in Best-in-Class Certification Training</h3>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Card.Text className="pt-4">
                <h3
                  style={{
                    color: "#FF9900",
                    fontSize: "25px",
                    fontWeight: "bold",
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
            <Card.Title className="cardtitle">Internship Training</Card.Title>

            <Card.Text className="pt-4">
              <h3>Amazing Opportunities Available Now</h3>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Card.Text className="pt-4">
                <h3
                  style={{
                    color: "#FF9900",
                    fontSize: "25px",
                    fontWeight: "bold",
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
