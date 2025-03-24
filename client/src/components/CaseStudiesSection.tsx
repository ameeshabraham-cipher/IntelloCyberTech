import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CaseStudy = {
  industry: string;
  title: string;
  description: string;
  results: string[];
  link: string;
  imageSrc: string;
};

const CaseStudiesSection = () => {
  useScrollReveal();
  
  // Case studies data
  const caseStudies: CaseStudy[] = [
    {
      industry: "Financial Services",
      title: "Leading UAE Bank Achieves ISO 27001 Certification",
      description: "Helped a major financial institution implement ISO 27001 controls and achieve certification in record time while strengthening their overall security posture.",
      results: [
        "90% reduction in security incidents",
        "ISO 27001 certification in 4 months",
        "Streamlined compliance processes"
      ],
      link: "/case-studies/uae-bank-iso27001",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300&q=80"
    },
    {
      industry: "Healthcare",
      title: "Healthcare Provider Secures Patient Data",
      description: "Implemented comprehensive data protection measures for a regional healthcare provider, ensuring HIPAA compliance and enhanced security controls.",
      results: [
        "100% compliance with regulations",
        "Enhanced patient data protection",
        "Automated compliance reporting"
      ],
      link: "/case-studies/healthcare-data-protection",
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300&q=80"
    },
    {
      industry: "E-Commerce",
      title: "E-Commerce Platform Strengthens Security",
      description: "Helped a growing e-commerce business implement robust security measures, PCI-DSS compliance, and threat detection solutions.",
      results: [
        "PCI-DSS compliance achievement",
        "75% reduction in fraud attempts",
        "Enhanced customer trust"
      ],
      link: "/case-studies/ecommerce-security",
      imageSrc: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300&q=80"
    }
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Update slidesPerView based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle slider movement
  const moveSlider = (index: number) => {
    setSlideIndex(index);
    
    if (sliderRef.current) {
      const slideWidth = 100 / slidesPerView;
      sliderRef.current.style.transform = `translateX(-${index * slideWidth}%)`;
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      moveSlider(slideIndex - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(caseStudies.length - slidesPerView, 0);
    if (slideIndex < maxIndex) {
      moveSlider(slideIndex + 1);
    }
  };
  
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
            <span className="text-[hsl(var(--secondary))] font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Real Results</span> for Real Businesses
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our tailored cybersecurity and compliance solutions have helped organizations across industries 
            achieve their security goals.
          </p>
        </div>
        
        {/* Case Studies Slider */}
        <div className="relative overflow-hidden reveal" id="case-studies-container">
          {/* Slider Controls */}
          <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2">
            <button 
              className="bg-card/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center border border-[hsl(var(--secondary))]/20 hover:bg-[hsl(var(--secondary))]/20 transition-all" 
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-[hsl(var(--secondary))] h-5 w-5" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2">
            <button 
              className="bg-card/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center border border-[hsl(var(--secondary))]/20 hover:bg-[hsl(var(--secondary))]/20 transition-all" 
              onClick={handleNext}
              aria-label="Next slide"
            >
              <ChevronRight className="text-[hsl(var(--secondary))] h-5 w-5" />
            </button>
          </div>
          
          {/* Case Studies Slides */}
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ 
              gridTemplateColumns: `repeat(${caseStudies.length}, minmax(0, 1fr))`,
              width: `${(100 * caseStudies.length) / slidesPerView}%`
            }}
          >
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="px-4" 
                style={{ width: `${100 / caseStudies.length}%` }}
              >
                <div className="bg-card rounded-xl overflow-hidden border border-[hsl(var(--secondary))]/10 h-full">
                  {/* Image Area */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={study.imageSrc} 
                      alt={`${study.title} case study`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                      {study.industry}
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-semibold mb-3">{study.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {study.description}
                    </p>
                    
                    {/* Results */}
                    <div className="space-y-3 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <CheckCircle className="text-[hsl(var(--secondary))] h-4 w-4 mr-2" />
                          <p className="text-sm">{result}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={study.link} className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors text-sm">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(caseStudies.length / slidesPerView) }).map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${slideIndex === index ? 'bg-[hsl(var(--secondary))]' : 'bg-card'}`} 
                onClick={() => moveSlider(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link href="/case-studies">
            <Button 
              variant="outline"
              className="bg-transparent border border-[hsl(var(--secondary))]/30 text-white font-medium py-3 px-8 rounded-full hover:bg-[hsl(var(--secondary))]/10 transition-all duration-300"
            >
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
