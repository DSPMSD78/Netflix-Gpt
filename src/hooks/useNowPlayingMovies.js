import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    if (!list) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
