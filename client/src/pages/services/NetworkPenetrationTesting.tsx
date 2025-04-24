import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Network, Shield, Server, Router, Wifi, Globe, Terminal, AlertTriangle } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const NetworkPenetrationTestingPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Network Penetration Testing Services in UAE",
    description: "Expert network penetration testing services in Dubai and across UAE. Identify and address exploitable network security vulnerabilities before attackers with our comprehensive testing services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Network Security Penetration Testing",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring network vulnerability assessment"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What types of networks are assessed in network penetration testing for UAE organizations?",
      answer: "Network penetration testing for UAE organizations typically covers several network types: 1) External/Perimeter Networks - internet-facing systems and public-facing infrastructure exposed to attackers targeting UAE organizations, 2) Internal Networks - corporate LANs, departmental networks, and internal systems that could be exploited through lateral movement, 3) Wireless Networks - WiFi infrastructure prevalent in UAE office environments, retail locations, and educational institutions, 4) Remote Access Systems - VPN solutions and remote connectivity platforms particularly important as UAE embraces hybrid work models, 5) Cloud Network Infrastructure - virtual networks in AWS, Azure, and other providers popular in UAE, 6) IoT Networks - smart building systems and operational technology common in UAE's advanced infrastructure, 7) Segmentation Boundaries - network boundaries between different security zones, 8) VLAN Configurations - virtual LANs and network segmentation approaches. The assessment scope is customized based on your UAE organization's specific network architecture, threat profile, and regulatory requirements, with particular attention to UAE-specific network configurations and defense mechanisms."
    },
    {
      question: "What vulnerabilities are commonly found in UAE networks during testing?",
      answer: "Network penetration tests for UAE organizations frequently uncover several vulnerability types: 1) Misconfigured Firewalls & Gateways - improper rule sets or outdated configurations common in rapidly-evolving UAE network environments, 2) Insecure Remote Access Solutions - VPNs or remote desktop services with weak authentication, particularly concerning as UAE embraces remote work, 3) Legacy System Exposures - unpatched network devices with known vulnerabilities, 4) Weak Network Segmentation - insufficient isolation between critical and standard networks, 5) Insecure Wireless Implementations - WiFi vulnerabilities common in UAE's highly connected environments, 6) Unprotected IoT Devices - unsecured smart devices prevalent in UAE's advanced infrastructure, 7) Default/Weak Credentials - unchanged administrative passwords on network equipment, 8) VLAN Hopping Vulnerabilities - improper virtual LAN configuration allowing boundary crossing, 9) Missing Network-Level Encryption - unencrypted sensitive traffic, 10) Protocol-Specific Weaknesses - vulnerabilities in specific network protocols. Testing UAE networks requires understanding of both global vulnerabilities and UAE-specific network architecture patterns commonly implemented across the region."
    },
    {
      question: "How is network penetration testing conducted for UAE organizations?",
      answer: "Network penetration testing for UAE organizations follows several structured phases: 1) Scoping - defining testing boundaries, objectives, and rules of engagement with consideration for UAE regulatory requirements, 2) Discovery & Reconnaissance - network mapping and enumeration to identify hosts, services, and potential entry points in the UAE network infrastructure, 3) Vulnerability Identification - using specialized tools and manual techniques to identify security weaknesses in network devices, services, and configurations, 4) Exploitation - controlled attempts to exploit identified vulnerabilities using advanced techniques to demonstrate real attack paths, 5) Lateral Movement - testing internal network propagation capabilities once initial access is obtained, 6) Privilege Escalation - attempting to gain higher permissions within the network infrastructure, 7) Post-Exploitation - controlled demonstration of potential attacker objectives after network compromise, 8) Documentation - comprehensive reporting of findings, exploitation paths, and remediation recommendations. Throughout the testing process, we maintain communication with your UAE technical team and adhere to defined emergency procedures to ensure testing remains safe and controlled."
    },
    {
      question: "What network security regulations apply to UAE organizations?",
      answer: "UAE organizations must consider several regulatory frameworks with network security requirements: 1) UAE Information Assurance Standards - comprehensive network security controls for government and critical infrastructure, 2) NESA Standards - specific network security requirements for critical information infrastructure providers, 3) UAE Central Bank Network Security Framework - detailed requirements for financial institutions including network segmentation and monitoring, 4) UAE Cybercrime Law (Federal Decree-Law No. 5) - establishes legal framework for network security incidents, 5) Telecommunications Regulatory Authority (TRA) Standards - network security requirements for telecommunications operators and ISPs, 6) DIFC and ADGM Regulations - specific requirements for financial free zones including network security controls, 7) Sector-specific regulations - healthcare, energy, and education sectors have additional network security requirements. Network penetration testing helps verify compliance with these UAE-specific requirements while also addressing global standards like ISO 27001, PCI DSS, and other frameworks relevant to your industry and operations."
    },
    {
      question: "How frequently should UAE organizations conduct network penetration testing?",
      answer: "For UAE organizations, network penetration testing frequency should be determined by several factors: 1) Regulatory Requirements - specific UAE frameworks may mandate testing frequency (e.g., annual tests for financial institutions, semi-annual for critical infrastructure), 2) Network Changes - significant architecture changes, major infrastructure upgrades, or new network deployments should trigger testing, 3) Threat Landscape - organizations facing heightened threats in the UAE region should test more frequently, 4) Industry Standards - sector-specific expectations in the UAE market like financial services typically requiring more frequent testing, 5) Prior Test Results - organizations with significant findings should retest after remediation and conduct more frequent testing until security matures. As a general guideline for UAE organizations: Comprehensive network penetration tests should be conducted at least annually. Critical infrastructure organizations should consider semi-annual testing. Organizations undergoing significant network changes should test after major deployments. Continuous monitoring and vulnerability scanning should complement periodic penetration testing to maintain ongoing security visibility."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Network Penetration Testing Services in UAE | Security Assessment"
        description="Expert network penetration testing services in Dubai and across UAE. Identify and address exploitable network security vulnerabilities before attackers with our comprehensive testing services with 22+ years of experience."
        url="/services/network-penetration-testing"
        type="website"
      />
      <ServicePageLayout
        title="Network Penetration Testing Services in UAE | Network Security Assessment"
        category="UAE Network Security Services"
        description="Identify and remediate network security vulnerabilities in your UAE organization's infrastructure before attackers can exploit them. Our comprehensive network penetration testing examines your entire network architecture for weaknesses."
        heroIcon={<Network className="h-8 w-8" />}
        overview="Network infrastructure forms the foundation of your UAE organization's digital operations, but also presents a substantial attack surface for threat actors targeting UAE businesses. Our UAE-focused Network Penetration Testing service provides a comprehensive security assessment of your network infrastructure—including firewalls, routers, switches, load balancers, VPNs, and wireless systems—to identify exploitable vulnerabilities before malicious actors can discover them. Our Dubai-based security experts simulate real-world attack scenarios using both automated tools and advanced manual techniques to discover configuration weaknesses, unpatched vulnerabilities, segmentation issues, and other security gaps specific to UAE network environments. We deliver actionable remediation guidance prioritized by risk to help you strengthen your network defenses against both external and internal threats while ensuring alignment with UAE regulatory requirements and industry best practices."
        steps={[
          {
            title: "UAE-Specific Network Discovery & Enumeration",
            description: "Comprehensive mapping of your UAE network environment to identify active hosts, network services, routing protocols, and potential entry points, creating a detailed inventory of your network infrastructure with focus on both external perimeter and internal network components."
          },
          {
            title: "UAE External Perimeter Assessment",
            description: "Thorough evaluation of your internet-facing network infrastructure from an attacker's perspective, identifying exposed services, misconfigured systems, and vulnerabilities that could provide initial access to your UAE network from external threat actors targeting organizations in the region."
          },
          {
            title: "UAE Internal Network Evaluation",
            description: "In-depth assessment of your internal network architecture focusing on segmentation effectiveness, access controls, and lateral movement opportunities that could allow compromised systems to spread across your UAE organization's network infrastructure."
          },
          {
            title: "UAE Wireless Network Security Testing",
            description: "Specialized assessment of wireless network infrastructure common in UAE business environments, examining encryption implementations, authentication mechanisms, network segmentation, rogue access point detection, and physical security controls across your wireless deployment."
          },
          {
            title: "UAE-Contextualized Firewall & Security Appliance Review",
            description: "Detailed evaluation of network security appliances including firewalls, intrusion prevention systems, VPN gateways, and web application firewalls, focusing on rule configurations, bypass techniques, and security efficacy against threats targeting UAE organizations."
          },
          {
            title: "UAE Network Device Configuration Analysis",
            description: "Thorough review of network device configurations including routers, switches, load balancers, and other infrastructure components to identify security misconfigurations, default credentials, unnecessary services, and technical vulnerabilities relevant to UAE network environments."
          },
          {
            title: "UAE Network Authentication & Access Control Testing",
            description: "Assessment of network access controls, authentication systems, directory services, and privilege management for network devices and services, evaluating protection against unauthorized access with attention to UAE-specific access control requirements."
          },
          {
            title: "UAE Network Protocol Security Assessment",
            description: "Evaluation of protocol-specific vulnerabilities across your network including DNS, SNMP, SMB, FTP, and other services, with examination of encryption implementation, protocol misuse opportunities, and service exploitability within UAE network contexts."
          },
          {
            title: "UAE Network Segmentation Validation",
            description: "Testing of network segmentation strategies to verify isolation between security zones, validating that critical systems, sensitive data, and regulated environments maintain appropriate separation with adherence to UAE regulatory expectations for network segmentation."
          },
          {
            title: "UAE Traffic Analysis & Data Exposure Assessment",
            description: "Examination of network traffic patterns, unencrypted sensitive data transmission, and information leakage through network protocols, identifying data exposure risks across your UAE network infrastructure with sensitivity to UAE data protection requirements."
          },
          {
            title: "UAE-Appropriate Exploitation & Verification",
            description: "Controlled exploitation of identified network vulnerabilities to validate security weaknesses, demonstrate attack paths, and provide clear proof of vulnerability impacts within your UAE network environment while maintaining safe testing boundaries."
          },
          {
            title: "UAE Regulatory Compliance Mapping",
            description: "Detailed mapping of network security findings against applicable UAE regulatory frameworks including UAE IA Standards, NESA requirements, and sector-specific regulations, providing clear compliance insights and remediation priorities according to UAE regulatory expectations."
          }
        ]}
        benefits={[
          {
            title: "UAE Comprehensive Network Visibility",
            content: "Gain complete visibility into your network security posture across your UAE organization's entire infrastructure—identifying previously unknown vulnerabilities, misconfigurations, and security gaps that could expose your operations to network-based attacks targeting UAE businesses."
          },
          {
            title: "UAE Real-World Attack Simulation",
            content: "Experience authentic attack scenarios conducted by security experts who understand the methods used by threat actors targeting UAE organizations, providing realistic assessment of your network's actual resilience against sophisticated network-based attacks relevant to the UAE threat landscape."
          },
          {
            title: "UAE Regulatory Compliance Verification",
            content: "Validate compliance with UAE network security requirements including UAE IA Standards, NESA guidelines, Central Bank regulations, and sector-specific frameworks through comprehensive testing aligned with regulatory expectations for UAE network environments."
          },
          {
            title: "UAE Network Architecture Improvement",
            content: "Receive expert guidance on enhancing your overall network architecture security with UAE-specific recommendations for segmentation strategies, defense-in-depth implementation, and network security best practices appropriate for UAE business environments and technology ecosystems."
          },
          {
            title: "UAE Prioritized Remediation Guidance",
            content: "Obtain clear, actionable remediation recommendations prioritized by risk impact and implementation complexity, enabling efficient allocation of security resources to address the most critical network vulnerabilities in your UAE infrastructure first."
          },
          {
            title: "UAE Secure Expansion Planning",
            content: "Ensure new network infrastructure deployments and expansions common in UAE's rapidly growing business environment maintain security alignment with existing systems through architecture guidance and security design recommendations tailored to UAE network environments."
          },
          {
            title: "UAE Wireless Network Security Assurance",
            content: "Verify the security of wireless networks critical to UAE's mobile-first business culture, protecting against unauthorized access, rogue access points, and wireless-specific attacks that could compromise your corporate network through vulnerable wireless implementations."
          },
          {
            title: "UAE Network Security Investment Validation",
            content: "Validate the effectiveness of existing network security investments and identify gaps requiring additional controls, optimizing your security budget while ensuring comprehensive protection against network-based threats targeting UAE organizations."
          },
          {
            title: "UAE Cloud Network Security Validation",
            content: "Evaluate security of cloud network configurations and hybrid connectivity increasingly common in UAE's digital transformation initiatives, ensuring consistent protection across traditional and cloud network boundaries in accordance with UAE cloud security standards."
          },
          {
            title: "UAE Security Team Knowledge Transfer",
            content: "Enhance your internal security team's capabilities through detailed explanations of findings, attack methodologies, and remediation approaches, building network security expertise within your UAE organization through collaborative knowledge transfer during the testing process."
          }
        ]}
        deliverables={[
          {
            title: "UAE Executive Summary Report",
            description: "Business-focused overview of key network security findings, risk analysis, and strategic recommendations tailored for UAE executive audiences—presenting technical network vulnerabilities in business terms with clear articulation of risk exposure, potential business impacts, and improvement priorities relevant to UAE operations."
          },
          {
            title: "UAE Detailed Technical Analysis Report",
            description: "Comprehensive documentation of network testing methodology, vulnerability findings, and detailed technical analysis—including affected devices, configuration issues, exploitation techniques, and network vulnerability evidence with specific UAE network context and regulatory considerations throughout."
          },
          {
            title: "UAE Network Vulnerability Inventory",
            description: "Structured catalog of all identified network vulnerabilities with severity ratings, affected components, technical details, exploitation potential, business impact assessment, and verification methods—providing complete visibility of network security gaps across your UAE infrastructure."
          },
          {
            title: "UAE Network Architecture Security Assessment",
            description: "Analysis of your overall network architecture including segmentation effectiveness, defense-in-depth implementation, access control strategies, and structural security considerations—with recommendations for architectural improvements appropriate for UAE network environments and business requirements."
          },
          {
            title: "UAE Network Security Configuration Guide",
            description: "Detailed configuration recommendations for securing network devices, services, and protocols—including specific hardening guidelines, security parameters, rule recommendations, and technical remediation steps tailored to your UAE network environment and technology stack."
          },
          {
            title: "UAE Remediation Roadmap & Priorities",
            description: "Structured remediation plan with prioritized security improvements, resource requirements, implementation timeframes, and milestone recommendations—providing a clear path to enhancing network security posture with appropriate phasing for UAE implementation considerations."
          },
          {
            title: "UAE Network Security Best Practices",
            description: "Comprehensive security guidance covering network administration procedures, change management, monitoring strategies, and ongoing security maintenance—establishing operational best practices for maintaining secure network operations in UAE business environments."
          },
          {
            title: "UAE Network Penetration Testing Evidence",
            description: "Documented proof of findings including sanitized screenshots, command output, configuration snippets, and exploitation demonstrations—providing clear evidence of vulnerability existence while maintaining appropriate security for sensitive information in accordance with UAE testing standards."
          },
          {
            title: "UAE Regulatory Compliance Assessment",
            description: "Detailed mapping of network security findings to relevant UAE regulatory frameworks and compliance requirements—highlighting specific regulatory gaps, mandatory remediation items, and documentation needed to satisfy UAE authority requirements during audits or examinations."
          },
          {
            title: "UAE Network Security Metrics & Benchmarking",
            description: "Comparative analysis of your network security posture against industry benchmarks and regional peer organizations—providing context for your security maturity and specific metrics for tracking security improvements over time against UAE industry standards."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Network Cloud */}
            <ellipse cx="300" cy="200" rx="250" ry="150" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="90" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="110" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="110" x2="410" y2="135" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Network Devices */}
            <rect x="200" y="120" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="220" y="145" textAnchor="middle" fontSize="9" fill="#00E5FF">Firewall</text>
            
            <rect x="300" y="120" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="320" y="145" textAnchor="middle" fontSize="9" fill="#00E5FF">Router</text>
            
            <rect x="400" y="120" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="420" y="145" textAnchor="middle" fontSize="9" fill="#00E5FF">Switch</text>
            
            <rect x="160" y="200" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="180" y="225" textAnchor="middle" fontSize="9" fill="#00E5FF">Server</text>
            
            <rect x="260" y="200" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="280" y="225" textAnchor="middle" fontSize="9" fill="#00E5FF">Server</text>
            
            <rect x="360" y="200" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="380" y="225" textAnchor="middle" fontSize="9" fill="#00E5FF">Server</text>
            
            <circle cx="180" cy="280" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="180" y="283" textAnchor="middle" fontSize="9" fill="#00E5FF">WAP</text>
            
            <circle cx="260" cy="280" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="260" y="283" textAnchor="middle" fontSize="9" fill="#00E5FF">WAP</text>
            
            <circle cx="340" cy="280" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="340" y="283" textAnchor="middle" fontSize="9" fill="#00E5FF">WAP</text>
            
            <circle cx="420" cy="280" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="420" y="283" textAnchor="middle" fontSize="9" fill="#00E5FF">WAP</text>
            
            {/* Internet Connection */}
            <rect x="150" y="50" width="100" height="30" rx="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="200" y="70" textAnchor="middle" fontSize="10" fill="#00E5FF">Internet</text>
            
            <path d="M200 80 L200 120" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="4 2"/>
            
            {/* Connection Lines */}
            <line x1="220" y1="140" x2="300" y2="140" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="340" y1="140" x2="400" y2="140" stroke="#00E5FF" strokeWidth="1"/>
            
            <line x1="180" y1="160" x2="180" y2="200" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="220" y1="160" x2="280" y2="200" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="320" y1="160" x2="280" y2="200" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="320" y1="160" x2="380" y2="200" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="420" y1="160" x2="380" y2="200" stroke="#00E5FF" strokeWidth="1"/>
            
            <line x1="180" y1="240" x2="180" y2="260" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="280" y1="240" x2="260" y2="260" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="280" y1="240" x2="340" y2="260" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="380" y1="240" x2="420" y2="260" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Vulnerability Markers */}
            <circle cx="200" cy="120" r="5" fill="#FF5252" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="380" cy="200" r="5" fill="#FF5252" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="340" cy="280" r="5" fill="#FF5252" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Attack Path Animation */}
            <circle cx="200" cy="80" r="3" fill="#FF5252">
              <animate attributeName="cy" values="80;120" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="180" cy="160" r="3" fill="#FF5252">
              <animate attributeName="cy" values="160;200" dur="2s" begin="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="180" cy="240" r="3" fill="#FF5252">
              <animate attributeName="cy" values="240;280" dur="2s" begin="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* Outside Attacker */}
            <rect x="100" y="50" width="30" height="30" rx="15" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
            <path d="M110 60 L120 60" stroke="#FF5252" strokeWidth="1"/>
            <circle cx="110" cy="65" r="2" fill="#FF5252"/>
            <circle cx="120" cy="65" r="2" fill="#FF5252"/>
            <path d="M110 70 L120 70" stroke="#FF5252" strokeWidth="1"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="500" y="170" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="184" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="200" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="214" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="500" y="230" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="244" textAnchor="middle" fontSize="8" fill="#EB3443">TRA</text>
            
            {/* Report Element */}
            <rect x="250" y="350" width="100" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="370" textAnchor="middle" fontSize="10" fill="#00E5FF">Findings Report</text>
            
            {/* Main Title */}
            <text x="300" y="30" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Network Penetration Testing</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE Web Application Security",
            link: "/services/web-penetration-testing"
          },
          {
            title: "UAE Wireless Network Security",
            link: "/services/wireless-security"
          },
          {
            title: "UAE Cloud Security",
            link: "/services/cloud-security"
          },
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE Vulnerability Assessment",
            link: "/services/vapt"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Network Penetration Testing in UAE FAQs"
        subtitle="Common questions about network penetration testing for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default NetworkPenetrationTestingPage;