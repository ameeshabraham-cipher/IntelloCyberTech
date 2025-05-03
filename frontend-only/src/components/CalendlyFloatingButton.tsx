import { Calendar } from 'lucide-react';
import { useState } from 'react';

type CalendlyFloatingButtonProps = {
  url: string;
  position?: 'bottom-right' | 'bottom-left';
};

export default function CalendlyFloatingButton({
  url = 'https://calendly.com/ameesh-intellome',
  position = 'bottom-left',
}: CalendlyFloatingButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-40`}>
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-16 left-0 right-0 mx-auto w-48 bg-card shadow-lg rounded-md p-2 text-center text-sm border border-border">
          Schedule a consultation
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-card border-b border-r border-border"></div>
        </div>
      )}
      
      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Schedule Meeting"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <Calendar className="w-6 h-6" />
      </a>
    </div>
  );
}
