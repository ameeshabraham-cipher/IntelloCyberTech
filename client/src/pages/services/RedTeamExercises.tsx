import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Target, Shield, Users, Eye, Clock, FileText, Lock, AlertTriangle, Network } from 'lucide-react';

const RedTeamExercisesPage = () => {
  return (
    <ServicePageLayout
      title="Red Team Exercises"
      category="Cybersecurity Services"
      description="Our Red Team Exercises service provides comprehensive security assessments through simulated, real-world cyber attacks. Our elite offensive security experts test your defenses, detection capabilities, and response procedures through carefully controlled adversarial simulations."
      heroIcon={<Target className="h-8 w-8" />}
      
      overview="Traditional security testing has limitations in assessing how well your organization can defend against sophisticated threat actors. Red Team Exercises address this gap by simulating the tactics, techniques, and procedures (TTPs) used by advanced adversaries in a controlled, realistic manner. Unlike standard penetration testing, red team exercises are objective-based, focusing on specific scenarios like data theft, business disruption, or compromise of critical systems. Our experts emulate real threat actors targeting your organization while working within defined safety parameters to provide maximum insight with minimal risk."
      
      benefits={[
        {
          title: "Test Security Effectiveness",
          content: "Evaluate the real-world effectiveness of your security controls, monitoring, and response capabilities."
        },
        {
          title: "Exercise Response Teams",
          content: "Train and assess your security operations and incident response teams under realistic conditions."
        },
        {
          title: "Identify Security Gaps",
          content: "Discover weaknesses in your security architecture, technology, procedures, or team capabilities."
        },
        {
          title: "Demonstrate Real Risk",
          content: "Provide concrete evidence of security risks in business terms that executives can understand."
        },
        {
          title: "Validate Security Investments",
          content: "Determine the real-world effectiveness of your security technology investments and identify areas for improvement."
        }
      ]}
      
      steps={[
        {
          title: "Engagement Planning",
          description: "Define exercise objectives, scope, timelines, safety measures, and success criteria in collaboration with stakeholders."
        },
        {
          title: "Threat Intelligence Analysis",
          description: "Research threat actors targeting your industry to develop realistic attack scenarios and techniques."
        },
        {
          title: "Initial Access & Reconnaissance",
          description: "Identify and exploit potential entry points while gathering information about your environment."
        },
        {
          title: "Objective-Based Operations",
          description: "Execute carefully controlled attack operations designed to achieve defined objectives, such as data exfiltration."
        },
        {
          title: "Documentation & Evidence Collection",
          description: "Record all activities, successful tactics, and evidence demonstrating achieved objectives or security findings."
        },
        {
          title: "Reporting & Debriefing",
          description: "Provide comprehensive documentation including attack paths, recommendations, and improvement opportunities."
        }
      ]}
      
      deliverables={[
        {
          title: "Exercise Planning Document",
          description: "Detailed plan outlining exercise objectives, scope, rules of engagement, timelines, and safety controls."
        },
        {
          title: "Attack Narrative Report",
          description: "Comprehensive documentation of attack paths, tactics used, and detailed technical findings."
        },
        {
          title: "Evidence Package",
          description: "Collection of artifacts demonstrating successful attack elements, including screenshots and logs."
        },
        {
          title: "Executive Summary",
          description: "Business-focused overview of exercise results, key findings, and strategic recommendations."
        },
        {
          title: "Technical Remediation Guide",
          description: "Detailed technical recommendations to address identified vulnerabilities and improve security controls."
        },
        {
          title: "Detection & Response Improvements",
          description: "Specific guidance to enhance monitoring capabilities and incident response procedures."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Corporate Network */}
          <rect x="300" y="100" width="200" height="160" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="400" y="90" textAnchor="middle" fontSize="14" fill="#00E5FF">Target Organization</text>
          
          {/* Internal Systems */}
          <rect x="320" y="120" width="40" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="340" y="140" textAnchor="middle" fontSize="10" fill="#00E5FF">Server</text>
          
          <rect x="370" y="120" width="40" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="390" y="140" textAnchor="middle" fontSize="10" fill="#00E5FF">Server</text>
          
          <rect x="420" y="120" width="60" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="450" y="140" textAnchor="middle" fontSize="10" fill="#00E5FF">Database</text>
          
          <rect x="320" y="170" width="40" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="340" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">User</text>
          
          <rect x="370" y="170" width="40" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="390" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">User</text>
          
          <rect x="420" y="170" width="60" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="450" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">Admin</text>
          
          <rect x="340" y="220" width="120" height="20" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="400" y="234" textAnchor="middle" fontSize="10" fill="#00E5FF">Network Infrastructure</text>
          
          {/* Security Team */}
          <rect x="440" y="290" width="120" height="60" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="500" y="310" textAnchor="middle" fontSize="11" fill="#00E5FF">Security Team</text>
          <text x="500" y="330" textAnchor="middle" fontSize="9" fill="#00E5FF">(Unaware of Testing)</text>
          
          {/* Red Team */}
          <rect x="100" y="150" width="120" height="80" rx="10" fill="#0A1024" stroke="#EB3443" strokeWidth="2"/>
          <text x="160" y="140" textAnchor="middle" fontSize="14" fill="#EB3443">Red Team</text>
          
          {/* Attack Vectors */}
          <path d="M220 170 L300 135" stroke="#EB3443" strokeWidth="1.5" strokeDasharray="4,2">
            <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite"/>
          </path>
          <text x="240" y="145" textAnchor="middle" fontSize="9" fill="#EB3443">Technical Exploit</text>
          
          <path d="M220 190 L320 185" stroke="#EB3443" strokeWidth="1.5" strokeDasharray="4,2">
            <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
          </path>
          <text x="240" y="175" textAnchor="middle" fontSize="9" fill="#EB3443">Social Engineering</text>
          
          <path d="M220 210 L340 220" stroke="#EB3443" strokeWidth="1.5" strokeDasharray="4,2">
            <animate attributeName="stroke-dashoffset" values="0;12" dur="4s" repeatCount="indefinite"/>
          </path>
          <text x="240" y="205" textAnchor="middle" fontSize="9" fill="#EB3443">Physical Access</text>
          
          {/* Elements inside Red Team */}
          <rect x="110" y="165" width="100" height="15" rx="2" fill="rgba(235, 52, 67, 0.2)" stroke="#EB3443" strokeWidth="1"/>
          <text x="160" y="177" textAnchor="middle" fontSize="8" fill="#EB3443">Custom Exploits</text>
          
          <rect x="110" y="185" width="100" height="15" rx="2" fill="rgba(235, 52, 67, 0.2)" stroke="#EB3443" strokeWidth="1"/>
          <text x="160" y="197" textAnchor="middle" fontSize="8" fill="#EB3443">Evasion Techniques</text>
          
          <rect x="110" y="205" width="100" height="15" rx="2" fill="rgba(235, 52, 67, 0.2)" stroke="#EB3443" strokeWidth="1"/>
          <text x="160" y="217" textAnchor="middle" fontSize="8" fill="#EB3443">Intel-Based TTPs</text>
          
          {/* Objective */}
          <circle cx="450" cy="120" r="15" fill="none" stroke="#EB3443" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,1">
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          {/* Animated Elements */}
          <circle cx="230" cy="170" r="3" fill="#EB3443">
            <animate attributeName="cx" values="220;295;295" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="170;135;135" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="230" cy="190" r="3" fill="#EB3443">
            <animate attributeName="cx" values="220;315;315" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="190;185;185" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          {/* Report */}
          <rect x="200" y="290" width="120" height="60" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="260" y="310" textAnchor="middle" fontSize="11" fill="#00B2A9">Findings &</text>
          <text x="260" y="330" textAnchor="middle" fontSize="11" fill="#00B2A9">Recommendations</text>
          
          <path d="M160 230 L220 290" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M400 260 L290 290" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
        </svg>
      }
      
      relatedServices={[
        {
          title: "Advanced Penetration Testing",
          link: "/services/advanced-penetration-testing"
        },
        {
          title: "Social Engineering Assessment",
          link: "/services/social-engineering"
        },
        {
          title: "Incident Response Planning",
          link: "/services/incident-response-planning"
        }
      ]}
    />
  );
};

export default RedTeamExercisesPage;