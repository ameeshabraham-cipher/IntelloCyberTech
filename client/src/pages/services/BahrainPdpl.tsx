import { 
  FileText, 
  ShieldCheck, 
  Users, 
  Globe,
  Lock,
  ClipboardList
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const BahrainPdplPage = () => {
  return (
    <ServicePageLayout
      title="Bahrain PDPL Compliance"
      category="GCC Services"
      description="Achieve compliance with the Bahrain Personal Data Protection Law (PDPL) through our comprehensive assessment and implementation services tailored for organizations operating in Bahrain."
      heroIcon={<Globe className="h-8 w-8" />}
      overview="The Bahrain Personal Data Protection Law (PDPL) establishes comprehensive requirements for organizations processing personal data in Bahrain. Our Bahrain PDPL compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping you protect personal data while meeting regulatory obligations in Bahrain."
      steps={[
        {
          title: "Bahrain PDPL Gap Assessment",
          description: "Comprehensive evaluation of your current data protection practices against Bahrain PDPL requirements to identify compliance gaps and priorities."
        },
        {
          title: "Data Mapping & Processing Register",
          description: "Thorough discovery and documentation of all personal data processing activities to establish visibility and meet Bahrain PDPL record-keeping requirements."
        },
        {
          title: "Compliance Program Development",
          description: "Creation of a structured Bahrain PDPL compliance program with clear policies, procedures, and controls tailored to your organization."
        },
        {
          title: "Privacy Governance Framework",
          description: "Establishment of governance structures, including designation of Data Protection Supervisor if required, with clear roles and responsibilities."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Development of efficient processes for managing data subject access requests and other rights under the Bahrain PDPL."
        },
        {
          title: "International Transfer Compliance",
          description: "Implementation of appropriate safeguards for international data transfers in compliance with Bahrain PDPL requirements."
        },
        {
          title: "Staff Training & Awareness",
          description: "Customized training for staff to ensure understanding of Bahrain PDPL requirements and compliance responsibilities."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Achieve and maintain compliance with the Bahrain PDPL, avoiding potential penalties for violations."
        },
        {
          title: "Enhanced Data Governance",
          content: "Establish robust data governance practices that improve how personal data is managed throughout your organization."
        },
        {
          title: "Customer & Partner Trust",
          content: "Demonstrate your commitment to data protection, creating trust with customers and partners in the Bahrain market."
        },
        {
          title: "Informed Data Strategy",
          content: "Leverage personal data more effectively through clear understanding of lawful processing requirements and limitations."
        },
        {
          title: "GCC Regional Alignment",
          content: "Align your Bahrain operations with broader GCC privacy requirements, creating consistency across regional operations."
        }
      ]}
      deliverables={[
        {
          title: "Bahrain PDPL Gap Assessment Report",
          description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps."
        },
        {
          title: "Data Processing Register",
          description: "Comprehensive inventory of personal data processing activities, meeting Bahrain PDPL documentation requirements."
        },
        {
          title: "Privacy Policies & Notices",
          description: "Bahrain PDPL-compliant privacy policies and notices for both internal and external stakeholders, tailored to your specific processing activities."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Documented processes and templates for handling data subject requests in compliance with Bahrain PDPL requirements."
        },
        {
          title: "Data Breach Response Plan",
          description: "Clear procedures for detecting, investigating, and reporting data breaches in accordance with Bahrain PDPL notification requirements."
        },
        {
          title: "Implementation Roadmap",
          description: "Structured action plan with clear timelines and responsibilities for achieving and maintaining Bahrain PDPL compliance."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bahrain Map Outline */}
          <path d="M320 140 L340 150 L350 180 L340 210 L320 240 L300 260 L280 240 L260 210 L250 180 L260 150 L280 140 Z" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Bahrain Flag Colors */}
          <rect x="270" y="160" width="60" height="20" fill="#CE1126" fillOpacity="0.3"/>
          <rect x="270" y="180" width="60" height="20" fill="#FFFFFF" fillOpacity="0.2"/>
          
          {/* Data Protection Elements */}
          <circle cx="300" cy="200" r="25" fill="#CE1126" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
          
          {/* Key Compliance Areas */}
          <circle cx="260" cy="180" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="260" y="183" textAnchor="middle" fontSize="6" fill="#00E5FF">Processing</text>
          
          <circle cx="340" cy="180" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="340" y="183" textAnchor="middle" fontSize="6" fill="#00E5FF">Transfers</text>
          
          <circle cx="260" cy="220" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="260" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Rights</text>
          
          <circle cx="340" cy="220" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="340" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Security</text>
          
          <circle cx="300" cy="240" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="243" textAnchor="middle" fontSize="6" fill="#00E5FF">DPS</text>
          
          {/* Connected Elements */}
          <rect x="180" y="150" width="50" height="30" rx="5" fill="#0A1024" stroke="#CE1126" strokeWidth="1.5"/>
          <text x="205" y="170" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Controller</text>
          
          <rect x="180" y="220" width="50" height="30" rx="5" fill="#0A1024" stroke="#CE1126" strokeWidth="1.5"/>
          <text x="205" y="240" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Processor</text>
          
          <rect x="370" y="180" width="60" height="40" rx="5" fill="#0A1024" stroke="#CE1126" strokeWidth="1.5"/>
          <text x="400" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">PDPD Authority</text>
          <text x="400" y="212" textAnchor="middle" fontSize="6" fill="#00E5FF">Bahrain</text>
          
          {/* Connection Lines */}
          <line x1="230" y1="165" x2="260" y2="180" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="230" y1="235" x2="260" y2="220" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="340" y1="180" x2="370" y2="190" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="340" y1="220" x2="370" y2="210" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Elements */}
          <circle cx="245" cy="173" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="230;260" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="165;180" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="245" cy="227" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="230;260" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="235;220" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="355" cy="185" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="340;370" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="180;190" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="355" cy="215" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="340;370" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="220;210" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* PDPL Shield Glow */}
          <circle cx="300" cy="200" r="30" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="r" values="30;35;30" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "UAE PDPL Compliance",
          link: "/services/uae-pdpl"
        },
        {
          title: "KSA PDPL Compliance",
          link: "/services/ksa-pdpl"
        },
        {
          title: "Data Privacy Framework",
          link: "/services/data-privacy"
        }
      ]}
    />
  );
};

export default BahrainPdplPage;