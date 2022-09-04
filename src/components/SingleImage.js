import React from "react";

export const SingleImage = ({ image }) => {
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
    </div>
  );
};
