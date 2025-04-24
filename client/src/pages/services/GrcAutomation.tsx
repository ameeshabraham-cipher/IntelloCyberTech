import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { BarChart2, CheckSquare, Shield, FileText, AlertTriangle, Settings, Workflow, Database } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const GrcAutomationPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "GRC Automation Services in UAE",
    description: "Expert GRC automation services in Dubai and across UAE. Streamline governance, risk, and compliance processes with our comprehensive automation solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Governance, Risk, and Compliance Automation",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring efficient compliance and risk management"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What are the key benefits of GRC automation for UAE organizations?",
      answer: "UAE organizations realize several strategic benefits through GRC automation: 1) UAE Regulatory Efficiency - streamlined compliance management across multiple UAE frameworks including UAE IA Standards, NESA requirements, UAE PDPL, and sector-specific regulations, significantly reducing manual effort and resource requirements, 2) Real-Time Compliance Visibility - continuous monitoring of compliance status with immediate identification of gaps across UAE regulatory obligations and internal policies, 3) Audit Process Optimization - simplified, evidence-based audit preparation with automated documentation collection aligned with UAE regulatory authority requirements and audit methodologies, 4) Risk Management Enhancement - standardized, consistent risk assessment and treatment across UAE operations with improved visibility into organizational risk posture and control effectiveness, 5) Control Testing Automation - systematic, repeatable testing of security and compliance controls with evidence collection and deficiency identification aligned with UAE compliance frameworks, 6) UAE Reporting Efficiency - automated generation of comprehensive compliance and risk reports for UAE stakeholders, regulatory authorities, and business partners, 7) Cross-framework Alignment - harmonized approach managing overlapping requirements across multiple UAE compliance frameworks, reducing duplicate efforts and inconsistencies, 8) Compliance Cost Reduction - lower overall compliance management costs through efficiency gains particularly valuable in UAE's competitive business environment, 9) Resource Optimization - more effective use of limited GRC expertise in UAE's specialized talent market through workflow automation and knowledge management, 10) Operational Integration - embedding compliance and risk considerations directly into business processes essential in UAE's highly regulated market sectors. These benefits combine to transform GRC from a resource-intensive obligation into a strategic advantage for UAE organizations."
    },
    {
      question: "Which compliance frameworks can be automated for UAE organizations?",
      answer: "GRC automation can address numerous frameworks relevant to UAE organizations: 1) UAE Information Assurance Standards - automation for the comprehensive national security framework applicable to government entities and critical infrastructure in the UAE, 2) NESA Compliance - automated management of National Electronic Security Authority requirements for critical information infrastructure providers across the UAE, 3) UAE Personal Data Protection Law (PDPL) - streamlined handling of the new federal data protection requirements affecting all UAE organizations processing personal data, 4) UAE Central Bank Regulations - automation for financial services compliance requirements including the recent Cyber Risk Management framework, 5) UAE Insurance Authority Standards - compliance automation for insurers operating under UAE regulatory oversight, 6) Dubai Financial Services Authority (DFSA) - specialized compliance automation for organizations operating within Dubai International Financial Centre, 7) Abu Dhabi Global Market (ADGM) Regulations - automated compliance management for entities under the ADGM regulatory framework, 8) UAE Healthcare Regulations - automation for Department of Health (DOH) and other healthcare-specific compliance requirements in the UAE, 9) ISO 27001/ISO 27701 - standardized information security and privacy management aligned with international standards adopted across UAE industries, 10) NIST Cybersecurity Framework - automation for the widely-adopted security framework increasingly referenced in UAE regulatory requirements, 11) Industry-Specific Standards - specialized automation for sector-specific requirements in telecommunications, energy, aviation, and other UAE regulated industries. GRC automation platforms can be configured to address these frameworks individually or in combination to create a unified compliance approach appropriate for UAE regulatory landscapes."
    },
    {
      question: "What GRC processes should UAE organizations prioritize for automation?",
      answer: "UAE organizations should prioritize automating these key GRC processes: 1) UAE Compliance Assessment - systematic evaluation of controls against UAE regulatory requirements with automated gap identification, evidence collection, and remediation tracking, 2) UAE Risk Assessment - standardized methodology for identifying, analyzing, and evaluating risks specific to UAE business environments with consistent rating scales and treatment approaches, 3) Policy Management - automated lifecycle for policy development, review, approval, distribution, and attestation across UAE organizational structures, often requiring multi-language support for diverse workforces, 4) UAE Regulatory Change Management - systematic monitoring of evolving UAE compliance requirements with impact analysis, implementation planning, and change incorporation into compliance programs, 5) Third-Party Risk Management - automated vendor assessment, due diligence, and monitoring particularly important in UAE's interconnected business ecosystem with extensive service provider relationships, 6) UAE Compliance Reporting - automated generation of regulatory submissions, executive dashboards, and compliance metrics for UAE stakeholders and authorities with appropriate formats and content, 7) Control Testing & Monitoring - systematic evaluation of control effectiveness with evidence collection, deficiency management, and continuous compliance validation aligned with UAE requirements, 8) UAE Audit Management - streamlined coordination of internal and external audits with workflow management for findings, responses, and remediation activities, 9) UAE Incident Management - structured handling of compliance and security incidents with appropriate investigation, documentation, notification, and reporting aligned with UAE regulatory expectations, 10) UAE Training & Awareness - automated assignment, delivery, tracking, and verification of compliance training to UAE workforce with appropriate language options and cultural context. Prioritization should consider your specific UAE regulatory landscape, organizational maturity, available resources, and compliance challenges."
    },
    {
      question: "How should UAE organizations select a GRC automation platform?",
      answer: "UAE organizations should evaluate GRC automation platforms using several key criteria: 1) UAE Regulatory Coverage - pre-built content for UAE-specific frameworks including UAE IA Standards, NESA, PDPL, and sector-specific requirements to minimize implementation effort, 2) Multi-language Support - Arabic and English interface capabilities to accommodate diverse UAE workforce and regulator communications, 3) Scalability - ability to grow with your UAE organization's expanding compliance obligations, business operations, and geographical presence, 4) Integration Capabilities - connectivity with existing UAE business systems, security tools, and operational platforms to create a unified GRC approach, 5) Deployment Options - availability of cloud (with UAE data center options) and on-premises implementations to address UAE data sovereignty requirements when handling sensitive compliance data, 6) User Experience - intuitive interface designed for both compliance specialists and business users across various technical proficiency levels common in UAE organizations, 7) Customization Flexibility - ability to adapt workflows, assessments, and processes to UAE-specific business practices and organizational structures, 8) Reporting Capabilities - comprehensive analytics and reporting aligned with UAE stakeholder expectations and regulatory submission requirements, 9) Implementation Support - availability of professional services with UAE experience and understanding of local compliance landscapes, 10) Total Cost Consideration - balanced evaluation of licensing, implementation, and ongoing support costs appropriate for UAE market conditions and business value delivery, 11) Vendor UAE Presence - local support capabilities, UAE customer references, and regional investment indicating long-term commitment to UAE market. Carefully evaluating these factors helps ensure selection of a GRC platform capable of meeting your specific UAE compliance automation needs."
    },
    {
      question: "What are common challenges in GRC automation implementation for UAE organizations?",
      answer: "UAE organizations often face several challenges during GRC automation implementations: 1) Process Standardization - establishing consistent, documented compliance and risk processes appropriate for UAE regulatory environments before automation, requiring cross-departmental coordination and methodology development, 2) UAE Control Framework Harmonization - creating unified control structures that address multiple UAE regulatory requirements while eliminating duplication and inconsistencies, 3) Data Quality & Integration - ensuring accurate, complete compliance data migration and integration with existing UAE business systems and security tools, 4) UAE Stakeholder Alignment - managing diverse expectations across compliance, risk, IT, business units, and executive leadership with consideration for UAE organizational hierarchies and decision processes, 5) UAE Regulatory Interpretation - translating complex UAE regulatory language into actionable control requirements and assessment criteria suitable for automation implementation, 6) Resource Limitations - addressing constraints in specialized GRC expertise within the UAE talent market, particularly for professionals with both technical and compliance knowledge, 7) Change Management - driving user adoption across UAE business units with varying technical proficiency and compliance awareness, requiring structured communication and training, 8) Implementation Complexity - managing potentially lengthy implementation timelines for comprehensive GRC platforms while delivering incremental value to UAE stakeholders, 9) UAE Customization Balance - adapting platforms to UAE-specific requirements while minimizing customization that complicates upgrades and maintenance, 10) Continuous Improvement - establishing ongoing optimization processes to address evolving UAE regulatory requirements and business changes after initial implementation. Addressing these challenges requires structured implementation methodology, realistic expectations, appropriate resource allocation, and executive sponsorship to achieve successful GRC automation outcomes for UAE organizations."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="GRC Automation Services in UAE | Streamlined Compliance Management"
        description="Expert GRC automation services in Dubai and across UAE. Streamline governance, risk, and compliance processes with our comprehensive automation solutions with 22+ years of experience."
        url="/services/grc-automation"
        type="website"
      />
      <ServicePageLayout
        title="GRC Automation Services in UAE | Streamlined Compliance Management"
        category="UAE Governance, Risk & Compliance"
        description="Transform your compliance and risk management through intelligent automation. Our GRC Automation services streamline governance, risk, and compliance processes for UAE organizations facing complex regulatory requirements."
        heroIcon={<BarChart2 className="h-8 w-8" />}
        overview="UAE organizations face increasingly complex regulatory landscapes requiring significant resources to manage governance, risk, and compliance obligations effectively. Our GRC Automation services provide comprehensive solutions to streamline and enhance these critical processes through intelligent technology implementation. We help transform labor-intensive, manual GRC activities into efficient, automated workflows that improve accuracy, reduce costs, and provide real-time visibility across your compliance and risk landscape. With deep understanding of UAE regulatory requirements, organizational structures, and business practices, we implement GRC automation solutions tailored to your specific compliance framework, risk profile, and operational model. Whether you're managing UAE Information Assurance Standards, NESA requirements, data protection regulations, or industry-specific frameworks, our expertise ensures your GRC automation delivers maximum value while addressing the specific needs of UAE organizations operating in highly regulated environments."
        steps={[
          {
            title: "UAE GRC Requirements Analysis",
            description: "Assess your current governance, risk, and compliance processes through stakeholder interviews and documentation review to understand specific UAE regulatory obligations, organizational structure, and business needs before designing automation solutions."
          },
          {
            title: "UAE Compliance Framework Mapping",
            description: "Identify and document applicable UAE regulatory requirements, internal policies, and industry standards to create comprehensive compliance obligation inventory with appropriate control mappings across multiple frameworks."
          },
          {
            title: "UAE GRC Process Assessment",
            description: "Evaluate existing compliance and risk management practices against industry best practices and UAE regulatory expectations, identifying opportunities for standardization, optimization, and automation across your organization."
          },
          {
            title: "UAE GRC Technology Evaluation",
            description: "Assess potential automation platforms based on your specific UAE compliance requirements, technical environment, and business objectives, identifying optimal solutions that balance functionality, complexity, and cost considerations."
          },
          {
            title: "UAE-Specific Solution Design",
            description: "Develop comprehensive GRC automation architecture including platform selection, implementation approach, integration requirements, and deployment methodology tailored to your UAE organization's specific compliance and risk management needs."
          },
          {
            title: "UAE Regulatory Content Development",
            description: "Create standardized UAE compliance content including control frameworks, assessment questionnaires, risk methodologies, and reporting templates aligned with relevant UAE regulatory requirements and organizational processes."
          },
          {
            title: "UAE GRC Platform Implementation",
            description: "Deploy and configure selected GRC automation solution with appropriate workflows, user permissions, compliance content, and data structures designed around your UAE organization's specific governance, risk, and compliance requirements."
          },
          {
            title: "UAE Business Systems Integration",
            description: "Establish connections between GRC platform and relevant business applications, security tools, and data sources to create unified compliance and risk management ecosystem appropriate for your UAE technology environment."
          },
          {
            title: "UAE GRC Automation Testing",
            description: "Validate platform functionality, workflows, and integrations through comprehensive testing scenarios based on actual UAE compliance and risk management use cases, ensuring solution meets defined requirements and user expectations."
          },
          {
            title: "UAE Change Management & Training",
            description: "Develop user adoption strategy with appropriate communication, training materials, and support resources to ensure successful transition to automated GRC processes across your UAE organization's departments and stakeholder groups."
          },
          {
            title: "UAE GRC Solution Deployment",
            description: "Implement GRC automation through phased approach with appropriate data migration, user onboarding, and process transition strategies designed to minimize business disruption while delivering incremental value to UAE stakeholders."
          },
          {
            title: "UAE GRC Optimization & Enhancement",
            description: "Provide ongoing support, refinement, and enhancement of GRC automation platform to address evolving UAE regulatory requirements, organizational changes, and emerging compliance challenges after initial implementation."
          }
        ]}
        benefits={[
          {
            title: "UAE Compliance Efficiency",
            content: "Transform resource-intensive manual compliance processes into streamlined, automated workflows, significantly reducing effort and cost associated with managing complex UAE regulatory requirements across multiple frameworks."
          },
          {
            title: "UAE Real-Time Compliance Visibility",
            content: "Gain comprehensive, up-to-date view of compliance status through centralized dashboards and reporting, enabling proactive management of UAE regulatory obligations and rapid identification of potential compliance gaps."
          },
          {
            title: "UAE Risk Management Enhancement",
            content: "Implement consistent, data-driven risk assessment and treatment processes across your UAE organization, improving risk visibility, control effectiveness evaluation, and strategic decision-making through standardized methodologies."
          },
          {
            title: "UAE Audit Process Optimization",
            content: "Streamline internal and external audit activities through automated evidence collection, control testing, and documentation management, significantly reducing preparation effort while improving audit outcomes for UAE regulatory requirements."
          },
          {
            title: "UAE Regulatory Change Readiness",
            content: "Establish systematic approach for monitoring, assessing, and implementing evolving UAE compliance requirements, ensuring your organization remains aligned with regulatory expectations in the dynamic UAE regulatory environment."
          },
          {
            title: "UAE Compliance Resource Optimization",
            content: "Maximize effectiveness of limited compliance and risk management expertise through automation of routine tasks, enabling your specialized UAE professionals to focus on strategic activities rather than administrative processes."
          },
          {
            title: "UAE Stakeholder Confidence Enhancement",
            content: "Demonstrate robust governance and compliance commitment to UAE regulators, partners, and customers through comprehensive, evidence-based compliance management and reporting capabilities."
          },
          {
            title: "UAE Operational Integration",
            content: "Embed compliance and risk management directly into business processes and decision-making through automated workflows, approvals, and assessments, creating UAE organization-wide accountability for governance obligations."
          },
          {
            title: "UAE Cross-Framework Harmonization",
            content: "Implement unified approach to managing overlapping requirements across multiple UAE regulatory frameworks, eliminating duplication of effort and inconsistencies through standardized control mappings and assessment methodologies."
          },
          {
            title: "UAE GRC Maturity Advancement",
            content: "Progress from reactive, manual compliance management to proactive, strategic GRC program through technology enablement, establishing the foundation for continuous improvement and excellence in UAE regulatory compliance."
          }
        ]}
        deliverables={[
          {
            title: "UAE GRC Requirements Assessment",
            description: "Comprehensive analysis of your governance, risk, and compliance landscape including regulatory obligations, existing processes, stakeholder needs, and automation opportunities specific to your UAE organization's compliance and risk environment."
          },
          {
            title: "UAE GRC Process Optimization Plan",
            description: "Detailed recommendations for standardizing and enhancing compliance and risk management activities prior to automation, establishing efficient processes aligned with UAE regulatory expectations and industry best practices."
          },
          {
            title: "UAE GRC Solution Architecture",
            description: "Technical design documentation outlining automation platform selection, implementation approach, component configuration, and integration strategy tailored to your UAE organization's specific compliance requirements and technical environment."
          },
          {
            title: "UAE Regulatory Framework Mapping",
            description: "Structured documentation connecting UAE compliance requirements to control objectives, assessment criteria, and evidence types, creating unified compliance framework addressing multiple regulatory obligations relevant to your organization."
          },
          {
            title: "UAE GRC Implementation Roadmap",
            description: "Phased deployment plan with clear milestones, resource requirements, and timeline for GRC automation implementation, providing structured approach aligned with your UAE organization's priorities and capacity constraints."
          },
          {
            title: "UAE-Specific GRC Content Library",
            description: "Comprehensive collection of pre-configured compliance frameworks, control catalogs, assessment questionnaires, risk methodologies, and reporting templates designed specifically for UAE regulatory requirements and business contexts."
          },
          {
            title: "UAE GRC Solution Configuration",
            description: "Fully implemented automation platform with appropriate workflows, approval processes, user roles, compliance content, and data structures tailored to your UAE organization's specific governance, risk, and compliance requirements."
          },
          {
            title: "UAE GRC Training & Documentation",
            description: "Comprehensive user guides, administrative documentation, and training materials enabling your UAE teams to effectively utilize and maintain the GRC automation solution with appropriate technical detail and procedural guidance."
          },
          {
            title: "UAE GRC Integration Framework",
            description: "Established connections between GRC platform and relevant business applications, security tools, and data sources creating unified compliance and risk ecosystem with appropriate data flows and synchronization mechanisms."
          },
          {
            title: "UAE GRC Reporting & Dashboards",
            description: "Comprehensive analytics, visualization, and reporting capabilities providing actionable insights into compliance status, risk posture, and control effectiveness for various UAE stakeholder groups and regulatory reporting requirements."
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
            
            {/* GRC Elements */}
            <circle cx="220" cy="150" r="30" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="220" y="154" textAnchor="middle" fontSize="12" fill="#00E5FF">G</text>
            
            <circle cx="300" cy="150" r="30" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="154" textAnchor="middle" fontSize="12" fill="#00E5FF">R</text>
            
            <circle cx="380" cy="150" r="30" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="380" y="154" textAnchor="middle" fontSize="12" fill="#00E5FF">C</text>
            
            <line x1="250" y1="150" x2="270" y2="150" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="330" y1="150" x2="350" y2="150" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Automation Workflow */}
            <rect x="180" y="210" width="240" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            
            <circle cx="200" cy="230" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="200" y="234" textAnchor="middle" fontSize="10" fill="#00B2A9">1</text>
            
            <circle cx="250" cy="230" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="250" y="234" textAnchor="middle" fontSize="10" fill="#00B2A9">2</text>
            
            <circle cx="300" cy="230" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="300" y="234" textAnchor="middle" fontSize="10" fill="#00B2A9">3</text>
            
            <circle cx="350" cy="230" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="350" y="234" textAnchor="middle" fontSize="10" fill="#00B2A9">4</text>
            
            <circle cx="400" cy="230" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="400" y="234" textAnchor="middle" fontSize="10" fill="#00B2A9">5</text>
            
            <line x1="210" y1="230" x2="240" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="260" y1="230" x2="290" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="310" y1="230" x2="340" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            <line x1="360" y1="230" x2="390" y2="230" stroke="#00B2A9" strokeWidth="1"/>
            
            {/* Workflow Animation */}
            <circle cx="225" cy="230" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="200;250;300;350;400;400" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* Connections to GRC */}
            <line x1="220" y1="180" x2="220" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="180" x2="300" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="380" y1="180" x2="380" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="90" y="130" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="120" y="144" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="90" y="160" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="120" y="174" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="90" y="190" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="120" y="204" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            <rect x="90" y="220" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="120" y="234" textAnchor="middle" fontSize="8" fill="#EB3443">Central Bank</text>
            
            {/* Connection to Framework */}
            <path d="M150 144 L190 150" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M150 174 L190 150" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M150 204 L180 210" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M150 234 L180 230" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Dashboard */}
            <rect x="220" y="280" width="160" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="305" textAnchor="middle" fontSize="12" fill="#00B2A9">Compliance Dashboard</text>
            
            {/* Connection to Dashboard */}
            <path d="M300 250 L300 280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Dashboard Bars */}
            <rect x="240" y="290" width="10" height="20" fill="#00B2A9" fillOpacity="0.7"/>
            <rect x="260" y="295" width="10" height="15" fill="#00B2A9" fillOpacity="0.7"/>
            <rect x="280" y="290" width="10" height="20" fill="#EB3443" fillOpacity="0.7"/>
            <rect x="300" y="285" width="10" height="25" fill="#00B2A9" fillOpacity="0.7"/>
            <rect x="320" y="295" width="10" height="15" fill="#00B2A9" fillOpacity="0.7"/>
            <rect x="340" y="290" width="10" height="20" fill="#00B2A9" fillOpacity="0.7"/>
            <rect x="360" y="300" width="10" height="10" fill="#EB3443" fillOpacity="0.7"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE GRC Automation</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE AI Compliance",
            link: "/services/ai-compliance"
          },
          {
            title: "UAE Risk Management",
            link: "/services/risk-management"
          },
          {
            title: "UAE Cybersecurity Frameworks",
            link: "/services/cybersecurity-frameworks"
          },
          {
            title: "UAE IT Security Audit",
            link: "/services/it-security-audit"
          },
          {
            title: "UAE Policy Development",
            link: "/services/policy-development"
          },
          {
            title: "UAE Compliance Services",
            link: "/services/compliance"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="GRC Automation in UAE FAQs"
        subtitle="Common questions about governance, risk, and compliance automation for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default GrcAutomationPage;