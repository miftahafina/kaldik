import React, { Fragment } from 'react';
// import { withRouter } from 'react-router';

const Agenda = (props) => {
  const { agenda, multiDate } = props;

  const monthAbbr = (month) => {
    let abbr = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', 'DES'];
    return abbr[month];
  }

  const dayIndo = (day) => {
    let indo = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];

    return indo[day];
  }

  const dateType = (multiDate, agenda) => {
    if (multiDate) {
      return (
        <Fragment>
          <div className="agenda-date-begin">
            {agenda.begin.getDate()} {monthAbbr(agenda.begin.getMonth())}
          </div>
          <div className="agenda-date-divider"></div>
          <div className="agenda-date-end">
            {agenda.end.getDate()} {monthAbbr(agenda.end.getMonth())}
          </div>
        </Fragment>
      );

    } else {
      return (
        <Fragment>
          <div className="agenda-day">
            {dayIndo(agenda.begin.getDay())}
          </div>
          <div className="agenda-date">
            {agenda.begin.getDate()}
          </div>
          <div className="agenda-month">
            {monthAbbr(agenda.begin.getMonth())}
          </div>
        </Fragment>
      );
    }
  }

  return (
    <div className="agenda">
      <div className="agenda-date-box">
        {dateType(multiDate, agenda)}
      </div>

      <div className="agenda-desc-box">
        <div className="agenda-desc">{agenda.desc}</div>
        <div className="agenda-note">{agenda.note}</div>
      </div>
    </div>
  );
}

export default Agenda;
