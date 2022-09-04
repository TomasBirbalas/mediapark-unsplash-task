import React, { useContext } from "react";
import SearchContext from "../SearchContext";

const GetLatestSearchQueries = (key, numberOfMaxSuggestions) => {
  const queriesArray = localStorage.getItem(key);
  let latestSuggestions;
  if (queriesArray) {
    latestSuggestions = JSON.parse(queriesArray);
    latestSuggestions = latestSuggestions.slice(-numberOfMaxSuggestions);
  }
  return latestSuggestions;
};

function Suggestions() {
  const { setSearchQuery } = useContext(SearchContext);

  const suggestionsArray = GetLatestSearchQueries("search-queries", 5);

  const suggestions = suggestionsArray.map((suggestion, index) => {
    return (
      <input
        type="button"
        className="suggestion"
        onClick={(e) => setSearchQuery(e.target.value)}
        value={suggestion}
        key={index}
      />
    );
  });

  return <div className="suggestions-block">{suggestions}</div>;
}

export default Suggestions;
