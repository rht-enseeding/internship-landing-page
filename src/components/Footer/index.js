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
          <Col md={3} className="footer-column text-center text-sm-start">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Company Registration</a>
              </li>
              <li>
                <a href="/">Digital Marketing</a>
              </li>
              <li>
                <a href="/">Fundraising Service</a>
              </li>
              <li>
                <a href="/">Legal & Accounting</a>
              </li>
              <li>
                <a href="/">Application Development</a>
              </li>
              <li>
                <a href="/">Sales</a>
              </li>
              <li>
                <a href="/">Business Plan Writing</a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="footer-column text-center text-sm-start">
            <h4>Resources</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Internship Platform</a>
              </li>
              <li>
                <a href="/">Fractional Team Rental</a>
              </li>
              <li>
                <a href="/">Startup Acquisition</a>
              </li>
              <li>
                <a href="/">Co Founder</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-column text-center text-sm-start">
            <img src={footer} alt="" />
          </Col>
          <Col md={3} className="footer-column">
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
          </Col>
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
