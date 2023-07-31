import React from "react";
import P_Card from "./P_Card.jsx";
import styles from "./P_Card.jsx/p_card.module.scss";

const ProjectCards = () => {
  return (
    <div class="container">
      <div class={`row no-gutter mx-1  ${styles.nopadding}`}>
        {/* <div class="col-lg-4 col-md-4 col-sm-6 px-1"> */}
        <div class=" col-md-6 col-lg-4 px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
        <div class="col-md-6 col-lg-4  px-1">
          <P_Card />
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
