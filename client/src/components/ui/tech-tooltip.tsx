import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  alignOffset?: number;
  className?: string;
  tooltipClassName?: string;
  hideArrow?: boolean;
}

export function TechTooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  sideOffset = 8,
  alignOffset = 0,
  className,
  tooltipClassName,
  hideArrow = false,
}: TechTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate positioning based on side and align props
  const getPosition = () => {
    let position = {};
    
    switch (side) {
      case 'top':
        position = { bottom: '100%', marginBottom: sideOffset };
        break;
      case 'right':
        position = { left: '100%', marginLeft: sideOffset };
        break;
      case 'bottom':
        position = { top: '100%', marginTop: sideOffset };
        break;
      case 'left':
        position = { right: '100%', marginRight: sideOffset };
        break;
    }
    
    switch (align) {
      case 'start':
        position = side === 'top' || side === 'bottom' 
          ? { ...position, left: 0, marginLeft: alignOffset }
          : { ...position, top: 0, marginTop: alignOffset };
        break;
      case 'center':
        position = side === 'top' || side === 'bottom'
          ? { ...position, left: '50%', transform: 'translateX(-50%)' }
          : { ...position, top: '50%', transform: 'translateY(-50%)' };
        break;
      case 'end':
        position = side === 'top' || side === 'bottom'
          ? { ...position, right: 0, marginRight: alignOffset }
          : { ...position, bottom: 0, marginBottom: alignOffset };
        break;
    }
    
    return position;
  };

  // Calculate arrow position
  const getArrowPosition = () => {
    let arrowPosition = {};
    
    switch (side) {
      case 'top':
        arrowPosition = { bottom: -5, transform: 'rotate(45deg)' };
        break;
      case 'right':
        arrowPosition = { left: -5, transform: 'rotate(135deg)' };
        break;
      case 'bottom':
        arrowPosition = { top: -5, transform: 'rotate(225deg)' };
        break;
      case 'left':
        arrowPosition = { right: -5, transform: 'rotate(315deg)' };
        break;
    }
    
    switch (align) {
      case 'start':
        arrowPosition = side === 'top' || side === 'bottom'
          ? { ...arrowPosition, left: '15%' }
          : { ...arrowPosition, top: '15%' };
        break;
      case 'center':
        arrowPosition = side === 'top' || side === 'bottom'
          ? { ...arrowPosition, left: '50%', marginLeft: -5 }
          : { ...arrowPosition, top: '50%', marginTop: -5 };
        break;
      case 'end':
        arrowPosition = side === 'top' || side === 'bottom'
          ? { ...arrowPosition, right: '15%' }
          : { ...arrowPosition, bottom: '15%' };
        break;
    }
    
    return arrowPosition;
  };

  return (
    <div 
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(
              "absolute z-50 w-max max-w-[300px] rounded-md bg-card border border-[hsl(var(--secondary))] p-4 shadow-lg",
              "before:absolute before:w-3 before:h-3 before:bg-card before:border before:border-[hsl(var(--secondary))]",
              tooltipClassName
            )}
            style={getPosition() as React.CSSProperties}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {!hideArrow && (
              <span
                className="absolute block w-2 h-2 bg-card border border-[hsl(var(--secondary))]"
                style={getArrowPosition() as React.CSSProperties}
              />
            )}
            
            {/* Content with tech-inspired design */}
            <div className="relative overflow-hidden">
              {/* Animated scanner line */}
              <motion.div 
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--secondary))] to-transparent" 
                style={{ top: 0, left: 0 }}
                animate={{ 
                  y: ["0%", "100%", "0%"],
                }}
                transition={{ 
                  duration: 2, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
              />
              
              {/* Tech border effect */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[hsl(var(--secondary))]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[hsl(var(--secondary))]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[hsl(var(--secondary))]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[hsl(var(--secondary))]" />
              </div>
              
              <div className="pt-1">{content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}