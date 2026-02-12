import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetTrailer = (movieId) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  const getTrailer = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const data = await response.json();
    const vidoesData = data.results.filter((video) => video.type === "Trailer");
    dispatch(addTrailer(vidoesData.length ? vidoesData[0] : data.results[0]));
  };

  useEffect(() => {
    if (!trailer) getTrailer(movieId);
  }, []);
};

export default useGetTrailer;
