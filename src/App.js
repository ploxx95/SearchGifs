import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGift } from "./components/GridGift";

export const App = () => {
  const [category, setCategory] = useState(["Anime"]);

  // const handleButtonClick = () => {
  //   setCategory([...category, "Tralalala"]);
  //   //setCategory((a) => [...a, "oooo"]); //es OTRA MANERA DE CAMBIAR EL USESTATE
  // };

  return (
    <>
      <div className="header-container">
        <h2>GIFT SEARCH APP</h2>
        <AddCategory setCategory={setCategory} category={category} />
      </div>
      <div className="body-container">
        <ol>
          {category.map((category, id) => {
            return <GridGift key={category} category={category} />;
          })}
        </ol>
      </div>
    </>
  );
};
