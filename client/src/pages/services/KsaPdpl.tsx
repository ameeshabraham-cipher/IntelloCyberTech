import { 
  FileText, 
  ShieldCheck, 
  Globe,
  Lock,
  ClipboardList,
  Server,
  UserCog
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const KsaPdplPage = () => {
  return (
    <ServicePageLayout
      title="KSA PDPL Compliance"
      category="GCC Services"
      description="Achieve compliance with the Kingdom of Saudi Arabia Personal Data Protection Law (PDPL) through our comprehensive assessment and implementation services tailored for organizations operating in KSA."
      heroIcon={<Globe className="h-8 w-8" />}
      overview="The Kingdom of Saudi Arabia Personal Data Protection Law (PDPL) establishes comprehensive requirements for organizations processing personal data in KSA. Our KSA PDPL compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping you protect personal data while meeting regulatory obligations in Saudi Arabia."
      steps={[
        {
          title: "KSA PDPL Gap Assessment",
          description: "Comprehensive evaluation of your current data protection practices against KSA PDPL requirements to identify compliance gaps and priorities."
        },
        {
          title: "Data Mapping & Processing Register",
          description: "Thorough discovery and documentation of all personal data processing activities to establish visibility and meet KSA PDPL record-keeping requirements."
        },
        {
          title: "Compliance Program Development",
          description: "Creation of a structured KSA PDPL compliance program with clear policies, procedures, and controls tailored to your organization."
        },
        {
          title: "Privacy Governance Framework",
          description: "Establishment of governance structures, including appointment of Data Protection Officer if required, with clear roles and responsibilities."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Development of efficient processes for managing data subject access requests and other rights under the KSA PDPL."
        },
        {
          title: "Cross-Border Transfer Mechanisms",
          description: "Implementation of appropriate safeguards for international data transfers in compliance with KSA PDPL requirements."
        },
        {
          title: "Staff Training & Awareness",
          description: "Customized training for staff to ensure understanding of KSA PDPL requirements and compliance responsibilities."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Achieve and maintain compliance with the KSA PDPL, avoiding potential penalties for violations which can reach up to 5 million SAR."
        },
        {
          title: "Enhanced Data Governance",
          content: "Establish robust data governance practices that improve how personal data is managed throughout your organization."
        },
        {
          title: "Customer & Partner Trust",
          content: "Demonstrate your commitment to data protection, creating trust with customers and partners in the Saudi Arabian market."
        },
        {
          title: "Informed Data Strategy",
          content: "Leverage personal data more effectively through clear understanding of lawful processing requirements and limitations."
        },
        {
          title: "Regional Market Access",
          content: "Meet requirements necessary for entering or maintaining presence in the Saudi Arabian market, one of the region's largest economies."
        }
      ]}
      deliverables={[
        {
          title: "KSA PDPL Gap Assessment Report",
          description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps."
        },
        {
          title: "Data Processing Register",
          description: "Comprehensive inventory of personal data processing activities, meeting KSA PDPL documentation requirements."
        },
        {
          title: "Privacy Policies & Notices",
          description: "KSA PDPL-compliant privacy policies and notices for both internal and external stakeholders, in Arabic and English as required."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Documented processes and templates for handling data subject requests in compliance with KSA PDPL requirements."
        },
        {
          title: "Data Breach Response Plan",
          description: "Clear procedures for detecting, investigating, and reporting data breaches in accordance with KSA PDPL 72-hour notification requirement."
        },
        {
          title: "Implementation Roadmap",
          description: "Structured action plan with clear timelines and responsibilities for achieving and maintaining KSA PDPL compliance."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* KSA Map Outline */}
          <path d="M290 140 L350 150 L370 180 L350 240 L320 260 L250 250 L230 220 L240 170 L260 150 Z" fill="#0A1024" stroke="#006C35" strokeWidth="2"/>
          
          {/* KSA Flag Colors */}
          <rect x="270" y="170" width="60" height="20" fill="#006C35" fillOpacity="0.3"/>
          <rect x="270" y="190" width="60" height="20" fill="#FFFFFF" fillOpacity="0.1"/>
          
          {/* Data Protection Elements */}
          <circle cx="300" cy="200" r="25" fill="#006C35" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
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
          <text x="300" y="243" textAnchor="middle" fontSize="6" fill="#00E5FF">DPO</text>
          
          {/* Connected Elements */}
          <rect x="180" y="150" width="50" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="205" y="170" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Controller</text>
          
          <rect x="180" y="220" width="50" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="205" y="240" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Processor</text>
          
          <rect x="370" y="180" width="60" height="40" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="400" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">SDAIA</text>
          <text x="400" y="212" textAnchor="middle" fontSize="6" fill="#00E5FF">Regulatory Authority</text>
          
          {/* Connection Lines */}
          <line x1="230" y1="165" x2="260" y2="180" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="230" y1="235" x2="260" y2="220" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="340" y1="180" x2="370" y2="190" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="340" y1="220" x2="370" y2="210" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          
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
          title: "SAMA Compliance",
          link: "/services/sama"
        },
        {
          title: "Saudi Aramco Cybersecurity",
          link: "/services/saudi-aramco"
        },
        {
          title: "Data Privacy Framework",
          link: "/services/data-privacy"
        }
      ]}
    />
  );
};

export default KsaPdplPage;