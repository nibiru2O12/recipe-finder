import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './Styles/index.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducers from './reducers';

import App from './components/App';
import Favoriteist from './components/FavoriteList';

const store = createStore(rootReducers);
store.subscribe(()=> console.log('start listening to store',store.getState()));

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route patch='/favorites' component={Favoriteist} />
        </Switch>
      </BrowserRouter>
  </Provider>,
  rootElement
);
