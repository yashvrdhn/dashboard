// src/App.js
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AddWidget from "./Components/Addwidget/AddWidget";
import Category from "./Components/Category/Category";
import SearchBar from "./Components/Searchbar/Searchbar";

function App() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="App">
      <div className="container">
        <h1>Dashboard</h1>
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="child">
          <AddWidget />
        </div>
      </div>

      <div className="dashboard">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default App;
