import { Searchbar } from "./components/Searchbar";
import data from "./Data.json";

function App() {
  return (
    <div className="h-screen bg-[#202124] p-7">
      <h1 className="text-3xl font-bold text-pink-600">Hello world</h1>
      <Searchbar data={data} />
    </div>
  );
}

export default App;
