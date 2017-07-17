export const handleFieldChange = (callback) => (
  (event) => callback(event.target.name, event.target.value)
);
