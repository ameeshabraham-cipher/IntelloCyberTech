# Client Source

## Overview

This directory contains the source code for the React frontend of the Intello Cyber Technologies website. The application is built with React, TypeScript, and Tailwind CSS.

## Structure

- `App.tsx` - Main application component with routing setup
- `main.tsx` - Entry point for the React application
- `index.css` - Global CSS styles and Tailwind imports
- `components/` - Reusable UI components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and helpers
- `pages/` - Page components organized by route

## Routing

The application uses `wouter` for routing. Routes are defined in `App.tsx`.

## State Management

The application primarily uses React's built-in state management (useState, useContext) for most functionality. For more complex data fetching, it uses React Query.

## Styling

The application uses Tailwind CSS for styling, with custom components from shadcn/ui.

## Assets

Static assets are served from the `public` directory at the root of the project. In the static build, all assets are properly linked with relative paths.