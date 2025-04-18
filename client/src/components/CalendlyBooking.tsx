import { useState } from 'react';
import { InlineWidget, PopupWidget, PopupButton } from 'react-calendly';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

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
  className = "", 
  prefill 
}: CalendlyButtonProps) {
  const handleClick = () => {
    // Construct the Calendly URL with prefill parameters if any
    let calendlyUrl = url;
    if (prefill) {
      const params = new URLSearchParams();
      if (prefill.email) params.append('email', prefill.email);
      if (prefill.firstName) params.append('firstName', prefill.firstName);
      if (prefill.lastName) params.append('lastName', prefill.lastName);
      if (prefill.name) params.append('name', prefill.name);
      
      if (params.toString()) {
        calendlyUrl += `?${params.toString()}`;
      }
    }
    
    window.open(calendlyUrl, '_blank');
  };
  
  return (
    <Button 
      onClick={handleClick}
      className={`bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 ${className}`}
    >
      {text}
    </Button>
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-4 bg-card border-b border-border">
          <DialogTitle>Schedule Appointment</DialogTitle>
          <DialogDescription>
            Choose a convenient time for your consultation
          </DialogDescription>
        </DialogHeader>
        <div className="h-full w-full">
          <InlineWidget 
            url={url}
            prefill={prefill}
            styles={{
              height: 'calc(80vh - 80px)',
              width: '100%',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
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
  buttonText = "Schedule a Meeting", 
  buttonClassName = "",
  prefill
}: CalendlyPopupProps) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <Button 
        onClick={() => setShowModal(true)}
        className={`bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 ${buttonClassName}`}
      >
        {buttonText}
      </Button>
      
      <CalendlyModal 
        url={url} 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
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
    <div className={`w-full h-[630px] rounded-lg overflow-hidden shadow-lg ${className}`}>
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
      rootElement={document.getElementById('root') as HTMLElement}
      text="Schedule Appointment"
      textColor="#ffffff"
      color="#eb3443"
    />
  );
}