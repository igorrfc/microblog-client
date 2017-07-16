import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import UserAuthentication from './UserAuthentication';

import { handleUserFieldChange } from '../actions/fields';

class SignUp extends Component {
  createAuthentication() {
    const {
      authentication,
      startAuthentication,
      authenticationSucceed,
      railsProps: { authenticity },
    } = this.props;

    const { newUser, user } = authentication;

    startAuthentication();

    axios.post('/login', {
      authenticity_token: authenticity,
      new_user: newUser,
      user,
    }).then(({ data: response }) => {
      authenticationSucceed(response.data);
    });
  }

  render() {
    const { updateAttribute } = this.props;

    return (
      <UserAuthentication>
        <div className={`marg-top-20`}>
          <div className={`col-xs-10 col-xs-offset-1`}>
            <h4 className={`bold`}>Sign up:</h4>
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`name`}
              name={`name`}
              type={`text`}
              placeholder={`Name`}
              className={`form-control`}
              onChange={handleUserFieldChange(updateAttribute)}
            />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`nickname`}
              name={`nickname`}
              type={`text`}
              placeholder={`Nickname`}
              className={`form-control`}
              onChange={handleUserFieldChange(updateAttribute)}
            />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`email`}
              name={`email`}
              type={`text`}
              placeholder={`Email`}
              className={`form-control`}
              onChange={handleUserFieldChange(updateAttribute)}
            />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`email`}
              name={`password`}
              type={`password`}
              placeholder={`Password`}
              className={`form-control`}
              onChange={handleUserFieldChange(updateAttribute)}
            />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
               className={`btn btn-success col-md-8 col-xs-8 col-xs-offset-2`}
               type='submit'
               value='Submit'
               onClick={this.createAuthentication.bind(this)}
             />
          </div>
        </div>
      </UserAuthentication>
    );
  }
}


export default SignUp;
