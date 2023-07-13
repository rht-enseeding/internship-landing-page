import React from 'react'
import { banner } from '../assets'

const CompanyPic = () => {
  return (
      <div className='container-fluid'>
          <img src={banner} alt="" className='img-fluid' style={{width:"100%"}}/>
    </div>
  )
}

export default CompanyPic;