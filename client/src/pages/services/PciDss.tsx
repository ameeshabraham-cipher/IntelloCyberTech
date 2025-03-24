import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  FileText,
  Lock,
  Database
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const PciDssPage = () => {
  return (
    <ServicePageLayout
      title="PCI DSS Compliance"
      category="GRC Services"
      description="Secure your payment card data and meet Payment Card Industry Data Security Standard (PCI DSS) requirements with our comprehensive compliance services."
      heroIcon={<CreditCard className="h-8 w-8" />}
      overview="Our PCI DSS compliance services help organizations that process, store, or transmit credit card information implement the necessary controls to protect cardholder data. We guide you through the complex requirements of the Payment Card Industry Data Security Standard, ensuring your systems and processes meet the rigorous security standards required by major card brands while reducing the risk of data breaches and financial penalties."
      steps={[
        {
          title: "PCI DSS Gap Assessment",
          description: "Comprehensive evaluation of your current cardholder data environment against PCI DSS requirements to identify compliance gaps and prioritize remediation efforts."
        },
        {
          title: "Scoping & Segmentation Analysis",
          description: "Expert guidance on properly defining your cardholder data environment to minimize scope and implement effective network segmentation strategies."
        },
        {
          title: "Control Implementation",
          description: "Development and implementation of technical and procedural controls to address PCI DSS requirements, including vulnerability management, access control, and monitoring systems."
        },
        {
          title: "Policy & Procedure Development",
          description: "Creation of comprehensive PCI DSS-compliant policies, procedures, and standards tailored to your organization's environment and processes."
        },
        {
          title: "Self-Assessment Questionnaire (SAQ) Support",
          description: "Expert guidance on selecting the appropriate SAQ type and assistance with completing the self-assessment process accurately and efficiently."
        },
        {
          title: "Remediation Planning",
          description: "Development of a structured remediation roadmap with prioritized actions to address identified gaps and achieve PCI DSS compliance within your timeline."
        },
        {
          title: "Pre-Audit Assessment",
          description: "Thorough evaluation of your environment prior to a formal PCI assessment to identify and address any remaining compliance gaps before certification."
        }
      ]}
      benefits={[
        {
          title: "Reduced Breach Risk",
          content: "Implement security controls that protect cardholder data and significantly reduce the risk of payment data breaches and associated costs."
        },
        {
          title: "Avoid Financial Penalties",
          content: "Meet card brand requirements to avoid non-compliance fees, higher transaction costs, and potential financial penalties from payment processors."
        },
        {
          title: "Streamlined Compliance",
          content: "Optimize your cardholder data environment to minimize scope and reduce the complexity and cost of achieving and maintaining PCI DSS compliance."
        },
        {
          title: "Enhanced Customer Trust",
          content: "Demonstrate your commitment to protecting customer payment information, building trust and confidence in your payment processing systems."
        },
        {
          title: "Expert Guidance",
          content: "Leverage our specialized PCI DSS knowledge to navigate complex requirements and implement practical, effective compliance solutions."
        }
      ]}
      deliverables={[
        {
          title: "PCI DSS Gap Assessment Report",
          description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps in your cardholder data environment."
        },
        {
          title: "Cardholder Data Environment Diagram",
          description: "Comprehensive documentation of your cardholder data environment, including data flows, system components, and network segmentation controls."
        },
        {
          title: "PCI DSS Policies & Procedures",
          description: "Complete set of customized policies, procedures, and standards addressing all applicable PCI DSS requirements for your organization."
        },
        {
          title: "PCI DSS Control Matrix",
          description: "Structured documentation mapping implemented controls to specific PCI DSS requirements with evidence guidance for compliance validation."
        },
        {
          title: "Self-Assessment Questionnaire",
          description: "Completed SAQ documentation appropriately aligned with your organization's merchant level and processing environment."
        },
        {
          title: "Remediation Roadmap",
          description: "Prioritized implementation plan with detailed tasks, timelines, and resource requirements for achieving full PCI DSS compliance."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Credit Card with Shield */}
          <rect x="180" y="120" width="240" height="160" rx="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <rect x="200" y="170" width="50" height="35" rx="5" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M180 180 L420 180" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Chip */}
          <rect x="210" y="210" width="30" height="25" rx="3" fill="#00B2A9" fillOpacity="0.5" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M215 215 L235 215" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M215 220 L235 220" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M215 225 L235 225" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M215 230 L235 230" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Card Numbers */}
          <path d="M260 220 L290 220" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M300 220 L330 220" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M340 220 L370 220" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M380 220 L400 220" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Card Details */}
          <text x="210" y="250" className="text-xs" fill="#00E5FF">CARDHOLDER NAME</text>
          <path d="M210 260 L300 260" stroke="#00E5FF" strokeWidth="1"/>
          
          <text x="340" y="250" className="text-xs" fill="#00E5FF">MM/YY</text>
          <path d="M340 260 L380 260" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Security Shield */}
          <path d="M340 135 Q360 145 360 170 Q360 195 340 205 Q320 195 320 170 Q320 145 340 135" fill="none" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M330 175 L335 180 L350 165" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
          
          {/* PCI DSS Text */}
          <text x="300" y="90" fontSize="16" fill="#00E5FF" textAnchor="middle">PCI DSS</text>
          
          {/* Compliance Levels */}
          <rect x="140" y="320" width="320" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          
          {/* Level Markers */}
          <circle cx="160" cy="330" r="5" fill="#00B2A9"/>
          <text x="160" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L4</text>
          
          <circle cx="230" cy="330" r="5" fill="#00B2A9"/>
          <text x="230" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L3</text>
          
          <circle cx="300" cy="330" r="5" fill="#00B2A9"/>
          <text x="300" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L2</text>
          
          <circle cx="370" cy="330" r="5" fill="#00B2A9"/>
          <text x="370" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L1</text>
          
          {/* Compliance Requirements */}
          <circle cx="160" cy="200" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="160" y="195" fontSize="10" fill="#00E5FF" textAnchor="middle">Build & </text>
          <text x="160" y="205" fontSize="10" fill="#00E5FF" textAnchor="middle">Maintain</text>
          
          <circle cx="440" cy="200" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="440" y="195" fontSize="10" fill="#00E5FF" textAnchor="middle">Protect</text>
          <text x="440" y="205" fontSize="10" fill="#00E5FF" textAnchor="middle">Data</text>
          
          <circle cx="160" cy="300" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="160" y="295" fontSize="10" fill="#00E5FF" textAnchor="middle">Implement</text>
          <text x="160" y="305" fontSize="10" fill="#00E5FF" textAnchor="middle">Controls</text>
          
          <circle cx="440" cy="300" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="440" y="295" fontSize="10" fill="#00E5FF" textAnchor="middle">Monitor &</text>
          <text x="440" y="305" fontSize="10" fill="#00E5FF" textAnchor="middle">Test</text>
          
          {/* Connection Lines */}
          <line x1="190" y1="200" x2="220" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="380" y1="200" x2="410" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="190" y1="300" x2="250" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="410" y1="300" x2="350" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          
          {/* Animation Elements */}
          <circle cx="205" cy="200" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="190;220" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="395" cy="200" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="410;380" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="220" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="190;250" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="300;260" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="380" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="410;350" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="300;260" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Secure Payment Glow */}
          <rect x="180" y="120" width="240" height="160" rx="15" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </rect>
        </svg>
      }
      relatedServices={[
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Policy Development",
          link: "/services/policy-development"
        }
      ]}
    />
  );
};

export default PciDssPage;