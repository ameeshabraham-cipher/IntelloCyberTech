import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalendlyFloatingButtonProps {
  url: string;
  text?: string;
  position?: 'bottom-right' | 'bottom-left';
  delay?: number; // Delay in milliseconds before showing the button
}

export default function CalendlyFloatingButton({
  url = "https://calendly.com/ameesh-intellome",
  text = "Schedule an Expert Consultation",
  position = 'bottom-right',
  delay = 1000 // Default 1 second delay
}: CalendlyFloatingButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Position styles
  const positionStyles = {
    'bottom-right': 'fixed bottom-6 right-6 z-40',
    'bottom-left': 'fixed bottom-6 left-6 z-40',
  };
  
  useEffect(() => {
    // Show the button after the specified delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  if (!isVisible) return null;
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${positionStyles[position]} block`}
    >
      <Button 
        className="shadow-lg bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:shadow-[hsl(var(--secondary))]/20 text-white font-medium rounded-full flex items-center px-6 py-3"
      >
        <Calendar className="mr-2 h-4 w-4" /> {text}
      </Button>
    </a>
  );
}