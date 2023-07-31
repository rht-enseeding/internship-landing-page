import React, { useRef, useState } from "react";
import registerImg from "../Assets/registerImg.png";
import "../Styles/Login/Register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../API/index";
import Loading from "./Loading";
import Toaster from "../Components/Toaster/Toaster";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const email = emailRef.current.value;

    try {
      const response = await axios.post(LoginApi, {
        email: email,
      });
      if (response.data.data.message === "Verification link sent sucessfully") {
        navigate("/register-success");
      } else {
        navigate("/verify", { state: email });
      }
      // console.log(response.data.data.message);
    } catch (error) {
      console.log(error.response.data.error.message);
      if(error.response.data.error.message === "User"){
        setMessage("Account not found!")
      }else{
        setMessage(error.response.data.error.message);
      }
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
        <div className="register-right m-0 p-0">
          <div className="register-right-main ">
            <h1>Sign In</h1>
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
              {/* <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullName"
                ref={fullNameRef}
              /> */}
              <button type="submit">Sign In</button>
            </form>
            <div className="register-below">
              Not Registered? <Link to={"/signup"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
