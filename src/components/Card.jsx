import React from "react";

const Card = ({ items }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center my-2">
        {items.map((menuItems) => {
          const { id, category, name, description, price, image } = menuItems;
          return (
            <div className="flex" key={id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 m-5 transition-transform duration-300 ease-in-out">
                <img className="w-full" src={image} alt={name} />
                <div className="px-6 pt-5">
                  <span className="inline-block py-1 text-sm font-semibold text-gray-700 mr-2 hover:scale-105 hover:text-gray-900 cursor-pointer">
                    #{category}
                  </span>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                  <span className="inline-block py-1 text-sm font-semibold mr-2 text-gray-900 cursor-pointer">
                    Rs. {price}
                  </span>
                  <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-gray-900 mr-2 mb-2 hover:bg-gray-400">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;