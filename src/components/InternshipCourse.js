import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaStar, FaEye, FaBook, FaClock } from "react-icons/fa";
import { c1, c2, c3, c4, c5, c6 } from "../assets";
// import { rec } from "../assets";


const cardsData = [
  {
    id: 1,
    image: c1,
    heading: "Graphic Design",
    desc: "Get ready to dive deep into the fundamentals of graphic design, where you'll explore the principles of composition, color theory, typography, and visual storytelling.",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.5",
    lesson: "10 Lessons",
    views: "23,000",
  },
  {
    id: 2,
    image: c2,
    heading: "Machine Learning",
    desc: "Unlock limitless potential with our comprehensive Full Stack course, empowering you to master the art of web development from front to back",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "2.7",
    lesson: "10 Lessons",
    views: "3,330",
  },
  {
    id: 3,
    image: c3,
    heading: "Full stack developemnet ",
    desc: "Dive deep into graphic design fundamentals, exploring composition, color theory, typography, and visual storytelling in our immersive course",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.5",
    lesson: "13 Lessons",
    views: "12,000",
  },
  {
    id: 4,
    image: c4,
    heading: "Data Analytics",
    desc: "Dive deep into graphic design fundamentals, exploring composition, color theory, typography, and visual storytelling in our immersive course",

    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.0",
    lesson: "16 Lessons",
    views: "30,001",
  },
  {
    id: 5,
    image: c5,
    heading: "Artifical Intelligence",
    desc: "Unlock the power of AI and revolutionize your business with our cutting-edge AI course",

    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "5.0",
    lesson: "15 Lessons",
    views: " 22,280",
  },
  {
    id: 6,
    image: c6,
    heading: "Digital Marketing",
    desc: "Unlock the secrets of digital marketing success with our comprehensive course, designed to boost your business and maximize your online presence",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "3.5",
    lesson: "9 Lessons",
    views: "12,995",
  },
];

const InternshipCourses = () => {
    const handleColumnClick = (link) => {
      window.location.href = link; // Redirect to the provided link
    };


  return (
    <>
      <Container className="internBox my-5 py-5">
        <p style={{ color: "#6641AA", fontWeight: "bold", marginBottom: "0" }}>
          Reasonable Courses
        </p>
        <h1> Guaranteed Internship Courses</h1>
        <Row>
          {cardsData.map((card) => (
            <Col sm={4} key={card.id}>
              <Card
                className="my-5 effect"
                onClick={() => handleColumnClick("https://app.interncove.com/")}
              >
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{ height: "30vh" }}
                />
                <Card.Body className="text-start">
                  <Card.Title>{card.heading}</Card.Title>
                  <p style={{ height: "10vh" }}>{card.desc}</p>
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
                        <FaStar color="rgb(245, 221, 5)" />
                        &nbsp;&nbsp;{card.rating}
                      </span>
                      <span>
                        {" "}
                        <FaEye color="blue" />
                        &nbsp;&nbsp; {card.views}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                      <span>
                        {" "}
                        <FaBook color="green" /> &nbsp;&nbsp;{card.lesson}
                      </span>
                      <span>
                        <FaClock color="orange" />
                        &nbsp;&nbsp; 3 hours
                      </span>
                    </div>
                  </Card.Footer>
                  <button
                    style={{
                      backgroundColor: "#6641AA ",
                      width: "100%",
                      color: "white",
                      padding: "8px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Enroll Now
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Row className="justify-content-center">
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
      </Row> */}{" "}
      </Container>
    </>
  );
};

export default InternshipCourses;
