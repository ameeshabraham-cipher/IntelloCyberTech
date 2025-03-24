import { 
  FileText, 
  ClipboardList, 
  BookOpen, 
  CheckCircle,
  Users,
  Clipboard
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const PolicyDevelopmentPage = () => {
  return (
    <ServicePageLayout
      title="Policy Development"
      category="IT Security & Audit Services"
      description="Establish a strong security foundation with our comprehensive security policy development services tailored to your organization's unique needs."
      heroIcon={<FileText className="h-8 w-8" />}
      overview="Our Security Policy Development service provides comprehensive support for creating, updating, and implementing effective security policies, standards, and procedures. We help you establish a robust security governance framework that aligns with industry standards, meets regulatory requirements, and reflects your organization's unique risk profile and operational needs."
      steps={[
        {
          title: "Current State Assessment",
          description: "Evaluation of existing policies, procedures, and documentation to identify gaps, inconsistencies, and improvement opportunities."
        },
        {
          title: "Requirements Analysis",
          description: "Identification of regulatory, contractual, and business requirements that should guide your security policy framework."
        },
        {
          title: "Policy Architecture Design",
          description: "Development of a structured policy architecture that establishes clear hierarchies between policies, standards, procedures, and guidelines."
        },
        {
          title: "Policy Content Development",
          description: "Creation of comprehensive, clear, and enforceable security policies tailored to your organization's size, industry, and risk profile."
        },
        {
          title: "Standards & Procedures Creation",
          description: "Development of detailed standards and procedures that provide specific guidance on implementing policy requirements."
        },
        {
          title: "Stakeholder Review & Approval",
          description: "Facilitation of stakeholder review, feedback incorporation, and formal approval processes to ensure organizational alignment."
        },
        {
          title: "Implementation & Socialization",
          description: "Support for policy rollout, including communication planning, training materials, and awareness activities to drive adoption."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Meet documentation requirements for various regulatory frameworks, including ISO 27001, SOC 2, GDPR, and industry-specific regulations."
        },
        {
          title: "Clear Security Expectations",
          content: "Establish consistent, clear expectations for security practices across your organization, reducing confusion and improving adherence."
        },
        {
          title: "Risk Reduction",
          content: "Decrease security incidents caused by undefined processes, unclear responsibilities, or inconsistent security practices."
        },
        {
          title: "Operational Efficiency",
          content: "Streamline security operations with well-defined, documented processes that eliminate ambiguity and unnecessary variations."
        },
        {
          title: "Foundation for Improvement",
          content: "Create a solid documentation foundation that can evolve with your security program, supporting ongoing maturity and continuous improvement."
        }
      ]}
      deliverables={[
        {
          title: "Information Security Policy",
          description: "Comprehensive overarching security policy that establishes high-level security principles, requirements, and governance structures."
        },
        {
          title: "Domain-Specific Policies",
          description: "Detailed policies for key security domains, such as access control, data protection, incident management, and acceptable use."
        },
        {
          title: "Security Standards",
          description: "Specific, measurable security requirements that define how policies are implemented across different technologies and systems."
        },
        {
          title: "Procedures & Guidelines",
          description: "Step-by-step instructions and best practice guidance for implementing security requirements consistently throughout the organization."
        },
        {
          title: "Policy Management Framework",
          description: "Structured approach for maintaining, reviewing, and updating security documentation to ensure ongoing relevance and effectiveness."
        },
        {
          title: "Communication & Training Materials",
          description: "Resources to support policy rollout, including executive summaries, training presentations, and awareness materials."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Policy Document Stack */}
          <rect x="240" y="110" width="120" height="150" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <rect x="250" y="120" width="100" height="130" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
          
          {/* Document Title */}
          <text x="300" y="140" textAnchor="middle" fontSize="12" fill="#00E5FF">Security Policy</text>
          
          {/* Document Content Lines */}
          <line x1="260" y1="155" x2="340" y2="155" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="165" x2="340" y2="165" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="175" x2="340" y2="175" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="185" x2="340" y2="185" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="195" x2="320" y2="195" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="205" x2="330" y2="205" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="215" x2="310" y2="215" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="225" x2="340" y2="225" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <line x1="260" y1="235" x2="300" y2="235" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          
          {/* Policy Hierarchy */}
          <rect x="150" y="280" width="300" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="305" textAnchor="middle" fontSize="14" fill="#00E5FF">Policies</text>
          
          <rect x="170" y="330" width="260" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="350" textAnchor="middle" fontSize="12" fill="#00E5FF">Standards</text>
          
          <rect x="190" y="370" width="220" height="20" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="385" textAnchor="middle" fontSize="10" fill="#00E5FF">Procedures & Guidelines</text>
          
          {/* Connected Elements */}
          <rect x="130" y="170" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="160" y="190" textAnchor="middle" fontSize="9" fill="#00E5FF">Requirements</text>
          
          <rect x="130" y="210" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="160" y="230" textAnchor="middle" fontSize="9" fill="#00E5FF">Regulations</text>
          
          <rect x="410" y="170" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="440" y="190" textAnchor="middle" fontSize="9" fill="#00E5FF">Stakeholders</text>
          
          <rect x="410" y="210" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="440" y="230" textAnchor="middle" fontSize="9" fill="#00E5FF">Implementation</text>
          
          {/* Connection Lines */}
          <line x1="190" y1="185" x2="240" y2="185" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="190" y1="225" x2="240" y2="225" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="185" x2="410" y2="185" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="225" x2="410" y2="225" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Elements */}
          <circle cx="215" cy="185" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="190;240" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="215" cy="225" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="190;240" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="385" cy="185" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="410;360" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="385" cy="225" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="410;360" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Document Flow */}
          <path d="M300 260 L300 280" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2"/>
          <path d="M300 320 L300 330" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2"/>
          <path d="M300 360 L300 370" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2"/>
          
          {/* Document Glow */}
          <rect x="240" y="110" width="120" height="150" rx="5" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </rect>
        </svg>
      }
      relatedServices={[
        {
          title: "IT Security Audit",
          link: "/services/it-security-audit"
        },
        {
          title: "vCISO Services",
          link: "/services/vciso"
        },
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        }
      ]}
    />
  );
};

export default PolicyDevelopmentPage;