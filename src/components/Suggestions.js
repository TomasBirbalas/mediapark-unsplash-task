import React, { useContext } from "react";
import SearchContext from "../SearchContext";
import { getLatestSearchQueries } from "../hooks/getLatestSearchQueries";

export const Suggestions = ({ inputStatus, setInputStatus }) => {
  const { setSearchQuery, queries } = useContext(SearchContext);

  const suggestionsArray = getLatestSearchQueries(queries, 5);

  const suggestions = suggestionsArray.map((suggestion, index) => (
    <li
      className="suggestion"
      onClick={(e) => {
        setSearchQuery(suggestion);
        setInputStatus(false);
      }}
      key={index}
    >
      {suggestion}
    </li>
  ));

  return (
    <ul className={`suggestions-block ${inputStatus && "show-suggestions"}`}>
      {suggestions}
    </ul>
  );
};
