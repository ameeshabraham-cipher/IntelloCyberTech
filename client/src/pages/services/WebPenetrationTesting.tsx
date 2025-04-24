import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Globe, Code, Server, Shield, Lock, Terminal, AlertTriangle, Search } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const WebPenetrationTestingPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Web Application Penetration Testing Services in UAE",
    description: "Expert web application penetration testing services in Dubai and across UAE. Identify and address exploitable security vulnerabilities in your web applications before attackers with our comprehensive testing services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Web Application Security Penetration Testing",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring web application security assessment"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What types of web applications benefit most from penetration testing in the UAE?",
      answer: "Several types of web applications in UAE organizations particularly benefit from penetration testing: 1) Customer-Facing Portals - online banking, insurance, and e-commerce platforms common in UAE's digital economy, 2) Government Service Portals - citizen services and e-government applications in UAE federal and local agencies, 3) Healthcare Patient Portals - medical records and appointment systems handling sensitive data under UAE health regulations, 4) Financial Applications - investment, trading, and payment platforms in UAE's financial sector, 5) Business Partner Portals - supply chain and vendor management systems connecting UAE businesses, 6) Cloud-Based Applications - increasingly adopted by UAE organizations, 7) Legacy Web Applications - older systems that may not have been developed with security in mind, and 8) Employee Internal Applications - HR portals and internal tools potentially providing access to sensitive corporate data. Any web application processing sensitive data, handling financial transactions, or providing access to critical systems should be prioritized for testing in UAE environments, particularly given the UAE's focus on digital transformation and cyber resilience."
    },
    {
      question: "What vulnerabilities are commonly found in UAE web applications?",
      answer: "Web application penetration tests for UAE organizations frequently uncover several vulnerability types: 1) Authentication Weaknesses - insufficient account protections, weak password policies, and session management flaws common in rapidly-developed UAE applications, 2) Authorization Flaws - improper access controls allowing users to access unauthorized functionality or data, 3) Injection Vulnerabilities - SQL, command, and LDAP injection risks that can compromise backend systems, 4) Cross-Site Scripting (XSS) - allowing attackers to inject malicious scripts affecting UAE application users, 5) Cross-Site Request Forgery (CSRF) - forcing users to perform unwanted actions, 6) Security Misconfigurations - improperly configured web servers, frameworks, or cloud services common in UAE's fast-paced development environment, 7) Sensitive Data Exposure - improper handling of personal data subject to UAE data protection laws, 8) API Security Issues - insecure endpoints in the increasingly API-driven UAE application landscape, 9) Business Logic Flaws - circumvention of application processes specific to UAE business operations, and 10) Third-Party Component Vulnerabilities - security issues in libraries and frameworks. For UAE applications, specialized testing must also consider regional compliance requirements like UAE PDPL and sector-specific data protection regulations."
    },
    {
      question: "How is web application penetration testing conducted for UAE organizations?",
      answer: "Web application penetration testing for UAE organizations follows a structured methodology: 1) Scoping & Planning - defining testing boundaries, objectives, and credentials with consideration for UAE regulatory requirements, 2) Reconnaissance - identifying application architecture, technologies, and potential entry points in the UAE web application, 3) Vulnerability Discovery - using both automated tools and manual techniques to identify security weaknesses across authentication, authorization, data validation, and business logic, 4) Exploitation - controlled attempts to exploit identified vulnerabilities to validate findings and demonstrate real impact, 5) Business Logic Testing - examining application-specific workflows for logical flaws unique to UAE business processes, 6) Session Management Testing - evaluating how the application handles user sessions and maintains state, 7) Access Control Testing - verifying authorization boundaries between different user roles and permissions, 8) Data Validation Testing - examining how the application handles various inputs and potential injection attacks, 9) API Security Assessment - evaluating interfaces and web services increasingly common in UAE digital transformation initiatives, 10) Client-Side Control Testing - examining browser-based security controls and client-side implementation, 11) Documentation - comprehensive reporting of findings, exploitation paths, and remediation recommendations appropriate for UAE development teams."
    },
    {
      question: "What standards and methodologies are used for web testing in UAE?",
      answer: "Web application penetration testing for UAE organizations typically employs several methodologies and standards: 1) OWASP Testing Guide - comprehensive framework for testing web applications against common vulnerabilities, 2) OWASP Top 10 - focusing on the most critical web application security risks, 3) OWASP API Security Top 10 - for testing increasingly common API endpoints in UAE applications, 4) OWASP WSTG (Web Security Testing Guide) - detailed testing procedures for web applications, 5) SANS Web Application Security Assessment - structured approach for comprehensive testing, 6) PCI DSS Testing Requirements - for applications handling payment data common in UAE e-commerce, 7) UAE IA Standards - specific requirements for government and critical infrastructure web applications, 8) NESA Guidelines - for applications supporting critical information infrastructure in UAE. Testing approaches are typically customized based on your application architecture, technology stack, and specific UAE regulatory requirements, with attention to both global security standards and UAE-specific compliance considerations."
    },
    {
      question: "How frequently should UAE organizations test their web applications?",
      answer: "For UAE organizations, web application testing frequency should be determined by several factors: 1) Change Frequency - applications undergoing regular development or frequent updates should be tested after significant changes, which is common in UAE's rapidly evolving digital environment, 2) Data Sensitivity - applications handling personal, financial, or other sensitive data subject to UAE protection laws should be tested more frequently, 3) Regulatory Requirements - specific UAE frameworks may mandate testing frequency for regulated sectors like financial services, 4) Threat Exposure - high-profile or public-facing applications more likely to be targeted in the UAE should be tested more frequently, 5) Previous Findings - applications with significant previous vulnerabilities warrant more frequent reassessment. As a general guideline for UAE organizations: Critical web applications should be tested at least annually, with more frequent testing for those handling sensitive data. Applications undergoing significant changes should receive focused testing after major releases. Continuous application security testing programs are increasingly becoming best practice for large UAE enterprises. Automated scanning should complement but not replace regular in-depth penetration testing by qualified security professionals."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Web Application Penetration Testing Services in UAE | Security Assessment"
        description="Expert web application penetration testing services in Dubai and across UAE. Identify and address exploitable security vulnerabilities in your web applications before attackers with our comprehensive testing services with 22+ years of experience."
        url="/services/web-penetration-testing"
        type="website"
      />
      <ServicePageLayout
        title="Web Application Penetration Testing Services in UAE | Security Assessment"
        category="UAE Web Application Security"
        description="Identify and address exploitable vulnerabilities in your UAE organization's web applications and APIs before attackers can discover them. Our comprehensive web penetration testing service protects your critical applications from sophisticated attacks."
        heroIcon={<Globe className="h-8 w-8" />}
        overview="Web applications form the digital front door of UAE organizations, but also present an attractive attack surface for malicious actors targeting UAE businesses. Our Web Application Penetration Testing service provides in-depth security assessment of your web applications, portals, and APIs to identify exploitable vulnerabilities before attackers can discover them. Our Dubai-based security experts simulate real-world attacks using both automated scanning and advanced manual testing techniques to discover authentication flaws, injection vulnerabilities, business logic weaknesses, and other security gaps specific to UAE web environments. We deliver actionable, developer-friendly remediation guidance to strengthen your application security posture while ensuring compliance with UAE data protection regulations and industry security standards. With expertise in both offensive security techniques and secure development practices relevant to UAE applications, we help protect your critical web assets from sophisticated threats while supporting your organization's digital transformation journey."
        steps={[
          {
            title: "UAE-Focused Web Application Discovery",
            description: "Comprehensive mapping of in-scope web assets including primary applications, supporting microservices, APIs, and associated infrastructure to establish testing boundaries and create an inventory of web components with attention to unique aspects of UAE web architectures and deployments."
          },
          {
            title: "UAE Architecture & Technology Analysis",
            description: "Detailed examination of application architecture, frameworks, programming languages, and technology components to inform testing approach and identify technology-specific vulnerabilities common in UAE web development environments and practices."
          },
          {
            title: "UAE-Aligned Access Control Assessment",
            description: "Thorough evaluation of authentication mechanisms, session management, and authorization controls to identify account protection weaknesses, privilege escalation opportunities, and access control bypasses with consideration for UAE regulatory requirements around account security and access management."
          },
          {
            title: "UAE-Contextualized Input Validation Testing",
            description: "Comprehensive testing of input handling across the application to identify injection vulnerabilities (SQL, command, LDAP), cross-site scripting (XSS), cross-site request forgery (CSRF), and other input validation weaknesses specific to UAE application environments and common frameworks."
          },
          {
            title: "UAE Business Logic Vulnerability Assessment",
            description: "In-depth examination of application business logic to discover flaws in workflow implementation, transaction processing, and application-specific functionality that could allow process manipulation or bypass with particular focus on UAE business processes and regulatory requirements."
          },
          {
            title: "UAE Data Protection Control Testing",
            description: "Evaluation of sensitive data handling practices including encryption implementation, data storage security, and information exposure risks, with specific attention to protection of personal and financial data subject to UAE PDPL and sector-specific data security requirements."
          },
          {
            title: "UAE API Security Assessment",
            description: "Specialized testing of application programming interfaces (APIs) to identify authentication weaknesses, authorization flaws, data validation issues, and other API-specific vulnerabilities increasingly common in UAE's digital transformation initiatives and integration-focused applications."
          },
          {
            title: "UAE Client-Side Security Evaluation",
            description: "Assessment of client-side security controls including frontend JavaScript, single-page application security, client-side storage usage, and browser-based protection mechanisms with attention to UAE-specific browser usage patterns and client-side technologies."
          },
          {
            title: "UAE Configuration & Deployment Testing",
            description: "Analysis of web server configurations, security headers, framework settings, and deployment practices to identify security misconfigurations and hardening opportunities specific to hosting environments common in UAE application deployments."
          },
          {
            title: "UAE Third-Party Component Assessment",
            description: "Evaluation of third-party libraries, frameworks, plugins, and external services integrated into applications to identify security vulnerabilities in dependencies and integration points commonly used in UAE web development projects."
          },
          {
            title: "UAE-Focused Exploitation & Verification",
            description: "Controlled exploitation of discovered vulnerabilities to validate findings, determine real-world impact, and eliminate false positives—providing clear proof-of-concept demonstrations that help developers understand vulnerability severity and remediation urgency in UAE application contexts."
          },
          {
            title: "UAE Development Team Knowledge Transfer",
            description: "Interactive walkthrough of findings with development teams to explain vulnerability details, demonstrate exploitation techniques, and discuss secure coding practices specific to the technologies and frameworks used in your UAE web development environment."
          }
        ]}
        benefits={[
          {
            title: "UAE Comprehensive Application Security Visibility",
            content: "Gain complete visibility into your web application security posture across authentication, authorization, data validation, business logic, and other critical domains with specific insights into vulnerabilities particularly relevant to UAE web applications and regional threats."
          },
          {
            title: "UAE Data Breach Risk Reduction",
            content: "Identify and remediate security weaknesses before they can be exploited, protecting sensitive customer data, financial information, and business systems against attacks targeting UAE organizations while ensuring compliance with UAE data protection regulations."
          },
          {
            title: "UAE Developer-Friendly Remediation Guidance",
            content: "Receive clear, actionable remediation recommendations written specifically for developers, including code examples, configuration guidance, and framework-specific fixes appropriate for UAE development teams and technology stacks common in UAE web projects."
          },
          {
            title: "UAE Business Logic Protection",
            content: "Discover application-specific vulnerabilities in business functions that automated tools cannot detect, protecting critical workflows, transactions, and application-specific processes crucial to UAE operations and customer experiences from manipulation or bypass."
          },
          {
            title: "UAE Mobile-Friendly Application Security",
            content: "Ensure security of web applications optimized for mobile devices—critical in UAE's mobile-first environment—by identifying vulnerabilities specific to responsive designs, mobile APIs, and progressive web applications increasingly common in UAE digital experiences."
          },
          {
            title: "UAE Regulatory Compliance Verification",
            content: "Validate compliance with UAE data protection regulations, cybersecurity frameworks, and sector-specific requirements through comprehensive testing aligned with UAE IA Standards, NESA guidelines, UAE PDPL, and other relevant frameworks for UAE web applications."
          },
          {
            title: "UAE Secure Development Improvement",
            content: "Enhance your development practices through identification of recurring vulnerability patterns, security anti-patterns, and systemic weaknesses in applications, enabling security improvements across your UAE development lifecycle and future projects."
          },
          {
            title: "UAE Application Security Investment Validation",
            content: "Verify the effectiveness of existing application security controls, WAF deployments, secure coding practices, and protection mechanisms to ensure security investments provide expected protection for UAE web applications against actual attack techniques."
          },
          {
            title: "UAE Customer Trust Enhancement",
            content: "Demonstrate commitment to protecting customer data and transactions in the UAE market through rigorous security testing, building trust with users and partners while protecting brand reputation from security incidents in the security-conscious UAE business environment."
          },
          {
            title: "UAE API Economy Security Assurance",
            content: "Secure increasingly critical API ecosystems connecting UAE applications, services, and partners by identifying API-specific vulnerabilities that could compromise data integrity, access controls, or service availability in the interconnected UAE digital ecosystem."
          }
        ]}
        deliverables={[
          {
            title: "UAE Executive Summary Report",
            description: "Business-focused overview of key application security findings, risk assessment, and strategic recommendations designed for UAE executive audiences—presenting technical vulnerabilities in business terms with clear articulation of data protection implications, potential impacts, and improvement priorities relevant to UAE operations."
          },
          {
            title: "UAE Technical Vulnerability Report",
            description: "Comprehensive documentation of all identified vulnerabilities including detailed technical descriptions, affected components, exploitation methods, risk ratings, evidence captures, and remediation guidance—providing complete visibility into application security issues with context specifically relevant to UAE regulatory requirements."
          },
          {
            title: "UAE Developer Remediation Guide",
            description: "Detailed technical remediation instructions for development teams including vulnerability explanation, code samples, configuration recommendations, and framework-specific guidance—enabling efficient fix implementation with approaches appropriate for UAE development practices and technology environments."
          },
          {
            title: "UAE OWASP Vulnerability Mapping",
            description: "Structured categorization of findings according to industry-standard classifications including OWASP Top 10, OWASP API Security Top 10, and SANS 25—providing context for vulnerability types and enabling comparison against common security weaknesses affecting UAE applications in your industry."
          },
          {
            title: "UAE Vulnerability Proof-of-Concept Demonstrations",
            description: "Documented evidence of vulnerability exploitation including sanitized screenshots, HTTP request/response pairs, and attack narratives—providing clear validation of security issues while maintaining appropriate security for sensitive information in accordance with UAE testing standards."
          },
          {
            title: "UAE Secure Development Recommendations",
            description: "Strategic guidance for enhancing application security practices including secure coding standards, security testing integration, developer training needs, and secure SDLC improvements—providing a roadmap for long-term application security enhancement in UAE development environments."
          },
          {
            title: "UAE Regulatory Compliance Assessment",
            description: "Detailed mapping of application security findings to relevant UAE regulatory frameworks including UAE PDPL, sector-specific requirements, and international standards—highlighting compliance gaps, mandatory remediation items, and documentation needs to satisfy UAE regulatory expectations."
          },
          {
            title: "UAE Application Security Metrics",
            description: "Quantitative analysis of application security posture including vulnerability statistics, risk ratings, category distribution, and trend analysis for organizations with previous testing—providing measurable security indicators for tracking progress and demonstrating improvement to UAE stakeholders."
          },
          {
            title: "UAE Retest Verification Plan",
            description: "Structured approach for validation testing following remediation activities—outlining testing methodology, success criteria, and verification process to confirm successful resolution of identified vulnerabilities in accordance with UAE security assurance practices."
          },
          {
            title: "UAE Interactive Finding Walkthrough",
            description: "Live demonstration session with development and security teams to explain critical findings, demonstrate exploitation techniques, and discuss remediation approaches—facilitating knowledge transfer and security awareness among UAE technical teams responsible for application security."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Web Application */}
            <rect x="150" y="100" width="300" height="200" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="80" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="95" x2="400" y2="110" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Browser Bar */}
            <rect x="150" y="100" width="300" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <circle cx="170" cy="115" r="5" fill="#FF5252"/>
            <circle cx="190" cy="115" r="5" fill="#FFA500"/>
            <circle cx="210" cy="115" r="5" fill="#00B2A9"/>
            <rect x="230" y="110" width="200" height="10" rx="5" fill="#1A1A2E" stroke="#00E5FF" strokeWidth="0.5"/>
            
            {/* Web Application Content */}
            <rect x="170" y="150" width="100" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
            <text x="220" y="165" textAnchor="middle" fontSize="10" fill="#00E5FF">Login Form</text>
            
            <rect x="170" y="180" width="50" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <text x="195" y="191" textAnchor="middle" fontSize="8" fill="#00E5FF">Username</text>
            
            <rect x="170" y="200" width="50" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <text x="195" y="211" textAnchor="middle" fontSize="8" fill="#00E5FF">Password</text>
            
            <rect x="170" y="220" width="40" height="15" rx="2" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
            <text x="190" y="231" textAnchor="middle" fontSize="8" fill="#00E5FF">Submit</text>
            
            <rect x="330" y="150" width="100" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
            <text x="380" y="165" textAnchor="middle" fontSize="10" fill="#00E5FF">API Endpoint</text>
            
            <rect x="330" y="180" width="100" height="60" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <text x="380" y="205" textAnchor="middle" fontSize="8" fill="#00E5FF">{"{ \"data\": {...} }"}</text>
            <text x="380" y="220" textAnchor="middle" fontSize="8" fill="#00E5FF">JSON Response</text>
            
            <rect x="170" y="250" width="260" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
            <text x="300" y="270" textAnchor="middle" fontSize="10" fill="#00E5FF">Application Data</text>
            
            {/* Database Connection */}
            <rect x="280" y="320" width="40" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="345" textAnchor="middle" fontSize="9" fill="#00E5FF">DB</text>
            
            <path d="M300 280 L300 320" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2"/>
            
            {/* Vulnerability Markers */}
            <circle cx="195" cy="220" r="5" fill="#FF5252" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="380" cy="190" r="5" fill="#FF5252" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="300" cy="300" r="5" fill="#FF5252" fillOpacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Attack Vector */}
            <path d="M100 170 C120 140, 140 140, 170 170" stroke="#FF5252" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </path>
            
            <path d="M100 190 C120 220, 140 220, 170 190" stroke="#FF5252" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
            </path>
            
            <path d="M100 210 L330 200" stroke="#FF5252" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Hacker */}
            <rect x="70" y="170" width="30" height="30" rx="15" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
            <circle cx="80" cy="180" r="2" fill="#FF5252"/>
            <circle cx="90" cy="180" r="2" fill="#FF5252"/>
            <path d="M80 190 L90 190" stroke="#FF5252" strokeWidth="1.5"/>
            
            {/* OWASP Top 10 Elements */}
            <rect x="500" y="150" width="70" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="535" y="161" textAnchor="middle" fontSize="7" fill="#EB3443">Injection</text>
            
            <rect x="500" y="175" width="70" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="535" y="186" textAnchor="middle" fontSize="7" fill="#EB3443">Broken Auth</text>
            
            <rect x="500" y="200" width="70" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="535" y="211" textAnchor="middle" fontSize="7" fill="#EB3443">XSS</text>
            
            <rect x="500" y="225" width="70" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="535" y="236" textAnchor="middle" fontSize="7" fill="#EB3443">CSRF</text>
            
            <rect x="500" y="250" width="70" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="535" y="261" textAnchor="middle" fontSize="7" fill="#EB3443">UAE PDPL</text>
            
            {/* Report Element */}
            <rect x="170" y="370" width="120" height="20" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="230" y="384" textAnchor="middle" fontSize="10" fill="#00E5FF">Vulnerability Report</text>
            
            {/* Connection to Report */}
            <path d="M195 220 C170 280, 200 300, 200 370" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M380 190 C350 250, 240 300, 220 370" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M300 300 C300 330, 240 350, 230 370" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Web Application Penetration Testing</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE API Security Testing",
            link: "/services/api-security"
          },
          {
            title: "UAE Mobile Application Security",
            link: "/services/mobile-app-security"
          },
          {
            title: "UAE Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE Network Penetration Testing",
            link: "/services/network-penetration-testing"
          },
          {
            title: "UAE Secure Code Review",
            link: "/services/code-review"
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
        title="Web Application Security in UAE FAQs"
        subtitle="Common questions about web application penetration testing for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default WebPenetrationTestingPage;