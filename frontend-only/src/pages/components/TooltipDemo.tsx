import React from 'react';
import { Info } from 'lucide-react';

export default function TooltipDemo() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Technology Tooltips Demo</h1>
          <p className="text-muted-foreground mb-8">
            This is a demonstration of the technical tooltips component used throughout the website.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">What are Technology Tooltips?</h2>
            <p className="text-muted-foreground mb-4">
              Technology tooltips provide additional information about technical terms, compliance frameworks, and cybersecurity concepts when users hover over them.
            </p>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">ISO 27001</span>
                <div className="relative inline-block">
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-popover text-popover-foreground text-sm rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                    ISO 27001 is an international standard for information security management systems (ISMS).
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">GDPR</span>
                <div className="relative inline-block">
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-popover text-popover-foreground text-sm rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                    General Data Protection Regulation: EU legislation on data protection and privacy.
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">PCI DSS</span>
                <div className="relative inline-block">
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-popover text-popover-foreground text-sm rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                    Payment Card Industry Data Security Standard: requirements for organizations handling credit card data.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Implementation Note</h2>
            <p className="text-muted-foreground">
              This is a demonstration page for development purposes. The actual tooltip implementation includes improved hover functionality and responsive positioning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
