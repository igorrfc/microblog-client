import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import axios from 'axios';

import configureStore from '../store';
import AppContainer from '../containers/AppContainer';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

import 'bootstrap/dist/css/bootstrap.css';

import '../stylesheets/app.scss';

const MicroblogApp = (props) => {
  const { authenticity } = props;
  axios.defaults.headers.common['X-CSRF-Token'] = authenticity;

  const store = configureStore(props)

  const history = syncHistoryWithStore(browserHistory, store)

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={Login} />
          <Route path="/sign_up" component={SignUp}/>
        </Route>
      </Router>
    </Provider>
  )
};

export default MicroblogApp;
