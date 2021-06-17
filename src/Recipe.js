import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, image, url, source }) => {
  return (
    <div className={style.recipe}>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} /></a>
        <h1>{title}</h1>
        <p>Source: {source}</p>
    </div>
  );
};

export default Recipe;
