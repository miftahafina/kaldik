import React, { Fragment } from 'react';

const Calendar = (props) => {
  return (
    <Fragment>
    {
      props.calendar.years.map(year => {
        return (
          <Fragment key={year.id}>
            <div className="year">{year.name}</div>
            {
              year.months.map(month => {
                return (
                  <div className="month" key={month.id}>
                    {month.name}
                  </div>
                )
              })
            }
          </Fragment>
        )
      })
    }
    </Fragment>
  )
}

export default Calendar;
