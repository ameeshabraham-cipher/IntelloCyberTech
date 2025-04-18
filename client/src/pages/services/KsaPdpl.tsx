import { 
  FileText, 
  ShieldCheck, 
  Users, 
  Globe,
  Lock,
  ClipboardList
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const KsaPdplPage = () => {
  return (
    <ServicePageLayout
      title="KSA PDPL Compliance"
      category="GCC Services"
      description="Achieve compliance with the Kingdom of Saudi Arabia Personal Data Protection Law (PDPL) through our comprehensive assessment and implementation services tailored for organizations operating in Saudi Arabia."
      heroIcon={<Globe className="h-8 w-8" />}
      overview="The Saudi Arabia Personal Data Protection Law (PDPL) introduces comprehensive data protection requirements for organizations processing personal data in the Kingdom. Our KSA PDPL compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping you protect personal data while meeting regulatory obligations in Saudi Arabia."
      steps={[
        {
          title: "KSA PDPL Readiness Assessment",
          description: "Comprehensive evaluation of your current data protection practices against KSA PDPL requirements to identify compliance gaps and priorities."
        },
        {
          title: "Data Mapping & Processing Inventory",
          description: "Thorough discovery and documentation of all personal data processing activities to establish visibility and meet KSA PDPL record-keeping requirements."
        },
        {
          title: "Compliance Program Development",
          description: "Creation of a structured KSA PDPL compliance program with clear policies, procedures, and controls tailored to your organization."
        },
        {
          title: "Privacy Governance Framework",
          description: "Establishment of governance structures, including designation of Data Protection Officer if required, with clear roles and responsibilities."
        },
        {
          title: "Data Subject Rights Implementation",
          description: "Development of efficient processes for managing data subject access requests and other rights under the KSA PDPL."
        },
        {
          title: "Cross-Border Transfer Mechanisms",
          description: "Implementation of appropriate safeguards for international data transfers in compliance with KSA PDPL requirements."
        },
        {
          title: "Training & Awareness Program",
          description: "Customized training for staff to ensure understanding of KSA PDPL requirements and compliance responsibilities."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Achieve and maintain compliance with the KSA PDPL, avoiding potential penalties for violations."
        },
        {
          title: "Enhanced Data Governance",
          content: "Establish robust data governance practices that improve how personal data is managed throughout your organization."
        },
        {
          title: "Competitive Advantage",
          content: "Demonstrate your commitment to data protection, creating trust with customers and partners in the Saudi market."
        },
        {
          title: "Strategic Data Utilization",
          content: "Leverage personal data more effectively through clear understanding of lawful processing requirements and limitations."
        },
        {
          title: "Regional Compliance Harmony",
          content: "Align your Saudi operations with regional privacy requirements, creating consistency across GCC operations."
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
          description: "KSA PDPL-compliant privacy policies and notices for both internal and external stakeholders, tailored to your specific processing activities."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Documented processes and templates for handling data subject requests in compliance with KSA PDPL requirements."
        },
        {
          title: "Data Breach Response Plan",
          description: "Clear procedures for detecting, investigating, and reporting data breaches in accordance with KSA PDPL notification requirements."
        },
        {
          title: "Implementation Roadmap",
          description: "Structured action plan with clear timelines and responsibilities for achieving and maintaining KSA PDPL compliance."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Saudi Map Outline */}
          <path d="M300 100 Q400 150 380 200 Q360 250 300 300 Q240 250 220 200 Q200 150 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Saudi Flag Colors */}
          <rect x="270" y="140" width="60" height="30" fill="#006C35" fillOpacity="0.3"/>
          <text x="300" y="160" textAnchor="middle" fontSize="14" fill="#FFFFFF" fillOpacity="0.5">العربية</text>
          
          {/* Data Protection Elements */}
          <circle cx="300" cy="200" r="30" fill="#006C35" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="205" textAnchor="middle" fontSize="12" fill="#00E5FF">PDPL</text>
          
          {/* Key Compliance Areas */}
          <circle cx="250" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="250" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Processing</text>
          
          <circle cx="350" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="350" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Transfers</text>
          
          <circle cx="250" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="250" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Rights</text>
          
          <circle cx="350" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="350" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Security</text>
          
          <circle cx="300" cy="250" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="253" textAnchor="middle" fontSize="7" fill="#00E5FF">DPO</text>
          
          {/* Connected Elements */}
          <rect x="150" y="150" width="60" height="40" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="180" y="170" textAnchor="middle" fontSize="9" fill="#00E5FF">Data</text>
          <text x="180" y="182" textAnchor="middle" fontSize="9" fill="#00E5FF">Controller</text>
          
          <rect x="150" y="220" width="60" height="40" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="180" y="240" textAnchor="middle" fontSize="9" fill="#00E5FF">Data</text>
          <text x="180" y="252" textAnchor="middle" fontSize="9" fill="#00E5FF">Processor</text>
          
          <rect x="440" y="180" width="70" height="40" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="475" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">KSA SDAIA</text>
          
          {/* Connection Lines */}
          <line x1="210" y1="170" x2="250" y2="180" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="240" x2="250" y2="220" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="180" x2="440" y2="190" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="220" x2="440" y2="210" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Elements */}
          <circle cx="230" cy="175" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;250" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="170;180" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="230" cy="230" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;250" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="240;220" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="395" cy="185" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="350;440" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="180;190" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="395" cy="215" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="350;440" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="220;210" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* PDPL Shield Glow */}
          <circle cx="300" cy="200" r="35" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="r" values="35;40;35" dur="4s" repeatCount="indefinite"/>
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
          title: "Bahrain PDPL Compliance",
          link: "/services/bahrain-pdpl"
        },
        {
          title: "SAMA Compliance",
          link: "/services/sama"
        }
      ]}
    />
  );
};

export default KsaPdplPage;