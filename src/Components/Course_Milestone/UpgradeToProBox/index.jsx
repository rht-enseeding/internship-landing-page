import React from 'react'
import styles from './upgrade-to-pro.module.scss'
import { Button } from 'react-bootstrap'

const UpgradeToProBox = () => {
  return (
    <div className={styles.MainBox1}>
      <div className={styles.h1}>Upgrade to Pro</div>
      <div className={styles.h2}>
        For more courses upgrade your plan to silver
      </div>
      <div className={styles.btn1}>
        <Button
          variant="none"
          className={styles.Button1}
          style={{ marginLeft: '42px' }}
        >
          Get Access
        </Button>
      </div>
    </div>
  )
}

export default UpgradeToProBox
