import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Search, Shield, Eye, Target, Server, Database, Activity, AlertTriangle } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const ThreatHuntingPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Threat Hunting Services in UAE",
    description: "Expert threat hunting services in Dubai and across UAE. Proactively search for hidden threats and advanced persistent threats (APTs) in your networks with our comprehensive threat hunting services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Threat Hunting",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring proactive threat detection"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "Why is threat hunting important for UAE organizations?",
      answer: "Threat hunting is particularly important for UAE organizations due to several factors: 1) UAE's High-Value Target Status - as a global business and financial hub, UAE organizations are prime targets for sophisticated threat actors seeking financial gain or strategic advantage, 2) Advanced Persistent Threats (APTs) - UAE organizations face nation-state and organized crime groups using advanced techniques to maintain long-term, stealthy presence in networks, 3) Detection Gap Challenges - traditional security tools often miss sophisticated attacks targeting UAE organizations, particularly zero-day exploits and living-off-the-land techniques, 4) UAE Critical Infrastructure Protection - many UAE organizations support national critical infrastructure requiring enhanced security vigilance, 5) Evolving Regional Threat Landscape - unique geopolitical factors in the Middle East create specific threat actors and TTPs targeting UAE organizations, 6) UAE Regulatory Requirements - frameworks like UAE IA Standards and NESA increasingly expect advanced threat detection capabilities, 7) Limitations of Automated Tools - reliance solely on automated security solutions leaves UAE organizations vulnerable to sophisticated attacks designed to evade standard detection. Proactive threat hunting helps UAE organizations identify threats that have evaded existing security controls, reducing dwell time and potential damage while strengthening overall security posture against the sophisticated threats specifically targeting UAE sectors."
    },
    {
      question: "What threat hunting methodologies are most effective for UAE organizations?",
      answer: "Several threat hunting methodologies are particularly effective for UAE organizations: 1) Hypothesis-Based Hunting - developing and testing theories about potential compromise based on threat intelligence specific to UAE-targeted attack campaigns and regional threat actors, 2) TTP-Based Hunting - searching for specific adversary tactics, techniques, and procedures known to target UAE organizations or regional industries, 3) Intelligence-Driven Hunting - leveraging threat intelligence about attacks specifically targeting UAE or similar organizations in your industry to guide hunting activities, 4) Analytics-Driven Hunting - using data analytics and behavioral analysis to identify anomalies and potential malicious activity unique to your UAE environment, 5) Crown Jewel Analysis - focusing hunting efforts on protecting the most critical assets within UAE organizations based on business impact and attractiveness to attackers, 6) Threat Modeling - creating models of how attackers might target specific UAE systems or data to guide hunting activities, 7) MITRE ATT&CK Framework Alignment - mapping hunting activities to the MITRE ATT&CK framework with focus on techniques common in attacks against UAE organizations. The most effective approach typically combines multiple methodologies tailored to your specific UAE environment, threat profile, and security maturity, with regular refinement based on results and changing threat landscape affecting UAE organizations."
    },
    {
      question: "What tools and technologies support effective threat hunting in UAE environments?",
      answer: "Effective threat hunting in UAE environments leverages several key technologies: 1) Security Information and Event Management (SIEM) - centralized logging and correlation tools that aggregate security data across UAE infrastructure for analysis, 2) Endpoint Detection and Response (EDR) - tools providing visibility into endpoint activity, facilitating hunting for malicious behavior on workstations and servers in UAE environments, 3) Network Traffic Analysis (NTA) - solutions that analyze network communications to identify suspicious patterns, lateral movement, and command-and-control traffic common in attacks targeting UAE organizations, 4) User and Entity Behavior Analytics (UEBA) - systems that establish baselines of normal behavior and highlight anomalies that may indicate compromise in UAE user environments, 5) Threat Intelligence Platforms - solutions that integrate threat data relevant to UAE and regional threats to provide context for hunting activities, 6) Memory Forensics Tools - specialized utilities for analyzing system memory to identify malicious code and persistence mechanisms, 7) Log Analytics Platforms - solutions enabling complex queries across vast datasets to identify subtle indicators of compromise, 8) Digital Forensics Tools - capabilities for deep analysis of systems when potential threats are identified, 9) Data Visualization Tools - solutions that help hunters identify patterns and anomalies in large datasets, 10) Automation and Orchestration Platforms - tools that help scale hunting operations through workflow automation and playbook execution. The key is integration of these technologies to provide comprehensive visibility across your UAE environment while enabling efficient analysis by skilled threat hunters."
    },
    {
      question: "How should UAE organizations measure the effectiveness of threat hunting?",
      answer: "UAE organizations should measure threat hunting effectiveness through several metrics: 1) Dwell Time Reduction - measuring how quickly threats are identified compared to industry averages or previous baselines in the UAE market, 2) High-Fidelity Threat Discoveries - tracking the number of genuine threats identified through hunting that weren't detected by automated security tools, 3) Mean Time to Detection (MTTD) - measuring the average time between threat introduction and discovery, with comparisons to UAE industry standards, 4) Mean Time to Response (MTTR) - tracking how quickly identified threats are contained and remediated, 5) Hypothesis Effectiveness - measuring the percentage of hunting hypotheses that lead to valuable findings or process improvements, 6) Coverage Metrics - assessing what percentage of critical UAE systems, data, and infrastructure is covered by hunting activities, 7) Process Improvement Indicators - tracking how threat hunting leads to security control improvements, enhanced detection rules, and better automated capabilities, 8) TTP Coverage - measuring what percentage of relevant MITRE ATT&CK techniques (particularly those common in UAE-targeting attacks) are addressed in hunting activities, 9) Return on Investment - assessing costs of hunting program against potential breach costs prevented, particularly relevant to UAE regulatory fines and business impacts, 10) Security Posture Improvement - tracking overall security maturity advancement resulting from threat hunting program insights. These metrics should be tailored to your UAE organization's specific security maturity, threat profile, and business priorities."
    },
    {
      question: "How should UAE organizations integrate threat hunting with existing security operations?",
      answer: "UAE organizations should integrate threat hunting with security operations through several approaches: 1) Shared Tooling and Data - ensure threat hunters have access to the same security data, logging, and platforms used by SOC teams, with appropriate UAE data handling controls, 2) Collaborative Workflow Integration - establish clear processes for hunters to transition findings to incident response teams when threats are discovered in UAE environments, 3) Detection Engineering Partnership - create feedback loops where hunting discoveries lead to new automated detection rules to catch similar threats across the UAE organization, 4) Threat Intelligence Integration - ensure both hunting and SOC teams leverage the same threat intelligence focused on UAE and regional threats to maintain consistent understanding of the threat landscape, 5) Joint Training and Exercises - conduct combined training sessions and scenario exercises to build cohesion between hunting and operational security teams, 6) Complementary Metrics and Reporting - develop integrated reporting that shows how hunting and SOC activities together enhance security posture for UAE stakeholders, 7) Shared Technology Roadmap - jointly plan security technology investments to ensure tools serve both reactive and proactive security needs in UAE environments, 8) Unified Security Leadership - ensure security leadership provides consistent direction and prioritization across both hunting and operational security functions, 9) Cross-Team Rotations - implement staff rotations between hunting and SOC teams to build cross-functional skills and perspectives, 10) Integrated Documentation - maintain shared knowledge bases, playbooks, and procedures accessible to both teams. This integration ensures hunting insights directly strengthen operational security while SOC findings inform hunting priorities appropriate for UAE threat landscapes."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Threat Hunting Services in UAE | Proactive Threat Detection"
        description="Expert threat hunting services in Dubai and across UAE. Proactively search for hidden threats and advanced persistent threats (APTs) in your networks with our comprehensive threat hunting services with 22+ years of experience."
        url="/services/threat-hunting"
        type="website"
      />
      <ServicePageLayout
        title="Threat Hunting Services in UAE | Proactive Threat Detection"
        category="UAE Advanced Cybersecurity"
        description="Proactively search for hidden adversaries and advanced threats in your UAE environment before they can cause damage. Our threat hunting services identify sophisticated attackers that have evaded traditional security controls."
        heroIcon={<Search className="h-8 w-8" />}
        overview="As cyber threats targeting UAE organizations become increasingly sophisticated, traditional security tools alone are no longer sufficient to detect advanced adversaries. Our UAE-focused Threat Hunting service provides proactive identification of hidden threats that have evaded your existing security controls. Unlike conventional security monitoring that relies primarily on known signatures and alerts, our expert threat hunters actively search for indicators of compromise and suspicious behaviors across your UAE environment using advanced analytics, threat intelligence, and deep security expertise. We focus on identifying advanced persistent threats (APTs), nation-state actors, and sophisticated criminal groups specifically targeting UAE organizations in your industry. Our approach combines global threat hunting methodologies with deep understanding of the UAE threat landscape, regional attack patterns, and sector-specific risks, enabling us to identify complex threats before they can achieve their objectives within your UAE operations."
        steps={[
          {
            title: "UAE Threat Profile Development",
            description: "Analyze your organization's specific threat landscape based on industry, data sensitivity, UAE market position, and regional factors to identify the most relevant adversaries and attack techniques likely to target your UAE operations, establishing focus areas for hunting activities."
          },
          {
            title: "UAE Environment Assessment",
            description: "Evaluate your existing security architecture, monitoring capabilities, data sources, and detection gaps to determine available telemetry for hunting and establish baseline visibility across your UAE environment, identifying additional logging or monitoring needs for effective hunting."
          },
          {
            title: "UAE-Focused Threat Intelligence Integration",
            description: "Incorporate relevant threat intelligence about adversaries, campaigns, and techniques specifically targeting UAE organizations in your industry, providing context for hunting activities and focusing efforts on the most relevant threats to your UAE operations."
          },
          {
            title: "UAE-Specific Hunting Hypothesis Development",
            description: "Create targeted hunting hypotheses based on threat intelligence, known adversary tactics, and UAE-specific attack patterns relevant to your industry and environment, developing specific theories about potential compromise to guide structured hunting activities."
          },
          {
            title: "UAE Data Collection & Enrichment",
            description: "Gather and enrich relevant security data from across your UAE environment including logs, alerts, network traffic, endpoint telemetry, and user activity, creating comprehensive datasets for analysis with appropriate context for effective threat identification."
          },
          {
            title: "UAE Pattern & Anomaly Analysis",
            description: "Apply advanced analytics, behavioral analysis, and statistical techniques to identify suspicious patterns, anomalies, and potential indicators of compromise across your UAE environment, focusing on subtle signals that may indicate sophisticated adversary activity."
          },
          {
            title: "UAE-Contextualized TTP Detection",
            description: "Search for specific adversary tactics, techniques, and procedures (TTPs) known to be used in attacks against UAE organizations, using the MITRE ATT&CK framework and regional threat intelligence to guide hunting for relevant attack patterns."
          },
          {
            title: "UAE-Relevant IOC Sweeping",
            description: "Conduct comprehensive searches for known indicators of compromise (IOCs) from threat intelligence sources focused on UAE and regional threats, identifying any evidence of specific malware, tools, or infrastructure previously used against UAE organizations."
          },
          {
            title: "UAE Lateral Movement Tracking",
            description: "Analyze authentication logs, network connections, and access patterns to identify potential lateral movement activities within your UAE environment, focusing on how attackers might navigate between systems to reach critical UAE business assets."
          },
          {
            title: "UAE Persistence Mechanism Identification",
            description: "Search for advanced persistence techniques used by sophisticated attackers to maintain access to your UAE environment, examining scheduled tasks, services, registry modifications, and other mechanisms that enable long-term presence."
          },
          {
            title: "UAE Data Exfiltration Analysis",
            description: "Analyze network traffic, DNS queries, and data transfer patterns to identify potential data exfiltration activities that may indicate attackers are removing sensitive information from your UAE environment through covert channels."
          },
          {
            title: "UAE Threat Validation & Response",
            description: "Verify hunting findings through additional investigation and evidence collection to eliminate false positives, document confirmed threats with comprehensive evidence, and transition validated threats to incident response teams for containment and remediation according to UAE compliance requirements."
          }
        ]}
        benefits={[
          {
            title: "UAE Early Threat Detection",
            content: "Identify sophisticated adversaries before they achieve their objectives by proactively hunting for threats that have evaded traditional security controls in your UAE environment, significantly reducing potential damage and business impact from advanced attacks targeting UAE organizations."
          },
          {
            title: "UAE Dwell Time Reduction",
            content: "Decrease the time between initial compromise and threat detection through proactive hunting, minimizing the window during which attackers can operate undetected in your UAE environment and limiting their opportunity to achieve objectives against your UAE operations."
          },
          {
            title: "UAE Regional Threat Context",
            content: "Benefit from specialized threat hunting expertise focused on the unique threats targeting UAE organizations in your industry, with hunters who understand regional adversaries, their techniques, and sector-specific attack patterns relevant to UAE businesses."
          },
          {
            title: "UAE Detection Capability Enhancement",
            content: "Strengthen your overall security posture by identifying detection gaps and improving automated monitoring based on hunting findings, creating a continuous improvement cycle that enhances protection against sophisticated threats targeting UAE organizations."
          },
          {
            title: "UAE Crown Jewel Protection",
            content: "Focus hunting efforts on your most critical UAE business assets and data, ensuring proactive protection for the systems and information that would cause the greatest business impact if compromised by advanced adversaries targeting UAE operations."
          },
          {
            title: "UAE Regulatory Compliance Support",
            content: "Meet advanced security monitoring requirements specified in UAE frameworks including UAE IA Standards and NESA guidelines through documented proactive threat detection capabilities appropriate for your regulatory environment."
          },
          {
            title: "UAE Attacker TTP Understanding",
            content: "Develop deeper understanding of the specific tactics, techniques, and procedures used by adversaries targeting your UAE organization, enabling more effective security improvements and defense strategies tailored to actual threats."
          },
          {
            title: "UAE Threat Intelligence Enhancement",
            content: "Generate organization-specific threat intelligence based on hunting findings relevant to your UAE environment, improving your understanding of your actual threat landscape beyond generic threat feeds or global intelligence sources."
          },
          {
            title: "UAE Security Team Development",
            content: "Enhance the capabilities of your internal security team through knowledge transfer and collaborative hunting activities, building deeper threat detection skills specifically relevant to protecting UAE environments against sophisticated threats."
          },
          {
            title: "UAE Strategic Security Guidance",
            content: "Receive expert recommendations for security architecture improvements, control enhancements, and strategic investments based on hunting findings, enabling more effective allocation of security resources to address actual threats to your UAE operations."
          }
        ]}
        deliverables={[
          {
            title: "UAE Threat Hunting Strategy",
            description: "Comprehensive threat hunting approach tailored to your UAE organization's specific threat profile, environment, and security objectives, including hunting methodologies, priority areas, resource requirements, and implementation roadmap aligned with UAE security priorities."
          },
          {
            title: "UAE Environment Visibility Assessment",
            description: "Detailed evaluation of available security telemetry and data sources across your UAE environment, including gap analysis, logging recommendations, and visibility enhancement guidance to support effective threat hunting activities in your specific UAE technology landscape."
          },
          {
            title: "UAE Threat Hunting Hypotheses",
            description: "Documented hunting hypotheses based on relevant threat intelligence, known adversary TTPs, and UAE-specific attack patterns, providing structured theories about potential compromise specifically relevant to your industry and UAE environment."
          },
          {
            title: "UAE Threat Hunt Reports",
            description: "Detailed documentation of each hunting exercise including methodology, data sources, analytical techniques, findings, and recommendations specific to your UAE environment, providing comprehensive records of hunting activities and outcomes."
          },
          {
            title: "UAE Threat Intelligence Summary",
            description: "Actionable intelligence about adversaries, campaigns, and techniques relevant to your UAE organization based on hunting findings and external intelligence sources, contextualizing the specific threats targeting your UAE operations."
          },
          {
            title: "UAE Hunting Finding Analysis",
            description: "In-depth analysis of confirmed hunting findings including attack techniques used, impacted systems, potential business impact, and complete evidence chain, providing thorough understanding of identified threats in your UAE environment."
          },
          {
            title: "UAE Remediation Recommendations",
            description: "Detailed guidance for addressing confirmed threats identified through hunting activities, including containment strategies, eradication steps, recovery procedures, and verification methods appropriate for your UAE technology environment."
          },
          {
            title: "UAE Detection Enhancement Guidance",
            description: "Specific recommendations for improving automated detection capabilities based on hunting findings, including new detection rules, monitoring configurations, alert tuning, and tool optimizations tailored to your UAE security environment."
          },
          {
            title: "UAE Security Architecture Recommendations",
            description: "Strategic guidance for enhancing security controls, architecture, and processes based on hunting insights, addressing root causes and systemic vulnerabilities identified during hunting activities across your UAE infrastructure."
          },
          {
            title: "UAE Threat Hunting Knowledge Transfer",
            description: "Educational materials, workshops, and collaborative hunting activities to build internal threat hunting capabilities within your security team, transferring skills and methodologies relevant to protecting your specific UAE environment."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Network Environment */}
            <rect x="100" y="100" width="400" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="70" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="90" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="85" x2="400" y2="100" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Network Nodes */}
            <circle cx="150" cy="150" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="150" y="153" textAnchor="middle" fontSize="8" fill="#00E5FF">Server</text>
            
            <circle cx="220" cy="150" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="220" y="153" textAnchor="middle" fontSize="8" fill="#00E5FF">Server</text>
            
            <circle cx="290" cy="150" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="290" y="153" textAnchor="middle" fontSize="8" fill="#00E5FF">Server</text>
            
            <circle cx="150" cy="220" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="150" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Client</text>
            
            <circle cx="200" cy="220" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="200" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Client</text>
            
            <circle cx="250" cy="220" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="250" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Client</text>
            
            <circle cx="300" cy="220" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Client</text>
            
            {/* Threat Actor */}
            <rect x="390" cy="150" width="25" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
            <text x="402.5" y="167" textAnchor="middle" fontSize="8" fill="#EB3443">APT</text>
            
            {/* Connection Lines */}
            <line x1="150" y1="150" x2="220" y2="150" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="220" y1="150" x2="290" y2="150" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="290" y1="150" x2="390" y2="150" stroke="#00E5FF" strokeWidth="1"/>
            
            <line x1="150" y1="165" x2="150" y2="210" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="150" y1="165" x2="200" y2="210" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="220" y1="165" x2="250" y2="210" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="290" y1="165" x2="300" y2="210" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Attack Path */}
            <path d="M390 150 L290 150" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7">
              <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
            </path>
            
            <path d="M290 165 L250 210" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7">
              <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Threat Hunter */}
            <circle cx="50" cy="180" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <path d="M35 180 L65 180" stroke="#00B2A9" strokeWidth="0.5"/>
            <path d="M50 165 L50 195" stroke="#00B2A9" strokeWidth="0.5"/>
            <circle cx="50" cy="180" r="10" fill="none" stroke="#00B2A9" strokeWidth="1"/>
            <circle cx="50" cy="180" r="15" fill="none" stroke="#00B2A9" strokeWidth="0.5"/>
            <circle cx="50" cy="180" r="5" fill="none" stroke="#00B2A9" strokeWidth="1.5"/>
            
            {/* Hunting Visualization */}
            <path d="M75 180 C90 170, 100 160, 110 170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2"/>
            <path d="M110 170 C125 180, 135 190, 150 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2"/>
            
            <path d="M75 180 C90 190, 100 200, 115 190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2"/>
            <path d="M115 190 C130 180, 140 170, 150 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2"/>
            
            <circle cx="220" cy="150" r="20" fill="none" stroke="#00B2A9" strokeWidth="0.5" strokeDasharray="2 2">
              <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="290" cy="150" r="20" fill="none" stroke="#00B2A9" strokeWidth="0.5" strokeDasharray="2 2">
              <animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="250" cy="220" r="15" fill="none" stroke="#00B2A9" strokeWidth="0.5" strokeDasharray="2 2">
              <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Threat Found Indication */}
            <circle cx="290" cy="150" r="5" fill="#EB3443" fillOpacity="0.5">
              <animate attributeName="fill-opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="250" cy="220" r="3" fill="#EB3443" fillOpacity="0.5">
              <animate attributeName="fill-opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Hunt Analysis */}
            <rect x="170" y="280" width="120" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="230" y="305" textAnchor="middle" fontSize="10" fill="#00E5FF">Threat Analysis</text>
            
            <path d="M290 170 L230 280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M250 230 L230 280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Threat Elements */}
            <rect x="350" y="280" width="100" height="40" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="400" y="300" textAnchor="middle" fontSize="8" fill="#EB3443">UAE Targeted</text>
            <text x="400" y="310" textAnchor="middle" fontSize="8" fill="#EB3443">APT Campaign</text>
            
            <path d="M390 175 L400 280" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="500" y="150" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="164" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="180" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="194" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="500" y="210" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="224" textAnchor="middle" fontSize="8" fill="#EB3443">Central Bank</text>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Threat Hunting</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Incident Response Planning",
            link: "/services/incident-response-planning"
          },
          {
            title: "UAE Red Team Exercises",
            link: "/services/red-team"
          },
          {
            title: "UAE Security Monitoring",
            link: "/services/security-monitoring"
          },
          {
            title: "UAE Digital Forensics",
            link: "/services/digital-forensics"
          },
          {
            title: "UAE Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Threat Hunting in UAE FAQs"
        subtitle="Common questions about threat hunting for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default ThreatHuntingPage;