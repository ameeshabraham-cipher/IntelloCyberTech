# Custom Hooks

## Overview

This directory contains custom React hooks used throughout the Intello Cyber Technologies website. These hooks encapsulate reusable logic and stateful behavior that can be shared across components.

## Available Hooks

### `use-toast.ts`

Provides toast notification functionality used for displaying notifications, alerts, and feedback messages to users. Adapted from shadcn/ui's toast component.

### Other Hooks

Various custom hooks for specific functionality such as scroll behavior, intersection observation, form handling, etc.

## Usage

Import hooks directly from this directory:

```tsx
import { useToast } from "@/hooks/use-toast";

function MyComponent() {
  const { toast } = useToast();
  
  const handleAction = () => {
    toast({
      title: "Success",
      description: "Action completed successfully",
      variant: "default"
    });
  };
  
  return (
    <button onClick={handleAction}>Do Action</button>
  );
}
```

## Creating New Hooks

When creating new custom hooks:

1. Follow the React hooks naming convention (use prefix "use")
2. Place them in separate files with clear names
3. Add proper TypeScript typing
4. Include JSDoc comments for clarity
5. Follow React's rules of hooks (only call hooks at the top level, only call hooks from React functions)

## Testing Hooks

Hooks should be testable in isolation. Consider using React Testing Library's `renderHook` utility when writing tests.