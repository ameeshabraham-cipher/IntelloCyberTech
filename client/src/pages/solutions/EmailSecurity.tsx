import { 
  Mail, 
  Shield, 
  Lock, 
  FileSearch,
  Zap,
  CheckCircle
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const EmailSecurityPage = () => {
  return (
    <SolutionPageLayout
      title="Email Security Solutions"
      category="Cybersecurity Solutions"
      description="Protect your organization from phishing attacks, business email compromise, and malware with comprehensive email security solutions."
      heroIcon={<Mail className="h-8 w-8" />}
      problem="Email remains the primary attack vector for cybercriminals, with 90% of successful cyberattacks beginning with phishing emails. Organizations face increasingly sophisticated threats including targeted spear phishing, business email compromise (BEC), malware distribution, and advanced social engineering attacks. Traditional security solutions often fail to detect these evolving threats, leaving businesses vulnerable to data breaches, financial fraud, and reputation damage."
      solution="Our comprehensive Email Security Solutions combine advanced technology with security expertise to protect your organization from email-based threats. We implement multi-layered security controls including AI-powered threat detection, behavioral analysis, anti-spoofing protection, and user awareness training. Our solutions deliver robust protection against phishing, malware, and account takeover attempts while maintaining email functionality and minimizing user disruption."
      features={[
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Advanced Threat Protection",
          description: "AI and machine learning technology that detects and blocks sophisticated phishing attempts, zero-day threats, and malware before they reach your inbox."
        },
        {
          icon: <Lock className="h-5 w-5" />,
          title: "Anti-Spoofing Protection",
          description: "Implementation of DMARC, SPF, and DKIM authentication protocols to prevent email spoofing and protect your brand from impersonation attacks."
        },
        {
          icon: <FileSearch className="h-5 w-5" />,
          title: "Content Filtering & Scanning",
          description: "Deep content inspection of email body, links, and attachments to identify malicious content, suspicious behavior patterns, and hidden threats."
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Real-Time Threat Intelligence",
          description: "Integration with global threat intelligence networks for immediate protection against emerging threats and attack campaigns."
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Email Authentication",
          description: "Implementation of strong authentication mechanisms to prevent unauthorized access to email accounts and protect sensitive communications."
        }
      ]}
      benefits={[
        {
          title: "Reduced Security Incidents",
          description: "Dramatically decrease the number of successful phishing attacks, malware infections, and BEC attempts targeting your organization."
        },
        {
          title: "Comprehensive Protection",
          description: "Multi-layered defense against the full spectrum of email-based threats including phishing, malware, ransomware, spoofing, and social engineering."
        },
        {
          title: "Regulatory Compliance",
          description: "Meet email security requirements for various compliance frameworks including PCI DSS, HIPAA, GDPR, and industry-specific regulations."
        },
        {
          title: "Business Continuity",
          description: "Ensure reliable email communication while preventing disruptions, data loss, and financial damage caused by email-based attacks."
        },
        {
          title: "Brand Protection",
          description: "Prevent email domain spoofing and impersonation attacks that could damage your brand reputation and customer trust."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Email Servers */}
          <rect x="150" y="100" width="100" height="60" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="200" y="135" textAnchor="middle" fontSize="12" fill="#00E5FF">External</text>
          <text x="200" y="150" textAnchor="middle" fontSize="12" fill="#00E5FF">Email</text>
          
          <rect x="350" y="100" width="100" height="60" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="400" y="135" textAnchor="middle" fontSize="12" fill="#00E5FF">Internal</text>
          <text x="400" y="150" textAnchor="middle" fontSize="12" fill="#00E5FF">Email</text>
          
          {/* Security Gateway */}
          <rect x="250" y="180" width="100" height="80" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="2"/>
          <text x="300" y="200" textAnchor="middle" fontSize="14" fill="#00B2A9">Email</text>
          <text x="300" y="220" textAnchor="middle" fontSize="14" fill="#00B2A9">Security</text>
          <text x="300" y="240" textAnchor="middle" fontSize="14" fill="#00B2A9">Gateway</text>
          
          {/* Connection Lines */}
          <line x1="200" y1="160" x2="250" y2="180" stroke="#00E5FF" strokeWidth="1.5"/>
          <line x1="350" y1="180" x2="400" y2="160" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Security Components */}
          <circle cx="225" cy="290" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="225" y="285" textAnchor="middle" fontSize="10" fill="#00E5FF">Anti-</text>
          <text x="225" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">Phishing</text>
          
          <circle cx="275" cy="290" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="275" y="285" textAnchor="middle" fontSize="10" fill="#00E5FF">Anti-</text>
          <text x="275" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">Malware</text>
          
          <circle cx="325" cy="290" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="325" y="285" textAnchor="middle" fontSize="10" fill="#00E5FF">Content</text>
          <text x="325" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">Filter</text>
          
          <circle cx="375" cy="290" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="375" y="285" textAnchor="middle" fontSize="10" fill="#00E5FF">DMARC/</text>
          <text x="375" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">SPF/DKIM</text>
          
          {/* Component Connections */}
          <line x1="225" y1="265" x2="260" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="275" y1="265" x2="280" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="325" y1="265" x2="320" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="375" y1="265" x2="340" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Threats */}
          <path d="M120 130 C 90 130, 90 170, 120 170" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          <text x="60" y="150" fontSize="10" fill="#FF5252">Phishing</text>
          
          <path d="M120 90 C 90 90, 90 110, 120 110" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          <text x="60" y="100" fontSize="10" fill="#FF5252">Malware</text>
          
          <path d="M120 170 C 90 170, 90 190, 120 190" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          <text x="70" y="190" fontSize="10" fill="#FF5252">Spoofing</text>
          
          {/* Users & Devices */}
          <rect x="350" y="330" width="100" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="400" y="350" textAnchor="middle" fontSize="12" fill="#00E5FF">Protected Users</text>
          
          <rect x="150" y="330" width="100" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="200" y="350" textAnchor="middle" fontSize="12" fill="#00E5FF">Security Policies</text>
          
          {/* System Connections */}
          <line x1="225" y1="315" x2="200" y2="330" stroke="#00E5FF" strokeWidth="1"/>
          <line x1="275" y1="315" x2="240" y2="330" stroke="#00E5FF" strokeWidth="1"/>
          <line x1="325" y1="315" x2="360" y2="330" stroke="#00E5FF" strokeWidth="1"/>
          <line x1="375" y1="315" x2="400" y2="330" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Animation Elements */}
          <circle cx="170" cy="170" r="3" fill="#FF5252">
            <animate attributeName="cx" values="120;240" dur="2s" begin="0.1s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="150;180" dur="2s" begin="0.1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="170" cy="110" r="3" fill="#FF5252">
            <animate attributeName="cx" values="120;240" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="100;180" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="170" cy="190" r="3" fill="#FF5252">
            <animate attributeName="cx" values="120;240" dur="3s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="180;180" dur="3s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="170" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="300;350" dur="2s" begin="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="170;150" dur="2s" begin="3s" repeatCount="indefinite"/>
          </circle>
          
          {/* Blocked Indicator */}
          <rect x="240" y="170" width="10" height="20" rx="2" fill="#0A1024" stroke="#00B2A9" strokeWidth="1" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="2s" repeatCount="indefinite"/>
          </rect>
          
          {/* Shield Overlay */}
          <path d="M250 180 Q300 130 350 180 Q350 230 300 250 Q250 230 250 180" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </path>
          
          {/* Title */}
          <text x="300" y="60" textAnchor="middle" fontSize="16" fill="#00E5FF">Email Security Solutions</text>
        </svg>
      }
      relatedSolutions={[
        {
          title: "Data Loss Prevention",
          link: "/solutions/data-loss-prevention"
        },
        {
          title: "Endpoint Detection & Response",
          link: "/solutions/edr"
        },
        {
          title: "Security Awareness Training",
          link: "/solutions/security-awareness"
        }
      ]}
    />
  );
};

export default EmailSecurityPage;