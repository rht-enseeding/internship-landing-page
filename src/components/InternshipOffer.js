import React, { useState } from "react";
import { Container, Row, Col, Card, Dropdown, DropdownButton, Form } from "react-bootstrap";
import "../App.css";
import { FaMoneyBill, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

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
const  InternshipOffer = () => {
 const [isOpen, setIsOpen] = useState(false);

  

  return (
    <Container className="text-center my-5 py-2 ">
      <p>Internships</p>
      <h1 className=" mb-3 ">Latest Internship Offers</h1>

      <Row className="my-2  text-start">
        <Col xs={12} md={4} className="">
          <Card className=" filtercard">
            <div>
              <ul>
                <li>
                  <h2>Filter</h2>
                </li>
                <li className="filtertitle">Location</li>
                <Dropdown style={{ width: "padding:10px" }}>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="custom-dropdown-toggle"
                    style={{
                      paddingRight: "0",
                      background: "navy",
                      border: "none",
                    }}
                  >
                    <FontAwesomeIcon icon={faFilter} /> Filter
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="custom-dropdown-toggle">
                    <Dropdown className="d-flex justify-content-center">
                      <select
                        id="mySelect"
                        style={{
                          width: "70%",
                          padding: "10px",
                          border: "none",
                        }}
                      >
                        <option value="option1">Mumbai</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
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
                    {/* <Card.Title
                      className="px-1"
                      style={{ color: "navy", fontSize: "15px" }}
                    >
                      Actively Hired
                    </Card.Title> */}

                    <Card.Text className="pt-2 d-flex justify-content-between">
                      <h4>{card.heading}</h4>
                      <p style={{ color: "navy", fontWeight: "bold" }}>
                        Actively hired
                      </p>
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
                      className="d-flex m-0 p-0 justify-content-start"
                      style={{ width: "100%" }}
                    >
                      <span className="l1 ">Freelancer</span>
                      <span className="l">Fulltime</span>
                      <span className="l">Remote</span>
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
