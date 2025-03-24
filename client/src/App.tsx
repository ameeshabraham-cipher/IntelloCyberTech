import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Solution Pages
import AiCompliancePage from "@/pages/solutions/AiCompliance";
import GrcAutomationPage from "@/pages/solutions/GrcAutomation";
import RiskManagementPage from "@/pages/solutions/RiskManagement";
import VulnerabilityManagementPage from "@/pages/solutions/VulnerabilityManagement";
import CybersecurityFrameworksPage from "@/pages/solutions/CybersecurityFrameworks";

// Service Pages
import Iso27001Page from "@/pages/services/Iso27001";
import Soc2Page from "@/pages/services/Soc2";
import GdprPage from "@/pages/services/Gdpr";
import UaePdplPage from "@/pages/services/UaePdpl";
import PenetrationTestingPage from "@/pages/services/PenetrationTesting";
import SecurityAssessmentPage from "@/pages/services/SecurityAssessment";
import CloudSecurityPage from "@/pages/services/CloudSecurity";

function Router() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Switch>
          {/* Main Pages */}
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          
          {/* Solution Pages */}
          <Route path="/solutions/ai-compliance" component={AiCompliancePage} />
          <Route path="/solutions/grc-automation" component={GrcAutomationPage} />
          <Route path="/solutions/risk-management" component={RiskManagementPage} />
          <Route path="/solutions/vulnerability-management" component={VulnerabilityManagementPage} />
          <Route path="/solutions/cybersecurity-frameworks" component={CybersecurityFrameworksPage} />
          
          {/* Service Pages */}
          <Route path="/services/iso27001" component={Iso27001Page} />
          <Route path="/services/soc2" component={Soc2Page} />
          <Route path="/services/gdpr" component={GdprPage} />
          <Route path="/services/uae-pdpl" component={UaePdplPage} />
          <Route path="/services/penetration-testing" component={PenetrationTestingPage} />
          <Route path="/services/security-assessment" component={SecurityAssessmentPage} />
          <Route path="/services/cloud-security" component={CloudSecurityPage} />
          
          {/* 404 Page */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
