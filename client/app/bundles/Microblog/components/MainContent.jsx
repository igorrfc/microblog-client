import React, { Component } from 'react';

import UserProfileInfo from './UserProfileInfo';
import SearchUsers from './SearchUsers';
import PostsHeader from './PostsHeader';
import PostsList from './PostsList';

class MainContent extends Component {
  render() {
    return (
      <div className={`container marg-top-40`}>
        <div className={`row`}>
          <div className={`row`}>
            <div className={`col-md-4 col-xs-4`}>
              <UserProfileInfo { ...this.props } />
            </div>
            <div className={`col-md-8 col-xs-8`}>
              <PostsHeader { ...this.props } />
            </div>
          </div>
          <div className={`row marg-top-20`}>
            <div className={`col-md-4 col-xs-4`}>
              <SearchUsers { ...this.props } />
            </div>
            <div className={`col-md-8 col-xs-8`}>
              <PostsList { ...this.props } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
