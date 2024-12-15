import React from "react";
const url=localStorage.getItem("url");
const ImageDisplay = ({ original, mask }) => (
  <div className="flex justify-center items-center space-x-10 p-10 bg-gray-100 min-h-screen">
    {/* Original Image Section */}
    <div className="w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl relative group">
      <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
      <h3 className="text-3xl font-bold text-center text-white p-4 bg-gradient-to-r from-blue-500 to-indigo-600">
        Original Image
      </h3>
      <img
        src={original}
        alt="Original"
        className="w-full h-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
      />

    </div>

    {/* Mask Image Section */}
    <div className="w-1/2 bg-gradient-to-r from-black to-black shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl relative group">
      <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
      <h3 className="text-3xl font-bold text-center text-white p-4 bg-gradient-to-r from-purple-500 to-pink-600">
        Mask Image
      </h3>
      <div>Mask image url:</div>
      <img
        src={mask}
        alt="Mask"
        className="w-full h-auto rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
      />

    </div>


  </div>
);

export default ImageDisplay;
