// Lib
import React from 'react';
import ReactDOM from 'react-dom';

// Style
import 'normalize.css';
import './index.css';

// Components
import Home from './Containers/Home/Home';

// SW
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
