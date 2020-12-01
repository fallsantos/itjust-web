import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle, faHandPointUp } from '@fortawesome/free-solid-svg-icons'

import App from './App';

import './App.scss'

library.add(faExclamationTriangle, faHandPointUp)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
