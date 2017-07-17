import { VISUALIZE_PROFILE, LEAVE_PROFILE } from '../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case VISUALIZE_PROFILE:
      return {
        ...state,
        user: action.user,
      };
    case LEAVE_PROFILE:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
