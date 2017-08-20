import { isEmpty, any } from 'ramda';

const errorPresent = (field) => !isEmpty(field.errors);
const emptyField = (field) => isEmpty(field.value);

export const validatePresence = (value) => ({
  failed: isEmpty(value),
  description: 'Can\'t be blank',
});

export const allFieldsPresent = (fields) => (
  !any(emptyField)(fields)
);

export const isFormValid = (fields) => !any(errorPresent)(fields);
