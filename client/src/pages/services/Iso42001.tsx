import { 
  Bot, 
  Shield, 
  FileText, 
  CheckCircle,
  BarChart2,
  Settings
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const Iso42001Page = () => {
  return (
    <ServicePageLayout
      title="ISO 42001 AI Management System"
      category="GRC Services"
      description="Establish a robust AI governance framework with our ISO 42001 implementation and certification services for responsible and trustworthy artificial intelligence."
      heroIcon={<Bot className="h-8 w-8" />}
      overview="ISO 42001 is the emerging international standard for Artificial Intelligence Management Systems (AIMS), establishing requirements for the governance, development, and deployment of trustworthy AI systems. Our ISO 42001 services help organizations implement an effective AI governance framework to manage AI risks, ensure ethical use, and demonstrate responsible AI practices to stakeholders, customers, and regulators."
      steps={[
        {
          title: "AI Governance Assessment",
          description: "Evaluation of your current AI governance practices against ISO 42001 requirements to identify gaps and establish implementation priorities."
        },
        {
          title: "AI Risk Assessment Framework",
          description: "Development of a comprehensive approach to identifying, assessing, and managing risks associated with AI systems across your organization."
        },
        {
          title: "AIMS Framework Development",
          description: "Design and implementation of an AI Management System framework aligned with your business processes and ISO 42001 requirements."
        },
        {
          title: "AI Policy Development",
          description: "Creation of AI governance policies covering ethical principles, risk management, transparency, accountability, and compliance requirements."
        },
        {
          title: "AI Controls Implementation",
          description: "Implementation of technical and organizational controls to manage AI risks, ensure quality, and maintain compliance throughout the AI lifecycle."
        },
        {
          title: "AI Documentation System",
          description: "Establishment of comprehensive documentation practices for AI systems, including impact assessments, design specifications, and performance metrics."
        },
        {
          title: "Certification Readiness",
          description: "Preparation for formal ISO 42001 certification, including internal audit, management review, and pre-assessment activities."
        }
      ]}
      benefits={[
        {
          title: "Trusted AI Implementation",
          content: "Establish a framework for developing and deploying AI systems that are trustworthy, transparent, and ethically sound."
        },
        {
          title: "AI Risk Management",
          content: "Identify and mitigate potential risks associated with AI implementation, including bias, privacy concerns, and unintended consequences."
        },
        {
          title: "Regulatory Readiness",
          content: "Prepare for emerging AI regulations by implementing governance structures that align with evolving compliance requirements."
        },
        {
          title: "Stakeholder Confidence",
          content: "Build trust with customers, investors, and partners by demonstrating commitment to responsible AI practices through international certification."
        },
        {
          title: "Sustainable AI Innovation",
          content: "Create an environment for responsible AI innovation that balances technological advancement with ethical considerations and risk management."
        }
      ]}
      deliverables={[
        {
          title: "ISO 42001 Gap Assessment Report",
          description: "Detailed analysis of your current AI governance practices with prioritized recommendations for meeting ISO 42001 requirements."
        },
        {
          title: "AI Management System Documentation",
          description: "Comprehensive set of policies, procedures, and governance structures required for an effective AI Management System."
        },
        {
          title: "AI Risk Assessment Methodology",
          description: "Structured approach for identifying, analyzing, and treating risks associated with AI systems throughout their lifecycle."
        },
        {
          title: "AI Impact Assessment Framework",
          description: "Methodology and templates for assessing potential impacts of AI systems on individuals, society, and the environment."
        },
        {
          title: "AI System Documentation Templates",
          description: "Standardized templates for documenting AI systems, including design specifications, training data, performance metrics, and monitoring procedures."
        },
        {
          title: "Implementation Roadmap",
          description: "Detailed project plan for implementing the AIMS, including timelines, responsibilities, and resource requirements."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* AI Brain */}
          <path d="M300 100 Q350 120 360 180 Q370 240 300 280 Q230 240 240 180 Q250 120 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Circuit Patterns */}
          <path d="M260 150 L280 150 L280 170 L300 170 L300 190 L320 190 L320 170 L340 170" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
          <path d="M260 210 L280 210 L280 230 L310 230 L310 210 L340 210" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
          <path d="M300 130 L300 150" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
          <path d="M290 250 L290 230" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
          <path d="M310 250 L310 230" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
          
          {/* AI Core */}
          <circle cx="300" cy="190" r="20" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="195" textAnchor="middle" fontSize="14" fill="#00E5FF">AI</text>
          
          {/* ISO 42001 Framework */}
          <rect x="150" y="140" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="160" textAnchor="middle" fontSize="10" fill="#00E5FF">Governance</text>
          
          <rect x="150" y="180" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk</text>
          
          <rect x="150" y="220" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="240" textAnchor="middle" fontSize="10" fill="#00E5FF">Ethics</text>
          
          <rect x="390" y="140" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="420" y="160" textAnchor="middle" fontSize="10" fill="#00E5FF">Quality</text>
          
          <rect x="390" y="180" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="420" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Transparency</text>
          
          <rect x="390" y="220" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="420" y="240" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
          
          {/* Connection Lines */}
          <line x1="210" y1="155" x2="260" y2="155" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="195" x2="280" y2="195" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="235" x2="260" y2="205" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          <line x1="390" y1="155" x2="340" y2="155" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="390" y1="195" x2="320" y2="195" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="390" y1="235" x2="340" y2="205" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* PDCA Cycle */}
          <circle cx="300" cy="300" r="50" fill="none" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          
          <path d="M300 300 L300 250 A50 50 0 0 1 350 300 Z" fill="#00B2A9" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
          <text x="325" y="280" textAnchor="middle" fontSize="10" fill="#00E5FF">Plan</text>
          
          <path d="M300 300 L350 300 A50 50 0 0 1 300 350 Z" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1"/>
          <text x="325" y="320" textAnchor="middle" fontSize="10" fill="#00E5FF">Do</text>
          
          <path d="M300 300 L300 350 A50 50 0 0 1 250 300 Z" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="275" y="320" textAnchor="middle" fontSize="10" fill="#00E5FF">Check</text>
          
          <path d="M300 300 L250 300 A50 50 0 0 1 300 250 Z" fill="#00B2A9" fillOpacity="0.25" stroke="#00E5FF" strokeWidth="1"/>
          <text x="275" y="280" textAnchor="middle" fontSize="10" fill="#00E5FF">Act</text>
          
          {/* Animated Data Flow */}
          <circle cx="240" cy="155" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;260" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="240" cy="195" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;280" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="360" cy="155" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;340" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="360" cy="195" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;320" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* ISO Text */}
          <text x="300" y="85" textAnchor="middle" fontSize="16" fill="#00E5FF">ISO 42001</text>
          
          {/* AI Brain Pulse */}
          <path d="M300 100 Q350 120 360 180 Q370 240 300 280 Q230 240 240 180 Q250 120 300 100" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      relatedServices={[
        {
          title: "AI-Powered Compliance Automation",
          link: "/solutions/ai-compliance"
        },
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "GRC Automation Platforms",
          link: "/solutions/grc-automation"
        }
      ]}
    />
  );
};

export default Iso42001Page;