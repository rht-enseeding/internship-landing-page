import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { c1, c2, c3, c4, c5, c6, icon1, logo } from "../assets";
import { FaStar, FaEye, FaBook, FaClock } from "react-icons/fa";


const cardsData = [
  {
    id: 1,
    image: c1,
    heading: "Graphic Design",
    icons: [icon1, "icon2", "icon3", "icon4"],
    rating: "4.5",
    lesson: "10 Lessons",
    views: "23,000",
  },
  {
    id: 2,
    image: c2,
    heading: "Machine Learning",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "2.7",
    lesson: "10 Lessons",
    views: "3,330",
  },
  {
    id: 3,
    image: c3,
    heading: "Full Stack Development",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.5",
    lesson: "13 Lessons",
    views: "12,000",
  },
  {
    id: 4,
    image: c4,
    heading: "Data Analytics",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.0",
    lesson: "16 Lessons",
    views: "30,001",
  },
  {
    id: 5,
    image: c5,
    heading: "Artificial Intelligence",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "5.0",
    lesson: "15 Lessons",
    views: " 22,280",
  },
  {
    id: 6,
    image: c6,
    heading: "Digital Marketing",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "3.5",
    lesson: "9 Lessons",
    views: "12,995",
  },
];

const handleColumnClick = (link) => {
  window.location.href = link; // Redirect to the provided link
};

const Courses = () => {
  return (
    <Container className="internBox my-3 py-5 text-center">
      <p className="allcoursesp">All courses</p>
      <h1 className="mb-4 allcoursesh1">Our Amazing Courses</h1>
      <Row className="py-3">
        {cardsData.map((card) => (
          <Col sm={4} key={card.id} className="py-2">
            <Card
              className="my-2 effect allcoursescard"

              onClick={() => handleColumnClick("https://app.interncove.com/")}
            >
              <Card.Img
                // variant="top"
                src={card.image}
                className="allcoursescardimg"
              />
              <Card.Body className="text-start">
                <Card.Title className="allcoursescardhead">{card.heading}</Card.Title>
                <p className="allcoursescardp">8 weeks course</p>
                <Card.Text>{/* Additional dynamic content */}</Card.Text>
                {/* <Card.Footer>
                  {card.icons.map((icon, index) => (
                    <span className="icon" key={index}>
                      <AiFillStar />
                    </span>
                  ))}
                </Card.Footer> */}
                <Card.Footer className="ps-0" style={{ background: "none" }}>
                  <div className="d-flex gap-5 py-2">
                    {" "}
                    <span>
                      {" "}
                      <FaStar color="rgb(245, 221, 5)" />
                      &nbsp;&nbsp; {card.rating}
                    </span>
                    <span className="ps-5">
                      {" "}
                      <FaEye color="blue" />
                      &nbsp;&nbsp; {card.views}
                    </span>
                  </div>
                  <div className="d-flex gap-5 py-2">
                    <span>
                      {" "}
                      <FaBook color="green" /> &nbsp;{card.lesson}
                    </span>
                    <span>
                      <FaClock color="orange" />
                      &nbsp;&nbsp; 3 hours
                    </span>
                  </div>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center  mt-5">
        <button
          style={{
            width: "181px",
            height: "50px",
            borderRadius: "5px",
            background: "none",
            color: "#E5761A",
            border: "2px solid #E5761A",
            fontSize: "18px",
            fontWeight: "400",
          }}
          onClick={() => handleColumnClick("https://app.interncove.com/")}
          className="effect"
        >
          Find more courses
        </button>
      </Row>
    </Container>
  );
};

export default Courses;
