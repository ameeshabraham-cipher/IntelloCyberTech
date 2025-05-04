import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import React from "react";

/**
 * SEO-optimized 404 page with helpful navigation options
 * Includes proper meta tags and structured data
 */
export default function NotFound() {
  // Generate some helpful content suggestions based on common pages
  const helpfulSuggestions = [
    { text: "Cybersecurity Services", href: "/services" },
    { text: "GRC Consulting", href: "/services/grc" },
    { text: "Contact Us", href: "/contact" },
    { text: "Security Assessment", href: "/assessment" }
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found | Intello Cyber Technologies</title>
        <meta name="description" content="The page you're looking for couldn't be found. Explore our cybersecurity services, GRC consultancy, or contact us for assistance." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://intellome.com/404" />
      </Helmet>

      <div className="min-h-screen w-full flex items-center justify-center bg-background py-12 px-4">
        <Card className="w-full max-w-lg border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center mb-8">
              <AlertCircle className="h-16 w-16 text-primary mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-2">404 - Page Not Found</h1>
              <p className="text-muted-foreground max-w-md">
                The page you're looking for doesn't exist or has been moved. Please check the URL or try one of the suggestions below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4 text-center">You might be looking for:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {helpfulSuggestions.map((suggestion, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="justify-start" 
                    asChild
                  >
                    <Link href={suggestion.href}>
                      <Search className="mr-2 h-4 w-4" />
                      {suggestion.text}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
