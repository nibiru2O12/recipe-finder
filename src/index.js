import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

import App from './components/App';

let rootElement = document.getElementById('root');

const store=createStore(rootReducer);
store.subscribe(()=>console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
