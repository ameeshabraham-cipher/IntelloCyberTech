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
      overview="In today's sophisticated threat landscape, theoretical security assessments are no longer sufficient to protect your critical assets. Our advanced Penetration Testing services go beyond automated scanning to simulate real-world cyberattacks, uncovering exploitable vulnerabilities in your systems, applications, networks, and infrastructure that automated tools often miss. Led by certified ethical hackers with extensive offensive security experience, our team leverages the same advanced tactics, techniques, and procedures (TTPs) as malicious threat actors—including zero-day vulnerability exploitation, advanced persistent threats, social engineering, and complex attack chaining—to provide a true measure of your security resilience. We deliver actionable, prioritized remediation guidance that transforms vulnerability discoveries into concrete security improvements, significantly strengthening your defenses against the constantly evolving threat landscape while providing the necessary documentation for compliance and assurance requirements."
      steps={[
        {
          title: "Strategic Scoping & Rules of Engagement",
          description: "We begin with a collaborative planning process to precisely define testing boundaries, objectives, excluded systems, notification requirements, and emergency protocols—ensuring the penetration test aligns with your strategic security priorities while minimizing operational disruption and unintended consequences during testing activities."
        },
        {
          title: "Advanced Reconnaissance & Intelligence Gathering",
          description: "Our security researchers employ sophisticated open-source intelligence (OSINT) techniques and advanced discovery tools to gather comprehensive information about your digital footprint, including domains, IP ranges, exposed services, technology stack, potential entry points, and even publicly leaked credentials—mimicking the initial reconnaissance phase of sophisticated threat actors."
        },
        {
          title: "Comprehensive Vulnerability Scanning & Enumeration",
          description: "We deploy a combination of commercial, open-source, and custom-built vulnerability scanning tools to systematically identify potential security weaknesses across in-scope assets, followed by manual verification and enumeration to eliminate false positives and develop a comprehensive vulnerability profile of your environment."
        },
        {
          title: "Advanced Manual Exploitation",
          description: "Our certified ethical hackers execute controlled exploitation of discovered vulnerabilities using both public and proprietary exploitation techniques to validate their real-world exploitability—determining which vulnerabilities represent theoretical risks versus those that can be actively leveraged by attackers to compromise your systems and data."
        },
        {
          title: "Privilege Escalation & Lateral Movement",
          description: "After establishing initial access, we attempt to elevate privileges, compromise additional credentials, bypass security controls, and move laterally throughout your network—demonstrating how sophisticated attackers can chain multiple lower-severity vulnerabilities to achieve significant security breaches and gain unauthorized access to critical systems and data."
        },
        {
          title: "Objective Achievement & Business Impact Analysis",
          description: "We thoroughly document the potential business consequences of successful exploitation, including unauthorized data access, intellectual property exposure, operational disruption potential, financial impact, and reputation damage—translating technical vulnerabilities into clear business risks that executive stakeholders can understand and prioritize."
        },
        {
          title: "Detailed Evidence Collection & Documentation",
          description: "Throughout the testing process, we meticulously document all findings with screenshots, logs, and step-by-step exploitation procedures—creating comprehensive evidence packages that clearly demonstrate vulnerability existence, exploitation methods, and potential impact while providing your security team with the precise information needed for effective remediation."
        },
        {
          title: "Risk-Based Remediation Planning",
          description: "We develop detailed, actionable remediation recommendations for each identified vulnerability, prioritized by risk level, exploitation difficulty, potential business impact, and remediation complexity—providing both strategic guidance for leadership and technical implementation details for security teams to effectively address vulnerabilities based on your specific risk profile."
        }
      ]}
      benefits={[
        {
          title: "Critical Vulnerability Prevention",
          content: "Identify and remediate high-risk security vulnerabilities before malicious actors can discover and exploit them—significantly reducing your organization's attack surface, eliminating potential breach pathways, and potentially saving millions in breach costs, which average $4.35 million per incident according to IBM's Cost of a Data Breach Report."
        },
        {
          title: "Evidence-Based Risk Prioritization",
          content: "Transform security remediation from a theoretical checklist exercise to a focused, high-impact program by definitively validating which vulnerabilities are practically exploitable in your unique environment—enabling your security team to address the most dangerous weaknesses first and achieve maximum risk reduction with limited resources."
        },
        {
          title: "Security Control Effectiveness Validation",
          content: "Rigorously test your entire security ecosystem—including preventative controls, detection capabilities, and incident response procedures—against real-world attack techniques, identifying control gaps and blind spots that would otherwise remain undiscovered until exploited in an actual breach scenario."
        },
        {
          title: "Streamlined Regulatory Compliance",
          content: "Meet explicit penetration testing requirements for multiple regulatory standards and frameworks simultaneously—including PCI DSS, ISO 27001, SOC 2, HIPAA, GDPR, NIS2, and industry-specific regulations—with properly scoped, documented tests that satisfy auditor requirements and demonstrate due diligence in security practices."
        },
        {
          title: "Cyber Insurance Optimization",
          content: "Strengthen your cyber insurance application, potentially reduce premiums, and avoid coverage exclusions by demonstrating proactive security testing and remediation—as insurers increasingly require evidence of penetration testing and vulnerability management before providing coverage or paying claims."
        },
        {
          title: "Enhanced Security Awareness & Culture",
          content: "Transform abstract security concepts into concrete realities for technical and non-technical stakeholders through practical vulnerability demonstrations and attack simulations—dramatically increasing organizational awareness of security risks and motivating improved security practices across all levels of your organization."
        },
        {
          title: "Third-Party Risk Reduction",
          content: "Extend penetration testing to critical vendor integrations and third-party components to identify security weaknesses in your supply chain and extended ecosystem—addressing the growing threat vector of vendor compromise that traditional security assessments often overlook."
        }
      ]}
      deliverables={[
        {
          title: "Strategic Executive Summary Report",
          description: "Comprehensive executive-focused report that translates technical findings into business terms—including overall risk posture assessment, critical vulnerability summary, attack scenario impacts, remediation priorities, and concrete recommendations for security improvement—presented in language that enables informed executive decision-making without requiring technical expertise."
        },
        {
          title: "Comprehensive Technical Assessment Report",
          description: "Exhaustive technical documentation of all identified vulnerabilities with detailed descriptions, CVSS scoring, risk ratings, precise exploitation methodologies, impacted components, and affected systems—including screenshots, logs, and command sequences that provide complete transparency into vulnerability validation procedures and findings."
        },
        {
          title: "Multi-Dimensional Risk Analysis Matrix",
          description: "Sophisticated risk prioritization framework that evaluates each vulnerability across multiple dimensions—including exploitation complexity, potential business impact, required attacker skill level, affected data sensitivity, and remediation difficulty—enabling truly risk-informed remediation planning beyond simple CVSS scores."
        },
        {
          title: "Attack Chain Visualization & Analysis",
          description: "Detailed documentation and visual mapping of successful attack paths, demonstrating how multiple seemingly low-risk vulnerabilities can be chained together to achieve significant security breaches—providing crucial context for understanding the holistic security posture beyond individual vulnerabilities in isolation."
        },
        {
          title: "Customized Remediation Strategy & Roadmap",
          description: "Structured, practical implementation plan organized into immediate/critical (0-30 days), short-term (30-90 days), and long-term (90+ days) security improvements—with each recommendation including specific technical guidance, implementation complexity assessment, and resource requirements tailored to your environment."
        },
        {
          title: "Security Control Gap Analysis",
          description: "Detailed assessment of your existing security controls measured against successful penetration testing activities—identifying specific detection and prevention gaps in your security architecture and providing recommendations for control improvements to prevent similar attack vectors in the future."
        },
        {
          title: "Remediation Verification Testing",
          description: "Follow-up targeted testing focused specifically on previously identified vulnerabilities to validate remediation effectiveness—ensuring that implemented fixes truly resolve the underlying security issues rather than just masking symptoms, with comprehensive documentation suitable for compliance evidence."
        },
        {
          title: "Compliance-Ready Documentation Package",
          description: "Complete documentation set prepared specifically to satisfy the penetration testing requirements of relevant regulatory frameworks (PCI DSS, ISO 27001, SOC 2, HIPAA, etc.)—including all necessary attestations, methodologies, scope definitions, and findings summaries presented in audit-ready format."
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