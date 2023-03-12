import React, { useEffect, useRef, useState } from "react";
import { Svg } from "./Svg";

export const Searchbar = ({
  filteredData,
  inputValue,
  setInputValue,
  searchHistory,
  setSearchHistory,
  setSelectedItem,
}) => {
  const [isSuggestionDropdownOpen, setIsSuggestionDropdownOpen] =
    useState(true);

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSearch = (searchText) => {
    setInputValue(searchText);
    setSelectedItem(searchText);
    setIsSuggestionDropdownOpen(false);
    // console.log(searchText);
    // console.log(isSuggestionDropdownOpen);
    setSearchHistory([...searchHistory, searchText]);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the dropdown is open and the clicked target is not within the dropdown,
      // then close the dropdown
      if (
        isSuggestionDropdownOpen &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setIsSuggestionDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSuggestionDropdownOpen]);

  // search history useEffect
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //   console.log(searchHistory);
  //   console.log(isSuggestionDropdownOpen);
  return (
    <div ref={searchRef} className="max-w-xl">
      <div className="relative w-full">
        {/* round border only if items in memory */}
        <input
          className={`w-full text-white border border-[#9CA3AF] caret-white outline-none rounded-t-3xl pl-4 py-2 pr-[71px] hover:bg-[#303134] hover:border-none
          ${
            isSuggestionDropdownOpen && inputValue
              ? "rounded-b-none"
              : "rounded-b-3xl"
          }
          ${
            isSuggestionDropdownOpen
              ? "bg-[#303134] border-none"
              : "bg-transparent"
          }
          `}
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          ref={inputRef}
          onFocus={() => setIsSuggestionDropdownOpen(true)}
          //   onBlur={() => setInputFocused(false)}
        />
        <div className="flex absolute h-full rounded-r-3xl min-w-[55px] top-0 right-0">
          <div className="h-3/5 w-[1px] self-center bg-[#9CA3AF]"></div>

          <button
            className="flex justify-center items-center rounded-r-3xl w-full"
            onClick={() => onSearch(inputValue.toLowerCase())}
          >
            <Svg icon="search" height="20" width="20" color="#4169BE" />
          </button>
        </div>
      </div>
      <div
        className={`bg-[#303134] rounded-b-3xl text-white 
      ${isSuggestionDropdownOpen && inputValue ? "block" : "hidden"}
      `}
      >
        {filteredData.slice(0, 10).map((item) => (
          <div
            className={`cursor-pointer hover:bg-gray-600 last-of-type:rounded-b-3xl py-2 px-4 
            ${
              searchHistory.includes(item.title.toLowerCase())
                ? "text-purple-400"
                : ""
            }`}
            key={item.id}
            onClick={() => onSearch(item.title.toLowerCase())}
          >
            {item.title.toLowerCase()}
          </div>
        ))}
      </div>
    </div>
  );
};
