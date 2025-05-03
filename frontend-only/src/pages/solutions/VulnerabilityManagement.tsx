import React from 'react';
import { Link } from 'wouter';
import { Bot, CheckCircle, Database, Shield } from 'lucide-react';

export default function SolutionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Solution</span> Page
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive solution description goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Content */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Solution Overview</h2>
            <p className="text-lg text-muted-foreground">
              Detailed solution description and benefits.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
