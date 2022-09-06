import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { DataProvider } from "../SearchContext";

export const FavoriteImages = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <Content />
      </DataProvider>
    </>
  );
};
