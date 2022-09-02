import React, { useState, useEffect } from "react";
import api from "../api/search";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
    const fetchPhotos = async () => {
      try {
        const response = await api.get(
          `search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=1&per_page=20&query=${searchQuery}`
        );
        console.log(response.data);
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
        />
        <input
          type="button"
          className="fa-solid fa-magnifying-glass"
          onClick={handleSubmit}
        />
      </div>
    </header>
  );
}

export default Header;
