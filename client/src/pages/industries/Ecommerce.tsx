import {
  ShoppingCart,
  CreditCard,
  Shield,
  Lock,
  AlertTriangle,
  Database,
  Globe,
  Server,
  Users,
  Percent
} from 'lucide-react';
import IndustryPageLayout from '@/components/IndustryPageLayout';

const EcommercePage = () => {
  return (
    <IndustryPageLayout
      title="E-Commerce"
      subtitle="Security"
      description="Specialized security and compliance solutions for online retailers, marketplaces, and digital commerce platforms balancing frictionless customer experience with robust security controls."
      overview="E-commerce businesses face unique cybersecurity challenges at the intersection of payment security, customer data protection, and business continuity. As digital commerce platforms evolve with increasingly sophisticated features, they present a broader attack surface and more complex security requirements. Intello. provides specialized e-commerce security solutions that protect critical business assets while maintaining the seamless shopping experience customers expect, helping online retailers build trust without sacrificing conversion rates."
      challenges={[
        {
          title: "Payment Card Security",
          description: "E-commerce platforms process large volumes of payment card transactions, making them prime targets for attackers seeking financial gain through cardholder data theft.",
          severity: "high"
        },
        {
          title: "Customer Data Protection",
          description: "Online retailers collect and store significant customer data beyond payment information, creating substantial privacy and regulatory compliance requirements.",
          severity: "high"
        },
        {
          title: "Account Takeover Attacks",
          description: "Customer accounts containing stored payment methods, loyalty points, and personal information are frequently targeted by credential stuffing and other account takeover techniques.",
          severity: "medium"
        },
        {
          title: "Third-Party Integrations",
          description: "Modern e-commerce platforms rely on numerous third-party services for payment processing, analytics, marketing, and fulfillment, expanding the potential attack surface.",
          severity: "medium"
        },
        {
          title: "Balancing Security & Conversion",
          description: "E-commerce businesses must implement robust security controls without creating friction that reduces conversion rates or negatively impacts the customer experience.",
          severity: "medium"
        },
        {
          title: "Global Regulatory Complexity",
          description: "Online retailers selling to international customers must navigate complex and sometimes conflicting global compliance requirements for data protection and payment security.",
          severity: "high"
        }
      ]}
      solutions={[
        {
          title: "E-Commerce PCI DSS Compliance",
          description: "Specialized PCI DSS compliance solutions for online retailers, with a focus on secure payment integration, cardholder data protection, and simplified compliance maintenance.",
          icon: <CreditCard className="h-6 w-6" />
        },
        {
          title: "Secure Payment Integration",
          description: "Implementation of secure payment processing systems that minimize PCI scope while providing a seamless customer experience through tokenization and other advanced techniques.",
          icon: <ShoppingCart className="h-6 w-6" />
        },
        {
          title: "Customer Data Security",
          description: "Comprehensive customer data protection solutions covering secure collection, processing, storage, and deletion of personal information in compliance with global privacy regulations.",
          icon: <Database className="h-6 w-6" />
        },
        {
          title: "Fraud Prevention Framework",
          description: "Multilayered fraud detection and prevention strategies to identify suspicious transactions while minimizing false positives that impact legitimate customers.",
          icon: <AlertTriangle className="h-6 w-6" />
        },
        {
          title: "Secure E-Commerce Architecture",
          description: "End-to-end security architecture for e-commerce platforms, covering infrastructure, applications, APIs, and third-party integrations with appropriate security controls.",
          icon: <Server className="h-6 w-6" />
        },
        {
          title: "Customer Trust Solutions",
          description: "Implementation of visible security measures that build customer confidence, including trust badges, secure checkout indicators, and transparent privacy practices.",
          icon: <Shield className="h-6 w-6" />
        }
      ]}
      caseStudy={{
        clientType: "Major Regional E-Commerce Marketplace",
        challenge: "The company experienced significant growth but faced increasing fraud attempts, several minor security incidents, and challenges meeting PCI DSS requirements across their complex technology stack. They needed a comprehensive security solution that would protect customer data and payment information without creating friction in the shopping experience.",
        solution: "Intello. designed a complete e-commerce security program including PCI DSS compliance implementation, secure payment processing with tokenization, customer data protection controls, and a risk-based fraud detection system. We also implemented customer account protection measures and security monitoring for their multicloud infrastructure.",
        results: [
          "Achieved PCI DSS Level 1 compliance certification with no critical findings",
          "Reduced payment fraud by 64% while maintaining a 98% transaction approval rate",
          "Implemented data protection controls that simplified compliance with multiple privacy regulations",
          "Decreased account takeover incidents by 82% through improved authentication controls",
          "Successfully handled 300% increase in transaction volume with no security incidents"
        ]
      }}
      complianceRequirements={[
        {
          name: "PCI DSS",
          description: "The Payment Card Industry Data Security Standard applies to all entities that store, process, or transmit cardholder data. E-commerce businesses must implement controls for secure network architecture, cardholder data protection, vulnerability management, access control, monitoring, and security policy.",
          importance: "PCI DSS compliance is mandatory for accepting credit card payments. Non-compliance can result in fines, increased transaction fees, or even loss of ability to process card payments—potentially devastating for an e-commerce business."
        },
        {
          name: "GDPR and Global Privacy Laws",
          description: "E-commerce businesses must comply with various privacy regulations including GDPR (Europe), CCPA/CPRA (California), and other regional data protection laws governing the collection, processing, and storage of customer information.",
          importance: "Privacy compliance is critical for e-commerce businesses operating globally. Violations can result in significant financial penalties (up to 4% of global annual revenue under GDPR) and damage customer trust."
        },
        {
          name: "Strong Customer Authentication (SCA)",
          description: "Regulations such as PSD2 in Europe require strong customer authentication for electronic payments, implementing additional verification steps for certain transactions.",
          importance: "SCA compliance is mandatory for e-commerce transactions in applicable regions. Non-compliant transactions may be declined by banks, directly impacting revenue."
        },
        {
          name: "Cross-Border Data Transfer Requirements",
          description: "E-commerce businesses serving global customers must address various regulations governing international data transfers, including data localization requirements in some regions.",
          importance: "Cross-border data transfer compliance is increasingly complex but essential for global e-commerce operations. Violations can result in operational restrictions in certain markets."
        }
      ]}
      statistics={[
        {
          title: "Attack Frequency",
          value: "32%",
          context: "E-commerce sites experience larger volumes of attacks than any other industry, with 32% of all web application attacks targeting retail websites."
        },
        {
          title: "Data Breach Cost",
          value: "$3.9M",
          context: "The average cost of a data breach for retail and e-commerce companies, with customer notification and lost business accounting for the largest portions."
        },
        {
          title: "Cart Abandonment",
          value: "18%",
          context: "Percentage of shopping cart abandonment directly attributed to security concerns or complex checkout security measures."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* E-Commerce Platform */}
          <rect x="150" y="150" width="300" height="150" rx="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          
          {/* Browser Bar */}
          <rect x="150" y="150" width="300" height="30" rx="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <circle cx="165" cy="165" r="5" fill="rgba(235, 52, 67, 0.5)"/>
          <circle cx="180" cy="165" r="5" fill="rgba(235, 52, 67, 0.5)"/>
          <circle cx="195" cy="165" r="5" fill="rgba(235, 52, 67, 0.5)"/>
          
          {/* URL Bar */}
          <rect x="210" y="157" width="200" height="16" rx="8" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <circle cx="220" cy="165" r="5" fill="rgba(235, 52, 67, 0.8)"/>
          <rect x="230" y="162" width="170" height="6" rx="3" fill="rgba(235, 52, 67, 0.3)"/>
          
          {/* Shopping Cart */}
          <circle cx="430" cy="165" r="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
          <text x="430" y="169" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">🛒</text>
          
          {/* Product Grid */}
          <rect x="170" y="200" width="80" height="80" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="170" y="200" width="80" height="60" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="180" y="270" width="60" height="5" rx="2" fill="rgba(235, 52, 67, 0.3)"/>
          
          <rect x="260" y="200" width="80" height="80" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="260" y="200" width="80" height="60" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="270" y="270" width="60" height="5" rx="2" fill="rgba(235, 52, 67, 0.3)"/>
          
          <rect x="350" y="200" width="80" height="80" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="350" y="200" width="80" height="60" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="360" y="270" width="60" height="5" rx="2" fill="rgba(235, 52, 67, 0.3)"/>
          
          {/* Security Shield */}
          <path d="M300 100 L330 115 L330 145 L300 160 L270 145 L270 115 Z" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="stroke-opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
          </path>
          
          <path d="M300 110 L320 120 L320 140 L300 150 L280 140 L280 120 Z" fill="none" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <text x="300" y="135" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="15" fontWeight="bold">🔒</text>
          
          {/* Secure Checkout */}
          <rect x="250" y="320" width="100" height="40" rx="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="stroke-opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
          </rect>
          <text x="300" y="345" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">CHECKOUT</text>
          <circle cx="270" cy="340" r="8" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1"/>
          <text x="270" y="344" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">🔒</text>
          
          {/* Payment Methods */}
          <rect x="400" y="300" width="30" height="20" rx="2" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="415" y="315" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">💳</text>
          
          <rect x="440" y="300" width="30" height="20" rx="2" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="455" y="315" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">💳</text>
          
          <rect x="400" y="330" width="30" height="20" rx="2" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="415" y="345" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">💳</text>
          
          <rect x="440" y="330" width="30" height="20" rx="2" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="455" y="345" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">💳</text>
          
          {/* Customer User */}
          <circle cx="100" cy="250" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
          <text x="100" y="256" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="18">👤</text>
          
          {/* PCI DSS Compliance */}
          <rect x="70" y="190" width="60" height="25" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1"/>
          <text x="100" y="205" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">PCI DSS</text>
          
          {/* Data Protection */}
          <rect x="70" y="150" width="60" height="25" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1"/>
          <text x="100" y="165" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">GDPR</text>
          
          {/* Connection Lines */}
          <line x1="120" y1="250" x2="150" y2="250" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
          
          <line x1="100" y1="215" x2="100" y2="230" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="100" y1="175" x2="100" y2="190" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2"/>
          
          <line x1="130" y1="190" x2="150" y2="165" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="130" y1="150" x2="150" y2="150" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2"/>
          
          {/* Payment Processing */}
          <circle cx="500" cy="250" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
          <text x="500" y="254" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">💰</text>
          
          <line x1="450" y1="250" x2="480" y2="250" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
          
          {/* Security Scanning */}
          <circle cx="300" cy="60" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
          <text x="300" y="65" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="15">🔍</text>
          
          <line x1="300" y1="75" x2="300" y2="100" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2"/>
          
          {/* Data Flow */}
          {[...Array(5)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${130 + (i * 3)};${145 - (i * 3)}`} 
                dur="2s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values="250;250" 
                dur="2s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {[...Array(5)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${455 + (i * 3)};${475 - (i * 3)}`} 
                dur="2s" 
                begin={`${1 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values="250;250" 
                dur="2s" 
                begin={`${1 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      }
      relatedServices={[
        {
          title: "PCI DSS Compliance",
          link: "/services/pci-dss"
        },
        {
          title: "Data Privacy Consultation",
          link: "/services/data-privacy"
        },
        {
          title: "Web App Penetration Testing",
          link: "/services/web-pen-testing"
        },
        {
          title: "Cloud Security",
          link: "/services/cloud-security"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        }
      ]}
    />
  );
};

export default EcommercePage;