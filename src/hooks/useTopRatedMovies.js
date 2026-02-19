import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    console.log(data);
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    if (!list) {
      getTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;
