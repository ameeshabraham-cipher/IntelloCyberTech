import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Target, Shield, AlertTriangle, Terminal, Eye, User, Lock, FileText } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const RedTeamPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Red Team Exercises Services in UAE",
    description: "Expert red team services in Dubai and across UAE. Simulate real-world attacks to test your organization's detection and response capabilities with our comprehensive red team exercises with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Red Team Exercises",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring advanced security validation"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "How do red team exercises differ from penetration testing for UAE organizations?",
      answer: "Red team exercises differ from penetration testing in several key ways for UAE organizations: 1) Comprehensive Scope - red team exercises evaluate your entire security program across people, processes, and technology rather than focusing on specific systems or applications, particularly important for UAE organizations with complex infrastructure, 2) Real-World Attack Simulation - red team exercises simulate actual threat actors targeting UAE organizations using the same tools, techniques, and procedures (TTPs) as real adversaries active in the UAE region, 3) Stealth Focus - unlike penetration testing which often operates with the knowledge of IT teams, red team exercises prioritize evading detection, moving stealthily, and maintaining persistence within UAE environments, 4) Objective-Based - red team exercises focus on achieving specific business objectives (accessing crown jewel data, compromising critical UAE infrastructure) rather than finding and documenting all vulnerabilities, 5) Blue Team Evaluation - red team exercises specifically test your security team's actual detection and response capabilities against sophisticated attack techniques targeting UAE organizations, 6) Extended Duration - red team engagements typically run for weeks or months rather than days, allowing for realistic attack pacing and persistence techniques common in advanced attacks against UAE targets, 7) UAE Threat Actor Emulation - red team exercises often emulate specific threat actors known to target UAE organizations in your industry. While penetration testing is valuable for identifying and fixing vulnerabilities, red team exercises provide a more holistic evaluation of your security program's effectiveness against real-world threats specifically targeting UAE organizations."
    },
    {
      question: "What attack scenarios are most relevant for UAE red team exercises?",
      answer: "Several attack scenarios are particularly relevant for UAE red team exercises: 1) Nation-State Targeting - simulating sophisticated adversaries targeting UAE critical infrastructure, government systems, or strategic industries, 2) Financial Sector Attacks - emulating threats targeting UAE banking, financial services, and payment systems given the UAE's status as a financial hub, 3) Energy Sector Campaigns - testing security of oil, gas, and energy organizations critical to the UAE economy against targeted attacks, 4) Supply Chain Compromises - evaluating resilience against attacks that leverage trusted third-party relationships common in UAE's global business ecosystem, 5) Insider Threat Scenarios - testing controls against malicious or compromised insiders with legitimate access to UAE systems and data, 6) Physical/Digital Hybrid Attacks - combining physical security bypass with digital compromise to test holistic security posture of UAE facilities, 7) Cloud Infrastructure Targeting - evaluating security of cloud environments increasingly adopted by UAE organizations for digital transformation, 8) Aviation/Transportation Attacks - testing security of UAE's critical transportation infrastructure including airports and ports, 9) Telecommunications Compromise - evaluating security of communication infrastructure essential to UAE operations, 10) Ransomware/Destructive Attacks - testing resilience against increasingly common destructive attacks targeting UAE organizations. These scenarios should be tailored to your specific UAE organization's threat profile, industry sector, and crown jewel assets that would be most valuable to actual attackers."
    },
    {
      question: "How should UAE organizations prepare for a red team exercise?",
      answer: "UAE organizations should prepare for red team exercises through several steps: 1) Clear Objectives Definition - establish specific goals and success criteria for the exercise aligned with UAE security priorities and regulatory requirements, 2) Executive Sponsorship - secure leadership support with clear understanding of exercise purpose, potential business impacts, and expected outcomes in UAE business context, 3) Rules of Engagement - define detailed parameters including scope boundaries, prohibited actions, safety mechanisms, and emergency protocols appropriate for UAE operational environments, 4) Detection Capability Verification - ensure security monitoring systems are fully operational to accurately measure detection capabilities against sophisticated threats targeting UAE organizations, 5) Incident Response Readiness - verify incident response processes and team readiness without specifically alerting them to the upcoming exercise timing, 6) Limited Knowledge Distribution - restrict awareness of the exercise to essential personnel to ensure realistic response evaluation while maintaining appropriate UAE business continuity safeguards, 7) UAE Legal and Compliance Review - ensure exercise plans adhere to UAE legal requirements, regulatory frameworks, and organizational policies, 8) Business Impact Mitigation - identify and implement safeguards to prevent unintended disruption to critical UAE business operations, 9) UAE-Focused Intelligence Sharing - provide red team with appropriate threat intelligence about adversaries targeting your industry in the UAE, 10) Success Metrics Definition - establish clear measures for evaluating both red team effectiveness and blue team detection and response capabilities in UAE contexts. Proper preparation ensures the exercise provides maximum security value while managing operational risks appropriately for UAE business environments."
    },
    {
      question: "What deliverables should UAE organizations expect from red team exercises?",
      answer: "UAE organizations should expect comprehensive deliverables from red team exercises including: 1) Executive Summary - business-focused overview of the exercise, key findings, and strategic recommendations with UAE regulatory context and regional threat relevance, 2) Attack Narrative - detailed storytelling of the complete attack chain showing how red team operators compromised systems and achieved objectives within your UAE environment, 3) UAE Threat Actor Emulation Analysis - description of how the exercise emulated specific threat actors targeting UAE organizations and comparison of effectiveness to real adversary capabilities, 4) Technical Attack Details - comprehensive documentation of techniques, tools, exploits, and procedures used during the exercise with mapping to frameworks like MITRE ATT&CK, 5) Security Control Effectiveness Assessment - evaluation of which security controls succeeded or failed during the attack with UAE compliance implications, 6) Detection Gap Analysis - identification of attacks that went undetected and recommendations for enhancing monitoring capabilities against UAE-relevant threats, 7) Incident Response Evaluation - assessment of blue team detection timing, investigation quality, containment effectiveness, and overall response capability maturity for UAE organizations, 8) UAE Attack Technique Demonstration - sanitized evidence of successful techniques including screenshots, command output, and data access demonstrations, 9) UAE-Specific Strategic Recommendations - prioritized improvement roadmap addressing root causes and systemic improvements tailored to UAE security requirements and threat landscape, 10) UAE Tactical Remediation Guidance - specific technical recommendations for addressing identified vulnerabilities with appropriate context for UAE implementation. These deliverables should provide actionable insights for enhancing security against the sophisticated threats specifically targeting UAE organizations."
    },
    {
      question: "How can UAE organizations maximize value from red team exercises?",
      answer: "UAE organizations can maximize value from red team exercises through several approaches: 1) Treat as Learning Opportunity - foster a blame-free environment focused on improvement rather than penalizing security shortcomings identified during UAE-specific attack scenarios, 2) Focus on Detection & Response - emphasize enhancing capabilities to detect and respond to sophisticated attacks rather than just fixing individual vulnerabilities, particularly important for UAE's advanced threat landscape, 3) UAE Threat Intelligence Integration - incorporate findings into your threat intelligence program to better understand actual techniques used against UAE organizations in your industry, 4) Security Control Validation - use results to verify which security investments are providing value and which need enhancement or replacement in UAE security environments, 5) UAE Metrics Development - create measurable security improvements based on findings that can be tracked over time and reported to UAE leadership and regulators, 6) Cross-Functional Sharing - distribute appropriate lessons across security, IT, development, and business teams to build organization-wide security awareness in UAE context, 7) Continuous Improvement Cycle - implement regular red team exercises (annual or semi-annual) to create ongoing feedback loops for security enhancement relevant to evolving UAE threats, 8) UAE Blue Team Development - use exercise findings to enhance internal security team capabilities through targeted training and skill development, 9) UAE Executive Communication - translate technical findings into business risk stories that executives can understand and support with appropriate investment, 10) UAE Regulatory Alignment - map findings to relevant UAE compliance frameworks to demonstrate security due diligence to regulators. This approach ensures red team exercises deliver strategic security value beyond tactical vulnerability identification for UAE organizations."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Red Team Exercises Services in UAE | Advanced Attack Simulation"
        description="Expert red team services in Dubai and across UAE. Simulate real-world attacks to test your organization's detection and response capabilities with our comprehensive red team exercises with 22+ years of experience."
        url="/services/red-team"
        type="website"
      />
      <ServicePageLayout
        title="Red Team Exercises Services in UAE | Advanced Attack Simulation"
        category="UAE Advanced Cybersecurity Services"
        description="Test your organization's ability to detect and respond to sophisticated cyber attacks through realistic adversary simulations. Our UAE-focused red team exercises evaluate your entire security program against real-world threats."
        heroIcon={<Target className="h-8 w-8" />}
        overview="Traditional security testing often fails to evaluate how well your UAE organization would fare against a determined, sophisticated adversary specifically targeting your most valuable assets. Our UAE-focused Red Team Exercises service provides realistic simulations of real-world attacks conducted by expert security professionals who think and act like actual threat actors targeting UAE organizations. Unlike conventional penetration testing, our red team operations are objective-based, stealth-focused engagements that evaluate your entire security program—across people, processes, and technology—by emulating the tools, techniques, and procedures (TTPs) used by advanced adversaries targeting UAE organizations in your industry. We focus on testing your team's ability to detect and respond to sophisticated attacks, identifying security gaps that could allow attackers to achieve their objectives within your UAE environment. With deep understanding of the specific threats targeting UAE sectors and organizations, our red team exercises deliver invaluable insights into your actual security resilience against the most relevant threat scenarios."
        steps={[
          {
            title: "UAE-Specific Threat Intelligence Analysis",
            description: "Research threat actors, campaigns, and attack methodologies specifically targeting UAE organizations in your industry to identify the most relevant adversaries to emulate, developing a realistic threat profile that guides the red team exercise."
          },
          {
            title: "UAE-Focused Attack Scenario Development",
            description: "Create detailed, realistic attack scenarios based on your UAE organization's specific threat profile, defining objectives, constraints, and success criteria that align with how actual adversaries would target your most valuable UAE assets."
          },
          {
            title: "UAE Rules of Engagement Establishment",
            description: "Develop comprehensive parameters for the exercise including scope boundaries, prohibited activities, safety measures, communication protocols, and emergency procedures to ensure a controlled, safe engagement within your UAE environment."
          },
          {
            title: "UAE External Reconnaissance & OSINT",
            description: "Conduct realistic open-source intelligence gathering on your UAE organization to identify potential entry points, exposed assets, employee information, and technical details that would be available to actual attackers targeting UAE operations."
          },
          {
            title: "UAE Initial Access Execution",
            description: "Attempt controlled exploitation of external vulnerabilities, phishing campaigns targeting UAE employees, supply chain compromise simulation, or other initial access techniques based on how actual adversaries would target your UAE organization."
          },
          {
            title: "UAE Perimeter Security Evaluation",
            description: "Test the effectiveness of your network security perimeter including firewalls, VPNs, email gateways, and web filtering through realistic attack techniques commonly used against UAE organizations in your industry sector."
          },
          {
            title: "UAE Internal Network Infiltration",
            description: "Upon gaining initial access, conduct stealthy internal reconnaissance, identify high-value targets, and attempt lateral movement within your UAE network environment while avoiding detection by security monitoring systems."
          },
          {
            title: "UAE Privilege Escalation Attempts",
            description: "Execute controlled privilege escalation techniques to gain higher-level access within your UAE environment, targeting administrative credentials, misconfigurations, and trust relationships that could be exploited by sophisticated attackers."
          },
          {
            title: "UAE Persistence Establishment",
            description: "Implement covert persistence mechanisms to maintain access to your UAE environment across system reboots and credential changes, using techniques that sophisticated adversaries employ to ensure long-term access to targeted UAE systems."
          },
          {
            title: "UAE Crown Jewel Targeting",
            description: "Attempt to access your organization's most valuable UAE assets and data based on the exercise objectives, demonstrating how advanced adversaries could achieve their ultimate goals once inside your environment."
          },
          {
            title: "UAE Detection & Response Evaluation",
            description: "Document all detection events, security team responses, and containment actions throughout the exercise to evaluate the effectiveness of your UAE organization's security monitoring, incident response, and threat hunting capabilities."
          },
          {
            title: "UAE Comprehensive Exercise Analysis",
            description: "Perform detailed analysis of the exercise results including successful and unsuccessful attack paths, detection effectiveness, response timeliness, and overall security posture against the specific threats targeting your UAE operations."
          }
        ]}
        benefits={[
          {
            title: "UAE Realistic Threat Validation",
            content: "Experience authentic attack scenarios conducted by experts who emulate the specific adversaries and techniques targeting UAE organizations in your industry, providing a realistic assessment of your security posture against actual, relevant threats."
          },
          {
            title: "UAE Security Investment Verification",
            content: "Validate the effectiveness of your security controls, technologies, and processes against sophisticated attacks, ensuring your UAE security investments are actually protecting your most critical assets from advanced threats."
          },
          {
            title: "UAE Detection Capability Improvement",
            content: "Identify gaps in your ability to detect sophisticated attackers operating in your UAE environment, enabling enhancement of security monitoring, alerting, and threat hunting capabilities against relevant attack techniques."
          },
          {
            title: "UAE Response Readiness Enhancement",
            content: "Test your incident response procedures, team capabilities, and recovery processes under realistic conditions, strengthening your ability to effectively handle genuine security incidents affecting your UAE operations."
          },
          {
            title: "UAE Full Attack Chain Visibility",
            content: "Gain comprehensive understanding of how sophisticated attackers could chain together multiple vulnerabilities and techniques to compromise your UAE environment, rather than seeing individual vulnerabilities in isolation."
          },
          {
            title: "UAE Security Team Development",
            content: "Provide valuable hands-on experience for your security team in detecting and responding to sophisticated attacks, building critical skills through realistic scenarios relevant to protecting UAE environments."
          },
          {
            title: "UAE Risk Prioritization Guidance",
            content: "Receive expert guidance on prioritizing security investments based on actual attack paths and techniques that presented the greatest risk to your UAE organization's most valuable assets and operations."
          },
          {
            title: "UAE Regulatory Compliance Demonstration",
            content: "Demonstrate due diligence and security program effectiveness to UAE regulators, partners, and customers through documented, realistic testing of your security capabilities against advanced threats."
          },
          {
            title: "UAE Executive Security Awareness",
            content: "Build UAE leadership understanding of security risks through concrete examples and narratives that demonstrate how sophisticated attackers could impact business operations, enhancing support for security initiatives."
          },
          {
            title: "UAE Security Posture Advancement",
            content: "Develop a strategic roadmap for security enhancement based on realistic attack scenarios specific to UAE threat landscapes, enabling focused improvement of your overall defense capabilities."
          }
        ]}
        deliverables={[
          {
            title: "UAE Executive Summary Report",
            description: "Business-focused overview of the red team exercise, key findings, risk assessment, and strategic recommendations designed for UAE executive audiences—presenting technical security issues in business terms with clear articulation of potential impacts to UAE operations."
          },
          {
            title: "UAE Comprehensive Attack Narrative",
            description: "Detailed storytelling of the complete attack chain showing exactly how red team operators compromised systems and achieved objectives—providing a compelling narrative of how sophisticated adversaries could target your UAE operations through realistic scenarios."
          },
          {
            title: "UAE Technical Attack Details",
            description: "Comprehensive documentation of all techniques, tools, exploits, and procedures used during the exercise with MITRE ATT&CK framework mapping—providing complete visibility into attack methodologies relevant to sophisticated threats targeting UAE organizations."
          },
          {
            title: "UAE Security Control Assessment",
            description: "Detailed evaluation of which security controls succeeded or failed during the engagement—highlighting effective defensive measures and critical gaps in your protection against sophisticated attacks targeting UAE environments."
          },
          {
            title: "UAE Detection & Response Evaluation",
            description: "Analysis of your security team's detection timing, investigation quality, containment effectiveness, and overall response capabilities—providing clear assessment of operational security effectiveness against advanced threats to UAE organizations."
          },
          {
            title: "UAE Attack Technique Demonstrations",
            description: "Sanitized evidence of successful attack techniques including screenshots, command output, and data access demonstrations—providing concrete proof of security issues while maintaining appropriate security for sensitive UAE organizational information."
          },
          {
            title: "UAE Adversary Emulation Analysis",
            description: "Detailed comparison of red team activities to the specific threat actors targeting UAE organizations in your industry—evaluating how your defenses would perform against actual adversaries based on current threat intelligence."
          },
          {
            title: "UAE Strategic Recommendations",
            description: "Prioritized improvement roadmap addressing root causes and systemic security gaps—providing a strategic plan for enhancing protection against sophisticated threats with specific consideration for UAE implementation constraints and regulatory requirements."
          },
          {
            title: "UAE Tactical Remediation Guidance",
            description: "Specific technical recommendations for addressing identified vulnerabilities with detailed remediation instructions—enabling your technical teams to implement necessary security improvements appropriate for UAE environments."
          },
          {
            title: "UAE Security Metrics & Benchmarking",
            description: "Quantitative analysis of your security posture including detection coverage, response timeliness, and control effectiveness—providing measurable indicators for tracking security improvements and comparing performance to UAE industry peers."
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
            
            {/* Target Bullseye */}
            <circle cx="300" cy="180" r="40" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
            <circle cx="300" cy="180" r="30" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <circle cx="300" cy="180" r="20" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <circle cx="300" cy="180" r="10" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
            <text x="300" y="184" textAnchor="middle" fontSize="10" fill="#EB3443">Crown Jewels</text>
            
            {/* Red Team */}
            <rect x="80" y="180" width="30" height="30" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
            <text x="95" y="200" textAnchor="middle" fontSize="8" fill="#EB3443">Red</text>
            
            {/* Blue Team */}
            <rect x="490" y="180" width="30" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="505" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">Blue</text>
            
            {/* Attack Paths */}
            <path d="M110 180 C150 150, 180 140, 230 160" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </path>
            
            <path d="M110 190 C160 210, 200 220, 260 190" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/>
            </path>
            
            <path d="M110 185 C180 180, 220 180, 270 180" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite"/>
            </path>
            
            {/* Defense Monitoring */}
            <path d="M490 180 C450 150, 400 150, 340 170" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
            </path>
            
            <path d="M490 190 C460 210, 430 220, 340 190" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite"/>
            </path>
            
            {/* Network Elements in Target */}
            <rect x="270" y="150" width="20" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
            <text x="280" y="165" textAnchor="middle" fontSize="6" fill="#00E5FF">S1</text>
            
            <rect x="310" y="150" width="20" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
            <text x="320" y="165" textAnchor="middle" fontSize="6" fill="#00E5FF">S2</text>
            
            <rect x="270" y="190" width="20" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
            <text x="280" y="205" textAnchor="middle" fontSize="6" fill="#00E5FF">S3</text>
            
            <rect x="310" y="190" width="20" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
            <text x="320" y="205" textAnchor="middle" fontSize="6" fill="#00E5FF">S4</text>
            
            {/* Attack Progress Indicator */}
            <circle cx="230" cy="160" r="3" fill="#EB3443">
              <animate attributeName="cx" values="110;230;270" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="180;160;150" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="260" cy="190" r="3" fill="#EB3443">
              <animate attributeName="cx" values="110;260;270" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="190;190;190" dur="5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="270" cy="180" r="3" fill="#EB3443">
              <animate attributeName="cx" values="110;270;300" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="185;180;180" dur="6s" repeatCount="indefinite"/>
            </circle>
            
            {/* Detection Alert */}
            <circle cx="340" cy="170" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="340;420;490" dur="3s" begin="3s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="170;160;180" dur="3s" begin="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="340" cy="190" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="340;420;490" dur="3s" begin="4s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="190;200;190" dur="3s" begin="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* UAE Regulatory Elements */}
            <rect x="500" y="120" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="134" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="150" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="164" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            {/* Exercise Artifacts */}
            <rect x="200" y="320" width="80" height="30" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="240" y="340" textAnchor="middle" fontSize="10" fill="#EB3443">Attack Path</text>
            
            <rect x="320" y="320" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="360" y="340" textAnchor="middle" fontSize="10" fill="#00E5FF">Detection</text>
            
            {/* Connection to Artifacts */}
            <line x1="300" y1="230" x2="240" y2="320" stroke="#EB3443" strokeWidth="1" strokeDasharray="4 2"/>
            <line x1="300" y1="230" x2="360" y2="320" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Red Team Exercises</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE Advanced Penetration Testing",
            link: "/services/advanced-penetration-testing"
          },
          {
            title: "UAE Threat Hunting",
            link: "/services/threat-hunting"
          },
          {
            title: "UAE Incident Response Planning",
            link: "/services/incident-response-planning"
          },
          {
            title: "UAE Security Monitoring",
            link: "/services/security-monitoring"
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
        title="Red Team Exercises in UAE FAQs"
        subtitle="Common questions about red team exercises for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default RedTeamPage;