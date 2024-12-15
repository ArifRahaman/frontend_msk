import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

const CanvasArea = ({ image, onExportMask, zoomLevel, brushSize }) => {
  const canvasRef = useRef(null);

  const handleExport = () => {
    if (canvasRef.current) {
      const maskDataUrl = canvasRef.current.getDataURL();
      onExportMask(maskDataUrl);
    }
  };

  const handleClear = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  return (
    <div
      className="relative w-[800px] h-[870px] border border-gray-300"
      style={{
        transform: `scale(${zoomLevel})`,
        transformOrigin: "top left",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={800}
        canvasHeight={800}
        imgSrc={image}
        brushColor="rgba(255, 255, 255, 1)" // White brush color
        lazyRadius={2}
        brushRadius={brushSize} // Use brushSize prop
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={handleExport}
          className="bg-green-500 text-white rounded-md px-4 py-2 transition-transform hover:scale-105"
        >
          Export Mask
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white rounded-md px-4 py-2 transition-transform hover:scale-105"
        >
          Clear Drawing
        </button>
      </div>
    </div>
  );
};


export default CanvasArea;
