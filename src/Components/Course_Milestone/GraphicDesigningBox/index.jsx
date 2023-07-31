import React from "react";
import Circular_Progressbar from "../Circular_Progressbar";
import styles from "../course-milestone.module.scss";
import { BsBook } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from "@fortawesome/free-regular-svg-icons";
import { FaBookOpen } from "react-icons/fa";
import { FaMdOutlineDescription } from "react-icons/fa";
import { Book, FileEarmarkText, Clock, People } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GraphicDesigningBox = () => {
  return (
    <div>
      <div className={styles.graphicDesigningBg}>
        <div>
          <div>
            <Circular_Progressbar />
          </div>
          <div className={styles.percentH2}>75%</div>
        </div>
        <div style={{ marginLeft: "36px" }}>
          <div className={styles.gdH2}>Graphic Designing</div>
          <div className={styles.IconBoxMain}>
            {/* <FontAwesomeIcon icon={faBookOpen} /> */}
            <div>
              <div className={styles.iconBox1}>
                <div className={styles.icon1}>
                  <Book />
                </div>
                <div className={styles.iconText}>21 Chapters</div>
              </div>
              <div className={styles.iconBox1} style={{ marginTop: "11px" }}>
                <div className={styles.icon1}>
                  <Clock />
                </div>
                <div className={styles.iconText}>3 Assignment</div>
              </div>
            </div>
            {/* //////// */}
            <div style={{ marginLeft: "34px" }}>
              <div className={styles.iconBox1}>
                <div className={styles.icon1}>
                  <FileEarmarkText />
                </div>
                <div className={styles.iconText}>50 mins</div>
              </div>
              <div className={styles.iconBox1} style={{ marginTop: "11px" }}>
                <div className={styles.icon1}>
                  <People />
                </div>
                <div className={styles.iconText}>45 Students</div>
              </div>
            </div>
          </div>
          <div className={styles.BtnBox} style={{ marginTop: "20px" }}>
            <Button variant="none" className={styles.Button1}>
              Skip
            </Button>
            <Link to="../courseMilestoneEmpty">
              <Button variant="none" className={styles.Button2}>
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigningBox;
