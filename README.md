# Image Mask Drawing Tool

The Image Mask Drawing Tool is a user-friendly web application that allows you to upload images and create masks using a drawing tool. This tool is perfect for non-technical users who want to easily manipulate images by drawing on them and exporting the mask for further use.

## Features

- **Image Upload**: Easily upload JPEG or PNG images from your device.
- **Interactive Canvas**: Use a simple drawing tool to create masks over uploaded images.
- **Brush Size Control**: Adjust the brush size to suit your masking needs.
- **Mask Export**: Export your drawn mask for use in other applications.
- **Image Display**: View the original and masked images side by side.

## Tech Stack

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making requests.
- **Fabric.js**: A powerful and flexible JavaScript canvas library.
- **React Canvas Draw**: A simple yet customizable React component for drawing on the canvas.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Vite**: A build tool that provides a fast and optimized development experience.

## Usage Guide

1. **Upload an Image**: Click on the upload section to select an image or drag and drop an image file.
2. **Draw a Mask**: Use the interactive canvas to draw a mask over your image. Adjust the brush size as needed.
3. **Export the Mask**: Once you're satisfied with your drawing, export the mask for use in other applications.
4. **View Images**: Compare the original and masked images side by side.

## Environment Variables

There are no specific environment variables required for this application. All configurations are handled internally.

## Architecture

```mermaid
flowchart TD
    src_App_css["src/App.css"]
    src_App_jsx["src/App.jsx"]
    src_components_CanvasArea_jsx["components/CanvasArea.jsx"]
    src_components_ImageDisplay_jsx["components/ImageDisplay.jsx"]
    src_main_jsx["src/main.jsx"]

    src_App_jsx --> src_components_CanvasArea_jsx
    src_App_jsx --> src_App_css
    src_App_jsx --> src_components_ImageDisplay_jsx
    src_main_jsx --> src_App_jsx

    classDef backend fill:#1a1a2e,stroke:#7c6cf8,color:#e8eaf6
    classDef frontend fill:#0d1b2a,stroke:#00e8a2,color:#e8eaf6
    classDef config fill:#1a0a0a,stroke:#f5a623,color:#e8eaf6
    class src_App_css frontend
    class src_App_jsx frontend
    class src_components_CanvasArea_jsx frontend
    class src_components_ImageDisplay_jsx frontend
    class src_main_jsx frontend
```

## Contributing

We welcome contributions from the community. If you wish to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software in accordance with the terms of the license.

---
> 🤖 *Last automated update: 2026-03-16 11:07:28*