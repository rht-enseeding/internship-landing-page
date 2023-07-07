import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Subscribe = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5 py-5">
        <Col xs={12} md={6}>
          <h2> Connect with Enseedling</h2>
          <p>Sign-Up for the Enseedling Newsletter</p>
          <Form>
            <Form.Group
              controlId="formEmail"
              style={{ display: "flex", backgroundColor: " #f5f5f5" ,padding:"10px"}}
            >
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{ backgroundColor: "#f5f5f5", border: "none" ,}}
              />
              <Button
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#2D1D64",
                  width: "100px",
                                  color: "white",
                  padding:"10px"
                }}
              >
                Subscribe
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
