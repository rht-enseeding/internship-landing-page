import React from "react";
import colors from "../../../Constant";

function TeacherSectionButton(props) {
  return (
    <button
      style={{
        width: "131px",
        height: "44px",
        borderRadius: "5px",
        background: colors.LightPurple,
        border: "none",
      }}
    >
      <text
        style={{
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "17px",
          lineHeight: "21px",
          letterSpacing: "-0.01em",
          color:colors.Light,
        }}>
          {props.title}
        </text>
    </button>
  );
}

export default TeacherSectionButton;