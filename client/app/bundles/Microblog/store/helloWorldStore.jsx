import { logger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import helloWorldReducer from '../reducers/helloWorldReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(logger);

const configureStore = (railsProps) => {
  return createStore(helloWorldReducer, railsProps, composeEnhancers(middlewares))
};

export default configureStore;
