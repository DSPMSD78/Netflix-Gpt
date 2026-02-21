import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    if (!list) {
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;
