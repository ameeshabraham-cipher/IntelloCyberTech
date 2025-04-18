import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { InlineWidget } from 'react-calendly';
import { Calendar, X } from 'lucide-react';

interface CalendlyPopupCTAProps {
  url: string;
  buttonText?: string;
  buttonClassName?: string;
  triggerButtonVariant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center';
  autoOpen?: boolean;
  autoOpenDelay?: number;
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  };
}

export default function CalendlyPopupCTA({
  url,
  buttonText = "Schedule a Free Consultation",
  buttonClassName,
  triggerButtonVariant = 'default',
  position = 'bottom-right',
  autoOpen = false,
  autoOpenDelay = 5000,
  prefill
}: CalendlyPopupCTAProps) {
  const [open, setOpen] = useState(false);
  
  // Position styles
  const positionStyles = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6',
    'center': 'fixed bottom-6 left-1/2 transform -translate-x-1/2'
  };

  useEffect(() => {
    // Auto open after delay if enabled
    if (autoOpen) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, autoOpenDelay);
      
      return () => clearTimeout(timer);
    }
  }, [autoOpen, autoOpenDelay]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={triggerButtonVariant}
          className={`${positionStyles[position]} shadow-lg z-40 ${buttonClassName || 'bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:shadow-[hsl(var(--secondary))]/20 text-white font-medium rounded-full flex items-center px-6 py-3'}`}
        >
          <Calendar className="mr-2 h-4 w-4" /> {buttonText}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[700px] h-[650px] p-0">
        <div className="h-full relative">
          <Button 
            variant="ghost" 
            className="absolute top-2 right-2 z-10 h-8 w-8 p-0 rounded-full"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <InlineWidget 
            url={url}
            prefill={prefill}
            styles={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}