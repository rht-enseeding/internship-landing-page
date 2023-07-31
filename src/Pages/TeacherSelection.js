import React, { useEffect, useState } from "react";
import TrendingTeachersCard from "../Components/Card/TrendingTeachers";
import TeacherSectionButton from "../Components/Button/TeacherSectionButton";
import { FilterIcon } from "../Assets";
import colors from "../Constant";
import { GetTeachersApi } from "../API";
import axios from "axios";

const TeacherSelection = ({ token }) => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const headers = {
      Token: `${token}`,
    };
    axios
      .get(GetTeachersApi, { headers })
      .then((response) => {
        setTeachers(response.data.data.teachers);
        // console.log(response.data.data.teachers);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, [token]);

  return (
    <div className="teacherSelection bg-white">
      <div>
        <div className="row d-flex justify-content-evenly justify-content-lg-end justify-content-xl-evenly">
          <div className="col-8 col-xl-11 d-flex justify-content-end align-items-center pt-3 ">
            <img src={FilterIcon} width="18px" height="18px" alt="" />
            <text
              style={{
                fontFamily: "Source Sans Pro",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "16.34px",
                letterSpacing: "-1%",
                color: colors.Dark,
                paddingLeft: "5px",
              }}
            >
              Filter
            </text>
          </div>
          <div className="col-9 col-md-10 col-lg-10 col-xl-11 m-0 p-0 w-100">
            <div className="row m-0 d-flex justify-content-between p-0">
              {teachers.map((card_items) => {
                return (
                  <TrendingTeachersCard
                    data={card_items}
                    key={card_items._id}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-8 col-xl-11 d-flex justify-content-end pt-3 m-0 ">
            <TeacherSectionButton title="Top Teachers" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSelection;
