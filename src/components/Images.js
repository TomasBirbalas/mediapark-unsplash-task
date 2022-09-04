import React from "react";
import { SingleImage } from "./SingleImage";

export const Images = ({ images }) => {
  return (
    <div className="grid-wrapper">
      {images.map((image) => (
        <SingleImage key={image.id} image={image} />
      ))}
    </div>
  );
};
