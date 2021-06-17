import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  const appId = "fff36917";
  const appKey = "35acc3180a5f19c4cf4a1312ccf60b9e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("egg");

  useEffect(() => {
    const getRecipes = async () => {
      setRecipes([]);
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="header">
        Recipe Search <GiKnifeFork />
      </h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          placeholder="Search recipes"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
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
