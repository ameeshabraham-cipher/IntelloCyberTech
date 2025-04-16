import {
  Building,
  FileCheck,
  Lock,
  Shield,
  Database,
  UserCheck,
  Globe,
  AlertTriangle,
  Server,
  Users
} from 'lucide-react';
import IndustryPageLayout from '@/components/IndustryPageLayout';

const GovernmentPage = () => {
  return (
    <IndustryPageLayout
      title="Government"
      subtitle="& Public Sector"
      description="Specialized cybersecurity and compliance solutions for government entities, public institutions, and regulatory bodies facing nation-state threats and critical infrastructure protection requirements."
      overview="Government and public sector organizations face unique cybersecurity challenges with high-profile threat actors, critical infrastructure protection responsibilities, and stringent regulatory requirements. As digital government initiatives expand, agencies must balance security, privacy, and accessibility while managing diverse technology landscapes that often include legacy systems. Intello Cyber Technologies provides specialized government security solutions that address these complex requirements, helping public sector entities protect citizen data and critical services from sophisticated attacks."
      challenges={[
        {
          title: "Nation-State Threats",
          description: "Government entities face sophisticated attacks from nation-state actors with advanced capabilities, extensive resources, and geopolitical motives beyond financial gain.",
          severity: "high"
        },
        {
          title: "Critical Infrastructure Protection",
          description: "Public sector organizations often manage critical infrastructure systems that require specialized security controls to protect essential services and prevent physical harm.",
          severity: "high"
        },
        {
          title: "Regulatory Complexity",
          description: "Government agencies must navigate complex compliance frameworks including national security directives, privacy regulations, and sector-specific requirements.",
          severity: "medium"
        },
        {
          title: "Legacy System Constraints",
          description: "Many government organizations operate critical legacy systems that cannot be easily modernized, creating persistent security challenges that require innovative compensating controls.",
          severity: "high"
        },
        {
          title: "Resource Limitations",
          description: "Public sector entities often face budget constraints, skills shortages, and procurement complexities that complicate security program implementation.",
          severity: "medium"
        },
        {
          title: "Balancing Transparency & Security",
          description: "Government organizations must maintain appropriate public transparency while protecting sensitive information, creating unique security policy challenges.",
          severity: "medium"
        }
      ]}
      solutions={[
        {
          title: "Government Compliance Programs",
          description: "Tailored compliance solutions for government frameworks such as NIST Cybersecurity Framework, ISO 27001, local government regulations, and sector-specific requirements.",
          icon: <FileCheck className="h-6 w-6" />
        },
        {
          title: "Critical Infrastructure Security",
          description: "Specialized security services for protecting critical infrastructure systems including advanced threat protection, operational technology security, and resilience planning.",
          icon: <Building className="h-6 w-6" />
        },
        {
          title: "Government Data Protection",
          description: "Comprehensive data security solutions for citizen information, classified data, and sensitive government records with appropriate classification and handling controls.",
          icon: <Database className="h-6 w-6" />
        },
        {
          title: "Secure Digital Government",
          description: "Security architecture and controls for digital government initiatives including citizen service portals, digital identity systems, and secure interagency information sharing.",
          icon: <Globe className="h-6 w-6" />
        },
        {
          title: "Government-Grade Identity & Access",
          description: "Advanced identity and access management solutions designed for government environments with multi-level security requirements and strict separation of duties.",
          icon: <UserCheck className="h-6 w-6" />
        },
        {
          title: "Public Sector Zero Trust",
          description: "Zero Trust security implementation specifically designed for government environments with diverse technology ecosystems and strict security requirements.",
          icon: <Shield className="h-6 w-6" />
        }
      ]}
      caseStudy={{
        clientType: "National Government Ministry",
        challenge: "The ministry faced increasing cybersecurity threats to their critical systems while undergoing digital transformation of citizen services. They needed to implement comprehensive security controls that would protect sensitive government data and critical infrastructure while enabling modern digital services for citizens.",
        solution: "Intello Cyber implemented a government-specific security program based on national cybersecurity framework requirements, including secure digital services architecture, advanced threat protection for critical systems, and comprehensive data protection controls. We also provided specialized security training for government personnel.",
        results: [
          "Successfully achieved compliance with national government cybersecurity framework",
          "Secured critical infrastructure systems with zero security incidents over 18-month period",
          "Enabled secure launch of four new digital citizen services with strong security controls",
          "Implemented data protection controls for citizen information with proper classification",
          "Trained over 500 government employees on security awareness and proper data handling"
        ]
      }}
      complianceRequirements={[
        {
          name: "National Cybersecurity Framework",
          description: "Most governments have established national cybersecurity frameworks that define security requirements for government entities, critical infrastructure, and sometimes the private sector. Examples include the NIST Cybersecurity Framework (US), UAE IA Framework, and similar national standards.",
          importance: "Compliance with national frameworks is often mandatory for government entities and may be required for organizations doing business with government. These frameworks establish baseline security requirements that protect national interests."
        },
        {
          name: "Critical Infrastructure Protection",
          description: "Specific regulations govern the security of critical infrastructure systems including energy, water, transportation, and communications. Government entities that operate these systems must implement specialized security controls.",
          importance: "Critical infrastructure security directly impacts public safety and national security. A security failure in these systems could have catastrophic consequences beyond data loss."
        },
        {
          name: "Government Data Classification",
          description: "Requirements for proper classification, handling, and protection of government information based on sensitivity levels, from public information to classified or secret data.",
          importance: "Improper handling of government data can have severe national security implications, legal consequences, and impact citizen privacy and trust."
        },
        {
          name: "Digital Government Standards",
          description: "Security and privacy requirements for digital government services, including citizen-facing applications, digital identity systems, and online service delivery platforms.",
          importance: "As government services increasingly move online, securing these platforms is essential for maintaining citizen trust and protecting sensitive data."
        }
      ]}
      statistics={[
        {
          title: "Targeted Attacks",
          value: "+278%",
          context: "Increase in sophisticated attacks targeting government entities since 2020, with nation-state actors responsible for 58% of these attacks."
        },
        {
          title: "Data Protection Incidents",
          value: "63%",
          context: "Percentage of government security incidents that involved improper handling or protection of sensitive information."
        },
        {
          title: "Security Resource Gap",
          value: "47%",
          context: "Average percentage of unfilled cybersecurity positions in government agencies, creating significant security resource constraints."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Government Building */}
          <rect x="150" y="150" width="300" height="180" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          
          {/* Columns */}
          <rect x="170" y="150" width="20" height="180" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="220" y="150" width="20" height="180" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="270" y="150" width="20" height="180" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="320" y="150" width="20" height="180" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="370" y="150" width="20" height="180" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="420" y="150" width="20" height="180" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          
          {/* Pediment */}
          <path d="M150 150 L300 100 L450 150 Z" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          
          {/* Steps */}
          <rect x="180" y="330" width="240" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="160" y="340" width="280" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <rect x="140" y="350" width="320" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          
          {/* Flag */}
          <line x1="300" y1="100" x2="300" y2="60" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
          <path d="M300 60 L330 70 L300 80 Z" fill="rgba(235, 52, 67, 0.8)"/>
          
          {/* Digital Security Perimeter */}
          <circle cx="300" cy="200" r="120" fill="none" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="2" strokeDasharray="10 5">
            <animate attributeName="r" values="120;125;120" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          {/* Security Shield */}
          <path d="M300 130 L340 150 L340 200 L300 230 L260 200 L260 150 Z" fill="none" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="stroke-opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
          </path>
          
          {/* Digital Government Services */}
          <circle cx="220" cy="230" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="20;22;20" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="220" y="225" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">DIGITAL</text>
          <text x="220" y="235" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">SERVICES</text>
          
          <circle cx="380" cy="230" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5">
            <animate attributeName="r" values="20;22;20" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <text x="380" y="225" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">CRITICAL</text>
          <text x="380" y="235" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">SYSTEMS</text>
          
          {/* Central Government Data */}
          <circle cx="300" cy="200" r="30" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          <text x="300" y="195" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">SECURE</text>
          <text x="300" y="205" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="8">GOV DATA</text>
          
          {/* Connection Lines */}
          <line x1="240" y1="230" x2="270" y2="200" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
          
          <line x1="360" y1="230" x2="330" y2="200" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </line>
          
          {/* Citizen Users */}
          <circle cx="170" cy="300" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="170" y="303" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">👤</text>
          
          <circle cx="210" cy="315" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="210" y="318" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">👤</text>
          
          <circle cx="390" cy="300" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="390" y="303" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">👤</text>
          
          <circle cx="430" cy="315" r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
          <text x="430" y="318" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">👤</text>
          
          {/* Citizen Connection Lines */}
          <line x1="180" y1="290" x2="210" y2="240" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="220" y1="300" x2="220" y2="250" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="380" y1="290" x2="370" y2="250" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="420" y1="305" x2="390" y2="250" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="4 2"/>
          
          {/* Secure Data Flow */}
          {[...Array(3)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${230 + (i * 3)};${270 - (i * 3)}`} 
                dur="2s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values={`${230 - (i * 3)};${205 + (i * 3)}`} 
                dur="2s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {[...Array(3)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${370 - (i * 3)};${330 + (i * 3)}`} 
                dur="2s" 
                begin={`${1.5 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values={`${230 - (i * 3)};${205 + (i * 3)}`} 
                dur="2s" 
                begin={`${1.5 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      }
      relatedServices={[
        {
          title: "National Security Frameworks",
          link: "/services/uae-nesa"
        },
        {
          title: "Information Security Audit",
          link: "/services/it-security-audit"
        },
        {
          title: "UAE IA Compliance",
          link: "/services/uae-ia"
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
          title: "Cloud Security",
          link: "/services/cloud-security"
        }
      ]}
    />
  );
};

export default GovernmentPage;