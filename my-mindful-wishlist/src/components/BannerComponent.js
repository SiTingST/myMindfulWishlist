import React, { useEffect, useRef } from 'react';

import banner from "../images/banner.jpg";
import quotes from "./Quotes";

const BannerComponent = (props) => {
  const randomQuote = useRef("")

  useEffect(() => {
    randomQuote.current = "\"" + quotes[Math.floor((Math.random() * 70))] + "\""
  }, []);
  return (
    <div
      className="relative h-[200px] w-[97%] rounded-lg ml-8 bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg" />
      <div className="relative z-2 p-4 text-center">
        <h1 className="text-white font-semibold text-5xl">My Wishlist</h1>
        <p className="mt-4 text-gray-200"> {randomQuote.current} </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <p className="text-white text-sm">Total Cost</p>
        <h1 className="text-red-500	text-3xl font-semibold">
          ${props.totalCost}
        </h1>
      </div>
    </div>
  );
};

export default BannerComponent;
