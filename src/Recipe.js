import React from "react";
import style from "./recipe.module.css";

let colors = ["#F3EBFF", "#ECFEF1", "#FFFAEA", "#CDE8F4"];

const getColor = () => {
  const color = colors.pop();
  colors.unshift(color);
  return color;
};

const Recipe = ({ title, image, url, source }) => {
  return (
    <div className={style.recipe} style={{
        backgroundColor: getColor()}}>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>
      <h1>{title}</h1>
      <p>Source: {source}</p>
    </div>
  );
};

export default Recipe;
