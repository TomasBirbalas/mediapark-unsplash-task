import React from "react";
import SingleImage from "./singleImage";

function Images({ images }) {
  return images.map((image) => <SingleImage key={image.id} image={image} />);
}

export default Images;
