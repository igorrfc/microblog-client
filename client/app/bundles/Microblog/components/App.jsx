import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SyncLoader } from 'halogen';

import Login from './Login';
import SignUp from './SignUp';
import MainContent from './MainContent';

export class App extends Component {
  componentDidUpdate(prevProps) {
    const { railsProps: { user: sessionUser } } = prevProps;
    const {
      users: { logged: loggedUser },
      authenticationSucceed
    } = this.props;

    if (sessionUser && !loggedUser) {
      authenticationSucceed(sessionUser);
    };
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
      appStatus,
    } = this.props;

    if (appStatus.loading) { return this.renderLoader(); };

    if (loggedUser || sessionUser) { return this.renderMainContent(); };

    if (pathname === '/') { return this.renderLogin(); }

    this.renderSignUp();
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
