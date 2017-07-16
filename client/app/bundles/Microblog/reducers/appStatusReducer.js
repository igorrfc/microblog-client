import { AUTHENTICATION_SUCCEED, START_AUTHENTICATION } from '../constants';

const initialState = { loading: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_SUCCEED:
      return { loading: false };
    case START_AUTHENTICATION:
      return { loading: true };
    default:
      return state;
  }
};
