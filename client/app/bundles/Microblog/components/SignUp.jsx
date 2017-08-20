import React, { Component } from 'react';
import axios from 'axios';

import { allFieldsPresent, validatePresence, isFormValid } from '../validations';

import UserAuthentication from './UserAuthentication';
import FieldError from './FieldError';

import { handleFieldChange } from '../actions/fields';

class SignUp extends Component {
  handleKeyPress(event) {
    return event.key === 'Enter' && this.createAuthentication()
  }

  validForm() {
    const { user: { name, nickname, email, password } } = this.props.authentication;
    const fields = [name, nickname, email, password];

    return allFieldsPresent(fields) && isFormValid(fields);
  }

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
        nickname: user.nickname.value,
        name: user.name.value,
      },
    }).then(({ data: response }) => {
      authenticationSucceed(response.data);
    }).catch(() => authenticationFailed());
  }

  render() {
    const { updateAttribute, authentication } = this.props;

    const { user: { name, nickname, email, password } } = authentication;

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
              onChange={handleFieldChange(updateAttribute, [validatePresence])}
              onBlur={handleFieldChange(updateAttribute, [validatePresence])}
            />

            <FieldError errors={name.errors} />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`nickname`}
              name={`nickname`}
              type={`text`}
              placeholder={`Nickname`}
              className={`form-control`}
              onChange={handleFieldChange(updateAttribute, [validatePresence])}
              onBlur={handleFieldChange(updateAttribute, [validatePresence])}
            />

            <FieldError errors={nickname.errors} />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`email`}
              name={`email`}
              type={`text`}
              placeholder={`Email`}
              className={`form-control`}
              onChange={handleFieldChange(updateAttribute, [validatePresence])}
              onBlur={handleFieldChange(updateAttribute, [validatePresence])}
            />

            <FieldError errors={email.errors} />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
              id={`email`}
              name={`password`}
              type={`password`}
              placeholder={`Password`}
              className={`form-control`}
              onKeyPress={this.handleKeyPress.bind(this)}
              onChange={handleFieldChange(updateAttribute, [validatePresence])}
              onBlur={handleFieldChange(updateAttribute, [validatePresence])}
            />

            <FieldError errors={password.errors} />
          </div>

          <div className={`col-xs-10 col-xs-offset-1 marg-top-20`}>
            <input
               className={`btn btn-success col-md-8 col-xs-8 col-xs-offset-2`}
               type='submit'
               value='Submit'
               disabled={!this.validForm()}
               onClick={this.createAuthentication.bind(this)}
             />
          </div>
        </div>
      </UserAuthentication>
    );
  }
}


export default SignUp;
