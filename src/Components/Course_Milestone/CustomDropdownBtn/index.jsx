import React from 'react'
import styles from './custom-dropdown-btn.module.scss'
import Dropdown from 'react-bootstrap/Dropdown'
import { Calendar } from 'react-bootstrap-icons'

const CustomDropdownBtn = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="none"
          className={styles.buttonMainDiv}
          id="dropdown-basic"
        >
          <Calendar color="#42424280" />
          <div className={styles.divider}></div>
          <div style={{ marginRight: '5px' }}>3rd Semester</div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default CustomDropdownBtn
