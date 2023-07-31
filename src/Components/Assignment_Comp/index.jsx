import React from "react";
import styles from "./assignment-comp.module.scss";
// import AssignmentBox from './AssignmentsBox'
import AssignmentNewCards from "./AssignmentNewCards";
import AssignmentCards from "../Projects_Comp/AssignmentCards";
import Assignment_Status_Header from "./Assignment_Status_Header";

const Assignment_Comp = () => {
  return (
    <div>
      <div className={styles.h1}>Assignments</div>
      {/* <AssignmentNewCards /> */}
      <div className="px-3">
        <div className={styles.secondDiv}>
          <div>
            <Assignment_Status_Header />
          </div>
          <div>
            <AssignmentCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment_Comp;
