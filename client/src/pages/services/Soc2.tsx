import { 
  CheckCircle, 
  ClipboardCheck, 
  FileText, 
  Shield,
  Users,
  Clock
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const Soc2Page = () => {
  return (
    <ServicePageLayout
      title="SOC 2 Compliance"
      category="GRC Services"
      description="Achieve SOC 2 compliance with our comprehensive assessment, implementation, and attestation services to build trust with your customers and partners."
      heroIcon={<CheckCircle className="h-8 w-8" />}
      overview="SOC 2 (System and Organization Controls) is a framework designed to help service organizations demonstrate their security, availability, processing integrity, confidentiality, and privacy controls. Our SOC 2 compliance service guides you through the entire process, from readiness assessment to successful attestation, helping you build trust with customers and partners while strengthening your security posture."
      steps={[
        {
          title: "Readiness Assessment",
          description: "Comprehensive evaluation of your current controls against SOC 2 requirements to identify gaps and establish an implementation roadmap."
        },
        {
          title: "Scope Definition",
          description: "Clear definition of systems, services, and Trust Services Criteria in scope for your SOC 2 report to focus implementation efforts."
        },
        {
          title: "Controls Design & Implementation",
          description: "Development and implementation of controls across people, processes, and technology to address applicable Trust Services Criteria."
        },
        {
          title: "Policy & Procedure Development",
          description: "Creation of comprehensive policies and procedures that establish requirements and guide security operations."
        },
        {
          title: "Evidence Collection System",
          description: "Implementation of efficient evidence collection processes and tools to streamline ongoing compliance monitoring."
        },
        {
          title: "Pre-Audit Assessment",
          description: "Thorough review of implementation status and evidence collection to ensure readiness for the formal audit."
        },
        {
          title: "Audit Coordination & Support",
          description: "Expert guidance and support throughout the audit process, including auditor selection, communication, and evidence presentation."
        }
      ]}
      benefits={[
        {
          title: "Increased Customer Trust",
          content: "Demonstrate your commitment to security and privacy through independent verification of your controls, building trust with customers and partners."
        },
        {
          title: "Competitive Advantage",
          content: "Differentiate your organization in the marketplace and meet vendor security requirements that increasingly demand SOC 2 compliance."
        },
        {
          title: "Streamlined Sales Cycle",
          content: "Accelerate your sales process by having a recognized compliance report that answers prospects' security questions and requirements."
        },
        {
          title: "Improved Security Posture",
          content: "Enhance your overall security program through implementation of comprehensive controls aligned with industry best practices."
        },
        {
          title: "Operational Efficiency",
          content: "Establish clear security processes and responsibilities that improve operational consistency and reduce the risk of security incidents."
        }
      ]}
      deliverables={[
        {
          title: "Gap Assessment Report",
          description: "Detailed analysis of your current controls against SOC 2 requirements with prioritized remediation recommendations."
        },
        {
          title: "SOC 2 Policies & Procedures",
          description: "Comprehensive set of policies and procedures aligned with SOC 2 requirements and tailored to your organization."
        },
        {
          title: "Controls Matrix",
          description: "Detailed mapping of implemented controls to Trust Services Criteria with evidence requirements and testing procedures."
        },
        {
          title: "Implementation Roadmap",
          description: "Structured project plan with timelines, responsibilities, and milestones for achieving SOC 2 compliance."
        },
        {
          title: "Evidence Collection Framework",
          description: "Efficient system for ongoing collection and organization of control evidence to support the audit process."
        },
        {
          title: "Readiness Assessment",
          description: "Comprehensive pre-audit assessment to validate implementation status and identify any remaining gaps before formal audit."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Shield */}
          <path d="M300 80 Q380 110 380 200 Q380 290 300 330 Q220 290 220 200 Q220 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Trust Services Criteria */}
          <circle cx="300" cy="160" r="35" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="165" textAnchor="middle" fontSize="12" fill="#00E5FF">Security</text>
          
          <circle cx="240" cy="210" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="240" y="215" textAnchor="middle" fontSize="11" fill="#00E5FF">Availability</text>
          
          <circle cx="270" cy="270" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="270" y="268" textAnchor="middle" fontSize="8" fill="#00E5FF">Processing</text>
          <text x="270" y="278" textAnchor="middle" fontSize="8" fill="#00E5FF">Integrity</text>
          
          <circle cx="330" cy="270" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="330" y="275" textAnchor="middle" fontSize="9" fill="#00E5FF">Confidentiality</text>
          
          <circle cx="360" cy="210" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="360" y="215" textAnchor="middle" fontSize="11" fill="#00E5FF">Privacy</text>
          
          {/* SOC 2 Process */}
          <rect x="130" y="130" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="150" textAnchor="middle" fontSize="10" fill="#00E5FF">Readiness</text>
          
          <rect x="130" y="180" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Implementation</text>
          
          <rect x="130" y="230" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="250" textAnchor="middle" fontSize="10" fill="#00E5FF">Type 1 Audit</text>
          
          <rect x="130" y="280" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Type 2 Audit</text>
          
          {/* SOC 2 Report */}
          <rect x="440" y="190" width="70" height="80" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="475" y="230" textAnchor="middle" fontSize="14" fill="#00E5FF">SOC 2</text>
          <text x="475" y="250" textAnchor="middle" fontSize="14" fill="#00E5FF">Report</text>
          
          {/* Connecting Lines */}
          <path d="M130 145 L220 145" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M130 195 L240 195" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M130 245 L265 245" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M130 295 L280 295" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          
          <path d="M380 145 L440 190" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M390 195 L440 215" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M375 245 L440 240" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M360 295 L440 270" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          
          {/* Animated Elements */}
          <circle cx="300" cy="125" r="5" fill="#00E5FF">
            <animate attributeName="cy" values="125;110;125" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="205" r="5" fill="#00E5FF">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        },
        {
          title: "Cloud Security Assessment",
          link: "/services/cloud-security"
        }
      ]}
    />
  );
};

export default Soc2Page;