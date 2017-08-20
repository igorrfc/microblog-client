import PropTypes from 'prop-types';
import React from 'react';
import { isEmpty } from 'ramda';

const renderErrors = (errors) => (
  <span className={`field-error`}>
    {errors}
  </span>
);

const FieldError = ({ errors }) => (
  !isEmpty(errors) ? renderErrors(errors) : null
);

FieldError.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default FieldError;
