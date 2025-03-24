import { 
  Stethoscope, 
  Shield, 
  FileText, 
  CheckCircle,
  Lock,
  FileSearch
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const HipaaPage = () => {
  return (
    <ServicePageLayout
      title="HIPAA Compliance"
      category="GRC Services"
      description="Protect sensitive healthcare information and meet HIPAA regulatory requirements with our comprehensive HIPAA compliance services."
      heroIcon={<Stethoscope className="h-8 w-8" />}
      overview="Our HIPAA compliance services help healthcare organizations and their business associates implement the administrative, physical, and technical safeguards required by the Health Insurance Portability and Accountability Act (HIPAA). We guide you through the complex requirements for protecting electronic protected health information (ePHI), ensuring you maintain patient privacy while meeting regulatory obligations and avoiding costly penalties."
      steps={[
        {
          title: "HIPAA Gap Assessment",
          description: "Comprehensive evaluation of your current privacy and security practices against HIPAA requirements to identify compliance gaps and prioritize remediation efforts."
        },
        {
          title: "Risk Analysis & Management",
          description: "Thorough assessment of potential risks and vulnerabilities to ePHI with development of risk management strategies as required by the HIPAA Security Rule."
        },
        {
          title: "Policy & Procedure Development",
          description: "Creation of comprehensive HIPAA-compliant policies, procedures, and standards addressing Privacy Rule, Security Rule, and Breach Notification Rule requirements."
        },
        {
          title: "Security Controls Implementation",
          description: "Design and implementation of administrative, physical, and technical safeguards to protect ePHI in alignment with HIPAA Security Rule requirements."
        },
        {
          title: "Business Associate Management",
          description: "Development of a structured program for managing HIPAA compliance in your business associate relationships, including contract reviews and assessment processes."
        },
        {
          title: "Privacy Controls Implementation",
          description: "Implementation of privacy practices and patient rights processes in accordance with the HIPAA Privacy Rule requirements."
        },
        {
          title: "Breach Response Planning",
          description: "Development of incident response and breach notification procedures that meet HIPAA Breach Notification Rule requirements."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Meet HIPAA regulatory requirements to avoid civil and criminal penalties, including substantial fines for non-compliance."
        },
        {
          title: "Patient Trust",
          content: "Demonstrate your commitment to protecting sensitive patient information and maintaining privacy, enhancing trust in your healthcare services."
        },
        {
          title: "Breach Risk Reduction",
          content: "Implement effective security controls that reduce the risk of data breaches and the associated costs of notification, remediation, and penalties."
        },
        {
          title: "Operational Integration",
          content: "Align HIPAA compliance with clinical and operational workflows to ensure security without compromising healthcare delivery efficiency."
        },
        {
          title: "Business Advantage",
          content: "Qualify as a trustworthy business associate for other healthcare organizations, enabling valuable partnerships and service opportunities."
        }
      ]}
      deliverables={[
        {
          title: "HIPAA Gap Assessment Report",
          description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps in your HIPAA program."
        },
        {
          title: "Risk Analysis Documentation",
          description: "Comprehensive risk assessment documentation meeting OCR guidance for HIPAA Security Rule compliance, including risk register and treatment plans."
        },
        {
          title: "HIPAA Privacy & Security Policies",
          description: "Complete set of customized policies, procedures, and standards addressing Privacy Rule, Security Rule, and Breach Notification Rule requirements."
        },
        {
          title: "HIPAA Training Materials",
          description: "Role-based training content for workforce members covering HIPAA requirements, organizational policies, and individual responsibilities."
        },
        {
          title: "Business Associate Agreement Templates",
          description: "Legally-reviewed Business Associate Agreement templates and assessment tools for managing third-party HIPAA compliance."
        },
        {
          title: "Incident Response & Breach Notification Plan",
          description: "Structured protocols for identifying, responding to, and reporting potential breaches of protected health information."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Healthcare Symbol */}
          <circle cx="300" cy="180" r="60" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <path d="M285 140 L315 140 L315 220 L285 220 Z" fill="#00B2A9" fillOpacity="0.3"/>
          <path d="M260 160 L340 160 L340 200 L260 200 Z" fill="#00B2A9" fillOpacity="0.3"/>
          
          {/* Protected Data */}
          <path d="M300 100 Q360 120 360 190 Q360 260 300 280 Q240 260 240 190 Q240 120 300 100" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* HIPAA Text */}
          <text x="300" y="90" textAnchor="middle" fontSize="16" fill="#00E5FF">HIPAA Compliance</text>
          
          {/* Security Controls */}
          <rect x="170" y="280" width="80" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="210" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Administrative</text>
          <text x="210" y="310" textAnchor="middle" fontSize="10" fill="#00E5FF">Safeguards</text>
          
          <rect x="260" y="280" width="80" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Physical</text>
          <text x="300" y="310" textAnchor="middle" fontSize="10" fill="#00E5FF">Safeguards</text>
          
          <rect x="350" y="280" width="80" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="390" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Technical</text>
          <text x="390" y="310" textAnchor="middle" fontSize="10" fill="#00E5FF">Safeguards</text>
          
          {/* Connection Lines */}
          <line x1="210" y1="280" x2="280" y2="240" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="280" x2="300" y2="240" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="390" y1="280" x2="320" y2="240" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Privacy Rule */}
          <circle cx="170" cy="180" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="175" textAnchor="middle" fontSize="10" fill="#00E5FF">Privacy</text>
          <text x="170" y="185" textAnchor="middle" fontSize="10" fill="#00E5FF">Rule</text>
          
          {/* Security Rule */}
          <circle cx="430" cy="180" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="430" y="175" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
          <text x="430" y="185" textAnchor="middle" fontSize="10" fill="#00E5FF">Rule</text>
          
          {/* Breach Notification */}
          <circle cx="300" cy="330" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="325" textAnchor="middle" fontSize="10" fill="#00E5FF">Breach</text>
          <text x="300" y="335" textAnchor="middle" fontSize="10" fill="#00E5FF">Notification</text>
          
          {/* Connection Lines */}
          <line x1="200" y1="180" x2="240" y2="180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="180" x2="400" y2="180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="320" x2="300" y2="300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Data Flow */}
          <circle cx="220" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="200;240" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="380" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="400;360" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="310" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="320;300" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* ePHI Protection */}
          <circle cx="300" cy="180" r="70" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="r" values="70;75;70" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "Risk Management",
          link: "/solutions/risk-management"
        },
        {
          title: "Data Privacy Consultation",
          link: "/services/data-privacy"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        }
      ]}
    />
  );
};

export default HipaaPage;