import { createContext, useContext, useEffect, useState } from 'react';

// Only using dark theme now
type Theme = 'dark';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
};

const initialState: ThemeProviderState = {
  theme: 'dark',
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  // Always use dark theme
  const [theme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the light theme class if somehow present
    root.classList.remove('light');
    
    // Ensure dark theme is applied
    root.classList.add('dark');
    
    // Update the data-theme attribute for the futuristic animations
    root.setAttribute('data-theme', 'dark');
    
    // Also store the theme in localStorage to keep consistent
    localStorage.setItem('intello-theme', 'dark');
  }, []);

  const value = {
    theme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};