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
          <g className="animate-pulse" style={{ animationDuration: '3s' }}>
            <circle cx="400" cy="300" r="200" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="10 5" />
          </g>
          <g className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
            <circle cx="400" cy="300" r="150" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="8 4" />
          </g>
          <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <circle cx="400" cy="300" r="100" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="6 3" />
          </g>
          <g className="animate-pulse" style={{ animationDuration: '2s' }}>
            {/* Scanning lines */}
            <line x1="300" y1="300" x2="500" y2="300" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <line x1="400" y1="200" x2="400" y2="400" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          </g>
          <g>
            {/* Target system */}
            <rect x="370" y="270" width="60" height="60" rx="5" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="2" />
            <rect x="380" y="280" width="40" height="10" rx="2" fill="hsl(var(--secondary))" />
            <rect x="380" y="295" width="40" height="10" rx="2" fill="hsl(var(--secondary))" />
            <rect x="380" y="310" width="40" height="10" rx="2" fill="hsl(var(--secondary))" />
          </g>
          {/* Scanning/attack vectors */}
          <g>
            <path 
              d="M250,250 L370,270" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-dash"
            />
            <path 
              d="M250,350 L370,330" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-dash"
              style={{ animationDelay: '0.2s' }}
            />
            <path 
              d="M550,250 L430,270" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-dash"
              style={{ animationDelay: '0.4s' }}
            />
            <path 
              d="M550,350 L430,330" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-dash"
              style={{ animationDelay: '0.6s' }}
            />
          </g>
          <style jsx>{`
            @keyframes dash {
              to {
                stroke-dashoffset: 100;
              }
            }
            .animate-dash {
              animation: dash 3s linear infinite;
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