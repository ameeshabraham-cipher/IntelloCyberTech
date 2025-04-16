import {
  Shield,
  Lock,
  FileCheck,
  Database,
  CreditCard,
  Building2,
  AlertTriangle,
  BarChart4,
  Users,
  ServerCrash
} from 'lucide-react';
import IndustryPageLayout from '@/components/IndustryPageLayout';

const BfsiPage = () => {
  return (
    <IndustryPageLayout
      title="Banking & Financial Services"
      subtitle="Security"
      description="Comprehensive security and compliance solutions tailored specifically for banks, financial institutions, and insurance companies operating in a highly regulated digital environment."
      overview="The banking, financial services, and insurance (BFSI) sector faces unique cybersecurity challenges due to the sensitive nature of financial data, stringent regulatory requirements, and being a prime target for sophisticated threat actors. Intello Cyber Technologies provides specialized security solutions that address the complex needs of financial institutions, combining regulatory compliance expertise with advanced threat protection capabilities to safeguard both digital assets and customer trust."
      challenges={[
        {
          title: "Advanced Persistent Threats",
          description: "BFSI institutions face sophisticated, targeted attacks from well-funded threat actors, including nation-states and organized crime groups seeking financial gain or aiming to disrupt financial systems.",
          severity: "high"
        },
        {
          title: "Complex Regulatory Landscape",
          description: "Financial institutions must navigate a complex web of international, national, and industry-specific regulations including PCI DSS, GDPR, SOX, Dodd-Frank, Basel III, and local regulatory frameworks.",
          severity: "high"
        },
        {
          title: "Third-Party Risk",
          description: "The extensive ecosystem of third-party service providers and partners creates significant security vulnerabilities that must be managed through comprehensive vendor risk assessment programs.",
          severity: "medium"
        },
        {
          title: "Legacy Infrastructure",
          description: "Many financial institutions operate on aging core systems that were not designed with modern security principles, creating integration challenges and security gaps.",
          severity: "medium"
        },
        {
          title: "Digital Transformation Pressures",
          description: "The need to rapidly implement digital banking solutions and fintech innovations while maintaining security and compliance creates significant risk management challenges.",
          severity: "medium"
        },
        {
          title: "Cloud Security Concerns",
          description: "As financial institutions increasingly migrate to cloud environments, new security considerations emerge related to data sovereignty, shared responsibility models, and cloud-specific threats.",
          severity: "high"
        }
      ]}
      solutions={[
        {
          title: "Financial Services Compliance Program",
          description: "Comprehensive compliance solutions covering PCI DSS, GDPR, SOX, Dodd-Frank, local financial regulations, and industry standards with specialized documentation and controls tailored to financial institutions.",
          icon: <FileCheck className="h-6 w-6" />
        },
        {
          title: "Financial Fraud Prevention",
          description: "Advanced threat detection systems designed specifically to identify and prevent financial fraud, account takeover, and identity theft through behavioral analysis and anomaly detection.",
          icon: <CreditCard className="h-6 w-6" />
        },
        {
          title: "Secure Digital Banking Framework",
          description: "End-to-end security architecture for digital banking platforms, mobile applications, and online services with a focus on secure customer authentication and transaction integrity.",
          icon: <Lock className="h-6 w-6" />
        },
        {
          title: "Financial Data Protection",
          description: "Specialized data protection strategies for financial information, including encryption, tokenization, and data loss prevention tailored to meet the unique requirements of financial data handling.",
          icon: <Database className="h-6 w-6" />
        },
        {
          title: "SWIFT Security Program",
          description: "Dedicated security services for financial messaging and payment systems, including SWIFT CSP compliance, secure payment gateway implementation, and transaction monitoring.",
          icon: <ServerCrash className="h-6 w-6" />
        },
        {
          title: "Third-Party Risk Management",
          description: "Comprehensive vendor risk assessment framework specifically designed for financial institutions to evaluate and monitor the security posture of third-party service providers.",
          icon: <Building2 className="h-6 w-6" />
        }
      ]}
      caseStudy={{
        clientType: "Leading Regional Bank with 50+ branches",
        challenge: "The bank faced increasing regulatory pressure and sophisticated cyber threats while undergoing digital transformation. They needed a comprehensive security and compliance solution that would enable innovation while maintaining strict security controls and regulatory compliance.",
        solution: "Intello Cyber designed a comprehensive security program that included PCI DSS compliance implementation, secure digital banking architecture, real-time fraud detection systems, and a tailored third-party risk management framework. We provided ongoing security assessment and 24/7 monitoring to maintain a strong security posture.",
        results: [
          "Achieved full PCI DSS compliance certification with zero critical findings",
          "Successfully launched new digital banking platform with enhanced security features",
          "Reduced fraud losses by 73% through implementation of advanced detection systems",
          "Streamlined third-party risk management process, reducing assessment time by 60%",
          "Passed regulatory security examinations with no significant findings"
        ]
      }}
      complianceRequirements={[
        {
          name: "PCI DSS",
          description: "The Payment Card Industry Data Security Standard is mandatory for all entities that process, store, or transmit credit card information. Financial institutions must implement strong access controls, network security, and regular testing to maintain compliance.",
          importance: "Non-compliance can result in significant fines, increased transaction fees, and reputational damage. It's a fundamental requirement for any financial institution handling payment card data."
        },
        {
          name: "Banking Sector Specific Regulations",
          description: "Local banking regulations such as CBUAE (UAE), RBI guidelines (India), or MAS TRM (Singapore) impose specific security and risk management requirements on financial institutions operating in these jurisdictions.",
          importance: "Compliance with local banking regulations is mandatory for continued operation. Non-compliance can result in regulatory actions, fines, or loss of banking license."
        },
        {
          name: "GDPR & Data Protection Laws",
          description: "Financial institutions handle vast amounts of personal data and must comply with data protection regulations governing the collection, processing, and storage of customer information.",
          importance: "With potential fines of up to 4% of global annual revenue for GDPR violations, data protection compliance is a significant financial and reputational risk area for financial institutions."
        },
        {
          name: "Financial Sector SOC 2 Compliance",
          description: "SOC 2 compliance demonstrates that a financial institution maintains effective controls for security, availability, processing integrity, confidentiality, and privacy of customer data.",
          importance: "While not always a regulatory requirement, SOC 2 compliance is increasingly demanded by customers, partners, and stakeholders as proof of security commitment."
        }
      ]}
      statistics={[
        {
          title: "Average Cost of Data Breach",
          value: "$5.97M",
          context: "The financial services industry faces the second-highest average cost per data breach across all sectors."
        },
        {
          title: "Attack Volume",
          value: "+238%",
          context: "Increase in cyberattacks targeting financial institutions since 2020, with ransomware and DDoS being the most prevalent."
        },
        {
          title: "Compliance Burden",
          value: "300+",
          context: "The average global financial institution must comply with over 300 different regulatory requirements related to cybersecurity and data protection."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Financial Services Secure Building */}
          <rect x="150" y="150" width="300" height="200" rx="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          
          {/* Columns */}
          <rect x="180" y="150" width="30" height="200" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="270" y="150" width="30" height="200" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="360" y="150" width="30" height="200" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          
          {/* Top Pediment */}
          <path d="M150 150 L300 100 L450 150 Z" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          
          {/* Steps */}
          <rect x="200" y="350" width="200" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="180" y="360" width="240" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="160" y="370" width="280" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          
          {/* Security Shield */}
          <path d="M300 130 L330 150 L330 190 L300 210 L270 190 L270 150 Z" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          <path d="M300 140 L320 155 L320 185 L300 200 L280 185 L280 155 Z" fill="none" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <path d="M300 150 L310 160 L310 180 L300 190 L290 180 L290 160 Z" fill="rgba(235, 52, 67, 0.3)"/>
          
          {/* Digital Security Elements */}
          <circle cx="200" cy="200" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="250" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="400" cy="200" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="400" cy="250" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Connection Lines */}
          <line x1="200" y1="200" x2="270" y2="170" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="200" y1="250" x2="270" y2="190" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </line>
          <line x1="400" y1="200" x2="330" y2="170" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1s" repeatCount="indefinite"/>
          </line>
          <line x1="400" y1="250" x2="330" y2="190" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </line>
          
          {/* Data Flow */}
          {[...Array(5)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values="215;265" 
                dur="2s" 
                begin={`${i * 0.4}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values={`${200 + (i * 10)};${180 + (i * 2)}`} 
                dur="2s" 
                begin={`${i * 0.4}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {[...Array(5)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values="385;335" 
                dur="2s" 
                begin={`${i * 0.4}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values={`${200 + (i * 10)};${180 + (i * 2)}`} 
                dur="2s" 
                begin={`${i * 0.4}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {/* Financial Symbols */}
          <text x="195" y="205" fill="rgba(235, 52, 67, 0.8)" fontSize="16">$</text>
          <text x="395" y="205" fill="rgba(235, 52, 67, 0.8)" fontSize="16">¥</text>
          <text x="195" y="255" fill="rgba(235, 52, 67, 0.8)" fontSize="16">€</text>
          <text x="395" y="255" fill="rgba(235, 52, 67, 0.8)" fontSize="16">£</text>
        </svg>
      }
      relatedServices={[
        {
          title: "PCI DSS Compliance",
          link: "/services/pci-dss"
        },
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "Risk Management Frameworks",
          link: "/services/risk-frameworks"
        },
        {
          title: "Cloud Security",
          link: "/services/cloud-security"
        },
        {
          title: "Data Privacy Consultation",
          link: "/services/data-privacy"
        },
        {
          title: "vCISO Services",
          link: "/services/vciso"
        }
      ]}
    />
  );
};

export default BfsiPage;