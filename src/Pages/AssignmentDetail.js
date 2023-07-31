import React, { useState } from "react";
import flag from "../Assets/flag.png";
import user from "../Assets/user.png";
import "../Styles/Assignment/AssignmentDetail.scss";
const AssignmentDetail = () => {
  return (
    <div className="assignmentDetail">
      <div className="assignmentDetail-header">Marketing Assignment</div>
      <div className="assignmentDetail-buttons">
        <div className="ad-button">Upload File</div>
        <div className="ad-button">Compiler</div>
      </div>
      <div className="ad-information">
        <div className="ad-info-line">
          <div className="ad-info-line-left">Title of Assignment</div>
          <div className="ad-info-line-title">4P’s of Marketing</div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Requirements</div>
          <div className="ad-info-line-requirement">Use Time Roman Fonts</div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Status</div>
          <div className="ad-info-line-status">
            <div className="status">
              <img src={flag} alt="" /> Active
            </div>
          </div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Category</div>
          <div className="ad-info-line-category">Digital Marketing</div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Topics</div>
          <div className="ad-info-line-topic">Product Promotion</div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Created by</div>
          <div className="ad-info-line-user">
            <img src={user} alt="" /> Steward Louis
          </div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Project Level</div>
          <div className="ad-info-line-level">Difficult</div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Assignment Deadline</div>
          <div className="ad-info-line-deadline">24 March 2023</div>
        </div>
        <div className="ad-info-line">
          <div className="ad-info-line-left">Assignment Marks</div>
          <div className="ad-info-line-mark">98/100</div>
        </div>
      </div>
      <div className="ad-below">
        <div className="ad-below-left">
          <div className="ad-bl-header">
            <div className="ad-bl-h-active">Description</div>
            <div className="ad-bl-h-disabled">Editorial</div>
            <div className="ad-bl-h-disabled">Solutions (1.9k)</div>
            <div className="ad-bl-h-disabled">Submissions</div>
          </div>
          <div className="ad-bl-main">
            <h1>Marketing Assignment</h1>
          </div>
        </div>
        <div className="ad-below-right">Compiler</div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
