import React from "react";

interface VideoCardProps {
  title: string;
  category: string;
  duration: string;
  image: string;
  link: string;
  progress: number;
}

const VideoCard = ({
  title,
  category,
  duration,
  image,
  link,
  progress,
}: VideoCardProps) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="flex gap-10 p-5">
        <div className="w-full flex flex-col pt-2">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="my-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                <p>Durasi: {duration}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 flex-col py-2 text-sm text-gray-600 ">
          <p className="text-xs">Kategori</p>
          <p className="font-medium text-gray-700">{category}</p>
          <div className="mt-4">
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-primary text-white font-semibold p-1 py-2 rounded-lg w-full hover:bg-green-800"
            >
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
