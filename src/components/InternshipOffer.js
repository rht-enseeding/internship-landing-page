import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";

const InternshipOffer = () => {
  return (
    <Container className="internBox ">
      <p>Internships</p>
      <h1 className=" mb-5">Latest Internship Offers</h1>

      <Row className="my-5 p-5 text-start">
        <Col xs={12} md={4} className="">
          <Card className="p-2 filtercard">
            <div>
              <ul>
                <li>
                  <h2>Filter</h2>
                </li>
                <li className="filtertitle">Location</li>
                <li>
                  <select id="internSearch" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="filtertitle">Internship</li>
                <li>
                  {" "}
                  <input type="radio" name="" id="" />
                  Freelance/Contract
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  Full Time
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="filtertitle">Jobs you might like</li>
                <li>
                  {" "}
                  <input type="radio" name="" id="" />
                  Best Matches
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  Most Recent
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  Saved Jobs
                </li>
              </ul>
            </div>
            {/* --------------- */}
            <div>
              <ul>
                <li className="filtertitle">Status For Work</li>
                <li
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <input type="radio" name="" id="" />
                    Ready-to-work
                  </div>

                  <p>2340</p>
                </li>
              </ul>
            </div>
            {/* ------------------ */}
            <div>
              <ul>
                <li className="filtertitle">Specialities</li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "25px",
                  }}
                >
                  <li>
                    <input type="radio" name="" id="" />
                    Graphic Design
                  </li>

                  <p>2340</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "25px",
                  }}
                >
                  <li>
                    <input type="radio" name="" id="" />
                    UI Design
                  </li>

                  <p>45</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "25px",
                  }}
                >
                  <li>
                    <input type="radio" name="" id="" />
                    UX Design
                  </li>

                  <p>27</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "25px",
                  }}
                >
                  <li>
                    <input type="radio" name="" id="" />
                    logo Design
                  </li>

                  <p>34</p>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            {/* -------Card---------MAP-------------------- */}
            <Col xs={12} md={6}>
              <Card className="py-2">
                <Card.Body className="m-1">
                  <Card.Title
                    className="cardtitle-i px-2"
                    style={{ color: "white", fontSize: "17px" }}
                  >
                    Actively Hired
                  </Card.Title>

                  <Card.Text className="p-2 m-0">
                    <h2>Web Developement</h2>
                    <p>Syntax Doc Solutions Private Limited</p>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="p-2">
                      <ul>
                        <li>rr</li>
                        <li>t</li>
                        <li>ff</li>
                      </ul>
                    </Card.Text>{" "}
                    {/* <img src={apply1} alt="" /> */}
                  </div>
                  <div
                    className="d-flex m-0 p-0 justify-content-around"
                    style={{ width: "100%" }}
                  >
                    <span className="l1">Freelancer</span>
                    <span className="l">Freelancer</span>
                    <span className="l">Freelancer</span>
                  </div>
                </Card.Body>
                <div className="cardFoot mx-3">
                  <h3>
                    <a href="">See details</a>
                  </h3>
                </div>
              </Card>
            </Col>
            {/* --------------------------------------- */}
           
            {/* -------Card---------MAP-------------------- */}
            <Col xs={12} md={6}>
              <Card className="py-2">
                <Card.Body className="m-1">
                  <Card.Title
                    className="cardtitle-i px-2"
                    style={{ color: "white", fontSize: "17px" }}
                  >
                    Actively Hired
                  </Card.Title>

                  <Card.Text className="p-2 m-0">
                    <h2>Web Developement</h2>
                    <p>Syntax Doc Solutions Private Limited</p>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="p-2">
                      <ul>
                        <li>rr</li>
                        <li>t</li>
                        <li>ff</li>
                      </ul>
                    </Card.Text>{" "}
                    {/* <img src={apply1} alt="" /> */}
                  </div>
                  <div
                    className="d-flex m-0 p-0 justify-content-around"
                    style={{ width: "100%" }}
                  >
                    <span className="l1">Freelancer</span>
                    <span className="l">Freelancer</span>
                    <span className="l">Freelancer</span>
                  </div>
                </Card.Body>
                <div className="cardFoot mx-3">
                  <h3>
                    <a href="">See details</a>
                  </h3>
                </div>
              </Card>
            </Col>
            {/* --------------------------------------- */}
           
            {/* -------Card---------MAP-------------------- */}
            <Col xs={12} md={6}>
              <Card className="py-2">
                <Card.Body className="m-1">
                  <Card.Title
                    className="cardtitle-i px-2"
                    style={{ color: "white", fontSize: "17px" }}
                  >
                    Actively Hired
                  </Card.Title>

                  <Card.Text className="p-2 m-0">
                    <h2>Web Developement</h2>
                    <p>Syntax Doc Solutions Private Limited</p>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="p-2">
                      <ul>
                        <li>rr</li>
                        <li>t</li>
                        <li>ff</li>
                      </ul>
                    </Card.Text>{" "}
                    {/* <img src={apply1} alt="" /> */}
                  </div>
                  <div
                    className="d-flex m-0 p-0 justify-content-around"
                    style={{ width: "100%" }}
                  >
                    <span className="l1">Freelancer</span>
                    <span className="l">Freelancer</span>
                    <span className="l">Freelancer</span>
                  </div>
                </Card.Body>
                <div className="cardFoot mx-3">
                  <h3>
                    <a href="">See details</a>
                  </h3>
                </div>
              </Card>
            </Col>
            {/* --------------------------------------- */}
           
            {/* -------Card---------MAP-------------------- */}
            <Col xs={12} md={6}>
              <Card className="py-2">
                <Card.Body className="m-1">
                  <Card.Title
                    className="cardtitle-i px-2"
                    style={{ color: "white", fontSize: "17px" }}
                  >
                    Actively Hired
                  </Card.Title>

                  <Card.Text className="p-2 m-0">
                    <h2>Web Developement</h2>
                    <p>Syntax Doc Solutions Private Limited</p>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="p-2">
                      <ul>
                        <li>rr</li>
                        <li>t</li>
                        <li>ff</li>
                      </ul>
                    </Card.Text>{" "}
                    {/* <img src={apply1} alt="" /> */}
                  </div>
                  <div
                    className="d-flex m-0 p-0 justify-content-around"
                    style={{ width: "100%" }}
                  >
                    <span className="l1">Freelancer</span>
                    <span className="l">Freelancer</span>
                    <span className="l">Freelancer</span>
                  </div>
                </Card.Body>
                <div className="cardFoot mx-3">
                  <h3>
                    <a href="">See details</a>
                  </h3>
                </div>
              </Card>
            </Col>
            {/* --------------------------------------- */}
           
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default InternshipOffer;
