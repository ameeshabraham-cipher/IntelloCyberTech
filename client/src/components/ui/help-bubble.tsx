import { useState } from 'react';
import { InfoIcon, ShieldIcon, AlertTriangleIcon, LockIcon, ServerIcon, Code2Icon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type HelpBubbleType = 'info' | 'security' | 'compliance' | 'tech' | 'warning' | 'resource';

interface HelpBubbleProps {
  type?: HelpBubbleType;
  title: string;
  content: string;
  className?: string;
  icon?: React.ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function HelpBubble({ 
  type = 'info', 
  title, 
  content, 
  className = '',
  icon,
  position = 'bottom-right'
}: HelpBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Define icon based on type if not provided
  const defaultIcon = () => {
    switch (type) {
      case 'security':
        return <ShieldIcon className="h-5 w-5" />;
      case 'compliance':
        return <ServerIcon className="h-5 w-5" />;
      case 'tech':
        return <Code2Icon className="h-5 w-5" />;
      case 'warning':
        return <AlertTriangleIcon className="h-5 w-5" />;
      case 'resource':
        return <LockIcon className="h-5 w-5" />;
      case 'info':
      default:
        return <InfoIcon className="h-5 w-5" />;
    }
  };
  
  // Define colors based on type
  const bubbleStyles = () => {
    switch (type) {
      case 'security':
        return 'bg-red-500/10 border-red-500/30 text-red-500';
      case 'compliance':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-500';
      case 'tech':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-500';
      case 'warning':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-500';
      case 'resource':
        return 'bg-green-500/10 border-green-500/30 text-green-500';
      case 'info':
      default:
        return 'bg-card/50 border-[hsl(var(--secondary))]/20 text-[hsl(var(--secondary))]';
    }
  };
  
  const containerStyles = () => {
    switch (position) {
      case 'top-left':
        return 'bottom-full right-0 mb-2';
      case 'top-right':
        return 'bottom-full left-0 mb-2';
      case 'bottom-left':
        return 'top-full right-0 mt-2';
      case 'bottom-right':
      default:
        return 'top-full left-0 mt-2';
    }
  };
  
  return (
    <div className={`inline-block relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-1.5 rounded-full ${bubbleStyles()} border flex items-center justify-center cursor-help transition-all hover:scale-110`}
        aria-label={`Help: ${title}`}
      >
        {icon || defaultIcon()}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.4 }}
            className={`absolute z-50 ${containerStyles()} w-64 p-3 rounded-lg border cyber-border backdrop-blur-sm shadow-lg`}
            style={{ 
              background: 'linear-gradient(135deg, rgba(10, 16, 36, 0.95), rgba(15, 23, 42, 0.98))'
            }}
          >
            <div className="relative">
              {/* Cyber-themed decorative elements */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-[hsl(var(--secondary))]/40"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-[hsl(var(--secondary))]/40"></div>
              
              <div 
                className={`absolute top-1.5 right-1.5 h-2 w-2 rounded-full ${type === 'warning' ? 'bg-amber-500' : 'bg-[hsl(var(--secondary))]'} animate-pulse`}>
              </div>
              
              <h4 className="font-bold text-white mb-1.5 pl-1">{title}</h4>
              <p className="text-xs text-gray-300 pl-1">{content}</p>
              
              {/* Illustration based on type */}
              <div className="mt-2 text-center opacity-20 absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4">
                {type === 'security' && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-500">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" />
                  </svg>
                )}
                {type === 'compliance' && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
                    <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.5" />
                    <path d="M8 9h8M8 13h5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {type === 'tech' && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-500">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {type === 'warning' && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amber-500">
                    <path d="M12 9v4M12 17.5v.5" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeWidth="1.5" />
                  </svg>
                )}
                {type === 'resource' && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-500">
                    <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="1.5" />
                    <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="1.5" />
                  </svg>
                )}
                {type === 'info' && (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[hsl(var(--secondary))]">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path d="M12 8v4M12 16h.01" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}