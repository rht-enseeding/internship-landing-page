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
    desc: "Unlock your creativity and master the art of graphic design with our comprehensive course.",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.5",
    lesson: "10 Lessons",
    views: "23,000",
  },
  {
    id: 2,
    image: c2,
    heading: "Machine Learning",
    desc: "Unlock your creativity and master the art of graphic design with our comprehensive course.",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "2.7",
    lesson: "10 Lessons",
    views: "3,330",
  },
  {
    id: 3,
    image: c3,
    heading: "Full stack developemnet ",
    desc: "Unlock your creativity and master the art of graphic design with our comprehensive course.",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.5",
    lesson: "13 Lessons",
    views: "12,000",
  },
  {
    id: 4,
    image: c4,
    heading: "Data Analytics",
    desc: "Unlock your creativity and master the art of graphic design with our comprehensive course.",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "4.0",
    lesson: "16 Lessons",
    views: "30,001",
  },
  {
    id: 5,
    image: c5,
    heading: "Artifical Intelligence",
    desc: "Unlock your creativity and master the art of graphic design with our comprehensive course.",
    icons: ["icon1", "icon2", "icon3", "icon4"],
    rating: "5.0",
    lesson: "15 Lessons",
    views: " 22,280",
  },
  {
    id: 6,
    image: c6,
    heading: "Digital Marketing",
    desc: "Unlock your creativity and master the art of graphic design with our comprehensive course.",
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
      <Container className="internBox my-5 py-5 text-center">
        <p className="guranteCoursep" >
          Reasonable Courses
        </p>
        <h1 className="mb-5 guranteCourseh1 "> Guaranteed Internship Courses</h1>
        <Row>
          {cardsData.map((card) => (
            <Col sm={4} key={card.id}>
              <Card
                className="my-2 effect guranteeCoursecard"
                onClick={() => handleColumnClick("https://app.interncove.com/")}
              >
                <Card.Img
                  variant="top"
                  src={card.image}
                  className="guranteeCourseCardimg"
                />
                <Card.Body className="text-start">
                  <Card.Title className="guranteecoursecardtitle">{card.heading}</Card.Title>
                  <p className="guranteecoursecardbodyp" >{card.desc}</p>
                  <Card.Text>{/* Additional dynamic content */}</Card.Text>
                  {/* <Card.Footer>
                  {card.icons.map((icon, index) => (
                    <span className="icon" key={index}>
                      <AiFillStar />
                    </span>
                  ))}
                </Card.Footer> */}
                  <Card.Footer style={{ background: "none", paddingLeft: "0px" }}>
                    <div className="d-flex  gap-5 p-2 ">
                      {" "}
                      <span>
                        {" "}
                        <FaStar color="rgb(245, 221, 5)" />
                        &nbsp;&nbsp;{card.rating}
                      </span>
                      <span className="ps-5">
                        {" "}
                        <FaEye color="blue" />
                        &nbsp;&nbsp; {card.views}
                      </span>
                    </div>
                    <div className="d-flex gap-4  p-2">
                      <span>
                        {" "}
                        <FaBook color="green" /> &nbsp;&nbsp;{card.lesson}
                      </span>
                      <span >
                        <FaClock color="orange" className="ms-2" />
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
                      fontSize: "17px",
                      fontWeight: "600",
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
