import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { DataProvider } from "../SearchContext";
import ScrollToTop from "../components/ScrollToTop";

import "../stylesheets/css/home.min.css";

export const Home = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <ScrollToTop />
        <Content />
      </DataProvider>
    </>
  );
};
