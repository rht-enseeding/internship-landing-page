import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Modal,Image } from "react-bootstrap";

const Apply = () => {
      const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  
  
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   contactNumber: "",
   message: "",
 });

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const currentDate = new Date().toISOString();
     const postData = {
       name: formData.name,
       email: formData.email,
       createdOn: currentDate,
       contactNumber: formData.contactNumber,
       message: formData.message,
     };
     console.log(postData);
             setIsLoading(true);

     const response = await axios.post(
       "https://enseedling-backend.onrender.com/contact/create",
       // JSO(postData)
       postData
     );
     console.log(response.data); // Handle the response as needed
     
      // Show pop-up after successful form submission
      setIsSubmitted(true);
     
     // Reset the form
     setFormData({ name: "", email: "", contactNumber: "", message: "" });
   } catch (error) {
     console.error(error);
   }
 };



  return (
    <Container className="py-5 applybg my-5">
      <div className="text-start px-5" style={{ color: "white" }}>
        <h2>Apply for internship</h2>
        <p className="py-2" style={{ fontWeight: "bold" }}>
          We will get back to you as soon as possible
        </p>
      </div>

      <Row className="justify-content-center">
        <Col md={9}>
          <Form onSubmit={handleSubmit}>
            {/* <Row className="">
              <Col>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="input"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />{" "}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail ">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />{" "}
                </Form.Group>
              </Col>
            </Row> */}

            <Row className="py-1">
              <Col >
                <Form.Group controlId="formName" className="py-2">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="input"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />{" "}
                </Form.Group>
              </Col>
              <Col style={{marginBottom:"0"}}>
                <Form.Group controlId="formEmail" style={{marginBottom:"0"}} >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />{" "}
                 
              
                </Form.Group>
              </Col>
            </Row>
            <Row className="py-1">
              <Col>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="phone number"
                    name="contactNumber"
                    onChange={handleChange}
                    value={formData.contactNumber}
                  />{" "}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    name="message"
                    id=""
                    placeholder="Enter message..."
                    onChange={handleChange}
                    value={formData.message}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="primary"
              type="submit"
              style={{
                width: "50%",
                backgroundColor: "#16094F",
                color: "white",
                border: "none",
              }}
              className="my-5"
              disabled={isLoading}
            >
              {isLoading ? <div className="loader" /> : "Apply Now"}
            </Button>
          </Form>
          {/* ------------ pop up box----------------- */}

          <Modal
            show={isSubmitted}
            onHide={() => setIsSubmitted(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-center">
                Form submitted Successfully
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <div className="tick-image-container">
                <Image
                  src="correct.png"
                  alt="Tick Image"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Will get back to you within 24 hours</p>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={() => setIsSubmitted(false)}
                style={{
                  padding: "10px",
                  backgroundColor: "#16094F",
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Apply;
