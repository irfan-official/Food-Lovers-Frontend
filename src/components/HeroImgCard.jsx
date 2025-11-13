import React from "react";

function HeroImgCard({ image, index }) {
  return (
    <div className="w-64 h-full border-2 border-gray-200 rounded-xl bg-cover overflow-clip m-3">
      <img src={image} alt={index} className="w-full h-44 object-center " />
    </div>
  );
}

export default HeroImgCard;
