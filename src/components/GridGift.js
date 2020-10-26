import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import "animate.css";
export const GridGift = ({ category }) => {
  const { loading, data } = useFetchGifs(category);

  // useEffect(() => {
  //   GetGif(category).then(setGifs);
  // }, [category]);

  return (
    <>
      <div className="section-gif">
        <h2 className="animate__animated animate__fadeInDown">{category}</h2>
        <hr></hr>
        {loading && <p>Loading</p>}
      </div>
      <div className="grid-gif">
        {data.map((g) => {
          return <GifGridItem key={g.id} {...g} gogo={g.id}></GifGridItem>;
          // <li > {g.title}</li>
        })}
      </div>
    </>
  );
};
