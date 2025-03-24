import { 
  Shield, 
  LockKeyhole, 
  Server, 
  Monitor,
  Settings,
  FileText
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const UaeNesaPage = () => {
  return (
    <ServicePageLayout
      title="UAE NESA Compliance"
      category="GRC Services"
      description="Meet the requirements of the UAE National Electronic Security Authority (NESA) with our comprehensive compliance and implementation services."
      heroIcon={<LockKeyhole className="h-8 w-8" />}
      overview="The UAE National Electronic Security Authority (NESA) has established the Information Assurance Standards to secure UAE's critical information infrastructure. Our NESA compliance services provide a structured approach to implementing these standards, helping government entities and critical infrastructure operators meet regulatory requirements while establishing robust cybersecurity practices."
      steps={[
        {
          title: "NESA Standard Scoping",
          description: "Identification of applicable NESA standards based on your organization type, sector, and critical information infrastructure classification."
        },
        {
          title: "Comprehensive Gap Assessment",
          description: "Detailed evaluation of your current security controls against NESA requirements to identify compliance gaps and implementation priorities."
        },
        {
          title: "Asset Classification & Risk Assessment",
          description: "Systematic identification and classification of information assets with comprehensive risk assessment aligned with NESA methodology."
        },
        {
          title: "Compliance Roadmap Development",
          description: "Creation of a detailed implementation plan with prioritized initiatives, resource requirements, and timelines for achieving compliance."
        },
        {
          title: "Security Control Implementation",
          description: "Expert guidance and support for implementing required security controls across technical, administrative, and physical domains."
        },
        {
          title: "Security Documentation & Governance",
          description: "Development of comprehensive security policies, procedures, and governance structures aligned with NESA requirements."
        },
        {
          title: "Compliance Validation & Reporting",
          description: "Thorough validation of implemented controls with comprehensive documentation for compliance reporting to regulatory authorities."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Meet mandatory UAE NESA regulatory requirements, avoiding potential penalties and operational disruptions for non-compliance."
        },
        {
          title: "Critical Infrastructure Protection",
          content: "Implement robust security controls that protect critical national infrastructure from cyber threats and attacks."
        },
        {
          title: "Comprehensive Security Framework",
          content: "Establish a structured security program aligned with UAE national standards and tailored to your operational context."
        },
        {
          title: "Government Contracting Eligibility",
          content: "Demonstrate compliance required for government contracts and participation in critical national projects."
        },
        {
          title: "Enhanced Security Maturity",
          content: "Systematically improve your security posture through implementation of controls based on international best practices and UAE-specific requirements."
        }
      ]}
      deliverables={[
        {
          title: "NESA Gap Assessment Report",
          description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps."
        },
        {
          title: "Information Asset Register",
          description: "Comprehensive inventory of information assets with classification levels and security requirements according to NESA standards."
        },
        {
          title: "Security Control Implementation Plan",
          description: "Detailed roadmap for implementing required controls with clear responsibilities, timelines, and resource allocations."
        },
        {
          title: "NESA-Aligned Security Policies",
          description: "Complete set of security policies tailored to your organization and aligned with NESA standards and requirements."
        },
        {
          title: "Cybersecurity Risk Register",
          description: "Systematic documentation of identified cybersecurity risks with assessment ratings and treatment plans."
        },
        {
          title: "Compliance Evidence Portfolio",
          description: "Organized collection of documentation and evidence demonstrating compliance with NESA requirements for regulatory reviews."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* UAE Map Outline */}
          <path d="M300 80 Q380 110 370 200 Q360 290 300 320 Q240 290 230 200 Q220 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* UAE Flag Colors */}
          <rect x="275" y="115" width="50" height="8" fill="#00B2A9" fillOpacity="0.5"/>
          <rect x="275" y="123" width="50" height="8" fill="#FFFFFF" fillOpacity="0.2"/>
          <rect x="275" y="131" width="50" height="8" fill="#00B2A9" fillOpacity="0.3"/>
          <rect x="265" y="115" width="10" height="24" fill="#FF0000" fillOpacity="0.3"/>
          
          {/* NESA Shield */}
          <path d="M300 150 Q330 160 330 200 Q330 240 300 260 Q270 240 270 200 Q270 160 300 150" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="210" textAnchor="middle" fontSize="16" fill="#00E5FF">NESA</text>
          
          {/* Critical Infrastructure Elements */}
          <rect x="180" y="160" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="205" y="180" textAnchor="middle" fontSize="9" fill="#00E5FF">Energy</text>
          
          <rect x="180" y="200" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="205" y="220" textAnchor="middle" fontSize="9" fill="#00E5FF">Finance</text>
          
          <rect x="180" y="240" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="205" y="260" textAnchor="middle" fontSize="9" fill="#00E5FF">Health</text>
          
          <rect x="370" y="160" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="395" y="180" textAnchor="middle" fontSize="9" fill="#00E5FF">Telecom</text>
          
          <rect x="370" y="200" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="395" y="220" textAnchor="middle" fontSize="9" fill="#00E5FF">Govt</text>
          
          <rect x="370" y="240" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="395" y="260" textAnchor="middle" fontSize="9" fill="#00E5FF">Transport</text>
          
          {/* Connecting Lines */}
          <line x1="230" y1="175" x2="270" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="230" y1="215" x2="270" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="230" y1="255" x2="270" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="370" y1="175" x2="330" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="370" y1="215" x2="330" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="370" y1="255" x2="330" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Standards Elements */}
          <circle cx="240" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">IAF</text>
          
          <circle cx="280" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="280" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">IAS</text>
          
          <circle cx="320" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="320" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">CCS</text>
          
          <circle cx="360" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="360" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">CIIP</text>
          
          {/* Connection to Shield */}
          <line x1="240" y1="275" x2="270" y2="245" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="280" y1="275" x2="285" y2="260" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="320" y1="275" x2="315" y2="260" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="360" y1="275" x2="330" y2="245" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
          
          {/* Animated Elements */}
          <circle cx="250" cy="182" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="230;270" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="175;190" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="250" cy="212" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="230;270" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="215;210" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="350" cy="182" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="370;330" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="175;190" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="350" cy="212" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="370;330" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="215;210" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Security Shield Glow */}
          <path d="M300 150 Q330 160 330 200 Q330 240 300 260 Q270 240 270 200 Q270 160 300 150" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      relatedServices={[
        {
          title: "UAE Information Assurance",
          link: "/services/uae-ia"
        },
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        }
      ]}
    />
  );
};

export default UaeNesaPage;