import { UPDATE_POST_ATTRIBUTE } from '../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_POST_ATTRIBUTE:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};
