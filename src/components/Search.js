import React, { useContext, useState } from "react";
import SearchContext from "../SearchContext";
import { Suggestions } from "./Suggestions";

export const Search = () => {
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
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
              setInputStatus(false);
            }
          }}
        />
        <Suggestions
          inputStatus={inputStatus}
          setInputStatus={setInputStatus}
        />
      </div>
      <button className="btn-search" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </>
  );
};
