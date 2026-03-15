import React, { useState } from "react";
import CanvasArea from "./components/CanvasArea";
import ImageDisplay from "./components/ImageDisplay";
import axios from "axios";
import "./App.css";

const DEFAULT_BRUSH_SIZE = 5;
const MIN_BRUSH_SIZE = 1;
const MAX_BRUSH_SIZE = 20;
const UPLOAD_URL = "https://backend-msk.onrender.com/upload";

const App = () => {
  const [image, setImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);
  const [uploadedData, setUploadedData] = useState(null);
  const [brushSize, setBrushSize] = useState(DEFAULT_BRUSH_SIZE);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.onerror = () => console.error("Error reading file");
      reader.readAsDataURL(file);
    }
  };

  const handleMaskExport = async (maskDataUrl) => {
    setMaskImage(maskDataUrl);

    const formData = new FormData();
    formData.append("original", convertDataURLToBlob(image));
    formData.append("mask", convertDataURLToBlob(maskDataUrl));

    setLoading(true);
    try {
      const response = await axios.post(UPLOAD_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadedData(response.data.data);
      localStorage.setItem("url", response.data.data.maskImageUrl);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setLoading(false);
    }
  };

  const convertDataURLToBlob = (dataURL) => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="app-container bg-gradient-to-r from-green-200 to-blue-300 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 rounded-md shadow-md mb-6">
        🎨 Image Mask Drawing Tool
      </h1>

      <div className="upload-section mb-6 flex flex-col items-center">
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center justify-center border-dashed border-2 border-gray-400 p-6 rounded-md hover:bg-gray-100 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-600 mb-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 8a5 5 0 1110 0h4a3 3 0 110 6H3a3 3 0 010-6h4z" />
          </svg>
          <span className="text-gray-600 text-lg">
            Drag & Drop or Click to Upload
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      <div className="brush-size-slider flex items-center gap-4 mb-4">
        <label
          htmlFor="brush-size"
          className="text-lg font-medium text-gray-700"
        >
          🖌️ Brush Size:
        </label>
        <input
          id="brush-size"
          type="range"
          min={MIN_BRUSH_SIZE}
          max={MAX_BRUSH_SIZE}
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
          className="slider w-40 accent-blue-600"
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
              (brushSize / MAX_BRUSH_SIZE) * 100
            }%, #e5e7eb ${(brushSize / MAX_BRUSH_SIZE) * 100}%, #e5e7eb 100%)`,
          }}
        />
        <span className="text-lg font-bold text-blue-800">{brushSize}px</span>
      </div>

      {image && (
        <div className="w-full flex justify-center mb-6">
          <CanvasArea
            brushSize={brushSize}
            image={image}
            onExportMask={handleMaskExport}
          />
        </div>
      )}

      {loading && (
        <div className="loading-spinner flex flex-col items-center mt-6">
          <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-lg font-medium text-gray-700">
            Please wait... Processing your images.
          </p>
        </div>
      )}

      {uploadedData && (
        <div className="image-display flex flex-col items-center mt-6">
          <ImageDisplay
            original={uploadedData.originalImageUrl}
            mask={uploadedData.maskImageUrl}
          />
        </div>
      )}
    </div>
  );
};

export default App;