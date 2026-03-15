import React from "react";
const url = localStorage.getItem("url");

const ImageDisplay = ({ original, mask }) => (
  <div className="flex justify-center items-center space-x-10 p-10 bg-gray-100 min-h-screen">
    {/* Original Image Section */}
    <ImageSection
      title="Original Image"
      imgSrc={original}
      titleBg="from-blue-500 to-indigo-600"
    />

    {/* Mask Image Section */}
    <ImageSection
      title="Mask Image"
      imgSrc={mask}
      titleBg="from-purple-500 to-pink-600"
    />
  </div>
);

const ImageSection = ({ title, imgSrc, titleBg }) => (
  <div className="w-1/2 bg-gradient-to-r from-black to-black shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl relative group">
    <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
    <h3 className={`text-3xl font-bold text-center text-white p-4 bg-gradient-to-r ${titleBg}`}>
      {title}
    </h3>
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
    />
  </div>
);

export default ImageDisplay;