// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

// internal modules
import '../assets/stylesheets/application.scss';
import carsIndex from './containers/cars_index';
import carsNew from './containers/cars_new';
import carsShow from './containers/cars_show';

// reducers
import carsReducer from './reducers/cars_reducer';

const garageName = 'LeGarage'; // prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="page-container">
        <Switch>
          <Route path="/" exact component={carsIndex} />
          <Route path="/cars/new" exact component={carsNew} />
          <Route path="/cars/:id" component={carsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
