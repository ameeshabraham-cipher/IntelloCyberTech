import { Switch, Route, useLocation } from "wouter";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Solutions from "@/pages/Solutions";
import Assessment from "@/pages/Assessment";
import Contact from "@/pages/Contact";
import Insights from "@/pages/Insights";
import InsightPost from "@/pages/InsightPost";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/NavbarModern";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CalendlyFloatingButton from "@/components/CalendlyFloatingButton";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

// Lazy imports for all service and solution pages will be added here

function Router() {
  const [location] = useLocation();
  
  // Organization structured data for search engines
  const organizationData = {
    name: "Intello Cyber Technologies",
    url: "https://intellome.com",
    logo: "https://intellome.com/images/intello-new-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971 55 355 6787",
      email: "info@intellome.com",
      contactType: "customer service"
    },
    sameAs: [
      "https://www.linkedin.com/company/intellocyber",
      "https://twitter.com/intellocyber"
    ],
    description: "Leading provider of Cybersecurity, GRC, and IT Managed Services, specializing in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions."
  };
  
  // Website structured data for search engines
  const websiteData = {
    name: "Intello Cyber Technologies",
    url: "https://intellome.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://intellome.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  return (
    <div className="relative">
      {/* Global SEO component that updates meta tags based on current route */}
      <SEO />
      
      {/* JSON-LD structured data for search engines */}
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="WebSite" data={websiteData} />
      
      {/* ScrollToTop component will automatically scroll to top on route change */}
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton position="bottom-right" />
      <CalendlyFloatingButton url="https://calendly.com/ameesh-intellome" position="bottom-left" />
      <main>
        <Switch>
          {/* Main Pages */}
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/contact" component={Contact} />
          <Route path="/insights" component={Insights} />
          <Route path="/insights/:slug" component={InsightPost} />
          
          {/* Special Routes - Placeholders until we implement lazy loading */}
          <Route path="/services/:serviceName">
            {(params) => (
              <div className="min-h-screen pt-24 pb-20">
                <div className="container mx-auto px-4">
                  <div className="bg-card/50 p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                    <h1 className="text-3xl font-bold mb-4">Service: {params.serviceName}</h1>
                    <p className="text-muted-foreground mb-6">
                      This is a placeholder for the {params.serviceName} service page.
                    </p>
                    <p>In the complete implementation, this would dynamically load the appropriate service component.</p>
                  </div>
                </div>
              </div>
            )}
          </Route>
          
          <Route path="/solutions/:solutionName">
            {(params) => (
              <div className="min-h-screen pt-24 pb-20">
                <div className="container mx-auto px-4">
                  <div className="bg-card/50 p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                    <h1 className="text-3xl font-bold mb-4">Solution: {params.solutionName}</h1>
                    <p className="text-muted-foreground mb-6">
                      This is a placeholder for the {params.solutionName} solution page.
                    </p>
                    <p>In the complete implementation, this would dynamically load the appropriate solution component.</p>
                  </div>
                </div>
              </div>
            )}
          </Route>
          
          <Route path="/industries/:industryName">
            {(params) => (
              <div className="min-h-screen pt-24 pb-20">
                <div className="container mx-auto px-4">
                  <div className="bg-card/50 p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                    <h1 className="text-3xl font-bold mb-4">Industry: {params.industryName}</h1>
                    <p className="text-muted-foreground mb-6">
                      This is a placeholder for the {params.industryName} industry page.
                    </p>
                    <p>In the complete implementation, this would dynamically load the appropriate industry component.</p>
                  </div>
                </div>
              </div>
            )}
          </Route>
          
          {/* Admin Pages (Disabled in static site version) */}
          <Route path="/admin">
            {() => (
              <div className="min-h-screen pt-24 pb-20">
                <div className="container mx-auto px-4">
                  <div className="bg-card/50 p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                    <p className="text-muted-foreground mb-6">This feature is not available in the static website version.</p>
                    <p>The admin dashboard requires backend functionality that has been disabled in this frontend-only version.</p>
                  </div>
                </div>
              </div>
            )}
          </Route>
          
          {/* 404 Page */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// Initialize dark mode on app load
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
  document.documentElement.setAttribute('data-theme', 'dark');
}

function App() {
  return (
    <Router />
  );
}

export default App;
