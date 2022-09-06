import React from "react";
import { FavoriteImageButton } from "./FavoriteImageButton";

export const SingleImage = ({ image, setFavoriteImages, favoriteImages }) => {
  const imageSpan = (image) => {
    if (image.height / image.width >= 1.4) {
      return "h-2";
    } else if (image.height / image.width <= 1) {
      return "w-2";
    } else {
      return "";
    }
  };
  return (
    <div className={`grid-item ${imageSpan(image)}`}>
      <img src={image.urls.small} alt={image.alt_description} />
      <div className="btns-action">
        <FavoriteImageButton
          image={image}
          setFavoriteImages={setFavoriteImages}
          favoriteImages={favoriteImages}
        />
        <a href={image.links.download} target="_blank" rel="noreferrer">
          <i className="fa-regular fa-circle-down"></i>
        </a>
      </div>
    </div>
  );
};
