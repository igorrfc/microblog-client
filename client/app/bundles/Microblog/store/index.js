import { logger } from 'redux-logger';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from '../reducers/authenticationReducer';
import users from '../reducers/userReducer';
import appStatus from '../reducers/appStatusReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(logger);

const configureStore = (railsProps) => {
  const reducers = combineReducers({
    authentication,
    users,
    appStatus,
    routing: routerReducer,
    railsProps: (state = railsProps, action) => state,
  });

  return createStore(reducers, railsProps, composeEnhancers(middlewares))
};

export default configureStore;
