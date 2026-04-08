# Frontend Project

## Overview

This project is a modern React application scaffolded with Vite and designed with TailwindCSS. It provides functionalities for interactive canvas drawing using the Fabric.js library, and includes essential configurations for efficient development and production processes.

## Features

- **React**: Utilizes React v17 for building dynamic user interfaces.
- **Vite**: A build tool to serve the app with fast hot-reload and optimized production builds.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **Canvas Functionality**: Enables drawing and manipulation on HTML canvas elements via `fabric.js` and `react-canvas-draw`.
- **ESLint**: Configured with plugins to enforce coding standards and detect errors.

## Project Structure

```plaintext
.gitignore
eslint.config.js
index.html
main.jsx
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
public/vite.svg
src/App.css
src/App.jsx
src/index.css
src/main.jsx
src/assets/react.svg
src/components/CanvasArea.jsx
src/components/ImageDisplay.jsx
```

## Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run preview`: Previews the built application locally.

## Installation

To get started with the project, ensure that Node.js is installed on your machine, then follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd frontend
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Start Development Server:**

    ```bash
    npm run dev
    ```

This will open a local development server at `http://localhost:3000` where you can view and interact with the application.

## Dependencies

- **axios**: For making HTTP requests.
- **fabric**: A canvas library for powerful drawing capabilities.
- **react & react-dom**: For building and rendering React components.
- **react-canvas-draw**: Provides components for drawing on a canvas.

## Dev Dependencies

- **@vitejs/plugin-react**: Plugin for integrating React with Vite.
- **eslint & related plugins**: For linting JavaScript and JSX code.
- **tailwindcss**: CSS framework for rapid UI development.
- **postcss & autoprefixer**: Tools for processing CSS.

## License

This is a private project and not open-source licensed.

## Contributing

Contributions are welcome but require permission from the repository maintainers. Please adhere to coding standards and undergo code review for any contributions.

---

Feel free to reach out for any further questions or support issues. Happy developing!