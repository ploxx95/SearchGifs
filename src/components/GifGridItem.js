import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  console.log("ITEMREP----");
  return (
    <div className="grid-item animate__animated animate__fadeInDown">
      <p>{title}</p>
      <img className="gif-item" src={url} alt={title} />
    </div>
  );
};
