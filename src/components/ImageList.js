import "./ImageList.css";
import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
