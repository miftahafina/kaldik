// Lib
import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router';

// Component
import Header from '../../Components/Header/Header'
import Agenda from '../../Components/Agenda/Agenda';

const AgendaContainer = (props) => {
  
  const [params] = useState({
      yearId: props.match.params.yearId,
      monthId: props.match.params.monthId,
  });

  const [headerData] = useState({
    title:props.calendar
            .years.find(x => x.id === params.yearId)
            .months.find(x => x.id === params.monthId)
            .name,
    subtitle:props.calendar
            .years.find(x => x.id === params.yearId)
            .name,
  });

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
            props.calendar
              .years.find(x => x.id === params.yearId)
              .months.find(x => x.id === params.monthId)
              .agendas.map((agenda) => (
                <Agenda agenda={agenda} multiDate={agenda.end} multiMonth={multiMonth(agenda.begin, agenda.end)} key={agenda.id}/>
              )
            )
          }
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(AgendaContainer);
