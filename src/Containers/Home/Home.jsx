// Lib
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Fab from '../../Components/Fab/Fab';
import Header from '../../Components/Header/Header';
import Calendar from '../../Components/Calendar/Calendar';
import AgendaContainer from '../../Containers/AgendaContainer/AgendaContainer';

// Data
import CalendarData from '../../Data/CalendarData';
// import { HeaderProvider } from '../../Context/HeaderContext';

// Context

const Home = () => {
  const [calendar] = useState(CalendarData);

  // const headerData = {

  // }

  return (
    // <HeaderProvider value={headerData}>
    <Router>
      <div className="container">
        <Header/>
        <div className="content">
          <div className="content-container">

            <Switch>
              <Route path="/agenda/:yearId/:monthId">
                <AgendaContainer calendar={calendar}/>
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
    // </HeaderProvider>
  );
}

export default Home;
