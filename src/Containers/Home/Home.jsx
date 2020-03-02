// Lib
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Fab from '../../Components/Fab/Fab';
import Header from '../../Components/Header/Header';
import Calendar from '../../Components/Calendar/Calendar';
import Agenda from '../../Components/Agenda/Agenda';

// Data
import CalendarData from '../../Data/CalendarData';

const Home = () => {
  const [calendar] = useState(CalendarData);

  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <div className="content-container">

            <Switch>
              <Route path="/agenda/:yearId/:monthId">
                <Agenda calendar={calendar}/>
              </Route>
              
              <Route path="/">
                <Calendar calendar={calendar}/>
              </Route>
            </Switch>

          </div>
        </div>
        <Fab />
      </div>
    </Router>
  );
}

export default Home;
