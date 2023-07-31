import React from "react";
import "./Toaster.scss";
import { Toast } from "react-bootstrap";

const Toaster = ({ variant, message, setShow, show}) => {
  return (
    <div className="toaster">
      <Toast style={{borderRadius:"20px"}} className="d-inline-block m-1 p-2 text-center" bg={variant} onClose={() => setShow(false)} show={show} delay={5000} autohide>
        <Toast.Body className={"text-white fw-bold"} style={{fontSize:"30px"}}>
          {message}
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Toaster;
