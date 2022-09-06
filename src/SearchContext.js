import React, { useState, useEffect, createContext, useCallback } from "react";
import { useLocation } from "react-router-dom";
import api from "./api/search";
import useLocalStorage from "./hooks/useLocalStorage";

const SearchContext = createContext({});

export const DataProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [queries, setQueries] = useLocalStorage("search-queries", []);

  const location = useLocation();

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
        console.log(err.message);
        console.log(err.response.data);
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
        console.log(err.message);
        console.log(err.response.data);
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
    if (location.pathname !== "/FavoriteImages") {
      handleSubmit();
    } else {
      setSearchResult(() => {
        try {
          let item = localStorage.getItem("favorite-images");
          item = item ? JSON.parse(item) : [];
          let images = [];
          item.forEach((image) => {
            images.push(image.image);
          });
          return images;
        } catch (err) {
          console.log(err);
        }
      });
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        queries,
        searchQuery,
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
