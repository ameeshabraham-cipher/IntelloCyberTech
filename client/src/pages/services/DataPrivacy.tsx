import { 
  Lock, 
  UserCheck, 
  ShieldCheck, 
  FileText,
  Globe,
  Database
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const DataPrivacyPage = () => {
  return (
    <ServicePageLayout
      title="Data Privacy Consultation"
      category="Cybersecurity Solutions"
      description="Navigate complex data privacy regulations and implement effective privacy practices with our comprehensive data privacy consultation services."
      heroIcon={<Lock className="h-8 w-8" />}
      overview="Our Data Privacy Consultation services help organizations establish robust privacy programs that protect personal data while enabling business objectives. From regulatory compliance to privacy by design implementation, we provide expert guidance on navigating the complex landscape of global privacy regulations, implementing effective privacy controls, and building a privacy-conscious organizational culture."
      steps={[
        {
          title: "Privacy Posture Assessment",
          description: "Comprehensive evaluation of your current privacy practices, data handling, and compliance status to identify gaps and priorities."
        },
        {
          title: "Regulatory Analysis & Applicability",
          description: "Determination of applicable privacy regulations based on your business operations, data types, and geographic footprint."
        },
        {
          title: "Data Mapping & Inventory",
          description: "Thorough mapping of personal data flows throughout your organization, including collection, processing, sharing, and retention practices."
        },
        {
          title: "Privacy Program Development",
          description: "Design and implementation of a structured privacy program with appropriate policies, procedures, and governance mechanisms."
        },
        {
          title: "Privacy Impact Assessment Framework",
          description: "Establishment of methodologies and tools for assessing privacy risks associated with new initiatives, products, and data processing activities."
        },
        {
          title: "Vendor Privacy Management",
          description: "Development of processes to assess, manage, and monitor third-party privacy practices for vendors that access or process personal data."
        },
        {
          title: "Privacy Training & Awareness",
          description: "Creation of tailored privacy training and awareness materials to build a privacy-conscious organizational culture."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Meet requirements across multiple privacy regulations, including GDPR, CCPA/CPRA, HIPAA, and emerging regional privacy laws."
        },
        {
          title: "Risk Reduction",
          content: "Minimize the risk of privacy incidents, data breaches, regulatory penalties, and reputation damage through proactive privacy management."
        },
        {
          title: "Customer Trust",
          content: "Build customer confidence by demonstrating commitment to responsible data handling and respect for privacy rights."
        },
        {
          title: "Operational Efficiency",
          content: "Implement streamlined processes for managing privacy requirements, including data subject requests and consent management."
        },
        {
          title: "Strategic Data Utilization",
          content: "Balance privacy requirements with business objectives to enable responsible innovation and data-driven initiatives."
        }
      ]}
      deliverables={[
        {
          title: "Privacy Assessment Report",
          description: "Detailed analysis of your current privacy posture with prioritized recommendations for addressing identified gaps."
        },
        {
          title: "Data Inventory & Flow Maps",
          description: "Comprehensive documentation of personal data holdings, processing activities, and data flows throughout your organization."
        },
        {
          title: "Privacy Policies & Notices",
          description: "Clearly written, compliant privacy policies and notices for both external audiences and internal staff guidance."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Documented processes and templates for handling data subject requests efficiently and in compliance with regulatory timeframes."
        },
        {
          title: "Privacy Impact Assessment Templates",
          description: "Structured methodology and documentation templates for assessing privacy implications of new initiatives and technologies."
        },
        {
          title: "Privacy Program Roadmap",
          description: "Strategic implementation plan with clear timelines, responsibilities, and milestones for privacy program maturity."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Privacy Shield */}
          <path d="M300 100 Q360 120 360 190 Q360 260 300 300 Q240 260 240 190 Q240 120 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Lock Symbol */}
          <rect x="280" y="170" width="40" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="300" cy="180" r="8" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <line x1="300" y1="180" x2="300" y2="195" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Data Subject */}
          <circle cx="170" cy="180" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <circle cx="170" cy="165" r="8" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <path d="M155 180 Q170 195 185 180" stroke="#00B2A9" strokeWidth="1" fill="none"/>
          <text x="170" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">Data Subject</text>
          
          {/* Connected Elements */}
          <rect x="150" y="240" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="185" y="260" textAnchor="middle" fontSize="10" fill="#00E5FF">Rights</text>
          
          <rect x="150" y="280" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="185" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Consent</text>
          
          <rect x="380" y="240" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="415" y="260" textAnchor="middle" fontSize="10" fill="#00E5FF">Processing</text>
          
          <rect x="380" y="280" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="415" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Transfers</text>
          
          {/* Regulation Globes */}
          <circle cx="430" cy="160" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="430" y="165" textAnchor="middle" fontSize="10" fill="#00E5FF">GDPR</text>
          
          <circle cx="470" cy="190" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="470" y="195" textAnchor="middle" fontSize="10" fill="#00E5FF">CCPA</text>
          
          <circle cx="430" cy="220" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="430" y="225" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
          
          {/* Connection Lines */}
          <line x1="195" y1="180" x2="240" y2="180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="185" y1="240" x2="240" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="185" y1="280" x2="240" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="380" y1="255" x2="360" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="380" y1="295" x2="350" y2="250" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="430" y1="180" x2="360" y2="180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="450" y1="190" x2="360" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="430" y1="200" x2="360" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Data Flow */}
          <circle cx="300" cy="140" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="144" textAnchor="middle" fontSize="9" fill="#00E5FF">Collection</text>
          
          <circle cx="330" cy="180" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="330" y="184" textAnchor="middle" fontSize="9" fill="#00E5FF">Processing</text>
          
          <circle cx="300" cy="220" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="224" textAnchor="middle" fontSize="9" fill="#00E5FF">Storage</text>
          
          <circle cx="270" cy="180" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="270" y="184" textAnchor="middle" fontSize="9" fill="#00E5FF">Sharing</text>
          
          <path d="M300 155 L330 165 L300 205 L270 165 Z" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Elements */}
          <circle cx="218" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="195;240" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="213" cy="240" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="185;240" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="240;210" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="415" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="430;360" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Title */}
          <text x="300" y="85" textAnchor="middle" fontSize="16" fill="#00E5FF">Data Privacy</text>
          
          {/* Shield Glow */}
          <path d="M300 100 Q360 120 360 190 Q360 260 300 300 Q240 260 240 190 Q240 120 300 100" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      relatedServices={[
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        },
        {
          title: "UAE PDPL Compliance",
          link: "/services/uae-pdpl"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        }
      ]}
    />
  );
};

export default DataPrivacyPage;