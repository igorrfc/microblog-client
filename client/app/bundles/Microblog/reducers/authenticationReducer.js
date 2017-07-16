import { UPDATE_USER_ATTRIBUTE, NEW_USER } from '../constants';

const initialState = { newUser: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_ATTRIBUTE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.value,
        }
      };
    case NEW_USER:
      return {
        ...state,
        newUser: true,
      };
    default:
      return state;
  }
};
