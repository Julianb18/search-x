import React from "react";

export const ResultCard = ({ item }) => {
  console.log(item);
  return (
    <div className="text-gray-200 my-4">
      <span className="text-xs">{item.url}</span>
      <a href={item.url}>
        <h3 className="font-semibold text-2xl text-[#4169BE]">{item.title}</h3>
      </a>
      <p>{item.description}</p>
    </div>
  );
};
