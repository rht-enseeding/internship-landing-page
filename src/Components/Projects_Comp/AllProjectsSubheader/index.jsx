import React from 'react'
import { Sliders } from 'react-bootstrap-icons'
import { Button, PlusCircle } from 'react-bootstrap'
import styles from './allprojects-subheader.module.scss'

const AllProjectsSubheader = ({ show, setShow }) => {
  const handleShow = () => setShow(true)

  return (
    <div className={styles.allprojects_Subheader}>
      <div className={styles.h1}>All Projects</div>
      <div>
        <Button className={styles.btn1}>
          <Sliders /> Filter
        </Button>
        <Button className={styles.btn2} onClick={handleShow}>
          <i class="bi bi-plus-circle" style={{ marginRight: '5px' }}></i>
          Add Project
        </Button>
      </div>
    </div>
  )
}

export default AllProjectsSubheader
