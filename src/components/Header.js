import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../SearchContext";
import { Search } from "./Search";

export const Header = () => {
  const { handleSubmit } = useContext(SearchContext);

  return (
    <header>
      <Link to="/">
        <h1>Unsplash-Demo</h1>
      </Link>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Search />
      </form>
      <Link to="/FavoriteImages">
        <i className={`fa-solid fa-heart`}></i> My Favorites
      </Link>
    </header>
  );
};
