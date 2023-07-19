import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";
import ApplyNow from "./Applynow";
import { Card } from "react-bootstrap";
import { apply1, apply2, apply3 } from "../assets";



const Banner = () => {
  const handleColumnClick = (link) => {
    window.location.href = link; // Redirect to the provided link
  };
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
    padding: "15px",
  };
  const topic = {
    fontWeight: "bolder",
    fontSize: "25px",
    margin: "5px",
    color: "teal",
  };
  return (
    <div className="banner container-fluid mb-5">
      <Header />
      <Container fluid className="mt-5" >
        <Row className="justify-content-center py-sm-0  pt-5 py-sm-0   mt-sm-0">
          <Col xs={12} sm={12} md={6} lg={7}>
            <div className="container bannercontent">
              <h1
                className="Heading-1  text-center bannerh1"

              >
                <span className="bannerh1span">Opportunities </span>
                Don't Just Happen, You Create Them
              </h1>
              <br />
              <div className="">
                <p
                  className="Text-1 text-center para  bannertext"

                >
                  Search for temporary jobs at state of the art new
                  businesses, enormous brand multinationals, or in the middle
                  between. Your vocation begins here.
                </p>
              </div>
              <div className="applynow">
                <input type="text" placeholder="Enter your Email" />
                <button>Apply Now</button>
              </div>
              {/* <Row className="justify-content-center">
                  <Col xs={12} sm={8} md={6} lg={10} className="inputBox">
                    <form>
                      <div className="mb-3 d-flex ">
                        <input
                          className="form-control p-2"
                          type="text"
                          id="name"
                          required
                          placeholder="Email Address"
                        />
                        <button className="navbtn" style={{width:"50%"}}>Apply Now</button>
                      </div>
                    </form>
                  </Col>
                </Row> */}
            </div>
          </Col>
        </Row>
        {/* <Row>
            <div className="col-12  d-flex justify-content-center col-md-6 col-lg-4  py-2 py-md-1 text-start">
              <Card
                style={carde}
                onClick={() => handleColumnClick("https://app.interncove.com/")}
                className="effect"
              >
                <Card.Body>
                  <Card.Title className="cardtitle">
                    Internship Training
                  </Card.Title>

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
                  <Card.Title className="cardtitle">
                    Internship Training
                  </Card.Title>

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
                  <Card.Title className="cardtitle">
                    Internship Training
                  </Card.Title>

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
          </Row> */}
        {/* <ApplyNow /> */}
      </Container>
    </div>
  );
};

export default Banner;
