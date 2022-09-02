import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import Images from "./images";

function Content() {
  const { searchResult } = useContext(SearchContext);

  return (
    <div>{searchResult.length > 0 && <Images images={searchResult} />}</div>
  );
}

export default Content;
