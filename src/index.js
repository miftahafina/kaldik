// Lib
import React from 'react';
import ReactDOM from 'react-dom';

// Style
import 'normalize.css';
import './index.css';

// Components
import App from './Containers/App/App';

// SW
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
