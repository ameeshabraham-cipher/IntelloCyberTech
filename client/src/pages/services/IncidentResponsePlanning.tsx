import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { AlertTriangle, CheckCircle, Clock, FileText, Shield, Users, Zap, Activity } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const IncidentResponsePlanningPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Incident Response Planning Services in UAE",
    description: "Expert incident response planning services in Dubai and across UAE. Prepare your organization to effectively respond to cybersecurity incidents with our comprehensive incident response planning services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Incident Response Planning",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring incident response preparedness"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "Why is incident response planning critical for UAE organizations?",
      answer: "Incident response planning is particularly critical for UAE organizations due to several factors: 1) UAE's Targeted Position - the UAE's prominence as a global business and financial hub makes its organizations attractive targets for sophisticated threat actors, 2) UAE Regulatory Requirements - frameworks like UAE IA Standards, NESA, and sector-specific regulations mandate formal incident response capabilities, 3) UAE's Critical Infrastructure - many UAE organizations support critical national infrastructure where incidents could have significant impacts, 4) Reputation Management - in UAE's relationship-driven business culture, security incidents can cause substantial reputational damage, 5) Regional Geopolitical Factors - organizations in the UAE may face targeted attacks due to regional political tensions, 6) Limited Response Timeline - UAE regulations often specify strict notification timelines (as short as 24-48 hours), 7) UAE Data Protection Laws - increasingly stringent data protection requirements with specific incident reporting obligations. Effective incident response planning helps UAE organizations detect incidents quickly, respond efficiently, minimize business impact, maintain regulatory compliance, and protect their reputation in the UAE market by demonstrating preparedness and resilience in the face of cyber threats."
    },
    {
      question: "What are the key components of an effective incident response plan for UAE organizations?",
      answer: "An effective incident response plan for UAE organizations includes several critical components: 1) UAE-Specific Incident Classification - categorization framework for incident types with severity levels aligned to UAE regulatory requirements, 2) Clear Roles and Responsibilities - defined incident response team structure with designated responsibilities for UAE staff (including Arabic-speaking team members when needed), 3) UAE-Compliant Detection Procedures - processes to identify and verify incidents with appropriate logging according to UAE standards, 4) UAE Regulatory Notification Procedures - specific steps for notifying UAE authorities (TDRA, UAE CERT, Central Bank, etc.) within required timeframes, 5) UAE-Aligned Containment Strategies - approaches for limiting incident impact while preserving evidence according to UAE legal standards, 6) Eradication and Recovery Procedures - methodologies for removing threats and restoring operations in UAE environments, 7) UAE-Specific Communication Templates - pre-approved messaging for stakeholders, customers, and regulators, including Arabic communication where appropriate, 8) UAE Legal and Compliance Considerations - guidance on preserving evidence for potential legal proceedings under UAE law, 9) Testing and Training Schedule - regular exercises tailored to UAE threat scenarios, 10) UAE Supplier/Vendor Management - procedures for engaging external response partners in the UAE market, 11) UAE Business Continuity Integration - alignment with business continuity plans for UAE operations. These components should be tailored to your specific UAE regulatory environment, industry sector, and organizational structure."
    },
    {
      question: "How should UAE organizations test their incident response plans?",
      answer: "UAE organizations should test their incident response plans through various exercises: 1) Tabletop Exercises - facilitated discussions walking through UAE-relevant incident scenarios with response team members to evaluate decision-making processes without disrupting operations, 2) Functional Exercises - limited simulations testing specific components of the plan (like communication procedures or UAE regulatory notification processes), 3) Full-Scale Simulations - comprehensive exercises simulating actual incidents incorporating technical response and UAE-specific business considerations, 4) UAE Red Team Exercises - controlled adversary simulations to test detection and response capabilities against realistic tactics, 5) UAE Technical Validation Testing - verification of technical controls and response tools in UAE environments, 6) UAE Cross-Organizational Drills - exercises involving third parties like UAE CERT, industry partners, or service providers, 7) UAE After-Hours Testing - exercises conducted outside business hours to test resilience when staff availability is limited. Testing should include UAE-specific scenarios like data breaches affecting UAE residents, ransomware impacting UAE operations, and attacks targeting UAE critical infrastructure. Tests should be conducted at regular intervals (quarterly or semi-annually) with different scenarios and participants, ensuring learning objectives align with UAE regulatory requirements and regional threat landscape."
    },
    {
      question: "What are the regulatory requirements for incident response in the UAE?",
      answer: "UAE organizations face several regulatory requirements regarding incident response: 1) UAE Information Assurance Standards - require formal incident response capabilities for government entities and critical infrastructure with 24-48 hour reporting timelines, 2) NESA (National Electronic Security Authority) - mandates incident notification for critical information infrastructure providers with strict reporting timelines and specific response requirements, 3) UAE Central Bank Framework - requires financial institutions to implement incident response plans with detailed notification requirements for cybersecurity events, 4) TDRA (Telecommunications and Digital Government Regulatory Authority) - establishes incident reporting requirements for telecommunications providers and certain digital service providers, 5) UAE PDPL (Personal Data Protection Law) - requires notification of data breaches affecting UAE residents within specific timeframes, 6) DIFC and ADGM Data Protection Regulations - mandate breach notification requirements for organizations operating in these financial free zones, 7) Sector-Specific Regulations - healthcare, energy, and other critical sectors have additional incident response requirements, 8) UAE Cybercrime Law - establishes broader legal framework for cybersecurity incidents with potential penalties for non-compliance. Organizations must design incident response plans that address these UAE-specific requirements, including appropriate reporting mechanisms, evidence preservation procedures, and documentation practices that satisfy UAE regulatory expectations."
    },
    {
      question: "How should UAE organizations integrate incident response with business continuity?",
      answer: "UAE organizations should integrate incident response with business continuity through several approaches: 1) Aligned Planning - ensure incident response and business continuity plans are developed together with shared ownership and consistent activation triggers appropriate for UAE operations, 2) Common Governance Structure - establish unified oversight with representation from UAE stakeholders across security, business, and compliance functions, 3) Coordinated Severity Classification - use consistent incident severity definitions that trigger appropriate response and continuity actions based on UAE business impacts, 4) Integrated Teams - ensure incident response and business continuity teams train together with clear understanding of each other's responsibilities in UAE contexts, 5) Joint Testing Exercises - conduct combined drills that test both security response and business recovery in realistic UAE scenarios, 6) Shared Communications Process - develop unified communication protocols that address both technical response and business continuity messaging for UAE stakeholders, 7) Consistent Documentation - maintain consistent documentation formats and storage repositories accessible to both teams, 8) Technology Integration - implement tools that support both functions with appropriate access controls and permissions, 9) UAE Metrics and Reporting - develop shared metrics that demonstrate effectiveness of both capabilities to UAE leadership and regulators, 10) Regular Reviews - conduct joint reviews following incidents or exercises to identify improvement opportunities across both domains. This integration ensures security incidents affecting UAE operations are addressed with both technical response and business recovery perspectives, optimizing overall organizational resilience."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Incident Response Planning Services in UAE | Cyber Incident Preparedness"
        description="Expert incident response planning services in Dubai and across UAE. Prepare your organization to effectively respond to cybersecurity incidents with our comprehensive incident response planning services with 22+ years of experience."
        url="/services/incident-response-planning"
        type="website"
      />
      <ServicePageLayout
        title="Incident Response Planning Services in UAE | Cyber Incident Preparedness"
        category="UAE Cybersecurity Services"
        description="Develop a comprehensive incident response capability to effectively manage cybersecurity incidents affecting your UAE operations. Our incident response planning services prepare your organization to detect, contain, and recover from security breaches while meeting UAE regulatory requirements."
        heroIcon={<AlertTriangle className="h-8 w-8" />}
        overview="In today's complex threat landscape targeting UAE organizations, effective incident response planning is essential for minimizing the impact of cybersecurity breaches. Our UAE-focused Incident Response Planning service helps your organization develop comprehensive response capabilities tailored to your specific business needs and UAE regulatory requirements. We work with your team to establish clear incident response procedures, roles, tools, and communication protocols that enable rapid detection, containment, and recovery from security incidents affecting your UAE operations. With our guidance, you'll build a mature incident response capability that reduces breach impacts, meets UAE compliance obligations, and protects your reputation in the UAE market. Our approach combines global security best practices with deep understanding of UAE regulatory frameworks, local threat landscape, and business culture, ensuring your response plans are both effective and appropriate for your UAE operations."
        steps={[
          {
            title: "UAE-Appropriate Incident Response Assessment",
            description: "Evaluate your current incident response capabilities against UAE regulatory requirements, industry best practices, and your organization's specific needs, identifying strengths, gaps, and improvement opportunities specific to your UAE operations and threat profile."
          },
          {
            title: "UAE-Specific Incident Response Strategy",
            description: "Develop a comprehensive incident response strategy aligned with your security program objectives, risk appetite, and UAE regulatory obligations, establishing the foundation for your organization's approach to managing security incidents affecting UAE operations."
          },
          {
            title: "UAE Incident Classification Framework",
            description: "Create a structured incident categorization system tailored to your UAE business context, defining incident types, severity levels, and response priorities based on potential impact to your UAE operations, data, reputation, and compliance posture."
          },
          {
            title: "UAE-Aligned Incident Response Team Structure",
            description: "Design an effective incident response team organization with clearly defined roles, responsibilities, and escalation paths appropriate for your UAE operations, ensuring the right expertise is available across technical, business, communications, and legal domains."
          },
          {
            title: "UAE Incident Detection & Triage Procedures",
            description: "Establish structured procedures for identifying, verifying, and assessing security incidents affecting your UAE operations, enabling rapid triage and appropriate initial response to contain potential damage in accordance with UAE regulatory timelines."
          },
          {
            title: "UAE Incident Containment & Eradication Playbooks",
            description: "Develop detailed technical playbooks for responding to common incident types in UAE environments, providing step-by-step guidance for containing threats, eradicating malicious activity, and preserving evidence in accordance with UAE legal requirements."
          },
          {
            title: "UAE Business Recovery & Restoration Planning",
            description: "Create procedures for returning to normal operations following incidents, ensuring business continuity during response activities while maintaining security and meeting UAE regulatory obligations through proper validation and verification."
          },
          {
            title: "UAE Regulatory Notification Procedures",
            description: "Establish clear processes for meeting UAE notification requirements to authorities, affected individuals, partners, and stakeholders with appropriate templates and decision frameworks to ensure timely, accurate, and compliant communications."
          },
          {
            title: "UAE Incident Response Documentation",
            description: "Develop comprehensive documentation templates for incident tracking, response activities, decision-making, and post-incident analysis that satisfy UAE evidentiary standards and regulatory documentation requirements."
          },
          {
            title: "UAE Incident Response Technology Assessment",
            description: "Evaluate your technical capabilities for incident detection, investigation, containment, and recovery, recommending appropriate tools and technologies suited to your UAE environment and integrated with your existing security infrastructure."
          },
          {
            title: "UAE Incident Response Testing & Exercises",
            description: "Design and facilitate tabletop exercises and simulations based on realistic UAE threat scenarios, testing your response capabilities, identifying improvement areas, and building team confidence in handling incidents in UAE-specific business and regulatory contexts."
          },
          {
            title: "UAE Incident Response Training Program",
            description: "Develop role-specific training for incident response team members and broader awareness for general staff, ensuring all personnel understand their responsibilities during security incidents affecting UAE operations and are prepared to execute them effectively."
          }
        ]}
        benefits={[
          {
            title: "UAE Faster Incident Detection & Response",
            content: "Reduce the time between incident occurrence and effective response through clearly defined procedures and roles, minimizing damage and business disruption to your UAE operations while meeting strict UAE regulatory notification timelines."
          },
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Meet incident response requirements specified in UAE IA Standards, NESA guidelines, UAE PDPL, and sector-specific regulations through properly designed notification processes, documentation practices, and response capabilities aligned with UAE regulatory expectations."
          },
          {
            title: "UAE Business Impact Reduction",
            content: "Minimize operational, financial, and reputational impacts of security incidents through rapid, coordinated response actions specifically tailored to protect your most critical UAE business functions and data assets from extended compromise."
          },
          {
            title: "UAE Stakeholder Confidence Maintenance",
            content: "Preserve trust among UAE customers, partners, and regulators by demonstrating preparedness and resilience in the face of security incidents, with professional response capabilities that reflect the expectations of the UAE market and business culture."
          },
          {
            title: "UAE Team Coordination Enhancement",
            content: "Improve collaboration between technical, business, communications, and legal stakeholders during high-pressure security incidents affecting UAE operations, ensuring unified decision-making and consistent response execution across organizational boundaries."
          },
          {
            title: "UAE Response Consistency",
            content: "Ensure uniform handling of security incidents regardless of timing, personnel availability, or incident complexity through documented procedures specifically adapted for UAE operational and regulatory environments."
          },
          {
            title: "UAE Decision Quality Improvement",
            content: "Enhance decision-making during incidents through pre-established guidelines, authorization frameworks, and escalation paths designed specifically for UAE business contexts and regulatory considerations."
          },
          {
            title: "UAE Continuous Improvement Enablement",
            content: "Build a foundation for ongoing enhancement of your incident response capabilities through structured post-incident reviews and lessons learned processes relevant to evolving UAE threats and regulatory requirements."
          },
          {
            title: "UAE Cross-Functional Awareness",
            content: "Develop broader understanding of security incident impacts and response requirements across your UAE organization, creating a more security-aware culture prepared to support incident response activities when needed."
          },
          {
            title: "UAE Security Investment Optimization",
            content: "Focus security investments on addressing actual incident response gaps identified through assessment, exercises, and real incidents, ensuring resources are allocated effectively to protect your UAE operations against the most relevant threats."
          }
        ]}
        deliverables={[
          {
            title: "UAE Incident Response Capability Assessment Report",
            description: "Comprehensive evaluation of your current incident response program compared to UAE regulatory requirements and industry standards, including detailed findings, maturity ratings across key capability areas, and prioritized recommendations for enhancing your UAE incident response readiness."
          },
          {
            title: "UAE Incident Response Plan",
            description: "Complete incident response plan document tailored to your UAE organization, including incident definitions, team structure, roles and responsibilities, response procedures, decision frameworks, communication protocols, and recovery processes aligned with UAE regulatory frameworks and business requirements."
          },
          {
            title: "UAE Incident Classification Framework",
            description: "Structured system for categorizing security incidents by type, severity, and impact tailored to your UAE business context, with clear definitions, examples, and response level guidelines that align with UAE regulatory reporting requirements and threshold definitions."
          },
          {
            title: "UAE Incident Response Team Charter",
            description: "Formal definition of your incident response team structure, including core and extended team compositions, roles, responsibilities, authority levels, and activation criteria specifically designed for your UAE organizational structure and available expertise."
          },
          {
            title: "UAE Incident Response Runbooks",
            description: "Detailed technical playbooks for handling specific incident types common in UAE environments, providing step-by-step response procedures for containing threats, investigating causes, eradicating malicious activity, and recovering operations while preserving evidence according to UAE legal standards."
          },
          {
            title: "UAE Regulatory Notification Procedures & Templates",
            description: "Comprehensive guidelines for UAE regulatory notifications including decision trees, authority contact information, notification templates, and tracking mechanisms to ensure timely compliance with UAE IA Standards, NESA, UAE PDPL, and sector-specific reporting requirements."
          },
          {
            title: "UAE Incident Communication Strategy",
            description: "Communication framework for security incidents including stakeholder mapping, communication templates, approval workflows, and guidance for addressing UAE media, customers, partners, and employees, with both English and Arabic materials where appropriate for UAE business environments."
          },
          {
            title: "UAE Incident Response Exercise Scenarios",
            description: "Set of realistic tabletop and simulation exercise scenarios based on current threats targeting UAE organizations in your industry, including facilitator guides, injects, evaluation criteria, and feedback mechanisms for ongoing improvement of your UAE incident response capabilities."
          },
          {
            title: "UAE Incident Response Technology Roadmap",
            description: "Assessment of incident response technology requirements with recommendations for tools, integrations, and implementations appropriate for your UAE environment, including monitoring solutions, forensic capabilities, ticketing systems, and communication platforms available in the UAE market."
          },
          {
            title: "UAE Incident Response Training Materials",
            description: "Role-specific training content for incident response team members and general staff awareness, including presentation materials, handbooks, quick reference guides, and evaluation tools tailored to UAE organizational needs and security culture."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Elements */}
            <rect x="150" y="100" width="300" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="80" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="95" x2="400" y2="110" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Alert Symbol */}
            <polygon points="300,130 320,160 280,160" fill="none" stroke="#EB3443" strokeWidth="2">
              <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
            </polygon>
            <line x1="300" y1="145" x2="300" y2="152" stroke="#EB3443" strokeWidth="2"/>
            <circle cx="300" cy="156" r="1" fill="#EB3443"/>
            
            {/* Response Phases */}
            <rect x="170" y="180" width="260" height="90" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            
            <rect x="180" y="190" width="50" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="205" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Detect</text>
            
            <rect x="240" y="190" width="50" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="265" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Contain</text>
            
            <rect x="300" y="190" width="50" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="325" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Eradicate</text>
            
            <rect x="360" y="190" width="50" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="385" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Recover</text>
            
            {/* Response Team */}
            <rect x="195" y="230" width="70" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="230" y="250" textAnchor="middle" fontSize="8" fill="#00E5FF">Tech Team</text>
            
            <rect x="275" y="230" width="70" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="310" y="250" textAnchor="middle" fontSize="8" fill="#00E5FF">Business</text>
            
            <rect x="355" y="230" width="70" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="390" y="250" textAnchor="middle" fontSize="8" fill="#00E5FF">Legal</text>
            
            {/* Connection Lines */}
            <path d="M300 160 L300 180" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2"/>
            
            <line x1="205" y1="220" x2="205" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="265" y1="220" x2="230" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="325" y1="220" x2="310" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="385" y1="220" x2="390" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="500" y="150" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="164" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="180" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="194" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="500" y="210" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="224" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            <rect x="500" y="240" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="254" textAnchor="middle" fontSize="8" fill="#EB3443">Central Bank</text>
            
            {/* Animation Elements */}
            <circle cx="205" cy="205" r="3" fill="#00B2A9">
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="265" cy="205" r="3" fill="#00B2A9">
              <animate attributeName="opacity" values="0;1;0" dur="3s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="325" cy="205" r="3" fill="#00B2A9">
              <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="385" cy="205" r="3" fill="#00B2A9">
              <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Document Element */}
            <rect x="250" y="320" width="100" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="345" textAnchor="middle" fontSize="10" fill="#00E5FF">IR Plan</text>
            
            {/* Connection to Plan */}
            <path d="M300 270 L300 320" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Clock Timer */}
            <circle cx="100" cy="150" r="30" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
            <line x1="100" y1="150" x2="100" y2="135" stroke="#EB3443" strokeWidth="1.5">
              <animateTransform attributeName="transform" type="rotate" from="0 100 150" to="360 100 150" dur="8s" repeatCount="indefinite"/>
            </line>
            <line x1="100" y1="150" x2="115" y2="150" stroke="#EB3443" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" from="0 100 150" to="360 100 150" dur="60s" repeatCount="indefinite"/>
            </line>
            <text x="100" y="170" textAnchor="middle" fontSize="8" fill="#EB3443">Response Time</text>
            
            {/* Connection to Timeline */}
            <path d="M130 150 C140 150, 150 130, 170 130" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Incident Response Planning</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Threat Hunting",
            link: "/services/threat-hunting"
          },
          {
            title: "UAE Red Team Exercises",
            link: "/services/red-team"
          },
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE Business Continuity Planning",
            link: "/services/business-continuity"
          },
          {
            title: "UAE Digital Forensics",
            link: "/services/digital-forensics"
          },
          {
            title: "UAE Cybersecurity Training",
            link: "/services/cybersecurity-training"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Incident Response Planning in UAE FAQs"
        subtitle="Common questions about incident response planning for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default IncidentResponsePlanningPage;