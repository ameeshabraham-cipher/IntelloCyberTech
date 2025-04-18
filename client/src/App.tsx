import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Solutions from "@/pages/Solutions";
import Assessment from "@/pages/Assessment";
import Contact from "@/pages/Contact";
import Insights from "@/pages/Insights";
import InsightPost from "@/pages/InsightPost";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/NavbarModern";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CalendlyFloatingButton from "@/components/CalendlyFloatingButton";
import ScrollToTop from "@/components/ScrollToTop";
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
import FormSubmissionsPage from "@/pages/components/FormSubmissions";
import AssessmentSubmissionsPage from "@/pages/components/AssessmentSubmissions";
import AdminDashboard from "@/pages/components/AdminDashboard";

// Service Pages
// GRC Services
import Iso27001Page from "@/pages/services/Iso27001";
import Iso42001Page from "@/pages/services/Iso42001";
import Soc2Page from "@/pages/services/Soc2";
import GdprPage from "@/pages/services/Gdpr";
import UaePdplPage from "@/pages/services/UaePdpl";
import UaeIaPage from "@/pages/services/UaeIa";
import UaeNesaPage from "@/pages/services/UaeNesa";
import KsaPdplPage from "@/pages/services/KsaPdpl";
import BahrainPdplPage from "@/pages/services/BahrainPdpl";
import SamaPage from "@/pages/services/Sama";
import SaudiAramcoPage from "@/pages/services/SaudiAramco";
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
import CloudSecurityAssessmentPage from "@/pages/services/CloudSecurityAssessment";
import VcisoPage from "@/pages/services/Vciso";
import DataPrivacyPage from "@/pages/services/DataPrivacy";

// Industry Pages
import BfsiPage from "@/pages/industries/Bfsi";
import HealthcarePage from "@/pages/industries/Healthcare";
import GovernmentPage from "@/pages/industries/Government";
import EcommercePage from "@/pages/industries/Ecommerce";
import SmePage from "@/pages/industries/Sme";
import LogisticsPage from "@/pages/industries/Logistics";
import MoneyExchangesPage from "@/pages/industries/MoneyExchanges";
import InsuranceCompaniesPage from "@/pages/industries/InsuranceCompanies";
import ArchitecturalFirmsPage from "@/pages/industries/ArchitecturalFirms";
import TechnologyCompaniesPage from "@/pages/industries/TechnologyCompanies";

function Router() {
  return (
    <div className="relative">
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
          <Route path="/services/ksa-pdpl" component={KsaPdplPage} />
          <Route path="/services/bahrain-pdpl" component={BahrainPdplPage} />
          <Route path="/services/sama" component={SamaPage} />
          <Route path="/services/saudi-aramco" component={SaudiAramcoPage} />
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
          <Route path="/services/cloud-security-assessment" component={CloudSecurityAssessmentPage} />
          <Route path="/services/vciso" component={VcisoPage} />
          <Route path="/services/data-privacy" component={DataPrivacyPage} />
          
          {/* Industry Pages */}
          <Route path="/industries/bfsi" component={BfsiPage} />
          <Route path="/industries/healthcare" component={HealthcarePage} />
          <Route path="/industries/government" component={GovernmentPage} />
          <Route path="/industries/ecommerce" component={EcommercePage} />
          <Route path="/industries/sme" component={SmePage} />
          <Route path="/industries/logistics" component={LogisticsPage} />
          <Route path="/industries/money-exchanges" component={MoneyExchangesPage} />
          <Route path="/industries/insurance-companies" component={InsuranceCompaniesPage} />
          <Route path="/industries/architectural-firms" component={ArchitecturalFirmsPage} />
          <Route path="/industries/technology-companies" component={TechnologyCompaniesPage} />
          
          {/* Component Demo Pages */}
          <Route path="/components/tech-tooltips" component={TooltipDemo} />
          
          {/* Admin Pages */}
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/admin/submissions" component={FormSubmissionsPage} />
          <Route path="/admin/assessment-requests" component={AssessmentSubmissionsPage} />
          
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
