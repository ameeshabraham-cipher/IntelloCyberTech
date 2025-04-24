import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Laptop, AlertTriangle, Eye, PlayCircle, FileSearch, Clock, Zap } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const EdrPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Endpoint Detection and Response (EDR) Services in UAE",
    description: "Expert EDR services in Dubai and across UAE. Protect your endpoints from advanced threats with our comprehensive endpoint detection and response solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Endpoint Protection Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring advanced endpoint protection"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What are the key benefits of EDR for UAE organizations?",
      answer: "UAE organizations realize several strategic benefits from EDR implementation: 1) Advanced Threat Detection - identification of sophisticated attacks specifically targeting UAE organizations that evade traditional security controls, providing visibility into UAE-specific threat activity, 2) UAE Endpoint Visibility - comprehensive insight into endpoint activities across distributed UAE work environments including remote locations, branch offices, and mobile workforce common in UAE organizations, 3) UAE Rapid Response Capability - immediate containment and remediation of security incidents affecting UAE endpoints, reducing impact and recovery time for compromised systems across distributed locations, 4) UAE Advanced Attack Investigation - detailed forensic analysis of security events with UAE-specific context, enabling thorough understanding of threat techniques targeting regional organizations, 5) UAE Proactive Threat Hunting - systematic search for threats that have evaded perimeter defenses, particularly important for UAE organizations facing sophisticated regional threats and targeted campaigns, 6) UAE Remote Workforce Protection - security enforcement for endpoints operating outside traditional office environments, critical for UAE's mobile-first business culture and remote work adoption, 7) UAE Compliance Documentation - evidence of security monitoring and incident handling to satisfy UAE regulatory requirements across various frameworks and sector-specific mandates, 8) UAE Security Analytics - data-driven insights into endpoint security posture with appropriate metrics for UAE stakeholders and decision makers at various organizational levels, 9) UAE Security Automation - streamlined response to common security events through automated containment and remediation, optimizing limited UAE cybersecurity resources, 10) UAE Integrated Defense - coordination with broader security controls creating unified protection across UAE technology environments and business operations. These benefits combine to significantly enhance endpoint security posture while addressing specific operational and threat landscape characteristics of UAE organizations."
    },
    {
      question: "How is EDR different from traditional antivirus for UAE organizations?",
      answer: "EDR provides several critical capabilities beyond traditional antivirus for UAE organizations: 1) UAE Behavioral Analysis - detection based on suspicious activities rather than just known signatures, enabling identification of novel and zero-day threats specifically targeting UAE organizations without existing definitions, 2) UAE Advanced Threat Detection - identification of sophisticated attacks using fileless techniques, living-off-the-land methods, and other advanced approaches increasingly used against high-value UAE targets, 3) UAE Comprehensive Visibility - complete view of endpoint activities including process execution, file operations, network connections, and registry changes across UAE technology environments, 4) UAE Incident Investigation - detailed forensic data collection enabling thorough analysis of security events with UAE-specific context, supporting proper understanding of attack patterns targeting regional organizations, 5) UAE Threat Intelligence Integration - incorporation of specific threat data relevant to UAE sector and regional threat actors, enhancing detection of attacks targeting UAE organizations with local context, 6) UAE Remote Response Capabilities - ability to take immediate action on compromised systems regardless of location, essential for distributed UAE workforce across various emirates and international locations, 7) UAE Centralized Management - unified administration of endpoint security across diverse device types and locations common in UAE business operations, improving operational efficiency, 8) UAE Active Threat Hunting - proactive search for indicators of compromise using behavioral analytics and threat intelligence specific to UAE threat landscape, 9) UAE Historical Data Analysis - examination of past activities to identify previously undetected compromises, establishing complete understanding of security incidents affecting UAE endpoints, 10) UAE Security Orchestration - integration with broader security tools creating coordinated defense across UAE technology stack including SIEM, firewall, and other security controls. Traditional antivirus remains important as part of defense-in-depth strategy, but EDR provides these enhanced capabilities essential for protecting UAE organizations against sophisticated threats in today's complex security environment."
    },
    {
      question: "What endpoint threats are most relevant for UAE organizations?",
      answer: "UAE organizations face several significant endpoint security threats: 1) Targeted Ransomware - sophisticated encryption attacks specifically targeting UAE organizations with high ransom demands, increasingly focusing on sectors like financial services, healthcare, and critical infrastructure across UAE, 2) UAE-Focused Phishing - social engineering campaigns with localized content relevant to UAE business context, designed to harvest credentials or deliver malware through trusted communication channels, 3) Advanced Persistent Threats (APTs) - sophisticated, long-term compromises targeting valuable UAE assets and information, particularly in government, energy, finance, and defense sectors with regional geopolitical motivations, 4) UAE Supply Chain Attacks - compromises via trusted software updates or vendors with access to UAE organizational systems, expanding attack surface beyond directly controlled assets, 5) UAE Living-Off-the-Land Attacks - malicious use of legitimate system tools and processes to evade detection, particularly effective against traditional security controls deployed in UAE environments, 6) UAE Mobile Malware - specialized threats targeting smartphones and tablets extensively used by UAE executives and workforce, exploiting mobile-first usage patterns common in UAE business operations, 7) UAE Insider Threats - malicious or accidental actions by authorized users with legitimate access to UAE systems and data, challenging to detect through traditional perimeter controls, 8) UAE IoT/OT Attacks - compromises of connected devices and operational technology increasingly deployed in UAE smart initiatives, smart buildings, and industrial environments with limited security controls, 9) UAE Zero-Day Exploitation - use of previously unknown vulnerabilities particularly against high-value UAE targets in strategic sectors before patches are available, 10) UAE Data Theft Malware - specialized threats designed to identify and exfiltrate sensitive information from UAE organizations, particularly intellectual property, financial data, and strategic business information. These threats continue evolving in sophistication and tactics, requiring advanced endpoint protection specifically adapted to UAE threat landscape and organizational characteristics."
    },
    {
      question: "What EDR deployment considerations are important for UAE organizations?",
      answer: "UAE organizations should address several key considerations for successful EDR deployment: 1) UAE Endpoint Diversity - implementation strategy for diverse device types including Windows, macOS, Linux, mobile platforms, and specialized systems common in UAE heterogeneous IT environments, 2) UAE Network Connectivity - appropriate architecture for endpoints with varying connection quality and patterns, including remote UAE locations, international offices, and field operations with intermittent connectivity, 3) UAE Performance Impact - balanced security monitoring that maintains system responsiveness for business applications, particularly important for UAE user experience expectations and operational requirements, 4) UAE Scalability Requirements - deployment approach supporting growth in both endpoint numbers and security data volume as UAE organizations expand operations and technology footprint, 5) UAE Remote Workforce Support - effective protection for devices operating outside traditional network perimeter, essential for UAE's distributed work models and mobile business practices, 6) UAE Cloud versus On-Premises - determination of optimal EDR architecture considering UAE data sovereignty requirements, compliance obligations, and security operations model, 7) UAE Security Expertise Availability - realistic assessment of internal capabilities for managing advanced endpoint security, considering UAE cybersecurity talent constraints and specialized skill requirements, 8) UAE Integration Requirements - connections with existing security technologies including SIEM, threat intelligence, network security, and identity systems within UAE security ecosystem, 9) UAE Change Management - structured approach for implementing advanced endpoint controls with appropriate communication and training for UAE workforce with diverse technical proficiency levels, 10) UAE Regulatory Alignment - deployment considerations addressing data protection, privacy requirements, and compliance obligations specific to UAE business environment and industry regulations. Addressing these factors creates solid foundation for effective EDR implementation tailored to specific UAE organizational characteristics and operational requirements."
    },
    {
      question: "How should UAE organizations measure EDR effectiveness?",
      answer: "UAE organizations should evaluate EDR effectiveness through several key metrics: 1) UAE Threat Detection Rate - percentage of security incidents successfully identified, with comparison to threats targeting similar UAE organizations and regional industry benchmarks, 2) UAE Mean Time to Detect (MTTD) - average duration between compromise and discovery, critical for measuring protection against sophisticated threats targeting UAE organizations, 3) UAE Mean Time to Respond (MTTR) - average time from detection to containment and remediation, measuring incident response efficiency across UAE endpoint environment, 4) UAE False Positive Rate - frequency of incorrect threat identifications requiring investigation, important for operational efficiency in UAE's constrained cybersecurity resource environment, 5) UAE Endpoint Coverage - percentage of organizational devices successfully protected by EDR, highlighting visibility gaps across UAE technology estate including remote and mobile endpoints, 6) UAE Threat Hunting Success - number and significance of threats proactively discovered through hunting activities rather than automated alerts, indicating maturity in addressing UAE-specific threats, 7) UAE Prevented Incidents - security events successfully blocked before impact, demonstrating protective value with specific UAE threat context and business risk avoidance, 8) UAE Root Cause Identification - percentage of incidents with completely understood attack vectors and techniques, enabling systematic security improvements across UAE environment, 9) UAE Compliance Verification - successful demonstration of security monitoring to satisfy UAE regulatory requirements with appropriate evidence for various frameworks, 10) UAE Security Resource Utilization - operational efficiency in managing EDR platform with optimization of limited UAE cybersecurity expertise and personnel resources. These measurements should be tracked consistently with appropriate reporting for various UAE stakeholder groups, from technical teams to executive leadership, with formats that communicate security value in business terms relevant to UAE organizational priorities."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Endpoint Detection and Response (EDR) Services in UAE | Advanced Endpoint Protection"
        description="Expert EDR services in Dubai and across UAE. Protect your endpoints from advanced threats with our comprehensive endpoint detection and response solutions with 22+ years of experience."
        url="/services/edr"
        type="website"
      />
      <ServicePageLayout
        title="Endpoint Detection and Response (EDR) Services in UAE | Advanced Endpoint Protection"
        category="UAE Endpoint Security Services"
        description="Protect your devices from sophisticated attacks with our advanced Endpoint Detection and Response services. We help UAE organizations implement effective EDR solutions that detect, investigate, and respond to endpoint threats."
        heroIcon={<Shield className="h-8 w-8" />}
        overview="As cyberthreats targeting UAE organizations become increasingly sophisticated, traditional endpoint protection approaches no longer provide adequate security against advanced attacks. Our UAE-focused Endpoint Detection and Response (EDR) services deliver comprehensive solutions to detect, investigate, and remediate threats across your entire endpoint environment through advanced behavioral monitoring, threat intelligence, and automated response capabilities. We help transform traditional endpoint security into proactive defense that identifies even the most sophisticated attacks before they can cause damage. With deep understanding of both global attack techniques and UAE-specific threat landscape, we implement EDR solutions tailored to your specific industry, infrastructure, and risk profile. Whether addressing ransomware, fileless malware, zero-day exploits, or targeted attacks, our expertise ensures your endpoint security controls provide effective protection against the evolving threats specifically targeting UAE organizations."
        steps={[
          {
            title: "UAE Endpoint Security Assessment",
            description: "Evaluate your current endpoint protection capabilities, security gaps, and improvement opportunities through comprehensive review of existing controls and historical incidents within UAE threat context."
          },
          {
            title: "UAE EDR Requirements Analysis",
            description: "Identify specific endpoint security needs based on your risk profile, compliance obligations, and operational environment with particular consideration for threats targeting UAE organizations."
          },
          {
            title: "UAE EDR Solution Selection",
            description: "Evaluate potential technologies based on your specific requirements, infrastructure compatibility, and security objectives, identifying optimal solution appropriate for UAE operational environment."
          },
          {
            title: "UAE EDR Architecture Design",
            description: "Develop comprehensive technical blueprint for endpoint protection including server infrastructure, agent deployment, and integration requirements appropriate for your UAE technology landscape."
          },
          {
            title: "UAE EDR Implementation Planning",
            description: "Create detailed deployment strategy with appropriate phasing, testing methodology, and rollback procedures to ensure smooth implementation across UAE endpoint environment."
          },
          {
            title: "UAE EDR Policy Development",
            description: "Establish detection rules, alert thresholds, and response protocols optimized for your specific security requirements with appropriate tuning for UAE threat landscape and false positive management."
          },
          {
            title: "UAE EDR Deployment",
            description: "Install and configure selected EDR solution across endpoint environment with appropriate agent distribution, server setup, and initial policy implementation for UAE operational context."
          },
          {
            title: "UAE EDR Integration",
            description: "Connect EDR platform with existing security technologies including SIEM, threat intelligence, network controls, and other defensive systems creating unified security approach within UAE environment."
          },
          {
            title: "UAE EDR Testing & Validation",
            description: "Verify proper functioning through comprehensive scenarios including detection testing, alert validation, and response simulation based on common attack patterns targeting UAE organizations."
          },
          {
            title: "UAE Incident Response Playbook Development",
            description: "Create detailed procedures for addressing various endpoint security incidents with investigation workflows, containment strategies, and remediation processes appropriate for UAE operational context."
          },
          {
            title: "UAE EDR Operational Training",
            description: "Provide comprehensive education for security personnel covering platform management, alert investigation, incident response, and threat hunting techniques with UAE-specific use cases."
          },
          {
            title: "UAE EDR Optimization",
            description: "Deliver ongoing refinement of detection rules, response procedures, and platform configuration based on emerging threats, false positive management, and changing UAE security requirements."
          }
        ]}
        benefits={[
          {
            title: "UAE Advanced Threat Detection",
            content: "Identify sophisticated attacks targeting UAE organizations that evade traditional security controls, using behavioral analysis and machine learning to detect unusual activities indicative of compromise."
          },
          {
            title: "UAE Comprehensive Endpoint Visibility",
            content: "Gain complete insight into endpoint activities across distributed UAE work environments, creating detailed record of processes, connections, file operations, and user actions for security monitoring."
          },
          {
            title: "UAE Rapid Incident Response",
            content: "Enable immediate containment and remediation of security incidents affecting UAE endpoints through remote response capabilities, reducing impact and recovery time across distributed locations."
          },
          {
            title: "UAE Forensic Investigation Capability",
            content: "Facilitate detailed analysis of security events with comprehensive data collection, enabling thorough understanding of attack techniques and proper remediation for threats targeting UAE organizations."
          },
          {
            title: "UAE Proactive Threat Hunting",
            content: "Implement systematic search for threats that have evaded automated detection, leveraging endpoint telemetry to identify sophisticated attacks specifically targeting UAE organizations."
          },
          {
            title: "UAE Remote Workforce Protection",
            content: "Extend advanced security to endpoints operating outside traditional office environments, maintaining consistent protection for UAE's mobile workforce and remote operations across various locations."
          },
          {
            title: "UAE Security Resource Optimization",
            content: "Enhance efficiency of limited cybersecurity expertise through automated detection, investigation assistance, and remediation capabilities, maximizing effectiveness of UAE security personnel."
          },
          {
            title: "UAE Compliance Documentation",
            content: "Demonstrate robust security monitoring and incident handling to satisfy UAE regulatory requirements through comprehensive logging, investigation records, and response documentation."
          },
          {
            title: "UAE Endpoint Attack Prevention",
            content: "Stop malicious activities before damage occurs through real-time detection and automated response, preventing successful compromise of UAE endpoints by sophisticated threat actors."
          },
          {
            title: "UAE Security Intelligence Enhancement",
            content: "Generate valuable insights into threats targeting your organization through endpoint monitoring and analysis, strengthening overall security posture with actionable intelligence about UAE attack patterns."
          }
        ]}
        deliverables={[
          {
            title: "UAE Endpoint Security Assessment Report",
            description: "Comprehensive evaluation of your current endpoint protection capabilities, identifying vulnerabilities, configuration weaknesses, and improvement opportunities with specific recommendations relevant to UAE threat landscape."
          },
          {
            title: "UAE EDR Requirements Document",
            description: "Detailed analysis of your specific endpoint security needs based on risk profile, compliance obligations, and operational environment with particular consideration for threats targeting UAE organizations."
          },
          {
            title: "UAE EDR Solution Recommendation",
            description: "Technology selection guidance with comparative analysis of potential solutions, feature evaluation, and specific recommendations based on your UAE organizational requirements and operational constraints."
          },
          {
            title: "UAE EDR Architecture Blueprint",
            description: "Technical design documentation for comprehensive endpoint protection including server infrastructure, agent deployment approach, network requirements, and integration strategy appropriate for UAE environments."
          },
          {
            title: "UAE EDR Implementation Plan",
            description: "Detailed deployment strategy with phased approach, resource requirements, milestone definitions, testing methodologies, and rollback procedures ensuring smooth implementation across UAE endpoints."
          },
          {
            title: "UAE EDR Policy Configuration",
            description: "Comprehensive detection rules, alert thresholds, investigation workflows, and response protocols optimized for your specific security requirements with appropriate tuning for UAE threat landscape."
          },
          {
            title: "UAE Incident Response Playbooks",
            description: "Detailed procedures for addressing various endpoint security incidents including investigation guidelines, containment measures, eradication steps, and recovery processes tailored to UAE operational environment."
          },
          {
            title: "UAE EDR Integration Framework",
            description: "Technical implementation connecting EDR with existing security technologies through appropriate APIs, data flows, and orchestration mechanisms creating unified security approach within UAE environment."
          },
          {
            title: "UAE EDR Training Materials",
            description: "Comprehensive educational resources covering platform operation, alert investigation, incident response, and threat hunting with UAE-specific scenarios, technical documentation, and procedural guidance."
          },
          {
            title: "UAE EDR Dashboard & Reporting",
            description: "Visualization and reporting solutions providing actionable intelligence on endpoint security status, threat activity, and response metrics with formats appropriate for different UAE stakeholder audiences."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Elements */}
            <rect x="150" y="100" width="300" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="70" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="90" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="85" x2="400" y2="100" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* EDR Central Management */}
            <rect x="250" y="130" width="100" height="50" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="160" textAnchor="middle" fontSize="12" fill="#00E5FF">EDR Console</text>
            
            {/* Endpoints */}
            <rect x="180" y="220" width="60" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="210" y="245" textAnchor="middle" fontSize="8" fill="#00B2A9">Laptop</text>
            
            <rect x="270" y="220" width="60" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="300" y="245" textAnchor="middle" fontSize="8" fill="#00B2A9">Desktop</text>
            
            <rect x="360" y="220" width="60" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="390" y="245" textAnchor="middle" fontSize="8" fill="#00B2A9">Server</text>
            
            {/* Threat */}
            <rect x="180" y="190" width="15" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="187.5" y="200" textAnchor="middle" fontSize="10" fill="#EB3443">!</text>
            
            {/* Process Monitoring */}
            <rect x="195" y="225" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="195" y="232" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="195" y="239" width="10" height="5" rx="1" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <rect x="195" y="246" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            
            <rect x="285" y="225" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="285" y="232" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="285" y="239" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="285" y="246" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            
            <rect x="375" y="225" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="375" y="232" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="375" y="239" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <rect x="375" y="246" width="10" height="5" rx="1" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            
            {/* EDR Components */}
            <rect x="260" y="140" width="15" height="10" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="267.5" y="147" textAnchor="middle" fontSize="5" fill="#00E5FF">Mon</text>
            
            <rect x="280" y="140" width="15" height="10" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="287.5" y="147" textAnchor="middle" fontSize="5" fill="#00E5FF">Det</text>
            
            <rect x="300" y="140" width="15" height="10" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="307.5" y="147" textAnchor="middle" fontSize="5" fill="#00E5FF">Ana</text>
            
            <rect x="320" y="140" width="15" height="10" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="327.5" y="147" textAnchor="middle" fontSize="5" fill="#00E5FF">Res</text>
            
            {/* Connection to Console */}
            <path d="M210 220 L275 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M300 220 L300 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M390 220 L325 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            
            {/* Threat Detection */}
            <circle cx="210" cy="205" r="10" fill="none" stroke="#EB3443" strokeWidth="1">
              <animate attributeName="r" values="5;10;5" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Data Flow Animation */}
            <circle cx="210" cy="205" r="3" fill="#EB3443">
              <animate attributeName="cx" values="210;240;270;300" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="205;190;175;160" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Response Animation */}
            <circle cx="300" cy="160" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="300;270;240;210" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="160;175;190;205" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* UAE Threat Types */}
            <rect x="170" y="130" width="60" height="15" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="200" y="140" textAnchor="middle" fontSize="6" fill="#EB3443">Ransomware</text>
            
            <rect x="170" y="150" width="60" height="15" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="200" y="160" textAnchor="middle" fontSize="6" fill="#EB3443">Fileless Malware</text>
            
            <rect x="170" y="170" width="60" height="15" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="200" y="180" textAnchor="middle" fontSize="6" fill="#EB3443">UAE APTs</text>
            
            {/* Integration Elements */}
            <rect x="370" y="130" width="60" height="15" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="400" y="140" textAnchor="middle" fontSize="6" fill="#00B2A9">SIEM</text>
            
            <rect x="370" y="150" width="60" height="15" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="400" y="160" textAnchor="middle" fontSize="6" fill="#00B2A9">Threat Intel</text>
            
            <rect x="370" y="170" width="60" height="15" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="400" y="180" textAnchor="middle" fontSize="6" fill="#00B2A9">Response</text>
            
            {/* Integration Connections */}
            <path d="M350 140 L370 140" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M350 155 L370 155" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M350 170 L370 170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            
            {/* EDR Dashboard */}
            <rect x="220" y="280" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="300" textAnchor="middle" fontSize="11" fill="#00B2A9">EDR Dashboard</text>
            
            {/* Dashboard Connection */}
            <path d="M300 180 L300 280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Endpoint Detection & Response</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Managed Security Services",
            link: "/services/managed-security"
          },
          {
            title: "UAE Incident Response",
            link: "/services/incident-response-planning"
          },
          {
            title: "UAE SIEM",
            link: "/services/siem"
          },
          {
            title: "UAE Threat Hunting",
            link: "/services/threat-hunting"
          },
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE Vulnerability Management",
            link: "/services/vulnerability-management"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Endpoint Detection and Response in UAE FAQs"
        subtitle="Common questions about EDR implementation for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default EdrPage;