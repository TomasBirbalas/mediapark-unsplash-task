import React from "react";
import { SingleImage } from "./SingleImage";
import useLocalStorage from "../hooks/useLocalStorage";

export const Images = ({ images }) => {
  const [favoriteImages, setFavoriteImages] = useLocalStorage(
    "favorite-images",
    []
  );
  return (
    <div className="grid-wrapper">
      {images.map((image) => (
        <SingleImage
          key={image.id}
          image={image}
          setFavoriteImages={setFavoriteImages}
          favoriteImages={favoriteImages}
        />
      ))}
    </div>
  );
};
