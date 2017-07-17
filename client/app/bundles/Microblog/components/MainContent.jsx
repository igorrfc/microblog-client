import React, { Component } from 'react';

import UserProfileInfo from './UserProfileInfo';
import SearchUsers from './SearchUsers';

class MainContent extends Component {
  render() {
    return (
      <div className={`container marg-top-40`}>
        <div className={`row`}>
          <div className={`row`}>
            <div className={`col-md-4 col-xs-4`}>
              <UserProfileInfo { ...this.props } />
            </div>
          </div>
          <div className={`row marg-top-20`}>
            <div className={`col-md-4 col-xs-4`}>
              <SearchUsers { ...this.props } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
