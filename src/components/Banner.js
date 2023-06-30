import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";

const Banner = () => {
    return (
      <div className="banner container-fluid mb-5">
        <Header />
        <Container fluid>
          <Row className="justify-content-center py-5 mt-4">
            <Col xs={12} sm={8} md={6} lg={7}>
              <div className="bannercontent">
                <h1
                  className="Heading-1 m-1 text-center"
                  style={{ color: "gray", textAlign: "center" }}
                >
                  <span style={{ color: "navy" }}>Opportunities </span>
                  don't just  happen , you create them{" "}
                </h1>
                <br />
                <div className="py-2 my-1">
                  <p className="Text-1 text-center para" style={{ color: "gray" }}>
                    Search for temporary jobs at state of the art new
                    businesses, enormous brand multinationals, or in the middle
                    between. Your vocation begins here.
                  </p>
                </div>
                <Row className="justify-content-center">
                  <Col xs={12} sm={8} md={6} lg={10} className="inputBox">
                    <form>
                      <div className="mb-3 d-flex ">
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          required
                          placeholder="Email Address"
                        />
                        <button className="navbtn" style={{width:"50%"}}>Apply Now</button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Banner;
