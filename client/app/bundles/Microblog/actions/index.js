import {
  UPDATE_USER_ATTRIBUTE,
  NEW_USER,
  START_AUTHENTICATION,
  AUTHENTICATION_SUCCEED,
  VISUALIZE_NOTIFICATION,
  REFRESH_USER,
} from '../constants';

export const startAuthentication = () => ({ type: START_AUTHENTICATION });
export const authenticationSucceed = (user) => ({ type: AUTHENTICATION_SUCCEED, user });

export const updateAttribute = (field, value) => ({
  type: UPDATE_USER_ATTRIBUTE,
  field,
  value,
});

export const visualizeNotification = (notificationId) => ({
  type: VISUALIZE_NOTIFICATION,
  notificationId,
});

export const refreshUser = (user) => ({ type: REFRESH_USER, user });

export const userSignUp = () => ({ type: NEW_USER });
