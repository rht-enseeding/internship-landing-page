import React, { useState } from "react";
import { Button, Form, Dropdown, Image } from "react-bootstrap";
import { cl, contact, fax } from "../assets";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Modal } from "react-bootstrap";


const ContactUS = () => {
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
      // Reset the form

      // Show pop-up after successful form submission
      setIsSubmitted(true);
      


      setFormData({ name: "", email: "", contactNumber: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <Row className="justify-content-center my-5 py-5">
        <Col md={6} className="d-block d-sm-none">
          <img
            src={contact}
            alt=""
            className="img-fluid"
            style={{ width: " 100%", maxHeight: "30rem" }}
          />
        </Col>
        <Col md={6} className="px-3" >
          <div className="">
            <h1 className="py-2">Get in touch</h1>
            <p>Keep in touch with us for latest updates</p>
            <Form className="text-center" onSubmit={handleSubmit}>
              <Form.Group controlId="formName ">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="input"
                  name="name"
                  style={{ margin: "10px", padding: "10px" }}
                  onChange={handleChange}
                  value={formData.name}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  style={{ margin: "10px", padding: "10px" }}
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Control
                  type="text"
                  placeholder="phone number"
                  name="contactNumber"
                  style={{ margin: "10px", padding: "10px" }}
                  onChange={handleChange}
                  value={formData.contactNumber}
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                {/* <input
                    type="tex"
                    placeholder="phone number"
                    style={{ margin: "10px", padding: "10px" }}
                  /> */}
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Enter message..."
                  style={{
                    width: "97%",
                    border: "2px solid #f5f5f5",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </Form.Group>

              {/* <Form.Group controlId="formDropdown">
                  <Form.Control
                    as="select"
                    style={{ margin: "10px", padding: "10px" }}
                  >
                    <option>- Select-</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </Form.Control>
                </Form.Group> */}

              <Button
                type="submit"
                className="w-100"
                style={{
                  margin: "10px",
                  padding: "10px",
                  backgroundColor: "#16094F",
                  textAlign: "center",
                }}
                disabled={isLoading}
              >
                {isLoading ? <div className="loader" /> : "Submit"}
              </Button>
            </Form>
          </div>
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
          {/* -------------------------- */}

          <div className=" col-12 d-flex justify-content-start   col-md-6 col-lg-4 my-1 py-3 py-md-1">
            <div
              className="justify-content-center align-items-start mx-5 py-3 "
              // style={carde}
            >
              <div
                className="col-3 icon rounded-circle my-3 d-flex justify-content-center align-items-center "
                style={{
                  // background: "#f5f5f5",
                  width: "15px",
                  height: "15px",
                }}
              >
                <img src={cl} alt="icon" className="" style={{}} />
              </div>
              <div className="col-7 text-start">
                <div>
                  <text className="Heading-2 ">Phone</text>
                </div>
                <div>
                  <text className="Text-1 py-1">+1478246-0224</text>
                </div>
              </div>
            </div>

            <div
              className="justify-content-center align-items-start  p-2 py-3 "
              // style={carde}
            >
              <div
                className="col-3 icon rounded-circle my-3 d-flex justify-content-center align-items-center "
                style={{
                  // background: "#f5f5f5",
                  width: "20px",
                  height: "20px",
                }}
              >
                <img src={fax} alt="icon" className="" style={{}} />
              </div>
              <div className="col-7 text-start">
                <div>
                  <text className="Heading-2 ">Email</text>
                </div>
                <div>
                  <text className="Text-1 py-1">contact@enseedling.com</text>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="d-none d-lg-block">
          <img
            src={contact}
            alt=""
            className="img-fluid"
            style={{ width: " 100%", maxHeight: "30rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUS;
