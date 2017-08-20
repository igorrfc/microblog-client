import { UPDATE_USER_ATTRIBUTE, NEW_USER } from '../constants';

const defaultFieldAttributes = () => ({
  value: '',
  errors: [],
});

const initialState = {
  newUser: false,
  user: {
    name: defaultFieldAttributes(),
    email: defaultFieldAttributes(),
    password: defaultFieldAttributes(),
    nickname: defaultFieldAttributes(),
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_ATTRIBUTE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: {
            ...state[action.field],
            value: action.attributes.value,
            errors: action.attributes.errors,
          },
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
