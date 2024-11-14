import React from "react";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

interface LocationCardProps {
  title: string;
  image: string;
  address: string;
  category: string;
  link: string;
  rating: number;
  distance: string;
}

const LocationCard = ({
  title,
  image,
  address,
  category,
  link,
  rating,
  distance,
}: LocationCardProps) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <div className="">
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? "text-primary" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="flex text-sm text-gray-600 mt-2">
            <div>
              <MapPinIcon className="text-primary mr-1 w-5 h-5" />
            </div>
            <p className="text-xs">{address}</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 mt-auto">
          <div className="flex items-center gap-3 text-gray-400 text-sm mt-2">
            <p className="font-medium">{distance}</p>
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-primary text-white text-sm py-1 px-4 flex items-center gap-1 rounded-full hover:bg-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                />
              </svg>
              <span>Directions</span>
            </button>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-right">
              <p className="text-xs text-gray-600">Kategori</p>
              <p className="font-medium text-gray-800">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
