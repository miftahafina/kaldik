// Lib
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import CalendarContainer from '../CalendarContainer/CalendarContainer';
import AgendaContainer from '../AgendaContainer/AgendaContainer';
import AgendaAllContainer from '../AgendaAllContainer/AgendaAllContainer';

// Data
import CalendarData from '../../Data/CalendarData';


const App = () => {
  
  const [calendar] = useState(CalendarData);

  return (
    <Router>
      <div className="container">

        <Switch>
          <Route path="/agenda/all">
            <AgendaAllContainer calendar={calendar}/>
          </Route>
          <Route path="/agenda/:yearId/:monthId">
            <AgendaContainer calendar={calendar}/>
          </Route>
          <Route path="/">
            <CalendarContainer calendar={calendar}/>
          </Route>
        </Switch>
        
      </div>  {/* ./container */}
    </Router>
  );
}

export default App;
