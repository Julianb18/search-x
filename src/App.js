import { useEffect, useState } from "react";
import { ResultCard } from "./components/ResultCard";
import { Searchbar } from "./components/Searchbar";
import data from "./Data.json";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#202124]">
      <div
        className={`fixed flex items-center w-full space-x-7 px-7 py-7 ${
          scrolled && "bg-[#303134]"
        }`}
      >
        <h1 className="text-3xl font-bold text-white self-start">Search X</h1>
        <div className="max-w-xl w-full fixed top-7 left-44">
          <Searchbar
            data={data.items}
            setSelectedItem={setSelectedItem}
            scrolled={scrolled}
          />
        </div>
      </div>
      <div className="p-7 pt-28">
        {searchResults.length > 0 && (
          <div className="text-[#9CA3AF] pt-2 border-t-[1px] border-[#9CA3AF]">
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
    </div>
  );
}

export default App;
