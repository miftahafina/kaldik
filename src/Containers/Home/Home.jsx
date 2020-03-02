// Lib
import React, { useState, useEffect } from 'react';

// Components
import Fab from '../../Components/Fab/Fab';
import Header from '../../Components/Header/Header';
import Agenda from '../../Components/Agenda/Agenda';
// import Calendar from '../../Components/Calendar/Calendar';

// Data
import CalendarData from '../../Data/CalendarData';

const Home = () => {
  const [calendar] = useState(CalendarData);

  useEffect(() => {
    console.log(
      calendar
        .years.find(x => x.id === '2019')
        .months.find(x => x.id === '201907')
        .agendas
    );
  });

  return (
    <div className="container">
      <Header />

      <div className="content">
        <div className="content-container">
          <Agenda calendar={calendar}/>
          {/* <Calendar calendar={calendar}/> */}
        </div>
      </div>

      <Fab />
    </div>
  );
}

export default Home;
