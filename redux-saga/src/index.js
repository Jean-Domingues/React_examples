import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Fornece o state da loja para todo o app */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

