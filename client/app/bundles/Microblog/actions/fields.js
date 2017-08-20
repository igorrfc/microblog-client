export const handleFieldChange = (callback, validations = undefined) => (
  (event) => {
    let errors = [];

    if (validations) {
      validations.forEach((validation) => {
        const processedValidation = validation(event.target.value);

        processedValidation.failed && errors.push(processedValidation.description)
      })
    }

    callback(event.target.name, {
      value: event.target.value,
      errors: errors,
    });
  }
);
