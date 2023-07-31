import React from "react";
import flag from "../Assets/flag.png";
import user from "../Assets/user.png";
import mediaCorner from "../Assets/media-corner.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import profile from "../Assets/teacher.png";
import "../Styles/ProjectDetail/ProjectDetail.scss";

const ProjectDetail = () => {
  return (
    <div className="projectDetail">
      <div className="pd-left">
        <div className="pd-left-header">Graphic Designing Project</div>
        <div className="pdl-info">
          <div className="pdl-info-line">
            <div className="pdl-info-left">Status</div>
            <div className="pdl-info-status">
              <div className="status">
                <img src={flag} alt="" /> Active
              </div>
            </div>
          </div>
          <div className="pdl-info-line">
            <div className="pdl-info-left">Assigned By</div>
            <div className="pdl-info-users">
              <div className="pdl-info-user">
                <img src={user} alt="" /> Steward Louis
              </div>
              <div className="pdl-info-user">
                <img src={user} alt="" /> Steward Louis
              </div>
            </div>
          </div>
          <div className="pdl-info-line">
            <div className="pdl-info-left">Project Deadline</div>
            <div className="pdl-info-deadline">24 March 2023</div>
          </div>
          <div className="pdl-info-line">
            <div className="pdl-info-left">Project Level</div>
            <div className="pdl-info-level">Difficult</div>
          </div>
        </div>
        <div className="pdl-description">
          <div className="pdl-description-header">Description of Project: </div>
          <div className="pdl-description-main">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className="pdl-media">
          <div className="pdl-media-header">Project Media:</div>
          <div className="pdl-media-main">
            <div className="media-comp">
              <div className="media-title">Design_systemver2.fig</div>
              <div className="media-mini">
                <div className="media-mini-upline"></div>
                <div className="media-mini-downline"></div>
                <div className="media-mini-img">
                  <img src={mediaCorner} alt="" />
                </div>
              </div>
            </div>
            <div className="media-comp">
              <div className="media-title">Design_systemver2.fig</div>
              <div className="media-mini">
                <div className="media-mini-upline"></div>
                <div className="media-mini-downline"></div>
                <div className="media-mini-img">
                  <img src={mediaCorner} alt="" />
                </div>
              </div>
            </div>
            <div className="media-comp">
              <div className="media-title">Design_systemver2.fig</div>
              <div className="media-mini">
                <div className="media-mini-upline"></div>
                <div className="media-mini-downline"></div>
                <div className="media-mini-img">
                  <img src={mediaCorner} alt="" />
                </div>
              </div>
            </div>
            <div className="media-comp">
              <div className="media-title">Design_systemver2.fig</div>
              <div className="media-mini">
                <div className="media-mini-upline"></div>
                <div className="media-mini-downline"></div>
                <div className="media-mini-img">
                  <img src={mediaCorner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd-right">
        <div className="pd-right-header">Activities</div>
        <div className="act-button">
          <BsThreeDotsVertical />
        </div>
        <div className="pd-right-activity">
          <div className="activity-left">
            <img src={profile} alt="" />
          </div>
          <div className="activity-right">
            <div className="activity-right-header">Limen Smith</div>
            <div className="activity-right-date">Today 10:15 am</div>
            <div className="activity-right-ch">
              Commented on
              <span>Logo Design</span>
            </div>
            <div className="activity-right-comment">
              Just Change the font family & also .Use some good and attractive
              color combinations for all the Logos.
            </div>
          </div>
        </div>
        <div className="pd-right-activity">
          <div className="activity-left">
            <img src={profile} alt="" />
          </div>
          <div className="activity-right">
            <div className="activity-right-header">Limen Smith</div>
            <div className="activity-right-date">Today 10:15 am</div>
            <div className="activity-right-ch">
              Commented on
              <span>Logo Design</span>
            </div>
            <div className="activity-right-comment">
              Just Change the font family & also .Use some good and attractive
              color combinations for all the Logos.
            </div>
          </div>
        </div>
        <div className="pd-right-activity">
          <div className="activity-left">
            <img src={profile} alt="" />
          </div>
          <div className="activity-right">
            <div className="activity-right-header">Limen Smith</div>
            <div className="activity-right-date">Today 10:15 am</div>
            <div className="activity-right-ch">
              Commented on
              <span>Logo Design</span>
            </div>
            <div className="activity-right-comment">
              Just Change the font family & also .Use some good and attractive
              color combinations for all the Logos.
            </div>
          </div>
        </div>
        <div className="pd-right-activity">
          <div className="activity-left">
            <img src={profile} alt="" />
          </div>
          <div className="activity-right">
            <div className="activity-right-header">Limen Smith</div>
            <div className="activity-right-date">Today 10:15 am</div>
            <div className="activity-right-ch">
              Commented on
              <span>Logo Design</span>
            </div>
            <div className="activity-right-comment">
              Just Change the font family & also .Use some good and attractive
              color combinations for all the Logos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
