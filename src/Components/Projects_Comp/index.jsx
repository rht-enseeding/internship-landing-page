import React, { useState } from 'react'
import PurpleBox from './PurpleBox'
import styles from './projects-com.module.scss'
import Projects_Calendar from './Projects_Calendar'
import StackedbarChart from './StackedbarChart'
import AllProjectsSubheader from './AllProjectsSubheader'
import Status_Header from './Status_Header'
import ProjectCards from './ProjectCards/index'
import AddProjectDrawer from '../AddProject'

const Projects_Comp = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={styles.project_comp}>
        <div className={styles.box1}>
          <div className={styles.box_purple_calender}>
            <div>
              <div className={styles.h1}>Projects Summary</div>
              <div style={{ marginTop: '20px' }}>
                <PurpleBox />
              </div>
            </div>
            <div style={{ marginTop: '0px', marginLeft: '0px' }}>
              <Projects_Calendar />
            </div>
          </div>
          <div className={styles.stackbar_chart}>
            <StackedbarChart />
          </div>
        </div>

        <div style={{ marginTop: '53px' }}>
          <div style={{ marginBottom: '20px' }}>
            <AllProjectsSubheader show={show} setShow={setShow} />
          </div>
          <div className={styles.secondDiv}>
            <div>
              <Status_Header />
            </div>
            <div>
              <ProjectCards />
            </div>
          </div>
        </div>
      </div>

      <div>
        <AddProjectDrawer show={show} setShow={setShow} />
      </div>
    </>
  )
}

export default Projects_Comp
