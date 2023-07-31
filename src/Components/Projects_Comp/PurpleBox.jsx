import React from 'react'
import styles from './projects-com.module.scss'
import EditIcon from '../../Assets/icons/edit.svg'

const PurpleBox = () => {
  return (
    <div className={styles.purpleBg}>
      <div className={styles.editBox}>
        <div style={{ width: '24px', height: '24px' }}>
          <img src={EditIcon} alt="" width="100%" height="auto" />
        </div>
      </div>
      <div className={styles.digit}>1</div>
      <div className={styles.subH2}>In Progress Project</div>
    </div>
  )
}

export default PurpleBox
