import { 
  TargetIcon, 
  Code, 
  Server, 
  Smartphone,
  Shield,
  Network
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const PenetrationTestingPage = () => {
  return (
    <ServicePageLayout
      title="Penetration Testing"
      category="Cybersecurity Services"
      description="Identify and remediate security vulnerabilities before they can be exploited with our comprehensive penetration testing services."
      heroIcon={<TargetIcon className="h-8 w-8" />}
      overview="Penetration testing, or ethical hacking, simulates real-world attacks on your systems, applications, and infrastructure to identify security vulnerabilities that could be exploited by malicious actors. Our comprehensive penetration testing services combine advanced automated tools with expert manual testing to deliver actionable insights that help you strengthen your security posture and protect your critical assets."
      steps={[
        {
          title: "Scoping & Planning",
          description: "Collaborative definition of testing scope, objectives, and constraints to ensure alignment with your security goals and regulatory requirements."
        },
        {
          title: "Reconnaissance & Discovery",
          description: "Comprehensive information gathering to identify potential entry points, assets, and attack vectors within the defined scope."
        },
        {
          title: "Vulnerability Scanning",
          description: "Automated scanning using industry-leading tools to identify known vulnerabilities across systems, networks, and applications."
        },
        {
          title: "Manual Penetration Testing",
          description: "Expert-led exploitation attempts to validate vulnerabilities, explore attack chains, and identify complex security issues that automated tools miss."
        },
        {
          title: "Privilege Escalation Testing",
          description: "Attempts to escalate access privileges to assess the potential impact if initial defenses are breached."
        },
        {
          title: "Post-Exploitation Analysis",
          description: "Assessment of what critical assets and data could be compromised if vulnerabilities are successfully exploited."
        },
        {
          title: "Reporting & Remediation Planning",
          description: "Detailed documentation of findings with clear, prioritized remediation recommendations and technical guidance."
        }
      ]}
      benefits={[
        {
          title: "Proactive Vulnerability Identification",
          content: "Discover and address security weaknesses before they can be exploited by malicious actors, reducing your overall risk exposure."
        },
        {
          title: "Regulatory Compliance",
          content: "Meet penetration testing requirements for various compliance standards, including PCI DSS, ISO 27001, and SOC 2."
        },
        {
          title: "Independent Security Validation",
          content: "Gain unbiased verification of your security controls' effectiveness from experts with an attacker's perspective."
        },
        {
          title: "Reduced Security Incident Costs",
          content: "Minimize the potential financial impact of security breaches by addressing vulnerabilities before they can be exploited."
        },
        {
          title: "Security Awareness Improvement",
          content: "Enhance your team's security awareness through concrete examples of vulnerabilities in your own environment."
        }
      ]}
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "High-level overview of testing results, key findings, and risk assessment designed for executive stakeholders."
        },
        {
          title: "Detailed Technical Report",
          description: "Comprehensive documentation of all identified vulnerabilities, including proof-of-concept details, supporting evidence, and technical impact."
        },
        {
          title: "Remediation Roadmap",
          description: "Prioritized recommendations for addressing identified vulnerabilities, including specific technical guidance for remediation."
        },
        {
          title: "Retest Validation",
          description: "Follow-up testing to verify that identified vulnerabilities have been properly remediated (available as an optional service)."
        },
        {
          title: "Security Posture Scorecard",
          description: "Comparative assessment of your security posture against industry benchmarks and best practices."
        },
        {
          title: "Technical Debrief Session",
          description: "Interactive walkthrough of findings with your technical team to ensure clear understanding of vulnerabilities and remediation approaches."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Network Topology */}
          <rect x="275" y="175" width="50" height="50" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="205" textAnchor="middle" fontSize="12" fill="#00E5FF">Server</text>
          
          <rect x="200" y="125" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="220" y="150" textAnchor="middle" fontSize="10" fill="#00E5FF">Web</text>
          
          <rect x="200" y="235" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="220" y="260" textAnchor="middle" fontSize="10" fill="#00E5FF">DB</text>
          
          <rect x="360" y="125" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="380" y="150" textAnchor="middle" fontSize="10" fill="#00E5FF">API</text>
          
          <rect x="360" y="235" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="380" y="260" textAnchor="middle" fontSize="10" fill="#00E5FF">App</text>
          
          {/* Connection Lines */}
          <line x1="240" y1="145" x2="275" y2="175" stroke="#00B2A9" strokeWidth="1.5"/>
          <line x1="240" y1="255" x2="275" y2="225" stroke="#00B2A9" strokeWidth="1.5"/>
          <line x1="325" y1="175" x2="360" y2="145" stroke="#00B2A9" strokeWidth="1.5"/>
          <line x1="325" y1="225" x2="360" y2="255" stroke="#00B2A9" strokeWidth="1.5"/>
          
          {/* Penetration Testing Elements */}
          <rect x="130" y="180" width="40" height="40" rx="5" fill="#0A1024" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1.5"/>
          <text x="150" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">Tester</text>
          
          {/* Attack Vectors */}
          <path d="M170 190 Q200 180 240 145" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M170 210 Q200 220 240 255" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M170 200 L275 200" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M170 195 Q220 170 380 145" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M170 205 Q220 230 380 255" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Target Icons */}
          <circle cx="240" cy="145" r="10" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="240" cy="145" r="5" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="240" cy="145" r="2" fill="#FF0000" fillOpacity="0.5"/>
          
          <circle cx="240" cy="255" r="10" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="240" cy="255" r="5" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="240" cy="255" r="2" fill="#FF0000" fillOpacity="0.5"/>
          
          <circle cx="300" cy="200" r="10" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="300" cy="200" r="5" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="300" cy="200" r="2" fill="#FF0000" fillOpacity="0.5"/>
          
          <circle cx="380" cy="145" r="10" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="380" cy="145" r="5" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="380" cy="145" r="2" fill="#FF0000" fillOpacity="0.5"/>
          
          <circle cx="380" cy="255" r="10" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="380" cy="255" r="5" fill="none" stroke="#FF0000" strokeOpacity="0.5" strokeWidth="1"/>
          <circle cx="380" cy="255" r="2" fill="#FF0000" fillOpacity="0.5"/>
          
          {/* Security Shield */}
          <path d="M440 180 Q480 190 480 220 Q480 250 440 260 Q400 250 400 220 Q400 190 440 180" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5 3"/>
          <text x="440" y="225" textAnchor="middle" fontSize="12" fill="#00E5FF">Security</text>
          <text x="440" y="240" textAnchor="middle" fontSize="12" fill="#00E5FF">Controls</text>
          
          {/* Animated Scanning */}
          <circle cx="150" cy="195" r="25" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          {/* Animated Attack Paths */}
          <circle cx="185" cy="185" r="3" fill="#FF0000" fillOpacity="0.5">
            <animate attributeName="cx" values="170;240" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="190;145" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="185" cy="215" r="3" fill="#FF0000" fillOpacity="0.5">
            <animate attributeName="cx" values="170;240" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="210;255" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="222" cy="200" r="3" fill="#FF0000" fillOpacity="0.5">
            <animate attributeName="cx" values="170;275" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="200;200" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="275" cy="170" r="3" fill="#FF0000" fillOpacity="0.5">
            <animate attributeName="cx" values="170;380" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="195;145" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="275" cy="230" r="3" fill="#FF0000" fillOpacity="0.5">
            <animate attributeName="cx" values="170;380" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="205;255" dur="3.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "Vulnerability Management",
          link: "/solutions/vulnerability-management"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Cloud Security Assessment",
          link: "/services/cloud-security"
        }
      ]}
    />
  );
};

export default PenetrationTestingPage;