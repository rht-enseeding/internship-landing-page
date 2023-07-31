import React from 'react'
import styles from '../assignment-comp.module.scss'
import AssignmetCard from './AssignmetCard'

const assignmentData = [
  {
    title: 'Marketing Assignment',
    subTitle:
      ' Create Marketing 4 P’s Diagrams to represent the concept of marketing in good way',
    calendarDate: '12 May',
    progressValue: '40%',
    progress: 40,
    bgColor: '#6641AA',
  },
  {
    title: 'Marketing Assignment',
    subTitle:
      ' Create Marketing 4 P’s Diagrams to represent the concept of marketing in good way',
    calendarDate: '12 May',
    progressValue: '40%',
    progress: 40,
    bgColor: '#EC3B57',
  },
  {
    title: 'Marketing Assignment',
    subTitle:
      ' Create Marketing 4 P’s Diagrams to represent the concept of marketing in good way',
    calendarDate: '12 May',
    progressValue: '40%',
    progress: 40,
    bgColor: '#FF9800',
  },
  {
    title: 'Marketing Assignment',
    subTitle:
      ' Create Marketing 4 P’s Diagrams to represent the concept of marketing in good way',
    calendarDate: '12 May',
    progressValue: '40%',
    progress: 40,
    bgColor: '#2D1D64',
  },
  {
    title: 'Marketing Assignment',
    subTitle:
      ' Create Marketing 4 P’s Diagrams to represent the concept of marketing in good way',
    calendarDate: '12 May',
    progressValue: '40%',
    progress: 40,
    bgColor: '#FF5789',
  },
  {
    title: 'Marketing Assignment',
    subTitle:
      ' Create Marketing 4 P’s Diagrams to represent the concept of marketing in good way',
    calendarDate: '12 May',
    progressValue: '40%',
    progress: 40,
    bgColor: '#54d205f5',
  },
]

const AssignmentNewCards = () => {
  return (
    <div>
      <div className={styles.mainBg}>
        {/* <AssignmetCard /> */}

        <div class="container">
          <div class="row">
            {assignmentData &&
              assignmentData.map((items, index) => {
                return (
                  <div key={index}>
                    <div class="col-sm mb-3">
                      <AssignmetCard data={items} />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignmentNewCards
