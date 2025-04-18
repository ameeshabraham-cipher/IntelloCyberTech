import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Search, AlertCircle, Eye, BarChart3, FileText, Zap, Database, Network } from 'lucide-react';

const ThreatHuntingPage = () => {
  return (
    <ServicePageLayout
      title="Threat Hunting Services"
      category="Cybersecurity Services"
      description="Our Threat Hunting service employs advanced techniques to proactively search for and identify hidden threats that have evaded traditional security controls. We combine expert analysis, advanced tooling, and threat intelligence to uncover sophisticated attackers before they can cause damage."
      heroIcon={<Search className="h-8 w-8" />}
      
      overview="Traditional security monitoring often fails to detect sophisticated threats that bypass standard defenses. Threat hunting fills this gap through proactive, hypothesis-driven investigations led by experienced security professionals who understand advanced attacker techniques. Our threat hunting service combines human expertise with advanced analytics and threat intelligence to systematically search for indicators of compromise (IOCs) and suspicious behaviors that signal potential security breaches. We help you discover hidden threats before they can achieve their objectives."
      
      benefits={[
        {
          title: "Early Threat Detection",
          content: "Identify sophisticated threats that have bypassed traditional security controls before they can cause significant damage."
        },
        {
          title: "Enhanced Security Visibility",
          content: "Gain deeper insights into your security posture and discover blind spots in your existing monitoring capabilities."
        },
        {
          title: "Reduced Dwell Time",
          content: "Minimize the time attackers remain undetected in your environment, significantly reducing potential damage."
        },
        {
          title: "Improved Incident Response",
          content: "Strengthen your security operations with refined detection rules and enhanced response procedures."
        },
        {
          title: "Continuous Security Evolution",
          content: "Establish a proactive security posture that constantly evolves to address emerging threats and attack vectors."
        }
      ]}
      
      steps={[
        {
          title: "Threat Intelligence Analysis",
          description: "Review current threat landscape and attacker techniques relevant to your industry and organization."
        },
        {
          title: "Hypothesis Development",
          description: "Create hunt hypotheses based on threat intelligence, attacker TTPs, and your specific environment."
        },
        {
          title: "Data Collection",
          description: "Gather and normalize relevant security data from across your environment to support hunting activities."
        },
        {
          title: "Investigative Analysis",
          description: "Apply advanced detection techniques to identify patterns and anomalies that may indicate malicious activity."
        },
        {
          title: "Threat Verification",
          description: "Investigate potential threats to confirm their nature and assess potential business impact."
        },
        {
          title: "Remediation & Reporting",
          description: "Provide detailed documentation of findings with actionable recommendations for remediation and defense improvements."
        }
      ]}
      
      deliverables={[
        {
          title: "Threat Hunt Report",
          description: "Comprehensive documentation of hunt methodologies, findings, and evidence of any discovered adversary activities."
        },
        {
          title: "Indicators of Compromise",
          description: "Technical indicators associated with identified threats for implementation in security monitoring tools."
        },
        {
          title: "Enhanced Detection Rules",
          description: "Custom detection logic and monitoring rules to address security gaps identified during hunting activities."
        },
        {
          title: "Threat Analysis Dashboards",
          description: "Visualization tools for analyzing hunt data and identifying patterns across your security environment."
        },
        {
          title: "Tactical Response Recommendations",
          description: "Immediate actions to address any identified threats and minimize potential security impact."
        },
        {
          title: "Strategic Improvement Plan",
          description: "Long-term recommendations to enhance visibility, detection capabilities, and overall security posture."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Environment Representation */}
          <rect x="100" y="100" width="400" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="300" y="90" textAnchor="middle" fontSize="14" fill="#00E5FF">Enterprise Environment</text>
          
          {/* Systems and Data */}
          <rect x="130" y="130" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="155" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Servers</text>
          
          <rect x="200" y="130" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="225" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Endpoints</text>
          
          <rect x="270" y="130" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="295" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Network</text>
          
          <rect x="340" y="130" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="365" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Cloud</text>
          
          <rect x="410" y="130" width="60" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Applications</text>
          
          {/* Hunt Process Elements */}
          <circle cx="155" cy="220" r="30" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="4,2"/>
          <text x="155" y="225" textAnchor="middle" fontSize="9" fill="#00E5FF">Data</text>
          <text x="155" y="235" textAnchor="middle" fontSize="9" fill="#00E5FF">Collection</text>
          
          <circle cx="235" cy="220" r="30" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="4,2"/>
          <text x="235" y="225" textAnchor="middle" fontSize="9" fill="#00E5FF">Pattern</text>
          <text x="235" y="235" textAnchor="middle" fontSize="9" fill="#00E5FF">Analysis</text>
          
          <circle cx="315" cy="220" r="30" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="4,2"/>
          <text x="315" y="225" textAnchor="middle" fontSize="9" fill="#00E5FF">Threat</text>
          <text x="315" y="235" textAnchor="middle" fontSize="9" fill="#00E5FF">Detection</text>
          
          <circle cx="395" cy="220" r="30" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="4,2"/>
          <text x="395" y="225" textAnchor="middle" fontSize="9" fill="#00E5FF">Response</text>
          <text x="395" y="235" textAnchor="middle" fontSize="9" fill="#00E5FF">Actions</text>
          
          {/* Connecting Flow */}
          <path d="M185 220 L205 220" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M265 220 L285 220" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M345 220 L365 220" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Hidden Threats */}
          <path d="M320 145 Q325 150, 330 145" stroke="#EB3443" strokeWidth="1" opacity="0.8"/>
          <path d="M170 160 Q175 165, 180 160" stroke="#EB3443" strokeWidth="1" opacity="0.8"/>
          <path d="M420 150 Q425 155, 430 150" stroke="#EB3443" strokeWidth="1" opacity="0.8"/>
          
          {/* Animated Hunting Elements */}
          <circle cx="235" cy="145" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="150;450;150" dur="10s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="145;170;145" dur="10s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="10s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="155" cy="220" r="33" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="33;35;33" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="235" cy="220" r="33" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="33;35;33" dur="3s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="315" cy="220" r="33" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="33;35;33" dur="3s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" begin="2s"/>
          </circle>
          
          {/* Threat Detection */}
          <circle cx="320" cy="145" r="15" fill="none" stroke="#EB3443" strokeWidth="1" strokeOpacity="0" strokeDasharray="3,2">
            <animate attributeName="stroke-opacity" values="0;1;0" dur="5s" begin="5s" repeatCount="indefinite"/>
          </circle>
          
          <path d="M315 220 L320 145" stroke="#EB3443" strokeWidth="1" strokeOpacity="0" strokeDasharray="2,2">
            <animate attributeName="stroke-opacity" values="0;1;0" dur="5s" begin="6s" repeatCount="indefinite"/>
          </path>
          
          {/* Results */}
          <rect x="250" y="290" width="100" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="310" textAnchor="middle" fontSize="10" fill="#00B2A9">Detection Rules</text>
          <text x="300" y="322" textAnchor="middle" fontSize="10" fill="#00B2A9">& Response Plans</text>
          
          <path d="M315 250 L300 290" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M395 250 L300 290" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
        </svg>
      }
      
      relatedServices={[
        {
          title: "Incident Response Planning",
          link: "/services/incident-response-planning"
        },
        {
          title: "Advanced Penetration Testing",
          link: "/services/advanced-penetration-testing"
        },
        {
          title: "Security Operations Center (SOC)",
          link: "/services/security-operations-center"
        }
      ]}
    />
  );
};

export default ThreatHuntingPage;