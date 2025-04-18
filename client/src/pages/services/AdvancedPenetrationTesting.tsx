import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Bug, Code, Network, Lock, FileText, Target, Eye, AlertTriangle } from 'lucide-react';

const AdvancedPenetrationTestingPage = () => {
  return (
    <ServicePageLayout
      title="Advanced Penetration Testing"
      category="Cybersecurity Services"
      description="Our Advanced Penetration Testing service goes beyond standard testing methodologies to simulate sophisticated threat actors and complex attack scenarios. We identify critical vulnerabilities in your systems using advanced exploitation techniques that mimic real-world attackers."
      heroIcon={<Shield className="h-8 w-8" />}
      overview="Standard penetration testing often misses sophisticated vulnerabilities that advanced threat actors can exploit. Our Advanced Penetration Testing service addresses this gap by employing senior security experts who simulate real-world adversaries using the latest attack techniques. We conduct targeted assessments focused on your most critical assets and specific threat scenarios relevant to your industry. This approach provides deeper insights into your security posture and delivers actionable remediation guidance prioritized by business risk."
      
      steps={[
        {
          title: "Threat Modeling & Scoping",
          description: "Define test objectives based on your specific threat landscape, industry risk factors, and critical assets."
        },
        {
          title: "Reconnaissance",
          description: "Conduct thorough intelligence gathering using both public and specialized sources to identify potential attack vectors."
        },
        {
          title: "Vulnerability Assessment",
          description: "Identify security weaknesses across your environment using advanced scanning techniques and expert analysis."
        },
        {
          title: "Exploitation",
          description: "Attempt controlled exploitation of discovered vulnerabilities, including custom exploit development for unique scenarios."
        },
        {
          title: "Post-Exploitation",
          description: "Simulate lateral movement, privilege escalation, and data exfiltration to demonstrate potential impact of vulnerabilities."
        },
        {
          title: "Detailed Reporting",
          description: "Provide comprehensive documentation of findings, including technical details, business impact, and prioritized remediation guidance."
        }
      ]}
      
      benefits={[
        {
          title: "Identify Sophisticated Vulnerabilities",
          content: "Uncover complex security flaws that standard automated tools and basic penetration testing would miss."
        },
        {
          title: "Realistic Threat Simulation",
          content: "Experience attacks that mirror the tactics, techniques, and procedures (TTPs) of advanced threat actors targeting your industry."
        },
        {
          title: "Business-Focused Reporting",
          content: "Receive detailed reports that translate technical vulnerabilities into business risks with clear remediation priorities."
        },
        {
          title: "Strengthen Security Posture",
          content: "Build stronger defenses based on insights from realistic attack simulations and expert recommendations."
        },
        {
          title: "Compliance Validation",
          content: "Verify the effectiveness of security controls required by various compliance frameworks and regulatory requirements."
        }
      ]}
      
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "High-level overview of findings, business impact, and strategic recommendations designed for executive stakeholders."
        },
        {
          title: "Detailed Technical Report",
          description: "Comprehensive documentation of all identified vulnerabilities, including technical details, proof of concept, and exploitation steps."
        },
        {
          title: "Attack Narrative",
          description: "Detailed walkthrough of attack paths followed during testing, demonstrating how multiple vulnerabilities can be chained together."
        },
        {
          title: "Remediation Roadmap",
          description: "Prioritized action plan for addressing identified vulnerabilities with specific technical recommendations and timelines."
        },
        {
          title: "Security Control Recommendations",
          description: "Strategic guidance for improving defensive controls and detection capabilities based on testing results."
        },
        {
          title: "Evidence Package",
          description: "Collection of screenshots, logs, and other artifacts demonstrating the impact of identified security issues."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Target System */}
          <rect x="320" y="150" width="200" height="120" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="420" y="140" textAnchor="middle" fontSize="14" fill="#00E5FF">Target System</text>
          
          {/* Target Components */}
          <rect x="340" y="170" width="40" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="360" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">Web App</text>
          
          <rect x="390" y="170" width="40" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="410" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">API</text>
          
          <rect x="440" y="170" width="60" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="470" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">Database</text>
          
          <rect x="360" y="220" width="120" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="420" y="240" textAnchor="middle" fontSize="10" fill="#00E5FF">Infrastructure</text>
          
          {/* Attacker */}
          <rect x="80" y="150" width="120" height="120" rx="10" fill="#0A1024" stroke="#EB3443" strokeWidth="2"/>
          <text x="140" y="140" textAnchor="middle" fontSize="14" fill="#EB3443">Advanced Attacker</text>
          
          {/* Attack Tools */}
          <rect x="100" y="170" width="80" height="20" rx="3" fill="rgba(235, 52, 67, 0.2)" stroke="#EB3443" strokeWidth="1"/>
          <text x="140" y="184" textAnchor="middle" fontSize="10" fill="#EB3443">Custom Exploits</text>
          
          <rect x="100" y="200" width="80" height="20" rx="3" fill="rgba(235, 52, 67, 0.2)" stroke="#EB3443" strokeWidth="1"/>
          <text x="140" y="214" textAnchor="middle" fontSize="10" fill="#EB3443">OSINT Tools</text>
          
          <rect x="100" y="230" width="80" height="20" rx="3" fill="rgba(235, 52, 67, 0.2)" stroke="#EB3443" strokeWidth="1"/>
          <text x="140" y="244" textAnchor="middle" fontSize="10" fill="#EB3443">Post-Exploit Tools</text>
          
          {/* Attack Paths */}
          <path d="M200 180 L320 180" stroke="#EB3443" strokeWidth="1.5" strokeDasharray="5,3">
            <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite"/>
          </path>
          <text x="260" y="170" textAnchor="middle" fontSize="10" fill="#EB3443">Web Exploit</text>
          
          <path d="M200 210 L320 210" stroke="#EB3443" strokeWidth="1.5" strokeDasharray="5,3">
            <animate attributeName="stroke-dashoffset" values="0;20" dur="3s" repeatCount="indefinite"/>
          </path>
          <text x="260" y="200" textAnchor="middle" fontSize="10" fill="#EB3443">API Attack</text>
          
          <path d="M200 240 L320 240" stroke="#EB3443" strokeWidth="1.5" strokeDasharray="5,3">
            <animate attributeName="stroke-dashoffset" values="0;20" dur="4s" repeatCount="indefinite"/>
          </path>
          <text x="260" y="230" textAnchor="middle" fontSize="10" fill="#EB3443">Infrastructure</text>
          
          {/* Security Controls */}
          <circle cx="320" cy="180" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="320" cy="210" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          
          <circle cx="320" cy="240" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          {/* Breach Animation */}
          <circle cx="270" cy="180" r="3" fill="#EB3443">
            <animate attributeName="cx" values="200;310;310" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="240" cy="210" r="3" fill="#EB3443">
            <animate attributeName="cx" values="200;310;310" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          {/* Report Section */}
          <rect x="220" y="290" width="160" height="60" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="315" textAnchor="middle" fontSize="12" fill="#00B2A9">Comprehensive Report</text>
          <text x="300" y="335" textAnchor="middle" fontSize="10" fill="#00B2A9">Vulnerabilities + Remediation</text>
          
          {/* Connecting Lines */}
          <path d="M140 270 L220 315" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M420 270 L340 315" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
        </svg>
      }
      
      relatedServices={[
        {
          title: "Cloud Security Assessment",
          link: "/services/cloud-security-assessment"
        },
        {
          title: "Web Application Penetration Testing",
          link: "/services/web-pen-testing"
        },
        {
          title: "Network Penetration Testing",
          link: "/services/network-pentesting"
        }
      ]}
    />
  );
};

export default AdvancedPenetrationTestingPage;