import React, { useContext } from "react";
import SearchContext from "../SearchContext";
import Search from "./Search";

function Header() {
  const { handleSubmit } = useContext(SearchContext);

  return (
    <header>
      <h1>Unsplash-Demo</h1>
      <form
        className="search-form"
        onSubmit={(e) => handleSubmit(e.preventDefault())}
      >
        <Search />
      </form>
    </header>
  );
}

export default Header;
