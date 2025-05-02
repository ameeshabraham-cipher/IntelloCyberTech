# Components

## Overview

This directory contains reusable UI components for the Intello Cyber Technologies website. These components are used throughout the application to maintain consistency and reduce code duplication.

## Component Categories

### Layout Components

- `Footer.tsx` - Site footer with copyright information and links
- `NavbarModern.tsx` - Main navigation with responsive design
- `Layout.tsx` - Page layout wrapper with standard structure

### UI Components

- `ui/` - Shadcn UI components (buttons, cards, etc.)
- `ServiceCard.tsx` - Card for displaying service offerings
- `SolutionCard.tsx` - Card for displaying solutions
- `TestimonialCard.tsx` - Card for displaying client testimonials

### Section Components

- `sections/` - Page sections used across multiple pages
- `HeroSection.tsx` - Hero section with animations
- `AboutSection.tsx` - About company section
- `ContactSection.tsx` - Contact form section

### Form Components

- `ContactForm.tsx` - Main contact form using Formspree
- `CTA.tsx` - Call to action components with forms

## Usage Guidelines

1. Import components using relative paths
2. Use the available shadcn/ui components when possible instead of creating new ones
3. For new components, follow the existing patterns for props, styling, and structure
4. Use TypeScript interfaces to define component props

## Examples

```tsx
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";

function MyComponent() {
  return (
    <div>
      <ServiceCard 
        title="Service Title" 
        description="Service description" 
        icon="shield" 
      />
      <Button>Click me</Button>
    </div>
  );
}
```