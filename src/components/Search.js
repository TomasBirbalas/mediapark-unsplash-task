import React, { useContext, useState } from "react";
import SearchContext from "../SearchContext";
import Suggestions from "./Suggestions";

function Search() {
  const { searchQuery, setSearchQuery, handleSubmit } =
    useContext(SearchContext);
  const [inputStatus, setInputStatus] = useState(false);

  return (
    <>
      <div className="search">
        <input
          className="input-search"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={(e) => setInputStatus(true)}
          onBlur={(e) => setInputStatus(false)}
          onKeyPress={(event) => (event.key === "Enter" ? handleSubmit() : "")}
        />
        <Suggestions inputStatus={inputStatus} />
      </div>
      <button className="btn-search" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </>
  );
}

export default Search;
