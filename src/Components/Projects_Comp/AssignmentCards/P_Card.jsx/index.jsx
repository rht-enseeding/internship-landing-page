import React from 'react'
import styles from './p_card.module.scss'
import FigmaIcon from '../../../../Assets/icons/figmaIcon.svg'
import { useNavigate } from 'react-router'

const P_Card = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainBg} onClick={() => navigate("/assignment-detail")}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.grayCircle}></div>
        <div className={styles.grayTypo}>Design System</div>
      </div>
      <div className={styles.h1}>Implement the Cloud Design System</div>
      <div className={styles.h2}>
        Project Submission Date:{' '}
        <span className={styles.Boldh2}> 23 March 2023</span>
      </div>

      <button className={styles.btn1}>Low Priority Project</button>
      <div className={styles.divider}></div>

      <div style={{ display: 'flex' }}>
        <div>
          <img src={FigmaIcon} alt="" width="30px" height="30px" />
        </div>
        <div className={styles.h3}> Design_systemver2.fig</div>
      </div>
    </div>
  )
}

export default P_Card
