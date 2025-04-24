import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Cpu, Shield, FileText, AlertTriangle, Code, Search, Check, Settings } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const AiCompliancePage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "AI Compliance Services in UAE",
    description: "Expert AI compliance services in Dubai and across UAE. Ensure your AI systems meet regulatory requirements and ethical standards with our comprehensive AI governance and compliance solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Artificial Intelligence Compliance",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations developing or deploying AI systems"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What AI compliance requirements apply to UAE organizations?",
      answer: "UAE organizations face several key AI compliance considerations: 1) UAE AI Ethics Principles - fundamental guidelines established by the UAE AI Office covering transparency, fairness, accountability, and human oversight for AI development and deployment within the UAE, 2) UAE National Program for Artificial Intelligence - strategic initiative setting governance expectations for AI adoption across UAE sectors, with specific compliance considerations for organizations participating in national AI initiatives, 3) UAE Information Assurance Standards - requirements applicable to AI systems processing sensitive data or supporting critical infrastructure, with controls for security, privacy, and resilience of AI implementations, 4) UAE Personal Data Protection Law (PDPL) - regulations governing personal data used in AI training, analysis, and automated decision-making with specific provisions for algorithmic transparency and data subject rights, 5) Dubai International Financial Centre (DIFC) Data Protection Law - specialized requirements for financial institutions using AI systems with provisions for automated decision-making, profiling, and impact assessments, 6) Sector-Specific Regulations - specialized requirements from authorities like UAE Central Bank, Healthcare regulators, and Transportation agencies addressing AI applications in regulated industries, 7) International Standards Adoption - frameworks like EU AI Act, NIST AI Risk Management, and ISO standards being incorporated into UAE regulatory expectations as the governance landscape evolves. The AI compliance landscape in UAE continues developing rapidly with strong government focus on both enabling innovation and ensuring appropriate governance as part of the UAE's strategic vision for AI leadership."
    },
    {
      question: "What are the key elements of an AI compliance program for UAE organizations?",
      answer: "Effective AI compliance programs for UAE organizations should include several critical components: 1) AI Governance Framework - organizational structure defining roles, responsibilities, and oversight mechanisms for AI development and deployment aligned with UAE AI Office guidelines and sector-specific requirements, 2) AI Risk Assessment Methodology - structured approach for evaluating AI systems based on application type, data used, potential impact, and alignment with UAE regulatory expectations, 3) AI Ethics Principles - organization-specific guidelines aligned with UAE national principles covering fairness, transparency, human oversight, and accountability for AI systems, 4) Data Governance Controls - comprehensive data management practices addressing privacy, quality, and appropriateness of data used in AI development in accordance with UAE data protection requirements, 5) UAE-Aligned Algorithmic Impact Assessment - formal evaluation process considering potential impacts of AI systems on individuals, communities, and society within the UAE context, 6) Model Documentation Standards - requirements for maintaining comprehensive records of AI system design, development, testing, and validation in formats recognizable by UAE authorities, 7) Explainability & Transparency Framework - practices ensuring AI decisions can be understood and explained to relevant stakeholders including UAE regulators and affected individuals, 8) Human Oversight Mechanisms - processes ensuring appropriate human supervision of AI systems with clear intervention protocols aligned with UAE expectations for human control, 9) Testing & Validation Standards - rigorous protocols for evaluating AI systems including bias detection, performance measurement, and reliability testing appropriate for UAE deployment contexts, 10) Monitoring & Audit Processes - ongoing oversight of AI systems in production with regular review against compliance requirements and UAE regulatory expectations. These elements should be tailored to your organization's specific AI applications, risk profile, and relevant UAE regulatory frameworks."
    },
    {
      question: "How should UAE organizations approach AI risk assessment?",
      answer: "UAE organizations should approach AI risk assessment through a structured methodology addressing several dimensions: 1) UAE-Specific Risk Categorization - classification of AI systems based on application type, data sensitivity, autonomy level, and potential impact with consideration for UAE regulatory classifications and risk perspectives, 2) Multi-Dimensional Analysis - evaluation across technical, operational, ethical, and compliance risk domains with particular attention to UAE social context and cultural considerations, 3) Data Risk Evaluation - assessment of training data quality, representativeness, and potential bias with special consideration for UAE's diverse population demographics and potential for unfair outcomes, 4) Algorithm Risk Assessment - analysis of model selection, design choices, and technical implementation with focus on explainability requirements increasingly expected by UAE authorities, 5) Deployment Context Consideration - evaluation of specific UAE environments where AI will operate including sector-specific requirements, user expectations, and operational constraints, 6) Impact Assessment - structured analysis of potential consequences for individuals, communities, and business operations with sensitivity to UAE societal values and ethical expectations, 7) Control Evaluation - assessment of existing governance, technical, and operational controls against identified risks with gaps mapped to UAE compliance expectations, 8) Documentation Standards - comprehensive recording of risk assessment processes, findings, and mitigation strategies in formats that would satisfy UAE regulatory inquiries and audit requirements, 9) Stakeholder Consultation - engagement with affected groups including diversity of UAE perspectives to identify concerns and impacts that might not be immediately apparent, 10) Continuous Review Process - establishing ongoing risk monitoring appropriate for UAE operational environments with trigger events for reassessment when significant changes occur. This approach provides a comprehensive framework for identifying, evaluating, and addressing AI risks in alignment with UAE regulatory expectations and emerging best practices."
    },
    {
      question: "What AI ethical principles are most important for UAE organizations?",
      answer: "UAE organizations should prioritize several key ethical principles in AI development and deployment: 1) UAE Cultural Alignment - ensuring AI systems respect and align with UAE values, cultural norms, and social expectations, particularly regarding family structures, privacy considerations, and cultural sensitivities, 2) Fairness & Non-Discrimination - preventing algorithmic bias against any population groups with particular attention to UAE's diverse multinational workforce and resident demographics, 3) Transparency & Explainability - enabling understanding of how AI systems make decisions with appropriate disclosure levels aligned with UAE regulatory expectations for algorithmic transparency, 4) Data Privacy & Protection - handling personal information in accordance with UAE Personal Data Protection Law and sector-specific requirements with clear consent mechanisms for AI processing, 5) Human Agency & Oversight - maintaining appropriate human control over AI systems with intervention capabilities aligned with UAE expectations for ultimate human responsibility, 6) Safety & Security - ensuring robust protection against both accidental harm and malicious manipulation with standards appropriate for UAE critical infrastructure where applicable, 7) Accountability & Responsibility - establishing clear ownership for AI outcomes with appropriate governance structures reflecting UAE organizational hierarchies and decision-making protocols, 8) Sustainable & Beneficial Development - creating AI systems that contribute positively to UAE national objectives including economic diversification, knowledge economy growth, and societal advancement, 9) Children's Rights Protection - implementing special safeguards for AI systems that may impact or interact with children in accordance with UAE's strong focus on family protection, 10) Accessibility & Inclusion - designing AI systems usable by all UAE population segments including people of determination (with disabilities) in alignment with UAE inclusion initiatives. These principles should be formalized in organizational AI ethics frameworks and operationalized through specific practices, controls, and governance mechanisms appropriate for UAE business and regulatory environments."
    },
    {
      question: "How can UAE organizations demonstrate AI compliance to stakeholders?",
      answer: "UAE organizations can demonstrate AI compliance through several key approaches: 1) Comprehensive Documentation - maintaining detailed records of AI governance frameworks, risk assessments, development processes, and testing methodologies in formats aligned with UAE regulatory expectations, 2) AI Impact Assessments - conducting and documenting formal evaluations of AI systems before deployment, showing consideration of potential impacts in UAE contexts and appropriate mitigation strategies, 3) Independent Verification - engaging third-party experts to validate AI compliance controls with credibility recognized by UAE authorities and regulatory bodies, 4) UAE Standards Certification - pursuing relevant certifications aligned with UAE AI governance frameworks and international standards adopted in UAE regulatory guidance, 5) Transparent Disclosure - providing appropriate information about AI applications to users, customers, and other stakeholders in formats and languages suitable for UAE audiences, 6) Ethical Review Boards - establishing formal oversight committees with diverse representation reflecting UAE societal perspectives to evaluate AI applications and use cases, 7) Regular Compliance Reporting - producing structured reports on AI governance and compliance activities with metrics and evidence suitable for UAE regulatory reporting requirements, 8) Stakeholder Engagement - actively consulting with affected groups including UAE community representatives to incorporate diverse perspectives into AI development and deployment, 9) Incident Response Protocol - demonstrating robust procedures for addressing AI issues, complaints, or failures with appropriate escalation paths and remediation processes aligned with UAE regulatory expectations, 10) Continuous Improvement Process - showing ongoing enhancement of AI governance based on emerging UAE regulatory guidance, evolving best practices, and lessons learned from implementation. These approaches create a comprehensive compliance narrative that can satisfy regulators, business partners, customers, and other stakeholders within the UAE's evolving AI governance landscape."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="AI Compliance Services in UAE | Artificial Intelligence Governance"
        description="Expert AI compliance services in Dubai and across UAE. Ensure your AI systems meet regulatory requirements and ethical standards with our comprehensive AI governance and compliance solutions with 22+ years of experience."
        url="/services/ai-compliance"
        type="website"
      />
      <ServicePageLayout
        title="AI Compliance Services in UAE | Artificial Intelligence Governance"
        category="UAE Compliance Services"
        description="Ensure your AI initiatives meet regulatory requirements and ethical standards. Our AI Compliance services help UAE organizations implement appropriate governance, risk management, and controls for artificial intelligence systems."
        heroIcon={<Cpu className="h-8 w-8" />}
        overview="As artificial intelligence transforms UAE business operations, organizations face increasing scrutiny regarding the governance, ethics, and compliance of AI systems. Our UAE-focused AI Compliance services help organizations navigate the complex and evolving regulatory landscape for artificial intelligence through comprehensive governance frameworks, risk assessment methodologies, and practical implementation guidance. We combine deep technical understanding of AI systems with expertise in UAE regulatory requirements and ethical considerations to ensure your artificial intelligence initiatives advance business objectives while meeting compliance obligations. Whether you're developing machine learning models, implementing automated decision systems, or utilizing third-party AI platforms, our services help establish appropriate oversight, controls, and documentation to demonstrate responsible AI practices to UAE regulators, business partners, and customers. With our guidance, your organization can confidently harness AI's transformative potential while addressing the unique governance challenges these technologies present in UAE's rapidly evolving regulatory environment."
        steps={[
          {
            title: "UAE AI Applications Assessment",
            description: "Inventory and evaluate your organization's artificial intelligence systems, identifying all current and planned AI applications with analysis of their purposes, capabilities, data usage, and potential impacts within UAE operational contexts."
          },
          {
            title: "UAE AI Regulatory Analysis",
            description: "Identify applicable UAE compliance requirements for your AI implementations including UAE AI Ethics Principles, data protection regulations, sector-specific rules, and emerging standards affecting artificial intelligence governance in your industry."
          },
          {
            title: "UAE AI Risk Assessment Framework",
            description: "Develop structured methodology for evaluating AI systems based on application type, data sensitivity, autonomy level, and potential impact, creating consistent approach for identifying and addressing risks in UAE compliance contexts."
          },
          {
            title: "UAE AI Governance Framework",
            description: "Design comprehensive governance structure defining roles, responsibilities, oversight mechanisms, and decision processes for AI development and deployment, aligned with UAE regulatory expectations and organizational structure."
          },
          {
            title: "UAE-Specific AI Ethics Guidelines",
            description: "Establish organization-specific ethical principles for AI development and use, incorporating UAE cultural considerations, social values, and regulatory guidance to ensure responsible artificial intelligence practices."
          },
          {
            title: "UAE AI Data Governance Implementation",
            description: "Develop controls addressing data quality, bias prevention, privacy protection, and appropriate use throughout AI lifecycle, ensuring compliance with UAE data regulations while maintaining AI effectiveness."
          },
          {
            title: "UAE AI Documentation Standards",
            description: "Establish comprehensive documentation requirements for AI systems including design choices, development process, testing methodology, performance metrics, and limitations with appropriate detail for UAE regulatory reviews."
          },
          {
            title: "UAE AI Transparency Framework",
            description: "Implement mechanisms ensuring appropriate explainability and transparency of AI systems, enabling understanding of automated decisions with disclosure levels appropriate for UAE regulatory expectations and user needs."
          },
          {
            title: "UAE Human Oversight Mechanisms",
            description: "Design and implement procedures ensuring appropriate human supervision and intervention capabilities for AI systems with clear accountability aligned with UAE expectations for human control and responsibility."
          },
          {
            title: "UAE AI Testing & Validation Methodology",
            description: "Develop robust protocols for evaluating AI systems including bias detection, performance verification, security testing, and reliability assessment appropriate for UAE deployment contexts and regulatory expectations."
          },
          {
            title: "UAE AI Compliance Monitoring Program",
            description: "Establish ongoing oversight mechanisms for deployed AI systems with regular assessment against compliance requirements, emerging standards, and performance metrics relevant to UAE regulatory environments."
          },
          {
            title: "UAE AI Implementation Roadmap",
            description: "Create practical implementation plan for enhancing AI governance and compliance, prioritizing actions based on risk, regulatory requirements, and resource constraints with timelines appropriate for UAE business environments."
          }
        ]}
        benefits={[
          {
            title: "UAE AI Regulatory Alignment",
            content: "Ensure artificial intelligence initiatives comply with UAE AI Ethics Principles, data protection laws, and sector-specific regulations through comprehensive governance frameworks and controls specifically designed for UAE regulatory environments."
          },
          {
            title: "UAE AI Risk Mitigation",
            content: "Identify and address potential issues before they materialize through structured risk assessment methodologies tailored to UAE contexts, reducing likelihood of compliance violations, ethical concerns, and operational problems from AI deployments."
          },
          {
            title: "UAE AI Documentation Readiness",
            content: "Maintain comprehensive records demonstrating responsible AI practices to UAE regulators, business partners, and customers, establishing evidence of compliance while facilitating knowledge transfer and system maintenance."
          },
          {
            title: "UAE AI Ethical Implementation",
            content: "Develop artificial intelligence systems aligned with organizational values and UAE societal expectations through well-defined ethical guidelines, review processes, and governance controls integrated throughout AI lifecycle."
          },
          {
            title: "UAE Stakeholder Trust Enhancement",
            content: "Build confidence among UAE customers, employees, and business partners through transparent AI practices, appropriate disclosures, and demonstrated commitment to responsible artificial intelligence aligned with UAE cultural and social values."
          },
          {
            title: "UAE AI Development Efficiency",
            content: "Streamline AI projects by establishing clear requirements, approval processes, and governance frameworks aligned with UAE regulatory expectations, reducing rework and enabling faster deployment of compliant systems."
          },
          {
            title: "UAE Algorithm Bias Prevention",
            content: "Implement controls to identify and mitigate potential unfairness in AI systems through appropriate testing methodologies with particular sensitivity to UAE's diverse population demographics and commitment to equal treatment."
          },
          {
            title: "UAE AI Incident Readiness",
            content: "Establish response protocols for addressing artificial intelligence issues, failures, or complaints with clear escalation paths, remediation processes, and communication strategies appropriate for UAE regulatory expectations."
          },
          {
            title: "UAE Strategic AI Alignment",
            content: "Ensure artificial intelligence initiatives support broader organizational objectives while meeting governance requirements, creating strategic technology foundation aligned with UAE's national AI vision and regulatory direction."
          },
          {
            title: "UAE AI Competitive Differentiation",
            content: "Demonstrate leadership in responsible AI through robust compliance programs, creating market advantage in UAE business environments where artificial intelligence governance is increasingly valued by customers, partners, and regulators."
          }
        ]}
        deliverables={[
          {
            title: "UAE AI Compliance Assessment Report",
            description: "Comprehensive evaluation of your current artificial intelligence governance practices, regulatory obligations, and compliance gaps with detailed findings and recommendations tailored to your UAE organization's specific AI implementations and risk profile."
          },
          {
            title: "UAE AI Governance Framework",
            description: "Detailed organizational structure defining roles, responsibilities, oversight mechanisms, policy requirements, and decision processes for artificial intelligence systems aligned with UAE regulatory expectations and organizational structure."
          },
          {
            title: "UAE AI Risk Assessment Methodology",
            description: "Structured approach for evaluating artificial intelligence systems based on application type, data sensitivity, autonomy level, and potential impact, with assessment templates, risk criteria, and evaluation procedures tailored to UAE compliance contexts."
          },
          {
            title: "UAE-Appropriate AI Ethics Guidelines",
            description: "Organization-specific ethical principles for artificial intelligence development and use incorporating UAE cultural considerations, social values, and regulatory guidance, with practical implementation guidance for AI teams."
          },
          {
            title: "UAE AI Data Governance Framework",
            description: "Comprehensive controls addressing data quality, bias prevention, privacy protection, and appropriate use throughout artificial intelligence lifecycle, ensuring compliance with UAE data regulations while maintaining AI effectiveness."
          },
          {
            title: "UAE AI Documentation Standards",
            description: "Detailed requirements for artificial intelligence system documentation including templates, content guidelines, and maintenance procedures ensuring appropriate records of design, development, testing, and performance suitable for UAE regulatory reviews."
          },
          {
            title: "UAE AI Testing Protocol",
            description: "Robust methodology for evaluating artificial intelligence systems including bias detection, performance verification, security assessment, and reliability testing with specific procedures and acceptance criteria appropriate for UAE deployment contexts."
          },
          {
            title: "UAE AI Compliance Monitoring Plan",
            description: "Ongoing oversight program for deployed artificial intelligence systems with monitoring procedures, review schedules, metric definitions, and reporting templates designed for UAE regulatory environments and organizational requirements."
          },
          {
            title: "UAE AI Impact Assessment Template",
            description: "Structured format for evaluating potential consequences of artificial intelligence systems before deployment, covering ethical, social, operational, and compliance dimensions with UAE-specific considerations and stakeholder consultation guidelines."
          },
          {
            title: "UAE AI Implementation Roadmap",
            description: "Phased action plan for enhancing artificial intelligence governance with prioritized initiatives, resource requirements, milestone definitions, and timeline estimates appropriate for UAE business environments and compliance priorities."
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
            
            {/* AI Brain Symbol */}
            <circle cx="300" cy="150" r="30" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <path d="M280 150 C290 130, 310 130, 320 150" stroke="#00E5FF" strokeWidth="1"/>
            <path d="M280 150 C290 170, 310 170, 320 150" stroke="#00E5FF" strokeWidth="1"/>
            <path d="M300 120 L300 180" stroke="#00E5FF" strokeWidth="1"/>
            <circle cx="290" cy="140" r="2" fill="#00E5FF"/>
            <circle cx="310" cy="140" r="2" fill="#00E5FF"/>
            <circle cx="290" cy="160" r="2" fill="#00E5FF"/>
            <circle cx="310" cy="160" r="2" fill="#00E5FF"/>
            
            <text x="300" y="200" textAnchor="middle" fontSize="12" fill="#00E5FF">AI System</text>
            
            {/* Compliance Framework */}
            <rect x="180" y="230" width="240" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="255" textAnchor="middle" fontSize="12" fill="#00B2A9">Compliance Framework</text>
            
            {/* Compliance Elements */}
            <circle cx="210" cy="250" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="210" y="253" textAnchor="middle" fontSize="8" fill="#00B2A9">Gov</text>
            
            <circle cx="250" cy="250" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="250" y="253" textAnchor="middle" fontSize="8" fill="#00B2A9">Risk</text>
            
            <circle cx="290" cy="250" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="290" y="253" textAnchor="middle" fontSize="8" fill="#00B2A9">Doc</text>
            
            <circle cx="330" cy="250" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="330" y="253" textAnchor="middle" fontSize="8" fill="#00B2A9">Test</text>
            
            <circle cx="370" cy="250" r="10" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="370" y="253" textAnchor="middle" fontSize="8" fill="#00B2A9">Mon</text>
            
            {/* Connection to AI */}
            <line x1="300" y1="200" x2="300" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="120" y="130" width="70" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="155" y="144" textAnchor="middle" fontSize="8" fill="#EB3443">UAE AI Ethics</text>
            
            <rect x="120" y="160" width="70" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="155" y="174" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            <rect x="120" y="190" width="70" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="155" y="204" textAnchor="middle" fontSize="8" fill="#EB3443">Sector Rules</text>
            
            {/* Connection to AI */}
            <path d="M190 140 L270 150" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M190 170 L270 150" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M190 200 L270 180" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* AI Neural Network Animation */}
            <circle cx="300" cy="150" r="3" fill="#00E5FF" fillOpacity="0.7">
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="290" cy="140" r="3" fill="#00E5FF" fillOpacity="0.7">
              <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="310" cy="160" r="3" fill="#00E5FF" fillOpacity="0.7">
              <animate attributeName="r" values="2;3;2" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Ethics & Fairness */}
            <rect x="410" y="130" width="70" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="445" y="144" textAnchor="middle" fontSize="8" fill="#00B2A9">Ethics</text>
            
            <rect x="410" y="160" width="70" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="445" y="174" textAnchor="middle" fontSize="8" fill="#00B2A9">Fairness</text>
            
            <rect x="410" y="190" width="70" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="445" y="204" textAnchor="middle" fontSize="8" fill="#00B2A9">Transparency</text>
            
            {/* Connection to AI */}
            <path d="M410 140 L330 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M410 170 L330 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M410 200 L330 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE AI Compliance</text>
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
            title: "UAE Cybersecurity Frameworks",
            link: "/services/cybersecurity-frameworks"
          },
          {
            title: "UAE Data Privacy",
            link: "/services/data-privacy"
          },
          {
            title: "UAE IT Security Audit",
            link: "/services/it-security-audit"
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
        title="AI Compliance in UAE FAQs"
        subtitle="Common questions about artificial intelligence governance and compliance for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default AiCompliancePage;