import { 
  FileSearch, 
  ShieldCheck, 
  ListChecks, 
  FileText,
  AlertTriangle,
  Check
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const ItSecurityAuditPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "IT Security Audit Services in UAE",
    description: "Expert IT security audit services in Dubai and across UAE. Identify security gaps, ensure compliance, and strengthen your security posture with our comprehensive audit services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Information Technology Security Audit",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring security posture evaluation"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "How does an IT security audit differ from a vulnerability assessment for UAE organizations?",
      answer: "While related, IT security audits and vulnerability assessments serve different purposes for UAE organizations: A security audit is a comprehensive evaluation of your entire security program against established criteria, frameworks, or regulatory requirements like UAE IA Standards or NESA. It examines policies, procedures, technical controls, and human elements to provide a holistic view of your security posture. A vulnerability assessment is more technically focused, specifically identifying and cataloging technical weaknesses in systems, networks, and applications that could be exploited. It's narrower in scope but often goes deeper into technical analysis. For UAE organizations, security audits typically address governance aspects and regulatory alignment (often mandatory for regulated sectors), while vulnerability assessments focus on identifying specific technical weaknesses. Most mature UAE security programs incorporate both: regular vulnerability assessments as part of continuous monitoring, and periodic security audits for comprehensive program evaluation."
    },
    {
      question: "What security frameworks are most relevant for IT security audits in the UAE?",
      answer: "UAE organizations typically need to consider several frameworks during security audits, based on their sector and operations: 1) UAE Information Assurance (IA) Standards - mandatory for government entities and critical infrastructure, 2) UAE National Electronic Security Authority (NESA) Standards - required for critical information infrastructure, 3) ISO 27001 - internationally recognized information security standard widely adopted in UAE, 4) UAE Central Bank Cybersecurity Framework - for financial institutions, 5) HIPAA/HITECH security requirements - for healthcare organizations handling US patient data, 6) PCI DSS - for organizations processing payment card data, 7) NIST Cybersecurity Framework - used by many UAE organizations as a voluntary framework, 8) CIS Controls - practical security guidance preferred by many technical teams. For most UAE organizations, a hybrid approach is most effective - using UAE national frameworks as the baseline and incorporating relevant elements from international standards based on your specific business context."
    },
    {
      question: "How frequently should UAE organizations conduct IT security audits?",
      answer: "For UAE organizations, security audit frequency should be determined by several factors: 1) Regulatory requirements - some UAE frameworks mandate specific audit frequencies (e.g., annual audits for critical infrastructure under NESA), 2) Industry standards - sectors like financial services often require more frequent audits, 3) Risk profile - organizations handling sensitive data or facing higher threats need more frequent evaluation, 4) Operational changes - significant infrastructure or process changes should trigger reassessment, 5) Previous audit findings - organizations with significant issues should audit more frequently until remediated. As a general guideline for UAE organizations: Comprehensive security audits should be conducted at least annually. Critical infrastructure entities may require semi-annual audits. High-risk systems might need quarterly focused reviews. Continuous monitoring should supplement these formal audits. Additionally, many UAE compliance frameworks require annual third-party assessments, making this a practical minimum frequency for regulated entities."
    },
    {
      question: "What should UAE organizations expect in an IT security audit report?",
      answer: "A comprehensive IT security audit report for UAE organizations typically includes: 1) Executive Summary - business-focused overview of findings and key risks tailored for UAE executive audiences, 2) Scope and Methodology - clear documentation of what was assessed and how, referencing relevant UAE frameworks, 3) Findings and Observations - detailed description of identified issues with risk ratings calibrated to UAE business context, 4) Regulatory Compliance Status - specific analysis of compliance with applicable UAE frameworks (IA, NESA, PDPL, etc.), 5) Risk Assessment - evaluation of identified issues in context of your UAE business impact, 6) Root Cause Analysis - examination of underlying governance or process issues, 7) Remediation Recommendations - specific, actionable guidance for addressing findings, with UAE regulatory considerations, 8) Implementation Roadmap - prioritized action plan with timeframes appropriate for UAE implementation, 9) Evidence Appendix - supporting documentation for findings and testing performed. The report should balance technical details with business context and provide clear, actionable guidance appropriate for your UAE organization's security maturity and resources."
    },
    {
      question: "How can UAE organizations prepare for an IT security audit?",
      answer: "UAE organizations can effectively prepare for security audits by: 1) Gathering documentation - collect all security policies, procedures, previous audit reports, and evidence of security activities with particular attention to UAE-required documentation, 2) Reviewing framework requirements - understand the specific requirements of relevant UAE frameworks (IA, NESA, etc.) and prepare evidence of compliance, 3) Conducting self-assessment - perform internal reviews against audit criteria to identify and address obvious issues before the formal audit, 4) Preparing stakeholders - brief key personnel on the audit process, their roles, and potential interview topics with attention to UAE audit expectations, 5) Organizing evidence - establish a structured system for efficiently providing requested documentation to auditors, 6) Addressing known issues - remediate previously identified problems or prepare justification for exceptions, 7) Reviewing access controls - ensure auditors will have appropriate system access with proper authorization, 8) Allocating resources - ensure staff availability during the audit period, particularly those with institutional knowledge, 9) Planning logistics - arrange needed facilities and resources for the audit team. Thorough preparation not only improves audit results but also demonstrates security program maturity to UAE regulators and assessors."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="IT Security Audit Services in UAE | Compliance & Security Assessment"
        description="Expert IT security audit services in Dubai and across UAE. Identify security gaps, ensure compliance, and strengthen your security posture with our comprehensive audit services with 22+ years of experience."
        url="/services/it-security-audit"
        type="website"
      />
      <ServicePageLayout
        title="IT Security Audit Services in UAE | Compliance & Security Assessment"
        category="UAE IT Security & Audit Services"
        description="Identify security gaps, ensure compliance with UAE regulations, and strengthen your security posture with our comprehensive IT security audit services tailored for UAE organizations."
        heroIcon={<FileSearch className="h-8 w-8" />}
        overview="Our UAE-focused IT Security Audit provides a systematic evaluation of your organization's IT security controls, processes, and technologies against UAE regulatory requirements, industry standards, and best practices. Through a combination of automated tools, manual testing, and expert analysis by our Dubai-based team, we identify security vulnerabilities, compliance gaps with UAE frameworks, and control weaknesses, delivering actionable recommendations to strengthen your security posture and protect your critical assets while ensuring alignment with UAE's unique regulatory landscape. With deep understanding of UAE Information Assurance Standards, NESA requirements, and sector-specific regulations, our audit approach combines global security methodologies with UAE-specific compliance considerations."
        steps={[
          {
            title: "UAE-Specific Audit Scoping & Planning",
            description: "Collaborative definition of audit scope, objectives, and methodology to align with your UAE business priorities and specific regulatory requirements including UAE IA Standards, NESA, and sector-specific regulations relevant to your operations."
          },
          {
            title: "UAE Security Documentation Review",
            description: "Thorough examination of security policies, procedures, standards, and guidelines to evaluate governance effectiveness and documentation completeness against UAE regulatory expectations and documentation requirements, including Arabic language requirements where applicable."
          },
          {
            title: "UAE-Aligned Technical Control Assessment",
            description: "Detailed evaluation of implemented technical controls across network security, access management, endpoint protection, and data security domains with specific focus on controls required by UAE regulatory frameworks and alignment with UAE threat landscape."
          },
          {
            title: "UAE Administrative Control Evaluation",
            description: "Assessment of security management processes, governance structures, roles and responsibilities, and security awareness practices against UAE best practices and regulatory requirements to identify administrative control gaps and improvement opportunities."
          },
          {
            title: "UAE Security Architecture Review",
            description: "Analysis of security architecture design, implementation, and integration to evaluate defense-in-depth strategies, security zoning, and protective controls against UAE security architecture frameworks and regional threat considerations."
          },
          {
            title: "UAE Vulnerability Assessment Integration",
            description: "Targeted vulnerability scanning and security testing to identify technical weaknesses in systems, applications, and infrastructure with focus on vulnerabilities particularly relevant to UAE organizations and regional threat actors."
          },
          {
            title: "UAE Compliance Gap Analysis",
            description: "Detailed comparison of existing security controls against applicable UAE regulatory requirements and industry frameworks to identify compliance gaps, remediation needs, and alignment with UAE legal and regulatory expectations."
          },
          {
            title: "UAE Security Configuration Review",
            description: "Detailed evaluation of system configurations, hardening standards, security baselines, and operational security practices against UAE security configuration benchmarks and requirements specified in UAE regulatory frameworks."
          },
          {
            title: "UAE-Contextual Findings Development",
            description: "Comprehensive analysis of collected evidence and identified issues to formulate clear, actionable findings with appropriate risk context and impact assessment relevant to UAE business and regulatory environment."
          },
          {
            title: "UAE Remediation Roadmap Creation",
            description: "Development of prioritized improvement recommendations with detailed remediation guidance, implementation considerations, and resource requirements specifically tailored to UAE organizational environments and regulatory timelines."
          }
        ]}
        benefits={[
          {
            title: "UAE Comprehensive Security Visibility",
            content: "Gain a complete, objective view of your security program strengths and weaknesses across technical, administrative, and physical domains with specific insights into UAE regulatory compliance status and regional security considerations."
          },
          {
            title: "UAE Regulatory Compliance Validation",
            content: "Verify compliance with applicable UAE security regulations and industry requirements through systematic evaluation against UAE IA Standards, NESA requirements, UAE PDPL, and other relevant frameworks, reducing regulatory risk and preparing for formal assessments."
          },
          {
            title: "UAE-Prioritized Risk Reduction",
            content: "Identify and address the most critical security risks based on UAE threat landscape and organizational impact, enabling efficient use of security resources and focused remediation efforts that deliver maximum risk reduction within UAE context."
          },
          {
            title: "UAE Security Investment Validation",
            content: "Evaluate the effectiveness and coverage of existing security controls and technologies to validate previous investments and inform future security spending decisions appropriate for UAE market conditions and availability."
          },
          {
            title: "UAE-Aligned Security Roadmap",
            content: "Develop a strategic improvement plan based on audit findings that aligns security initiatives with business objectives and UAE regulatory requirements, providing a clear path to enhanced security posture appropriate for UAE organizations."
          },
          {
            title: "UAE Independent Expert Assessment",
            content: "Benefit from unbiased, third-party evaluation of your security program by experienced security professionals with deep understanding of UAE regulatory environment, regional threats, and security best practices appropriate for UAE organizations."
          },
          {
            title: "UAE Stakeholder Confidence",
            content: "Demonstrate security commitment to UAE regulatory authorities, business partners, customers, and other stakeholders through formal, independent security assessment and verification aligned with UAE expectations and market requirements."
          },
          {
            title: "UAE Security Awareness Improvement",
            content: "Increase organizational security consciousness and understanding through the audit process, interviews, and findings presentations, building a stronger security culture appropriate for the UAE business environment and workforce diversity."
          },
          {
            title: "UAE Executive Risk Visibility",
            content: "Provide UAE leadership with clear insights into security risks, compliance status, and improvement priorities through executive-level reporting tailored to UAE business communication styles and executive expectations."
          }
        ]}
        deliverables={[
          {
            title: "UAE-Focused Executive Summary Report",
            description: "Business-oriented overview of key audit findings, risk analysis, and strategic recommendations designed for UAE executive audiences with clear articulation of security posture, compliance status, and improvement priorities in UAE business context."
          },
          {
            title: "UAE Detailed Audit Findings Report",
            description: "Comprehensive documentation of all audit results including methodology, testing procedures, detailed findings, evidence, risk ratings, and specific control recommendations with particular focus on UAE regulatory requirements and compliance status."
          },
          {
            title: "UAE Regulatory Compliance Assessment",
            description: "Detailed analysis of your security program against applicable UAE regulatory frameworks including UAE IA Standards, NESA, UAE PDPL, and sector-specific requirements with clear compliance status, gaps, and remediation guidance for UAE regulatory alignment."
          },
          {
            title: "UAE Security Control Gap Analysis",
            description: "Systematic comparison of implemented security controls against industry frameworks and best practices with detailed identification of control gaps, weaknesses, and improvement opportunities specifically relevant to UAE security requirements."
          },
          {
            title: "UAE Technical Vulnerability Report",
            description: "Detailed documentation of identified technical vulnerabilities including severity ratings, exploitation potential, affected systems, verification methods, and remediation guidance tailored to UAE organization's technical environment and capabilities."
          },
          {
            title: "UAE Security Architecture Assessment",
            description: "Analysis of security architecture design principles, implementation effectiveness, and defense-in-depth strategies with recommendations for architectural improvements aligned with UAE security architecture requirements and regional threat considerations."
          },
          {
            title: "UAE-Appropriate Remediation Roadmap",
            description: "Prioritized improvement plan with clear remediation actions, resource requirements, implementation timelines, and progress metrics designed for practical implementation in UAE organizational environments and alignment with UAE regulatory timelines."
          },
          {
            title: "UAE Security Metrics & Benchmarking",
            description: "Comparative analysis of your security program maturity against industry peers and standards with recommended security metrics for ongoing measurement and governance reporting appropriate for UAE business context and regulatory expectations."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Audit Document */}
            <rect x="200" y="100" width="200" height="250" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* Document Header */}
            <rect x="220" y="120" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="300" y="140" textAnchor="middle" fontSize="14" fill="#00E5FF">UAE Security Audit</text>
            
            {/* UAE Element */}
            <rect x="120" y="100" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="145" y="120" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="170" y1="115" x2="200" y2="135" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Checklist Items */}
            <rect x="220" y="160" width="160" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <text x="235" y="180" fontSize="10" fill="#00E5FF">1. Documentation Review</text>
            <circle cx="365" cy="175" r="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M360 175 L365 180 L370 170" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
            
            <rect x="220" y="200" width="160" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <text x="235" y="220" fontSize="10" fill="#00E5FF">2. Technical Controls</text>
            <circle cx="365" cy="215" r="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M360 215 L365 220 L370 210" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
            
            <rect x="220" y="240" width="160" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <text x="235" y="260" fontSize="10" fill="#00E5FF">3. Administrative Controls</text>
            <circle cx="365" cy="255" r="8" fill="#0A1024" stroke="#FF5252" strokeWidth="1"/>
            <text x="365" y="259" textAnchor="middle" fontSize="10" fill="#FF5252">!</text>
            
            <rect x="220" y="280" width="160" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
            <text x="235" y="300" fontSize="10" fill="#00E5FF">4. Compliance Analysis</text>
            <circle cx="365" cy="295" r="8" fill="#0A1024" stroke="#FF5252" strokeWidth="1"/>
            <text x="365" y="299" textAnchor="middle" fontSize="10" fill="#FF5252">!</text>
            
            {/* UAE Regulatory Frameworks */}
            <rect x="450" y="120" width="80" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="490" y="136" textAnchor="middle" fontSize="10" fill="#EB3443">UAE IA</text>
            
            <rect x="450" y="155" width="80" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="490" y="171" textAnchor="middle" fontSize="10" fill="#EB3443">NESA</text>
            
            <rect x="450" y="190" width="80" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="490" y="206" textAnchor="middle" fontSize="10" fill="#EB3443">UAE PDPL</text>
            
            <rect x="450" y="225" width="80" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="490" y="241" textAnchor="middle" fontSize="10" fill="#EB3443">ISO 27001</text>
            
            {/* Connection Lines */}
            <line x1="400" y1="130" x2="450" y2="130" stroke="#EB3443" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="400" y1="165" x2="450" y2="165" stroke="#EB3443" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="400" y1="200" x2="450" y2="200" stroke="#EB3443" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="400" y1="235" x2="450" y2="235" stroke="#EB3443" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Animated Connection Elements */}
            <circle cx="425" cy="130" r="3" fill="#EB3443">
              <animate attributeName="cx" values="400;450" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="425" cy="165" r="3" fill="#EB3443">
              <animate attributeName="cx" values="400;450" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="425" cy="200" r="3" fill="#EB3443">
              <animate attributeName="cx" values="400;450" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="425" cy="235" r="3" fill="#EB3443">
              <animate attributeName="cx" values="400;450" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Audit Process Elements */}
            <circle cx="120" cy="160" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="120" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Plan</text>
            <text x="120" y="165" textAnchor="middle" fontSize="10" fill="#00E5FF">Audit</text>
            
            <circle cx="120" cy="220" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="120" y="215" textAnchor="middle" fontSize="10" fill="#00E5FF">Conduct</text>
            <text x="120" y="225" textAnchor="middle" fontSize="10" fill="#00E5FF">Audit</text>
            
            <circle cx="120" cy="280" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="120" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Report</text>
            <text x="120" y="285" textAnchor="middle" fontSize="10" fill="#00E5FF">Findings</text>
            
            {/* Connection Lines */}
            <line x1="145" y1="160" x2="200" y2="160" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="145" y1="220" x2="200" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="145" y1="280" x2="200" y2="280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Animated Process Elements */}
            <circle cx="172" cy="160" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="145;200" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="172" cy="220" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="145;200" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="172" cy="280" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="145;200" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Roadmap Element */}
            <rect x="280" y="330" width="200" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="380" y="355" textAnchor="middle" fontSize="12" fill="#00E5FF">UAE Remediation Roadmap</text>
            
            {/* Main Title */}
            <text x="300" y="80" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE IT Security Audit</text>
            
            {/* Small Flag Icons */}
            <rect x="120" y="330" width="20" height="10" fill="#00B2A9"/>
            <rect x="120" y="340" width="20" height="10" fill="#FFFFFF"/>
            <rect x="120" y="350" width="20" height="10" fill="#000000"/>
            <rect x="120" y="360" width="20" height="10" fill="#FF0000"/>
            <text x="150" y="350" textAnchor="start" fontSize="10" fill="#00E5FF">UAE Focused</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Internal Audit",
            link: "/services/internal-audit"
          },
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE Cloud Security Assessment",
            link: "/services/cloud-security"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="IT Security Audit in UAE FAQs"
        subtitle="Common questions about IT security audits for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default ItSecurityAuditPage;