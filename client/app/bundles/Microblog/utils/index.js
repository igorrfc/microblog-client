export const compareByIdDesc = (leftElement, rightElement) => {
  if (rightElement.id < leftElement.id) {
    return -1;
  }
  if (rightElement.id > leftElement.id) {
    return 1;
  }

  return 0;
};
