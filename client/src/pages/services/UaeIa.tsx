import { 
  Shield, 
  FileCheck, 
  Check, 
  AlertCircle,
  FileText,
  Lock
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const UaeIaPage = () => {
  return (
    <ServicePageLayout
      title="UAE Information Assurance"
      category="GRC Services"
      description="Achieve compliance with UAE Information Assurance standards and regulations with our comprehensive advisory and implementation services."
      heroIcon={<Shield className="h-8 w-8" />}
      overview="UAE Information Assurance (IA) regulations establish critical security requirements for government entities, critical infrastructure, and organizations operating in key sectors in the UAE. Our UAE IA compliance services provide a structured approach to implementing these requirements, helping you protect sensitive information and critical systems while meeting regulatory obligations."
      steps={[
        {
          title: "IA Compliance Gap Assessment",
          description: "Comprehensive evaluation of your current security controls against UAE IA requirements to identify gaps and establish implementation priorities."
        },
        {
          title: "Risk Assessment & Classification",
          description: "Thorough assessment of information assets and systems to determine appropriate classification levels and security requirements."
        },
        {
          title: "Control Implementation Planning",
          description: "Development of a detailed implementation roadmap addressing identified gaps with clear timeline and resource allocation."
        },
        {
          title: "Security Architecture Review",
          description: "Evaluation of your current security architecture against IA requirements, with recommendations for necessary enhancements."
        },
        {
          title: "Policy & Procedure Development",
          description: "Creation or updating of security policies and procedures to align with IA standards and your organizational requirements."
        },
        {
          title: "Control Implementation Support",
          description: "Expert guidance and practical support for implementing required technical and administrative controls."
        },
        {
          title: "Compliance Documentation",
          description: "Development of comprehensive documentation to demonstrate compliance with IA requirements during regulatory assessments."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Meet UAE national regulatory requirements for information security, avoiding potential penalties and operational disruptions."
        },
        {
          title: "Enhanced Security Posture",
          content: "Implement robust security controls that protect your critical information assets and systems from evolving cyber threats."
        },
        {
          title: "Government & Critical Infrastructure Readiness",
          content: "Meet the specific information security requirements needed for government entities and critical infrastructure providers."
        },
        {
          title: "Business Continuity",
          content: "Enhance your organization's resilience against cyber incidents through comprehensive protection of critical information assets."
        },
        {
          title: "Structured Security Program",
          content: "Establish a comprehensive security program aligned with UAE national standards and international best practices."
        }
      ]}
      deliverables={[
        {
          title: "IA Gap Assessment Report",
          description: "Detailed analysis of compliance gaps with prioritized recommendations for remediation aligned with UAE IA requirements."
        },
        {
          title: "Security Control Implementation Plan",
          description: "Comprehensive roadmap for implementing required controls with clear milestones, responsibilities, and resource estimates."
        },
        {
          title: "Information Security Policies",
          description: "Complete set of security policies aligned with IA requirements and tailored to your organizational context."
        },
        {
          title: "Asset Classification Framework",
          description: "Structured approach for classifying information assets based on criticality and sensitivity, with appropriate protection requirements."
        },
        {
          title: "Security Architecture Recommendations",
          description: "Detailed technical guidance for enhancing security architecture to meet IA requirements and protect critical assets."
        },
        {
          title: "Compliance Evidence Portfolio",
          description: "Organized collection of documentation and evidence demonstrating compliance with IA requirements for regulatory assessments."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* UAE Map Outline */}
          <path d="M300 100 Q370 130 350 200 Q330 270 300 300 Q270 270 250 200 Q230 130 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* UAE Flag Colors */}
          <rect x="270" y="130" width="60" height="10" fill="#00B2A9" fillOpacity="0.5"/>
          <rect x="270" y="140" width="60" height="10" fill="#FFFFFF" fillOpacity="0.2"/>
          <rect x="270" y="150" width="60" height="10" fill="#00B2A9" fillOpacity="0.3"/>
          <rect x="260" y="130" width="10" height="30" fill="#FF0000" fillOpacity="0.3"/>
          
          {/* IA Layers */}
          <rect x="250" y="170" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="187" textAnchor="middle" fontSize="12" fill="#00E5FF">Governance</text>
          
          <rect x="250" y="200" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="217" textAnchor="middle" fontSize="12" fill="#00E5FF">Risk</text>
          
          <rect x="250" y="230" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="247" textAnchor="middle" fontSize="12" fill="#00E5FF">Operations</text>
          
          <rect x="250" y="260" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="277" textAnchor="middle" fontSize="12" fill="#00E5FF">Technology</text>
          
          {/* Connected Elements */}
          <rect x="150" y="200" width="70" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="185" y="222" textAnchor="middle" fontSize="10" fill="#00E5FF">Controls</text>
          
          <rect x="380" y="200" width="70" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="415" y="222" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance</text>
          
          {/* Control Categories */}
          <circle cx="185" y="150" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="185" y="154" textAnchor="middle" fontSize="8" fill="#00E5FF">Policy</text>
          
          <circle cx="185" y="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="185" y="184" textAnchor="middle" fontSize="8" fill="#00E5FF">Process</text>
          
          <circle cx="185" y="260" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="185" y="264" textAnchor="middle" fontSize="8" fill="#00E5FF">Technical</text>
          
          <circle cx="415" y="150" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="415" y="154" textAnchor="middle" fontSize="8" fill="#00E5FF">Audit</text>
          
          <circle cx="415" y="260" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="415" y="264" textAnchor="middle" fontSize="8" fill="#00E5FF">Reporting</text>
          
          {/* Connection Lines */}
          <line x1="220" y1="220" x2="250" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="220" x2="380" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="185" y1="165" x2="185" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="185" y1="240" x2="185" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="415" y1="165" x2="415" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="415" y1="240" x2="415" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Connecting Elements */}
          <circle cx="235" cy="220" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="220;250" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="365" cy="220" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="350;380" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Shield Glow */}
          <path d="M300 100 Q370 130 350 200 Q330 270 300 300 Q270 270 250 200 Q230 130 300 100" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      relatedServices={[
        {
          title: "UAE NESA Compliance",
          link: "/services/uae-nesa"
        },
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "UAE PDPL Compliance",
          link: "/services/uae-pdpl"
        }
      ]}
    />
  );
};

export default UaeIaPage;