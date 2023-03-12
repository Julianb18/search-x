import React, { useState } from "react";

export const Searchbar = ({ data }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSearch = (searchText) => {
    setInputValue(searchText);
    console.log(searchText);
  };

  return (
    <div className="max-w-xl">
      <div className="relative w-full">
        <input
          className="w-full text-white border border-[#9CA3AF] caret-white outline-none rounded-3xl pl-4 py-2 pr-[71px] bg-transparent hover:bg-[#303134] hover:border-none"
          type="text"
          value={inputValue}
          onChange={handleOnChange}
        />
        <div className="flex absolute h-full rounded-r-3xl min-w-[55px] top-0 right-0">
          <div className="h-3/5 w-[1px] self-center bg-[#9CA3AF]"></div>

          <button
            className="flex justify-center items-center text-white rounded-r-3xl w-full"
            onClick={() => onSearch(inputValue)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
