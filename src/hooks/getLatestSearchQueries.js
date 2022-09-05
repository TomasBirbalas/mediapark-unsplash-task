export const getLatestSearchQueries = (array, numberOfMaxSuggestions) => {
  let latestSuggestions;
  if (array) {
    latestSuggestions = array.slice(-numberOfMaxSuggestions);
    return latestSuggestions;
  } else {
    return [];
  }
};
