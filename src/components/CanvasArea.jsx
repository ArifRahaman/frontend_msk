import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const CONTAINER_WIDTH = 800;
const CONTAINER_HEIGHT = 870;
const TRANSITION_DURATION = "0.3s";
const TRANSITION_TIMING_FUNCTION = "ease-in-out";
const WHITE_BRUSH_COLOR = "rgba(255, 255, 255, 1)";
const LAZY_RADIUS = 2;

const CanvasArea = ({ image, onExportMask, zoomLevel, brushSize }) => {
  const canvasRef = useRef(null);

  const exportMask = () => {
    if (canvasRef.current) {
      const maskDataUrl = canvasRef.current.getDataURL();
      onExportMask(maskDataUrl);
    }
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  return (
    <div
      className={`relative w-[${CONTAINER_WIDTH}px] h-[${CONTAINER_HEIGHT}px] border border-gray-300`}
      style={{
        transform: `scale(${zoomLevel})`,
        transformOrigin: "top left",
        transition: `transform ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION}`,
      }}
    >
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={CANVAS_WIDTH}
        canvasHeight={CANVAS_HEIGHT}
        imgSrc={image}
        brushColor={WHITE_BRUSH_COLOR}
        lazyRadius={LAZY_RADIUS}
        brushRadius={brushSize}
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={exportMask}
          className="bg-green-500 text-white rounded-md px-4 py-2 transition-transform hover:scale-105"
        >
          Export Mask
        </button>
        <button
          onClick={clearCanvas}
          className="bg-red-500 text-white rounded-md px-4 py-2 transition-transform hover:scale-105"
        >
          Clear Drawing
        </button>
      </div>
    </div>
  );
};

export default CanvasArea;