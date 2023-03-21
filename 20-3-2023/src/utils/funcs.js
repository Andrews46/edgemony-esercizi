export const filteredList = (list, key, value) => {
  if (value === "") {
    return list;
  } else {
    return list.filter((item) => item[key] === value);
  }
};
