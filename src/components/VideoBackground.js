import useGetTrailer from "../hooks/useGetTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useGetTrailer(movieId);
  const trailerData = useSelector((store) => store.movies.trailerVideo);
  if (!trailerData?.key) return <div>Loading...</div>;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerData?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
