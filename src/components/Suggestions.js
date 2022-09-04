import React, { useContext } from "react";
import SearchContext from "../SearchContext";

function Suggestions({ inputStatus }) {
  const { setSearchQuery } = useContext(SearchContext);

  const getLatestSearchQueries = (key, numberOfMaxSuggestions) => {
    const queriesArray = localStorage.getItem(key);
    let latestSuggestions;
    if (queriesArray) {
      latestSuggestions = JSON.parse(queriesArray);
      latestSuggestions = latestSuggestions.slice(-numberOfMaxSuggestions);
    }
    return latestSuggestions;
  };
  const suggestionsArray = getLatestSearchQueries("search-queries", 5);

  const suggestions = suggestionsArray.map((suggestion, index) => {
    return (
      <li
        className="suggestion"
        onClick={(e) => setSearchQuery(suggestion)}
        key={index}
      >
        {suggestion}
      </li>
    );
  });

  return (
    <ul
      className={`suggestions-block ${inputStatus ? "show-suggestions" : ""}`}
    >
      {suggestions}
    </ul>
  );
}

export default Suggestions;
