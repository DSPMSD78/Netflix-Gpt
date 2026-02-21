import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GPTSearchBar = () => {
  const config = useSelector((store) => store.config.lang);
  return (
    <div className="mx-auto px-4 py-6 rounded-lg">
      <div className="mt-20">
        <form className="w-1/2 mx-auto">
          <input
            type="text"
            placeholder={lang[config].placeholder}
            className="w-8/12 mr-2 px-4 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-red-600 w-3/12 text-white px-4 py-4 rounded-lg hover:bg-red-700"
          >
            {lang[config].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
