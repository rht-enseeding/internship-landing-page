import React from 'react'
import styles from './learn-activity.module.scss'
import CourseMilestoneChart from '../CourseMilestoneChart'
import CustomDropdownBtn from '../CustomDropdownBtn'

const LearnActivity = () => {
  return (
    <div>
      <div>
        <div
          className={styles.learnActivityDiv}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div className={styles.h1}>Learning Activity</div>
          <div>
            <CustomDropdownBtn />
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <CourseMilestoneChart />
        </div>
      </div>
    </div>
  )
}

export default LearnActivity
