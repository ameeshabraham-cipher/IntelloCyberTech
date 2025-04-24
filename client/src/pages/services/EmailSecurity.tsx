import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Mail, Shield, AlertTriangle, CheckCircle, Ban, Lock, Eye, FileText } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const EmailSecurityPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Email Security Services in UAE",
    description: "Expert email security services in Dubai and across UAE. Protect your organization from email threats with our comprehensive email security solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Email Protection Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring email threat protection"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What email security threats are most relevant for UAE organizations?",
      answer: "UAE organizations face several significant email security threats: 1) Targeted Phishing Campaigns - sophisticated attacks specifically designed for UAE executives, government officials, and high-net-worth individuals with localized content and context, 2) Business Email Compromise - attackers impersonating UAE executives or vendors to conduct financial fraud, particularly targeting UAE's active international business transactions and payment flows, 3) Advanced Malware Delivery - emails containing specialized malicious attachments or links targeting UAE organizations with sophisticated malware designed to evade detection, 4) UAE Credential Harvesting - fraudulent attempts to collect login information for UAE corporate systems, financial platforms, and government services through fake login pages, 5) UAE Ransomware Distribution - emails delivering encryption malware targeting organizations across UAE sectors, with focus on high-value targets in financial services, healthcare, and critical infrastructure, 6) UAE-Focused Social Engineering - customized deception tactics leveraging UAE current events, business culture, and local knowledge to manipulate recipients into unsafe actions, 7) Supply Chain Compromise - attacks targeting UAE's extensive business partner networks and international supply relationships to gain access through trusted channels, 8) Data Exfiltration Attempts - sophisticated threats designed to extract sensitive information from UAE organizations for competitive, financial, or geopolitical purposes, 9) Mobile-Targeted Attacks - specialized email threats designed for UAE's highly mobile-connected workforce using smartphones and tablets for business email access, 10) Account Takeover Attempts - sophisticated efforts to compromise email accounts through various techniques, enabling long-term access to communications within UAE organizations. These threats continue evolving in sophistication with specific adaptations for targeting UAE organizations based on regional factors and business practices."
    },
    {
      question: "What email security technologies should UAE organizations implement?",
      answer: "UAE organizations should implement several key email security technologies: 1) Advanced Anti-Phishing Protection - specialized detection systems capable of identifying sophisticated phishing attempts targeting UAE organizations through contextual analysis and behavioral patterns, 2) UAE-Tuned Spam Filtering - adaptive systems trained to recognize spam characteristics particular to UAE business environments, including multi-language capability for English and Arabic content, 3) Multi-Layered Malware Detection - comprehensive scanning using multiple engines to identify known and zero-day threats commonly targeting UAE sectors, with both signature and behavioral analysis, 4) Business Email Compromise Protection - specialized controls designed to detect executive impersonation and financial fraud attempts prevalent in UAE international business transactions, 5) UAE-Appropriate Email Authentication - implementation of SPF, DKIM, and DMARC to prevent email spoofing and domain abuse, with particular importance for UAE government and financial sector domains, 6) Content Disarm & Reconstruction - technology to neutralize potentially malicious elements in attachments while preserving functionality, protecting against sophisticated threats targeting UAE organizations, 7) URL Defense Systems - real-time link scanning and sandboxing to identify malicious websites targeting UAE users, with attention to regional languages and UAE-specific threats, 8) Data Loss Prevention - controls preventing unauthorized transmission of sensitive information subject to UAE data protection regulations through email channels, 9) Email Encryption - secure message transmission capabilities meeting UAE compliance requirements for sensitive communications, particularly important for regulated industries, 10) UAE Mobile Email Protection - security controls extending to smartphones and tablets used for email access, aligned with UAE's mobile-first business culture and extensive mobile device usage. These technologies should be implemented in combination, creating defense-in-depth approach tailored to specific UAE threat landscape and operational requirements."
    },
    {
      question: "How can UAE organizations address phishing and social engineering attacks?",
      answer: "UAE organizations can combat phishing and social engineering through comprehensive strategies: 1) UAE-Specific Security Awareness - targeted training addressing phishing tactics relevant to UAE business context, incorporating local examples, cultural considerations, and regional threats in appropriate languages, 2) Simulated Phishing Exercises - controlled tests using scenarios relevant to UAE organizations, including localized content, business practices, and current events to build practical identification skills, 3) UAE Executive Protection Program - specialized security measures for high-value targets like C-suite executives and board members who face sophisticated spear-phishing in UAE's prominent business community, 4) Multi-Factor Authentication - implementing strong verification beyond passwords for email access and sensitive actions, crucial for protecting UAE workforce accessing email across multiple devices and locations, 5) UAE-Appropriate Email Authentication - deploying SPF, DKIM, and DMARC to prevent domain spoofing commonly targeting UAE organizations in financial fraud attempts, 6) Advanced Anti-Phishing Technology - implementing solutions with machine learning capabilities trained on UAE-relevant attack patterns to identify sophisticated phishing attempts, 7) UAE Secure Communication Protocols - establishing verification procedures for sensitive requests (especially financial) with particular attention to UAE business practices around payment authorization, 8) UAE Incident Response Process - creating clear procedures for reporting and addressing suspected phishing, with appropriate escalation paths aligned with UAE organizational structures, 9) UAE Email Filtering Rules - implementing content analysis specifically tuned to detect social engineering tactics targeting UAE organizations based on language patterns and regional context, 10) UAE Vendor Security Alignment - ensuring business partners maintain appropriate email security to prevent compromise of trusted communication channels within UAE's interconnected business ecosystem. This multi-layered approach addresses both technical and human aspects of protection against increasingly sophisticated phishing targeting UAE organizations."
    },
    {
      question: "What are common implementation challenges for email security in UAE?",
      answer: "UAE organizations face several unique email security implementation challenges: 1) Multi-Language Content Analysis - effectively scanning mixed Arabic and English communications common in UAE business environments, requiring specialized solutions with appropriate language capabilities, 2) UAE False Positive Management - balancing detection sensitivity against business impact when legitimate UAE business communications contain patterns similar to threats, requiring region-specific tuning, 3) UAE Mobile Email Integration - extending security to diverse mobile platforms used by UAE workforce across various locations and connectivity types common in regional business practices, 4) Cloud versus On-Premises Deployment - determining optimal implementation model considering UAE data sovereignty requirements, compliance obligations, and operational needs for email security controls, 5) UAE Workforce Awareness Barriers - addressing diverse technical proficiency, language preferences, and security awareness levels in UAE's multinational workforce when delivering training and communications, 6) UAE Business Process Integration - implementing security controls without disrupting critical email-dependent workflows in UAE business operations, particularly for time-sensitive transactions, 7) UAE Executive Resistance - securing support from senior leadership for potentially intrusive security measures while respecting authority structures in UAE organizational hierarchies, 8) Third-Party Email Services - extending protection to various communication platforms and email providers used across UAE business ecosystem beyond primary corporate systems, 9) UAE Compliance Alignment - ensuring email security implementations satisfy multiple regulatory frameworks including UAE IA Standards, PDPL requirements, and sector-specific regulations for email handling, 10) UAE International Communications - maintaining security while supporting extensive global business correspondence with partners worldwide, balancing protection with UAE's international trade relationships and communication needs. Addressing these challenges requires UAE-specific implementation approaches that consider local business practices, organizational cultures, and regulatory requirements while maintaining effective technical protection."
    },
    {
      question: "How should UAE organizations measure email security effectiveness?",
      answer: "UAE organizations should measure email security effectiveness through several key metrics: 1) Threat Detection Rate - percentage of malicious emails successfully identified and blocked, with benchmarking against UAE industry averages and comparison to regional threat volumes, 2) UAE False Positive Tracking - measurement of legitimate business emails incorrectly flagged as threats, with particular attention to UAE-specific business communications that may trigger false alarms, 3) UAE Mean Time to Detect - average duration between email-based threat arrival and security system identification, critical for measuring protection against sophisticated attacks targeting UAE organizations, 4) UAE-Specific Phishing Simulation Results - success rates of controlled phishing tests using UAE-relevant scenarios, measuring user awareness and response improvements over time, 5) UAE Security Incident Metrics - number and impact of email-related security events affecting UAE operations, tracking reduction following security enhancements, 6) UAE User Reporting Rates - frequency and accuracy of employee-reported suspicious emails, indicating security awareness levels across UAE workforce, 7) UAE Email Authentication Coverage - percentage of legitimate email correctly authenticated via SPF, DKIM and DMARC, protecting UAE domains from spoofing attempts, 8) UAE Malware Containment Effectiveness - measurement of malicious attachment and link interception before user exposure, with tracking of zero-day threats relevant to UAE organizations, 9) UAE Compliance Verification - regular assessment of email security controls against applicable UAE regulatory frameworks with documented evidence of alignment, 10) UAE Security Awareness Metrics - testing results demonstrating UAE workforce knowledge of email threats, safe practices, and appropriate response procedures with improvement tracking over time. These measurements should be tracked consistently with appropriate reporting for various UAE stakeholder groups, from technical teams to executive leadership, using formats that communicate security value in business terms relevant to UAE organizational priorities."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Email Security Services in UAE | Advanced Email Protection"
        description="Expert email security services in Dubai and across UAE. Protect your organization from email threats with our comprehensive email security solutions with 22+ years of experience."
        url="/services/email-security"
        type="website"
      />
      <ServicePageLayout
        title="Email Security Services in UAE | Advanced Email Protection"
        category="UAE Email & Communication Security"
        description="Protect your organization from sophisticated email threats with our comprehensive Email Security services. We help UAE organizations implement effective controls against phishing, malware, and advanced email-based attacks."
        heroIcon={<Mail className="h-8 w-8" />}
        overview="Email remains the primary attack vector for cybersecurity incidents affecting UAE organizations, with increasingly sophisticated threats targeting executives, financial systems, and sensitive data. Our UAE-focused Email Security services provide comprehensive protection against the full spectrum of email-based attacks through advanced technology, strategic planning, and workforce awareness. We help your organization implement multi-layered defenses that prevent malicious emails from reaching users while providing the tools to identify and respond to sophisticated threats that evade initial filters. With deep understanding of both global attack techniques and UAE-specific threat landscape, we implement email security solutions tailored to your specific industry, infrastructure, and risk profile. Whether addressing phishing, malware, business email compromise, or data protection, our expertise ensures your email security controls provide effective protection against the evolving threats specifically targeting UAE organizations."
        steps={[
          {
            title: "UAE Email Threat Assessment",
            description: "Evaluate your current email security posture, protection technologies, and historical incidents through detailed analysis, identifying specific vulnerabilities and improvement opportunities within UAE email threat context."
          },
          {
            title: "UAE Email Security Strategy",
            description: "Develop comprehensive approach for protecting email communications based on your risk profile, compliance requirements, and operational needs with specific consideration for threats targeting UAE organizations."
          },
          {
            title: "UAE-Specific Anti-Phishing Implementation",
            description: "Deploy advanced protection against sophisticated phishing attacks using machine learning and behavioral analysis technologies capable of identifying UAE-specific social engineering tactics and localized threats."
          },
          {
            title: "UAE-Appropriate Email Authentication",
            description: "Implement SPF, DKIM, and DMARC protocols to prevent domain spoofing and email forgery, protecting your organization's domains from impersonation while validating incoming messages from trusted UAE partners."
          },
          {
            title: "UAE-Focused Anti-Malware Protection",
            description: "Establish multi-layered defenses against malicious attachments and links using advanced scanning, sandboxing, and content disarm technologies calibrated for malware campaigns targeting UAE organizations."
          },
          {
            title: "UAE Business Email Compromise Protection",
            description: "Deploy specialized controls to detect and prevent sophisticated impersonation and financial fraud attempts increasingly targeting UAE executives and financial processes with region-specific tactics."
          },
          {
            title: "UAE Email Data Protection",
            description: "Implement appropriate data loss prevention, encryption, and classification capabilities to safeguard sensitive information in email communications according to UAE data protection requirements and organizational policies."
          },
          {
            title: "UAE Email Security Architecture",
            description: "Design and implement comprehensive technical infrastructure for email protection including gateway defenses, endpoint controls, and cloud security measures appropriate for your UAE email environment and user requirements."
          },
          {
            title: "UAE-Specific Security Awareness Program",
            description: "Develop targeted education initiatives addressing email threats relevant to UAE business context, with appropriate content for different employee roles, technical proficiency levels, and language preferences."
          },
          {
            title: "UAE Phishing Simulation Exercises",
            description: "Conduct controlled phishing tests using scenarios relevant to UAE organizations, measuring awareness levels and providing practical experience identifying sophisticated email threats in safe environment."
          },
          {
            title: "UAE Email Security Incident Response",
            description: "Establish structured procedures for addressing email-based security incidents, with clear reporting channels, investigation processes, and remediation workflows aligned with UAE organizational structures."
          },
          {
            title: "UAE Email Security Optimization",
            description: "Provide ongoing tuning, refinement, and enhancement of email security controls based on emerging threats, technological developments, and changing business requirements in UAE operational context."
          }
        ]}
        benefits={[
          {
            title: "UAE Phishing Attack Prevention",
            content: "Significantly reduce risk from sophisticated social engineering attempts targeting UAE organizations through multi-layered detection capabilities, user awareness, and preventive controls tailored to regional threats."
          },
          {
            title: "UAE Malware Defense Enhancement",
            content: "Protect against email-delivered malicious software through advanced scanning, behavioral analysis, and isolation technologies specifically tuned to detect threats targeting UAE sectors and infrastructure."
          },
          {
            title: "UAE Business Email Compromise Reduction",
            content: "Prevent costly financial fraud attempts targeting UAE organizations through specialized controls that identify executive impersonation, payment manipulation, and other sophisticated deception tactics."
          },
          {
            title: "UAE Data Protection Assurance",
            content: "Safeguard sensitive information in email communications through appropriate encryption, data loss prevention, and access controls aligned with UAE data protection regulations and organizational requirements."
          },
          {
            title: "UAE User Productivity Preservation",
            content: "Maintain business communication efficiency by balancing strong security with minimal disruption to legitimate email workflows, ensuring protection without impeding critical UAE business operations."
          },
          {
            title: "UAE Regulatory Compliance Support",
            content: "Meet email security requirements specified in UAE frameworks including UAE IA Standards, PDPL, and sector-specific regulations through controls aligned with relevant compliance obligations."
          },
          {
            title: "UAE Security Culture Enhancement",
            content: "Build organization-wide awareness of email security best practices through UAE-contextualized education, simulations, and communications appropriate for diverse workforce demographics."
          },
          {
            title: "UAE Mobile Email Protection",
            content: "Extend security to smartphones and tablets used for email access, addressing risks associated with UAE's mobile-first business environment and diverse device usage patterns across workforce."
          },
          {
            title: "UAE Brand Reputation Protection",
            content: "Prevent domain abuse and email spoofing that could damage your organization's reputation in UAE market through robust authentication and anti-spoofing controls for outbound and inbound communications."
          },
          {
            title: "UAE Security Intelligence Enhancement",
            content: "Gain valuable insights into threats targeting your organization through email security monitoring, strengthening overall security posture with actionable intelligence about UAE-specific attack patterns."
          }
        ]}
        deliverables={[
          {
            title: "UAE Email Security Assessment Report",
            description: "Comprehensive evaluation of your current email protection capabilities, identifying vulnerabilities, configuration weaknesses, and improvement opportunities with specific recommendations relevant to UAE email threat landscape."
          },
          {
            title: "UAE Email Security Architecture Design",
            description: "Detailed technical blueprint for comprehensive email protection including gateway solutions, authentication protocols, endpoint controls, and integration approach appropriate for your UAE email environment."
          },
          {
            title: "UAE Anti-Phishing Implementation Plan",
            description: "Strategic approach for implementing multi-layered phishing protection combining technical controls, authentication systems, and user awareness specifically designed for threats targeting UAE organizations."
          },
          {
            title: "UAE Email Authentication Configuration",
            description: "Technical implementation documentation for SPF, DKIM, and DMARC with appropriate DNS records, policy settings, and verification procedures protecting your domains from spoofing in UAE business communications."
          },
          {
            title: "UAE Email Security Policy Framework",
            description: "Comprehensive policy documentation covering secure email usage, handling procedures, acceptable use guidelines, and security requirements tailored to UAE regulatory environment and organizational requirements."
          },
          {
            title: "UAE Phishing Simulation Program",
            description: "Structured testing approach using UAE-relevant scenarios, providing detailed reporting, trend analysis, and targeted follow-up training to measurably improve workforce resilience against sophisticated phishing attempts."
          },
          {
            title: "UAE Email Security Awareness Materials",
            description: "Educational resources addressing email threats relevant to UAE business context, including presentation materials, quick reference guides, and communication templates in appropriate languages for your workforce."
          },
          {
            title: "UAE Email Security Incident Response Playbook",
            description: "Detailed procedures for addressing email-based security incidents including identification guidelines, containment measures, investigation steps, and remediation processes aligned with UAE organizational structure."
          },
          {
            title: "UAE Email Security Technical Configuration",
            description: "Comprehensive documentation of implemented security settings, filtering rules, authentication parameters, and protection mechanisms across email infrastructure with appropriate maintenance guidance."
          },
          {
            title: "UAE Email Security Dashboard",
            description: "Visual reporting solution providing actionable intelligence on email threat landscape, security effectiveness, user awareness, and protection trends with appropriate metrics for different UAE stakeholder audiences."
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
            
            {/* Email Gateway */}
            <rect x="220" y="140" width="160" height="60" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="170" textAnchor="middle" fontSize="12" fill="#00E5FF">Email Gateway</text>
            
            {/* Threat Email */}
            <rect x="130" y="155" width="30" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <path d="M130 160 L145 170 L160 160" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="145" y="174" textAnchor="middle" fontSize="7" fill="#EB3443">@</text>
            
            {/* Safe Email */}
            <rect x="440" y="155" width="30" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M440 160 L455 170 L470 160" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="455" y="174" textAnchor="middle" fontSize="7" fill="#00B2A9">@</text>
            
            {/* Security Layers */}
            <rect x="230" y="150" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="242.5" y="160" textAnchor="middle" fontSize="6" fill="#00E5FF">Spam</text>
            
            <rect x="260" y="150" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="272.5" y="160" textAnchor="middle" fontSize="6" fill="#00E5FF">Auth</text>
            
            <rect x="290" y="150" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="302.5" y="160" textAnchor="middle" fontSize="6" fill="#00E5FF">AV</text>
            
            <rect x="320" y="150" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="332.5" y="160" textAnchor="middle" fontSize="6" fill="#00E5FF">URL</text>
            
            <rect x="350" y="150" width="25" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="362.5" y="160" textAnchor="middle" fontSize="6" fill="#00E5FF">DLP</text>
            
            {/* Animation of Email Flow */}
            <circle cx="145" cy="165" r="3" fill="#EB3443">
              <animate attributeName="cx" values="145;170;195" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="440" cy="165" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="390;415;440" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Block Symbol */}
            <circle cx="200" cy="165" r="8" fill="none" stroke="#EB3443" strokeWidth="1">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
            </circle>
            <line x1="195" y1="160" x2="205" y2="170" stroke="#EB3443" strokeWidth="1">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Protected User */}
            <rect x="260" y="220" width="80" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <circle cx="285" cy="235" r="8" fill="none" stroke="#00B2A9" strokeWidth="0.5"/>
            <path d="M285 243 L285 253" stroke="#00B2A9" strokeWidth="0.5"/>
            <path d="M280 245 L290 245" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="300" y="250" textAnchor="middle" fontSize="7" fill="#00B2A9">Protected User</text>
            
            {/* Connection to User */}
            <path d="M300 200 L300 220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Threat Types */}
            <rect x="150" y="115" width="45" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="172.5" y="125" textAnchor="middle" fontSize="6" fill="#EB3443">Phishing</text>
            
            <rect x="150" y="133" width="45" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="172.5" y="143" textAnchor="middle" fontSize="6" fill="#EB3443">Malware</text>
            
            <rect x="150" y="151" width="45" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="172.5" y="161" textAnchor="middle" fontSize="6" fill="#EB3443">BEC</text>
            
            <rect x="150" y="169" width="45" height="15" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="172.5" y="179" textAnchor="middle" fontSize="6" fill="#EB3443">Spam</text>
            
            {/* UAE Email Pattern */}
            <rect x="370" y="115" width="60" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="400" y="125" textAnchor="middle" fontSize="6" fill="#00E5FF">English/Arabic</text>
            
            <rect x="370" y="133" width="60" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="400" y="143" textAnchor="middle" fontSize="6" fill="#00E5FF">Mobile Access</text>
            
            <rect x="370" y="151" width="60" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="400" y="161" textAnchor="middle" fontSize="6" fill="#00E5FF">UAE Standards</text>
            
            <rect x="370" y="169" width="60" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="400" y="179" textAnchor="middle" fontSize="6" fill="#00E5FF">Global Business</text>
            
            {/* Security Dashboard */}
            <rect x="220" y="280" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="300" textAnchor="middle" fontSize="11" fill="#00B2A9">Email Security Dashboard</text>
            
            {/* Dashboard Connection */}
            <path d="M300 260 L300 280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Email Security</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Phishing Simulation",
            link: "/services/phishing-simulation"
          },
          {
            title: "UAE DLP Services",
            link: "/services/dlp"
          },
          {
            title: "UAE Security Awareness",
            link: "/services/security-awareness"
          },
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE Microsoft 365 Security",
            link: "/services/microsoft-services"
          },
          {
            title: "UAE Managed Security Services",
            link: "/services/managed-security"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Email Security in UAE FAQs"
        subtitle="Common questions about email protection for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default EmailSecurityPage;