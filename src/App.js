import { useState, useMemo } from "react";
import Content from "./components/content";
import Header from "./components/header";
import { SearchContext } from "./SearchContext";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  const providerValue = useMemo(
    () => ({ searchResult, setSearchResult }),
    [searchResult, setSearchResult]
  );

  return (
    <div className="App">
      <SearchContext.Provider value={providerValue}>
        <Header />
        <Content />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
