import { useEffect, useState } from "react";
import { ResultCard } from "./components/ResultCard";
import { Searchbar } from "./components/Searchbar";
import data from "./Data.json";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // console.log(selectedItem);
  useEffect(() => {
    let mockData = [...data.items];

    // we want to have the searched for item show on top of our results
    const selectedIndex = data.items.findIndex(
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
  // console.log(data.items);
  return (
    <div className="min-h-screen bg-[#202124] p-7">
      <h1 className="text-3xl font-bold text-white mb-3">Search X</h1>
      <div className="fixed max-w-xl w-full">
        <Searchbar data={data.items} setSelectedItem={setSelectedItem} />
      </div>
      {searchResults.length > 0 && (
        <div className="text-[#9CA3AF] mt-24 pt-2 border-t-[1px] border-[#9CA3AF]">
          <span>
            About {data.searchInformation.formattedTotalResults} results{" "}
          </span>
          <span>
            &#40;{data.searchInformation.formattedSearchTime} seconds&#41;
          </span>
        </div>
      )}
      {searchResults.length > 0 && (
        <div className="mt-2">
          {searchResults.slice(0, 10).map((item) => (
            <div className="" key={item.id}>
              <ResultCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
