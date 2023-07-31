import React, { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import imageicon from "../../Assets/image1.png";
import { AiOutlineMenu } from "react-icons/ai";
import "../../Styles/Navbar/Header.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../redux/actions/activePageAction";

const Header = ({ sideMenu, setSideMenu, userinfo }) => {
  const { usercolor } = useSelector((state)=> state.userInfo)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setActivePage(window.location.pathname.slice(1) === "" ? "dashboard" : window.location.pathname.slice(1)))
  },[])
  // console.log(userinfo);
  return (
    <div className="navheader d-flex direction-row justify-content-between align-items-center p-4">
      <div className="">
        <InputGroup style={{ borderColor: "transparent" }}>
          {/* <InputGroup.Text
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </InputGroup.Text>
          <FormControl
            style={{ border: "none" }}
            placeholder="Search Any Thing Here"
            size="sm"
            required
          /> */}
        </InputGroup>
      </div>
      <div className="d-flex direction-row gap-4 align-items-center ">
        <div className="sidebutton" onClick={() => setSideMenu(!sideMenu)}>
          <AiOutlineMenu />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bell"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
        </svg>
        <div
          className="d-flex justify-content-center align-items-center gap-3"
          onClick={() => navigate("/user-profile")}
        >
          <div>
            { !userinfo.profilePic ? (
              <div className="nameCircle" style={{backgroundColor: usercolor}}>{userinfo.fullName.split("")[0].toUpperCase()}</div>
            ) : (
              <img
                className="rounded-circle"
                src={imageicon}
                alt="imageicon"
                width={"30px"}
                height={"30px"}
              />
            )}
          </div>
          <div className="direction-column gap-1 d-flex justify-content-center align-items-center">
            <div className="fw-bold d-flex justify-content-center align-items-center">
              { userinfo.fullName.split("")[0].toUpperCase() +
                userinfo.fullName.slice(1)}
            </div>
            {/* <h6 className="text-secondary">{userinfo.email}</h6> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
