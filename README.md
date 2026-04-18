# Procedural Generation

## Overview

This webpage serves as a visual introduction to the topic of Procedural Generation, specifically tailored for the Data Visualization course (DS4893).

## Project Structure

- **`src/`**: Contains all source code for the application.
- **`src/App.jsx`**: The main entry point for the application, orchestrating the layout and content.
- **`src/contentData.js`**: A simple JSON array that holds the data for each "tile" (heading, text, and image source). This is the "content database" that drives the procedural look.
- **`src/components/`**: Reusable React components.
    - **`Layout.jsx`**: Defines the overall page structure with the left sidebar, main content area, and right sidebar.
    - **`IntroSection.jsx`**: A dedicated section for the introductory text about Procedural Generation.
    - **`ContentBlock.jsx`**: A reusable component to display a single "tile" of content.
- **`public/`**: Static assets.
- **`vite.config.js`**: Configuration for the Vite build tool.

## How it Works

The page follows a "repeating blocks" pattern:

1.  **Layout**: The `Layout` component creates a persistent structure with two sidebars (themed to look like Carcassonne tiles) and a main content area.
2.  **Data-Driven Content**: The `contentData.js` file contains a list of objects. Each object represents a tile and includes:
    *   `id`: A unique identifier.
    *   `heading`: The title for the tile.
    *   `imageSrc`: The URL of an image to display (or an empty string for a placeholder).
    *   `textContent`: The text content to display in the "text" portion of the tile.
3.  **Rendering**: The `App.jsx` file maps over the `contentData` array and renders a `ContentBlock` component for each item. This creates a vertical stack of tiles.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
