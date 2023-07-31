import React, { forwardRef, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import './dateRange.css'

const DateRangeCalender = ({ startDate, setStartDate }) => {
  //   const [startDate, setStartDate] = useState(new Date())

  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="example-custom-input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
    />
  ))

  return (
    <div>
      <DatePicker
        // selected={startDate}
        selected={startDate}
        onChange={(date) =>
          setStartDate(
            // date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
            date,
          )
        }
        dateFormat="d MMMM yyyy"
        customInput={<ExampleCustomInput />}
        // dayClassName={() => 'example-datepicker-day-class'}
        // popperClassName="example-datepicker-class"
        // todayButton="TODAY"
      />
    </div>
  )
}

export default DateRangeCalender
