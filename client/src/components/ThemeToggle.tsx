import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionClass, setTransitionClass] = useState('');

  // Handle the theme toggle with animation
  const handleToggleTheme = () => {
    // Set transition direction class based on current theme
    setTransitionClass(theme === 'light' ? 'light-to-dark' : 'dark-to-light');
    
    // Start the transition animation
    setIsTransitioning(true);
    
    // Toggle the theme after a short delay to let the animation start
    setTimeout(() => {
      toggleTheme();
    }, 50);
    
    // Reset the transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <>
      {/* Theme transition overlay */}
      <div 
        className={`theme-transition ${transitionClass} ${isTransitioning ? 'active' : ''}`} 
        aria-hidden="true"
      />
      
      {/* Theme toggle button */}
      <button
        onClick={handleToggleTheme}
        className="theme-toggle cyber-border"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <Sun className="h-3.5 w-3.5 theme-toggle-icon" />
        <Moon className="h-3.5 w-3.5 theme-toggle-icon" />
      </button>
    </>
  );
}

// This component handles the theme initialization to prevent flashing
export function ThemeInitializer() {
  useEffect(() => {
    // On mount, we need to ensure the correct theme class is applied
    const savedTheme = localStorage.getItem('intello-theme') || 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  
  return null;
}