import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Eye, AlertTriangle, Search, BarChart2, Clock, Server, Zap } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const SiemPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Security Information and Event Management (SIEM) Services in UAE",
    description: "Expert SIEM services in Dubai and across UAE. Enhance threat detection and incident response with our comprehensive security information and event management solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Security Monitoring Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring advanced security monitoring"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What are the key benefits of SIEM for UAE organizations?",
      answer: "UAE organizations realize several strategic benefits from SIEM implementation: 1) UAE-Specific Threat Detection - identification of security incidents targeting UAE organizations through correlation of events across multiple systems with contextual analysis based on regional threat landscape, 2) UAE Compliance Automation - streamlined reporting and evidence collection for UAE regulatory frameworks including UAE IA Standards, NESA requirements, UAE PDPL, and sector-specific mandates, 3) UAE Security Visibility - comprehensive view of security events across complex UAE technology environments including on-premises, cloud, and hybrid infrastructures common in UAE digital transformation initiatives, 4) UAE Incident Response Enhancement - accelerated investigation and containment of security events through centralized data access and automated workflows appropriate for UAE security team structures, 5) UAE Security Intelligence - data-driven insights into threat patterns specifically targeting UAE organizations, enabling proactive defense and strategic security investments aligned with actual risks, 6) UAE Log Management Efficiency - centralized collection, normalization, and retention of security data across diverse UAE technology environments, satisfying forensic requirements and investigative needs, 7) UAE Security Automation - streamlined handling of common security tasks through automated detection, investigation, and response capabilities, optimizing limited UAE cybersecurity resources, 8) UAE Alert Prioritization - risk-based ranking of security events enabling focus on highest-impact threats to UAE operations through contextual analysis and business impact assessment, 9) UAE Security Metrics - quantifiable measurement of security posture, threat activity, and program effectiveness with appropriate reporting for UAE stakeholders at various organizational levels, 10) UAE Enhanced Detection Capability - identification of sophisticated attacks through advanced correlation that would evade individual security controls, particularly important for UAE organizations facing targeted threats. These benefits combine to significantly enhance security posture while addressing specific operational and compliance characteristics of UAE organizations."
    },
    {
      question: "What data sources should UAE organizations integrate with SIEM?",
      answer: "UAE organizations should prioritize integrating several key data sources with SIEM: 1) UAE Network Infrastructure - firewalls, routers, switches, proxies, and VPN concentrators providing visibility into traffic patterns, access attempts, and potential intrusions across UAE network environments, 2) UAE Cloud Services - security logs from IaaS, PaaS, and SaaS platforms increasingly used by UAE organizations, capturing authentication events, configuration changes, and system activities in off-premises environments, 3) UAE Identity Systems - directory services, authentication platforms, and access management solutions monitoring user behavior across UAE operations with special attention to privileged account activities, 4) UAE Endpoint Protection - antivirus, EDR, application control, and device management tools providing visibility into security status and potential compromise of UAE user systems and servers, 5) UAE Email Security - gateway protection, authentication logs, and filtering systems monitoring threats targeting UAE organizations through this critical communication channel, 6) UAE Database Systems - audit logs from critical data repositories containing sensitive information subject to UAE regulatory protection, tracking access patterns and potential data leakage, 7) UAE Application Security - web application firewalls, API gateways, and application logs monitoring for attacks against UAE digital services and business applications, 8) UAE Mobile Device Management - security events from smartphones and tablets extensively used in UAE business operations, providing visibility into mobile threats and compromise indicators, 9) UAE Security Tools - dedicated protection technologies including DLP, EDR, IDS/IPS generating specialized security telemetry with high-fidelity detection across UAE environments, 10) UAE Physical Security - building access, surveillance systems, and environmental monitoring providing context for security events in UAE facilities and operational locations. Integration should be prioritized based on security value, technical feasibility, and specific UAE risk profile with appropriate coverage across critical UAE business systems."
    },
    {
      question: "What are common SIEM implementation challenges for UAE organizations?",
      answer: "UAE organizations often face several distinct challenges during SIEM implementations: 1) UAE Data Volume Management - efficiently handling massive logs generated by UAE technology environments while maintaining performance, storage optimization, and cost control in SIEM deployments, 2) UAE False Positive Tuning - reducing excessive alerts that overwhelm limited UAE security resources through appropriate rule tuning, filtering, and contextual analysis specific to UAE operational environments, 3) UAE Expertise Constraints - addressing limited availability of specialized SIEM skills in UAE talent market, particularly for advanced correlation, threat hunting, and custom use case development, 4) UAE Cloud Integration - extending monitoring to diverse cloud services increasingly adopted by UAE organizations while maintaining compliance with data sovereignty and privacy requirements, 5) UAE Use Case Development - creating detection scenarios relevant to specific UAE threats and business risks beyond generic security rules, requiring specialized knowledge of UAE threat landscape, 6) UAE Technology Complexity - integrating diverse security technologies, legacy systems, and specialized applications common in UAE heterogeneous IT environments, requiring custom connectors and parsing logic, 7) UAE SIEM Architecture - designing appropriate deployment model considering UAE data residency requirements, network constraints, and performance optimization for distributed UAE operations, 8) UAE Business Context Integration - incorporating understanding of UAE business processes, critical assets, and organizational priorities to enable proper risk-based alert prioritization and security decision making, 9) UAE Compliance Alignment - configuring appropriate collection, retention, and reporting capabilities to satisfy multiple UAE regulatory frameworks with potentially overlapping or conflicting requirements, 10) UAE Operational Sustainability - establishing processes, documentation, and knowledge transfer ensuring long-term SIEM effectiveness despite potential staff turnover in UAE's dynamic employment market. Addressing these challenges requires combination of technical expertise, UAE-specific security knowledge, and structured implementation methodology to achieve successful SIEM outcomes for UAE organizations."
    },
    {
      question: "How should UAE organizations develop effective SIEM use cases?",
      answer: "UAE organizations should follow several key practices for effective SIEM use case development: 1) UAE Risk-Based Prioritization - focus initial detection on threats presenting highest risk to UAE operations, aligning SIEM capabilities with specific business risks and regulatory requirements, 2) UAE Threat Intelligence Incorporation - leverage information about attack techniques targeting UAE sectors and region to develop detection scenarios for relevant threats rather than theoretical risks, 3) UAE Staged Implementation - begin with foundational use cases addressing common attacks before progressing to sophisticated detection, building UAE security team capabilities and SIEM maturity progressively, 4) UAE Cross-Team Collaboration - involve stakeholders beyond security including IT operations, application teams, and business units to develop detection aligned with actual UAE technology environment and operational practices, 5) UAE Specific Attack Chains - map detection to complete attack sequences relevant to UAE organizations rather than isolated events, connecting early indicators with potential progression into serious compromise, 6) UAE False Positive Management - incorporate appropriate filtering, thresholds, and contextual factors in detection logic to minimize false alerts that could overwhelm UAE security resources, 7) UAE Continuous Refinement - regularly review and enhance detection based on false positive rates, missed detections, and evolving threats specifically relevant to UAE business environment, 8) UAE Use Case Documentation - maintain comprehensive records of detection logic, investigation procedures, and response actions ensuring knowledge transfer despite potential staff changes in UAE security teams, 9) UAE Detection Coverage Mapping - align use cases with recognized frameworks like MITRE ATT&CK to identify and address gaps in detection capabilities across relevant attack techniques targeting UAE organizations, 10) UAE Metrics-Driven Improvement - track use case effectiveness through quantitative measures including true positive rates, investigation times, and coverage metrics, driving continuous enhancement based on operational data. This approach creates detection content specifically relevant to UAE threat landscape while building sustainable capability that evolves with changing security requirements."
    },
    {
      question: "What are important considerations for SIEM solution selection for UAE organizations?",
      answer: "UAE organizations should evaluate SIEM solutions based on several key considerations: 1) UAE Deployment Options - availability of appropriate implementation models including on-premises, cloud, and hybrid approaches with consideration for UAE data sovereignty requirements and privacy regulations, 2) UAE Scalability Requirements - capacity to handle growing data volumes, increasing event rates, and expanding technology footprints associated with UAE digital transformation and business growth, 3) UAE Integration Capabilities - pre-built connectors for security technologies commonly used in UAE environments with customization options for specialized systems and regional applications, 4) UAE Language Support - ability to process, analyze, and display content in languages relevant to UAE operations, particularly for environments with Arabic content or multi-language requirements, 5) UAE Analytics Capabilities - advanced detection technologies including machine learning, behavioral analysis, and anomaly detection appropriate for identifying sophisticated threats targeting UAE organizations, 6) UAE Compliance Features - built-in reports, retention capabilities, and security controls addressing specific UAE regulatory frameworks including UAE IA Standards, NESA requirements, and sector-specific mandates, 7) UAE Total Cost Analysis - comprehensive evaluation of licensing, infrastructure, implementation, and operational expenses appropriate for UAE market conditions and organizational budget constraints, 8) UAE Operational Requirements - usability, performance, and management capabilities aligned with available UAE security expertise and operational maturity of security function, 9) UAE Support Availability - vendor presence, partner ecosystem, and technical assistance in UAE time zones with appropriate language capabilities and regional knowledge, 10) UAE Implementation Resources - availability of professional services with UAE project experience and understanding of local compliance landscapes, security requirements, and operational constraints. These factors should be evaluated based on your specific UAE organizational characteristics, security objectives, and operational environment to select solution offering optimal alignment with requirements."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Security Information and Event Management (SIEM) Services in UAE | Security Monitoring"
        description="Expert SIEM services in Dubai and across UAE. Enhance threat detection and incident response with our comprehensive security information and event management solutions with 22+ years of experience."
        url="/services/siem"
        type="website"
      />
      <ServicePageLayout
        title="Security Information and Event Management (SIEM) Services in UAE | Security Monitoring"
        category="UAE Security Monitoring Services"
        description="Enhance threat detection and response with our comprehensive Security Information and Event Management services. We help UAE organizations implement effective SIEM solutions that provide visibility, analytics, and intelligence across your security landscape."
        heroIcon={<Eye className="h-8 w-8" />}
        overview="In today's complex threat environment, UAE organizations need comprehensive visibility across their entire technology landscape to detect sophisticated attacks and respond effectively to security incidents. Our UAE-focused Security Information and Event Management (SIEM) services provide powerful solutions to collect, analyze, and respond to security events through centralized logging, advanced correlation, and automated alerting. We help transform fragmented security monitoring into integrated threat detection that identifies even the most sophisticated attacks targeting UAE organizations. With deep understanding of UAE regulatory requirements, technology environments, and regional threat landscape, we implement SIEM solutions tailored to your specific industry, infrastructure, and security objectives. Whether addressing compliance requirements, enhancing security operations, or building advanced detection capabilities, our expertise ensures your SIEM implementation delivers maximum security value while addressing the specific needs of UAE organizations."
        steps={[
          {
            title: "UAE Security Monitoring Assessment",
            description: "Evaluate your current logging, monitoring, and detection capabilities through comprehensive review of existing practices, technology infrastructure, and security requirements within UAE operational context."
          },
          {
            title: "UAE SIEM Requirements Analysis",
            description: "Identify specific monitoring needs based on your threat profile, compliance obligations, and security objectives with consideration for UAE regulatory landscape and business environment."
          },
          {
            title: "UAE-Specific Use Case Development",
            description: "Define priority detection scenarios based on relevant threats, compliance requirements, and security objectives, creating UAE-focused monitoring use cases with appropriate alerting and response workflows."
          },
          {
            title: "UAE SIEM Solution Selection",
            description: "Evaluate potential technologies based on your specific requirements, infrastructure compatibility, and operational constraints, identifying optimal solution for UAE security monitoring needs."
          },
          {
            title: "UAE SIEM Architecture Design",
            description: "Develop comprehensive technical blueprint for security monitoring including server infrastructure, data collection approach, and storage requirements appropriate for UAE deployment constraints."
          },
          {
            title: "UAE Data Source Integration Planning",
            description: "Identify and prioritize log sources across network, endpoint, cloud, and application environments, creating structured approach for connecting UAE technology stack to SIEM platform."
          },
          {
            title: "UAE SIEM Implementation",
            description: "Deploy selected solution with appropriate infrastructure setup, initial data source integration, and base configuration tailored to UAE security monitoring requirements and operational environment."
          },
          {
            title: "UAE Log Collection Implementation",
            description: "Establish comprehensive data gathering from prioritized sources across UAE technology environment, ensuring proper formatting, parsing, and normalization for effective security analysis."
          },
          {
            title: "UAE SIEM Content Development",
            description: "Create customized correlation rules, dashboards, reports, and workflows addressing UAE-specific security use cases, compliance requirements, and operational needs."
          },
          {
            title: "UAE Alert Tuning & Optimization",
            description: "Refine detection thresholds, correlation logic, and alerting parameters to balance security visibility against false positives, creating sustainable monitoring appropriate for UAE security resources."
          },
          {
            title: "UAE SIEM Operational Training",
            description: "Provide comprehensive education for security personnel covering platform management, alert investigation, content development, and maintenance procedures with UAE-specific monitoring scenarios."
          },
          {
            title: "UAE SIEM Operational Handover",
            description: "Transition implemented solution to operational status with appropriate documentation, knowledge transfer, and support processes ensuring sustainable security monitoring capability for UAE organization."
          }
        ]}
        benefits={[
          {
            title: "UAE Enhanced Threat Detection",
            content: "Identify sophisticated attacks targeting UAE organizations through advanced correlation across multiple systems, providing early warning of security incidents before significant damage occurs."
          },
          {
            title: "UAE Comprehensive Security Visibility",
            content: "Gain complete insight into security events across complex UAE technology environments including on-premises, cloud, and hybrid infrastructures through centralized monitoring and analytics."
          },
          {
            title: "UAE Regulatory Compliance Support",
            content: "Meet logging, monitoring, and reporting requirements specified in UAE frameworks including UAE IA Standards, NESA guidelines, and sector-specific regulations through automated compliance workflows."
          },
          {
            title: "UAE Incident Response Acceleration",
            content: "Enable faster investigation and containment of security events through centralized access to relevant data, reducing response time and limiting potential damage to UAE operations."
          },
          {
            title: "UAE Security Intelligence Enhancement",
            content: "Develop deeper understanding of threats targeting your organization through comprehensive security data analysis, strengthening overall defense through UAE-specific threat insights."
          },
          {
            title: "UAE Log Management Efficiency",
            content: "Streamline collection, storage, and retention of security data across diverse UAE technology environments, satisfying forensic requirements while optimizing infrastructure utilization."
          },
          {
            title: "UAE Security Resource Optimization",
            content: "Enhance efficiency of limited cybersecurity expertise through automated detection, investigation assistance, and alert prioritization, maximizing effectiveness of UAE security personnel."
          },
          {
            title: "UAE Historical Investigation Capability",
            content: "Enable thorough forensic analysis of security incidents through comprehensive historical data, supporting detailed investigation of complex attacks targeting UAE organizations."
          },
          {
            title: "UAE Security Metrics Generation",
            content: "Produce quantifiable measurements of security posture, threat activity, and program effectiveness through structured data analysis with appropriate reporting for various UAE stakeholders."
          },
          {
            title: "UAE Operational Technology Protection",
            content: "Extend security monitoring to specialized systems supporting UAE critical infrastructure and industrial operations, protecting operational technology increasingly targeted by sophisticated threats."
          }
        ]}
        deliverables={[
          {
            title: "UAE Security Monitoring Assessment Report",
            description: "Comprehensive evaluation of your current logging, detection, and response capabilities with detailed findings and recommendations specifically relevant to UAE security operations and compliance requirements."
          },
          {
            title: "UAE SIEM Requirements Document",
            description: "Detailed analysis of your specific monitoring needs based on threat profile, compliance obligations, and security objectives with consideration for UAE regulatory landscape and operational environment."
          },
          {
            title: "UAE SIEM Use Case Catalog",
            description: "Documented collection of priority detection scenarios with detailed correlation logic, alerting criteria, investigation procedures, and response workflows tailored to UAE security requirements."
          },
          {
            title: "UAE SIEM Solution Recommendation",
            description: "Technology selection guidance with comparative analysis of potential solutions, feature evaluation, and specific recommendations based on your UAE organizational requirements and operational constraints."
          },
          {
            title: "UAE SIEM Architecture Blueprint",
            description: "Technical design documentation for comprehensive security monitoring including server infrastructure, collection methods, storage planning, and scalability considerations appropriate for UAE deployment."
          },
          {
            title: "UAE Data Source Integration Plan",
            description: "Structured approach for connecting various technology components to SIEM platform with prioritization framework, technical requirements, and implementation guidance for UAE technology environment."
          },
          {
            title: "UAE SIEM Implementation Documentation",
            description: "Comprehensive technical documentation covering deployed solution configuration, data source connections, correlation rules, dashboards, and customizations specific to UAE implementation."
          },
          {
            title: "UAE SIEM Dashboard & Reports",
            description: "Custom visualization and reporting solutions providing actionable security intelligence with appropriate formats for different UAE stakeholder audiences from technical teams to executive leadership."
          },
          {
            title: "UAE SIEM Training Materials",
            description: "Educational resources covering platform operation, alert investigation, content development, and maintenance procedures with UAE-specific scenarios, technical documentation, and procedural guidance."
          },
          {
            title: "UAE SIEM Operational Manual",
            description: "Detailed procedures for ongoing management including administration tasks, content updates, performance tuning, and troubleshooting guides ensuring sustainable operation within UAE security environment."
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
            
            {/* SIEM Platform */}
            <rect x="250" y="180" width="100" height="60" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="215" textAnchor="middle" fontSize="12" fill="#00E5FF">SIEM Platform</text>
            
            {/* SIEM Components */}
            <rect x="260" y="190" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="272.5" y="200" textAnchor="middle" fontSize="6" fill="#00E5FF">Collect</text>
            
            <rect x="290" y="190" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="302.5" y="200" textAnchor="middle" fontSize="6" fill="#00E5FF">Analyze</text>
            
            <rect x="320" y="190" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="332.5" y="200" textAnchor="middle" fontSize="6" fill="#00E5FF">Alert</text>
            
            <rect x="260" y="210" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="272.5" y="220" textAnchor="middle" fontSize="6" fill="#00E5FF">Store</text>
            
            <rect x="290" y="210" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="302.5" y="220" textAnchor="middle" fontSize="6" fill="#00E5FF">Report</text>
            
            <rect x="320" y="210" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="332.5" y="220" textAnchor="middle" fontSize="6" fill="#00E5FF">Respond</text>
            
            {/* Log Sources */}
            <rect x="170" y="130" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="195" y="144" textAnchor="middle" fontSize="7" fill="#00B2A9">Firewalls</text>
            
            <rect x="170" y="155" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="195" y="169" textAnchor="middle" fontSize="7" fill="#00B2A9">Servers</text>
            
            <rect x="170" y="180" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="195" y="194" textAnchor="middle" fontSize="7" fill="#00B2A9">Applications</text>
            
            <rect x="170" y="205" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="195" y="219" textAnchor="middle" fontSize="7" fill="#00B2A9">Endpoints</text>
            
            <rect x="170" y="230" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="195" y="244" textAnchor="middle" fontSize="7" fill="#00B2A9">Cloud</text>
            
            <rect x="380" y="130" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="405" y="144" textAnchor="middle" fontSize="7" fill="#00B2A9">SOC Team</text>
            
            <rect x="380" y="155" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="405" y="169" textAnchor="middle" fontSize="7" fill="#00B2A9">Dashboards</text>
            
            <rect x="380" y="180" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="405" y="194" textAnchor="middle" fontSize="7" fill="#00B2A9">Reports</text>
            
            <rect x="380" y="205" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="405" y="219" textAnchor="middle" fontSize="7" fill="#00B2A9">Automation</text>
            
            <rect x="380" y="230" width="50" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="405" y="244" textAnchor="middle" fontSize="7" fill="#00B2A9">Integration</text>
            
            {/* Log Flow Animation */}
            <circle cx="220" cy="140" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="220;240;260" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="140;160;195" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="220" cy="165" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="220;240;260" dur="1.8s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="165;175;195" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="220" cy="190" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="220;240;260" dur="1.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="190;190;195" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="220" cy="215" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="220;240;260" dur="2.2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="215;205;195" dur="2.2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="220" cy="240" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="220;240;260" dur="1.7s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="240;215;195" dur="1.7s" repeatCount="indefinite"/>
            </circle>
            
            {/* Alert Flow Animation */}
            <circle cx="340" cy="195" r="3" fill="#EB3443">
              <animate attributeName="cx" values="340;360;380" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="195;175;140" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Report Flow Animation */}
            <circle cx="340" cy="215" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="340;360;380" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="215;200;190" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* UAE Compliance Elements */}
            <rect x="170" y="260" width="260" height="20" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="195" y="274" textAnchor="middle" fontSize="7" fill="#EB3443">UAE IA</text>
            <text x="235" y="274" textAnchor="middle" fontSize="7" fill="#EB3443">NESA</text>
            <text x="275" y="274" textAnchor="middle" fontSize="7" fill="#EB3443">UAE PDPL</text>
            <text x="320" y="274" textAnchor="middle" fontSize="7" fill="#EB3443">Central Bank</text>
            <text x="365" y="274" textAnchor="middle" fontSize="7" fill="#EB3443">Sector-Specific</text>
            
            {/* Connection to Compliance */}
            <path d="M300 240 L300 260" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Threat Element */}
            <rect x="170" y="115" width="20" height="12" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="180" y="124" textAnchor="middle" fontSize="7" fill="#EB3443">!</text>
            
            {/* UAE Threat Types */}
            <rect x="200" y="110" width="200" height="15" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="240" y="120" textAnchor="middle" fontSize="6" fill="#EB3443">APTs</text>
            <text x="280" y="120" textAnchor="middle" fontSize="6" fill="#EB3443">Ransomware</text>
            <text x="320" y="120" textAnchor="middle" fontSize="6" fill="#EB3443">Insiders</text>
            <text x="360" y="120" textAnchor="middle" fontSize="6" fill="#EB3443">UAE Targets</text>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Security Information & Event Management</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Managed Security Services",
            link: "/services/managed-security"
          },
          {
            title: "UAE SOC Establishment",
            link: "/services/soc-establishment"
          },
          {
            title: "UAE EDR",
            link: "/services/edr"
          },
          {
            title: "UAE Threat Hunting",
            link: "/services/threat-hunting"
          },
          {
            title: "UAE Incident Response",
            link: "/services/incident-response-planning"
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
        title="Security Information and Event Management in UAE FAQs"
        subtitle="Common questions about SIEM implementation for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default SiemPage;