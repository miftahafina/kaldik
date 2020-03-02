import React, { Fragment } from 'react';

const Agenda = (props) => {
  const monthAbbr = (month) => {
    let abbr = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', 'DES'];

    return abbr[month];
  }

  return (
    <Fragment>
      {
      props.calendar
        .years.find(x => x.id === '2020')
        .months.find(x => x.id === '202006')
        .agendas.map((agenda) => {
          if (agenda.end) {
            return (
              <div className="agenda" key={agenda.id}>
                <div className="agenda-date-box">
                  <div className="agenda-date-begin">
                    {agenda.begin.getDate()} {monthAbbr(agenda.begin.getMonth())}
                  </div>
                  <div className="agenda-date-divider"></div>
                  <div className="agenda-date-end">
                    {agenda.end.getDate()} {monthAbbr(agenda.end.getMonth())}
                  </div>

                </div>
                <div className="agenda-desc-box">
                  <div className="agenda-desc">{agenda.desc}</div>
                  <div className="agenda-note">{agenda.note}</div>
                </div>
              </div>
            )

          } else {
            return (
              <div className="agenda" key={agenda.id}>
                <div className="agenda-date-box">
                  <div className="agenda-date">
                    {agenda.begin.getDate()}
                  </div>
                  <div className="agenda-month">
                    {monthAbbr(agenda.begin.getMonth())}
                  </div>
                </div>
                <div className="agenda-desc-box">
                  <div className="agenda-desc">{agenda.desc}</div>
                  <div className="agenda-note">{agenda.note}</div>
                </div>
              </div>
            )
          }
        })
      }
    </Fragment>
  );
}

export default Agenda;
