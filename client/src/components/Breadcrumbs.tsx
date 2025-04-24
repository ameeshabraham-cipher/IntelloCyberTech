import React from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { ChevronRight, Home } from 'lucide-react';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export default function Breadcrumbs({
  items,
  className,
  showHome = true,
}: BreadcrumbsProps) {
  const [location] = useLocation();
  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: 'Home', path: '/' }, ...items]
    : items;

  // Generate structured data for the breadcrumbs
  const getBreadcrumbStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": allItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://intellome.com${item.path === '/' ? '' : item.path}`
      }))
    };
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={getBreadcrumbStructuredData()} />
      <nav
        className={cn(
          "flex items-center text-sm text-muted-foreground py-3",
          className
        )}
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-1 md:space-x-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            
            return (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground/50" />
                )}
                
                {index === 0 && showHome && (
                  <Home className="mr-1 h-4 w-4 text-muted-foreground/70" />
                )}
                
                {isLast || item.isCurrentPage ? (
                  <span 
                    className="font-medium text-foreground" 
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.path}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}