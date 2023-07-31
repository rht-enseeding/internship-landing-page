import React from 'react'
import styles from './go-premium.module.scss'
import GoPremiumImg from '../../../Assets/goPremium.svg'
import { Button } from 'react-bootstrap'

const GoPremium = () => {
  return (
    <div className={styles.mainBox1}>
      <div className={styles.ImgMaindiv}>
        <div className={styles.Img1}>
          <img src={GoPremiumImg} alt="" width="100%" height="auto" />
        </div>
      </div>
      <div className={styles.goPremiumBox}>
        <div className={styles.h1}>Go Premium</div>
        <div className={styles.h2}>
          {' '}
          Make your ordinary extraordinary, with us. Explore 500+ Courses with
          lifetime membership Offer
        </div>
        <div>
          {' '}
          <Button
            variant="none"
            className={styles.Button1}
            style={{ marginLeft: '42px' }}
          >
            Get Access
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GoPremium
