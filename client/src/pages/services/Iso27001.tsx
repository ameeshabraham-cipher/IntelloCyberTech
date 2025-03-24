import { 
  Shield, 
  FileCheck, 
  Users, 
  Clipboard,
  BookOpen,
  Monitor
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const Iso27001Page = () => {
  return (
    <ServicePageLayout
      title="ISO 27001 Certification"
      category="GRC Services"
      description="Achieve ISO 27001 certification with our comprehensive implementation and advisory services, demonstrating your commitment to information security."
      heroIcon={<Shield className="h-8 w-8" />}
      overview="ISO 27001 is the international standard for information security management systems (ISMS). Our ISO 27001 certification service provides a structured approach to implementing the standard, from gap assessment to certification readiness, ensuring your organization establishes robust security controls while meeting all certification requirements."
      steps={[
        {
          title: "Initial Gap Analysis",
          description: "Comprehensive assessment of your current security posture against ISO 27001 requirements to identify gaps and develop a tailored implementation roadmap."
        },
        {
          title: "ISMS Framework Development",
          description: "Design and implementation of an Information Security Management System framework aligned with your business processes and ISO 27001 requirements."
        },
        {
          title: "Risk Assessment & Treatment",
          description: "Structured identification, analysis, and treatment of information security risks according to ISO 27001 methodology."
        },
        {
          title: "Controls Implementation",
          description: "Practical implementation of required security controls across people, processes, and technology domains."
        },
        {
          title: "Documentation Development",
          description: "Creation of all required policies, procedures, and records to support your ISMS and meet documentation requirements."
        },
        {
          title: "Internal Audit & Management Review",
          description: "Thorough internal audit and management review to validate ISMS effectiveness and identify improvement opportunities."
        },
        {
          title: "Certification Support",
          description: "Expert guidance through the certification audit process, including pre-audit preparation and remediation support."
        }
      ]}
      benefits={[
        {
          title: "Enhanced Security Posture",
          content: "Implement a comprehensive set of security controls that protect your critical information assets and reduce the risk of security incidents."
        },
        {
          title: "Competitive Advantage",
          content: "Gain a market edge by demonstrating your commitment to information security, particularly when bidding for contracts with security-conscious clients."
        },
        {
          title: "Regulatory Compliance",
          content: "Meet multiple regulatory and contractual requirements through implementation of a globally recognized security framework."
        },
        {
          title: "Process Optimization",
          content: "Improve operational efficiency by implementing structured security processes and clear responsibilities across the organization."
        },
        {
          title: "Customer Trust",
          content: "Build trust with your customers by obtaining independent verification of your information security practices."
        }
      ]}
      deliverables={[
        {
          title: "Gap Assessment Report",
          description: "Detailed analysis of your current security posture against ISO 27001 requirements with prioritized recommendations for remediation."
        },
        {
          title: "ISMS Documentation Suite",
          description: "Complete set of policies, procedures, work instructions, and templates required for ISO 27001 compliance."
        },
        {
          title: "Risk Assessment Methodology",
          description: "Tailored risk assessment approach and comprehensive risk register documenting identified risks and treatment plans."
        },
        {
          title: "Statement of Applicability",
          description: "Formal documentation of control objectives and controls selected for implementation from Annex A of ISO 27001."
        },
        {
          title: "Implementation Roadmap",
          description: "Detailed project plan for implementing the ISMS, including timelines, responsibilities, and resource requirements."
        },
        {
          title: "Internal Audit Program",
          description: "Structured internal audit methodology and schedule to maintain ongoing ISMS effectiveness and prepare for surveillance audits."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield Background */}
          <path d="M300 80 Q400 110 400 200 Q400 290 300 340 Q200 290 200 200 Q200 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* PDCA Cycle */}
          <circle cx="300" cy="210" r="100" fill="none" stroke="#00B2A9" strokeWidth="1.5" strokeDasharray="10 5"/>
          
          {/* Quadrants */}
          <path d="M300 210 L300 110 A100 100 0 0 1 400 210 Z" fill="#00B2A9" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M300 210 L400 210 A100 100 0 0 1 300 310 Z" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M300 210 L300 310 A100 100 0 0 1 200 210 Z" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M300 210 L200 210 A100 100 0 0 1 300 110 Z" fill="#00B2A9" fillOpacity="0.25" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* PDCA Labels */}
          <text x="320" y="155" textAnchor="middle" fontSize="14" fill="#00E5FF">Plan</text>
          <text x="355" y="220" textAnchor="middle" fontSize="14" fill="#00E5FF">Do</text>
          <text x="300" y="265" textAnchor="middle" fontSize="14" fill="#00E5FF">Check</text>
          <text x="245" y="220" textAnchor="middle" fontSize="14" fill="#00E5FF">Act</text>
          
          {/* Center Icon */}
          <circle cx="300" cy="210" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="215" textAnchor="middle" fontSize="12" fill="#00E5FF">ISMS</text>
          
          {/* Animated Elements */}
          <circle cx="300" cy="110" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="400" cy="210" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="310" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="200" cy="210" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* ISO 27001 Areas */}
          <circle cx="185" cy="135" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="185" y="140" textAnchor="middle" fontSize="10" fill="#00E5FF">4</text>
          
          <circle cx="225" cy="105" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="225" y="110" textAnchor="middle" fontSize="10" fill="#00E5FF">5</text>
          
          <circle cx="275" cy="95" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="275" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">6</text>
          
          <circle cx="325" cy="95" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="325" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">7</text>
          
          <circle cx="375" cy="105" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="375" y="110" textAnchor="middle" fontSize="10" fill="#00E5FF">8</text>
          
          <circle cx="415" cy="135" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="415" y="140" textAnchor="middle" fontSize="10" fill="#00E5FF">9</text>
          
          <circle cx="430" cy="180" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="430" y="185" textAnchor="middle" fontSize="10" fill="#00E5FF">10</text>
        </svg>
      }
      relatedServices={[
        {
          title: "SOC 2 Compliance",
          link: "/services/soc2"
        },
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        },
        {
          title: "Information Security Assessment",
          link: "/services/security-assessment"
        }
      ]}
    />
  );
};

export default Iso27001Page;