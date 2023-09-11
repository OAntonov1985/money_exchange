import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// import Store from './components/App/Store';
// import { Provider } from 'react-redux'
// import * as serviceWorker from './serviceWorker';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider Store={Store}> */}
    <App />
    {/* </Provider> */}

  </React.StrictMode>
);


