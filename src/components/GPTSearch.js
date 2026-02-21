import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestion";
import backgroundImage from "../assets/background.png";

const GPTSearch = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-full">
        <GPTSearchBar />
        <GPTSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
