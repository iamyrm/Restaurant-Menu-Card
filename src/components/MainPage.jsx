import React, { useState } from "react";
import Menu from "../dummyApi/MenuAPI.js";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";

const myCategory = [
  ...new Set(
    Menu.map((currentElem) => {
      return currentElem.category;
    })
  ),
];

const MainPage = () => {
  const [items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuList, setMenuList] = useState(myCategory);

  const handleFilter = (category) => {
    if (category === "All") {
      setItems(Menu); // Reset to original list if "All" is selected
    } else {
      let newItems = Menu.filter((currentElement) => {
        return currentElement.category === category;
      });
      setItems(newItems); // Set filtered items based on category
    }
    setActiveCategory(category); // Update active category
  };

  return (
    <>
      <Navbar
        menuList={menuList}
        activeCategory={activeCategory}
        handleFilter={handleFilter}
      />
      <Card items={items} />
    </>
  );
};

export default MainPage;