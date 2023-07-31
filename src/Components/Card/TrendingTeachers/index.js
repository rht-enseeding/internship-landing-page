import React from "react";
import colors from "../../../Constant";
import { useNavigate } from "react-router";

function TrendingTeachersCard({ data }) {
  const navigate = useNavigate()
  // console.log(data) 
  
  return (
    <div className="col-11 col-lg-6  py-2">
      <div
        className="row d-flex justify-content-center"
        key={data?.key}
        onClick={(e) => {
          navigate(`/teacher-profile/${data._id}`, { state: data });
        }}
      >
        <div
          className="col-4 m-0 p-0 "
          style={{
            clipPath: `polygon(100% 0, 99% 22%, 96% 50%, 99% 80%, 100% 100%, 0 100%, 1% 0)`,
            backgroundColor: colors.orange,
            borderRadius: "7px",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              clipPath: `polygon(100% 0, 99% 22%, 96% 50%, 99% 80%, 100% 100%, 0 100%, 1% 0)`,
              marginRight: "3px",
              background: ` linear-gradient(to bottom, ${colors.DarkPurple} 40%, ${colors.LightPurple} 100%)`,
              borderRadius: "7px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={data?.profilePic} style={{ width: "50px", height: "50px" }} />
          </div>
        </div>
        <div
          className="col-7 py-3"
          style={{
            borderRight: "1px solid",
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: colors.ShadowGrey,
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            background: colors.Light,
          }}
        >
          <div className="row m-0 p-0">
            <text
              className="text-left  "
              style={{
                fontFamily: "Source Sans Pro",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "21px",
                lineHeight: "31.43px",
                letterSpacing: "-1%",
                color: colors.TextDarkGrey,
              }}
            >
              {data?.teacherName}
            </text>
            <text
              className="text-left  py-1"
              style={{
                fontFamily: "Source Sans Pro",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "15.08px",
                letterSpacing: "-1%",
                color: colors.TextGrey,
              }}
            >
              {data?.designation}
            </text>
            <text
              className="text-left  "
              style={{
                fontFamily: "Source Sans Pro",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "13px",
                lineHeight: "16.34px",
                letterSpacing: "-1%",
                color: colors.TextPurple,
              }}
            >
              {data?.email}
            </text>
            <text
              className="text-left py-1 d-none d-md-block"
              style={{
                fontFamily: "Source Sans Pro",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "17px",
                letterSpacing: "-1%",
                color: colors.TextGrey,
                textAlign: "justify",
              }}
            >
              {data?.description}
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTeachersCard;
