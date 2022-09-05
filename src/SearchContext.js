import React, { useState, useEffect, createContext, useCallback } from "react";
import api from "./api/search";
import useLocalStorage from "./hooks/useLocalStorage";

const SearchContext = createContext({});

export const DataProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [queries, setQueries] = useLocalStorage("search-queries", []);
  const [favoriteImages, setFavoriteImages] = useLocalStorage(
    "favorite-images",
    []
  );
  const fetchNewestPhotos = useCallback(
    async (page) => {
      try {
        const requestUrl = `/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}&per_page=14`;
        const response = await api.get(requestUrl, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        const result = await response.data;
        setSearchResult((previousPhotos) => {
          if (page === 1) {
            return result;
          } else {
            return [...previousPhotos, ...result];
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
    [setSearchResult]
  );

  const fetchPhotos = useCallback(
    async (page, searchQuery) => {
      try {
        const requestUrl = `search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}&per_page=14&query=${searchQuery}`;
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
      } catch (err) {
        console.log(err);
      }
    },
    [setSearchResult]
  );

  const handleSubmit = () => {
    const newPage = page + 1;
    setPage(newPage);
    if (searchQuery.length > 0) {
      fetchPhotos(newPage, searchQuery);
    } else {
      fetchNewestPhotos(newPage);
    }
    setQueries((previousQuery) => {
      if (searchQuery.length > 0) {
        const newArray = previousQuery.filter(
          (e) => e.toLowerCase() !== searchQuery.toLocaleLowerCase()
        );
        return [...newArray, searchQuery];
      } else {
        return [...previousQuery];
      }
    });
  };

  useEffect(() => {
    setPage(0);
  }, [searchQuery]);

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <SearchContext.Provider
      value={{
        queries,
        searchQuery,
        setSearchQuery,
        handleSubmit,
        searchResult,
        favoriteImages,
        setFavoriteImages,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
