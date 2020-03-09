// Lib
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Fab from '../../Components/Fab/Fab';
import Header from '../../Components/Header/Header';
import Calendar from '../../Components/Calendar/Calendar';
import AgendaContainer from '../AgendaContainer/AgendaContainer';

// Data
import CalendarData from '../../Data/CalendarData';

// Context
import HeaderContext from '../../Context/HeaderContext'

const App = () => {
  const [calendar] = useState(CalendarData);
  const headerData = useContext(HeaderContext);

  return (
    // <HeaderProvider value={headerData}>
    <Router>
      <div className="container">
        <Header headerData={headerData}/>
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

export default App;
