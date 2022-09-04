import React, { useContext } from "react";
import SearchContext from "../SearchContext";
import Suggestions from "./Suggestions";

function Header() {
  const { searchQuery, setSearchQuery, handleSubmit } =
    useContext(SearchContext);

  return (
    <header>
      <h1>Unsplash-Demo</h1>
      <div className="search-bar">
        <form
          className="search"
          onSubmit={(e) => handleSubmit(e.preventDefault())}
        >
          <input
            className="input-search"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button className="btn-search" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <Suggestions />
      </div>
    </header>
  );
}

export default Header;
