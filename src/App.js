import { useEffect, useState } from "react";
import { ResultCard } from "./components/ResultCard";
import { Searchbar } from "./components/Searchbar";
import data from "./Data.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const filteredData = data.filter((item) => {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseInputValue = inputValue.toLowerCase();

    return (
      inputValue &&
      lowerCaseTitle !== lowerCaseInputValue &&
      lowerCaseTitle.startsWith(lowerCaseInputValue)
    );
  });
  console.log(selectedItem);
  useEffect(() => {
    let mockData = [...data];

    // we want to have the searched for item show on top of our results
    const selectedIndex = data.findIndex(
      (item) => item.title.toLowerCase() === selectedItem.toLowerCase()
    );

    mockData.push(...mockData.splice(0, selectedIndex));

    const results = mockData.filter((item) => {
      const lowerCaseTitle = item.title.toLowerCase();
      const lowerCaseSelectedItem = selectedItem.toLowerCase();

      return (
        selectedItem &&
        lowerCaseTitle.includes(lowerCaseSelectedItem.slice(0, 4)) // just for demo purposes since our data is so limited
      );
    });
    setSearchResults(results);
  }, [selectedItem]);
  console.log(searchResults);
  return (
    <div className="h-screen bg-[#202124] p-7">
      <h1 className="text-3xl font-bold text-pink-600">Hello world</h1>
      <Searchbar
        filteredData={filteredData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setSelectedItem={setSelectedItem}
      />
      {searchResults.length > 0 &&
        searchResults.slice(0, 10).map((item) => (
          <div key={item.id}>
            <ResultCard item={item} />
          </div>
        ))}
    </div>
  );
}

export default App;
