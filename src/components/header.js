import React, { useContext } from "react";
import SearchContext from "../SearchContext";
import Suggestions from "./Suggestions";

function Header() {
  const { searchQuery, setSearchQuery, handleSubmit } =
    useContext(SearchContext);

  return (
    <header>
      <h1>Unsplash-Demo</h1>
      <div>
        <input
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
        <Suggestions />
        <input type="button" onClick={handleSubmit} />
      </div>
    </header>
  );
}

export default Header;
