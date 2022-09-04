import React, { useContext } from "react";
import SearchContext from "../SearchContext";
import { Search } from "./Search";

export const Header = () => {
  const { handleSubmit } = useContext(SearchContext);

  return (
    <header>
      <h1>Unsplash-Demo</h1>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Search />
      </form>
    </header>
  );
};
