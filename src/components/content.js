import React, { useContext } from "react";
import SearchContext from "../SearchContext";
import Images from "./Images";
import InfiniteScroll from "react-infinite-scroll-component";

function Content() {
  const { searchResult, handleSubmit } = useContext(SearchContext);

  return (
    <>
      {searchResult.length > 0 && (
        <InfiniteScroll
          dataLength={searchResult.length} //This is important field to render the next data
          next={handleSubmit}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Images images={searchResult} />
        </InfiniteScroll>
      )}
    </>
    // <div>{searchResult.length > 0 && <Images images={searchResult} />}</div>
  );
}

export default Content;
