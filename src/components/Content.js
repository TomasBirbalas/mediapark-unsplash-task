import React, { useContext } from "react";

import SearchContext from "../SearchContext";
import { Images } from "./Images";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";

export const Content = () => {
  const { searchResult, handleSubmit } = useContext(SearchContext);

  const location = useLocation();

  return (
    <div className="container">
      {searchResult.length > 0 && (
        <InfiniteScroll
          dataLength={searchResult.length}
          next={handleSubmit}
          hasMore={location.pathname !== "/FavoriteImages" ? true : false}
        >
          <Images images={searchResult} />
        </InfiniteScroll>
      )}
    </div>
  );
};
