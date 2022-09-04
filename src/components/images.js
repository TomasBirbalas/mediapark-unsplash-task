import React from "react";
import SingleImage from "./SingleImage";

function Images({ images }) {
  return (
    <div className="grid-wrapper">
      {images.map((image) => (
        <SingleImage key={image.id} image={image} />
      ))}
      ;
    </div>
  );
}

export default Images;
