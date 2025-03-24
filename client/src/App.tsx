import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/use-theme";
import { ThemeInitializer } from "@/components/ThemeToggle";

// Solution Pages
import AiCompliancePage from "@/pages/solutions/AiCompliance";
import GrcAutomationPage from "@/pages/solutions/GrcAutomation";
import RiskManagementPage from "@/pages/solutions/RiskManagement";
import VulnerabilityManagementPage from "@/pages/solutions/VulnerabilityManagement";
import CybersecurityFrameworksPage from "@/pages/solutions/CybersecurityFrameworks";
import EmailSecurityPage from "@/pages/solutions/EmailSecurity";
import EdrPage from "@/pages/solutions/Edr";
import SiemPage from "@/pages/solutions/Siem";
import DlpPage from "@/pages/solutions/Dlp";

// Component Demo Pages
import TooltipDemo from "@/pages/components/TooltipDemo";

// Service Pages
// GRC Services
import Iso27001Page from "@/pages/services/Iso27001";
import Iso42001Page from "@/pages/services/Iso42001";
import Soc2Page from "@/pages/services/Soc2";
import GdprPage from "@/pages/services/Gdpr";
import UaePdplPage from "@/pages/services/UaePdpl";
import UaeIaPage from "@/pages/services/UaeIa";
import UaeNesaPage from "@/pages/services/UaeNesa";
import PciDssPage from "@/pages/services/PciDss";
import HipaaPage from "@/pages/services/Hipaa";
import InternalAuditPage from "@/pages/services/InternalAudit";
import RiskFrameworksPage from "@/pages/services/RiskFrameworks";
import PolicyDevelopmentPage from "@/pages/services/PolicyDevelopment";

// IT Security & Audit Services
import ItSecurityAuditPage from "@/pages/services/ItSecurityAudit";
import SecurityAssessmentPage from "@/pages/services/SecurityAssessment";
import PenetrationTestingPage from "@/pages/services/PenetrationTesting";
import WebPenTestingPage from "@/pages/services/WebPenTesting";
import NetworkPentestingPage from "@/pages/services/NetworkPentesting";
import VaptPage from "@/pages/services/Vapt";

// Cybersecurity Solutions
import CloudSecurityPage from "@/pages/services/CloudSecurity";
import VcisoPage from "@/pages/services/Vciso";
import DataPrivacyPage from "@/pages/services/DataPrivacy";

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
          <Route path="/solutions/email-security" component={EmailSecurityPage} />
          <Route path="/solutions/edr" component={EdrPage} />
          <Route path="/solutions/siem" component={SiemPage} />
          <Route path="/solutions/dlp" component={DlpPage} />
          
          {/* Service Pages */}
          {/* GRC Services */}
          <Route path="/services/iso27001" component={Iso27001Page} />
          <Route path="/services/iso42001" component={Iso42001Page} />
          <Route path="/services/soc2" component={Soc2Page} />
          <Route path="/services/gdpr" component={GdprPage} />
          <Route path="/services/uae-pdpl" component={UaePdplPage} />
          <Route path="/services/uae-ia" component={UaeIaPage} />
          <Route path="/services/uae-nesa" component={UaeNesaPage} />
          <Route path="/services/pci-dss" component={PciDssPage} />
          <Route path="/services/hipaa" component={HipaaPage} />
          <Route path="/services/internal-audit" component={InternalAuditPage} />
          <Route path="/services/risk-frameworks" component={RiskFrameworksPage} />
          <Route path="/services/policy-development" component={PolicyDevelopmentPage} />
          
          {/* IT Security & Audit Services */}
          <Route path="/services/it-security-audit" component={ItSecurityAuditPage} />
          <Route path="/services/security-assessment" component={SecurityAssessmentPage} />
          <Route path="/services/penetration-testing" component={PenetrationTestingPage} />
          <Route path="/services/web-pen-testing" component={WebPenTestingPage} />
          <Route path="/services/network-pentesting" component={NetworkPentestingPage} />
          <Route path="/services/vapt" component={VaptPage} />
          
          {/* Cybersecurity Solutions */}
          <Route path="/services/cloud-security" component={CloudSecurityPage} />
          <Route path="/services/vciso" component={VcisoPage} />
          <Route path="/services/data-privacy" component={DataPrivacyPage} />
          
          {/* Component Demo Pages */}
          <Route path="/components/tech-tooltips" component={TooltipDemo} />
          
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
    <>
      <ThemeInitializer />
      <ThemeProvider>
        <Router />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
