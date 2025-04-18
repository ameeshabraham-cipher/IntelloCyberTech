import { useState } from 'react';
import { InlineWidget, PopupWidget, PopupButton } from 'react-calendly';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';

interface CalendlyButtonProps {
  url: string;
  text?: string;
  className?: string;
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  };
}

export function CalendlyButton({ 
  url, 
  text = "Schedule a Consultation", 
  className = "", 
  prefill 
}: CalendlyButtonProps) {
  // Using PopupButton from react-calendly but with custom styling
  return (
    <div className="relative inline-block">
      <PopupButton 
        url={url}
        rootElement={document.getElementById('root')!}
        text={text}
        prefill={prefill}
        className={`bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center justify-center ${className}`}
      />
    </div>
  );
}

interface CalendlyModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  };
}

export function CalendlyModal({ url, isOpen, onClose, prefill }: CalendlyModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[80vh] bg-card rounded-xl shadow-xl">
        <Button 
          variant="ghost" 
          className="absolute right-2 top-2 z-10 rounded-full p-2" 
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
        <div className="h-full overflow-hidden rounded-xl">
          <InlineWidget 
            url={url}
            prefill={prefill}
            styles={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface CalendlyPopupProps {
  url: string;
  buttonText?: string;
  buttonClassName?: string;
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  };
}

export function CalendlyPopup({ 
  url, 
  buttonText = "Book a Consultation", 
  buttonClassName = "",
  prefill
}: CalendlyPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);
  
  return (
    <>
      <Button 
        onClick={openCalendly}
        className={`bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover flex items-center ${buttonClassName}`}
      >
        <Calendar className="mr-2 h-5 w-5" />
        <span>{buttonText}</span>
      </Button>
      
      <CalendlyModal 
        url={url} 
        isOpen={isOpen} 
        onClose={closeCalendly}
        prefill={prefill}
      />
    </>
  );
}

interface CalendlyWidgetProps {
  url: string;
  className?: string;
}

export function CalendlyWidget({ url, className = "" }: CalendlyWidgetProps) {
  return (
    <div className={`w-full h-[600px] rounded-xl overflow-hidden border border-[hsl(var(--secondary))]/20 ${className}`}>
      <InlineWidget 
        url={url}
        styles={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
}

export function CalendlyPopupWidget({ url }: { url: string }) {
  return (
    <PopupWidget 
      url={url}
      rootElement={document.getElementById('root')!}
      text="Schedule Assessment"
      textColor="#FFFFFF"
      color="#eb3443"
    />
  );
}