import { UPDATE_POST_ATTRIBUTE } from '../constants';

const defaultFieldAttributes = () => ({
  value: '',
  errors: [],
});

const initialState = {
  title: defaultFieldAttributes(),
  description: defaultFieldAttributes(),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_POST_ATTRIBUTE:
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.attributes.value,
          errors: action.attributes.errors,
        },
      };
    default:
      return state;
  }
};
