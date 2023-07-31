import React from 'react'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Button, PlusCircle } from 'react-bootstrap'
import styles from './addProject.module.scss'
import AddProjectTextFields from './AddProjectTextFields'

function AddProject({ show, setShow, name, ...props }) {
  const handleClose = () => setShow(false)

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        style={{ paddingTop: '10px' }}
        className={styles.drawerDiv}
      >
        <Offcanvas.Header className={styles.addprojectHeader1}>
          <Offcanvas.Title className={styles.addprojectHeader2}>
            <div>
              <div className={styles.addprojectH1}>Add Project</div>
            </div>
            <Button
              variant="link"
              closeButton
              onClick={handleClose}
              style={{ textDecoration: 'none' }}
            >
              <i
                class="bi bi-x-circle-fill"
                style={{
                  marginRight: '5px',
                  color: '#6641AA',
                  fontSize: '36px',
                }}
              ></i>
            </Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <AddProjectTextFields setShow={setShow} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default function AddProjectDrawer({ show, setShow }) {
  return (
    <>
      {['end'].map((placement, idx) => (
        <AddProject
          key={idx}
          placement={placement}
          name={placement}
          show={show}
          setShow={setShow}
        />
      ))}
    </>
  )
}
