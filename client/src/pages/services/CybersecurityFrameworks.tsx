import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, CheckSquare, FileText, Layers, Box, Check, Target, Settings } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const CybersecurityFrameworksPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Cybersecurity Framework Implementation Services in UAE",
    description: "Expert cybersecurity framework services in Dubai and across UAE. Implement effective security programs based on leading frameworks with our comprehensive cybersecurity governance solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Framework Implementation",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring structured cybersecurity programs"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What cybersecurity frameworks are most relevant for UAE organizations?",
      answer: "UAE organizations should consider several key cybersecurity frameworks: 1) UAE Information Assurance Standards (UAE IA) - the national cybersecurity framework developed by the UAE government specifically for UAE entities, providing comprehensive security controls aligned with local regulatory expectations, 2) National Electronic Security Authority (NESA) Standards - specialized security requirements for critical infrastructure providers in the UAE with detailed controls and implementation guidance, 3) UAE Central Bank Cyber Risk Management Framework - specialized requirements for financial institutions operating in the UAE with detailed guidance for banking, insurance, and investment firms, 4) ISO 27001/27002 - international information security standards widely recognized across UAE industries, often used as foundation for certification and compliance programs, 5) NIST Cybersecurity Framework - structured approach to cybersecurity risk management increasingly referenced in UAE regulatory requirements and adopted by multinational organizations, 6) UAE PDPL (Personal Data Protection Law) Security Requirements - security controls specifically addressing data protection obligations under UAE's federal data protection legislation, 7) DIFC and ADGM Data Protection Regulations - specialized security requirements for financial free zone entities with European-influenced security expectations, 8) Industry-Specific Frameworks - sector-specific security standards for UAE healthcare, energy, telecommunications, and other regulated industries, 9) CIS Controls - practical, prioritized security measures often used to implement more comprehensive frameworks in UAE environments. Selection should be based on your organization's specific industry, regulatory obligations, and risk profile, with consideration for UAE business requirements and international best practices."
    },
    {
      question: "How should UAE organizations choose the right cybersecurity framework?",
      answer: "UAE organizations should select cybersecurity frameworks based on several key considerations: 1) UAE Regulatory Requirements - identify mandatory frameworks specified by UAE authorities for your industry, such as UAE IA Standards for government entities, NESA for critical infrastructure, or Central Bank framework for financial institutions, 2) Industry Standards - consider frameworks commonly adopted in your sector within the UAE market, creating alignment with peers and establishing recognized security practices, 3) UAE Risk Profile - evaluate which frameworks best address your specific threat landscape, considering UAE business operations, data sensitivity, and technology environment, 4) International Requirements - assess needs for global standards if your UAE organization operates internationally or works with multinational clients with specific security expectations, 5) Framework Maturity - consider implementation complexity and your organization's security maturity, selecting frameworks that provide appropriate guidance without overwhelming UAE teams, 6) UAE Resource Constraints - evaluate framework maintenance requirements against available security resources in UAE's competitive cybersecurity talent market, 7) UAE Implementation Support - consider availability of implementation guidance, professional services, and tools specifically adapted for UAE market, 8) Certification Requirements - determine if formal certification is needed for UAE business purposes, customer assurance, or regulatory compliance, influencing framework selection, 9) Framework Integration - assess how well frameworks align with existing UAE security investments, technologies, and processes to minimize implementation disruption, 10) UAE Cultural Fit - evaluate alignment with UAE organizational culture, business practices, and leadership expectations for security governance and risk management. In many cases, UAE organizations implement multiple complementary frameworks to address various requirements while maintaining a harmonized control set that satisfies diverse obligations."
    },
    {
      question: "What are the key steps in implementing cybersecurity frameworks for UAE organizations?",
      answer: "Implementing cybersecurity frameworks in UAE organizations involves several critical steps: 1) UAE Framework Selection - identify appropriate standards based on regulatory requirements, industry expectations, and organizational needs specific to UAE business environment, 2) UAE Executive Sponsorship - secure leadership support with clear communication of security objectives, business benefits, and resource requirements within UAE organizational context, 3) UAE Gap Assessment - evaluate current security controls against selected frameworks, identifying deficiencies and strengths with consideration for UAE operational environment, 4) UAE Control Harmonization - develop unified control framework that addresses multiple standards simultaneously, eliminating duplication while ensuring comprehensive coverage of UAE requirements, 5) UAE Implementation Prioritization - sequence control enhancements based on risk, implementation complexity, and resource availability, creating practical roadmap appropriate for UAE operational constraints, 6) UAE Documentation Development - create comprehensive policies, procedures, and guidelines aligned with framework requirements and adapted to UAE organizational structure and business processes, 7) UAE Security Control Implementation - deploy technical, administrative, and physical security measures according to framework specifications with adaptation for UAE technology environments and business operations, 8) UAE Staff Awareness & Training - develop security education programs appropriate for UAE workforce demographics, covering framework requirements with relevant cultural context and language considerations, 9) UAE Effectiveness Measurement - establish metrics and evaluation processes to assess control performance against framework objectives with reporting appropriate for UAE stakeholders, 10) UAE Continuous Improvement - implement ongoing enhancement through regular assessments, gap remediation, and framework updates reflecting evolving UAE threat landscape and regulatory requirements. This structured approach ensures effective implementation tailored to specific UAE organizational needs while maintaining alignment with selected frameworks."
    },
    {
      question: "How can UAE organizations harmonize multiple cybersecurity frameworks?",
      answer: "UAE organizations can effectively harmonize multiple cybersecurity frameworks through several key approaches: 1) UAE Common Control Identification - map overlapping requirements across different frameworks to identify shared controls that satisfy multiple standards simultaneously with UAE-specific implementation guidance, 2) UAE Unified Control Catalog - develop comprehensive control library that consolidates requirements from all applicable frameworks into cohesive structure aligned with UAE organizational context and governance model, 3) UAE Control Mapping Documentation - create detailed cross-references between frameworks showing how specific controls satisfy various requirements, enabling efficient compliance reporting for different UAE authorities, 4) UAE Integrated Assessment Methodology - establish unified evaluation approach that tests controls once while validating compliance with multiple frameworks, reducing redundant assessments for UAE teams, 5) UAE Risk-Based Prioritization - sequence implementation efforts based on controls that address highest risks and satisfy multiple framework requirements, optimizing resource utilization in UAE's competitive talent market, 6) UAE Centralized Documentation System - implement unified repository for security evidence that supports multiple framework compliance, streamlining audit preparation for various UAE regulatory reviews, 7) UAE Standardized Terminology - establish consistent security language across organization that bridges different framework vocabularies while maintaining alignment with UAE business terminology, 8) UAE Harmonized Metrics - develop unified performance indicators that demonstrate effectiveness across multiple frameworks with reporting appropriate for various UAE stakeholder groups, 9) UAE Framework Governance - establish oversight structure for managing multiple frameworks with clear roles, responsibilities, and decision processes aligned with UAE organizational hierarchies, 10) UAE Automated GRC Platform - consider technology enablement for managing harmonized controls, streamlining assessments, and generating framework-specific reporting with consideration for UAE data residency requirements. This approach creates efficient, integrated security program that satisfies diverse requirements while minimizing redundancy and complexity for UAE organizations."
    },
    {
      question: "What challenges do UAE organizations face when implementing cybersecurity frameworks?",
      answer: "UAE organizations encounter several distinct challenges when implementing cybersecurity frameworks: 1) UAE Framework Adaptation - tailoring international standards to UAE-specific regulatory requirements, business practices, and operational realities while maintaining framework integrity, 2) UAE Leadership Commitment - securing sustained executive support and resource allocation for security programs in competitive UAE business environments with diverse strategic priorities, 3) UAE Security Expertise Constraints - addressing limited availability of cybersecurity professionals with framework implementation experience in UAE market, particularly for specialized requirements, 4) UAE Framework Interpretation - determining appropriate implementation of framework requirements in specific UAE organizational contexts where guidance may not address unique local considerations, 5) UAE Operational Integration - embedding security controls into business processes without disrupting critical operations or customer experience in fast-paced UAE markets, 6) UAE Cross-Framework Alignment - managing potential conflicts or overlaps between multiple mandatory frameworks imposed by different UAE authorities with varying requirements, 7) UAE Implementation Complexity - addressing framework comprehensiveness while maintaining practical, achievable security program suitable for UAE organizational maturity and available resources, 8) UAE Workforce Diversity - developing security awareness and compliance across multinational workforces with varying technical backgrounds, languages, and cultural perspectives common in UAE organizations, 9) UAE Technology Constraints - implementing security controls in complex UAE technology environments that may include legacy systems, specialized applications, and diverse infrastructure components, 10) UAE Measurement Challenges - demonstrating security effectiveness and compliance progress to UAE stakeholders through meaningful metrics and reporting that communicate value in business terms. Addressing these challenges requires tailored approach considering specific UAE organizational characteristics, industry context, and security maturity with appropriate phasing and prioritization to achieve framework alignment while delivering practical security improvements."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Cybersecurity Framework Implementation Services in UAE | Security Standards"
        description="Expert cybersecurity framework services in Dubai and across UAE. Implement effective security programs based on leading frameworks with our comprehensive cybersecurity governance solutions with 22+ years of experience."
        url="/services/cybersecurity-frameworks"
        type="website"
      />
      <ServicePageLayout
        title="Cybersecurity Framework Implementation Services in UAE | Security Standards"
        category="UAE Cybersecurity Governance"
        description="Establish structured, effective security programs aligned with recognized standards. Our Cybersecurity Framework services help UAE organizations implement comprehensive security controls based on leading frameworks and regulatory requirements."
        heroIcon={<Shield className="h-8 w-8" />}
        overview="Implementing appropriate cybersecurity frameworks provides UAE organizations with structured approaches to managing security risks, meeting regulatory requirements, and protecting critical assets. Our UAE-focused Cybersecurity Framework services help organizations select, implement, and maintain security programs aligned with recognized standards through comprehensive assessment, strategic planning, and systematic implementation. We guide your organization through the complex process of translating framework requirements into practical security controls that protect your operations while satisfying compliance obligations. With deep understanding of both international best practices and UAE-specific regulatory landscape, we implement security frameworks tailored to your specific industry, organizational structure, and risk profile. Whether implementing UAE Information Assurance Standards, NESA requirements, ISO 27001, NIST CSF, or industry-specific frameworks, our expertise ensures your security program delivers both effective protection and compliance alignment for your UAE organization."
        steps={[
          {
            title: "UAE Framework Selection Assessment",
            description: "Evaluate regulatory requirements, industry standards, and organizational needs to identify appropriate security frameworks for your UAE organization, considering compliance obligations, business objectives, and operational context."
          },
          {
            title: "UAE-Specific Framework Gap Analysis",
            description: "Assess your current security controls against selected frameworks through comprehensive review, identifying gaps, strengths, and improvement opportunities with consideration for UAE regulatory landscape and business environment."
          },
          {
            title: "UAE Framework Implementation Strategy",
            description: "Develop strategic roadmap for enhancing security program based on framework requirements, establishing implementation approach, resource requirements, and timeline appropriate for UAE organizational context."
          },
          {
            title: "UAE-Appropriate Control Framework Development",
            description: "Create comprehensive security control catalog aligned with selected frameworks, providing unified structure that addresses multiple standards while remaining practical for UAE operational environment."
          },
          {
            title: "UAE Framework Governance Establishment",
            description: "Design security governance model with clear roles, responsibilities, oversight mechanisms, and decision processes for framework implementation and management, aligned with UAE organizational structures."
          },
          {
            title: "UAE Security Policy Architecture",
            description: "Develop comprehensive policy documentation aligned with framework requirements, establishing governance foundation with appropriate hierarchical structure, approval processes, and management practices for UAE organizations."
          },
          {
            title: "UAE Risk Assessment Methodology",
            description: "Implement structured approach for evaluating security risks in alignment with framework requirements, enabling consistent analysis, treatment, and monitoring appropriate for UAE threat landscape."
          },
          {
            title: "UAE Framework Control Implementation",
            description: "Deploy prioritized security measures across technical, administrative, and physical domains according to framework specifications, with practical guidance tailored to UAE technology environment and operational constraints."
          },
          {
            title: "UAE Framework Measurement Program",
            description: "Establish metrics, assessment methodologies, and reporting processes to evaluate security effectiveness against framework objectives, providing appropriate visibility to various UAE stakeholder groups."
          },
          {
            title: "UAE Compliance Documentation System",
            description: "Implement repository for security evidence, control documentation, and compliance artifacts aligned with framework requirements, streamlining audit preparation and regulatory reporting for UAE authorities."
          },
          {
            title: "UAE-Focused Security Awareness Program",
            description: "Develop targeted education initiatives addressing framework requirements with content appropriate for UAE workforce demographics, increasing understanding and promoting compliance across diverse organizational roles."
          },
          {
            title: "UAE Framework Maintenance Process",
            description: "Establish ongoing management approach for security program with regular assessments, gap remediation, and framework updates reflecting evolving UAE threat landscape and regulatory requirements."
          }
        ]}
        benefits={[
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Meet cybersecurity obligations under UAE Information Assurance Standards, NESA requirements, UAE PDPL, and sector-specific regulations through structured framework implementation aligned with specific compliance mandates."
          },
          {
            title: "UAE Security Program Standardization",
            content: "Transform ad-hoc security practices into comprehensive, structured program based on proven methodologies, ensuring consistent protection across UAE operations through systematic control implementation."
          },
          {
            title: "UAE Comprehensive Risk Reduction",
            content: "Address broad range of security threats through framework-based controls that provide defense-in-depth against sophisticated attacks targeting UAE organizations, reducing overall risk exposure."
          },
          {
            title: "UAE Business Partner Confidence",
            content: "Demonstrate robust security commitment to UAE government entities, regulated industries, and business partners through recognized frameworks, establishing trust and satisfying due diligence requirements."
          },
          {
            title: "UAE Security Resource Optimization",
            content: "Maximize effectiveness of limited cybersecurity resources through prioritized, systematic implementation approach that addresses highest risks first while providing roadmap for incremental improvement."
          },
          {
            title: "UAE Industry Alignment",
            content: "Implement security practices consistent with UAE sector peers and global standards, incorporating proven controls specifically relevant to your industry's threat landscape and regulatory environment."
          },
          {
            title: "UAE Third-Party Risk Management",
            content: "Establish structured approach for evaluating vendor security through framework-based assessment criteria, enabling consistent oversight of third-party risks in UAE's interconnected business ecosystem."
          },
          {
            title: "UAE Customer & Shareholder Assurance",
            content: "Build confidence among UAE customers, investors, and other stakeholders by demonstrating security commitment through structured program based on recognized standards with appropriate certifications."
          },
          {
            title: "UAE Organizational Awareness",
            content: "Foster security-conscious culture across UAE operations through clearly defined requirements, responsibilities, and expectations established by framework implementation and ongoing communications."
          },
          {
            title: "UAE Continuous Improvement Foundation",
            content: "Establish basis for ongoing security enhancement through framework-based assessment, gap identification, and systematic improvement process that evolves with changing UAE threat landscape."
          }
        ]}
        deliverables={[
          {
            title: "UAE Framework Selection Report",
            description: "Comprehensive analysis of applicable security frameworks with detailed evaluation of regulatory fit, implementation considerations, and recommendations tailored to your UAE organization's specific industry, size, and security objectives."
          },
          {
            title: "UAE Security Gap Assessment",
            description: "Detailed evaluation of your current security controls against selected frameworks with specific findings, compliance status, and improvement recommendations structured according to framework domains and UAE compliance requirements."
          },
          {
            title: "UAE Framework Implementation Roadmap",
            description: "Strategic plan for enhancing security program with phased initiatives, resource requirements, milestone definitions, and timeline estimates appropriate for UAE implementation constraints and organizational priorities."
          },
          {
            title: "UAE Control Framework Documentation",
            description: "Comprehensive security control catalog aligned with selected frameworks, providing detailed specifications, implementation guidance, and compliance mappings tailored to UAE operational environment and regulatory expectations."
          },
          {
            title: "UAE Security Policy Architecture",
            description: "Complete set of security policies, standards, procedures, and guidelines aligned with framework requirements, establishing governance foundation appropriately structured for your UAE organization's complexity and maturity."
          },
          {
            title: "UAE Risk Assessment Methodology",
            description: "Structured approach for evaluating security risks in alignment with framework requirements, including assessment templates, evaluation criteria, and treatment guidance specifically adapted for UAE threat landscape."
          },
          {
            title: "UAE Framework Control Implementation Guide",
            description: "Practical implementation instructions for framework-required controls, including technical configurations, administrative processes, and physical security measures appropriate for UAE technology environments and operational practices."
          },
          {
            title: "UAE Framework Compliance Dashboard",
            description: "Visual representation of security program maturity and compliance status against framework requirements, providing meaningful metrics and progress indicators for different UAE stakeholder audiences."
          },
          {
            title: "UAE Security Awareness Materials",
            description: "Educational resources addressing framework requirements with content appropriate for UAE workforce demographics, including presentation materials, role-specific guidance, and communication templates in relevant languages."
          },
          {
            title: "UAE Framework Maintenance Process",
            description: "Documented procedures for ongoing management of security program, including assessment schedules, update mechanisms, and improvement processes aligned with evolving UAE regulatory landscape and industry best practices."
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
            
            {/* Framework Shield */}
            <path d="M300 140 L330 150 L330 190 L300 200 L270 190 L270 150 Z" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="180" textAnchor="middle" fontSize="11" fill="#00E5FF">CSF</text>
            
            {/* Framework Components */}
            <rect x="220" y="220" width="160" height="60" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            
            <rect x="230" y="230" width="30" height="20" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="245" y="243" textAnchor="middle" fontSize="7" fill="#00E5FF">ID</text>
            
            <rect x="265" y="230" width="30" height="20" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="280" y="243" textAnchor="middle" fontSize="7" fill="#00E5FF">PR</text>
            
            <rect x="300" y="230" width="30" height="20" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="315" y="243" textAnchor="middle" fontSize="7" fill="#00E5FF">DT</text>
            
            <rect x="335" y="230" width="30" height="20" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="350" y="243" textAnchor="middle" fontSize="7" fill="#00E5FF">RS</text>
            
            <rect x="265" y="255" width="30" height="20" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="280" y="268" textAnchor="middle" fontSize="7" fill="#00E5FF">RC</text>
            
            <rect x="300" y="255" width="30" height="20" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="315" y="268" textAnchor="middle" fontSize="7" fill="#00E5FF">GV</text>
            
            {/* Connection to Framework */}
            <line x1="300" y1="200" x2="300" y2="220" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Frameworks */}
            <rect x="180" y="140" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="210" y="154" textAnchor="middle" fontSize="7" fill="#EB3443">UAE IA</text>
            
            <rect x="180" y="165" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="210" y="179" textAnchor="middle" fontSize="7" fill="#EB3443">NESA</text>
            
            <rect x="180" y="190" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="210" y="204" textAnchor="middle" fontSize="7" fill="#EB3443">UAE PDPL</text>
            
            {/* Global Frameworks */}
            <rect x="360" y="140" width="60" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="390" y="154" textAnchor="middle" fontSize="7" fill="#00B2A9">ISO 27001</text>
            
            <rect x="360" y="165" width="60" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="390" y="179" textAnchor="middle" fontSize="7" fill="#00B2A9">NIST CSF</text>
            
            <rect x="360" y="190" width="60" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="390" y="204" textAnchor="middle" fontSize="7" fill="#00B2A9">CIS Controls</text>
            
            {/* Framework Connections */}
            <path d="M240 150 L270 150" stroke="#EB3443" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M240 175 L270 170" stroke="#EB3443" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M240 200 L270 190" stroke="#EB3443" strokeWidth="1" strokeDasharray="2 1"/>
            
            <path d="M360 150 L330 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M360 175 L330 170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M360 200 L330 190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            
            {/* Implementation Cycle Animation */}
            <circle cx="300" cy="260" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="245;280;315;350;315;280;245" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="240;240;240;240;265;265;240" dur="5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Compliance Documentation */}
            <rect x="230" y="300" width="140" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="320" textAnchor="middle" fontSize="11" fill="#00B2A9">UAE Compliance</text>
            
            {/* Documentation Connection */}
            <path d="M300 280 L300 300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Cybersecurity Frameworks</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE GRC Automation",
            link: "/services/grc-automation"
          },
          {
            title: "UAE Risk Management",
            link: "/services/risk-management"
          },
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE IT Security Audit",
            link: "/services/it-security-audit"
          },
          {
            title: "UAE Compliance Services",
            link: "/services/compliance"
          },
          {
            title: "UAE Policy Development",
            link: "/services/policy-development"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Cybersecurity Frameworks in UAE FAQs"
        subtitle="Common questions about security framework implementation for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default CybersecurityFrameworksPage;