import { 
  Lock, 
  UserCheck, 
  ShieldCheck, 
  FileText,
  Globe,
  Database
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const DataPrivacyPage = () => {
  return (
    <ServicePageLayout
      title="Data Privacy Consultation"
      category="Cybersecurity Solutions"
      description="Navigate complex data privacy regulations and implement effective privacy practices with our comprehensive data privacy consultation services."
      heroIcon={<Lock className="h-8 w-8" />}
      overview="In today's data-driven business environment, effective privacy management has become a critical operational priority and competitive differentiator. Organizations face unprecedented pressure from converging forces—strict global privacy regulations with severe penalties, heightened customer privacy expectations, increased data breach risks, and complex cross-border data transfer requirements. Our comprehensive Data Privacy Consultation services provide organizations with expert guidance in navigating this complex landscape, establishing robust privacy programs that protect personal data while enabling business objectives. We combine deep privacy regulatory expertise across multiple jurisdictions with practical implementation experience to deliver tailored solutions that address your specific industry context, data processing activities, and organizational maturity. From foundational privacy program development to advanced privacy engineering and automation, our consultants deliver actionable strategies that transform privacy from a compliance burden into a business enabler—striking the optimal balance between regulatory requirements and operational needs while building the trust that serves as the foundation for successful customer relationships in the digital economy."
      steps={[
        {
          title: "Multi-Dimensional Privacy Maturity Assessment",
          description: "Our consultants perform a comprehensive evaluation of your organization's current privacy practices across multiple dimensions—examining data handling procedures, regulatory compliance status, governance structures, technical controls, third-party management, incident response capabilities, documentation quality, and workforce awareness levels to establish a clear baseline and identify high-priority areas for immediate attention and strategic enhancement."
        },
        {
          title: "Personalized Regulatory & Jurisdictional Analysis",
          description: "We conduct a detailed analysis of your organization's unique privacy regulatory landscape—mapping your specific business operations, customer demographics, data types, processing activities, and geographic footprint against all applicable global, regional, and sector-specific privacy regulations to produce a tailored applicability matrix that precisely defines your compliance obligations across jurisdictions and prioritizes implementation requirements."
        },
        {
          title: "Comprehensive Data Lifecycle Mapping",
          description: "Our experts develop detailed visualizations and documentation of all personal data flows throughout your organization's ecosystem—mapping the complete lifecycle from collection and processing through sharing, storage, and eventual deletion while documenting purposes, legal bases, retention periods, security controls, cross-border transfers, and third-party access points to create a foundational data inventory that supports compliance efforts and operational decision-making."
        },
        {
          title: "Risk-Based Privacy Program Implementation",
          description: "We design and implement a structured privacy program customized to your organizational context and compliance requirements—creating appropriate governance structures, defining clear roles and responsibilities, developing comprehensive policies and procedures, establishing effective oversight mechanisms, and implementing operational processes that integrate smoothly with existing business workflows to create a sustainable, risk-based privacy management framework."
        },
        {
          title: "Privacy Impact Assessment & Automation Framework",
          description: "Our specialists establish robust methodologies and practical tools for evaluating privacy risks throughout your product and service lifecycle—developing structured privacy impact assessment processes, creating customized decision frameworks, implementing appropriate documentation templates, establishing approval workflows, and designing automation capabilities that enable consistent privacy risk analysis for new initiatives, processing activities, and technologies."
        },
        {
          title: "Privacy by Design Implementation Strategy",
          description: "We develop practical implementation strategies that embed privacy considerations into your development processes—creating privacy engineering guidelines, data minimization frameworks, de-identification methodologies, retention limitation controls, preference management systems, and technical specifications that enable your teams to build privacy protections directly into products, services, and systems from inception rather than retrofitting them later."
        },
        {
          title: "Data Subject Rights Management System",
          description: "Our consultants establish efficient processes and technologies for managing individual privacy rights—implementing intake mechanisms, verification procedures, processing workflows, response templates, exception handling, documentation systems, and performance metrics that enable your organization to fulfill data subject access requests, deletion requirements, and other privacy rights while meeting regulatory timelines and minimizing operational impact."
        },
        {
          title: "Third-Party Privacy Management Framework",
          description: "We develop comprehensive vendor privacy governance processes tailored to your organization's third-party ecosystem—creating risk assessment methodologies, due diligence questionnaires, contractual templates, monitoring procedures, audit frameworks, remediation protocols, and performance metrics that ensure appropriate oversight of all vendors who access or process personal data throughout your supply chain."
        },
        {
          title: "Cross-Border Data Transfer Mechanism Implementation",
          description: "Our experts design and implement appropriate mechanisms for lawful cross-border data transfers—analyzing data flows across jurisdictions, determining transfer requirements, implementing appropriate safeguards (such as Standard Contractual Clauses, Binding Corporate Rules, or certification frameworks), conducting transfer impact assessments, and establishing documentation systems that enable compliant international data sharing while maintaining operational efficiency."
        },
        {
          title: "Consent & Preference Management Optimization",
          description: "We develop sophisticated solutions for managing consent and privacy preferences across customer touchpoints—creating consistent notice mechanisms, implementing granular consent capture, establishing preference centers, designing revocation processes, developing consent records, and implementing technologies that provide individuals with meaningful privacy choices while generating the evidence necessary to demonstrate compliance."
        },
        {
          title: "Role-Based Privacy Training & Culture Development",
          description: "Our specialists create comprehensive privacy education and awareness programs customized for your organization—developing role-specific training modules, executive briefings, awareness campaigns, knowledge reinforcement mechanisms, performance metrics, and cultural initiatives that build privacy consciousness throughout your organization and empower employees to make appropriate privacy decisions in their daily activities."
        },
        {
          title: "Privacy Incident Response & Breach Notification Framework",
          description: "We establish comprehensive privacy incident management capabilities—implementing detection mechanisms, investigation procedures, impact assessment methodologies, documentation processes, notification templates, regulatory reporting protocols, and remediation frameworks that enable efficient handling of privacy incidents while meeting breach notification requirements across multiple jurisdictions and minimizing organizational impact."
        }
      ]}
      benefits={[
        {
          title: "Comprehensive Global Regulatory Compliance",
          content: "Achieve and maintain compliance with an increasingly complex array of privacy regulations worldwide—including GDPR, CCPA/CPRA, UAE PDPL, Saudi Personal Data Protection Law, China PIPL, Brazil LGPD, Australia Privacy Act, HIPAA, GLBA, and emerging regional privacy frameworks—through a unified privacy approach that efficiently addresses overlapping requirements while managing jurisdiction-specific variations and reducing the compliance burden on your organization."
        },
        {
          title: "Protection from Severe Regulatory Enforcement",
          content: "Shield your organization from the increasingly aggressive privacy enforcement landscape—including administrative fines up to 4% of global revenue under GDPR, state attorney general actions under US privacy laws, regulatory investigations with mandated controls, consumer class action lawsuits, and contractual disputes—by implementing proactive privacy measures that demonstrate compliance commitment and significantly reduce the likelihood of enforcement actions and their associated costs."
        },
        {
          title: "Enhanced Customer Trust & Competitive Advantage",
          content: "Build powerful trust relationships with increasingly privacy-conscious customers by demonstrating tangible commitment to ethical data practices—creating clear privacy notices, implementing meaningful consent mechanisms, providing accessible privacy controls, respecting preference choices, and enabling transparent data practices that differentiate your brand in the marketplace, increase customer loyalty, enhance engagement metrics, and create competitive advantage through privacy excellence."
        },
        {
          title: "Data Breach Impact Reduction & Response Readiness",
          content: "Substantially reduce both the likelihood and impact of data breaches through implementing data-centric security controls—including data minimization, purpose limitation, pseudonymization techniques, access restrictions, and encryption—while establishing breach readiness capabilities that enable rapid containment, efficient notification processes, and appropriate remediation activities that minimize financial, operational, and reputational damage when incidents occur."
        },
        {
          title: "Protected International Data Flows & Market Access",
          content: "Maintain essential cross-border data transfers that support your global operations by implementing appropriate transfer mechanisms—including Standard Contractual Clauses, Binding Corporate Rules, certification frameworks, and supplementary measures—that satisfy complex international requirements while enabling continued access to global markets, customer segments, and business opportunities that might otherwise be restricted due to data localization mandates."
        },
        {
          title: "Optimized Data-Driven Innovation & Monetization",
          content: "Enable responsible data-driven initiatives by establishing clear privacy guardrails for analytics, AI/ML, personalization, and data monetization activities—implementing privacy-enhancing technologies, anonymization techniques, data governance controls, purpose limitation frameworks, and ethical review processes that allow your organization to extract valuable insights and create data-driven products while respecting privacy rights and maintaining regulatory compliance."
        },
        {
          title: "Streamlined Operational Efficiency & Automation",
          content: "Achieve significant operational efficiencies through implementing streamlined privacy processes and appropriate automation—establishing centralized consent management, creating efficient data subject request handling, implementing privacy preference synchronization, developing compliant marketing practices, and building automated compliance monitoring that reduces manual effort, improves consistency, accelerates response times, and minimizes the operational burden of privacy requirements."
        },
        {
          title: "Vendor Risk Management & Contractual Protection",
          content: "Protect your organization from third-party privacy risks through comprehensive vendor management—implementing risk-based assessment methodologies, establishing appropriate contractual protections, conducting ongoing monitoring, maintaining compliance documentation, and developing incident response coordination that ensures your vendors appropriately protect personal data while providing your organization with liability shields and contractual remedies when issues arise."
        },
        {
          title: "Future-Proofed Privacy Posture & Regulatory Adaptability",
          content: "Develop a flexible, future-proof privacy framework capable of efficiently adapting to evolving regulatory requirements, emerging technologies, and changing business models—implementing principle-based approaches, establishing adaptable governance structures, creating modular privacy controls, building regulatory monitoring mechanisms, and developing efficient change management processes that position your organization to quickly adapt to new privacy developments with minimal disruption."
        }
      ]}
      deliverables={[
        {
          title: "Comprehensive Privacy Maturity & Compliance Assessment Report",
          description: "In-depth analysis of your organization's current privacy posture across multiple dimensions—including detailed compliance gap analysis against applicable regulations, privacy program maturity scoring, governance assessment, technology controls evaluation, third-party management review, incident response capability assessment, and documentation quality evaluation—providing a clear baseline with detailed findings, risk-prioritized recommendations, remediation options, and specific implementation guidance tailored to your organizational context and compliance obligations."
        },
        {
          title: "Enterprise-Wide Data Inventory & Detailed Processing Maps",
          description: "Comprehensive documentation of all personal data processed throughout your organization—featuring detailed processing activities register, visual data flow diagrams, collection mechanisms, sharing pathways, storage locations, retention periods, security controls, cross-border transfers, processing purposes, legal basis analysis, and special category data identification—creating an accurate, detailed mapping that satisfies regulatory record-keeping requirements while providing practical visibility into your data processing ecosystem."
        },
        {
          title: "Jurisdiction-Specific Regulatory Applicability Matrix",
          description: "Detailed analysis of your organization's specific privacy regulatory obligations across multiple jurisdictions—examining business activities, physical locations, digital presence, customer demographics, and data types against global, regional, and sector-specific privacy laws to create a clear, comprehensive regulatory heat map that identifies precisely which requirements apply to your operations, their relative priority, and specific implementation timelines."
        },
        {
          title: "Complete Privacy Documentation & Notice Framework",
          description: "Full suite of privacy documentation customized to your organization—including comprehensive external privacy notices, internal privacy policies, cookie policies, employment privacy statements, just-in-time notifications, consent language, specific processing notices, marketing disclosures, and contractual privacy clauses—all written in clear, compliant language that satisfies regulatory requirements while effectively communicating privacy practices to relevant audiences."
        },
        {
          title: "Comprehensive Data Subject Rights Management System",
          description: "End-to-end solution for managing individual privacy rights—featuring detailed process workflows, verification procedures, response templates, exception handling guidelines, system integration requirements, timeline management tools, record-keeping formats, quality assurance checklists, staff training materials, and performance dashboards—enabling your organization to efficiently fulfill data subject requests across multiple privacy regimes while maintaining compliance with regulatory timeframes."
        },
        {
          title: "Customized Privacy Impact Assessment & Privacy by Design Toolkit",
          description: "Complete framework for embedding privacy considerations throughout your development lifecycle—including structured PIA methodologies, customized assessment templates, threshold analysis tools, risk scoring mechanisms, approval workflows, integration guides for existing processes, documentation templates, privacy engineering specifications, and reference architectures—enabling consistent evaluation of privacy implications for new initiatives, systems, and processing activities."
        },
        {
          title: "Third-Party Privacy Risk Management Framework",
          description: "Complete vendor privacy governance system tailored to your organization—including vendor categorization methodology, tiered assessment questionnaires, risk scoring models, contractual clause templates, third-party monitoring procedures, attestation frameworks, remediation protocols, and comprehensive documentation tools—creating a structured approach to managing privacy risks across your entire supply chain while satisfying regulatory requirements for vendor oversight."
        },
        {
          title: "Cross-Border Data Transfer Compliance Package",
          description: "Comprehensive framework for lawful international data transfers—including data flow mapping, transfer mechanism applicability analysis, Schrems II impact assessment templates, standard contractual clauses implementation guide, supplementary measure recommendations, binding corporate rules development roadmap, certification approach analysis, and documentation frameworks—enabling compliant cross-border data flows while minimizing business disruption from evolving international transfer requirements."
        },
        {
          title: "Consent & Preference Management Implementation Blueprint",
          description: "Detailed design for enterprise-wide consent and preference management—including notice standards, layered transparency approaches, consent capture mechanisms, preference center specifications, revocation processes, record-keeping systems, consent refreshment protocols, and technical implementation requirements—allowing consistent, granular management of privacy choices across all channels while maintaining the necessary documentation to demonstrate compliance."
        },
        {
          title: "Customized Privacy Training & Awareness Program",
          description: "Comprehensive privacy education materials tailored to your organization—featuring role-specific training modules (executives, IT, HR, marketing, product development, customer service), awareness campaign resources, knowledge reinforcement tools, assessment mechanisms, compliance tracking systems, and train-the-trainer materials—building privacy consciousness throughout your organization while creating documented evidence of your commitment to workforce privacy education."
        },
        {
          title: "Privacy Incident Management & Breach Notification Toolkit",
          description: "Complete breach management framework designed for multi-jurisdictional compliance—including incident classification guides, investigation procedures, impact assessment methodologies, risk determination tools, notification templates, regulatory reporting forms, affected individual communication formats, remediation protocols, and post-incident review processes—enabling efficient response to privacy incidents while maintaining compliance with varying breach notification requirements across jurisdictions."
        },
        {
          title: "Strategic Privacy Program Implementation Roadmap",
          description: "Comprehensive strategy for privacy program development and continuous enhancement—featuring phased implementation approach, detailed project plans, resource requirements, responsibility assignments, milestone tracking, progress metrics, governance evolution, technology integration, and long-term sustainment strategies—creating a clear execution path with specific timelines, responsibilities, and success criteria that transforms privacy from a compliance exercise into a sustainable business capability."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Privacy Shield */}
          <path d="M300 100 Q360 120 360 190 Q360 260 300 300 Q240 260 240 190 Q240 120 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Lock Symbol */}
          <rect x="280" y="170" width="40" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="300" cy="180" r="8" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <line x1="300" y1="180" x2="300" y2="195" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Data Subject */}
          <circle cx="170" cy="180" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <circle cx="170" cy="165" r="8" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <path d="M155 180 Q170 195 185 180" stroke="#00B2A9" strokeWidth="1" fill="none"/>
          <text x="170" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">Data Subject</text>
          
          {/* Connected Elements */}
          <rect x="150" y="240" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="185" y="260" textAnchor="middle" fontSize="10" fill="#00E5FF">Rights</text>
          
          <rect x="150" y="280" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="185" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Consent</text>
          
          <rect x="380" y="240" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="415" y="260" textAnchor="middle" fontSize="10" fill="#00E5FF">Processing</text>
          
          <rect x="380" y="280" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="415" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Transfers</text>
          
          {/* Regulation Globes */}
          <circle cx="430" cy="160" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="430" y="165" textAnchor="middle" fontSize="10" fill="#00E5FF">GDPR</text>
          
          <circle cx="470" cy="190" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="470" y="195" textAnchor="middle" fontSize="10" fill="#00E5FF">CCPA</text>
          
          <circle cx="430" cy="220" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="430" y="225" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
          
          {/* Connection Lines */}
          <line x1="195" y1="180" x2="240" y2="180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="185" y1="240" x2="240" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="185" y1="280" x2="240" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="380" y1="255" x2="360" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="380" y1="295" x2="350" y2="250" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="430" y1="180" x2="360" y2="180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="450" y1="190" x2="360" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="430" y1="200" x2="360" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Data Flow */}
          <circle cx="300" cy="140" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="144" textAnchor="middle" fontSize="9" fill="#00E5FF">Collection</text>
          
          <circle cx="330" cy="180" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="330" y="184" textAnchor="middle" fontSize="9" fill="#00E5FF">Processing</text>
          
          <circle cx="300" cy="220" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="224" textAnchor="middle" fontSize="9" fill="#00E5FF">Storage</text>
          
          <circle cx="270" cy="180" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="270" y="184" textAnchor="middle" fontSize="9" fill="#00E5FF">Sharing</text>
          
          <path d="M300 155 L330 165 L300 205 L270 165 Z" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Elements */}
          <circle cx="218" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="195;240" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="213" cy="240" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="185;240" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="240;210" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="415" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="430;360" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          {/* Title */}
          <text x="300" y="85" textAnchor="middle" fontSize="16" fill="#00E5FF">Data Privacy</text>
          
          {/* Shield Glow */}
          <path d="M300 100 Q360 120 360 190 Q360 260 300 300 Q240 260 240 190 Q240 120 300 100" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
            <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      relatedServices={[
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        },
        {
          title: "UAE PDPL Compliance",
          link: "/services/uae-pdpl"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        }
      ]}
    />
  );
};

export default DataPrivacyPage;