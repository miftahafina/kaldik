// Lib
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Fab from '../../Components/Fab/Fab';
import CalendarContainer from '../CalendarContainer/CalendarContainer';
import AgendaContainer from '../AgendaContainer/AgendaContainer';

// Data
import CalendarData from '../../Data/CalendarData';


const App = () => {
  const [calendar] = useState(CalendarData);

  return (
    <Router>
      <div className="container">

        <Switch>
          <Route path="/agenda/:yearId/:monthId">
            <AgendaContainer calendar={calendar}/>
          </Route>
          <Route path="/">
            <CalendarContainer calendar={calendar}/>
          </Route>
        </Switch>

        <Fab/>
      </div>  {/* ./container */}
    </Router>
  );
}

export default App;
