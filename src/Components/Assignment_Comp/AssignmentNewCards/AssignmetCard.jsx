import React from 'react'
import styles from './assignment-new-cards.module.scss'
import Image1 from '../../../Assets/image 32.svg'
import { Button } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AssignmetCard = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: `${data.bgColor}`,
        color: '#fff',
        borderRadius: '30px',
      }}
      className={styles.Cardbg}
    >
      <div className={styles.box1}>
        <div className={styles.ImgBg}>
          <div className={styles.Img1}>
            <img src={Image1} alt="" width="100%" height="auto" />
          </div>
          <div>
            <div className={styles.h1}>{data.title}</div>
            <div className={styles.h2}>{data.subTitle}</div>
          </div>
        </div>
        <div>
          <div className={styles.calender}>{data.calendarDate}</div>
          <div className={styles.deadline}>Deadline</div>
        </div>
      </div>
      <div className={styles.box2}>
        <div style={{ width: '70%' }}>
          <div className={styles.progressMainDiv}>
            <div className={styles.progressH2}>{data.progressValue}</div>
          </div>
          <div height={'6px'}>
            <ProgressBar
              variant="light"
              now={data.progress}
              style={{
                backgroundColor: ' rgba(217, 217, 217, 0.1)',
                // width: '80%',
              }}
            />
          </div>
        </div>
        <div className={styles.btnBox}>
          <Button variant="link" className={styles.btn1}>
            See Details{' '}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                marginLeft: '5px',
              }}
            />{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AssignmetCard
