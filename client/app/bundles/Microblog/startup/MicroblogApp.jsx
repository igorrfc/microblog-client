import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/helloWorldStore';
import HelloWorldContainer from '../containers/HelloWorldContainer';

import 'bootstrap/dist/css/bootstrap.css';

import '../stylesheets/app.scss'

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const MicroblogApp = (props) => (
  <Provider store={configureStore(props)}>
    <HelloWorldContainer />
  </Provider>
);

export default MicroblogApp;
