import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  FileText,
  Lock,
  Database
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const PciDssPage = () => {
  return (
    <ServicePageLayout
      title="PCI DSS Compliance"
      category="GRC Services"
      description="Secure your payment card data and meet Payment Card Industry Data Security Standard (PCI DSS) requirements with our comprehensive compliance services."
      heroIcon={<CreditCard className="h-8 w-8" />}
      overview="The Payment Card Industry Data Security Standard (PCI DSS) represents a critical compliance mandate for any organization that processes, stores, or transmits payment card data—establishing comprehensive security requirements that protect cardholder information and reduce fraud risk across the payment ecosystem. Beyond mere compliance, effective PCI DSS implementation delivers tangible business benefits including reduced breach likelihood, enhanced customer trust, streamlined operations, and avoidance of significant financial penalties. Our comprehensive PCI DSS compliance service provides a structured approach to navigating this complex standard—delivering expert guidance from initial scoping through successful certification. We combine deep technical expertise with practical implementation experience to optimize your cardholder data environment, implement appropriate controls, prepare thorough documentation, and validate compliance through the appropriate assessment method. Our approach focuses on right-sizing compliance efforts to your specific merchant level and processing environment while creating sustainable, efficient controls that protect cardholder data without unnecessarily burdening your operations or technology infrastructure."
      steps={[
        {
          title: "Merchant Level Determination & Compliance Strategy",
          description: "We begin by accurately classifying your organization's PCI DSS merchant level based on transaction volume and processing methods—analyzing card brand requirements, acquiring bank obligations, and business risk factors to determine appropriate validation requirements (SAQ vs. ROC) and establish a tailored compliance approach that aligns with your specific payment ecosystem while meeting all applicable compliance obligations."
        },
        {
          title: "Comprehensive Cardholder Data Environment Discovery",
          description: "Our experts perform thorough discovery of your complete cardholder data environment through detailed data flow mapping, system component inventory, network architecture analysis, and payment process examination—identifying all locations where cardholder data is processed, transmitted, or stored, revealing hidden compliance scope, and establishing precise boundaries for PCI DSS applicability."
        },
        {
          title: "Strategic Scope Optimization & Segmentation",
          description: "We develop and implement targeted scope reduction strategies that minimize your PCI DSS compliance footprint—designing effective network segmentation architectures, implementing tokenization solutions, evaluating third-party processing options, and restructuring payment flows to isolate cardholder data components, significantly reducing compliance burden while maintaining operational effectiveness."
        },
        {
          title: "Detailed Gap Assessment & Risk Analysis",
          description: "Our team conducts a comprehensive evaluation of your current environment against all applicable PCI DSS requirements—performing detailed technical testing, document reviews, personnel interviews, and process evaluations to identify specific control gaps, vulnerabilities, and compliance deficiencies with severity ratings and business impact analysis that prioritizes remediation based on risk."
        },
        {
          title: "Customized Policy & Standards Development",
          description: "We create a complete suite of PCI DSS-required documentation tailored to your specific business environment—including information security policies, operational procedures, configuration standards, and governance frameworks that satisfy documentation requirements while providing practical guidance for your teams and establishing sustainable compliance governance structures."
        },
        {
          title: "Technical Security Control Implementation",
          description: "Our specialists implement critical security controls across your cardholder data environment—including network firewall configurations, vulnerability management systems, secure system builds, encryption solutions, access control mechanisms, file integrity monitoring, logging configurations, and other essential technical safeguards that both satisfy PCI DSS requirements and materially enhance payment security."
        },
        {
          title: "Operational Process Enhancement",
          description: "We establish and optimize essential security processes that address PCI DSS operational requirements—including patch management procedures, change control workflows, security awareness training, vendor management programs, incident response mechanisms, vulnerability management cycles, and user access reviews that create sustainable, repeatable security operations aligned with compliance requirements."
        },
        {
          title: "Compliance Documentation & Evidence Collection",
          description: "Our team develops comprehensive documentation packages and evidence collection mechanisms tailored to your specific validation method—creating detailed evidence repositories, control documentation, testing results, attestation materials, and other supporting artifacts that clearly demonstrate compliance with all applicable requirements during assessments."
        },
        {
          title: "Self-Assessment Questionnaire (SAQ) or Report on Compliance (ROC) Support",
          description: "We provide end-to-end guidance through the appropriate validation process for your merchant level—assisting with SAQ selection and completion, facilitating formal assessments with Qualified Security Assessors (QSAs), managing documentation requests, coordinating control demonstrations, addressing assessor questions, and ensuring successful validation with minimal business disruption."
        },
        {
          title: "Continuous Compliance Program Development",
          description: "Beyond initial certification, we establish sustainable compliance monitoring and maintenance programs—implementing automated control monitoring, creating compliance calendars, developing ongoing testing procedures, establishing verification mechanisms, and building efficient processes that ensure ongoing adherence to PCI DSS requirements between formal validation cycles."
        }
      ]}
      benefits={[
        {
          title: "Comprehensive Payment Data Protection",
          content: "Implement robust, multi-layered security controls across your entire cardholder data environment—including network security, encryption, access restrictions, monitoring systems, and secure development practices that significantly reduce the likelihood of payment card breaches, prevent fraud losses, and protect sensitive financial information from unauthorized access through both technical and administrative safeguards."
        },
        {
          title: "Avoidance of Severe Financial Penalties",
          content: "Eliminate financial risks associated with PCI DSS non-compliance—including non-compliance fees (ranging from $5,000 to $100,000 monthly), increased transaction fees, costly forensic investigations following breaches, damage to banking relationships, potential card processing privilege suspension, regulatory fines, and legal costs from cardholder lawsuits that can collectively amount to catastrophic financial impact."
        },
        {
          title: "Enhanced Brand Reputation & Customer Trust",
          content: "Build powerful trust relationships with customers by demonstrating tangible commitment to payment card security—differentiating your organization from competitors, maintaining consumer confidence during transactions, avoiding the severe reputational damage of payment breaches, and creating the opportunity to promote your security excellence through PCI compliance attestations."
        },
        {
          title: "Optimized Security Investment & Scope Reduction",
          content: "Maximize security return-on-investment through strategic scope reduction approaches—implementing network segmentation, tokenization, and third-party processing solutions that minimize PCI DSS compliance boundaries, reduce assessment costs, decrease implementation complexity, and focus security investment on truly critical assets while maintaining appropriate protection."
        },
        {
          title: "Streamlined Regulatory Compliance",
          content: "Address multiple compliance requirements simultaneously through PCI DSS implementation—leveraging substantial overlap with other regulatory frameworks (GDPR, CCPA, HIPAA, SOX, GLBA) to create an integrated compliance approach, reduce duplicative efforts, streamline assessment processes, and create unified security governance across various regulatory domains."
        },
        {
          title: "Improved Security Operations & Incident Readiness",
          content: "Transform security operations through structured processes, clear responsibilities, and effective controls that address common vulnerabilities—implementing comprehensive monitoring, systematic patch management, regular testing, change control disciplines, and incident response capabilities that not only satisfy compliance requirements but genuinely strengthen security practices."
        },
        {
          title: "Facilitated Business Relationships & Market Access",
          content: "Unlock new business opportunities by meeting increasingly common PCI DSS requirements in partner and customer contracts—satisfying security requirements in RFPs, expanding into markets with strict payment security mandates, easing vendor security assessments, and creating competitive advantage through ready demonstration of payment security excellence."
        }
      ]}
      deliverables={[
        {
          title: "Comprehensive PCI DSS Diagnostic Assessment & Strategy Report",
          description: "Detailed evaluation of your current cardholder data environment against all PCI DSS requirements, featuring comprehensive gap analysis, risk scoring, compliance maturity assessment, control effectiveness evaluation, and strategic recommendations—providing executive leadership with clear understanding of compliance posture, precise remediation priorities, and an optimal implementation strategy tailored to your specific merchant level, processing methods, and business constraints."
        },
        {
          title: "Detailed Cardholder Data Environment Documentation Package",
          description: "Meticulously developed documentation of your complete payment ecosystem, including detailed data flow diagrams, system inventory documentation, network architecture maps, segmentation controls, component-level documentation, and processing pathway analysis—creating essential scoping documentation required by PCI DSS assessors while providing clear visibility into your cardholder data environment for ongoing management."
        },
        {
          title: "Customized PCI DSS Policy & Standards Framework",
          description: "Complete suite of tailored PCI DSS documentation including information security policy, data protection standards, access control procedures, network security requirements, change management processes, incident response protocols, vendor management procedures, system hardening standards, and secure coding guidelines—all customized to your specific business environment and written in clear, actionable language for practical implementation."
        },
        {
          title: "Comprehensive PCI DSS Requirements Matrix & Evidence Repository",
          description: "Exhaustive mapping of implemented controls to specific PCI DSS requirements (12 requirements and over 300 sub-requirements), with implementation details, responsibility assignments, testing procedures, evidence collection guidance, and secure evidence storage—creating a centralized compliance management system that streamlines assessments, documents control effectiveness, and maintains continuous compliance documentation."
        },
        {
          title: "Completed Self-Assessment Questionnaire or ROC Preparation Package",
          description: "Fully prepared validation documentation aligned with your specific merchant level—including completed Self-Assessment Questionnaire (SAQ) with appropriate scoping documentation and evidence attachments for lower merchant levels, or comprehensive Report on Compliance (ROC) preparation materials for Level 1 merchants, ensuring successful validation with minimal business disruption."
        },
        {
          title: "Technical Security Implementation & Configuration Guides",
          description: "Detailed technical implementation guides for critical PCI DSS security controls—including firewall configuration templates, network segmentation designs, system hardening procedures, encryption implementation guides, logging configurations, file integrity monitoring setup, vulnerability scanning frameworks, and access control models with specific configuration parameters tailored to your technology environment."
        },
        {
          title: "Strategic Remediation Roadmap & Project Implementation Plan",
          description: "Comprehensive execution plan with detailed remediation activities, precise timelines, resource requirements, responsibility assignments, interdependency mapping, milestone tracking, and budget estimates—providing a clearly structured implementation path with sequenced activities that address the highest-risk issues first while creating a manageable approach to achieving full compliance."
        },
        {
          title: "Continuous Compliance Monitoring Framework & Evidence Collection System",
          description: "Sustainable ongoing compliance management system including monitoring dashboards, compliance calendars, automated control testing scripts, evidence collection workflows, responsibility matrices, and quarterly review processes—creating an efficient, largely automated approach to maintaining continuous compliance between formal assessments while significantly reducing the resource burden of ongoing PCI DSS maintenance."
        },
        {
          title: "PCI DSS Training & Awareness Program Materials",
          description: "Comprehensive training resources for various stakeholder groups—including executive awareness materials, technical implementation training for IT staff, security awareness content for general employees, specific role-based modules for developers and administrators, and specialized guidance for payment handlers—creating the security awareness foundation required by PCI DSS while ensuring all personnel understand their specific security responsibilities."
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
          <path d="M215 215 L235 215" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M215 220 L235 220" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M215 225 L235 225" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M215 230 L235 230" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Card Numbers */}
          <path d="M260 220 L290 220" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M300 220 L330 220" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M340 220 L370 220" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M380 220 L400 220" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Card Details */}
          <text x="210" y="250" className="text-xs" fill="#00E5FF">CARDHOLDER NAME</text>
          <path d="M210 260 L300 260" stroke="#00E5FF" strokeWidth="1"/>
          
          <text x="340" y="250" className="text-xs" fill="#00E5FF">MM/YY</text>
          <path d="M340 260 L380 260" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Security Shield */}
          <path d="M340 135 Q360 145 360 170 Q360 195 340 205 Q320 195 320 170 Q320 145 340 135" fill="none" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M330 175 L335 180 L350 165" stroke="#00B2A9" strokeWidth="1.5" fill="none"/>
          
          {/* PCI DSS Text */}
          <text x="300" y="90" fontSize="16" fill="#00E5FF" textAnchor="middle">PCI DSS</text>
          
          {/* Compliance Levels */}
          <rect x="140" y="320" width="320" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          
          {/* Level Markers */}
          <circle cx="160" cy="330" r="5" fill="#00B2A9"/>
          <text x="160" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L4</text>
          
          <circle cx="230" cy="330" r="5" fill="#00B2A9"/>
          <text x="230" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L3</text>
          
          <circle cx="300" cy="330" r="5" fill="#00B2A9"/>
          <text x="300" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L2</text>
          
          <circle cx="370" cy="330" r="5" fill="#00B2A9"/>
          <text x="370" y="350" fontSize="10" fill="#00E5FF" textAnchor="middle">L1</text>
          
          {/* Compliance Requirements */}
          <circle cx="160" cy="200" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="160" y="195" fontSize="10" fill="#00E5FF" textAnchor="middle">Build & </text>
          <text x="160" y="205" fontSize="10" fill="#00E5FF" textAnchor="middle">Maintain</text>
          
          <circle cx="440" cy="200" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="440" y="195" fontSize="10" fill="#00E5FF" textAnchor="middle">Protect</text>
          <text x="440" y="205" fontSize="10" fill="#00E5FF" textAnchor="middle">Data</text>
          
          <circle cx="160" cy="300" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="160" y="295" fontSize="10" fill="#00E5FF" textAnchor="middle">Implement</text>
          <text x="160" y="305" fontSize="10" fill="#00E5FF" textAnchor="middle">Controls</text>
          
          <circle cx="440" cy="300" r="30" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <text x="440" y="295" fontSize="10" fill="#00E5FF" textAnchor="middle">Monitor &</text>
          <text x="440" y="305" fontSize="10" fill="#00E5FF" textAnchor="middle">Test</text>
          
          {/* Connection Lines */}
          <line x1="190" y1="200" x2="220" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="380" y1="200" x2="410" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="190" y1="300" x2="250" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          <line x1="410" y1="300" x2="350" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
          
          {/* Animation Elements */}
          <circle cx="205" cy="200" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="190;220" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="395" cy="200" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="410;380" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="220" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="190;250" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="300;260" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="380" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="410;350" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="300;260" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Secure Payment Glow */}
          <rect x="180" y="120" width="240" height="160" rx="15" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </rect>
        </svg>
      }
      relatedServices={[
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Policy Development",
          link: "/services/policy-development"
        }
      ]}
    />
  );
};

export default PciDssPage;