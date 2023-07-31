import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../Pages/RegisterForm";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Verification from "../Pages/Verification";
import Loading from "../Pages/Loading";
import RegisterSuccess from "../Pages/RegisterSuccess";

const PrivateRouter = ({ user, userinfo, token, setToken}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn user={user} userinfo={userinfo}  />} />
        <Route path="/loading" element={<Loading user={user} userinfo={userinfo} />} />
        <Route path="/signup" element={<SignUp user={user} userinfo={userinfo} />} />
        <Route path="/verify" element={<Verification user={user} userinfo={userinfo}  token={token} setToken={setToken}/>} />
        <Route path="/register-form" element={<RegisterForm user={user}  userinfo={userinfo}  token={token} setToken={setToken}/>} />
        <Route path="/register-success" element={<RegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRouter;
