import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { InlineWidget } from 'react-calendly';
import { X } from 'lucide-react';

interface AutoCalendlyPopupProps {
  url: string;
  autoOpenDelay?: number;
  sessionStorageKey?: string; // Key to track if user has already seen the popup in this session
  disableForPaths?: string[]; // Paths where the popup should not appear
}

export default function AutoCalendlyPopup({
  url,
  autoOpenDelay = 10000, // 10 seconds by default
  sessionStorageKey = 'intello_calendly_popup_shown',
  disableForPaths = ['/contact', '/assessment']
}: AutoCalendlyPopupProps) {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    // Check if we should disable popup for current path
    const currentPath = window.location.pathname;
    const shouldDisable = disableForPaths.some(path => currentPath.startsWith(path));
    
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem(sessionStorageKey) === 'true';
    
    if (!shouldDisable && !wasShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        // Mark as shown for this session
        sessionStorage.setItem(sessionStorageKey, 'true');
      }, autoOpenDelay);
      
      return () => clearTimeout(timer);
    }
  }, [autoOpenDelay, sessionStorageKey, disableForPaths]);

  return (
    <Dialog open={open} onOpenChange={setOpen} aria-labelledby="calendly-dialog-title">
      <DialogContent className="sm:max-w-[700px] h-[650px] p-0" aria-describedby="calendly-description">
        <div className="h-full relative">
          <Button 
            variant="ghost" 
            className="absolute top-2 right-2 z-10 h-8 w-8 p-0 rounded-full"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          
          <div className="relative z-10 bg-[#111] text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg" id="calendly-dialog-title">Ready to enhance your cybersecurity posture?</h3>
              <p className="text-sm opacity-90" id="calendly-description">Book a free consultation with our experts</p>
            </div>
          </div>
          
          <InlineWidget 
            url={url}
            styles={{
              height: 'calc(100% - 72px)',
              width: '100%',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}