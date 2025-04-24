import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Search, Shield, AlertTriangle, CheckCircle, FileText, BarChart2, ListChecks, Server } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const VaptPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Vulnerability Assessment and Penetration Testing (VAPT) Services in UAE",
    description: "Expert VAPT services in Dubai and across UAE. Identify vulnerabilities and security weaknesses in your IT systems with our comprehensive VAPT services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Security Vulnerability Assessment and Penetration Testing",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring comprehensive security vulnerability assessment"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is the difference between vulnerability assessment and penetration testing for UAE organizations?",
      answer: "While often combined, vulnerability assessment and penetration testing serve distinct security purposes for UAE organizations: Vulnerability Assessment is a systematic, broad scan of your environment to identify and catalog as many security weaknesses as possible. It uses automated tools to discover known vulnerabilities in systems, applications, and networks, providing a comprehensive inventory of potential security issues with severity ratings and remediation guidance. Penetration Testing is a targeted, hands-on simulation of real-world attacks where security professionals actively attempt to exploit vulnerabilities to demonstrate actual security impact. It involves manual testing techniques, custom exploitation, and realistic attack scenarios to validate vulnerabilities and determine their real business risk. For UAE organizations, an effective security program typically combines both approaches: vulnerability assessment provides comprehensive coverage and regular security visibility, while penetration testing delivers depth and real-world validation of critical vulnerabilities with specific attention to UAE regulatory requirements and regional threats."
    },
    {
      question: "What systems and assets should be included in VAPT for UAE organizations?",
      answer: "UAE organizations should include several critical systems in VAPT assessments: 1) External Network Infrastructure - internet-facing systems forming your UAE organization's perimeter security, 2) Internal Networks - corporate networks where lateral movement could occur after initial breach, 3) Web Applications - customer-facing applications and portals common in UAE's digital transformation initiatives, 4) Mobile Applications - increasingly critical in UAE's mobile-first market, 5) Cloud Environments - AWS, Azure, and other cloud platforms widely adopted in UAE, 6) APIs & Web Services - backend interfaces connecting UAE digital services, 7) Wireless Networks - WiFi infrastructure in UAE office environments, 8) Employee Workstations - endpoints that could serve as entry points for attacks, 9) Server Infrastructure - critical systems hosting applications and data, 10) IoT Devices - increasingly common in UAE smart city and building initiatives, 11) VPN & Remote Access - systems enabling secure remote connectivity, 12) Active Directory/Identity Systems - core authentication services. Prioritization should be based on your organization's specific threat profile, data sensitivity, regulatory requirements, and critical business processes in the UAE context."
    },
    {
      question: "How is VAPT different from compliance audits for UAE organizations?",
      answer: "VAPT and compliance audits serve complementary but different purposes for UAE organizations: VAPT is a technical security assessment focused on finding actual exploitable vulnerabilities in systems through direct testing of security controls. It identifies specific technical security weaknesses that attackers could exploit, providing detailed technical remediation guidance on fixing each issue. Compliance audits evaluate adherence to specific regulatory frameworks (UAE IA Standards, NESA, ISO 27001, etc.) through evidence review, documentation examination, and control assessment. They determine whether required processes and controls exist and operate as designed, mapping against specific compliance requirements. The key differences for UAE organizations include: VAPT demonstrates what attackers could actually exploit, while compliance audits verify documentation and control existence. VAPT focuses on technical vulnerabilities, while compliance reviews examine governance and processes. VAPT provides technical findings, while compliance audits deliver framework-specific gaps. Most UAE organizations need both: VAPT to identify actual security weaknesses and compliance audits to ensure regulatory alignment, with results from each informing and strengthening the other."
    },
    {
      question: "How often should UAE organizations conduct VAPT assessments?",
      answer: "For UAE organizations, VAPT frequency should be determined by several factors: 1) Regulatory Requirements - some UAE frameworks mandate specific assessment frequencies (quarterly, annually), 2) Industry Standards - sectors like finance typically require more frequent testing, 3) System Criticality - systems processing sensitive data or supporting critical operations warrant more frequent assessment, 4) Change Frequency - environments undergoing regular updates need more regular testing, 5) Threat Environment - organizations facing heightened threats should test more frequently. As general guidelines for UAE organizations: External vulnerability assessments should be conducted monthly to identify new exposures. Comprehensive VAPT of critical systems should occur at least annually, with semi-annual testing for high-risk environments. New applications and major infrastructure changes should undergo VAPT before production deployment. Penetration testing should be conducted annually for critical systems, with more frequent testing for high-value targets. Any significant change to infrastructure or applications should trigger focused reassessment. UAE regulated industries (financial services, healthcare, critical infrastructure) should adhere to sector-specific requirements, which may mandate more frequent testing cycles."
    },
    {
      question: "What deliverables should UAE organizations expect from a comprehensive VAPT service?",
      answer: "UAE organizations should expect comprehensive deliverables from VAPT services including: 1) Executive Summary - business-focused overview of findings with UAE regulatory context and regional threat relevance, 2) Detailed Technical Report - comprehensive documentation of all vulnerabilities with UAE compliance implications, 3) Vulnerability Inventory - complete catalog of discovered issues with severity ratings, affected systems, and UAE risk context, 4) Risk-Based Prioritization - clear guidance on addressing vulnerabilities based on exploitation likelihood and business impact in UAE environments, 5) Technical Remediation Instructions - specific guidance for fixing each vulnerability with UAE implementation considerations, 6) Security Metrics & Visualization - graphical representation of security posture and vulnerability distribution, 7) Comparative Benchmarking - security posture comparison against UAE industry peers and best practices, 8) UAE Regulatory Compliance Mapping - findings mapped to relevant UAE frameworks including UAE IA, NESA, and sector-specific requirements, 9) Retest Guidelines - clear criteria for verification testing following remediation, 10) Strategic Recommendations - broader security improvements beyond tactical fixes with UAE market considerations. Quality reports should be customized to different audiences (executive leadership, technical teams, compliance) with appropriate language and technical depth for each stakeholder group in the UAE organizational context."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Vulnerability Assessment & Penetration Testing Services in UAE | VAPT"
        description="Expert VAPT services in Dubai and across UAE. Identify vulnerabilities and security weaknesses in your IT systems with our comprehensive VAPT services with 22+ years of experience."
        url="/services/vapt"
        type="website"
      />
      <ServicePageLayout
        title="Vulnerability Assessment & Penetration Testing Services in UAE | VAPT"
        category="UAE Cybersecurity Assessment"
        description="Identify and address security weaknesses across your UAE organization's entire IT infrastructure with our comprehensive Vulnerability Assessment and Penetration Testing (VAPT) services tailored for UAE regulatory requirements."
        heroIcon={<Search className="h-8 w-8" />}
        overview="Our UAE-focused Vulnerability Assessment and Penetration Testing (VAPT) services provide a comprehensive approach to identifying and validating security vulnerabilities across your entire technology infrastructure. We combine systematic vulnerability scanning to broadly identify known security weaknesses with targeted penetration testing to validate critical vulnerabilities through controlled exploitation. This dual approach delivers both the breadth of coverage needed for comprehensive security visibility and the depth of testing required to understand actual exploitation risk in your UAE environment. Our Dubai-based security experts assess your networks, applications, systems, and cloud infrastructure against both common vulnerabilities and sophisticated attack techniques specifically relevant to UAE organizations, delivering actionable remediation guidance prioritized by business risk and UAE regulatory impact. With deep understanding of UAE compliance frameworks and regional threats, our VAPT services help strengthen your security posture while meeting UAE regulatory requirements and industry standards."
        steps={[
          {
            title: "UAE-Appropriate Scope Definition",
            description: "Collaborative planning to define assessment boundaries, testing objectives, and methodology with consideration for UAE regulatory requirements, business priorities, and specific security concerns for organizations operating in the UAE market and regional threat landscape."
          },
          {
            title: "UAE Asset Discovery & Enumeration",
            description: "Comprehensive identification of systems, applications, and infrastructure components within scope, creating a detailed inventory of testing targets and understanding their role in your UAE organization's operations and data processing activities."
          },
          {
            title: "UAE External Vulnerability Assessment",
            description: "Systematic scanning and analysis of your external attack surface to identify security weaknesses visible to outside attackers targeting UAE organizations, including exposed services, misconfigurations, and outdated systems that could provide initial access points."
          },
          {
            title: "UAE Internal Vulnerability Assessment",
            description: "Thorough evaluation of internal systems, networks, and infrastructure to discover security weaknesses that could be exploited once perimeter defenses are breached, with assessment of lateral movement opportunities within your UAE network environment."
          },
          {
            title: "UAE Web Application Vulnerability Scanning",
            description: "Specialized assessment of web applications, portals, and APIs to identify security weaknesses in authentication, session management, input validation, and business logic, with focus on application vulnerabilities particularly relevant to UAE digital services."
          },
          {
            title: "UAE Cloud Security Assessment",
            description: "Comprehensive evaluation of cloud environments including configuration reviews, permission settings, storage security, and identity management controls, with specific attention to cloud security requirements and sovereignty considerations for UAE organizations."
          },
          {
            title: "UAE-Targeted Exploitation & Penetration Testing",
            description: "Controlled exploitation of critical vulnerabilities to validate findings, demonstrate actual impact, and identify attack paths that could compromise sensitive systems in your UAE environment, with realistic attack simulation by experts familiar with UAE-specific threats."
          },
          {
            title: "UAE Privilege Escalation Testing",
            description: "Assessment of vertical and horizontal privilege escalation opportunities to determine if attackers could gain unauthorized access to sensitive functions or data by elevating permissions within your UAE systems and applications through permission weaknesses."
          },
          {
            title: "UAE Business Impact Analysis",
            description: "Evaluation of identified vulnerabilities in terms of actual business risk specific to your UAE operations, considering data sensitivity, regulatory requirements, operational impact, and reputation considerations in the UAE market context."
          },
          {
            title: "UAE-Contextualized Risk Prioritization",
            description: "Development of prioritized remediation guidance based on vulnerability severity, exploitation likelihood, business impact, and implementation complexity, tailored to your UAE organization's risk profile and resource constraints."
          },
          {
            title: "UAE Remediation Planning Support",
            description: "Collaborative workshop with your security and IT teams to discuss findings, explain exploitation techniques, and develop practical remediation approaches that address identified vulnerabilities within your UAE operational constraints."
          },
          {
            title: "UAE Verification Testing",
            description: "Follow-up testing to validate remediation effectiveness for critical vulnerabilities, verifying that security improvements have been properly implemented and security weaknesses effectively addressed within your UAE environment."
          }
        ]}
        benefits={[
          {
            title: "UAE Comprehensive Security Visibility",
            content: "Gain complete view of your security posture across your entire UAE IT infrastructure—identifying vulnerabilities in networks, applications, systems, and cloud environments through both broad scanning and targeted testing focused on UAE-relevant security concerns."
          },
          {
            title: "UAE Real-World Risk Validation",
            content: "Understand actual exploitation risk through controlled testing by security experts who simulate real attackers targeting UAE organizations, providing concrete evidence of security weaknesses that goes beyond theoretical vulnerabilities and abstract risk ratings."
          },
          {
            title: "UAE-Focused Remediation Prioritization",
            content: "Receive clear guidance on which vulnerabilities to address first based on actual business risk to your UAE operations, enabling efficient allocation of security resources to the issues that pose the greatest threat to your organization within the UAE context."
          },
          {
            title: "UAE Regulatory Compliance Support",
            content: "Meet security assessment requirements specified in UAE frameworks including UAE IA Standards, NESA, UAE PDPL, and sector-specific regulations, with detailed documentation that helps demonstrate compliance during audits and regulatory reviews."
          },
          {
            title: "UAE Security Investment Validation",
            content: "Verify the effectiveness of existing security controls and technologies through practical testing, identifying protection gaps and validating that security investments provide expected benefits for your UAE cybersecurity program."
          },
          {
            title: "UAE Security Baseline Establishment",
            content: "Create a comprehensive security baseline that enables tracking of progress over time through regular assessments, identifying new vulnerabilities as they emerge while demonstrating security improvements to UAE stakeholders and leadership."
          },
          {
            title: "UAE Third-Party Risk Demonstration",
            content: "Provide evidence of security diligence to partners, customers, and stakeholders in the UAE market through documented security testing, helping satisfy due diligence requirements and demonstrate security commitment in business relationships."
          },
          {
            title: "UAE Security Awareness Enhancement",
            content: "Improve organizational security awareness through demonstration of actual vulnerabilities and attack techniques, building a stronger security culture among UAE technical teams and broader staff through concrete examples relevant to your business."
          },
          {
            title: "UAE Tailored Security Recommendations",
            content: "Obtain expert security guidance customized to your specific technology environment, business operations, and industry context within the UAE market, avoiding generic recommendations in favor of practical advice appropriate for your organization."
          },
          {
            title: "UAE Security Maturity Advancement",
            content: "Develop a clear roadmap for enhancing security posture over time based on assessment findings, moving your UAE organization toward higher security maturity with measurable progress and continuous improvement aligned with UAE best practices."
          }
        ]}
        deliverables={[
          {
            title: "UAE Executive Summary Report",
            description: "Business-focused overview of key findings, risk assessment, and strategic recommendations designed for UAE executive audiences—presenting security vulnerabilities in business terms with clear articulation of risk exposure, potential business impacts, and improvement priorities relevant to UAE organizations."
          },
          {
            title: "UAE Technical Vulnerability Report",
            description: "Comprehensive documentation of all identified vulnerabilities with detailed technical descriptions, affected systems, exploitation methods, risk ratings, evidence captures, and remediation guidance—providing complete visibility into security issues with context specifically relevant to UAE organizations."
          },
          {
            title: "UAE Vulnerability Inventory Database",
            description: "Structured catalog of all discovered vulnerabilities with severity ratings, affected components, technical details, remediation status, and ownership assignments—enabling efficient tracking and management of security issues across your UAE environment over time."
          },
          {
            title: "UAE Risk Prioritization Matrix",
            description: "Visual representation of vulnerabilities mapped against risk impact and exploitation likelihood, with clear categorization of issues requiring immediate attention, planned remediation, and acceptable risks based on UAE business context and regulatory priorities."
          },
          {
            title: "UAE Remediation Roadmap",
            description: "Structured implementation plan for addressing identified vulnerabilities with clear timelines, resource requirements, and milestone recommendations—providing a practical path to security improvement with appropriate phasing for UAE implementation considerations."
          },
          {
            title: "UAE Technical Remediation Guide",
            description: "Detailed technical instructions for resolving each vulnerability including step-by-step remediation procedures, configuration recommendations, patch information, and verification methods tailored to your specific technology environment in the UAE."
          },
          {
            title: "UAE Security Metrics Dashboard",
            description: "Visual representation of security posture including vulnerability distribution by severity, system category, remediation status, and trend analysis—providing quantitative measures for tracking security improvements and demonstrating progress to UAE stakeholders."
          },
          {
            title: "UAE Regulatory Compliance Mapping",
            description: "Detailed correlation of security findings to relevant UAE regulatory frameworks and compliance requirements—highlighting specific regulatory gaps, mandatory remediation items, and documentation needed to satisfy UAE authority requirements during audits or examinations."
          },
          {
            title: "UAE Evidence & Testing Artifacts",
            description: "Documented proof of findings including sanitized screenshots, scan results, exploitation demonstrations, and testing logs—providing clear validation of vulnerability existence while maintaining appropriate security for sensitive information in accordance with UAE testing standards."
          },
          {
            title: "UAE Strategic Security Recommendations",
            description: "Forward-looking security guidance addressing root causes beyond individual vulnerabilities—recommending architectural improvements, process enhancements, control frameworks, and strategic initiatives to strengthen overall security posture for your UAE organization over time."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Elements */}
            <rect x="100" y="120" width="400" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="80" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="100" x2="400" y2="120" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Infrastructure Elements */}
            <rect x="130" y="160" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="160" y="183" textAnchor="middle" fontSize="9" fill="#00E5FF">Network</text>
            
            <rect x="220" y="160" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="250" y="183" textAnchor="middle" fontSize="9" fill="#00E5FF">Systems</text>
            
            <rect x="310" y="160" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="340" y="183" textAnchor="middle" fontSize="9" fill="#00E5FF">Applications</text>
            
            <rect x="400" y="160" width="60" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="430" y="183" textAnchor="middle" fontSize="9" fill="#00E5FF">Cloud</text>
            
            {/* Scanning Elements */}
            <rect x="130" y="240" width="150" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="205" y="263" textAnchor="middle" fontSize="12" fill="#00E5FF">Vulnerability Assessment</text>
            
            <rect x="310" y="240" width="150" height="40" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="385" y="263" textAnchor="middle" fontSize="12" fill="#00E5FF">Penetration Testing</text>
            
            {/* Connection Lines */}
            <line x1="160" y1="200" x2="160" y2="240" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="250" y1="200" x2="205" y2="240" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="340" y1="200" x2="385" y2="240" stroke="#EB3443" strokeWidth="1"/>
            <line x1="430" y1="200" x2="385" y2="240" stroke="#EB3443" strokeWidth="1"/>
            
            {/* Vulnerability Marks */}
            <circle cx="160" cy="180" r="5" fill="#00B2A9" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="250" cy="180" r="5" fill="#00B2A9" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="340" cy="180" r="5" fill="#EB3443" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="430" cy="180" r="5" fill="#EB3443" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Report Elements */}
            <rect x="180" y="320" width="100" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="230" y="343" textAnchor="middle" fontSize="10" fill="#00E5FF">VA Report</text>
            
            <rect x="320" y="320" width="100" height="40" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="370" y="343" textAnchor="middle" fontSize="10" fill="#00E5FF">PT Report</text>
            
            {/* Report Connections */}
            <line x1="205" y1="280" x2="230" y2="320" stroke="#00B2A9" strokeWidth="1" strokeDasharray="4 2"/>
            <line x1="385" y1="280" x2="370" y2="320" stroke="#EB3443" strokeWidth="1" strokeDasharray="4 2"/>
            
            {/* UAE Regulation Elements */}
            <rect x="500" y="160" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="174" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="190" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="204" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="500" y="220" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="234" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            <rect x="500" y="250" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="264" textAnchor="middle" fontSize="8" fill="#EB3443">ISO 27001</text>
            
            {/* Scanning Animation */}
            <path d="M120 200 L480 200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5"/>
            <circle cx="200" cy="200" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="120;480;120" dur="5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Exploit Animation */}
            <path d="M300 140 L300 200" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5"/>
            <circle cx="300" cy="160" r="3" fill="#EB3443">
              <animate attributeName="cy" values="140;200;140" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Main Title */}
            <text x="300" y="80" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Vulnerability Assessment & Penetration Testing</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE Network Security",
            link: "/services/network-penetration-testing"
          },
          {
            title: "UAE Web Application Security",
            link: "/services/web-penetration-testing"
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
            title: "UAE IT Security Audit",
            link: "/services/it-security-audit"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="VAPT in UAE FAQs"
        subtitle="Common questions about vulnerability assessment and penetration testing for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default VaptPage;