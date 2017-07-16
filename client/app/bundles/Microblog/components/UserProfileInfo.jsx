import React, { Component } from 'react';
import axios from 'axios';

import Notifications from './Notifications';

class UserProfileInfo extends Component {
  render() {
    const {
      users: { logged },
      railsProps,
      visualizeNotification
    } = this.props;

    return (
      <div className={`block-component user-profile-info col-md-12 col-xs-12`}>
        <div className={`row`}>
          <div className={`col-md-12 col-xs-12`}>
            <div className={`col-md-4 col-xs-4`}>
              <span className="picture glyphicon glyphicon-user"></span>
            </div>
            <div className={`col-md-6 col-xs-6`}>
              <p className={`bold`}>{logged && logged.name}</p>
              <p className={`font-mid-grey`}>{logged && '@' + logged.nickname}</p>
            </div>
          </div>
        </div>
        <div className={`row marg-top-20`}>
          <div className={`col-md-12 col-xs-12`}>
            <div className={`col-md-6 col-xs-6`}>
              <div className={`row`}>
                <div className={`col-md-12 col-xs-12`}>
                  <p className={`bold font-big text-center`}>
                    { logged && logged.followees.length }
                  </p>
                </div>
              </div>
              <div className={`row`}>
                <div className={`col-md-12 col-xs-12`}>
                  <p className={`font-mid-grey`}>Following</p>
                </div>
              </div>
            </div>
            <div className={`col-md-6 col-xs-6`}>
              <div className={`row`}>
                <div className={`col-md-12 col-xs-12`}>
                  <p className={`bold font-big text-center`}>
                    { logged && logged.followers.length }
                  </p>
                </div>
              </div>
              <div className={`row`}>
                <div className={`col-md-12 col-xs-12`}>
                  <p className={`font-mid-grey`}>Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`row marg-top-20`}>
          <div className={`col-md-12 col-xs-12`}>
            <div className={`text-center col-md-6 col-xs-6`}>
              <Notifications
                user={logged}
                railsProps={railsProps}
                visualizeNotification={visualizeNotification}
              />
            </div>
            <div className={`text-center col-md-6 col-xs-6`}>
              Logout
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfileInfo;
