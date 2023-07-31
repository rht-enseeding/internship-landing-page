import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Image1 from '../../Assets/Ellipse 33.svg'

const Circular_Progressbar = () => {
  const percentage = 66

  return (
    <div style={{ width: '50px', height: '50px', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          left: '22%',
          top: '25%',
          zIndex: 1,
          color: '#000000',
        }}
      >
        <div style={{ width: '45px', height: '45px' }}>
          <img src={Image1} alt="" width="100%" height="auto" />
        </div>
      </div>

      <div style={{ width: 70, height: 70, top: '10%' }}>
        <CircularProgressbar value={percentage}></CircularProgressbar>
      </div>
    </div>
  )
}

export default Circular_Progressbar
