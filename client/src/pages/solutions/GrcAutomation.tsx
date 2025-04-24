import { 
  LayoutGrid, 
  FileText, 
  BarChart2, 
  Workflow, 
  Bell,
  Users
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const GrcAutomationPage = () => {
  // Add schema.org structured data
  const solutionSchema = {
    name: "GRC Automation Platform for UAE Organizations",
    description: "Streamline Governance, Risk, and Compliance processes with our UAE-focused GRC automation platform designed for Dubai organizations and regulatory requirements.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    applicationCategory: "Business Software",
    operatingSystem: "Cloud-based",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates"
      }
    }
  };

  // FAQ items for GRC Automation
  const faqItems = [
    {
      question: "How does your GRC automation platform address UAE regulatory requirements?",
      answer: "Our GRC automation platform is specifically tailored for UAE regulatory frameworks including UAE Information Assurance Regulation, NESA standards, UAE PDPL, Central Bank regulations, and DFSA requirements. We maintain a continuously updated UAE compliance library that tracks regulatory changes across all major UAE federal and emirate-level authorities."
    },
    {
      question: "Can your GRC platform support both English and Arabic interfaces?",
      answer: "Yes, our GRC platform fully supports bilingual operations with both English and Arabic user interfaces. All reports, dashboards, and policy documentation can be generated in both languages to meet UAE government requirements and multinational team needs."
    },
    {
      question: "How does your solution help with UAE-specific audit processes?",
      answer: "Our platform includes specialized modules for UAE regulatory audits with pre-configured templates for UAE IA compliance, NESA assessments, Central Bank examinations, and other local regulatory requirements. The system maintains audit trails that satisfy UAE evidentiary standards and generates regulator-ready reports."
    },
    {
      question: "What implementation timeframe should UAE organizations expect?",
      answer: "For UAE organizations, typical implementation timeframes range from 4-12 weeks depending on organization size and complexity. Our Dubai-based implementation team handles the entire process including UAE compliance framework configuration, policy template customization, and integration with existing systems."
    },
    {
      question: "How do you ensure data residency compliance for UAE organizations?",
      answer: "We offer flexible deployment options including UAE-based cloud hosting through local data centers or on-premises deployment to meet data residency requirements. Our solution complies with UAE data protection laws and provides appropriate controls for cross-border data transfers when needed."
    }
  ];

  return (
    <>
      <StructuredData type="SoftwareApplication" data={solutionSchema} />
      <SocialMeta
        title="GRC Automation Platform Dubai | UAE Compliance Management Solutions"
        description="Streamline Governance, Risk, and Compliance processes with our UAE-tailored GRC automation platform designed for Dubai organizations and regulatory frameworks."
        url="/solutions/grc-automation"
        type="website"
      />
      <SolutionPageLayout
        title="GRC Automation Platform Dubai | UAE Compliance Management"
        category="AI Solutions for UAE Organizations"
        description="Streamline your Governance, Risk, and Compliance processes with our UAE-focused automation platform designed to simplify complex GRC activities across UAE regulatory frameworks."
        heroIcon={<LayoutGrid className="h-8 w-8" />}
        problem="UAE organizations face increasingly complex governance, risk, and compliance requirements across multiple regulations and standards including UAE IA, NESA, UAE PDPL, Central Bank regulations, and international frameworks. Managing these processes manually leads to siloed operations, duplicated efforts, inconsistent data, and inefficient resource allocation, increasing both cost and risk exposure while creating challenges for UAE regulatory reporting."
        solution="Our Dubai-based GRC Automation Platform provides a unified system to manage governance, risk, and compliance activities across your UAE organization. By centralizing and automating key GRC processes with specific support for UAE regulatory frameworks, our platform eliminates manual work, ensures compliance consistency, provides real-time visibility into your compliance posture, and enables better decision-making while significantly reducing compliance costs for UAE businesses."
        features={[
          {
            icon: <LayoutGrid className="h-6 w-6" />,
            title: "UAE-Focused GRC Framework",
            description: "A single integrated platform for managing all aspects of governance, risk, and compliance in the UAE context, with built-in support for UAE Information Assurance Regulation, NESA, UAE PDPL, and sector-specific regulatory requirements."
          },
          {
            icon: <FileText className="h-6 w-6" />,
            title: "UAE-Compliant Policy Management",
            description: "Streamlined creation, review, approval, and distribution of policies aligned with UAE regulatory expectations, with automated version control, bilingual support (Arabic/English), and attestation tracking that satisfies UAE audit requirements."
          },
          {
            icon: <BarChart2 className="h-6 w-6" />,
            title: "UAE Risk Management Framework",
            description: "Comprehensive risk assessment, monitoring, and mitigation capabilities tailored to UAE business environment with customizable risk registers and scoring methodologies aligned with UAE risk management standards."
          },
          {
            icon: <Workflow className="h-6 w-6" />,
            title: "UAE Regulatory Workflow Automation",
            description: "Configurable workflows that automate routine GRC tasks, approvals, notifications, and escalations to ensure timely completion of compliance activities across UAE and international regulatory requirements."
          },
          {
            icon: <Bell className="h-6 w-6" />,
            title: "UAE Regulatory Intelligence",
            description: "Proactive alerting system with UAE regulatory intelligence that notifies stakeholders of regulatory changes, pending tasks, risks, and compliance issues based on predefined thresholds and UAE compliance deadlines."
          },
          {
            icon: <Users className="h-6 w-6" />,
            title: "UAE-Compliant Access Control",
            description: "Granular access management ensuring appropriate separation of duties and data access based on user roles and responsibilities, with specific controls to satisfy UAE data protection requirements and regulatory expectations."
          }
        ]}
        benefits={[
          {
            title: "60% Reduction in UAE Compliance Costs",
            description: "Significantly reduce the resources required for GRC activities in the UAE market through automation, centralization, elimination of duplicated efforts, and streamlined regulatory reporting processes."
          },
          {
            title: "Enhanced UAE Regulatory Reporting",
            description: "Generate regulator-ready reports for UAE authorities with comprehensive dashboards that provide a holistic view of your compliance posture across UAE regulatory frameworks and international standards."
          },
          {
            title: "UAE-Optimized Operational Efficiency",
            description: "Streamline compliance processes, eliminate redundancies, and free up valuable resources to focus on strategic initiatives rather than routine compliance tasks, with specific optimizations for UAE regulatory requirements."
          },
          {
            title: "Reduced UAE Regulatory Risk",
            description: "Identify, assess, and mitigate compliance risks more effectively through continuous monitoring of UAE regulatory requirements and automated compliance assessment processes designed for the UAE market."
          },
          {
            title: "UAE Multi-Framework Compliance",
            description: "Manage compliance across multiple UAE regulatory frameworks simultaneously with unified controls, shared evidence, and harmonized assessments that reduce duplication and ensure consistent compliance approaches."
          },
          {
            title: "Dubai-Based Implementation Support",
            description: "Receive dedicated implementation support from our Dubai-based team who understand the nuances of UAE regulatory requirements and can tailor the solution to your specific compliance needs in the region."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Central GRC Platform Hub */}
            <rect x="250" y="150" width="100" height="100" rx="8" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            <text x="300" y="205" textAnchor="middle" fontSize="14" fill="#00E5FF">GRC</text>
            
            {/* Connected Modules */}
            <rect x="100" y="100" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="140" y="135" textAnchor="middle" fontSize="10" fill="#00E5FF">Governance</text>
            
            <rect x="100" y="240" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="140" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk</text>
            
            <rect x="420" y="100" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="460" y="135" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance</text>
            
            <rect x="420" y="240" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="460" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Reporting</text>
            
            {/* UAE Element */}
            <rect x="300" y="50" width="80" height="40" rx="5" fill="#0A1024" stroke="#eb3443" strokeWidth="1.5"/>
            <text x="340" y="70" textAnchor="middle" fontSize="9" fill="#FFFFFF">UAE</text>
            <text x="340" y="82" textAnchor="middle" fontSize="7" fill="#FFFFFF">Regulations</text>
            
            <line x1="300" y1="150" x2="320" y2="90" stroke="#eb3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Connecting Lines */}
            <path d="M180 130 L250 180" stroke="#00B2A9" strokeWidth="1.5"/>
            <path d="M180 270 L250 220" stroke="#00B2A9" strokeWidth="1.5"/>
            <path d="M420 130 L350 180" stroke="#00B2A9" strokeWidth="1.5"/>
            <path d="M420 270 L350 220" stroke="#00B2A9" strokeWidth="1.5"/>
            
            {/* Data Flow Animations */}
            <circle cx="200" cy="155" r="4" fill="#00E5FF">
              <animate attributeName="cx" from="180" to="250" dur="2s" repeatCount="indefinite" />
              <animate attributeName="cy" from="130" to="180" dur="2s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="200" cy="245" r="4" fill="#00E5FF">
              <animate attributeName="cx" from="180" to="250" dur="3s" repeatCount="indefinite" />
              <animate attributeName="cy" from="270" to="220" dur="3s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="400" cy="155" r="4" fill="#00E5FF">
              <animate attributeName="cx" from="420" to="350" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="cy" from="130" to="180" dur="2.5s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="400" cy="245" r="4" fill="#00E5FF">
              <animate attributeName="cx" from="420" to="350" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="cy" from="270" to="220" dur="3.5s" repeatCount="indefinite" />
            </circle>
            
            {/* Orbital Ring */}
            <circle cx="300" cy="200" r="120" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3" strokeOpacity="0.5"/>
            
            {/* UAE Regulations Element */}
            <rect x="480" y="170" width="70" height="60" rx="5" fill="#0A1024" stroke="#eb3443" strokeWidth="1.5"/>
            <text x="515" y="190" textAnchor="middle" fontSize="8" fill="#FFFFFF">UAE IA</text>
            <text x="515" y="202" textAnchor="middle" fontSize="8" fill="#FFFFFF">NESA</text>
            <text x="515" y="214" textAnchor="middle" fontSize="8" fill="#FFFFFF">UAE PDPL</text>
            
            <line x1="420" y1="200" x2="480" y2="200" stroke="#eb3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
          </svg>
        }
        relatedSolutions={[
          {
            title: "AI-Driven Compliance Tools",
            link: "/solutions/ai-compliance"
          },
          {
            title: "Risk Management Tools",
            link: "/solutions/risk-management"
          },
          {
            title: "Vulnerability Management",
            link: "/solutions/vulnerability-management"
          },
          {
            title: "SOC 2 Compliance",
            link: "/services/soc2"
          },
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="GRC Automation Platform FAQs"
        subtitle="Common questions about our GRC solutions for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default GrcAutomationPage;