import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import StructuredData from './StructuredData';

export interface FAQItem {
  question: string;
  answer: React.ReactNode | string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
  title?: string;
  subtitle?: string;
  mainEntity?: string;
}

export default function FAQ({
  items,
  className,
  title = "Frequently Asked Questions",
  subtitle,
  mainEntity = "Cybersecurity Services",
}: FAQProps) {
  // Generate FAQ structured data for the FAQ section
  const getFAQStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.answer === 'string' ? item.answer : 'Please see our website for the detailed answer.'
        }
      }))
    };
  };

  return (
    <>
      <StructuredData type="FAQPage" data={getFAQStructuredData()} />
      <div className={cn("w-full mx-auto py-12", className)}>
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
          {subtitle && <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}