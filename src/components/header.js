import React, { useState, useEffect, useContext } from "react";
import api from "../api/search";
import { SearchContext } from "../SearchContext";
import useLocalStorage from "../hooks/useLocalStorage";

function Header() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const { setSearchResult } = useContext(SearchContext);

  const [queries, setQueries] = useLocalStorage("search-queries", []);

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  const fetchPhotos = async () => {
    setLoading(true);

    let requestUrl;

    if (searchQuery) {
      requestUrl = `search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}&query=${searchQuery}`;
    }

    try {
      const response = await api.get(requestUrl);
      const result = await response.data;
      setSearchResult((previousPhotos) => {
        if (searchQuery && page === 1) {
          return result.results;
        } else if (searchQuery) {
          return [...previousPhotos, ...result.results];
        } else {
          return [...previousPhotos, ...result];
        }
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    setPage(1);
    setQueries((previousQuery) => {
      const isQueryExist = previousQuery.includes(searchQuery);

      if (!isQueryExist) {
        return [...previousQuery, searchQuery];
      }

      return [...previousQuery];
    });
  };

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((previousPage) => {
          return previousPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

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
