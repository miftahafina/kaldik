// Lib
import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router';

// Component
import Fab from '../../Components/Fab/Fab';
import Header from '../../Components/Header/Header'

const CalendarContainer = (props) => {

  const handleClick = (yearId, monthId) => {
    let url = `agenda/${yearId}/${monthId}`;
    props.history.push(url);
  }

  const [headerData] = useState({
    title: 'Kalender Pendidikan',
    subtitle: 'Pesantren Islam Al-Irsyad'
  })

  return (
    <Fragment>
      <Header headerData={headerData}/>
      <div className="content">
        <div className="content-container">
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
        </div>
      </div>
      <Fab/>
    </Fragment>
  )
}

export default withRouter(CalendarContainer);
