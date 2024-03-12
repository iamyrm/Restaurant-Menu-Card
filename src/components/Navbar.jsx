import React from "react";

const Navbar = ({ handleFilter, activeCategory, menuList }) => {
  return (
    <>
      <nav className="bg-white rounded-full p-3 my-5 max-w-[30rem] mx-auto">
        <ul className="flex gap-12 justify-center text-gray-700">
          <li
            className={`cursor-pointer hover:scale-105 transition-transform duration-300 ${
              activeCategory === "All" ? "text-gray-900 font-medium" : ""
            }`}
            onClick={() => handleFilter("All")}
          >
            All
          </li>
          {menuList.map((item) => {
            return (
              <li
                key={item}
                className={`cursor-pointer hover:scale-105 transition-transform duration-300 ${
                  activeCategory === item ? "text-gray-900 font-medium" : ""
                }`}
                onClick={() => handleFilter(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;