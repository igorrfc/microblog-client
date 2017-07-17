import {
  AUTHENTICATION_SUCCEED,
  AUTHENTICATION_FAILED,
  START_AUTHENTICATION
} from '../constants';

const initialState = { loading: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_FAILED:
    case AUTHENTICATION_SUCCEED:
      return { loading: false };
    case START_AUTHENTICATION:
      return { loading: true };
    default:
      return state;
  }
};
