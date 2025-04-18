import {
  Building,
  FileCheck,
  Shield,
  Lock,
  AlertTriangle,
  Users,
  BarChart4,
  Wrench,
  Cloud,
  DollarSign
} from 'lucide-react';
import IndustryPageLayout from '@/components/IndustryPageLayout';

const SmePage = () => {
  return (
    <IndustryPageLayout
      title="SMEs & Enterprises"
      subtitle="Cybersecurity"
      description="Customized security and compliance solutions designed to scale with your business, from small and medium enterprises to large corporations, addressing unique operational requirements and risk profiles."
      overview="Small and medium enterprises (SMEs) and larger corporate enterprises face cybersecurity challenges that evolve with their scale and complexity. While enterprises must manage sophisticated environments with extensive attack surfaces, SMEs face resource constraints that make it difficult to implement adequate security controls. Intello. delivers scalable security solutions for organizations at every stage of growth, ensuring appropriate protection regardless of company size, complexity, or industry vertical."
      challenges={[
        {
          title: "Resource Constraints",
          description: "SMEs often have limited budgets and security expertise, making it challenging to implement and maintain comprehensive security programs proportionate to their risk.",
          severity: "high"
        },
        {
          title: "Complex Enterprise Architecture",
          description: "Large enterprises manage complex technology ecosystems with diverse technologies, legacy systems, and multiple environments, creating significant security management challenges.",
          severity: "high"
        },
        {
          title: "Shadow IT",
          description: "Unauthorized applications and services deployed without proper security review introduce significant vulnerabilities in both SMEs and enterprises.",
          severity: "medium"
        },
        {
          title: "Growing Attack Surface",
          description: "As organizations grow, their digital footprint expands with more applications, endpoints, users, and third-party integrations, increasing potential attack vectors.",
          severity: "medium"
        },
        {
          title: "Compliance Complexity",
          description: "Organizations must navigate multiple regulatory requirements that vary by industry, geography, and company size, with enterprises often facing the most complex compliance landscape.",
          severity: "high"
        },
        {
          title: "Security Resource Scarcity",
          description: "Both SMEs and enterprises face challenges recruiting and retaining qualified security personnel in a competitive market with global skills shortages.",
          severity: "medium"
        }
      ]}
      solutions={[
        {
          title: "Rightsized Security Programs",
          description: "Tailored security solutions scaled to organizational size, complexity, and industry requirements, ensuring appropriate protection without unnecessary overhead.",
          icon: <Building className="h-6 w-6" />
        },
        {
          title: "Compliance Simplification",
          description: "Streamlined compliance approaches that address multiple regulatory requirements through unified controls frameworks, reducing duplicative efforts and overhead.",
          icon: <FileCheck className="h-6 w-6" />
        },
        {
          title: "Virtual CISO Services",
          description: "Flexible security leadership solutions providing strategic guidance and program management without the cost of a full-time security executive.",
          icon: <Users className="h-6 w-6" />
        },
        {
          title: "Security Architecture Review",
          description: "Comprehensive assessment of security architecture to identify gaps, optimize controls, and ensure protection is aligned with business requirements and risk profile.",
          icon: <Wrench className="h-6 w-6" />
        },
        {
          title: "Enterprise Risk Management",
          description: "Structured approach to identifying, assessing, and managing cybersecurity risks within the context of broader enterprise risk management.",
          icon: <BarChart4 className="h-6 w-6" />
        },
        {
          title: "Cloud Security Optimization",
          description: "Specialized cloud security services ensuring appropriate protection of cloud workloads and data while leveraging cloud-native security capabilities.",
          icon: <Cloud className="h-6 w-6" />
        }
      ]}
      caseStudy={{
        clientType: "Growing Mid-Size Enterprise (500+ employees)",
        challenge: "The company was rapidly expanding through both organic growth and acquisitions, creating a complex and disjointed IT environment with inconsistent security controls. They needed to establish a mature security program that would address increasing compliance requirements and protect sensitive intellectual property while enabling continued growth.",
        solution: "Intello. provided a comprehensive security transformation program that included security governance implementation, technical control standardization across business units, and risk-based compliance approach for multiple regulatory frameworks. We also delivered vCISO services to provide strategic security leadership during the transformation.",
        results: [
          "Implemented unified security governance framework across previously siloed business units",
          "Achieved compliance with four distinct regulatory frameworks through harmonized controls approach",
          "Reduced high-risk vulnerabilities by 83% across the enterprise technology landscape",
          "Improved security maturity score from 1.7 to 3.2 on a 5-point scale within 12 months",
          "Established effective security monitoring across hybrid cloud and on-premises environments"
        ]
      }}
      complianceRequirements={[
        {
          name: "Industry-Specific Regulations",
          description: "Organizations must comply with regulations specific to their industry vertical, such as HIPAA for healthcare, PCI DSS for payment processing, or financial regulations for fintech companies.",
          importance: "Industry-specific compliance is often mandatory and directly tied to the ability to operate in regulated sectors. Non-compliance can result in regulatory actions and loss of business opportunities."
        },
        {
          name: "Data Protection & Privacy Laws",
          description: "Enterprises operating across multiple jurisdictions must comply with various data protection regulations including GDPR, CCPA/CPRA, and other regional privacy laws.",
          importance: "Privacy compliance is increasingly essential, with potential fines reaching up to 4% of global annual revenue under regulations like GDPR."
        },
        {
          name: "ISO 27001 & Security Frameworks",
          description: "Many organizations implement ISO 27001 or other security frameworks (NIST CSF, CIS Controls) to establish a comprehensive approach to information security management.",
          importance: "While often voluntary, these frameworks are increasingly demanded by customers, partners, and stakeholders as proof of security commitment."
        },
        {
          name: "Supply Chain Security Requirements",
          description: "Organizations must meet security requirements imposed by customers, partners, and supply chain participants, particularly when handling sensitive data or providing critical services.",
          importance: "Supply chain security requirements directly impact business opportunities, as they are often prerequisites for contracts and partnerships with larger organizations."
        }
      ]}
      statistics={[
        {
          title: "SME Breach Impact",
          value: "60%",
          context: "Small businesses that experience a significant cyber breach close within six months, with financial impact proportionally larger than for enterprises."
        },
        {
          title: "Enterprise Security Spending",
          value: "~11%",
          context: "Average percentage of IT budget allocated to cybersecurity in large enterprises, compared to just 5-6% for SMEs."
        },
        {
          title: "Attack Targeting",
          value: "43%",
          context: "Percentage of cyber attacks that target small and medium businesses, despite lower security investment and awareness."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Enterprise Buildings Group */}
          <g transform="translate(300, 200)">
            {/* Large Enterprise Building */}
            <rect x="-75" y="-100" width="150" height="200" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
            
            {/* Windows */}
            <rect x="-65" y="-90" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-35" y="-90" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-5" y="-90" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="25" y="-90" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="55" y="-90" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            <rect x="-65" y="-65" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-35" y="-65" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-5" y="-65" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="25" y="-65" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="55" y="-65" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            <rect x="-65" y="-40" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-35" y="-40" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-5" y="-40" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="25" y="-40" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="55" y="-40" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            <rect x="-65" y="-15" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-35" y="-15" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-5" y="-15" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="25" y="-15" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="55" y="-15" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            <rect x="-65" y="10" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-35" y="10" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-5" y="10" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="25" y="10" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="55" y="10" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            <rect x="-65" y="35" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-35" y="35" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-5" y="35" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="25" y="35" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="55" y="35" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            <rect x="-65" y="60" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-35" y="60" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-5" y="60" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="25" y="60" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="55" y="60" width="20" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            {/* Door */}
            <rect x="-15" y="75" width="30" height="25" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
            
            {/* SME Buildings */}
            <rect x="-160" y="25" width="60" height="75" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
            <rect x="-150" y="35" width="15" height="12" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-125" y="35" width="15" height="12" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-150" y="55" width="15" height="12" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-125" y="55" width="15" height="12" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="-135" y="78" width="10" height="22" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            <rect x="100" y="35" width="50" height="65" fill="#0A1024" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
            <rect x="108" y="43" width="13" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="130" y="43" width="13" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="108" y="60" width="13" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="130" y="60" width="13" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <rect x="118" y="80" width="14" height="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            
            {/* Security Perimeter */}
            <circle cx="0" cy="0" r="170" fill="none" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="2" strokeDasharray="10 5">
              <animate 
                attributeName="r" 
                values="170;180;170" 
                dur="5s" 
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Security Shield */}
            <path d="M0 -140 L40 -120 L40 -70 L0 -40 L-40 -70 L-40 -120 Z" fill="none" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
              <animate attributeName="stroke-opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Security Nodes */}
            <circle cx="-120" cy="-80" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
              <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x="-120" y="-77" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="16">🛡️</text>
            
            <circle cx="120" cy="-80" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
              <animate attributeName="r" values="15;18;15" dur="2s" begin="1s" repeatCount="indefinite"/>
            </circle>
            <text x="120" y="-77" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="16">🔒</text>
            
            <circle cx="140" cy="0" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
              <animate attributeName="r" values="15;18;15" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            </circle>
            <text x="140" y="3" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="16">🔍</text>
            
            <circle cx="-140" cy="0" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
              <animate attributeName="r" values="15;18;15" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            <text x="-140" y="3" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="16">📊</text>
            
            {/* Connection Lines */}
            <line x1="-120" y1="-80" x2="-40" y2="-120" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
            </line>
            
            <line x1="120" y1="-80" x2="40" y2="-120" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1s" repeatCount="indefinite"/>
            </line>
            
            <line x1="140" y1="0" x2="70" y2="-40" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1.5s" repeatCount="indefinite"/>
            </line>
            
            <line x1="-140" y1="0" x2="-70" y2="-40" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="0.5s" repeatCount="indefinite"/>
            </line>
            
            {/* Connection to SME */}
            <line x1="-140" y1="0" x2="-140" y2="25" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2"/>
            <line x1="140" y1="0" x2="125" y2="35" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2"/>
            
            {/* Data Flow */}
            {[...Array(5)].map((_, i) => (
              <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
                <animate 
                  attributeName="cx" 
                  values={`${-115 - (i * 2)};${-45 + (i * 2)}`} 
                  dur="2s" 
                  begin={`${i * 0.3}s`} 
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="cy" 
                  values={`${-80 + (i * 2)};${-120 + (i * 5)}`} 
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
                  values={`${115 - (i * 2)};${45 + (i * 2)}`} 
                  dur="2s" 
                  begin={`${1 + (i * 0.3)}s`} 
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="cy" 
                  values={`${-80 + (i * 2)};${-120 + (i * 5)}`} 
                  dur="2s" 
                  begin={`${1 + (i * 0.3)}s`} 
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            
            {/* Labels */}
            <text x="0" y="-160" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="14">Unified Security Architecture</text>
            <text x="-130" y="110" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">SME</text>
            <text x="125" y="110" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">SME</text>
            <text x="0" y="120" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="14">Enterprise</text>
          </g>
        </svg>
      }
      relatedServices={[
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "vCISO Services",
          link: "/services/vciso"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Cloud Security",
          link: "/services/cloud-security"
        },
        {
          title: "Risk Management Frameworks",
          link: "/services/risk-frameworks"
        },
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        }
      ]}
    />
  );
};

export default SmePage;