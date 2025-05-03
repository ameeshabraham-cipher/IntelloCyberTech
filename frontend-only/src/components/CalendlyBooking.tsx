import { useEffect } from 'react';

type CalendlyBookingProps = {
  url?: string;
  height?: number;
};

export default function CalendlyBooking({
  url = 'https://calendly.com/ameesh-intellome',
  height = 700,
}: CalendlyBookingProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    const existingScript = document.getElementById('calendly-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup
    return () => {
      // Optional: remove script on component unmount if needed
      // if (document.getElementById('calendly-script')) {
      //   document.getElementById('calendly-script')?.remove();
      // }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-xl overflow-hidden shadow-lg border border-border"
      data-url={url}
      style={{ minWidth: '320px', height: `${height}px` }}
    ></div>
  );
}
