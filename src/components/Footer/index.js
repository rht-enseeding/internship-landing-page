import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer2 from "./footer2";
import { footer } from "../../assets";

const Footer = () => {
  return (
    <footer
      className="footer "
      style={{ background: "#2D1D64", color: "white" }}
    >
      <Container className="py-5">
        <Row>
          <Col md={8}>
            <Row className="d-flex">
              <Col md={4} className="footer-column text-center text-sm-start">
                <h4>Company</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Teacher</a>
                  </li>
                  <li>
                    <a href="/"> Student</a>
                  </li>
                  <li>
                    <a href="/">Instructor</a>
                  </li>
                  <li>
                    <a href="/">Company</a>
                  </li>
                </ul>
              </Col>

              <Col md={4} className="footer-column text-center text-sm-start">
                <h4>Resources</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Terms and Coditions</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={4} className="footer-column text-center text-sm-start">
            <img src={footer} alt="" />
          </Col>
          {/* <Col md={3} className="footer-column">
            <p>Subscribe to our newsletter for updates</p>
            <Form>
              <Form.Group
                controlId="formEmail"
                style={{ display: "flex", backgroundColor: " #FF9900" }}
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "#FF9900", border: "none" }}
                />
                <Button
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "white",
                    width: "100px",
                    color: "black",
                  }}
                >
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
          </Col> */}
        </Row>
        <hr />
        <Row>
          <Col md={12} className="text-center">
            <Footer2 />
          </Col>
        </Row>
      </Container>
    </footer>
   
  );
};

export default Footer;
