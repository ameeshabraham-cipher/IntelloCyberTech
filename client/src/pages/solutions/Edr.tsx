import { 
  Laptop, 
  Shield, 
  Search, 
  AlertCircle,
  ZapOff,
  ActivitySquare
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const EdrPage = () => {
  return (
    <SolutionPageLayout
      title="Endpoint Detection & Response (EDR)"
      category="Cybersecurity Solutions"
      description="Detect, contain, and remediate advanced threats targeting your endpoints with our comprehensive Endpoint Detection & Response solutions."
      heroIcon={<Laptop className="h-8 w-8" />}
      problem="Traditional antivirus and endpoint protection solutions are increasingly ineffective against sophisticated threats like fileless malware, zero-day exploits, and advanced persistent threats (APTs). Organizations struggle with limited visibility into endpoint activity, slow threat detection, and inadequate response capabilities when security incidents occur. Without comprehensive endpoint monitoring and advanced threat detection, malicious actors can establish persistence in your environment, leading to data breaches, business disruption, and significant financial loss."
      solution="Our Endpoint Detection & Response (EDR) solutions provide continuous monitoring, threat detection, and automated response capabilities across all endpoints in your environment. By analyzing endpoint behavior, identifying suspicious activities, and enabling rapid incident response, our EDR solutions deliver comprehensive protection against advanced threats. We combine advanced technology with managed security services to ensure your endpoints are protected by expert security analysts who can detect and respond to threats 24/7."
      features={[
        {
          icon: <Search className="h-5 w-5" />,
          title: "Continuous Monitoring",
          description: "Real-time visibility into endpoint activity including process execution, file operations, network connections, and registry changes to detect anomalous behavior."
        },
        {
          icon: <ActivitySquare className="h-5 w-5" />,
          title: "Behavioral Analysis",
          description: "Advanced behavioral analytics that identify patterns indicative of malicious activity, even when threats use legitimate system resources or fileless techniques."
        },
        {
          icon: <AlertCircle className="h-5 w-5" />,
          title: "Threat Intelligence Integration",
          description: "Continuous updates from global threat intelligence feeds to identify and block the latest attack techniques, malware variants, and emerging threats."
        },
        {
          icon: <ZapOff className="h-5 w-5" />,
          title: "Automated Response",
          description: "Immediate automated actions to contain threats, including process termination, network isolation, file quarantine, and system rollback capabilities."
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Forensic Investigation",
          description: "Comprehensive forensic data collection and investigation tools that enable detailed analysis of security incidents and accelerate response efforts."
        }
      ]}
      benefits={[
        {
          title: "Advanced Threat Protection",
          description: "Detect and block sophisticated attacks that evade traditional security controls, including fileless malware, living-off-the-land techniques, and zero-day exploits."
        },
        {
          title: "Rapid Incident Response",
          description: "Significantly reduce mean time to detect (MTTD) and mean time to respond (MTTR) with automated detection and response capabilities."
        },
        {
          title: "Comprehensive Visibility",
          description: "Gain complete visibility into endpoint activity across your environment, enabling more effective threat hunting and security management."
        },
        {
          title: "Reduced Business Impact",
          description: "Minimize the impact of security incidents through early detection and rapid containment before threats can spread across your environment."
        },
        {
          title: "Compliance Support",
          description: "Meet regulatory requirements for endpoint monitoring, incident detection, and breach reporting with comprehensive audit trails and reporting capabilities."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Console */}
          <rect x="250" y="180" width="100" height="80" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="2"/>
          <text x="300" y="210" textAnchor="middle" fontSize="14" fill="#00B2A9">EDR</text>
          <text x="300" y="230" textAnchor="middle" fontSize="14" fill="#00B2A9">Platform</text>
          
          {/* Endpoints */}
          <rect x="150" y="100" width="60" height="40" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <rect x="155" y="110" width="50" height="25" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="175" y="140" width="10" height="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="180" y="150" textAnchor="middle" fontSize="10" fill="#00E5FF">Laptop</text>
          
          <rect x="390" y="100" width="60" height="40" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <rect x="395" y="110" width="50" height="25" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="415" y="140" width="10" height="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="420" y="150" textAnchor="middle" fontSize="10" fill="#00E5FF">Laptop</text>
          
          <rect x="150" y="300" width="60" height="45" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <rect x="160" y="305" width="40" height="30" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="180" y="355" textAnchor="middle" fontSize="10" fill="#00E5FF">Workstation</text>
          
          <rect x="390" y="300" width="60" height="45" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <rect x="400" y="305" width="40" height="30" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="420" y="355" textAnchor="middle" fontSize="10" fill="#00E5FF">Server</text>
          
          {/* Connections */}
          <line x1="180" y1="140" x2="250" y2="180" stroke="#00E5FF" strokeWidth="1"/>
          <line x1="420" y1="140" x2="350" y2="180" stroke="#00E5FF" strokeWidth="1"/>
          <line x1="180" y1="300" x2="250" y2="260" stroke="#00E5FF" strokeWidth="1"/>
          <line x1="420" y1="300" x2="350" y2="260" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Monitoring & Response */}
          <circle cx="180" cy="200" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="180" y="195" textAnchor="middle" fontSize="8" fill="#00E5FF">Monitor</text>
          <text x="180" y="205" textAnchor="middle" fontSize="8" fill="#00E5FF">Activity</text>
          
          <circle cx="180" cy="250" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="180" y="245" textAnchor="middle" fontSize="8" fill="#00E5FF">Detect</text>
          <text x="180" y="255" textAnchor="middle" fontSize="8" fill="#00E5FF">Threats</text>
          
          <circle cx="420" cy="200" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="420" y="195" textAnchor="middle" fontSize="8" fill="#00E5FF">Contain</text>
          <text x="420" y="205" textAnchor="middle" fontSize="8" fill="#00E5FF">Threats</text>
          
          <circle cx="420" cy="250" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="420" y="245" textAnchor="middle" fontSize="8" fill="#00E5FF">Remediate</text>
          <text x="420" y="255" textAnchor="middle" fontSize="8" fill="#00E5FF">Endpoints</text>
          
          {/* Process Connections */}
          <line x1="200" y1="200" x2="250" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="200" y1="250" x2="250" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="210" x2="400" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="350" y1="230" x2="400" y2="250" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Threats */}
          <path d="M120 100 C 90 100, 90 120, 120 120" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          <text x="70" y="100" fontSize="10" fill="#FF5252">Malware</text>
          <text x="70" y="110" fontSize="10" fill="#FF5252">Attack</text>
          
          <path d="M480 100 C 510 100, 510 120, 480 120" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          <text x="530" y="110" fontSize="10" fill="#FF5252">Fileless</text>
          <text x="530" y="120" fontSize="10" fill="#FF5252">Attack</text>
          
          <path d="M120 320 C 90 320, 90 340, 120 340" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          <text x="70" y="330" fontSize="10" fill="#FF5252">Ransomware</text>
          
          <path d="M480 320 C 510 320, 510 340, 480 340" stroke="#FF5252" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          <text x="530" y="330" fontSize="10" fill="#FF5252">Data</text>
          <text x="530" y="340" fontSize="10" fill="#FF5252">Exfiltration</text>
          
          {/* SOC Integration */}
          <rect x="250" y="80" width="100" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="100" textAnchor="middle" fontSize="12" fill="#00E5FF">Security</text>
          <text x="300" y="115" textAnchor="middle" fontSize="12" fill="#00E5FF">Operations</text>
          
          <line x1="300" y1="120" x2="300" y2="180" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Animation Elements */}
          <circle cx="105" cy="110" r="3" fill="#FF5252">
            <animate attributeName="cx" values="90;120" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="495" cy="110" r="3" fill="#FF5252">
            <animate attributeName="cx" values="510;480" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="105" cy="330" r="3" fill="#FF5252">
            <animate attributeName="cx" values="90;120" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="495" cy="330" r="3" fill="#FF5252">
            <animate attributeName="cx" values="510;480" dur="2s" begin="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="215" cy="160" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="180;250" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="140;180" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="385" cy="160" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="420;350" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="140;180" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="215" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="180;250" dur="2s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="300;260" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="385" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="420;350" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="300;260" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="225" cy="205" r="3" fill="#00B2A9">
            <animate attributeName="cx" values="200;250" dur="2s" begin="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="200;210" dur="2s" begin="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="225" cy="240" r="3" fill="#00B2A9">
            <animate attributeName="cx" values="200;250" dur="2s" begin="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="250;230" dur="2s" begin="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="205" r="3" fill="#00B2A9">
            <animate attributeName="cx" values="400;350" dur="2s" begin="3.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="200;210" dur="2s" begin="3.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="240" r="3" fill="#00B2A9">
            <animate attributeName="cx" values="400;350" dur="2s" begin="4s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="250;230" dur="2s" begin="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="150" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="120;180" dur="3s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          {/* Blocked Attack Indicators */}
          <path d="M130 120 L 140 110 M130 110 L 140 120" stroke="#00B2A9" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="2.5s" repeatCount="indefinite"/>
          </path>
          
          <path d="M470 120 L 480 110 M470 110 L 480 120" stroke="#00B2A9" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="3s" repeatCount="indefinite"/>
          </path>
          
          <path d="M130 340 L 140 330 M130 330 L 140 340" stroke="#00B2A9" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="3.5s" repeatCount="indefinite"/>
          </path>
          
          <path d="M470 340 L 480 330 M470 330 L 480 340" stroke="#00B2A9" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="4s" repeatCount="indefinite"/>
          </path>
          
          {/* Title */}
          <text x="300" y="60" textAnchor="middle" fontSize="16" fill="#00E5FF">Endpoint Detection & Response</text>
        </svg>
      }
      relatedSolutions={[
        {
          title: "Extended Detection & Response (XDR)",
          link: "/solutions/xdr"
        },
        {
          title: "Email Security Solutions",
          link: "/solutions/email-security"
        },
        {
          title: "Security Operations Center (SOC)",
          link: "/solutions/soc-as-a-service"
        }
      ]}
    />
  );
};

export default EdrPage;