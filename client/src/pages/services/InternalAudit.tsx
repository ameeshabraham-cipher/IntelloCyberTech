import { 
  FileSearch, 
  CheckSquare, 
  ClipboardList, 
  BarChart2,
  ArrowRightLeft,
  LineChart
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const InternalAuditPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Internal Audit & Gap Analysis Services in UAE",
    description: "Expert internal audit and gap analysis services in Dubai and UAE for compliance and security gap identification. Specializing in ISO 27001, UAE IA, NESA, and regulatory requirements with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Internal Audit and Gap Analysis",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations seeking security and compliance assessment"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is the difference between internal audit and gap analysis for UAE organizations?",
      answer: "While related, internal audit and gap analysis serve different purposes for UAE organizations: Internal audit is a comprehensive, systematic evaluation of an organization's controls, processes, and governance against established criteria. It's typically conducted by independent auditors and provides assurance on control effectiveness and compliance status. Gap analysis is more targeted, specifically identifying differences between an organization's current state and desired state (often defined by a standard like ISO 27001, UAE IA, or NESA). It focuses on identifying specific deficiencies rather than providing overall assurance. In UAE organizations, these approaches are often used together - gap analysis identifies specific compliance deficiencies against UAE regulations, while internal audit provides a broader assessment of governance effectiveness."
    },
    {
      question: "Which compliance frameworks are most relevant for internal audits in UAE organizations?",
      answer: "UAE organizations typically need to consider multiple frameworks during internal audits, depending on their industry and operations: 1) UAE Information Assurance (IA) Standards - mandatory for government entities and critical infrastructure, 2) UAE National Electronic Security Authority (NESA) Standards - required for critical information infrastructure, 3) ISO 27001 - internationally recognized information security standard widely adopted in UAE, 4) UAE Personal Data Protection Law (PDPL) - new privacy requirements applicable to most organizations, 5) DIFC Data Protection Law - for organizations in Dubai International Financial Centre, 6) ADGM Data Protection Regulations - for Abu Dhabi Global Market entities, 7) UAE Central Bank Cybersecurity Framework - for financial institutions, 8) Sector-specific regulations (healthcare, telecommunications, insurance), and 9) International standards applicable to UAE operations (GDPR, PCI DSS, etc.). The specific combination depends on your organization's regulatory landscape."
    },
    {
      question: "How often should UAE organizations conduct internal audits and gap analyses?",
      answer: "The frequency of internal audits and gap analyses for UAE organizations should be determined by several factors: 1) Regulatory requirements - some UAE frameworks (like NESA standards) mandate specific audit frequencies, 2) Organizational changes - significant modifications to systems, processes, or organizational structure should trigger reassessment, 3) Risk profile - higher-risk organizations or those processing sensitive data should conduct more frequent audits, 4) Compliance status - organizations with previously identified significant gaps should reassess more frequently. As a general guideline for UAE organizations: Comprehensive internal audits should typically be conducted annually. Gap analyses against specific frameworks should be performed semi-annually or quarterly for high-risk areas. Continuous monitoring and spot-checks should supplement these formal assessments. Additionally, before pursuing certifications like ISO 27001, a comprehensive gap analysis should be conducted to assess readiness."
    },
    {
      question: "What should UAE organizations look for when selecting an internal audit partner?",
      answer: "When selecting an internal audit partner in the UAE, organizations should consider: 1) UAE-specific regulatory expertise across relevant frameworks (UAE IA, NESA, ISO 27001, PDPL), 2) Industry-specific experience in your sector (financial, healthcare, government, etc.), 3) Demonstrated understanding of UAE's unique business and compliance environment, 4) Qualified professionals with relevant certifications (CISA, CIA, CRISC, ISO 27001 Lead Auditor), 5) Independence and objectivity to ensure unbiased assessment, 6) Proven methodology and tools adapted to UAE regulatory context, 7) Clear reporting capabilities with executive-friendly dashboards, 8) Practical, actionable recommendations that consider UAE business environment, 9) Ability to provide remediation support beyond just identifying issues, and 10) References from other UAE organizations in similar compliance situations. A quality audit partner should function as a trusted advisor rather than just a compliance checker."
    },
    {
      question: "How can internal audit findings be effectively used to improve UAE organizational security and compliance?",
      answer: "To maximize the value of internal audit findings in UAE organizations: 1) Create a structured remediation program with clear ownership and timelines, 2) Prioritize findings based on risk impact to the organization rather than just audit severity, 3) Integrate findings into your existing risk management processes and governance reporting, 4) Develop UAE-compliant policies and procedures that directly address identified gaps, 5) Implement regular progress tracking and status reporting to executive leadership, 6) Conduct targeted follow-up reviews to verify remediation effectiveness, 7) Use findings to inform security awareness training programs customized to UAE context, 8) Leverage results to prioritize security investments and resource allocation, 9) Share sanitized findings with relevant teams to promote organizational learning, and 10) Establish continuous improvement processes that prevent similar issues in future. When properly managed, audit findings become strategic tools for enhancing your organization's security and compliance posture rather than just compliance checkboxes."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Internal Audit & Gap Analysis Services UAE | Compliance Assessment"
        description="Expert internal audit and gap analysis services in Dubai and UAE for compliance and security gap identification. Specializing in ISO 27001, UAE IA, NESA, and regulatory requirements with 22+ years of experience."
        url="/services/internal-audit"
        type="website"
      />
      <ServicePageLayout
        title="Internal Audit & Gap Analysis Services UAE | Compliance Assessment"
        category="UAE Governance & Compliance"
        description="Identify compliance and security gaps with our comprehensive internal audit and gap analysis services before they become regulatory issues or vulnerabilities. Our UAE-focused audit approach addresses ISO 27001, UAE IA, NESA, and other critical UAE regulatory requirements."
        heroIcon={<FileSearch className="h-8 w-8" />}
        overview="Our UAE-specialized Internal Audit & Gap Analysis services provide a systematic evaluation of your organization's security controls, compliance practices, and IT operations against UAE-specific regulatory requirements, international standards, and industry best practices. We have extensive experience with UAE Information Assurance (IA) Standards, NESA requirements, ISO frameworks, and UAE sector-specific regulations. Through a detailed assessment methodology tailored to the UAE regulatory landscape, we identify gaps, weaknesses, and improvement opportunities, delivering actionable recommendations that strengthen your security posture and ensure alignment with relevant UAE compliance frameworks. Our approach combines global audit methodologies with deep understanding of UAE's unique regulatory environment to provide a comprehensive assessment that addresses both international standards and UAE-specific requirements."
        steps={[
          {
            title: "UAE-Focused Audit Scope & Planning",
            description: "Collaborative definition of the audit scope, objectives, and methodology to ensure alignment with your UAE organizational priorities and specific UAE compliance requirements like UAE IA, NESA, or UAE PDPL."
          },
          {
            title: "UAE Regulatory Framework Selection",
            description: "Selection of appropriate control frameworks relevant to UAE organizations (e.g., UAE IA Standards, NESA Controls, ISO 27001, UAE PDPL) to guide the assessment process and provide a structured evaluation approach specific to your UAE regulatory obligations."
          },
          {
            title: "UAE-Aligned Documentation Review",
            description: "Thorough examination of existing policies, procedures, standards, and guidelines to evaluate documentation completeness and alignment with selected UAE-relevant frameworks, including requirements for Arabic documentation where applicable."
          },
          {
            title: "UAE Control Assessment",
            description: "Detailed evaluation of implemented controls through interviews, observations, and evidence collection to determine design and operational effectiveness against UAE regulatory requirements and industry standards relevant to UAE operations."
          },
          {
            title: "UAE-Specific Gap Identification",
            description: "Systematic identification of gaps between current practices and UAE framework requirements, with clear documentation of findings and supporting evidence particularly focused on UAE-specific compliance elements often missed in generic assessments."
          },
          {
            title: "UAE Contextual Risk Evaluation",
            description: "Assessment of identified gaps in terms of risk impact and likelihood within the UAE business and regulatory context to prioritize remediation efforts based on business risk specific to UAE operations and regulatory landscape."
          },
          {
            title: "UAE-Tailored Remediation Planning",
            description: "Development of a structured remediation roadmap with specific recommendations, timelines, and resource requirements to address identified gaps, incorporating UAE-appropriate solutions that align with local regulatory expectations and business practices."
          }
        ]}
        benefits={[
          {
            title: "UAE Proactive Risk Management",
            content: "Identify and address security and compliance gaps before they can be exploited or result in regulatory issues and penalties from UAE authorities, protecting your organization from potential UAE regulatory enforcement actions."
          },
          {
            title: "UAE Compliance Readiness",
            content: "Prepare for formal compliance assessments and certifications against UAE regulatory frameworks by identifying and addressing gaps in advance, streamlining the certification process for UAE IA, NESA, ISO 27001, and other relevant standards."
          },
          {
            title: "UAE-Focused Prioritized Improvements",
            content: "Focus security and compliance investments on the most critical areas through risk-based prioritization of remediation activities that consider UAE-specific regulatory priorities and enforcement patterns."
          },
          {
            title: "Enhanced UAE Governance",
            content: "Strengthen your overall governance, risk, and compliance program with a clear understanding of current maturity and improvement opportunities specifically tailored to the UAE's unique regulatory landscape and business environment."
          },
          {
            title: "UAE-Calibrated Objective Assessment",
            content: "Benefit from an independent, unbiased evaluation of your security and compliance posture with fresh perspectives on control effectiveness that incorporates deep understanding of UAE regulatory nuances and cultural considerations."
          },
          {
            title: "UAE Regulatory Relationship Management",
            content: "Build positive relationships with UAE regulatory authorities by demonstrating proactive compliance efforts and commitment to meeting UAE-specific requirements through comprehensive internal audit programs and evidence of continuous improvement."
          }
        ]}
        deliverables={[
          {
            title: "UAE-Focused Audit Scope & Methodology Document",
            description: "Detailed documentation of the audit scope, objectives, methodology, and the control frameworks used for the assessment, with specific mapping to UAE regulatory requirements and compliance obligations relevant to your organization's operations."
          },
          {
            title: "UAE Regulatory Gap Assessment Report",
            description: "Comprehensive report detailing identified gaps, control weaknesses, and compliance deficiencies with supporting evidence and observations, specifically highlighting UAE regulatory compliance status across applicable frameworks and prioritized by UAE enforcement risk."
          },
          {
            title: "UAE Control Maturity Matrix",
            description: "Visual representation of control maturity across different domains with benchmark comparisons against UAE industry standards, best practices, and regulatory expectations, providing clear visibility into your organization's standing in the UAE market."
          },
          {
            title: "UAE Risk-Rated Findings Register",
            description: "Prioritized inventory of audit findings with risk ratings, potential impacts, and clear traceability to UAE framework requirements, enabling focused remediation efforts that align with UAE regulatory priorities and business context."
          },
          {
            title: "UAE Compliance Readiness Dashboard",
            description: "Executive-level dashboard showing compliance readiness status across multiple UAE frameworks and regulatory requirements, with visual indicators of compliance levels and progress tracking for board and leadership reporting."
          },
          {
            title: "UAE-Aligned Remediation Roadmap",
            description: "Structured implementation plan with short, medium, and long-term actions prioritized by risk reduction value and implementation complexity, tailored to UAE regulatory timelines and enforcement priorities with practical, culturally-appropriate solutions."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Audit Checklist */}
            <rect x="180" y="100" width="240" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* Document Header */}
            <path d="M180 130 L420 130" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="120" textAnchor="middle" fontSize="14" fill="#00E5FF">UAE Gap Analysis</text>
            
            {/* Checklist Items */}
            <line x1="200" y1="160" x2="400" y2="160" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <line x1="200" y1="190" x2="400" y2="190" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <line x1="200" y1="220" x2="400" y2="220" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <line x1="200" y1="250" x2="400" y2="250" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <line x1="200" y1="280" x2="400" y2="280" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            
            {/* Compliance Checkmarks */}
            <rect x="210" y="145" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1"/>
            <path d="M215 155 L220 160 L230 150" stroke="#00B2A9" strokeWidth="1.5" fill="none">
              <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze"/>
            </path>
            
            <rect x="210" y="175" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1"/>
            <path d="M215 185 L220 190 L230 180" stroke="#00B2A9" strokeWidth="1.5" fill="none" opacity="0">
              <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1s" fill="freeze"/>
            </path>
            
            <rect x="210" y="205" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1"/>
            <rect x="210" y="235" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1"/>
            <rect x="210" y="265" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Compliance Requirements */}
            <text x="270" y="157" fontSize="12" fill="#00E5FF">UAE Policy Documentation</text>
            <text x="270" y="187" fontSize="12" fill="#00E5FF">Access Controls</text>
            <text x="270" y="217" fontSize="12" fill="#00E5FF">Incident Response</text>
            <text x="270" y="247" fontSize="12" fill="#00E5FF">UAE Risk Assessment</text>
            <text x="270" y="277" fontSize="12" fill="#00E5FF">Security Monitoring</text>
            
            {/* Gap Indicators */}
            <rect x="350" y="205" width="30" height="20" rx="10" fill="#FF5252" fillOpacity="0.5">
              <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze"/>
            </rect>
            <text x="365" y="219" textAnchor="middle" fontSize="12" fill="#FF5252">Gap</text>
            
            <rect x="350" y="235" width="30" height="20" rx="10" fill="#FF5252" fillOpacity="0.5">
              <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze"/>
            </rect>
            <text x="365" y="249" textAnchor="middle" fontSize="12" fill="#FF5252">Gap</text>
            
            <rect x="350" y="265" width="30" height="20" rx="10" fill="#FF5252" fillOpacity="0.5">
              <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.5s" fill="freeze"/>
            </rect>
            <text x="365" y="279" textAnchor="middle" fontSize="12" fill="#FF5252">Gap</text>
            
            {/* Gap Analysis Chart */}
            <rect x="150" y="320" width="300" height="50" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            
            <rect x="170" y="335" width="40" height="20" fill="#00B2A9" fillOpacity="0.7"/>
            <rect x="220" y="335" width="40" height="20" fill="#00B2A9" fillOpacity="0.7"/>
            <rect x="270" y="335" width="40" height="20" fill="#FF5252" fillOpacity="0.5"/>
            <rect x="320" y="335" width="40" height="20" fill="#FF5252" fillOpacity="0.5"/>
            <rect x="370" y="335" width="40" height="20" fill="#FF5252" fillOpacity="0.5"/>
            
            <text x="300" y="370" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE Compliance Gap Analysis</text>
            
            {/* UAE Frameworks */}
            <circle cx="130" cy="130" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="130" y="133" textAnchor="middle" fontSize="8" fill="#00E5FF">UAE IA</text>
            
            <circle cx="130" cy="190" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="130" y="193" textAnchor="middle" fontSize="8" fill="#00E5FF">NESA</text>
            
            <circle cx="130" cy="250" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="130" y="253" textAnchor="middle" fontSize="8" fill="#00E5FF">ISO 27001</text>
            
            <circle cx="130" cy="310" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="130" y="313" textAnchor="middle" fontSize="8" fill="#00E5FF">UAE PDPL</text>
            
            {/* Connection Lines */}
            <line x1="155" y1="130" x2="180" y2="140" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="155" y1="190" x2="180" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="155" y1="250" x2="180" y2="240" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="155" y1="310" x2="180" y2="280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Roadmap */}
            <circle cx="470" cy="160" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="470" y="157" textAnchor="middle" fontSize="8" fill="#00E5FF">Short</text>
            <text x="470" y="167" textAnchor="middle" fontSize="8" fill="#00E5FF">Term</text>
            
            <circle cx="470" cy="220" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="470" y="217" textAnchor="middle" fontSize="8" fill="#00E5FF">Medium</text>
            <text x="470" y="227" textAnchor="middle" fontSize="8" fill="#00E5FF">Term</text>
            
            <circle cx="470" cy="280" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="470" y="277" textAnchor="middle" fontSize="8" fill="#00E5FF">Long</text>
            <text x="470" y="287" textAnchor="middle" fontSize="8" fill="#00E5FF">Term</text>
            
            {/* Connection Lines */}
            <line x1="420" y1="160" x2="445" y2="160" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="420" y1="220" x2="445" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="420" y1="280" x2="445" y2="280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Animated Flow */}
            <circle cx="170" cy="130" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="155;180" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="170" cy="190" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="155;180" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="170" cy="250" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="155;180" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="170" cy="310" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="155;180" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="430" cy="160" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="420;445" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="430" cy="220" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="420;445" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="430" cy="280" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="420;445" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Title */}
            <text x="300" y="80" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Internal Audit & Gap Analysis</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE IA Compliance",
            link: "/services/uae-ia"
          },
          {
            title: "UAE NESA Compliance",
            link: "/services/uae-nesa"
          },
          {
            title: "ISO 27001 Certification",
            link: "/services/iso27001"
          },
          {
            title: "Security Assessment",
            link: "/services/security-assessment"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Internal Audit in UAE FAQs"
        subtitle="Common questions about internal audit and gap analysis for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default InternalAuditPage;