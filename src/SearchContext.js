import React, { useState, useEffect, createContext, useCallback } from "react";
import api from "./api/search";
import Header from "./components/Header";
import useLocalStorage from "./hooks/useLocalStorage";

const SearchContext = createContext({});

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [queries, setQueries] = useLocalStorage("search-queries", []);

  const fetchPhotos = useCallback(
    async (page, searchQuery) => {
      setLoading(true);
      try {
        const requestUrl = `search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}&query=${searchQuery}`;
        const response = await api.get(requestUrl, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        const result = await response.data;
        setSearchResult((previousPhotos) => {
          if (page === 1) {
            return result.results;
          } else {
            return [...previousPhotos, ...result.results];
          }
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    },
    [setSearchResult]
  );

  const handleSubmit = () => {
    const newPage = page + 1;
    setPage(newPage);
    console.log(newPage);
    fetchPhotos(newPage, searchQuery);
    setQueries((previousQuery) => {
      const isQueryExist = previousQuery.includes(searchQuery);

      if (!isQueryExist) {
        return [...previousQuery, searchQuery];
      } else {
        return [...previousQuery];
      }
    });
  };

  useEffect(() => {
    setPage(0);
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{
        setSearchQuery,
        handleSubmit,
        searchResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
