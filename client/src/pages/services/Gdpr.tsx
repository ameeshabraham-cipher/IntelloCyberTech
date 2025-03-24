import { 
  UserCheck, 
  FileText, 
  Lock, 
  ClipboardList,
  Scale,
  AlertTriangle
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const GdprPage = () => {
  return (
    <ServicePageLayout
      title="GDPR Compliance"
      category="GRC Services"
      description="Navigate the complexities of the General Data Protection Regulation (GDPR) with our comprehensive compliance services tailored to your organization."
      heroIcon={<UserCheck className="h-8 w-8" />}
      overview="The General Data Protection Regulation (GDPR) establishes strict requirements for how organizations collect, process, and protect personal data of EU residents. Our GDPR compliance service provides a structured approach to implementing GDPR requirements, reducing compliance risk while establishing robust privacy practices that build trust with your customers and stakeholders."
      steps={[
        {
          title: "Data Mapping & Processing Inventory",
          description: "Comprehensive discovery and documentation of all personal data processing activities to establish visibility across your organization."
        },
        {
          title: "Gap Assessment",
          description: "Thorough evaluation of your current privacy practices against GDPR requirements to identify compliance gaps and prioritize remediation."
        },
        {
          title: "Implementation Roadmap",
          description: "Development of a clear, prioritized action plan to address identified gaps and establish a timeline for achieving compliance."
        },
        {
          title: "Privacy Program Development",
          description: "Design and implementation of key privacy program elements, including policies, procedures, and governance structures."
        },
        {
          title: "Data Subject Rights Process",
          description: "Establishment of efficient processes for managing data subject access requests, deletions, and other rights under GDPR."
        },
        {
          title: "Privacy Impact Assessment Framework",
          description: "Implementation of Data Protection Impact Assessment (DPIA) methodology and tools to evaluate privacy risks for high-risk processing."
        },
        {
          title: "Vendor Management Program",
          description: "Development of processes to assess, onboard, and monitor data processors to ensure they meet GDPR requirements."
        }
      ]}
      benefits={[
        {
          title: "Reduced Compliance Risk",
          content: "Minimize the risk of non-compliance penalties by implementing structured privacy controls aligned with GDPR requirements."
        },
        {
          title: "Enhanced Customer Trust",
          content: "Demonstrate your commitment to privacy protection, building trust with your customers and strengthening your reputation in the market."
        },
        {
          title: "Data Processing Transparency",
          content: "Gain comprehensive visibility into your data processing activities, enabling better decision-making and control over personal data."
        },
        {
          title: "Improved Data Management",
          content: "Enhance how you collect, store, and process data across your organization, leading to more efficient operations and reduced risk."
        },
        {
          title: "Global Privacy Readiness",
          content: "Establish privacy practices that not only meet GDPR requirements but also provide a foundation for compliance with emerging privacy regulations worldwide."
        }
      ]}
      deliverables={[
        {
          title: "Data Processing Inventory",
          description: "Comprehensive documentation of all personal data processing activities, including purpose, data categories, recipients, and retention periods."
        },
        {
          title: "GDPR Gap Assessment Report",
          description: "Detailed analysis of compliance gaps across key GDPR requirements with prioritized recommendations for remediation."
        },
        {
          title: "Privacy Policies & Notices",
          description: "Clear, compliant privacy policies and notices for both external audiences (customers, website visitors) and internal staff."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Documented processes and templates for handling data subject requests efficiently and within required timeframes."
        },
        {
          title: "Data Protection Impact Assessment Template",
          description: "Structured DPIA methodology and documentation templates for assessing high-risk processing activities."
        },
        {
          title: "Breach Notification Process",
          description: "Clear procedures for detecting, investigating, and reporting data breaches in compliance with GDPR's 72-hour notification requirement."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Data Protection Shield */}
          <path d="M300 80 Q370 110 370 190 Q370 270 300 320 Q230 270 230 190 Q230 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          <path d="M300 100 Q355 125 355 190 Q355 255 300 295 Q245 255 245 190 Q245 125 300 100" fill="none" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Data Subject */}
          <circle cx="180" cy="150" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="180" cy="135" r="8" fill="none" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M165 150 Q180 175 195 150" stroke="#00E5FF" strokeWidth="1" fill="none"/>
          
          {/* Controller */}
          <rect x="275" cy="170" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="195" textAnchor="middle" fontSize="10" fill="#00E5FF">Controller</text>
          
          {/* Processor */}
          <rect x="275" cy="230" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">Processor</text>
          
          {/* Supervisory Authority */}
          <rect x="420" cy="190" width="60" height="50" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="450" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Supervisory</text>
          <text x="450" y="222" textAnchor="middle" fontSize="8" fill="#00E5FF">Authority</text>
          
          {/* GDPR Principles */}
          <circle cx="300" cy="125" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="128" textAnchor="middle" fontSize="7" fill="#00E5FF">Lawfulness</text>
          
          <circle cx="335" cy="145" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="335" y="148" textAnchor="middle" fontSize="7" fill="#00E5FF">Purpose</text>
          
          <circle cx="270" cy="145" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="270" y="148" textAnchor="middle" fontSize="8" fill="#00E5FF">Minimization</text>
          
          <circle cx="265" cy="200" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="265" y="203" textAnchor="middle" fontSize="7" fill="#00E5FF">Accuracy</text>
          
          <circle cx="335" cy="200" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="335" y="203" textAnchor="middle" fontSize="7" fill="#00E5FF">Storage</text>
          
          <circle cx="300" cy="270" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="273" textAnchor="middle" fontSize="7" fill="#00E5FF">Integrity</text>
          
          {/* Connections */}
          <path d="M205 150 L270 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M180 175 L180 290 L270 290" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M330 190 L420 190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M330 250 L380 250 L380 240 L420 240" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Rights Indicators */}
          <rect x="150" y="220" width="60" height="100" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="235" textAnchor="middle" fontSize="8" fill="#00E5FF">Rights</text>
          <line x1="155" y1="240" x2="205" y2="240" stroke="#00E5FF" strokeWidth="0.5"/>
          <text x="180" y="255" textAnchor="middle" fontSize="7" fill="#00E5FF">Access</text>
          <text x="180" y="270" textAnchor="middle" fontSize="7" fill="#00E5FF">Rectification</text>
          <text x="180" y="285" textAnchor="middle" fontSize="7" fill="#00E5FF">Erasure</text>
          <text x="180" y="300" textAnchor="middle" fontSize="7" fill="#00E5FF">Portability</text>
          <text x="180" y="315" textAnchor="middle" fontSize="7" fill="#00E5FF">Objection</text>
          
          {/* Animated Elements */}
          <circle cx="230" cy="150" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="205;270" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="180" cy="220" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="175;220" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="190" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="330;420" dur="2.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "SOC 2 Compliance",
          link: "/services/soc2"
        },
        {
          title: "UAE Personal Data Protection Law",
          link: "/services/uae-pdpl"
        }
      ]}
    />
  );
};

export default GdprPage;