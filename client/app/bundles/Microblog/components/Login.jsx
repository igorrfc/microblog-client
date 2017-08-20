import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import UserAuthentication from './UserAuthentication';

import { handleFieldChange } from '../actions/fields';

class Login extends Component {
  createAuthentication() {
    const {
      authentication,
      startAuthentication,
      authenticationSucceed,
      authenticationFailed,
      railsProps: { authenticity },
    } = this.props;

    const { newUser, user } = authentication;

    startAuthentication();

    axios.post('/login', {
      authenticity_token: authenticity,
      new_user: newUser,
      user: {
        email: user.email.value,
        password: user.password.value,
      },
    }).then(({ data: response }) => {
      authenticationSucceed(response.data);
    }).catch(() => authenticationFailed());
  }

  render() {
    const {
      updateAttribute,
      userSignUp,
      authenticateUser,
      authentication
    } = this.props;

    return (
      <UserAuthentication>
        <div className={`marg-top-20`}>
          <div className={`col-xs-10 col-xs-offset-1`}>
            <h4 className={`bold`}>Login:</h4>
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`email`}
              name={`email`}
              type={`text`}
              placeholder={`Email`}
              className={`form-control`}
              onChange={handleFieldChange(updateAttribute)}
            />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`password`}
              name={`password`}
              type={`password`}
              placeholder={`Password`}
              className={`form-control`}
              onChange={handleFieldChange(updateAttribute)}
            />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-10`}>
            <Link to={`/sign_up`} onClick={userSignUp}>Are you new here?</Link>
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
               className={`btn btn-success col-md-8 col-xs-8 col-xs-offset-2`}
               type='submit'
               value='Just do it!'
               onClick={this.createAuthentication.bind(this)}
             />
          </div>
        </div>
      </UserAuthentication>
    );
  }
}

export default Login;
