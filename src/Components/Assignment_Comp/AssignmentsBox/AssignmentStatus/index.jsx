import React from 'react'
import styles from './assignment-status.module.scss'
import AssignmentStatusCard from './AssignmentStatusCard'

const AssignmentStatus = () => {
  return (
    <div>
      <div className={styles.h1}>Assignment Status</div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <AssignmentStatusCard />
          </div>
          <div className="col-sm">
            <AssignmentStatusCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignmentStatus
