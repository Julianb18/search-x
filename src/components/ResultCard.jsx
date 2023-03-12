import React from "react";

export const ResultCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1 className="text-3xl text-pink-500">{item.title}</h1>
    </div>
  );
};
