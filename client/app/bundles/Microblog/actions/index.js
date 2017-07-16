import {
  UPDATE_USER_ATTRIBUTE,
  NEW_USER,
  START_AUTHENTICATION,
  AUTHENTICATION_SUCCEED,
} from '../constants';

export const startAuthentication = () => ({ type: START_AUTHENTICATION });
export const authenticationSucceed = (user) => ({ type: AUTHENTICATION_SUCCEED, user });

export const updateAttribute = (field, value) => ({
  type: UPDATE_USER_ATTRIBUTE,
  field,
  value,
});

export const userSignUp = () => ({ type: NEW_USER });
