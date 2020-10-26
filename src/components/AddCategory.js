import React, { useState } from "react";

export const AddCategory = ({ setCategory, category }) => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length >= 4) {
      setCategory([value, ...category]);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-category"
        type="text"
        value={value}
        onChange={handleInput}
      ></input>
    </form>
  );
};
