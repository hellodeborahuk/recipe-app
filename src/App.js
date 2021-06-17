import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import { FaSearch } from "react-icons/fa";


const App = () => {
  const appId = "fff36917";
  const appKey = "35acc3180a5f19c4cf4a1312ccf60b9e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("egg");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <h1 className="header">Recipe Search</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          placeholder="Search recipes"
        />
        <button type="submit" className="search-button">
          < FaSearch />
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            source={recipe.recipe.source}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
