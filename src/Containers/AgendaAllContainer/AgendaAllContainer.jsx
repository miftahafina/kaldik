// Lib
import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router';

// Component
import Header from '../../Components/Header/Header'
import Agenda from '../../Components/Agenda/Agenda';

const AgendaContainer = (props) => {
  
  const [headerData] = useState({
    title: 'Kalender Pendidikan',
    subtitle: 'Pesantren Islam Al-Irsyad'
  })

  const multiMonth = (begin, end) => {
    if (end) {
      return begin.getMonth() !== end.getMonth()
    }
  }

  return (
    <Fragment>
      <Header headerData={headerData}/>
      <div className="content">
        <div className="content-container">
          {
            props.calendar.years.map(year => 
              <Fragment>
                <div className="year">{year.name}</div>

                {
                  props.calendar.years.find(x => x.id === year.id).months.map(month => 
                    <Fragment>
                      <div className="month mb-24">{month.name}</div>

                      {
                        props.calendar.years.find(x => x.id === year.id).months.find(x => x.id === month.id).agendas.map(agenda => 
                          <Agenda agenda={agenda} multiDate={agenda.end} multiMonth={multiMonth(agenda.begin, agenda.end)} key={agenda.id}/>
                        )
                      }
                    </Fragment>
                  )
                }
              </Fragment>
            )
          }
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(AgendaContainer);
