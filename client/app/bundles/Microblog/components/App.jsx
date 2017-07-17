import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SyncLoader } from 'halogen';
import axios from 'axios';

import Login from './Login';
import SignUp from './SignUp';
import MainContent from './MainContent';

export class App extends Component {
  checkForSessionUser(props) {
    const { railsProps: { user: sessionUser } } = props;
    const {
      users: { logged: loggedUser },
      authenticationSucceed,
      refreshUser,
    } = this.props;

    if (sessionUser && !loggedUser) {
      axios.get('/users/' + sessionUser.id).then(({ data: response }) => (
        refreshUser(response.data)
      ));
    };
  }

  componentWillMount() {
    this.checkForSessionUser(this.props);
  }

  componentDidUpdate(prevProps) {
    this.checkForSessionUser(prevProps);
  }

  renderLogin() {
    return (
      <Login {...this.props} />
    );
  }

  renderSignUp() {
    return (
      <SignUp {...this.props} />
    );
  }

  renderMainContent() {
    return (
      <MainContent {...this.props} />
    );
  }

  renderLoader() {
    return (
      <SyncLoader color={`#C2E284`} className={`centered`} />
    );
  }

  renderContent() {
    const {
      routing: { locationBeforeTransitions: { pathname } },
      railsProps: { user: sessionUser },
      users: { logged: loggedUser },
      authenticationSucceed,
      appStatus,
    } = this.props;

    if (appStatus.loading) { return this.renderLoader(); };

    if (loggedUser || sessionUser) {
      return this.renderMainContent();
    };

    if (pathname === '/') { return this.renderLogin(); }

    return this.renderSignUp();
  }

  render() {
    const { routing: { locationBeforeTransitions: { pathname } } } = this.props;

    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
};

export default App;
