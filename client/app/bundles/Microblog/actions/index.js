import {
  UPDATE_USER_ATTRIBUTE,
  NEW_USER,
  START_AUTHENTICATION,
  AUTHENTICATION_SUCCEED,
  VISUALIZE_NOTIFICATION,
  REFRESH_USER,
  SET_USERS_LIST,
  SET_SEARCHED_USERS_LIST,
  FINISHES_USER_SEARCHING,
  START_USER_SEARCHING,
  FOLLOW_USER,
  UPDATE_POST_ATTRIBUTE,
  CREATE_POST,
} from '../constants';

export const startAuthentication = () => ({ type: START_AUTHENTICATION });
export const authenticationSucceed = (user) => ({ type: AUTHENTICATION_SUCCEED, user });

export const updateAttribute = (field, value) => ({
  type: UPDATE_USER_ATTRIBUTE,
  field,
  value,
});

export const updatePostAttribute = (field, value) => ({
  type: UPDATE_POST_ATTRIBUTE,
  field,
  value
});

export const visualizeNotification = (notificationId) => ({
  type: VISUALIZE_NOTIFICATION,
  notificationId,
});

export const refreshUser = (user) => ({ type: REFRESH_USER, user });

export const userSignUp = () => ({ type: NEW_USER });

export const setUsersList = (users) => ({ type: SET_USERS_LIST, users });
export const setSearchedUsersList = (users) => ({ type: SET_SEARCHED_USERS_LIST, users });


export const startUserSearching = () => ({ type: START_USER_SEARCHING });
export const finishesUserSearching = () => ({ type: FINISHES_USER_SEARCHING });

export const followUser = (user) => ({ type: FOLLOW_USER, user });

export const createPost = (post) => ({ type: CREATE_POST, post });
