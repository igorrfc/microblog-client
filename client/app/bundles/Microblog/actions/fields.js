export const handleUserFieldChange = (callback) => (
  (event) => callback(event.target.name, event.target.value)
);
