import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

function ImageList(props) {
  const images = props.images.map((img) => {
    return <ImageCard key={img.id} img={img} />;
  });

  return <div className="image-list">{images}</div>;
}

export default ImageList;
