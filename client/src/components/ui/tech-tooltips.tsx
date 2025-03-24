import React from 'react';
import { TechTooltip } from './tech-tooltip';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertTriangle, Info, Lock, ShieldAlert, Coffee, Database } from 'lucide-react';

// Base interface for all tech tooltips
interface BaseTechTooltipProps {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  className?: string;
}

// Info Tooltip - Blue themed with info icon
interface InfoTooltipProps extends BaseTechTooltipProps {
  infoText: string;
  infoTitle?: string;
}

export function InfoTechTooltip({ 
  children, 
  infoText, 
  infoTitle,
  side = 'top',
  align = 'center',
  className
}: InfoTooltipProps) {
  return (
    <TechTooltip
      side={side}
      align={align}
      className={className}
      tooltipClassName="bg-card/95 backdrop-blur-sm"
      content={
        <div className="text-sm">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 text-blue-500" />
            <div>
              {infoTitle && <h4 className="font-semibold text-[hsl(var(--secondary))] mb-1">{infoTitle}</h4>}
              <p className="text-muted-foreground">{infoText}</p>
            </div>
          </div>
          
          {/* Tech embellishments */}
          <div className="mt-2 h-1 w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="mt-2 text-[0.65rem] text-blue-500/70 font-mono">INFO::SYSTEM::PROTOCOL::{Math.floor(Math.random() * 1000)}</div>
        </div>
      }
    >
      {children}
    </TechTooltip>
  );
}

// Security Tooltip - Red themed with security icons
interface SecurityTooltipProps extends BaseTechTooltipProps {
  securityText: string;
  alertLevel?: 'low' | 'medium' | 'high';
  securityTitle?: string;
}

export function SecurityTechTooltip({ 
  children, 
  securityText, 
  alertLevel = 'medium',
  securityTitle,
  side = 'top',
  align = 'center', 
  className
}: SecurityTooltipProps) {
  // Determine color based on alert level
  const alertColor = {
    low: "text-green-500",
    medium: "text-amber-500",
    high: "text-red-500"
  }[alertLevel];

  const AlertIcon = {
    low: CheckCircle,
    medium: AlertTriangle,
    high: ShieldAlert
  }[alertLevel];

  return (
    <TechTooltip
      side={side}
      align={align}
      className={className}
      tooltipClassName="bg-card/95 backdrop-blur-sm"
      content={
        <div className="text-sm">
          <div className="flex items-start gap-2">
            <AlertIcon className={`w-4 h-4 mt-0.5 ${alertColor}`} />
            <div>
              {securityTitle && <h4 className="font-semibold text-[hsl(var(--secondary))] mb-1">{securityTitle}</h4>}
              <p className="text-muted-foreground">{securityText}</p>
            </div>
          </div>
          
          {/* Animated security scanner effect */}
          <div className="relative mt-2 h-4 w-full bg-black/20 rounded overflow-hidden">
            <motion.div 
              className={cn("h-full rounded", 
                alertLevel === 'low' ? "bg-green-500/40" : 
                alertLevel === 'medium' ? "bg-amber-500/40" : 
                "bg-red-500/40"
              )} 
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%"] }}
              transition={{ 
                duration: 2, 
                ease: "linear", 
                repeat: Infinity,
              }}
            />
          </div>
          
          <div className="mt-2 flex justify-between">
            <span className="text-[0.65rem] text-muted-foreground font-mono">SEC::{alertLevel.toUpperCase()}</span>
            <span className="text-[0.65rem] text-muted-foreground font-mono">ID::{Math.floor(Math.random() * 10000)}</span>
          </div>
        </div>
      }
    >
      {children}
    </TechTooltip>
  );
}

// Feature Tooltip - Cyan themed for feature explanations
interface FeatureTooltipProps extends BaseTechTooltipProps {
  featureTitle: string;
  featureDescription: string;
  icon?: React.ReactNode;
}

