import React, { useContext } from "react";
import SearchContext from "../SearchContext";

function Header() {
  const { setSearchQuery, handleSubmit } = useContext(SearchContext);

  return (
    <header>
      <h1>Unsplash-Demo</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <input type="button" onClick={handleSubmit} />
      </div>
    </header>
  );
}

export default Header;
