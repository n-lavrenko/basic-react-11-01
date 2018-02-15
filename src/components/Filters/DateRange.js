import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import { filterDate } from "../../AC";
import { connect } from "react-redux";


class DateRange extends Component {
  
  render() {
    const { from, to } = this.props.selectedDates
    const { filterDate } = this.props
    
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={ day => DateUtils.isDayInRange(day, {
            from,
            to
          }) }
          onDayClick={ (day) => filterDate(DateUtils.addDayToRange(day, { from, to })) }
        />
        { selectedRange }
      </div>
    )
  }
  
}

export default connect(({ filter }) => ({ selectedDates: filter.selectedDates }), { filterDate })(DateRange)