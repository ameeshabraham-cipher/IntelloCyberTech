import { useEffect } from 'react';

// Empty component to avoid errors from imports that haven't been removed yet
export function ThemeToggle() {
  return null;
}

// This component handles the theme initialization to prevent flashing
// Now it only ensures dark mode is applied
export function ThemeInitializer() {
  useEffect(() => {
    // On mount, we need to ensure dark theme is applied
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);
  
  return null;
}