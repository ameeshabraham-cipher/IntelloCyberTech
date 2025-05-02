# Library Utilities

## Overview

This directory contains utility functions, helpers, and shared logic for the Intello Cyber Technologies website. These utilities are used throughout the application to provide consistent functionality.

## Contents

### `animations.ts`

Contains animation configurations used with Framer Motion throughout the site to maintain consistent motion design.

### `images.ts`

Utilities for handling image operations, including lazy loading, optimization, and placeholder generation.

### `queryClient.ts`

Configuration for TanStack Query client used for API requests and data fetching.

### `seo.ts`

Utilities for managing SEO-related functionality, including metadata management and structured data generation.

### `utils.ts`

General utility functions used across the application, including formatting, validation, and helper functions.

## Usage

Import utilities directly from their respective files:

```tsx
import { fadeIn } from "@/lib/animations";
import { formatDate } from "@/lib/utils";
```

## Adding New Utilities

When adding new utility functions:

1. Place them in the appropriate file based on their purpose
2. Add proper TypeScript typing
3. Include JSDoc comments for complex functions
4. Avoid side effects in utility functions
5. Create new files for distinct categories of utilities if needed