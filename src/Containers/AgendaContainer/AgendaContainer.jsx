// Lib
import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router';

// Component
import Agenda from '../../Components/Agenda/Agenda';

const AgendaContainer = (props) => {
  const [params] = useState({
      yearId: props.match.params.yearId,
      monthId: props.match.params.monthId,
  });

  return (
    <Fragment>
      {
        props.calendar
          .years.find(x => x.id === params.yearId)
          .months.find(x => x.id === params.monthId)
          .agendas.map((agenda) => (
            <Agenda agenda={agenda} multiDate={agenda.end} key={agenda.id}/>
          )
        )
      }
    </Fragment>
  );
}

export default withRouter(AgendaContainer);
