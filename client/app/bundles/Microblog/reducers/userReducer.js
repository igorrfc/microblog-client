import {
  AUTHENTICATION_SUCCEED,
  VISUALIZE_NOTIFICATION,
  REFRESH_USER,
  SET_USERS_LIST,
  SET_SEARCHED_USERS_LIST,
  FINISHES_USER_SEARCHING,
  START_USER_SEARCHING,
  FOLLOW_USER,
  CREATE_POST,
} from '../constants';

import { compareByIdDesc } from '../utils';

const insertResourceOnCollection = (collection, resource) => {
  let newCollection = collection.slice();
  newCollection.push(resource);
  newCollection = newCollection.sort(compareByIdDesc);

  return newCollection;
};

const initialState = {
  list: [],
  searchedUsersList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCEED:
      return {
        ...state,
        logged: action.user,
      };
    case REFRESH_USER:
      return {
        ...state,
        logged: action.user,
      };
    case SET_USERS_LIST:
      return {
        ...state,
        list: action.users,
      };
    case SET_SEARCHED_USERS_LIST:
      return {
        ...state,
        searchedUsersList: action.users,
      };
    case START_USER_SEARCHING:
      return {
        ...state,
        searching: true,
      };
    case FOLLOW_USER:
      return {
        ...state,
        logged: {
          ...state.logged,
          followees: insertResourceOnCollection(state.logged.followees, action.user),
        },
      };
    case CREATE_POST:
      return {
        ...state,
        logged: {
          ...state.logged,
          posts: insertResourceOnCollection(state.logged.posts, action.post),
        },
      };
    case FINISHES_USER_SEARCHING:
      return {
        ...state,
        searching: false,
      };
    case VISUALIZE_NOTIFICATION:
      return {
        ...state,
        logged: {
          ...state.logged,
          notifications: state.logged.notifications.reduce((acc, cur) => {
            if (cur.id !== action.notificationId) { acc.push(cur); }
            return acc;
          }, []),
        }
      }
    default:
      return state;
  }
};
