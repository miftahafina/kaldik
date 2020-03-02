// Lib
import React from 'react';
import ReactDOM from 'react-dom';

// Style
import 'normalize.css';
import './index.css';

// Components
import Agenda from './Containers/Agenda/Agenda'

// SW
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Agenda />, document.getElementById('root'));

serviceWorker.unregister();
