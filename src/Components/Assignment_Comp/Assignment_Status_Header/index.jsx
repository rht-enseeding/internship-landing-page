import React from 'react'
import styles from './assignment_status_header.module.scss'

const Assignment_Status_Header = () => {
  return (
    <div className={styles.mainBg}>
      <div className={styles.oneTab}>
        <div className={styles.purpleSq}></div>
        <div className={styles.h1}>PENDING</div>
      </div>
      <div className={styles.oneTab}>
        <div className={styles.pinkSq}></div>
        <div className={styles.h2}>IN PROGRESS</div>
      </div>
      <div className={styles.oneTab}>
        <div className={styles.greenSq}></div>
        <div className={styles.h3}>Complete</div>
      </div>
      <div className={styles.oneTab}>
        <div className={styles.orangeSq}></div>
        <div className={styles.h4}>TO DO</div>
      </div>
    </div>
  )
}

export default Assignment_Status_Header