export function FeatureTechTooltip({ 
  children, 
  featureTitle, 
  featureDescription,
  icon,
  side = 'top',
  align = 'center',
  className
}: FeatureTooltipProps) {
  return (
    <TechTooltip
      side={side}
      align={align}
      className={className}
      tooltipClassName="bg-card/95 backdrop-blur-sm"
      content={
        <div className="text-sm">
          <div className="flex items-start gap-2">
            {icon || <Database className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
            <div>
              <h4 className="font-semibold text-[hsl(var(--secondary))] mb-1">{featureTitle}</h4>
              <p className="text-muted-foreground">{featureDescription}</p>
            </div>
          </div>
          
          {/* Tech circuit pattern */}
          <div className="mt-3 relative h-8 overflow-hidden">
            <div className="absolute left-0 top-0 h-[1px] w-3/4 bg-[hsl(var(--secondary))]/40"></div>
            <div className="absolute left-3/4 top-0 h-3 w-[1px] bg-[hsl(var(--secondary))]/40"></div>
            <div className="absolute left-3/4 top-3 h-[1px] w-1/4 bg-[hsl(var(--secondary))]/40"></div>
            
            <div className="absolute right-0 bottom-0 h-[1px] w-2/3 bg-[hsl(var(--secondary))]/40"></div>
            <div className="absolute right-2/3 bottom-0 h-2 w-[1px] bg-[hsl(var(--secondary))]/40"></div>
            <div className="absolute right-2/3 bottom-2 h-[1px] w-1/6 bg-[hsl(var(--secondary))]/40"></div>
            
            {/* Animated dot */}
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-[hsl(var(--secondary))]"
              initial={{ left: 0, top: 0 }}
              animate={{
                left: ["0%", "75%", "75%", "100%"],
                top: ["0%", "0%", "37.5%", "37.5%"],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-[hsl(var(--secondary))]"
              initial={{ right: 0, bottom: 0 }}
              animate={{
                right: ["0%", "66.6%", "66.6%", "83.3%"],
                bottom: ["0%", "0%", "25%", "25%"],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                delay: 1.5,
              }}
            />
          </div>
        </div>
      }
    >
      {children}
    </TechTooltip>
  );
}

// Term Tooltip - For technical term definitions
interface TermTooltipProps extends BaseTechTooltipProps {
  term: string;
  definition: string;
}

export function TermTechTooltip({
  children,
  term,
  definition,
  side = 'top',
  align = 'center',
  className
}: TermTooltipProps) {
  return (
    <TechTooltip
      side={side}
      align={align}
      className={cn("border-dotted border-b border-[hsl(var(--secondary))]/50 cursor-help", className)}
      tooltipClassName="bg-card/95 backdrop-blur-sm"
      content={
        <div className="text-sm">
          <div className="flex items-start gap-2">
            <Coffee className="w-4 h-4 mt-0.5 text-[hsl(var(--primary))]" />
            <div>
              <h4 className="font-semibold text-[hsl(var(--secondary))] mb-1">{term}</h4>
              <p className="text-muted-foreground">{definition}</p>
            </div>
          </div>
          
          {/* Tech-themed footer */}
          <div className="mt-2 font-mono text-[0.65rem] text-[hsl(var(--secondary))]/70 flex items-center">
            <span className="animate-pulse mr-1">•</span>
            <span>TERM::DEF</span>
            <div className="flex-1 mx-2 h-[1px] bg-gradient-to-r from-transparent via-[hsl(var(--secondary))]/30 to-transparent"></div>
            <span>{new Date().toISOString().slice(0, 10)}</span>
          </div>
        </div>
      }
    >
      {children}
    </TechTooltip>
  );
}

// Compliance Tooltip - For compliance related information
interface ComplianceTooltipProps extends BaseTechTooltipProps {
  standard: string;
  requirements: string;
  icon?: React.ReactNode;
}

export function ComplianceTechTooltip({
  children,
  standard,
  requirements,
  icon,
  side = 'top',
  align = 'center',
  className
}: ComplianceTooltipProps) {
  return (
    <TechTooltip
      side={side}
      align={align}
      className={className}
      tooltipClassName="bg-card/95 backdrop-blur-sm"
      content={
        <div className="text-sm">
          <div className="flex items-start gap-2">
            {icon || <Lock className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
            <div>
              <h4 className="font-semibold text-[hsl(var(--secondary))] mb-1">{standard}</h4>
              <p className="text-muted-foreground">{requirements}</p>
            </div>
          </div>
          
          {/* Compliance scanner effect */}
          <div className="mt-3 grid grid-cols-10 gap-1">
            {Array(10).fill(0).map((_, i) => (
              <motion.div 
                key={i}
                className="h-1 bg-[hsl(var(--secondary))]/30 rounded"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
          
          <div className="mt-2 flex justify-between text-[0.65rem] font-mono">
            <span className="text-[hsl(var(--secondary))]/70">{standard.split(' ')[0]}::{standard.split(' ')[1] || ''}</span>
            <span className="text-muted-foreground/70">COMPLIANCE::VERIFIED</span>
          </div>
        </div>
      }
    >
      {children}
    </TechTooltip>
  );
}