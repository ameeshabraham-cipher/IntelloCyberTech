import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * ScrollToTop component
 * 
 * This component automatically scrolls the window to the top
 * whenever the route changes. This ensures that when a user
 * navigates to a new page, they always start at the top.
 */
const ScrollToTop: React.FC = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  
  // This component doesn't render anything
  return null;
};

export default ScrollToTop;