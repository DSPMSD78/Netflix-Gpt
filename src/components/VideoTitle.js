import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black">
      <div className="py-auto">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-6/12">{overview}</p>
        <div className="">
          <button className="bg-white text-black text-xl font-bold p-2 rounded-lg w-28 hover:bg-opacity-50">
            Play
          </button>
          <button className="bg-gray-500 bg-opacity-50 text-xl p-2 rounded-lg w-28 mx-2 hover:bg-transparent">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
