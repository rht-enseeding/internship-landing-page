import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";
import { FaMoneyBill, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


const cardsData = [
  {
    id: 1,
    heading: "Web developement",
    subheading: "dbyhcdfiuvhjdiuvhfk",
    time: "3 months",
    cost: "$45.00/month",
  },
  {
    id: 2,
    heading: "Machine Learning ",
    subheading: "dbyhcdfiuvhjdiuvhfk",
    time: "3 months",
    cost: "$25.00/month",
  },
  {
    id: 3,
    heading: " Internet of Things",
    subheading: "dbyhcdfiuvhjdiuvhfk",
    time: "2.5 months",
    cost: "$20.00/month",
  },
  {
    id: 4,
    heading: "Data Analytics",
    subheading: "dbyhcdfiuvhjdiuvhfk",
    time: "2 months",
    cost: "$15.00/month",
  },
];

 const handleColumnClick = (link) => {
   window.location.href = link; // Redirect to the provided link
 };
const 
InternshipOffer = () => {
  return (
    <Container   className=" my-5 py-2 ">
      <p>Internships</p>
      <h1 className=" mb-3">Latest Internship Offers</h1>

      <Row className="my-2  text-start">
        <Col xs={12} md={4} className="">
          <Card className=" filtercard">
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
              <ul className="pb-4">
                <li className="filtertitle ">Specialities</li>
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
            {cardsData.map((card) => (
              <Col xs={12} md={6} key={card.id} className="mb-2">
                <Card
                  className="effect"
                  onClick={() =>
                    handleColumnClick("https://app.interncove.com/")
                  }
                >
                  <Card.Body className="py-2">
                    <Card.Title
                      className="cardtitle-i px-1"
                      style={{ color: "white", fontSize: "15px" }}
                    >
                      Actively Hired
                    </Card.Title>

                    <Card.Text className="pt-2">
                      <h4>{card.heading}</h4>
                      {/* <p>{card.subheading}</p> */}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="py-2">
                        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                          <li className="py-1">
                            {" "}
                            <FaMoneyBill /> &nbsp;&nbsp; {card.cost}
                          </li>
                          <li className="py-1">
                            <FaMapMarkerAlt />
                            &nbsp;&nbsp; Mumbai
                          </li>
                          <li className="py-1">
                            <FaCalendarAlt />
                            &nbsp;&nbsp; {card.time}
                          </li>
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
            ))}
            {/* --------------------------------------- */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default InternshipOffer;
