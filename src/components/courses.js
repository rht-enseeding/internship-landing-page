import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { c1, c2, c3, c4, c5, c6, icon1, logo } from "../assets";
// import { AiFillStar } from "react-icons/bs";
// import { BsStarFill, BsEyeFill, BsBookFill, BsClockFill } from "react-icons/bs";

import { FaStar, FaEye, FaBook, FaClock } from "react-icons/fa";


const cardsData = [
  {
    id: 1,
    image: c1,
    heading: "Card 1",
    icons: [icon1, "icon2", "icon3", "icon4"],
  },
  {
    id: 2,
    image: c2,
    heading: "Card 2",
    icons: ["icon1", "icon2", "icon3", "icon4"],
  },
  {
    id: 3,
    image: c3,
    heading: "Card 3",
    icons: ["icon1", "icon2", "icon3", "icon4"],
  },
  {
    id: 4,
    image: c4,
    heading: "Card 1",
    icons: ["icon1", "icon2", "icon3", "icon4"],
  },
  {
    id: 5,
    image: c5,
    heading: "Card 2",
    icons: ["icon1", "icon2", "icon3", "icon4"],
  },
  {
    id: 6,
    image: c6,
    heading: "Card 3",
    icons: ["icon1", "icon2", "icon3", "icon4"],
  },
];

const Courses = () => {
  return (
    <Container className="internBox ">
      <p >All courses</p>
      <h1 >Our Amazing Courses</h1>
      <Row>
        {cardsData.map((card) => (
          <Col sm={4} key={card.id}>
            <Card className="my-3" style={{ borderRadius: "50px" }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body className="text-start">
                <Card.Title>{card.heading}</Card.Title>
                <p>8 weeks course</p>
                <Card.Text>{/* Additional dynamic content */}</Card.Text>
                {/* <Card.Footer>
                  {card.icons.map((icon, index) => (
                    <span className="icon" key={index}>
                      <AiFillStar />
                    </span>
                  ))}
                </Card.Footer> */}
                <Card.Footer style={{ background: "none" }}>
                  <div className="d-flex justify-content-between p-2">
                    {" "}
                    <span>
                      {" "}
                      <FaStar /> 4.7
                    </span>
                    <span>
                      {" "}
                      <FaEye /> 23,408
                    </span>
                  </div>
                  <div className="d-flex justify-content-between p-2">
                    <span>
                      {" "}
                      <FaBook /> 14 lessons
                    </span>
                    <span>
                      <FaClock /> 3 hours
                    </span>
                  </div>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <button
          style={{
            width: "300px",
            padding: "20px",
            background: "none",
            color: "orange",
            border: "2px solid orange",
          }}
        >
          Find more courses
        </button>
      </Row>
    </Container>
  );
};

export default Courses;
