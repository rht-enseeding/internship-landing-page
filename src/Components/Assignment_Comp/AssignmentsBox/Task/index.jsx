import React from 'react'
import styles from './task.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Task = () => {
  return (
    <div style={{ marginTop: '46px' }}>
      <div className={styles.mainDiv2}>
        <div className={styles.mainDiv3}>
          <div className={styles.pinkCircle}></div>
          <div>
            <div className={styles.h2}>
              Make changes in current Crypto Project aslo Submit reports
            </div>
            <div className={styles.subTitle}>Web Crypto</div>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faAngleRight} fontSize={16} color="#6641AA" />
        </div>
      </div>
    </div>
  )
}

export default Task
