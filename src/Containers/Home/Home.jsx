// Lib
import React from 'react';

// Components
import Fab from '../../Components/Fab/Fab';
import Header from '../../Components/Header/Header';
import Agenda from '../../Components/Agenda/Agenda';
import Calendar from '../../Components/Calendar/Calendar';

const Home = () => {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <div className="content-container">
          {/* Content Here */}
          <Agenda />
          <Calendar />
        </div>
      </div>

      <Fab />
    </div>
  );
}

export default Home;
