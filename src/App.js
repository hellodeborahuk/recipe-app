import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const appId = "fff36917";
  const appKey = "35acc3180a5f19c4cf4a1312ccf60b9e";

  useEffect(  () => {
getRecipes();
  }, []);

const getRecipes = async () => {
const response = await fetch(
  `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`
);
const data = await response.json();
console.log(data.hits);
}

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
