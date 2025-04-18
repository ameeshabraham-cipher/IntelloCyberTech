import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FileText, ClipboardList, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function AdminNav() {
  const [location] = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initially
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Links for nav
  const links = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { href: "/admin/submissions", label: "Contact Forms", icon: <FileText className="h-4 w-4 mr-2" /> },
    { href: "/admin/assessment-requests", label: "Assessment Requests", icon: <ClipboardList className="h-4 w-4 mr-2" /> },
  ];
  
  // If mobile, show dropdown menu
  if (isMobile) {
    // Find current page
    const currentPage = links.find(link => link.href === location) || links[0];
    
    return (
      <div className="mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full flex justify-between items-center">
              <span className="flex items-center">
                {currentPage.icon}
                {currentPage.label}
              </span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {links.map(link => (
              <DropdownMenuItem key={link.href} asChild>
                <Link href={link.href}>
                  <span className="flex items-center">
                    {link.icon}
                    {link.label}
                  </span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  
  // Desktop view: show tab-like buttons
  return (
    <div className="mb-6 flex space-x-2">
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          <Button
            variant={location === link.href ? "default" : "outline"}
            className="flex items-center"
          >
            {link.icon}
            {link.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}