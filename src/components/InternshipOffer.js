import React, { useState } from "react";
import { Container, Row, Col, Card, Dropdown, DropdownButton, Form } from "react-bootstrap";
import "../App.css";
import { FaMoneyBill, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { East } from "@mui/icons-material";

const cardsData = [
  {
    id: 1,
    heading: "Web developement",
    subheading: "Syntax Doc Solutions Private  Limited",
    time: "3 months",
    cost: "$45.00/month",
  },
  {
    id: 2,
    heading: "Machine Learning ",
    subheading: "Syntax Doc Solutions Private  Limited",
    time: "3 months",
    cost: "$25.00/month",
  },
  {
    id: 3,
    heading: " Internet of Things",
    subheading: "Syntax Doc Solutions Private  Limited",
    time: "2.5 months",
    cost: "$20.00/month",
  },
  {
    id: 4,
    heading: "Data Analytics",
    subheading: "Syntax Doc Solutions Private  Limited",
    time: "2 months",
    cost: "$15.00/month",
  },
  {
    id: 5,
    heading: "Web Designing",
    subheading: "Syntax Doc Solutions Private  Limited",
    time: "3 months",
    cost: "$45.00/month",
  },
  {
    id: 6,
    heading: "Ethical Hacking ",
    subheading: "Syntax Doc Solutions Private  Limited",
    time: "3 months",
    cost: "$25.00/month",
  },
];

const handleColumnClick = (link) => {
  window.location.href = link; // Redirect to the provided link
};
const InternshipOffer = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <Container className="text-center my-5 py-2 ">
      <p style={{ color: "#6641AA", fontSize: "24px", fontWeight: "700" }}>Internships</p>
      <h1 className=" mb-3 fw-bold">Latest Internship Offers</h1>

      <div className="filterbtn d-flex justify-content-end">
        <button onClick={() => setIsOpen(!isOpen)}>Filter <FontAwesomeIcon icon={faFilter} /></button>

        {isOpen && <div className="filtercardbox">

          <Card className=" filtercard pb-3">
            <div>
              <ul>
                <li>
                  <h2 className="heading pt-2 mb-4">Filter</h2>
                </li>
                <li className="filtertitle">Location</li>
                <select placeholder="Select" className="filtercardselect">
                  <option value="New York">New York</option>
                  <option value="">Portugal</option>
                  <option value="">Canada</option>
                  <option value="">Brazil</option>
                  <option value="">Islamabad</option>
                </select>
              </ul>
            </div>
            <div>
              <ul>
                <li className="filtertitle">Internship</li>
                <li >
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
        </div>
        }

      </div>
      <Row className="my-2  text-start">

        < Col xs={12}  >
          <Row>
            {cardsData.map((card) => (
              <Col xs={12} md={4} key={card.id} className="mb-4">
                <Card
                  className="effect"
                  onClick={() =>
                    handleColumnClick("https://app.interncove.com/")
                  }
                >
                  <Card.Body className="py-3">
                    <Card.Title
                      className="internofferbtn"
                    >
                      Actively Hiring
                    </Card.Title>

                    <Card.Text className="pt-3 d-flex justify-content-between flex-column">
                      <h3 className="internofferh3">{card.heading}</h3>
                      <p className="internofferp pb-3">{card.subheading}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="py-0">
                        <ul style={{ listStyle: "none", paddingLeft: "0" }}>

                          <li className="py-1 interncoveli">
                            <FaMapMarkerAlt />
                            &nbsp;&nbsp; Mumbai
                          </li>
                          <li className="py-1 interncoveli">
                            {" "}
                            <FaMoneyBill /> &nbsp;&nbsp; {card.cost}
                          </li>
                          <li className="py-1 interncoveli" >
                            <FaCalendarAlt />
                            &nbsp;&nbsp; {card.time}
                          </li>
                        </ul>
                      </Card.Text>{" "}
                      {/* <img src={apply1} alt="" /> */}
                    </div>
                    <div
                      className="d-flex m-0 p-0 justify-content-between gap-2"

                    >
                      <span className="interncovebtns interncovebtnsactive ">Freelancer</span>
                      <span className="interncovebtns">Fulltime</span>
                      <span className="interncovebtns">Remote</span>
                    </div>
                  </Card.Body>
                  <div className="cardFoot mx-3 mb-2">
                    <a href="">See details  <East /></a>

                  </div>
                </Card>
              </Col >
            ))}
            {/* --------------------------------------- */}
          </Row >
        </Col >
      </Row >
    </Container >
  );
};

export default InternshipOffer;
