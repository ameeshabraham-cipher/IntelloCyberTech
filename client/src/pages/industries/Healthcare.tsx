import {
  Heart,
  FileCheck,
  Lock,
  Database,
  Activity,
  ShieldCheck,
  Stethoscope,
  Workflow,
  AlertTriangle,
  Syringe
} from 'lucide-react';
import IndustryPageLayout from '@/components/IndustryPageLayout';

const HealthcarePage = () => {
  return (
    <IndustryPageLayout
      title="Healthcare"
      subtitle="Cybersecurity"
      description="Specialized security and compliance solutions for healthcare providers, hospitals, pharmaceuticals, and medical technology companies facing unique data protection and privacy challenges."
      overview="The healthcare industry faces an evolving threat landscape where patient data security, operational continuity, and regulatory compliance intersect. As medical devices become increasingly connected and telehealth adoption accelerates, healthcare organizations need robust security controls that protect sensitive patient information while enabling clinical innovation. Intello. delivers healthcare-specific security solutions that address these unique challenges, balancing security requirements with the need for immediate data access in critical care scenarios."
      challenges={[
        {
          title: "Patient Data Protection",
          description: "Healthcare organizations manage vast amounts of highly sensitive protected health information (PHI) that requires stringent security controls and privacy safeguards.",
          severity: "high"
        },
        {
          title: "Medical Device Security",
          description: "The growing ecosystem of connected medical devices and IoT healthcare equipment introduces significant security vulnerabilities that can impact both data security and patient safety.",
          severity: "high"
        },
        {
          title: "Regulatory Complexity",
          description: "Healthcare operations must comply with multiple overlapping regulations including HIPAA, GDPR, FDA requirements, and various national healthcare data protection laws.",
          severity: "medium"
        },
        {
          title: "Legacy Systems",
          description: "Many healthcare providers rely on outdated systems and specialized clinical applications that cannot be easily updated or patched, creating persistent security vulnerabilities.",
          severity: "medium"
        },
        {
          title: "Ransomware Targeting",
          description: "Healthcare has become the primary target for ransomware attacks due to the criticality of systems and data, combined with historically lower security maturity.",
          severity: "high"
        },
        {
          title: "Third-Party Risk",
          description: "Healthcare organizations work with numerous vendors, service providers, and partners who may have access to sensitive data, creating a complex third-party risk management challenge.",
          severity: "medium"
        }
      ]}
      solutions={[
        {
          title: "HIPAA Compliance Program",
          description: "Comprehensive HIPAA security and privacy compliance solution including risk assessment, policy development, technical controls implementation, and ongoing compliance management.",
          icon: <FileCheck className="h-6 w-6" />
        },
        {
          title: "Medical Device Security",
          description: "Specialized security assessment and monitoring for connected medical devices and clinical systems, identifying vulnerabilities and implementing safeguards without disrupting clinical operations.",
          icon: <Stethoscope className="h-6 w-6" />
        },
        {
          title: "Healthcare Data Protection",
          description: "Tailored data security solutions for electronic protected health information (ePHI) including encryption, access controls, data loss prevention, and secure information sharing with partners.",
          icon: <Database className="h-6 w-6" />
        },
        {
          title: "Clinical Network Security",
          description: "Secure network architecture design and implementation specifically for healthcare environments, with segmentation between clinical, administrative, and guest networks.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          title: "Telehealth Security Framework",
          description: "End-to-end security architecture for telehealth platforms and remote patient monitoring systems, ensuring secure and compliant virtual care delivery.",
          icon: <Heart className="h-6 w-6" />
        },
        {
          title: "Healthcare Business Continuity",
          description: "Comprehensive business continuity and disaster recovery planning specifically designed for healthcare organizations, ensuring continued patient care during security incidents.",
          icon: <Workflow className="h-6 w-6" />
        }
      ]}
      caseStudy={{
        clientType: "Regional Hospital System with 8 facilities",
        challenge: "The hospital system faced increasing cybersecurity threats, particularly ransomware, while struggling to maintain HIPAA compliance across a complex environment of clinical systems, connected medical devices, and third-party integrations. They needed a comprehensive security solution that would protect patient data without impeding clinical workflows.",
        solution: "Intello. implemented a healthcare-specific security program including HIPAA risk assessment and remediation, network segmentation to isolate clinical systems, medical device security monitoring, and a comprehensive ransomware protection strategy. We also provided security awareness training customized for clinical staff.",
        results: [
          "Achieved full HIPAA compliance with documented security controls and policies",
          "Implemented network segmentation that reduced the attack surface by 65%",
          "Successfully defended against two attempted ransomware attacks with zero impact",
          "Reduced medical device vulnerabilities by 78% through targeted security controls",
          "Improved security awareness among clinical staff with 96% training completion rate"
        ]
      }}
      complianceRequirements={[
        {
          name: "HIPAA Security Rule",
          description: "Establishes national standards to protect electronic personal health information through administrative, physical, and technical safeguards. Healthcare organizations must implement comprehensive security controls to ensure the confidentiality, integrity, and availability of all ePHI they create, receive, maintain, or transmit.",
          importance: "HIPAA violations can result in significant financial penalties (up to $1.5 million per violation category annually) and reputational damage. The HHS Office for Civil Rights actively enforces HIPAA compliance through audits and breach investigations."
        },
        {
          name: "HIPAA Privacy Rule",
          description: "Regulates the use and disclosure of Protected Health Information (PHI) held by covered entities and their business associates. Establishes patient rights regarding their health information and requires appropriate privacy policies and procedures.",
          importance: "The Privacy Rule is fundamental to maintaining patient trust and ethical healthcare operations. Violations can result in both financial penalties and loss of patient confidence."
        },
        {
          name: "FDA Medical Device Security",
          description: "The FDA requires medical device manufacturers to address cybersecurity throughout a device's lifecycle, including pre-market and post-market considerations. Healthcare providers must ensure proper security of deployed medical devices.",
          importance: "Vulnerable medical devices can pose direct risks to patient safety and organizational security. The FDA continues to strengthen cybersecurity requirements for medical devices."
        },
        {
          name: "Health Information Exchange Security",
          description: "Organizations participating in health information exchanges must implement security controls to protect data as it moves between different healthcare entities, ensuring secure interoperability.",
          importance: "Secure data exchange is essential for modern healthcare delivery and continuity of care across different providers and facilities."
        }
      ]}
      statistics={[
        {
          title: "Average Breach Cost",
          value: "$10.1M",
          context: "Healthcare consistently faces the highest average data breach cost across all industries, 42% higher than the global average."
        },
        {
          title: "Breach Recovery Time",
          value: "236 days",
          context: "The average time to identify and contain a data breach in healthcare—significantly longer than the global average across industries."
        },
        {
          title: "Ransomware Susceptibility",
          value: "48%",
          context: "Nearly half of all healthcare organizations experienced a ransomware attack in the past year, with 67% of those attacked paying the ransom."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hospital Building */}
          <rect x="200" y="100" width="200" height="200" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          
          {/* Hospital Cross */}
          <rect x="285" y="120" width="30" height="70" fill="rgba(235, 52, 67, 0.8)"/>
          <rect x="265" y="140" width="70" height="30" fill="rgba(235, 52, 67, 0.8)"/>
          
          {/* Windows */}
          <rect x="220" y="140" width="30" height="30" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="220" y="190" width="30" height="30" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="220" y="240" width="30" height="30" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          
          <rect x="350" y="140" width="30" height="30" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="350" y="190" width="30" height="30" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          <rect x="350" y="240" width="30" height="30" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          
          {/* Door */}
          <rect x="285" y="265" width="30" height="35" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1"/>
          
          {/* Protection Shield */}
          <circle cx="300" cy="300" r="80" fill="none" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="2" strokeDasharray="8 4">
            <animate 
              attributeName="r" 
              values="80;85;80" 
              dur="4s" 
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Data Protection Layer */}
          <circle cx="300" cy="300" r="70" fill="none" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1.5">
            <animate 
              attributeName="stroke-opacity" 
              values="0.4;0.7;0.4" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Connected Medical Devices */}
          <circle cx="200" cy="320" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="200" y="325" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">MRI</text>
          
          <circle cx="220" cy="360" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <text x="220" y="365" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">CT</text>
          
          <circle cx="380" cy="320" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <text x="380" y="325" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">ECG</text>
          
          <circle cx="400" cy="360" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          <text x="400" y="365" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">IV</text>
          
          {/* Data Flow Lines */}
          <line x1="215" y1="320" x2="280" y2="320" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
          
          <line x1="235" y1="360" x2="285" y2="335" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </line>
          
          <line x1="365" y1="320" x2="320" y2="320" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1s" repeatCount="indefinite"/>
          </line>
          
          <line x1="385" y1="360" x2="315" y2="335" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </line>
          
          {/* Data Packets */}
          {[...Array(3)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${215 + (i * 3)};${280 - (i * 3)}`} 
                dur="3s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values="320;320" 
                dur="3s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {/* Protected Health Information */}
          <circle cx="300" cy="320" r="25" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          <text x="300" y="315" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">PROTECTED</text>
          <text x="300" y="325" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">HEALTH DATA</text>
          
          {/* Heartbeat Line */}
          <path 
            d="M 240 75 L 250 75 L 255 50 L 265 100 L 275 75 L 285 75" 
            stroke="rgba(235, 52, 67, 0.8)" 
            strokeWidth="2"
            fill="none">
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
          </path>
          
          <path 
            d="M 315 75 L 325 75 L 330 50 L 340 100 L 350 75 L 360 75" 
            stroke="rgba(235, 52, 67, 0.8)" 
            strokeWidth="2"
            fill="none">
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      relatedServices={[
        {
          title: "HIPAA Compliance",
          link: "/services/hipaa"
        },
        {
          title: "Data Privacy Consultation",
          link: "/services/data-privacy"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Policy Development",
          link: "/services/policy-development"
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

export default HealthcarePage;