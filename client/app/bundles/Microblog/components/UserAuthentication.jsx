import React from 'react';

const UserAuthentication = (props) => (
  <div className={`container marg-top-40`}>
    <div className={`row`}>
      <div className={`col-xs-12 col-md-6 col-md-offset-3`}>
        <div className={`login col-xs-8 col-xs-offset-2`}>
          <h3 className={`text-center`}>
            Welcome to the MicroblogApp!
          </h3>
          <div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserAuthentication;
