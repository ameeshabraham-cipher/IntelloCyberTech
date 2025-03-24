import { 
  LayersIcon, 
  ShieldCheck, 
  Puzzle, 
  FileText, 
  CheckCircle,
  RefreshCw
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const CybersecurityFrameworksPage = () => {
  return (
    <SolutionPageLayout
      title="Cybersecurity Frameworks"
      category="Cybersecurity Solutions"
      description="Implement robust security controls aligned with industry-leading frameworks to strengthen your security posture and meet compliance requirements."
      heroIcon={<LayersIcon className="h-8 w-8" />}
      problem="Organizations struggle to establish comprehensive security programs that address evolving threats, meet diverse compliance requirements, and align with industry best practices. Without a structured approach to cybersecurity, businesses face challenges in consistently implementing controls, measuring effectiveness, and demonstrating security posture to stakeholders."
      solution="Our Cybersecurity Frameworks solution provides a structured approach to implementing security controls based on globally recognized frameworks such as NIST CSF, ISO 27001, CIS Controls, and MITRE ATT&CK. We help you tailor these frameworks to your unique business needs, prioritize control implementation, and establish a mature security program that evolves with the threat landscape while meeting regulatory requirements."
      features={[
        {
          icon: <LayersIcon className="h-6 w-6" />,
          title: "Framework Selection & Tailoring",
          description: "Expert guidance in selecting and customizing the right cybersecurity frameworks to align with your business objectives, industry requirements, and risk profile."
        },
        {
          icon: <Puzzle className="h-6 w-6" />,
          title: "Control Implementation Roadmap",
          description: "Comprehensive implementation planning with phased approaches to security control deployment, prioritized by risk reduction value and implementation complexity."
        },
        {
          icon: <ShieldCheck className="h-6 w-6" />,
          title: "Control Effectiveness Measurement",
          description: "Robust metrics and testing methodologies to measure and validate the effectiveness of implemented security controls against real-world threats."
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: "Documentation & Policy Development",
          description: "Development of comprehensive security policies, procedures, and guidelines aligned with selected frameworks and tailored to your organization's needs."
        },
        {
          icon: <CheckCircle className="h-6 w-6" />,
          title: "Compliance Mapping",
          description: "Detailed mapping of framework controls to regulatory requirements, enabling efficient compliance reporting and reducing redundant assessment efforts."
        },
        {
          icon: <RefreshCw className="h-6 w-6" />,
          title: "Continuous Improvement Cycle",
          description: "Establish an ongoing security program maturity process with regular assessments, updates, and enhancements to adapt to changing threats and business needs."
        }
      ]}
      benefits={[
        {
          title: "Structured Security Program",
          description: "Establish a comprehensive security program built on industry best practices and proven methodologies, eliminating guesswork in security implementation."
        },
        {
          title: "Streamlined Compliance",
          description: "Meet multiple compliance requirements simultaneously through strategic implementation of controls that satisfy overlapping regulatory mandates."
        },
        {
          title: "Enhanced Security Posture",
          description: "Significantly improve your security posture by implementing a balanced set of preventive, detective, and responsive controls across your organization."
        },
        {
          title: "Demonstrated Due Diligence",
          description: "Demonstrate security due diligence to stakeholders, customers, and partners through adoption of recognized security frameworks and standards."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Framework Layers */}
          <rect x="150" y="250" width="300" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="275" textAnchor="middle" fontSize="14" fill="#00E5FF">Foundational Controls</text>
          
          <rect x="170" y="200" width="260" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="225" textAnchor="middle" fontSize="14" fill="#00E5FF">Essential Controls</text>
          
          <rect x="190" y="150" width="220" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="175" textAnchor="middle" fontSize="14" fill="#00E5FF">Advanced Controls</text>
          
          <rect x="210" y="100" width="180" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="125" textAnchor="middle" fontSize="14" fill="#00E5FF">Optimized Controls</text>
          
          {/* Framework Connection Points */}
          <circle cx="150" cy="320" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="150" y="324" textAnchor="middle" fontSize="10" fill="#00E5FF">NIST</text>
          
          <circle cx="225" cy="320" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="225" y="324" textAnchor="middle" fontSize="10" fill="#00E5FF">ISO</text>
          
          <circle cx="300" cy="320" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="324" textAnchor="middle" fontSize="10" fill="#00E5FF">CIS</text>
          
          <circle cx="375" cy="320" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="375" y="324" textAnchor="middle" fontSize="8" fill="#00E5FF">MITRE</text>
          
          <circle cx="450" cy="320" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="450" y="324" textAnchor="middle" fontSize="9" fill="#00E5FF">SOC2</text>
          
          {/* Connection Lines */}
          <line x1="150" y1="305" x2="235" y2="250" stroke="#00B2A9" strokeWidth="1"/>
          <line x1="225" y1="305" x2="265" y2="250" stroke="#00B2A9" strokeWidth="1"/>
          <line x1="300" y1="305" x2="295" y2="250" stroke="#00B2A9" strokeWidth="1"/>
          <line x1="375" y1="305" x2="325" y2="250" stroke="#00B2A9" strokeWidth="1"/>
          <line x1="450" y1="305" x2="365" y2="250" stroke="#00B2A9" strokeWidth="1"/>
          
          {/* Animated Implementation Path */}
          <circle cx="300" cy="270" r="4" fill="#00E5FF">
            <animate attributeName="cy" values="290;270;220;170;120" dur="5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="310" cy="270" r="4" fill="#00E5FF" opacity="0.7">
            <animate attributeName="cy" values="290;270;220;170;120" dur="5s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="290" cy="270" r="4" fill="#00E5FF" opacity="0.7">
            <animate attributeName="cy" values="290;270;220;170;120" dur="5s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          {/* Shield Outline */}
          <path d="M300 50 Q375 90 375 150 Q375 210 300 250 Q225 210 225 150 Q225 90 300 50" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
        </svg>
      }
      relatedSolutions={[
        {
          title: "Risk Management Tools",
          link: "/solutions/risk-management"
        },
        {
          title: "Vulnerability Management",
          link: "/solutions/vulnerability-management"
        },
        {
          title: "GRC Automation Platforms",
          link: "/solutions/grc-automation"
        }
      ]}
    />
  );
};

export default CybersecurityFrameworksPage;