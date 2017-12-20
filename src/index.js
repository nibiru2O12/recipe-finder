import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducers from './reducers';

import App from './components/App';

const store = createStore(rootReducers);
store.subscribe(()=> console.log('start listening to store',store.getState()));

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
);
