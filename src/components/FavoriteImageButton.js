import React, { useState, useEffect } from "react";

export const FavoriteImageButton = ({
  image,
  setFavoriteImages,
  favoriteImages,
}) => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  const isImageFavorite = favoriteImages.find(
    (favoriteImage) => favoriteImage.id === image.id
  );

  const handleFavoriteImage = () => {
    setFavoriteStatus(!favoriteStatus);
    const favoriteImage = {
      id: image.id,
      alt_description: image.alt_description,
      height: image.height,
      width: image.width,
      url: image.urls.small,
      status: !favoriteStatus,
    };

    setFavoriteImages((favoriteImages) => {
      if (favoriteImage.status) {
        const newArray = favoriteImages.filter(
          (image) => image.status === true
        );
        return [...newArray, favoriteImage];
      } else {
        return favoriteImages.filter((image) => image.id !== favoriteImage.id);
      }
    });
  };

  useEffect(() => {
    if (isImageFavorite) {
      setFavoriteStatus(true);
    }
  }, [isImageFavorite]);

  return (
    <button type="button" onClick={handleFavoriteImage}>
      <i class={`fa-${favoriteStatus ? "solid" : "regular"} fa-heart`}></i>
    </button>
  );
};
