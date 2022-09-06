import React, { useState, useEffect } from "react";

export const FavoriteImageButton = ({
  image,
  setFavoriteImages,
  favoriteImages,
}) => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  const isImageFavorite = favoriteImages.find(
    (favoriteImage) => favoriteImage.image.id === image.id
  );

  const handleFavoriteImage = () => {
    setFavoriteStatus(!favoriteStatus);
    const favoriteImage = {
      image: image,
      status: !favoriteStatus,
    };

    setFavoriteImages((favoriteImages) => {
      console.log(image);
      if (favoriteImage.status) {
        const newArray = favoriteImages.filter(
          (image) => image.status === true
        );
        return [...newArray, favoriteImage];
      } else {
        return favoriteImages.filter(
          (favoriteImage) => favoriteImage.image.id !== image.id
        );
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
      <i className={`fa-${favoriteStatus ? "solid" : "regular"} fa-heart`}></i>
    </button>
  );
};
