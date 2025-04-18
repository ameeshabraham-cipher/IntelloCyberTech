import { 
  FileText, 
  Shield, 
  Building,
  Lock,
  ClipboardList,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const SamaPage = () => {
  return (
    <ServicePageLayout
      title="SAMA Compliance"
      category="GCC Services"
      description="Achieve compliance with Saudi Central Bank (SAMA) Cybersecurity Framework through our comprehensive assessment and implementation services tailored for financial organizations operating in the Kingdom of Saudi Arabia."
      heroIcon={<Building className="h-8 w-8" />}
      overview="The Saudi Central Bank (SAMA) Cybersecurity Framework establishes comprehensive requirements for financial institutions in Saudi Arabia. Our SAMA compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping financial organizations protect data and systems while meeting regulatory obligations."
      steps={[
        {
          title: "SAMA Framework Gap Assessment",
          description: "Comprehensive evaluation of your current security controls against SAMA Cybersecurity Framework requirements to identify compliance gaps and priorities."
        },
        {
          title: "Cybersecurity Risk Assessment",
          description: "Thorough assessment of cybersecurity risks specific to your organization in alignment with SAMA's risk assessment requirements."
        },
        {
          title: "Compliance Program Development",
          description: "Creation of a structured SAMA compliance program with clear policies, procedures, and controls tailored to your organization."
        },
        {
          title: "Cybersecurity Governance Framework",
          description: "Establishment of governance structures with clear roles and responsibilities to meet SAMA's governance requirements."
        },
        {
          title: "Security Controls Implementation",
          description: "Implementation and enhancement of security controls to address identified gaps and achieve SAMA compliance."
        },
        {
          title: "Third-Party Risk Management",
          description: "Development of robust third-party risk management processes in line with SAMA requirements."
        },
        {
          title: "Training & Awareness Program",
          description: "Customized training for staff to ensure understanding of SAMA Cybersecurity Framework requirements and compliance responsibilities."
        }
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          content: "Achieve and maintain compliance with SAMA Cybersecurity Framework, avoiding potential regulatory penalties and restrictions."
        },
        {
          title: "Enhanced Security Posture",
          content: "Implement robust security controls that protect critical systems and data from cybersecurity threats."
        },
        {
          title: "Customer & Partner Trust",
          content: "Demonstrate your commitment to security and regulatory compliance, building trust with customers and partners."
        },
        {
          title: "Operational Resilience",
          content: "Improve your organization's ability to detect, respond to, and recover from cybersecurity incidents."
        },
        {
          title: "Competitive Advantage",
          content: "Differentiate your organization in the Saudi financial sector through demonstrated commitment to cybersecurity excellence."
        }
      ]}
      deliverables={[
        {
          title: "SAMA Gap Assessment Report",
          description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps."
        },
        {
          title: "Cybersecurity Risk Register",
          description: "Comprehensive inventory of cybersecurity risks with clear mitigation strategies aligned with SAMA requirements."
        },
        {
          title: "SAMA-Aligned Policies & Procedures",
          description: "Comprehensive set of policies and procedures aligned with SAMA Cybersecurity Framework requirements."
        },
        {
          title: "Security Controls Documentation",
          description: "Detailed documentation of implemented security controls mapped to SAMA requirements."
        },
        {
          title: "Incident Response Plan",
          description: "Clear procedures for detecting, investigating, and reporting cybersecurity incidents in accordance with SAMA requirements."
        },
        {
          title: "Implementation Roadmap",
          description: "Structured action plan with clear timelines and responsibilities for achieving and maintaining SAMA compliance."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SAMA & Saudi Financial Theme */}
          <rect x="150" y="120" width="300" height="160" rx="10" fill="#0A1024" stroke="#006C35" strokeWidth="2"/>
          
          {/* Central Bank Symbol */}
          <rect x="270" y="140" width="60" height="40" fill="#006C35" fillOpacity="0.3"/>
          <circle cx="300" cy="160" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="164" textAnchor="middle" fontSize="12" fill="#00E5FF">SAMA</text>
          
          {/* Cybersecurity Framework Elements */}
          <circle cx="300" cy="200" r="30" fill="#006C35" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="195" textAnchor="middle" fontSize="9" fill="#00E5FF">Cybersecurity</text>
          <text x="300" y="205" textAnchor="middle" fontSize="9" fill="#00E5FF">Framework</text>
          
          {/* Key Compliance Areas */}
          <circle cx="240" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Governance</text>
          
          <circle cx="360" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="360" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Risk</text>
          
          <circle cx="240" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="240" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Controls</text>
          
          <circle cx="360" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="360" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Response</text>
          
          <circle cx="300" cy="250" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="253" textAnchor="middle" fontSize="7" fill="#00E5FF">Reporting</text>
          
          {/* Financial Institution Elements */}
          <rect x="170" y="150" width="40" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="190" y="165" textAnchor="middle" fontSize="6" fill="#00E5FF">Banks</text>
          <text x="190" y="175" textAnchor="middle" fontSize="6" fill="#00E5FF">اﻟﺒﻨﻮك</text>
          
          <rect x="170" y="190" width="40" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="190" y="205" textAnchor="middle" fontSize="6" fill="#00E5FF">Insurance</text>
          <text x="190" y="215" textAnchor="middle" fontSize="6" fill="#00E5FF">اﻟﺘﺄﻣﻴﻦ</text>
          
          <rect x="170" y="230" width="40" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="190" y="245" textAnchor="middle" fontSize="6" fill="#00E5FF">Fintech</text>
          <text x="190" y="255" textAnchor="middle" fontSize="6" fill="#00E5FF">ﻓﻨﺘﻚ</text>
          
          <rect x="390" y="180" width="50" height="40" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
          <text x="415" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">Saudi Central</text>
          <text x="415" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Bank</text>
          
          {/* Connection Lines */}
          <line x1="210" y1="165" x2="240" y2="180" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="205" x2="240" y2="220" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="245" x2="300" y2="250" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="180" x2="390" y2="190" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="220" x2="390" y2="210" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Elements */}
          <circle cx="225" cy="173" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="165;180" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="225" cy="213" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="205;220" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="255" cy="247" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;300" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="245;250" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="185" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="360;390" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="180;190" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="215" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="360;390" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="220;210" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Framework Glow */}
          <circle cx="300" cy="200" r="35" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="r" values="35;40;35" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "KSA PDPL Compliance",
          link: "/services/ksa-pdpl"
        },
        {
          title: "Saudi Aramco Cybersecurity",
          link: "/services/saudi-aramco"
        },
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        }
      ]}
    />
  );
};

export default SamaPage;