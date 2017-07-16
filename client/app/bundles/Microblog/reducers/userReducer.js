import {
  AUTHENTICATION_SUCCEED,
  VISUALIZE_NOTIFICATION,
  REFRESH_USER,
} from '../constants';

const initialState = {
  list: [],
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
