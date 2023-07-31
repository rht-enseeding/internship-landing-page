import React, { useEffect, useRef, useState } from "react";
import registerImg from "../Assets/registerImg.png";
import "../Styles/Login/Register.scss";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginApi, OTPVerifyApi } from "../API/index";
import Loading from "./Loading";
import Timer from "../Components/CountdownTimer";
import Toaster from "../Components/Toaster/Toaster";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import {  setUserInfo, setUserStatus } from "../redux/actions/userinfoAction";

const Verification = ({ setToken }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("danger");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(false);

  const inputElements = [...document.querySelectorAll("input.code-input")];
  inputElements.forEach((ele, index) => {
    ele.addEventListener("keydown", (e) => {
      if (e.keyCode === 8 && e.target.value === "") {
        inputElements[Math.max(0, index - 1)].focus();
      }
    });

    ele.addEventListener("input", (e) => {
      e.preventDefault();
      const [first, ...rest] = e.target.value;
      e.target.value = first ?? "";

      const lastInputBox = index === inputElements.length - 1;
      const didInsertContent = first !== undefined;
      if (didInsertContent && !lastInputBox) {
        inputElements[index + 1].focus();
      }
    });
  });

  useEffect(() => {
    setTimer(true);
  }, []);

  const { state: email } = useLocation();

  const vrf1Ref = useRef(null);
  const vrf2Ref = useRef(null);
  const vrf3Ref = useRef(null);
  const vrf4Ref = useRef(null);
  const vrf5Ref = useRef(null);
  const vrf6Ref = useRef(null);

  const handleSubmit = async (e) => {
    setLoading(true);
    setTimer(false);
    e.preventDefault();
    const code =
      vrf1Ref.current.value.toString() +
      vrf2Ref.current.value.toString() +
      vrf3Ref.current.value.toString() +
      vrf4Ref.current.value.toString() +
      vrf5Ref.current.value.toString() +
      vrf6Ref.current.value.toString();

    console.log(code);

    try {
      const response = await axios.post(OTPVerifyApi, {
        email: email,
        otp: code,
      });
      Cookies.set("token", response.headers.token);
      // console.log(response.data.data.user);
      setToken(response.headers.token);
      dispatch(setUserInfo(response.data.data.user));
      dispatch(setUserStatus(true));
      // dispatch(setUserColor());
      navigate("/");
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.error.message)
      setVariant("danger");
      setShow(true);
    }

    setLoading(false);
  };

  const resendCode = async () => {
    setTimer(true);
    setLoading(true);
    try {
       await axios.post(LoginApi, {
        email: email,
      });
      // console.log(response.data.data.message);
    } catch (error) {
      console.log(error.message);
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
            <h1>Sign In</h1>
            <p>Enter your email id and we will send you a verification code.</p>
            <form onSubmit={handleSubmit}>
              {/* <label htmlFor="registerEmail">Email address</label>
              <input
                type="email"
                name="email"
                id="registerEmail"
                ref={emailRef}
              /> */}
              <label htmlFor="verification-num">Enter OTP Code</label>
              <div className="verification-area d-flex justify-content-center align-items-center">
                <div className="verification" id="verification-num">
                  <input
                    className="code-input text-center"
                    type="number"
                    maxLength={1}
                    ref={vrf1Ref}
                    placeholder="-"
                  />
                </div>
                <div className="verification">
                  <input
                    className="code-input text-center"
                    type="number"
                    maxLength={1}
                    ref={vrf2Ref}
                    placeholder="-"
                  />
                </div>
                <div className="verification">
                  <input
                    className="code-input text-center"
                    type="number"
                    maxLength={1}
                    ref={vrf3Ref}
                    placeholder="-"
                  />
                </div>
                <div className="verification">
                  <input
                    className="code-input text-center"
                    type="number"
                    maxLength={1}
                    ref={vrf4Ref}
                    placeholder="-"
                  />
                </div>
                <div className="verification">
                  <input
                    className="code-input text-center"
                    type="number"
                    maxLength={1}
                    ref={vrf5Ref}
                    placeholder="-"
                  />
                </div>
                <div className="verification">
                  <input
                    className="code-input text-center"
                    type="number"
                    maxLength={1}
                    ref={vrf6Ref}
                    placeholder="-"
                  />
                </div>
              </div>
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
            <div className="d-flex justify-content-center align-items-center p-3">
              {timer ? (
                <Timer timer={timer} setTimer={setTimer} />
              ) : (
                <div className="register-below">
                  Didn't receive the code?{" "}
                  <span className="text-primary" onClick={resendCode}>
                    Resend.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
