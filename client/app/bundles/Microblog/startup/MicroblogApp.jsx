import React from 'react';
import { Provider } from 'react-redux';

import axios from 'axios';

import configureStore from '../store/helloWorldStore';
import HelloWorldContainer from '../containers/HelloWorldContainer';

import 'bootstrap/dist/css/bootstrap.css';

import '../stylesheets/app.scss'

const MicroblogApp = (props) => {
  const { authenticity } = props;
  axios.defaults.headers.common['X-CSRF-Token'] = authenticity;

  return (
    <Provider store={configureStore(props)}>
      <HelloWorldContainer />
    </Provider>
  )
};

export default MicroblogApp;
