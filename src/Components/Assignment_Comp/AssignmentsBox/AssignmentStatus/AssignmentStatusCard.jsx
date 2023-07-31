import React from 'react'
import styles from './assignment-status.module.scss'
import Image1 from '../../../../Assets/Ellipse 41.svg'
import Image2 from '../../../../Assets/Ellipse 42.svg'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'

const AssignmentStatusCard = () => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.ImgBox}>
        <div className={styles.Img1Div}>
          <img src={Image1} alt="" width="100%" height="auto" />
        </div>
      </div>
      <div className={styles.cardBoxH1}>Crypto Web Design</div>
      <div className={styles.cardBoxH2}>Assigned on 12 March</div>

      <div className={styles.progressMainDiv}>
        <div className={styles.progressH1}>Progress</div>
        <div className={styles.progressH2}>80%</div>
      </div>
      <div height={'6px'}>
        <ProgressBar variant="success" now={40} />
      </div>
    </div>
  )
}

export default AssignmentStatusCard
