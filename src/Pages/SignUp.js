import React, { useEffect, useRef, useState } from "react";
import registerImg from "../Assets/registerImg.png";
import "../Styles/Login/Register.scss";
import axios from "axios";
import Loading from "./Loading";
import Toaster from "../Components/Toaster/Toaster";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const fullNameRef = useRef(null);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const email = emailRef.current.value;
    const fullName = fullNameRef.current.value;

    try {
      const response = await axios.post(
        "https://enseedling-internship.onrender.com/user/register",
        {
          fullName: fullName,
          email: email,
        }
      );
      // alert("Please check your inbox to verify email!");
      // console.log(response.data.data.message);
      navigate("/register-success");
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.error.message);
      setVariant("danger");
      setShow(true);
    }
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="register">
      <Toaster
        show={show}
        setShow={setShow}
        variant={variant}
        message={message}
      />
      <div className="register-main">
        <div className="register-left">
          <h1>Start Your Journey With Us.</h1>
          <p>
            Discover the best options for you that helps you in your future
            opportunities
          </p>
          <div className="register-img">
            <img src={registerImg} alt="" />
          </div>
        </div>
        <div className="register-right">
          <div className="register-right-main">
            <h1>Sign Up</h1>
            <p>Enter your email id and we will send you a verification code.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="registerEmail">Email address</label>
              <input
                type="email"
                name="email"
                id="registerEmail"
                ref={emailRef}
                required
              />
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullName"
                ref={fullNameRef}
                required
              />
              <button type="submit">Sign Up</button>
            </form>
            <div className="register-below">
              Already have an account? <Link to={"/"}>Sign In</Link>
            </div>
            {/* <div className="register-below">
              Not Registered? <span>Sign Up</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
