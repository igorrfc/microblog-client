import React from 'react';

const PresentationProfile = ({ user, leaveProfile }) => {
  return (
    <div>
      <a onClick={leaveProfile}>Leave Profile</a>
      <div className={`presentation-profile`}>
        <div className={`col-md-12 col-xs-12`}>
          <h2 className={`text-center`}>{user.name} <span className={`font-mid-grey`}>(@{user.nickname})</span></h2>
        </div>
        <div className={`col-md-12 col-xs-12`}>
          <div className={`text-center`}>
            <div className={`col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3`}>
              <div className={`col-md-6 col-xs-6`}>
                <div className={`row`}>
                  <div className={`col-md-12 col-xs-12`}>
                    <p className={`bold font-big text-center`}>
                      {user.followees.length}
                    </p>
                  </div>
                </div>
                <div className={`row`}>
                  <div className={`col-md-12 col-xs-12`}>
                    <p className={`font-mid-grey text-center`}>Following</p>
                  </div>
                </div>
              </div>
              <div className={`col-md-6 col-xs-6`}>
                <div className={`row`}>
                  <div className={`col-md-12 col-xs-12`}>
                    <p className={`bold font-big text-center`}>
                      {user.followers.length}
                    </p>
                  </div>
                </div>
                <div className={`row`}>
                  <div className={`col-md-12 col-xs-12`}>
                    <p className={`font-mid-grey text-center`}>Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PresentationProfile;
