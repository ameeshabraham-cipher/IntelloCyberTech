import { 
  Search, 
  Bug, 
  Shield, 
  Terminal,
  AlertTriangle,
  CheckSquare
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const PenetrationTestingPage = () => {
  return (
    <ServicePageLayout
      title="Penetration Testing"
      category="IT Security & Audit Services"
      description="Identify and address exploitable security vulnerabilities before attackers can with our comprehensive penetration testing services."
      heroIcon={<Bug className="h-8 w-8" />}
      overview="Our Penetration Testing services simulate real-world attacks to identify exploitable vulnerabilities in your systems, applications, and infrastructure. Led by certified ethical hackers who leverage the latest attack techniques and methodologies, our penetration tests provide clear visibility into your security weaknesses along with actionable recommendations to strengthen your defenses against actual attackers."
      steps={[
        {
          title: "Scoping & Planning",
          description: "Collaborative definition of test scope, objectives, and rules of engagement to align with your security priorities and risk concerns."
        },
        {
          title: "Reconnaissance & Discovery",
          description: "Thorough information gathering and target discovery to identify potential entry points and vulnerabilities for further exploitation."
        },
        {
          title: "Vulnerability Assessment",
          description: "Systematic identification of security weaknesses across in-scope systems, networks, applications, and configurations."
        },
        {
          title: "Exploitation Testing",
          description: "Controlled exploitation of discovered vulnerabilities to validate their exploitability and potential business impact."
        },
        {
          title: "Privilege Escalation",
          description: "Attempts to escalate privileges and move laterally within the environment to simulate a sophisticated attack chain."
        },
        {
          title: "Post-Exploitation Analysis",
          description: "Assessment of potential impact had the exploitation been conducted by a malicious attacker, including data access and business disruption."
        },
        {
          title: "Remediation Planning",
          description: "Development of prioritized, actionable recommendations to address identified vulnerabilities based on risk and technical complexity."
        }
      ]}
      benefits={[
        {
          title: "Proactive Vulnerability Discovery",
          content: "Identify security weaknesses before malicious actors can discover and exploit them, reducing your attack surface and potential breach risk."
        },
        {
          title: "Real-World Risk Validation",
          content: "Verify the actual exploitability of vulnerabilities rather than relying on theoretical assessments, enabling risk-based prioritization."
        },
        {
          title: "Defense Validation",
          content: "Test the effectiveness of your security controls, monitoring, and incident response capabilities against sophisticated attack techniques."
        },
        {
          title: "Compliance Support",
          content: "Meet penetration testing requirements for various regulatory standards and frameworks, including PCI DSS, ISO 27001, and SOC 2."
        },
        {
          title: "Security Awareness",
          content: "Increase organizational awareness of security risks and attack vectors through practical demonstrations and realistic exploitation scenarios."
        }
      ]}
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "High-level overview of penetration test findings, key risks, and strategic recommendations designed for executive stakeholders."
        },
        {
          title: "Detailed Technical Report",
          description: "Comprehensive documentation of all identified vulnerabilities, including technical details, exploitation methods, and supporting evidence."
        },
        {
          title: "Risk-Rated Vulnerability Register",
          description: "Prioritized inventory of discovered vulnerabilities with severity ratings, exploitation difficulty, and potential business impact."
        },
        {
          title: "Attack Path Analysis",
          description: "Detailed documentation of successful attack paths, demonstrating how multiple vulnerabilities can be chained for maximum impact."
        },
        {
          title: "Remediation Roadmap",
          description: "Structured implementation plan with short, medium, and long-term security improvements prioritized by risk reduction value."
        },
        {
          title: "Retest Validation",
          description: "Optional follow-up testing to verify successful remediation of previously identified vulnerabilities and effectiveness of implemented fixes."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Network Structure */}
          <rect x="250" y="150" width="100" height="150" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Server Elements */}
          <rect x="270" y="170" width="60" height="20" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="270" y="200" width="60" height="20" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="270" y="230" width="60" height="20" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="270" y="260" width="60" height="20" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Attack Vectors */}
          <path d="M150 150 L250 180" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3">
            <animate attributeName="stroke-opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </path>
          
          <path d="M150 200 L250 210" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3">
            <animate attributeName="stroke-opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite"/>
          </path>
          
          <path d="M150 250 L250 240" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3">
            <animate attributeName="stroke-opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
          </path>
          
          <path d="M150 300 L250 270" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3">
            <animate attributeName="stroke-opacity" values="1;0.3;1" dur="3.5s" repeatCount="indefinite"/>
          </path>
          
          {/* Attack Source */}
          <circle cx="150" cy="150" r="15" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
          <text x="150" y="153" textAnchor="middle" fontSize="8" fill="#FF5252">Web App</text>
          <text x="150" y="163" textAnchor="middle" fontSize="8" fill="#FF5252">Attack</text>
          
          <circle cx="150" cy="200" r="15" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
          <text x="150" y="203" textAnchor="middle" fontSize="8" fill="#FF5252">Network</text>
          <text x="150" y="213" textAnchor="middle" fontSize="8" fill="#FF5252">Exploit</text>
          
          <circle cx="150" cy="250" r="15" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
          <text x="150" y="253" textAnchor="middle" fontSize="8" fill="#FF5252">API</text>
          <text x="150" y="263" textAnchor="middle" fontSize="8" fill="#FF5252">Hack</text>
          
          <circle cx="150" cy="300" r="15" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
          <text x="150" y="303" textAnchor="middle" fontSize="8" fill="#FF5252">Social</text>
          <text x="150" y="313" textAnchor="middle" fontSize="8" fill="#FF5252">Engineer</text>
          
          {/* Vulnerability Targets */}
          <circle cx="300" cy="180" r="5" fill="#FF5252">
            <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="210" r="5" fill="#FF5252">
            <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Defense Elements */}
          <rect x="400" y="150" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="440" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">Identify</text>
          
          <rect x="400" y="190" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="440" y="210" textAnchor="middle" fontSize="10" fill="#00E5FF">Exploit</text>
          
          <rect x="400" y="230" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="440" y="250" textAnchor="middle" fontSize="10" fill="#00E5FF">Report</text>
          
          <rect x="400" y="270" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="440" y="290" textAnchor="middle" fontSize="10" fill="#00E5FF">Remediate</text>
          
          {/* Connection Lines */}
          <line x1="350" y1="165" x2="400" y2="165" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="205" x2="400" y2="205" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="245" x2="400" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="285" x2="400" y2="285" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Scan */}
          <rect x="250" y="150" width="100" height="150" rx="10" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite"/>
          </rect>
          
          <line x1="290" y1="100" x2="290" y2="140" stroke="#00B2A9" strokeWidth="1" fill="none"/>
          <line x1="310" y1="100" x2="310" y2="140" stroke="#00B2A9" strokeWidth="1" fill="none"/>
          <rect x="275" y="85" width="50" height="15" rx="2" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="300" y="96" textAnchor="middle" fontSize="8" fill="#00E5FF">TARGET</text>
          
          {/* Title */}
          <text x="300" y="65" textAnchor="middle" fontSize="16" fill="#00E5FF">Penetration Testing</text>
          
          {/* Animated Elements */}
          <circle cx="375" cy="165" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="350;400" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="205" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="350;400" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="245" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="350;400" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="285" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="350;400" dur="3.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Vulnerability Management",
          link: "/solutions/vulnerability-management"
        },
        {
          title: "IT Security Audit",
          link: "/services/it-security-audit"
        }
      ]}
    />
  );
};

export default PenetrationTestingPage;