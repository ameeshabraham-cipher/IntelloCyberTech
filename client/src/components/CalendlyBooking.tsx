import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InlineWidget, PopupModal, PopupButton, useCalendlyEventListener } from 'react-calendly';
import { Calendar } from 'lucide-react';

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
  text = "Schedule a Meeting", 
  className = "bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center",
  prefill
}: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)} 
        className={className}
      >
        <Calendar className="mr-2 h-4 w-4" /> {text}
      </Button>

      <PopupModal 
        url={url}
        prefill={prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('root') as HTMLElement}
      />
    </>
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
  useCalendlyEventListener({
    onEventScheduled: () => {
      setTimeout(() => {
        onClose();
      }, 1000);
    },
  });

  return (
    <PopupModal 
      url={url}
      prefill={prefill}
      onModalClose={onClose}
      open={isOpen}
      rootElement={document.getElementById('root') as HTMLElement}
    />
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
  buttonText = "Schedule a Call", 
  buttonClassName,
  prefill
}: CalendlyPopupProps) {
  return (
    <PopupButton 
      url={url}
      text={buttonText}
      prefill={prefill}
      className={buttonClassName}
      rootElement={document.getElementById('root') as HTMLElement}
    />
  );
}

interface CalendlyWidgetProps {
  url: string;
  className?: string;
}

export function CalendlyWidget({ url, className = "" }: CalendlyWidgetProps) {
  return (
    <div className={`calendly-inline-widget ${className}`}>
      <InlineWidget url={url} />
    </div>
  );
}

export function CalendlyPopupWidget({ url }: { url: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Automatically open Calendly after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useCalendlyEventListener({
    onEventScheduled: () => {
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    },
  });

  return (
    <>
      <Button 
        ref={buttonRef}
        onClick={() => setIsOpen(true)} 
        className="hidden"
      >
        Open Calendly
      </Button>

      <PopupModal 
        url={url}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('root') as HTMLElement}
      />
    </>
  );
}