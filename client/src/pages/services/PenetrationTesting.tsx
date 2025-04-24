import { 
  Search, 
  Bug, 
  Shield, 
  Terminal,
  AlertTriangle,
  CheckSquare
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const PenetrationTestingPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Penetration Testing Services in UAE",
    description: "Expert cybersecurity penetration testing services in Dubai and across UAE. Identify and address exploitable security vulnerabilities before attackers with our comprehensive testing services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Penetration Testing",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring security vulnerability assessment"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What types of penetration testing are most relevant for UAE organizations?",
      answer: "UAE organizations typically benefit from several types of penetration testing based on their specific risk profile: 1) External Network Testing - assessing internet-facing infrastructure against threats targeting UAE organizations, 2) Internal Network Testing - evaluating internal system security and lateral movement capabilities, 3) Web Application Testing - crucial for UAE organizations with customer-facing portals and applications, 4) Mobile Application Testing - essential for UAE's highly mobile-connected population, 5) Cloud Configuration Testing - critical given UAE's rapid cloud adoption, 6) API Security Testing - important for organizations with digital service integrations, 7) Social Engineering - assessing human element vulnerabilities in UAE's diverse workforce, and 8) Red Team Exercises - comprehensive simulated attacks particularly valuable for critical infrastructure. The optimal approach typically combines multiple testing types based on your organization's specific attack surface, industry, and regulatory requirements in the UAE context."
    },
    {
      question: "How do UAE regulatory requirements impact penetration testing scope?",
      answer: "UAE regulatory frameworks significantly shape penetration testing requirements: 1) UAE Information Assurance Standards - mandate regular penetration testing for government entities and critical infrastructure, 2) NESA Compliance - requires specific testing methodologies and scoping for critical information infrastructure, 3) UAE Central Bank Framework - imposes detailed testing requirements for financial institutions including scope and frequency, 4) ADHICS (Abu Dhabi Healthcare Information Security Standards) - specifies testing requirements for healthcare organizations, 5) UAE PDPL - introduces testing implications for personal data protection, 6) Sector-specific requirements - such as TRA regulations for telecommunications. Additionally, testing must account for local legal considerations, testing authorization documentation in appropriate languages, and testing restrictions in certain free zones. Proper scoping should explicitly address these UAE-specific regulatory requirements while maintaining alignment with global testing standards."
    },
    {
      question: "What penetration testing methodologies are used for UAE organizations?",
      answer: "For UAE organizations, we employ a combination of industry-standard methodologies adapted to local requirements: 1) PTES (Penetration Testing Execution Standard) - provides comprehensive structure for UAE testing engagements, 2) OWASP Testing Guide - specifically for web applications with attention to UAE-relevant threats, 3) NIST SP 800-115 - aligns with UAE IA Standards requirements, 4) OSSTMM (Open Source Security Testing Methodology Manual) - comprehensive framework for operational security verification, 5) NESA Testing Guidelines - UAE-specific methodology required for critical infrastructure. Our approach typically combines elements from multiple methodologies to create a customized testing approach that addresses UAE regulatory requirements, regional threat landscape, and your organization's specific technical environment. All testing is conducted within UAE legal boundaries with proper documentation in required languages."
    },
    {
      question: "How should UAE organizations prepare for a penetration test?",
      answer: "UAE organizations can effectively prepare for penetration testing by: 1) Defining clear objectives aligned with UAE regulatory requirements and business priorities, 2) Documenting testing scope with detailed asset inventories, including cloud resources common in UAE environments, 3) Preparing proper authorization documentation, potentially requiring Arabic translations for certain UAE entities, 4) Establishing emergency contacts and clear escalation procedures with Dubai/UAE timezone considerations, 5) Scheduling testing during appropriate maintenance windows considering UAE business hours and weekly schedules, 6) Backing up critical systems before testing begins, 7) Briefing relevant stakeholders and security teams about testing activities, 8) Ensuring testing environments accurately represent production settings, 9) Preparing relevant documentation for testers including network diagrams and architecture information, and 10) Addressing known vulnerabilities before testing to maximize value. Proper preparation not only improves testing outcomes but also demonstrates security diligence to UAE regulators."
    },
    {
      question: "What should UAE organizations look for in penetration testing reports?",
      answer: "UAE organizations should expect comprehensive penetration testing reports containing: 1) Executive summary with business-focused risk analysis appropriate for UAE executive audiences, 2) Detailed methodology documentation referencing relevant UAE frameworks and standards, 3) Scope and testing limitations clearly defined, 4) Severity ratings contextualized to UAE business impact and regulatory requirements, 5) Detailed findings with clear technical evidence and accurate reproduction steps, 6) Practical remediation guidance considering UAE market technology availability, 7) Risk-based prioritization aligned with UAE threat landscape, 8) Documentation of successfully implemented security controls, 9) Compliance mapping to relevant UAE regulatory frameworks, and 10) Strategic recommendations beyond tactical fixes. Quality reports should also include appropriate language considerations (potentially including Arabic executive summaries for government entities) and follow-up support availability from UAE-based security professionals who understand local context and can assist with remediation guidance."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Penetration Testing Services in UAE | Cybersecurity Assessment"
        description="Expert cybersecurity penetration testing services in Dubai and across UAE. Identify and address exploitable security vulnerabilities before attackers with our comprehensive testing services with 22+ years of experience."
        url="/services/penetration-testing"
        type="website"
      />
      <ServicePageLayout
        title="Penetration Testing Services in UAE | Cybersecurity Assessment"
        category="UAE Cybersecurity Testing"
        description="Identify and address exploitable security vulnerabilities before attackers can with our comprehensive penetration testing services tailored for UAE organizations and aligned with local regulatory requirements."
        heroIcon={<Bug className="h-8 w-8" />}
        overview="In today's sophisticated threat landscape targeting UAE organizations, theoretical security assessments are no longer sufficient to protect your critical assets. Our Dubai-based Penetration Testing services go beyond automated scanning to simulate real-world cyberattacks relevant to the UAE threat environment, uncovering exploitable vulnerabilities in your systems, applications, networks, and infrastructure that automated tools often miss. Led by certified ethical hackers with extensive offensive security experience and deep understanding of UAE's unique cybersecurity landscape, our team leverages the same advanced tactics, techniques, and procedures (TTPs) as malicious threat actors targeting UAE businesses—including zero-day vulnerability exploitation, advanced persistent threats, social engineering, and complex attack chaining—to provide a true measure of your security resilience. We deliver actionable, prioritized remediation guidance that transforms vulnerability discoveries into concrete security improvements, significantly strengthening your defenses against the constantly evolving UAE threat landscape while providing the necessary documentation for UAE regulatory compliance and assurance requirements including UAE IA Standards, NESA, and sector-specific frameworks."
        steps={[
          {
            title: "UAE-Appropriate Scoping & Rules of Engagement",
            description: "We begin with a collaborative planning process to precisely define testing boundaries, objectives, excluded systems, notification requirements, and emergency protocols—ensuring the penetration test aligns with your strategic security priorities and UAE regulatory requirements while minimizing operational disruption and unintended consequences during testing activities, with appropriate documentation in required languages for UAE environments."
          },
          {
            title: "UAE-Focused Reconnaissance & Intelligence Gathering",
            description: "Our security researchers employ sophisticated open-source intelligence (OSINT) techniques and advanced discovery tools to gather comprehensive information about your UAE digital footprint, including domains, IP ranges, exposed services, technology stack, potential entry points, and even publicly leaked credentials—mimicking the initial reconnaissance phase of sophisticated threat actors targeting UAE organizations."
          },
          {
            title: "UAE-Aligned Vulnerability Scanning & Enumeration",
            description: "We deploy a combination of commercial, open-source, and custom-built vulnerability scanning tools to systematically identify potential security weaknesses across in-scope assets, followed by manual verification and enumeration to eliminate false positives and develop a comprehensive vulnerability profile of your UAE environment with attention to region-specific security considerations."
          },
          {
            title: "UAE-Contextual Exploitation & Privilege Escalation",
            description: "Our security experts utilize advanced manual exploitation techniques to validate and exploit identified vulnerabilities, demonstrating real-world attack paths and access capabilities that malicious actors targeting UAE organizations could leverage—including privilege escalation, lateral movement, and persistence mechanisms relevant to your specific technical environment and UAE threat context."
          },
          {
            title: "UAE-Appropriate Post-Exploitation & Data Exfiltration",
            description: "Following successful exploitation, we conduct controlled post-exploitation activities to demonstrate impact—accessing sensitive data, moving laterally through your network, establishing persistence, and testing data exfiltration channels—all within agreed boundaries and with meticulous documentation to showcase potential business impacts relevant to UAE organizations without causing operational disruption."
          },
          {
            title: "UAE-Specific Attack Chaining & Complex Scenarios",
            description: "We go beyond individual vulnerability exploitation to develop sophisticated attack chains that combine multiple weaknesses—demonstrating how attackers targeting UAE organizations could leverage seemingly minor issues in combination to achieve significant compromise, with particular attention to attack patterns relevant to UAE threat landscape and business context."
          },
          {
            title: "UAE Physical Security Assessment Integration",
            description: "When appropriate for UAE facilities, we incorporate physical security elements into testing—evaluating building access controls, physical barriers, security staff procedures, and physical device security—to provide a comprehensive security assessment that addresses both cyber and physical attack vectors relevant to UAE security environments and standards."
          },
          {
            title: "UAE Social Engineering & Human Element Testing",
            description: "With proper authorization, we conduct controlled social engineering campaigns—including phishing, voice phishing, and pretext scenarios—to evaluate your UAE organization's human security awareness and susceptibility to manipulation, with culturally appropriate testing methodologies designed for UAE's diverse workforce environment and local business practices."
          },
          {
            title: "UAE-Aligned Comprehensive Security Reporting",
            description: "We deliver detailed penetration testing documentation with clear executive summaries, methodology descriptions, finding details, exploitation evidence, impact assessments, and prioritized remediation guidance—all contextualized to UAE regulatory requirements, regional threat landscape, and your business objectives with appropriate language considerations."
          },
          {
            title: "UAE Regulatory Compliance Mapping",
            description: "Our reports include specific mapping of penetration testing findings to relevant UAE regulatory frameworks including UAE IA Standards, NESA, UAE PDPL, and sector-specific requirements—helping you demonstrate compliance with appropriate testing requirements and focus remediation on highest-priority regulatory gaps in the UAE context."
          },
          {
            title: "UAE-Focused Remediation Planning Support",
            description: "Following testing, our Dubai-based security experts provide detailed technical guidance and remediation planning support—helping your team understand, prioritize, and address identified vulnerabilities with solutions appropriate for UAE technology environments, vendor landscape, and resource constraints."
          },
          {
            title: "UAE Verification & Continuous Testing Program",
            description: "We offer continuous testing options and verification retesting to validate remediation effectiveness—establishing an ongoing security testing cadence aligned with UAE regulatory requirements and business cycles to ensure sustained security improvement and compliance in the evolving UAE threat landscape."
          }
        ]}
        benefits={[
          {
            title: "UAE-Relevant Real-World Attack Simulation",
            content: "Experience authentic, controlled cyberattacks that mirror current techniques used by threat actors specifically targeting UAE organizations—providing actionable insights into your actual security resilience against realistic attack scenarios relevant to your industry and region."
          },
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Meet penetration testing requirements mandated by UAE regulatory frameworks including UAE IA Standards, NESA, UAE PDPL, and sector-specific regulations—documenting testing methodology, findings, and remediation in formats accepted by UAE regulatory authorities and auditors."
          },
          {
            title: "UAE-Validated Vulnerability Identification",
            content: "Discover exploitable security weaknesses that automated scanning alone cannot detect—with manual validation eliminating false positives and providing proof-of-concept exploitation relevant to UAE environments that demonstrates true business risk and impact."
          },
          {
            title: "UAE-Contextualized Risk Prioritization",
            content: "Receive risk-based remediation guidance that goes beyond generic severity ratings—with vulnerabilities prioritized according to actual exploitability, business impact, UAE regulatory implications, and relevance to current UAE threat landscape to maximize security investment effectiveness."
          },
          {
            title: "UAE Security Control Validation",
            content: "Verify the actual effectiveness of your security controls against skilled human attackers—identifying defensive gaps, misconfigurations, and process weaknesses that leave your UAE organization exposed despite security investments and compliance efforts."
          },
          {
            title: "UAE Security Team Enhancement",
            content: "Strengthen your security team's capabilities through knowledge transfer and practical recommendations—learning from ethical hackers who understand both offensive techniques and defensive strategies relevant to the UAE security environment and talent landscape."
          },
          {
            title: "UAE-Appropriate Security Investment Guidance",
            content: "Make data-driven security investment decisions based on demonstrated vulnerabilities and attack paths—focusing resources on addressing actual security weaknesses rather than theoretical issues, with consideration for UAE market technology availability and cost structures."
          },
          {
            title: "UAE-Aligned Security Posture Benchmarking",
            content: "Understand how your security posture compares to industry peers and best practices—with UAE-specific insights and benchmarking against similar organizations in your sector and region to establish appropriate security objectives and improvement targets."
          },
          {
            title: "UAE Third-Party Risk Validation",
            content: "Demonstrate your security commitment to UAE customers, partners, and stakeholders—providing independent verification of security controls that builds trust, satisfies due diligence requirements, and differentiates your organization in the competitive UAE market."
          },
          {
            title: "UAE-Specific Attack Surface Reduction",
            content: "Identify and eliminate unnecessary exposures in your external and internal environment—reducing attack surface through discovery of forgotten systems, shadow IT, legacy applications, and unnecessary services particularly prevalent in rapidly-growing UAE organizations."
          }
        ]}
        deliverables={[
          {
            title: "UAE-Focused Executive Summary Report",
            description: "Business-oriented overview of key testing findings, risk analysis, and strategic recommendations designed for UAE executive audiences—presenting technical discoveries in business language with clear articulation of risk exposure, potential business impacts, regulatory implications, and improvement priorities relevant to UAE organizations."
          },
          {
            title: "UAE Detailed Technical Assessment Report",
            description: "Comprehensive documentation of penetration testing methodology, tools, techniques, and detailed findings—including technical evidence, vulnerability descriptions, exploitation narratives, and affected assets with UAE regulatory framework mapping and regional threat context to guide technical remediation teams."
          },
          {
            title: "UAE-Contextualized Evidence & Artifacts",
            description: "Carefully documented exploitation evidence including screenshots, session recordings, extracted data samples, and proof-of-concept code—providing clear demonstration of vulnerability impact while adhering to responsible disclosure principles and UAE legal considerations regarding security testing documentation."
          },
          {
            title: "UAE-Customized Remediation Guidance",
            description: "Actionable, prioritized remediation recommendations for each identified vulnerability—providing specific technical guidance, configuration changes, code fixes, and security control improvements with consideration for UAE technology environments, vendor availability, and implementation feasibility."
          },
          {
            title: "UAE Regulatory Compliance Assessment",
            description: "Detailed mapping of penetration testing findings to relevant UAE regulatory frameworks and compliance requirements—highlighting regulatory exposure, mandatory remediation items, and documentation needed to satisfy UAE authority requirements and demonstrate due diligence during audits or examinations."
          },
          {
            title: "UAE-Aligned Security Roadmap",
            description: "Strategic improvement plan based on penetration testing insights—providing phased remediation approach, resource requirements, timeline recommendations, and security enhancement priorities to systematically address identified vulnerabilities within UAE business constraints and regulatory timelines."
          },
          {
            title: "UAE Attack Narrative Documentation",
            description: "Detailed walkthrough of successful attack paths and exploitation chains—demonstrating how attackers could combine multiple vulnerabilities to compromise critical systems or access sensitive data, with specific relevance to UAE threat actors' techniques and organizational impact in UAE business context."
          },
          {
            title: "UAE-Appropriate Security Control Recommendations",
            description: "Defensive control guidance addressing root causes beyond individual vulnerabilities—recommending security architecture improvements, process enhancements, monitoring capabilities, and defensive technologies suitable for UAE environments to prevent similar attack vectors across your organization."
          },
          {
            title: "UAE Verification Testing Plan",
            description: "Structured approach for validation testing following remediation activities—providing testing methodology, success criteria, and timeline recommendations to verify effective implementation of security fixes and improvements in accordance with UAE compliance documentation requirements."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Network Structure */}
            <rect x="100" y="100" width="400" height="250" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            
            {/* UAE Element */}
            <rect x="450" y="80" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="100" x2="400" y2="120" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Network Devices */}
            <rect x="150" y="150" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="180" y="175" textAnchor="middle" fontSize="10" fill="#00E5FF">Firewall</text>
            
            <rect x="150" y="250" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="180" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Router</text>
            
            <rect x="260" y="150" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="290" y="175" textAnchor="middle" fontSize="10" fill="#00E5FF">Server</text>
            
            <rect x="260" y="250" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="290" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Database</text>
            
            <rect x="370" y="150" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="400" y="175" textAnchor="middle" fontSize="10" fill="#00E5FF">Web App</text>
            
            <rect x="370" y="250" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="400" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Cloud</text>
            
            {/* Connection Lines */}
            <line x1="210" y1="170" x2="260" y2="170" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="210" y1="270" x2="260" y2="270" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="320" y1="170" x2="370" y2="170" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="320" y1="270" x2="370" y2="270" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="180" y1="190" x2="180" y2="250" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="290" y1="190" x2="290" y2="250" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="400" y1="190" x2="400" y2="250" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Attack Path Animation */}
            <circle cx="100" cy="170" r="5" fill="#FF5252" opacity="0.8">
              <animate attributeName="cx" values="100;150;180;210;260;290;320;370;400" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="r" values="5;6;5" dur="1s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="100" cy="270" r="5" fill="#FF5252" opacity="0.6">
              <animate attributeName="cx" values="100;150;180;210;260;290;320;370;400" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="r" values="5;6;5" dur="1s" repeatCount="indefinite"/>
            </circle>
            
            {/* Vulnerability Markers */}
            <circle cx="180" cy="160" r="8" fill="none" stroke="#FF5252" strokeWidth="1.5">
              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="290" cy="260" r="8" fill="none" stroke="#FF5252" strokeWidth="1.5">
              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="400" cy="160" r="8" fill="none" stroke="#FF5252" strokeWidth="1.5">
              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Hacker Figure */}
            <rect x="50" y="200" width="30" height="30" rx="15" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
            <rect x="60" y="195" width="10" height="5" fill="#0A1024" stroke="#FF5252" strokeWidth="1"/>
            <circle cx="60" cy="210" r="2" fill="#FF5252"/>
            <circle cx="70" cy="210" r="2" fill="#FF5252"/>
            
            {/* Attack Tools */}
            <text x="50" y="255" fontSize="8" fill="#FF5252">nmap</text>
            <text x="50" y="265" fontSize="8" fill="#FF5252">metasploit</text>
            <text x="50" y="275" fontSize="8" fill="#FF5252">burpsuite</text>
            
            {/* UAE Regulatory Elements */}
            <rect x="480" y="150" width="60" height="30" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="510" y="168" textAnchor="middle" fontSize="8" fill="#EB3443">IA Standards</text>
            
            <rect x="480" y="190" width="60" height="30" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="510" y="208" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="480" y="230" width="60" height="30" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="510" y="248" textAnchor="middle" fontSize="8" fill="#EB3443">PDPL</text>
            
            <rect x="480" y="270" width="60" height="30" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="510" y="288" textAnchor="middle" fontSize="8" fill="#EB3443">Central Bank</text>
            
            {/* Report Element */}
            <rect x="220" y="330" width="160" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="355" textAnchor="middle" fontSize="12" fill="#00E5FF">Penetration Test Report</text>
            
            {/* Main Title */}
            <text x="300" y="80" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Penetration Testing</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Web Application Security",
            link: "/services/web-penetration-testing"
          },
          {
            title: "UAE Network Security",
            link: "/services/network-penetration-testing"
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
          },
          {
            title: "UAE Advanced Penetration Testing",
            link: "/services/advanced-penetration-testing"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Penetration Testing in UAE FAQs"
        subtitle="Common questions about penetration testing for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default PenetrationTestingPage;