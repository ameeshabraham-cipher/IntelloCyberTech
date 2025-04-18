import React from 'react';
import { Shield, FileSearch, Zap, CheckCircle, Microscope, FileText } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { TermTechTooltip, SecurityTechTooltip, InfoTechTooltip } from '@/components/ui/tech-tooltips';

const VaptPage = () => {
  return (
    <ServicePageLayout
      title="Vulnerability Assessment & Penetration Testing (VAPT)"
      category="IT Security Services"
      description="Comprehensive security testing to identify, exploit, and remediate vulnerabilities in your systems, applications, and infrastructure."
      heroIcon={<Shield className="h-12 w-12 text-[hsl(var(--secondary))]" />}
      overview={
        <div className="space-y-4">
          <p>
            Our VAPT services combine methodical <TermTechTooltip term="Vulnerability Assessment" definition="A systematic review of security weaknesses in a system, identifying vulnerabilities without actively exploiting them.">vulnerability assessment</TermTechTooltip> with hands-on <TermTechTooltip term="Penetration Testing" definition="An authorized simulated cyberattack on a system to evaluate its security by actively exploiting vulnerabilities.">penetration testing</TermTechTooltip> to deliver comprehensive security insights.
          </p>
          <p>
            Unlike basic security scanning, our expert-led approach identifies <SecurityTechTooltip securityText="These vulnerabilities could potentially be exploited by malicious actors to gain unauthorized access to your systems." alertLevel="high">critical security weaknesses</SecurityTechTooltip> and demonstrates real-world exploitation paths that automated tools often miss.
          </p>
          <p>
            Through a systematic methodology, we provide actionable remediation guidance prioritized by risk level to help strengthen your security posture against advanced threats.
          </p>
        </div>
      }
      steps={[
        {
          title: "Scoping & Planning",
          description: "We define the assessment scope, objectives, and testing boundaries, creating a detailed test plan tailored to your environment."
        },
        {
          title: "Information Gathering",
          description: "Our team collects technical information about your systems, network architecture, and potential entry points."
        },
        {
          title: "Vulnerability Scanning",
          description: "Using advanced tools and techniques, we perform comprehensive scanning to identify potential security weaknesses."
        },
        {
          title: "Manual Testing & Exploitation",
          description: "Our security experts manually investigate and attempt to exploit discovered vulnerabilities to determine real-world impact."
        },
        {
          title: "Analysis & Risk Assessment",
          description: "We evaluate and categorize findings based on severity, exploitability, and potential business impact."
        },
        {
          title: "Reporting & Recommendations",
          description: "Detailed documentation of findings with clear, actionable remediation steps prioritized by risk level."
        },
        {
          title: "Remediation Support",
          description: "Optional assistance with implementing security fixes and verification testing after remediation."
        }
      ]}
      benefits={[
        {
          title: "Identify Hidden Vulnerabilities",
          content: "Discover security weaknesses that automated tools and standard compliance checks often miss."
        },
        {
          title: "Real-World Attack Simulation",
          content: "Understand how actual attackers could compromise your systems and what impact successful breaches could have."
        },
        {
          title: "Compliance Support",
          content: "Meet regulatory requirements for security testing in frameworks like PCI DSS, ISO 27001, and HIPAA."
        },
        {
          title: "Proactive Risk Reduction",
          content: "Address vulnerabilities before they can be exploited, reducing the likelihood of successful cyberattacks."
        },
        {
          title: "Enhanced Security Awareness",
          content: "Build organizational understanding of security risks and best practices through the testing process."
        },
        {
          title: "Prioritized Remediation",
          content: "Focus security resources on fixing the most critical issues first based on real-world risk assessment."
        }
      ]}
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "Business-focused overview of testing results, key findings, and strategic recommendations."
        },
        {
          title: "Detailed Technical Report",
          description: "Comprehensive documentation of all vulnerabilities discovered, including technical details, exploitation methods, and evidence."
        },
        {
          title: "Risk-Based Remediation Plan",
          description: "Prioritized action plan with specific recommendations for addressing each identified vulnerability."
        },
        {
          title: "Security Posture Dashboard",
          description: "Visual representation of your overall security posture with metrics and comparison to industry benchmarks."
        },
        {
          title: "Remediation Verification",
          description: "Optional follow-up testing to verify that implemented fixes have properly addressed identified vulnerabilities."
        }
      ]}
      animationSvg={
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-lg mx-auto">
          {/* Background cybersecurity elements */}
          <g className="animate-pulse" style={{ animationDuration: '3s' }}>
            <circle cx="400" cy="300" r="210" stroke="hsl(var(--secondary) / 0.2)" strokeWidth="1" strokeDasharray="10 5" />
          </g>
          <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
            <circle cx="400" cy="300" r="160" stroke="hsl(var(--secondary) / 0.3)" strokeWidth="1.5" strokeDasharray="8 4" />
          </g>
          
          {/* Hexagonal security network */}
          <g>
            {/* Six border nodes */}
            <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0s' }}>
              <circle cx="400" cy="140" r="15" fill="hsl(var(--secondary) / 0.1)" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
              <circle cx="400" cy="460" r="15" fill="hsl(var(--secondary) / 0.1)" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
              <circle cx="230" cy="220" r="15" fill="hsl(var(--secondary) / 0.1)" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
              <circle cx="230" cy="380" r="15" fill="hsl(var(--secondary) / 0.1)" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
              <circle cx="570" cy="220" r="15" fill="hsl(var(--secondary) / 0.1)" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
              <circle cx="570" cy="380" r="15" fill="hsl(var(--secondary) / 0.1)" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
            </g>
            
            {/* Network connections */}
            <path d="M400,155 L400,285" stroke="hsl(var(--secondary) / 0.6)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" />
            <path d="M400,315 L400,445" stroke="hsl(var(--secondary) / 0.6)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.2s' }} />
            <path d="M244,227 L370,285" stroke="hsl(var(--secondary) / 0.6)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.3s' }} />
            <path d="M244,373 L370,315" stroke="hsl(var(--secondary) / 0.6)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.4s' }} />
            <path d="M556,227 L430,285" stroke="hsl(var(--secondary) / 0.6)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.5s' }} />
            <path d="M556,373 L430,315" stroke="hsl(var(--secondary) / 0.6)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.6s' }} />
            
            {/* Hexagon connections */}
            <path d="M244,227 L244,373" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.7s' }} />
            <path d="M556,227 L556,373" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.8s' }} />
            <path d="M230,220 L400,140" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '0.9s' }} />
            <path d="M400,140 L570,220" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '1.0s' }} />
            <path d="M230,380 L400,460" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '1.1s' }} />
            <path d="M400,460 L570,380" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="1" strokeDasharray="5,5" className="animate-networkPath" style={{ animationDelay: '1.2s' }} />
          </g>
          
          {/* Central target system - server */}
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            <rect x="365" y="265" width="70" height="70" rx="5" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="2" />
            
            {/* Server details */}
            <rect x="375" y="275" width="50" height="10" rx="2" fill="hsl(var(--secondary))" />
            <rect x="375" y="290" width="50" height="10" rx="2" fill="hsl(var(--secondary))" />
            <rect x="375" y="305" width="50" height="10" rx="2" fill="hsl(var(--secondary))" />
            <rect x="375" y="320" width="30" height="5" rx="1" fill="hsl(var(--secondary))" />
          </g>
          
          {/* Vulnerability scanning elements */}
          <g>
            {/* Radar scan effect */}
            <path
              d="M400,300 L600,200"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1.5"
              className="animate-radar"
            />
            <path
              d="M400,300 L600,400"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1.5"
              className="animate-radar"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M400,300 L200,200"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1.5"
              className="animate-radar"
              style={{ animationDelay: "2s" }}
            />
            <path
              d="M400,300 L200,400"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1.5"
              className="animate-radar"
              style={{ animationDelay: "3s" }}
            />
          </g>
          
          {/* Attack vectors and penetration testing visualization */}
          <g>
            {/* Multiple attack vectors with data packets */}
            <g className="animate-packet" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}>
              <path 
                d="M180,180 L365,265" 
                stroke="hsl(var(--primary))" 
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <circle cx="270" cy="220" r="5" fill="hsl(var(--primary))" />
            </g>
            
            <g className="animate-packet" style={{ animationDuration: '2.5s', animationDelay: '0.5s', animationIterationCount: 'infinite' }}>
              <path 
                d="M180,420 L365,335" 
                stroke="hsl(var(--primary))" 
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <circle cx="270" cy="380" r="5" fill="hsl(var(--primary))" />
            </g>
            
            <g className="animate-packet" style={{ animationDuration: '1.8s', animationDelay: '0.3s', animationIterationCount: 'infinite' }}>
              <path 
                d="M620,180 L435,265" 
                stroke="hsl(var(--primary))" 
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <circle cx="530" cy="220" r="5" fill="hsl(var(--primary))" />
            </g>
            
            <g className="animate-packet" style={{ animationDuration: '2.2s', animationDelay: '0.7s', animationIterationCount: 'infinite' }}>
              <path 
                d="M620,420 L435,335" 
                stroke="hsl(var(--primary))" 
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <circle cx="530" cy="380" r="5" fill="hsl(var(--primary))" />
            </g>
          </g>
          
          {/* "Vulnerabilities" being found */}
          <g>
            <circle cx="405" cy="280" r="3" fill="hsl(var(--destructive))" className="animate-vulnerability" />
            <circle cx="390" cy="305" r="3" fill="hsl(var(--destructive))" className="animate-vulnerability" style={{ animationDelay: '1s' }} />
            <circle cx="420" cy="315" r="3" fill="hsl(var(--destructive))" className="animate-vulnerability" style={{ animationDelay: '2s' }} />
            <circle cx="400" cy="330" r="3" fill="hsl(var(--destructive))" className="animate-vulnerability" style={{ animationDelay: '1.5s' }} />
          </g>
          
          {/* VAPT Report being generated */}
          <g className="animate-report" style={{ animationDelay: '2s' }}>
            <rect x="450" y="360" width="30" height="40" rx="2" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
            <path d="M455,370 L475,370" stroke="hsl(var(--secondary))" strokeWidth="1" />
            <path d="M455,375 L470,375" stroke="hsl(var(--secondary))" strokeWidth="1" />
            <path d="M455,380 L475,380" stroke="hsl(var(--secondary))" strokeWidth="1" />
            <path d="M455,385 L465,385" stroke="hsl(var(--secondary))" strokeWidth="1" />
            <circle cx="460" cy="365" r="2" fill="hsl(var(--destructive))" />
          </g>
          
          {/* Shield protection effect after vulnerabilities are identified */}
          <g className="animate-shield" style={{ animationDelay: '4s' }}>
            <path 
              d="M400,300 m-45,0 a45,45 0 1,0 90,0 a45,45 0 1,0 -90,0" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="2" 
              fill="transparent" 
              strokeDasharray="8,4"
            />
            <path 
              d="M400,285 l-20,15 l20,15 l20,-15 z" 
              fill="transparent" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="1.5"
            />
          </g>
          
          {/* Animation styles now maintained in global CSS */}
          <style jsx>{`
            .animate-radar {
              transform-origin: 400px 300px;
            }
          `}</style>
        </svg>
      }
      relatedServices={[
        {
          title: "Web Application Penetration Testing",
          link: "/services/web-pen-testing"
        },
        {
          title: "Network Penetration Testing",
          link: "/services/network-pentesting"
        },
        {
          title: "IT Security Audit",
          link: "/services/it-security-audit"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        }
      ]}
    />
  );
};

export default VaptPage;