import React, { Fragment } from 'react';
// import { withRouter } from 'react-router';

const Agenda = (props) => {
  const { agenda, multiDate, multiMonth } = props;

  const monthAbbr = (month) => {
    let abbr = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', 'DES'];
    return abbr[month];
  }

  const dayIndo = (day, abbr = false) => {
    let indo = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];
    let indoAbbr = ['Ahd', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

    if (abbr) {
      return indoAbbr[day];
    } else {
      return indo[day];
    }
  }

  const dateType = (multiDate, multiMonth, agenda) => {
    if (multiDate) {
      if (multiMonth) {
        return (
          <Fragment>
            <div className="agenda-day">
              {dayIndo(agenda.begin.getDay())}
            </div>
            <div className="agenda-date-begin">
              {agenda.begin.getDate()} {monthAbbr(agenda.begin.getMonth())}
            </div>

            <div className="agenda-date-divider"></div>
            <div className="agenda-day">
              {dayIndo(agenda.end.getDay())}
            </div>
            <div className="agenda-date-end">
              {agenda.end.getDate()} {monthAbbr(agenda.end.getMonth())}
            </div>
          </Fragment>
        ); 

      } else {
        return (
          <Fragment>
            <div className="agenda-date-begin">
              {dayIndo(agenda.begin.getDay(), true)}, {agenda.begin.getDate()}
            </div>

            <div className="agenda-date-divider-md"></div>
            <div className="agenda-date-end">
              {dayIndo(agenda.end.getDay(), true)}, {agenda.end.getDate()}
            </div>
          </Fragment>
        );
      }

    } else {
      return (
        <Fragment>
          <div className="agenda-date">
            {agenda.begin.getDate()}
          </div>
          <div className="agenda-month">
            {dayIndo(agenda.begin.getDay())}
          </div>
        </Fragment>
      );
    }
  }

  return (
    <div className="agenda">
      <div className="agenda-date-box">
        {dateType(multiDate, multiMonth, agenda)}
      </div>

      <div className="agenda-desc-box">
        <div className="agenda-desc">{agenda.desc}</div>
        <div className="agenda-note">{agenda.note}</div>
      </div>
    </div>
  );
}

export default Agenda;
