import React, { useState } from "react";
import styles from "./course-milestone.module.scss";
import GraphicDesigningBox from "./GraphicDesigningBox";
import UpgradeToProBox from "./UpgradeToProBox";
import GoPremium from "./GoPremium";
import LearnActivity from "./LearnActivity";
import illustration from "../../Assets/illustration.jpg";

const Course_Milestone = () => {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className={styles.courseMilestone}>
      <div className={styles.courseMilestoneH1}>Courses Milestone</div>
      {uploaded ? (
        <div className={styles.milestoneFlexdiv}>
          <div className={styles.GraphicUpgradeDiv}>
            <div>
              <GraphicDesigningBox />
            </div>
            <div style={{ marginTop: "26px" }}>
              <UpgradeToProBox />
            </div>
          </div>

          <div className={styles.goPremiumDiv}>
            <GoPremium />{" "}
            <div style={{ marginTop: "30px" }}>
              <LearnActivity />
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <img src={illustration} alt="" />
        </div>
      )}
    </div>
  );
};

export default Course_Milestone;
