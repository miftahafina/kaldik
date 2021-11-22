// Lib
import React from 'react';
import { withRouter } from 'react-router';

// Static
import CalendarIcon from '../../img/calendar.png';
import AgendaIcon from '../../img/agenda.png';

const Fab = (props) => {
  const handleClick = (location) => {
    props.history.push(location)
  }

  return (
    <div className="fab" onClick={() => handleClick(props.destination === 'agenda' ? '/agenda/all' : '/calendar')}>
      <img src={props.destination === 'agenda' ? AgendaIcon : CalendarIcon} alt='icon' />
    </div>
  );
}

export default withRouter(Fab);
