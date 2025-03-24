import { 
  FileText, 
  CheckSquare, 
  ClipboardList, 
  Book,
  FileEdit,
  FilePlus
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const PolicyDevelopmentPage = () => {
  return (
    <ServicePageLayout
      title="Policy Development & Implementation"
      category="GRC Services"
      description="Develop comprehensive security policies, procedures, and standards that align with your business objectives and regulatory requirements."
      heroIcon={<FileText className="h-8 w-8" />}
      overview="Our Policy Development & Implementation service helps organizations establish a structured information security policy framework that provides clear guidance for protecting sensitive data and systems. We create customized, practical policies aligned with industry standards and regulatory requirements while ensuring they are effectively implemented across your organization with appropriate awareness, training, and governance mechanisms."
      steps={[
        {
          title: "Policy Needs Assessment",
          description: "Comprehensive evaluation of your organization's regulatory obligations, industry requirements, and business needs to define the appropriate policy scope and structure."
        },
        {
          title: "Policy Framework Design",
          description: "Development of a multi-tiered policy architecture including high-level policies, detailed procedures, standards, and guidelines with clear hierarchical relationships."
        },
        {
          title: "Policy Content Development",
          description: "Creation of customized policy content that addresses your specific organizational requirements while incorporating industry best practices and compliance obligations."
        },
        {
          title: "Stakeholder Review & Approval",
          description: "Facilitation of stakeholder review and feedback processes to ensure policies are practical, enforceable, and aligned with business operations and requirements."
        },
        {
          title: "Implementation Planning",
          description: "Development of a structured rollout strategy with clear timelines, responsibilities, and change management considerations for effective policy implementation."
        },
        {
          title: "Awareness & Training",
          description: "Design of targeted awareness and training materials to ensure stakeholders understand policy requirements and their individual responsibilities."
        },
        {
          title: "Governance & Maintenance",
          description: "Establishment of ongoing policy management processes including periodic review, exception handling, and continuous improvement mechanisms."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Meet regulatory and contractual obligations with comprehensive policies that address specific requirements across multiple frameworks and standards."
        },
        {
          title: "Consistent Security Practices",
          content: "Establish clear, standardized security requirements and practices across your organization, reducing variability and strengthening your security posture."
        },
        {
          title: "Operational Clarity",
          content: "Provide clear guidance to employees and stakeholders regarding acceptable practices, roles, and responsibilities for information security."
        },
        {
          title: "Risk Reduction",
          content: "Reduce security incidents caused by unclear expectations or inconsistent practices through well-defined policies and procedures."
        },
        {
          title: "Certification Readiness",
          content: "Prepare for security certifications such as ISO 27001 with a structured policy framework that meets key documentation requirements."
        }
      ]}
      deliverables={[
        {
          title: "Information Security Policy Framework",
          description: "Comprehensive policy architecture documentation outlining the hierarchical structure, scope, and governance model for your policy program."
        },
        {
          title: "Core Security Policies",
          description: "Full set of high-level security policies covering key domains such as access control, data protection, incident management, and acceptable use."
        },
        {
          title: "Supporting Procedures & Standards",
          description: "Detailed process documents, technical standards, and implementation guidelines that support the practical application of security policies."
        },
        {
          title: "Policy Implementation Roadmap",
          description: "Structured implementation plan with prioritized timelines, resource requirements, and stakeholder engagement strategies."
        },
        {
          title: "Policy Awareness Materials",
          description: "Customized communication and training materials designed to promote policy understanding and adoption across different stakeholder groups."
        },
        {
          title: "Policy Management Toolkit",
          description: "Templates and workflows for ongoing policy maintenance, exception management, compliance tracking, and continuous improvement."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Policy Document */}
          <rect x="200" y="120" width="200" height="250" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Document Header */}
          <rect x="220" y="140" width="160" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="300" y="160" textAnchor="middle" fontSize="12" fill="#00E5FF">Security Policy</text>
          
          {/* Document Sections */}
          <line x1="220" y1="190" x2="380" y2="190" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="210" fontSize="10" fill="#00E5FF">1. Introduction</text>
          
          <line x1="220" y1="225" x2="380" y2="225" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="245" fontSize="10" fill="#00E5FF">2. Scope & Objectives</text>
          
          <line x1="220" y1="260" x2="380" y2="260" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="280" fontSize="10" fill="#00E5FF">3. Roles & Responsibilities</text>
          
          <line x1="220" y1="295" x2="380" y2="295" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="315" fontSize="10" fill="#00E5FF">4. Policy Requirements</text>
          
          <line x1="220" y1="330" x2="380" y2="330" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="350" fontSize="10" fill="#00E5FF">5. Compliance & Enforcement</text>
          
          {/* Animation Elements */}
          <rect x="220" y="190" width="160" height="35" rx="2" fill="#00B2A9" fillOpacity="0.1" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </rect>
          
          <rect x="220" y="225" width="160" height="35" rx="2" fill="#00B2A9" fillOpacity="0.1" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="1s" repeatCount="indefinite"/>
          </rect>
          
          <rect x="220" y="260" width="160" height="35" rx="2" fill="#00B2A9" fillOpacity="0.1" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </rect>
          
          <rect x="220" y="295" width="160" height="35" rx="2" fill="#00B2A9" fillOpacity="0.1" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="2s" repeatCount="indefinite"/>
          </rect>
          
          <rect x="220" y="330" width="160" height="35" rx="2" fill="#00B2A9" fillOpacity="0.1" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="3s" begin="2.5s" repeatCount="indefinite"/>
          </rect>
          
          {/* Policy Structure */}
          <rect x="450" y="150" width="100" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="500" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">Policies</text>
          
          <rect x="450" y="200" width="100" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="500" y="220" textAnchor="middle" fontSize="10" fill="#00E5FF">Standards</text>
          
          <rect x="450" y="250" width="100" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="500" y="270" textAnchor="middle" fontSize="10" fill="#00E5FF">Procedures</text>
          
          <rect x="450" y="300" width="100" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="500" y="320" textAnchor="middle" fontSize="10" fill="#00E5FF">Guidelines</text>
          
          {/* Connection Lines */}
          <line x1="500" y1="180" x2="500" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="500" y1="230" x2="500" y2="250" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="500" y1="280" x2="500" y2="300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animation Elements */}
          <circle cx="500" cy="190" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="180;200" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="500" cy="240" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="230;250" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="500" cy="290" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="280;300" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Policy Categories */}
          <circle cx="130" cy="150" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="130" y="150" textAnchor="middle" fontSize="10" fill="#00E5FF">Access</text>
          <text x="130" y="160" textAnchor="middle" fontSize="10" fill="#00E5FF">Control</text>
          
          <circle cx="130" cy="210" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="130" y="210" textAnchor="middle" fontSize="10" fill="#00E5FF">Data</text>
          <text x="130" y="220" textAnchor="middle" fontSize="10" fill="#00E5FF">Protection</text>
          
          <circle cx="130" cy="270" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="130" y="270" textAnchor="middle" fontSize="10" fill="#00E5FF">Incident</text>
          <text x="130" y="280" textAnchor="middle" fontSize="10" fill="#00E5FF">Response</text>
          
          <circle cx="130" cy="330" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="130" y="330" textAnchor="middle" fontSize="10" fill="#00E5FF">Acceptable</text>
          <text x="130" y="340" textAnchor="middle" fontSize="10" fill="#00E5FF">Use</text>
          
          {/* Connection Lines */}
          <line x1="155" y1="150" x2="200" y2="150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="155" y1="210" x2="200" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="155" y1="270" x2="200" y2="270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="155" y1="330" x2="200" y2="330" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animation Elements */}
          <circle cx="180" cy="150" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="155;200" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="180" cy="210" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="155;200" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="180" cy="270" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="155;200" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="180" cy="330" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="155;200" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Connection to Structure */}
          <line x1="400" y1="220" x2="450" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          <circle cx="425" cy="220" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="400;450" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Main Title */}
          <text x="300" y="90" textAnchor="middle" fontSize="16" fill="#00E5FF">Policy Development & Implementation</text>
        </svg>
      }
      relatedServices={[
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "vCISO Services",
          link: "/services/vciso"
        }
      ]}
    />
  );
};

export default PolicyDevelopmentPage;