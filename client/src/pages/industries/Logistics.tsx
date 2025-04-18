import {
  Truck,
  Ship,
  Package,
  Lock,
  Database,
  FileCheck,
  Globe,
  AlertTriangle,
  Server,
  Wifi
} from 'lucide-react';
import IndustryPageLayout from '@/components/IndustryPageLayout';

const LogisticsPage = () => {
  return (
    <IndustryPageLayout
      title="Logistics & Supply Chain"
      subtitle="Security"
      description="Specialized cybersecurity solutions for logistics providers, transportation companies, and supply chain networks facing unique operational technology challenges and global regulatory requirements."
      overview="The logistics and supply chain industry faces distinctive cybersecurity challenges at the intersection of operational technology, information systems, and physical security. As global supply chains become increasingly digital and interconnected, they present expanded attack surfaces vulnerable to disruption that can have far-reaching consequences. Intello. provides specialized security solutions for logistics and supply chain organizations, protecting critical transportation and logistics infrastructure while enabling digital transformation and operational efficiency."
      challenges={[
        {
          title: "Complex Supply Chain Ecosystem",
          description: "Modern supply chains involve numerous partners, vendors, and systems with various security maturity levels, creating a challenging security perimeter to define and protect.",
          severity: "high"
        },
        {
          title: "Operational Technology Security",
          description: "Logistics organizations operate specialized equipment and industrial control systems that present unique security considerations beyond traditional IT security approaches.",
          severity: "high"
        },
        {
          title: "Global Regulatory Complexity",
          description: "International logistics providers must navigate diverse regulatory requirements across multiple jurisdictions, including customs and border protection regulations.",
          severity: "medium"
        },
        {
          title: "Supply Chain Visibility",
          description: "The need for real-time shipment tracking and supply chain visibility creates tensions between security requirements and operational transparency needs.",
          severity: "medium"
        },
        {
          title: "Legacy Transportation Systems",
          description: "Many logistics providers operate legacy systems with limited security capabilities, creating persistent vulnerabilities that require specialized compensating controls.",
          severity: "high"
        },
        {
          title: "Physical-Digital Security Convergence",
          description: "Logistics security requires addressing the intersection of cybersecurity and physical security concerns, including cargo protection, facility access, and transportation security.",
          severity: "medium"
        }
      ]}
      solutions={[
        {
          title: "Supply Chain Security Program",
          description: "Comprehensive security framework addressing the unique requirements of logistics and supply chain operations, including partner security assessments and supply chain risk management.",
          icon: <Truck className="h-6 w-6" />
        },
        {
          title: "Transportation System Security",
          description: "Specialized security solutions for transportation management systems, fleet management platforms, and logistics scheduling applications, ensuring operational integrity.",
          icon: <Ship className="h-6 w-6" />
        },
        {
          title: "Logistics Data Protection",
          description: "Data security solutions specifically designed for logistics data including shipment information, customer profiles, routing details, and customs documentation.",
          icon: <Database className="h-6 w-6" />
        },
        {
          title: "Operational Technology Security",
          description: "Security assessment and protection for specialized logistics equipment including warehouse management systems, automated sorting systems, and fleet telematics.",
          icon: <Package className="h-6 w-6" />
        },
        {
          title: "Logistics Compliance Framework",
          description: "Structured approach to meeting diverse regulatory requirements affecting logistics operations, including customs security programs, transportation safety regulations, and data protection laws.",
          icon: <FileCheck className="h-6 w-6" />
        },
        {
          title: "Supply Chain Continuity Planning",
          description: "Business continuity and disaster recovery planning specifically designed for logistics operations, focusing on maintaining supply chain integrity during security incidents.",
          icon: <Globe className="h-6 w-6" />
        }
      ]}
      caseStudy={{
        clientType: "Global Logistics Provider with operations in 15+ countries",
        challenge: "The company faced increasing security threats to their connected logistics systems while struggling to meet diverse regulatory requirements across different regions. They needed a comprehensive security solution that would protect their global operations without impacting critical shipping services and real-time visibility requirements.",
        solution: "Intello. designed a global logistics security program including supply chain risk management, transportation system protection, and OT security controls for warehouse automation systems. We implemented a unified compliance framework addressing multiple regulatory requirements and provided 24/7 security monitoring for critical logistics infrastructure.",
        results: [
          "Implemented comprehensive security controls across 43 logistics facilities worldwide",
          "Successfully prevented operational disruption from a targeted ransomware campaign",
          "Achieved compliance with logistics security regulations in all operating regions",
          "Secured integration of 27 different third-party logistics partners into core systems",
          "Reduced security incident response time by 76% through improved monitoring capabilities"
        ]
      }}
      complianceRequirements={[
        {
          name: "Supply Chain Security Programs",
          description: "Various customs security programs including C-TPAT (US), AEO (EU), and similar initiatives require specific security controls for international logistics operators to maintain preferential customs treatment.",
          importance: "Participation in these programs is often essential for efficient cross-border operations and can significantly impact customs clearance times and inspections frequency."
        },
        {
          name: "Transportation Security Regulations",
          description: "Regulations governing the security of different transportation modes (maritime, air, ground) impose specific security requirements on logistics operations, particularly for sensitive or high-value cargo.",
          importance: "Compliance with transportation security regulations is mandatory for operating in regulated transportation sectors and directly impacts operational capabilities."
        },
        {
          name: "Data Protection Requirements",
          description: "Logistics providers handle significant amounts of data subject to various privacy regulations, including customer information, employee data, and potentially sensitive shipment details.",
          importance: "Privacy compliance is increasingly important for logistics providers, particularly those handling cross-border shipments with varying data protection requirements."
        },
        {
          name: "Partner Security Requirements",
          description: "Logistics providers often need to meet security requirements imposed by key customers, particularly in industries like healthcare, finance, and defense that have strict supply chain security expectations.",
          importance: "Meeting partner security requirements directly impacts business opportunities and the ability to serve clients in security-sensitive industries."
        }
      ]}
      statistics={[
        {
          title: "Supply Chain Attacks",
          value: "+300%",
          context: "Increase in supply chain-based cyber attacks since 2020, with logistics providers being prime targets due to their central position in global commerce."
        },
        {
          title: "Operational Disruption",
          value: "$220K/hr",
          context: "Average cost of operational downtime for major logistics providers, highlighting the financial impact of security incidents affecting core systems."
        },
        {
          title: "IT/OT Convergence Risk",
          value: "67%",
          context: "Percentage of logistics security incidents that involve the intersection of IT and operational technology, reflecting the unique challenges in this sector."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* World Map Background (Simplified) */}
          <path d="M100,200 Q150,150 200,180 Q250,210 300,190 Q350,170 400,200 Q450,230 500,210" 
            fill="none" stroke="rgba(235, 52, 67, 0.2)" strokeWidth="1.5"/>
          
          {/* Supply Chain Network */}
          <circle cx="150" cy="180" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="r" values="20;22;20" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="150" y="184" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">🏭</text>
          
          <circle cx="250" cy="210" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="r" values="20;22;20" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          <text x="250" y="214" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">🏬</text>
          
          <circle cx="350" cy="170" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="r" values="20;22;20" dur="3s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <text x="350" y="174" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">🏪</text>
          
          <circle cx="450" cy="230" r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="r" values="20;22;20" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          <text x="450" y="234" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">🏠</text>
          
          {/* Supply Chain Connections */}
          <line x1="170" y1="180" x2="230" y2="210" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="2" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
          
          <line x1="270" y1="210" x2="330" y2="170" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="2" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </line>
          
          <line x1="370" y1="170" x2="430" y2="230" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="2" strokeDasharray="4 2">
            <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="3s" begin="1s" repeatCount="indefinite"/>
          </line>
          
          {/* Logistics Vehicles */}
          {/* Truck 1 */}
          <g transform="translate(190, 195)">
            <rect x="0" y="0" width="25" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
            <rect x="-10" y="5" width="10" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
            <circle cx="5" cy="15" r="3" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <circle cx="20" cy="15" r="3" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <animate 
              attributeName="transform" 
              type="translate" 
              from="170, 195" 
              to="210, 195" 
              dur="5s" 
              repeatCount="indefinite"
            />
          </g>
          
          {/* Truck 2 */}
          <g transform="translate(310, 190)">
            <rect x="0" y="0" width="25" height="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
            <rect x="-10" y="5" width="10" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
            <circle cx="5" cy="15" r="3" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <circle cx="20" cy="15" r="3" fill="#0A1024" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1"/>
            <animate 
              attributeName="transform" 
              type="translate" 
              from="290, 190" 
              to="330, 190" 
              dur="5s" 
              begin="1.5s"
              repeatCount="indefinite"
            />
          </g>
          
          {/* Ship */}
          <g transform="translate(400, 200)">
            <path d="M0,0 L30,0 L25,10 L5,10 Z" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
            <rect x="10" y="-10" width="10" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="1.5"/>
            <animate 
              attributeName="transform" 
              type="translate" 
              from="380, 200" 
              to="420, 200" 
              dur="7s" 
              begin="1s"
              repeatCount="indefinite"
            />
          </g>
          
          {/* Security Elements */}
          <circle cx="300" cy="100" r="40" fill="none" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2" strokeDasharray="8 4">
            <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <path d="M300 70 L330 85 L330 115 L300 130 L270 115 L270 85 Z" fill="none" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2">
            <animate attributeName="stroke-opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
          </path>
          
          <text x="300" y="110" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="30">🔒</text>
          
          {/* Security Connections to Supply Chain */}
          <line x1="290" y1="135" x2="150" y2="180" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="300" y1="140" x2="250" y2="210" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="310" y1="135" x2="350" y2="170" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1" strokeDasharray="4 2"/>
          <line x1="320" y1="130" x2="450" y2="230" stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1" strokeDasharray="4 2"/>
          
          {/* Data Transfer */}
          {[...Array(4)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${175 + (i * 5)};${225 - (i * 5)}`} 
                dur="2s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values={`${180 + (i * 2)};${208 - (i * 2)}`} 
                dur="2s" 
                begin={`${i * 0.3}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {[...Array(4)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${275 + (i * 5)};${325 - (i * 5)}`} 
                dur="2s" 
                begin={`${0.5 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values={`${210 - (i * 3)};${170 + (i * 3)}`} 
                dur="2s" 
                begin={`${0.5 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {[...Array(4)].map((_, i) => (
            <circle key={i} r="2" fill="rgba(235, 52, 67, 0.8)">
              <animate 
                attributeName="cx" 
                values={`${375 + (i * 5)};${425 - (i * 5)}`} 
                dur="2s" 
                begin={`${1 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values={`${170 + (i * 5)};${230 - (i * 5)}`} 
                dur="2s" 
                begin={`${1 + (i * 0.3)}s`} 
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {/* Security Monitoring */}
          <circle cx="300" cy="280" r="25" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
          <text x="300" y="285" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">SIEM</text>
          
          <line x1="300" y1="255" x2="150" y2="200" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="300" y1="255" x2="250" y2="220" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="300" y1="255" x2="350" y2="190" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="300" y1="255" x2="450" y2="240" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" strokeDasharray="3 2"/>
          
          {/* Labels */}
          <text x="150" y="220" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">Manufacturer</text>
          <text x="250" y="250" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">Distribution</text>
          <text x="350" y="150" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">Retail</text>
          <text x="450" y="270" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="10">Customer</text>
          <text x="300" y="60" textAnchor="middle" fill="rgba(235, 52, 67, 0.8)" fontSize="12">Supply Chain Security</text>
        </svg>
      }
      relatedServices={[
        {
          title: "Supply Chain Risk Management",
          link: "/services/risk-frameworks"
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
          title: "IT Security Audit",
          link: "/services/it-security-audit"
        },
        {
          title: "Data Privacy Consultation",
          link: "/services/data-privacy"
        },
        {
          title: "Policy Development",
          link: "/services/policy-development"
        }
      ]}
    />
  );
};

export default LogisticsPage;