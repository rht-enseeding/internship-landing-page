import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendar.scss'

const Projects_Calendar = () => {
  const [value, onChange] = useState(new Date())
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Projects_Calendar
