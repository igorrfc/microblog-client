import { AUTHENTICATION_SUCCEED } from '../constants';

const initialState = {
  logged: null,
  list: [''],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCEED:
      return {
        ...state,
        logged: action.user,
      };
    default:
      return state;
  }
};
