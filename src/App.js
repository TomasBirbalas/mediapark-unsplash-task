import Content from "./components/Content";
import Header from "./components/Header";
import { DataProvider } from "./SearchContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Content />
      </DataProvider>
    </div>
  );
}

export default App;
