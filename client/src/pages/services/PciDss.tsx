import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  FileText,
  Lock,
  Database
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const PciDssPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "PCI DSS Compliance Services in UAE",
    description: "Expert PCI DSS compliance services in Dubai and UAE. Achieve regulatory compliance with Payment Card Industry Data Security Standard requirements through our comprehensive implementation services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Payment Card Security Compliance Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE merchants, payment processors, and organizations handling cardholder data"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is PCI DSS compliance and why is it important for UAE businesses?",
      answer: "PCI DSS (Payment Card Industry Data Security Standard) is a global security standard for organizations that handle credit and debit card information. For UAE businesses, PCI DSS compliance is crucial because: 1) It's mandated by all major card brands (Visa, Mastercard, American Express, etc.), 2) It protects sensitive cardholder data in a region with rapidly growing e-commerce, 3) It helps avoid significant penalties from UAE banks and payment processors, 4) It builds consumer trust in the UAE's digital economy, and 5) It aligns with UAE regulatory frameworks for financial security. Non-compliance can result in fines, increased transaction fees, and even restriction of card processing privileges."
    },
    {
      question: "Which UAE organizations need to comply with PCI DSS?",
      answer: "Any UAE organization that stores, processes, or transmits cardholder data must comply with PCI DSS. This includes: 1) E-commerce businesses in Dubai and across the Emirates, 2) Retail merchants with physical point-of-sale systems, 3) Hotels and hospitality businesses, 4) Financial institutions and payment processors, 5) Online service providers that handle recurring payments, 6) Government entities that accept card payments, and 7) Marketplace platforms operating in the UAE. The specific validation requirements vary based on transaction volume and processing methods, determined by merchant levels set by card brands."
    },
    {
      question: "What are the different PCI DSS merchant levels in the UAE?",
      answer: "PCI DSS merchant levels in the UAE follow global standards with four categories based on annual transaction volume: Level 1 (over 6 million transactions annually) requires a Report on Compliance (ROC) by a Qualified Security Assessor; Level 2 (1-6 million transactions) requires an Annual Self-Assessment Questionnaire (SAQ) with quarterly security scans; Level 3 (20,000-1 million e-commerce transactions) requires an Annual SAQ with quarterly scans; Level 4 (fewer than 20,000 e-commerce transactions or up to 1 million regular transactions) requires an Annual SAQ. UAE acquiring banks may impose stricter requirements for their merchants."
    },
    {
      question: "How does PCI DSS compliance relate to UAE data protection laws?",
      answer: "PCI DSS compliance complements UAE data protection laws, including the UAE Personal Data Protection Law (PDPL). While PCI DSS focuses specifically on payment card data security, its requirements align with broader data protection principles in UAE legislation. Implementing PCI DSS controls helps UAE organizations address many requirements under local data protection laws related to securing personal information, implementing appropriate technical controls, and maintaining documentation. Organizations operating in the UAE should address both PCI DSS and local data protection requirements in an integrated compliance approach."
    },
    {
      question: "What is the process for achieving PCI DSS compliance in the UAE?",
      answer: "Achieving PCI DSS compliance in the UAE typically involves: 1) Determining your merchant level and applicable requirements, 2) Performing cardholder data environment scoping to identify all systems within scope, 3) Conducting a gap assessment against the 12 PCI DSS requirements, 4) Implementing required security controls and policies, 5) Performing vulnerability scanning and penetration testing, 6) Preparing documentation and evidence, 7) Completing the appropriate Self-Assessment Questionnaire or undergoing a formal assessment by a Qualified Security Assessor, 8) Submitting validation documentation to your UAE acquiring bank, and 9) Maintaining continuous compliance through ongoing monitoring and annual revalidation."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="PCI DSS Compliance Services in UAE | Payment Card Security Dubai"
        description="Expert PCI DSS compliance services in Dubai and UAE. Secure payment card data with our comprehensive PCI DSS implementation services backed by 22+ years of experience."
        url="/services/pci-dss"
        type="website"
      />
      <ServicePageLayout
        title="PCI DSS Compliance Services in UAE | Payment Card Security Dubai"
        category="UAE Payment Security"
        description="Secure your payment card data and meet Payment Card Industry Data Security Standard (PCI DSS) requirements with our comprehensive compliance services in Dubai and across the UAE. With 22+ years of experience."
        heroIcon={<CreditCard className="h-8 w-8" />}
        overview="The Payment Card Industry Data Security Standard (PCI DSS) represents a critical compliance mandate for any organization in the UAE that processes, stores, or transmits payment card data—establishing comprehensive security requirements that protect cardholder information and reduce fraud risk across the payment ecosystem. Beyond mere compliance, effective PCI DSS implementation delivers tangible business benefits including reduced breach likelihood, enhanced customer trust in UAE's growing digital economy, streamlined operations, and avoidance of significant financial penalties. Our UAE-based PCI DSS compliance service provides a structured approach to navigating this complex standard—delivering expert guidance from initial scoping through successful certification. We combine deep technical expertise with practical implementation experience to optimize your cardholder data environment, implement appropriate controls, prepare thorough documentation, and validate compliance through the appropriate assessment method. Our approach focuses on right-sizing compliance efforts to your specific merchant level and processing environment while creating sustainable, efficient controls that protect cardholder data without unnecessarily burdening your UAE operations or technology infrastructure."
        steps={[
          {
            title: "UAE Merchant Level Determination & Compliance Strategy",
            description: "We begin by accurately classifying your UAE organization's PCI DSS merchant level based on transaction volume and processing methods—analyzing card brand requirements, UAE acquiring bank obligations, and business risk factors to determine appropriate validation requirements (SAQ vs. ROC) and establish a tailored compliance approach that aligns with your specific payment ecosystem while meeting all applicable compliance obligations."
          },
          {
            title: "UAE-Focused Cardholder Data Environment Discovery",
            description: "Our experts perform thorough discovery of your complete cardholder data environment through detailed data flow mapping, system component inventory, network architecture analysis, and payment process examination—identifying all locations where cardholder data is processed, transmitted, or stored in your UAE operations, revealing hidden compliance scope, and establishing precise boundaries for PCI DSS applicability."
          },
          {
            title: "Strategic Scope Optimization & Segmentation for UAE Operations",
            description: "We develop and implement targeted scope reduction strategies that minimize your PCI DSS compliance footprint in the UAE—designing effective network segmentation architectures, implementing tokenization solutions, evaluating UAE-based third-party processing options, and restructuring payment flows to isolate cardholder data components, significantly reducing compliance burden while maintaining operational effectiveness."
          },
          {
            title: "UAE-Specific Gap Assessment & Risk Analysis",
            description: "Our team conducts a comprehensive evaluation of your UAE environment against all applicable PCI DSS requirements—performing detailed technical testing, document reviews, personnel interviews, and process evaluations to identify specific control gaps, vulnerabilities, and compliance deficiencies with severity ratings and business impact analysis that prioritizes remediation based on risk within the UAE context."
          },
          {
            title: "Customized UAE-Aligned Policy & Standards Development",
            description: "We create a complete suite of PCI DSS-required documentation tailored to your specific UAE business environment—including information security policies, operational procedures, configuration standards, and governance frameworks that satisfy documentation requirements while providing practical guidance for your UAE teams and establishing sustainable compliance governance structures."
          },
          {
            title: "Technical Security Control Implementation for UAE Operations",
            description: "Our UAE-based specialists implement critical security controls across your cardholder data environment—including network firewall configurations, vulnerability management systems, secure system builds, encryption solutions, access control mechanisms, file integrity monitoring, logging configurations, and other essential technical safeguards that both satisfy PCI DSS requirements and materially enhance payment security."
          },
          {
            title: "UAE Operational Process Enhancement",
            description: "We establish and optimize essential security processes that address PCI DSS operational requirements within your UAE operations—including patch management procedures, change control workflows, security awareness training, vendor management programs, incident response mechanisms, vulnerability management cycles, and user access reviews that create sustainable, repeatable security operations aligned with compliance requirements."
          },
          {
            title: "UAE Compliance Documentation & Evidence Collection",
            description: "Our team develops comprehensive documentation packages and evidence collection mechanisms tailored to your specific validation method and UAE requirements—creating detailed evidence repositories, control documentation, testing results, attestation materials, and other supporting artifacts that clearly demonstrate compliance with all applicable requirements during assessments by UAE acquiring banks."
          },
          {
            title: "UAE Self-Assessment Questionnaire (SAQ) or Report on Compliance (ROC) Support",
            description: "We provide end-to-end guidance through the appropriate validation process for your UAE merchant level—assisting with SAQ selection and completion, facilitating formal assessments with Qualified Security Assessors (QSAs), managing documentation requests, coordinating control demonstrations, addressing assessor questions, and ensuring successful validation with minimal business disruption in the UAE market."
          },
          {
            title: "UAE Continuous Compliance Program Development",
            description: "Beyond initial certification, we establish sustainable compliance monitoring and maintenance programs for your UAE operations—implementing automated control monitoring, creating compliance calendars, developing ongoing testing procedures, establishing verification mechanisms, and building efficient processes that ensure ongoing adherence to PCI DSS requirements between formal validation cycles."
          }
        ]}
        benefits={[
          {
            title: "Comprehensive Payment Data Protection for UAE Businesses",
            content: "Implement robust, multi-layered security controls across your entire UAE cardholder data environment—including network security, encryption, access restrictions, monitoring systems, and secure development practices that significantly reduce the likelihood of payment card breaches, prevent fraud losses, and protect sensitive financial information from unauthorized access through both technical and administrative safeguards."
          },
          {
            title: "Avoidance of Severe Financial Penalties from UAE Banks",
            content: "Eliminate financial risks associated with PCI DSS non-compliance in the UAE—including non-compliance fees (ranging from $5,000 to $100,000 monthly), increased transaction fees, costly forensic investigations following breaches, damage to UAE banking relationships, potential card processing privilege suspension, regulatory fines, and legal costs that can collectively amount to catastrophic financial impact."
          },
          {
            title: "Enhanced UAE Brand Reputation & Customer Trust",
            content: "Build powerful trust relationships with UAE customers by demonstrating tangible commitment to payment card security—differentiating your organization in the competitive UAE market, maintaining consumer confidence during transactions, avoiding the severe reputational damage of payment breaches, and creating the opportunity to promote your security excellence through PCI compliance attestations."
          },
          {
            title: "Optimized Security Investment & Scope Reduction for UAE Operations",
            content: "Maximize security return-on-investment through strategic scope reduction approaches in your UAE environment—implementing network segmentation, tokenization, and UAE-based third-party processing solutions that minimize PCI DSS compliance boundaries, reduce assessment costs, decrease implementation complexity, and focus security investment on truly critical assets."
          },
          {
            title: "Streamlined UAE Regulatory Compliance",
            content: "Address multiple UAE compliance requirements simultaneously through PCI DSS implementation—leveraging substantial overlap with other regulatory frameworks (UAE PDPL, GDPR) to create an integrated compliance approach, reduce duplicative efforts, streamline assessment processes, and create unified security governance across various regulatory domains in the UAE."
          },
          {
            title: "Improved UAE Security Operations & Incident Readiness",
            content: "Transform security operations in your UAE facilities through structured processes, clear responsibilities, and effective controls that address common vulnerabilities—implementing comprehensive monitoring, systematic patch management, regular testing, change control disciplines, and incident response capabilities that not only satisfy compliance requirements but genuinely strengthen security practices."
          },
          {
            title: "Facilitated UAE Business Relationships & Market Access",
            content: "Unlock new business opportunities in the UAE by meeting increasingly common PCI DSS requirements in partner and customer contracts—satisfying security requirements in UAE government and enterprise RFPs, easing vendor security assessments, and creating competitive advantage through ready demonstration of payment security excellence in the UAE market."
          }
        ]}
        deliverables={[
          {
            title: "UAE PCI DSS Diagnostic Assessment & Strategy Report",
            description: "Detailed evaluation of your UAE cardholder data environment against all PCI DSS requirements, featuring comprehensive gap analysis, risk scoring, compliance maturity assessment, control effectiveness evaluation, and strategic recommendations—providing executive leadership with clear understanding of compliance posture, precise remediation priorities, and an optimal implementation strategy tailored to your specific UAE merchant level, processing methods, and business constraints."
          },
          {
            title: "UAE Cardholder Data Environment Documentation Package",
            description: "Meticulously developed documentation of your complete UAE payment ecosystem, including detailed data flow diagrams, system inventory documentation, network architecture maps, segmentation controls, component-level documentation, and processing pathway analysis—creating essential scoping documentation required by PCI DSS assessors while providing clear visibility into your UAE cardholder data environment for ongoing management."
          },
          {
            title: "UAE-Customized PCI DSS Policy & Standards Framework",
            description: "Complete suite of tailored PCI DSS documentation including information security policy, data protection standards, access control procedures, network security requirements, change management processes, incident response protocols, vendor management procedures, system hardening standards, and secure coding guidelines—all customized to your specific UAE business environment and written in clear, actionable language for practical implementation."
          },
          {
            title: "UAE PCI DSS Requirements Matrix & Evidence Repository",
            description: "Exhaustive mapping of implemented controls to specific PCI DSS requirements (12 requirements and over 300 sub-requirements), with implementation details, responsibility assignments, testing procedures, evidence collection guidance, and secure evidence storage—creating a centralized compliance management system for your UAE operations that streamlines assessments, documents control effectiveness, and maintains continuous compliance documentation."
          },
          {
            title: "UAE Completed Self-Assessment Questionnaire or ROC Preparation Package",
            description: "Fully prepared validation documentation aligned with your specific UAE merchant level—including completed Self-Assessment Questionnaire (SAQ) with appropriate scoping documentation and evidence attachments for lower merchant levels, or comprehensive Report on Compliance (ROC) preparation materials for Level 1 UAE merchants, ensuring successful validation with minimal business disruption."
          },
          {
            title: "UAE Technical Security Implementation & Configuration Guides",
            description: "Detailed technical implementation guides for critical PCI DSS security controls in your UAE environment—including firewall configuration templates, network segmentation designs, system hardening procedures, encryption implementation guides, logging configurations, file integrity monitoring setup, vulnerability scanning frameworks, and access control models with specific configuration parameters tailored to your UAE technology environment."
          },
          {
            title: "UAE Strategic Remediation Roadmap & Project Implementation Plan",
            description: "Comprehensive execution plan for your UAE operations with detailed remediation activities, precise timelines, resource requirements, responsibility assignments, interdependency mapping, milestone tracking, and budget estimates—providing a clearly structured implementation path with sequenced activities that address the highest-risk issues first while creating a manageable approach to achieving full PCI DSS compliance in the UAE."
          },
          {
            title: "UAE Continuous Compliance Monitoring Framework",
            description: "Sustainable ongoing compliance management system for your UAE operations including monitoring dashboards, compliance calendars, automated control testing scripts, evidence collection workflows, responsibility matrices, and quarterly review processes—creating an efficient, largely automated approach to maintaining continuous compliance between formal assessments while significantly reducing the resource burden of ongoing PCI DSS maintenance."
          },
          {
            title: "UAE PCI DSS Training & Awareness Program Materials",
            description: "Comprehensive training resources for various UAE stakeholder groups—including executive awareness materials, technical implementation training for IT staff, security awareness content for general UAE employees, specific role-based modules for developers and administrators, and specialized guidance for payment handlers—creating the security awareness foundation required by PCI DSS while ensuring all UAE personnel understand their specific security responsibilities."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Credit Card with Shield */}
            <rect x="180" y="120" width="240" height="160" rx="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            <rect x="200" y="170" width="50" height="35" rx="5" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
            <path d="M180 180 L420 180" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Chip */}
            <rect x="210" y="210" width="30" height="25" rx="3" fill="#00B2A9" fillOpacity="0.5" stroke="#00E5FF" strokeWidth="1"/>
            <path d="M215 215 L235 215" stroke="#00E5FF" strokeWidth="0.5"/>
            <path d="M215 220 L235 220" stroke="#00E5FF" strokeWidth="0.5"/>
            <path d="M215 225 L235 225" stroke="#00E5FF" strokeWidth="0.5"/>
            <path d="M215 230 L235 230" stroke="#00E5FF" strokeWidth="0.5"/>
            
            {/* PCI DSS Text */}
            <text x="300" y="145" textAnchor="middle" fontSize="12" fill="#FFFFFF">PCI DSS</text>
            <text x="300" y="160" textAnchor="middle" fontSize="8" fill="#FFFFFF">PAYMENT CARD INDUSTRY</text>
            
            {/* Card Number Animation */}
            <text x="260" y="215" textAnchor="start" fontSize="14" fill="#00E5FF">
              <tspan>**** **** **** ****</tspan>
              <animate attributeName="fill-opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
            </text>
            
            {/* Shield */}
            <path d="M330 230 Q340 232 340 245 Q340 258 330 265 Q320 258 320 245 Q320 232 330 230" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Lock */}
            <rect x="325" y="248" width="10" height="12" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <circle cx="330" cy="248" r="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Security Elements */}
            <circle cx="190" cy="250" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="r" values="15;17;15" dur="3s" repeatCount="indefinite"/>
            </circle>
            <text x="190" y="253" textAnchor="middle" fontSize="7" fill="#00E5FF">12 REQS</text>
            
            <rect x="230" y="250" width="50" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="255" y="260" textAnchor="middle" fontSize="7" fill="#00E5FF">COMPLIANCE</text>
            
            {/* UAE Element */}
            <rect x="450" y="160" width="50" height="35" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="175" textAnchor="middle" fontSize="12" fill="#00E5FF">UAE</text>
            <text x="475" y="185" textAnchor="middle" fontSize="6" fill="#00E5FF">DUBAI</text>
            
            <line x1="420" y1="170" x2="450" y2="175" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Compliance Levels */}
            <rect x="440" y="210" width="70" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" opacity="0.8"/>
            <text x="475" y="220" textAnchor="middle" fontSize="8" fill="#00E5FF">MERCHANT LEVEL 1</text>
            
            <rect x="440" y="230" width="70" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" opacity="0.6"/>
            <text x="475" y="240" textAnchor="middle" fontSize="8" fill="#00E5FF">MERCHANT LEVEL 2</text>
            
            <rect x="440" y="250" width="70" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" opacity="0.4"/>
            <text x="475" y="260" textAnchor="middle" fontSize="8" fill="#00E5FF">MERCHANT LEVEL 3</text>
            
            <rect x="440" y="270" width="70" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" opacity="0.2"/>
            <text x="475" y="280" textAnchor="middle" fontSize="8" fill="#00E5FF">MERCHANT LEVEL 4</text>
            
            {/* Data Protection Animation */}
            <circle cx="330" cy="245" r="20" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
              <animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* Connecting Elements */}
            <circle cx="370" cy="190" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="370;400;450;400;370" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="190;195;175;195;190" dur="5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="370" cy="220" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="370;400;440;400;370" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="220;230;220;230;220" dur="6s" repeatCount="indefinite"/>
            </circle>
          </svg>
        }
        relatedServices={[
          {
            title: "ISO 27001 Certification",
            link: "/services/iso27001"
          },
          {
            title: "Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          },
          {
            title: "SAMA Compliance",
            link: "/services/sama"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="PCI DSS Compliance in UAE FAQs"
        subtitle="Common questions about PCI DSS requirements for UAE businesses"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default PciDssPage;