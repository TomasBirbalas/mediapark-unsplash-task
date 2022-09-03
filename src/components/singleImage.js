import React from "react";

function SingleImage({ image }) {
  return (
    <div className="photo">
      <img src={image.urls.small} alt="test" />
    </div>
  );
}

export default SingleImage;
