import React, { useState, useContext } from "react";
import api from "../api/search";
import { SearchContext } from "../SearchContext";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const { setSearchResult } = useContext(SearchContext);

  const handleSubmit = () => {
    const fetchPhotos = async () => {
      try {
        const response = await api.get(
          `search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=1&per_page=20&query=${searchQuery}`
        );
        const result = await response.data;
        console.log(result);
        setSearchResult(result.results);
      } catch (err) {}
    };
    fetchPhotos();
  };

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
