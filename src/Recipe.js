import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <ul>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ul>
      <img src={image} alt={title} />
    </div>
  );
};

export default Recipe;
