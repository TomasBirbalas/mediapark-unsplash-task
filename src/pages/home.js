import Content from "../components/Content";
import Header from "../components/Header";
import { DataProvider } from "../SearchContext";

function Home() {
  return (
    <>
      <DataProvider>
        <Header />
        <Content />
      </DataProvider>
    </>
  );
}

export default Home;
