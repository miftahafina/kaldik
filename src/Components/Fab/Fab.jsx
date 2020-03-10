// Lib
import React, { useState } from 'react';
import { withRouter } from 'react-router';

// Static
import CalendarIcon from '../../img/calendar.png';

const Fab = (props) => {
  const [today] = useState(
    new Date()
  );

  const handleClick = () => {
    
    let yearParam  = today.getYear() + 1900;
    let monthParam = `${yearParam}${('0'+today.getMonth()).slice(-2)}`;

    let url = `/agenda/${yearParam}/${monthParam}`;
    props.history.push(url);

    console.log(props.history);
    
  }

  return (
    <div className="fab" onClick={() => handleClick()}>
      <img src={CalendarIcon} alt='Calendar icon' />
    </div>
  );
}

export default withRouter(Fab);
