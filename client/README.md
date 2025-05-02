# Intello Cyber Technologies - Frontend

## Overview

This directory contains the frontend React application for the Intello Cyber Technologies website. The application is built using React with TypeScript, Tailwind CSS, and ShadCN UI components.

## Directory Structure

- `/src` - Source code ([Source README](./src/README.md))
  - `/components` - Reusable UI components ([Components README](./src/components/README.md))
  - `/hooks` - Custom React hooks ([Hooks README](./src/hooks/README.md))
  - `/lib` - Utility functions and shared code ([Library README](./src/lib/README.md))
  - `/pages` - Page components ([Pages README](./src/pages/README.md))
    - `/components` - Page-specific components
    - `/industries` - Industry-specific pages
    - `/services` - Service-specific pages
    - `/solutions` - Solution-specific pages
- `/public` - Static assets ([Public README](../public/README.md))
- `index.html` - Main HTML entry point

## Key Components

- `App.tsx` - Main application component with routing
- `NavbarModern.tsx` - Main navigation component
- `FooterModern.tsx` - Footer component
- `HeroSection.tsx` - Hero section component
- `ServicesGrid.tsx` - Services overview component
- `TestimonialsSection.tsx` - Testimonials section component

## Page Structure

Each page in the application follows a similar structure:

1. Hero section with page-specific title and subtitle
2. Main content section with details about the service/solution/industry
3. Call-to-action section encouraging users to request an assessment or contact sales
4. FAQs section with common questions about the topic
5. Related pages section suggesting other relevant pages

## State Management

The application primarily uses React's built-in state management with hooks. There is no central state store as most state is page-specific.

## Form Handling

Forms are processed using the Formspree service. The form endpoints are configured in the respective page components:

- Contact form: `client/src/pages/Contact.tsx`
- Assessment request form: `client/src/pages/Assessment.tsx`

## Responsive Design

The application is fully responsive with specific layouts for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

Responsive design is primarily handled through Tailwind CSS classes.

## Building for Production

The frontend is built as part of the static site generation process. See the main documentation for details on building the entire application for production.