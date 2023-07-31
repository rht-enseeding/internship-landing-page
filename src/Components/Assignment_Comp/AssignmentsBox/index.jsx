import React from 'react'
import styles from './assignment-box.module.scss'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Task from './Task'
import AssignmentStatus from './AssignmentStatus/index'

const taskData = [
  {
    title: 'Make changes in current Crypto Project aslo Submit reports',
    subTitle: 'Web Crypto',
  },
  {
    title: 'Make changes in current Crypto Project aslo Submit reports',
    subTitle: 'Web Crypto',
  },
  {
    title: 'Make changes in current Crypto Project aslo Submit reports',
    subTitle: 'Web Crypto',
  },
  {
    title: 'Make changes in current Crypto Project aslo Submit reports',
    subTitle: 'Web Crypto',
  },
]

const AssignmentBox = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.mainBox}>
          <div className={styles.headBox}>
            <div className={styles.h1}>Assignments</div>
            <div>
              <Button variant="link" className={styles.link1}>
                See all tasks{' '}
                <FontAwesomeIcon icon={faAngleRight} fontSize={14} />
              </Button>
            </div>
          </div>

          <div>
            <button className={styles.btn1}>Current Task</button>
          </div>

          <div>
            {taskData?.map((item, index) => {
              return (
                <div key={index}>
                  <div style={{ marginBottom: '38px' }}>
                    <Task data={item} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <AssignmentStatus />
        </div>
      </div>
    </>
  )
}

export default AssignmentBox
