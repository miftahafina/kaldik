import React, { Fragment } from 'react';
import { withRouter } from 'react-router';

const Calendar = (props) => {

  const handleClick = (yearId, monthId) => {
    let url = `agenda/${yearId}/${monthId}`;
    props.history.push(url);
  }

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
                  <div className="month" key={month.id} onClick={() => {handleClick(year.id, month.id)}}>
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

export default withRouter(Calendar);
