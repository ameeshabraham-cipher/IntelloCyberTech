import { 
  CheckCircle, 
  ClipboardCheck, 
  FileText, 
  Shield,
  Users,
  Clock
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const Soc2Page = () => {
  return (
    <ServicePageLayout
      title="SOC 2 Compliance"
      category="GRC Services"
      description="Achieve SOC 2 compliance with our comprehensive assessment, implementation, and attestation services to build trust with your customers and partners."
      heroIcon={<CheckCircle className="h-8 w-8" />}
      overview="SOC 2 (System and Organization Controls) has emerged as the gold standard for demonstrating security excellence in service organizations, becoming increasingly critical for customer acquisition and retention in competitive markets. This AICPA-developed framework enables organizations to independently verify their controls across five Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Our comprehensive SOC 2 compliance service delivers end-to-end guidance through this complex process—from initial readiness assessment to successful attestation—with a focus on building sustainable, evidence-based control environments that satisfy auditor requirements while genuinely strengthening your security posture. We combine deep technical expertise with practical implementation experience to transform your SOC 2 journey from a compliance checkbox into a strategic business enabler that accelerates sales cycles, builds customer confidence, and creates lasting competitive advantage."
      steps={[
        {
          title: "Comprehensive SOC 2 Readiness Assessment",
          description: "Our experts conduct a thorough evaluation of your current control environment against all applicable SOC 2 Trust Services Criteria, identifying specific compliance gaps, control deficiencies, and implementation maturity levels across your organization—delivering a detailed findings report with risk-prioritized remediation recommendations tailored to your unique business environment and compliance objectives."
        },
        {
          title: "Strategic Scope Definition & Planning",
          description: "We work closely with your leadership team to establish a precise, business-aligned scope definition for your SOC 2 audit—clearly defining system boundaries, included services, selected Trust Services Criteria, critical infrastructure components, and third-party dependencies—creating a focused foundation that optimizes implementation efficiency while ensuring comprehensive coverage of audit requirements."
        },
        {
          title: "Customized Controls Design & Implementation",
          description: "Our consultants design and implement tailored control environments across people, processes, and technology domains that address all applicable Trust Services Criteria—including access controls, change management, risk assessment, vendor management, encryption, business continuity, and monitoring capabilities—with particular focus on controls that balance compliance requirements with operational efficiency."
        },
        {
          title: "Comprehensive Policy & Procedure Development",
          description: "We craft a complete suite of SOC 2-aligned policies and procedures customized to your organization's specific environment, technology stack, and operational realities—establishing clear requirements, defining key processes, assigning responsibilities, and creating actionable guidelines that document your security program while providing essential governance frameworks for audit evidence."
        },
        {
          title: "Automated Evidence Collection & Management",
          description: "Our team implements efficient, largely automated evidence collection mechanisms and purpose-built repositories that systematically gather, organize, and maintain comprehensive proof of control operation across your environment—creating a sustainable approach to evidence management that minimizes operational burden while ensuring continuous audit readiness."
        },
        {
          title: "Rigorous Pre-Audit Readiness Assessment",
          description: "We perform a thorough pre-audit assessment to validate implementation completeness and evidence quality—conducting control testing, documentation review, personnel interviews, and evidence validation using the same methodologies employed by auditors—identifying and remediating any remaining gaps or weaknesses before the formal audit begins."
        },
        {
          title: "End-to-End Audit Coordination & Support",
          description: "Our specialists provide comprehensive support throughout your entire audit journey—assisting with auditor selection and onboarding, facilitating audit planning meetings, coordinating evidence requests, preparing personnel for interviews, addressing auditor questions, and implementing any necessary remediations in real-time—ensuring a smooth, efficient path to successful audit completion and report issuance."
        },
        {
          title: "Continuous Compliance Program Implementation",
          description: "Beyond initial certification, we help establish sustainable, efficient processes for maintaining ongoing SOC 2 compliance through continuous control monitoring, periodic self-assessments, automated evidence collection, and regular control updates in response to evolving threats and technological changes—creating a mature compliance program that ensures successful Type 2 audits year after year."
        }
      ]}
      benefits={[
        {
          title: "Enhanced Market Trust & Brand Reputation",
          content: "Build powerful trust relationships with prospects, customers, and partners through independent, third-party verification of your security controls by trusted CPA firms, transforming security from a sales barrier into a strategic differentiator and creating transparency that significantly enhances your brand reputation in increasingly security-conscious markets."
        },
        {
          title: "Accelerated Enterprise Sales Cycles",
          content: "Dramatically reduce sales friction and shorten deal cycles by proactively addressing the security concerns of enterprise prospects with a recognized, respected compliance report—eliminating lengthy security questionnaires, reducing custom due diligence requests, and providing immediate validation of your security practices to procurement and security teams."
        },
        {
          title: "Expanded Market Access & Opportunity",
          content: "Unlock substantial new market opportunities with organizations that require SOC 2 compliance as a prerequisite for doing business, including Fortune 1000 enterprises, financial institutions, healthcare organizations, and government agencies—creating immediate competitive advantage over non-compliant competitors and enabling access to premium market segments."
        },
        {
          title: "Comprehensive Security Program Maturation",
          content: "Transform your security program through implementation of comprehensive controls aligned with industry best practices across 17 SOC 2 control categories—creating material improvements in security posture that reduce breach likelihood, enhance detection capabilities, and establish coordinated response mechanisms that protect your critical assets."
        },
        {
          title: "Operational Risk Reduction & Governance",
          content: "Significantly reduce operational risks through implementation of structured change management, access control governance, system monitoring, incident response procedures, and vendor management protocols—establishing clear security processes and responsibilities that improve operational consistency, enhance governance, and prevent security incidents."
        },
        {
          title: "Compliance Convergence & Efficiency",
          content: "Establish a unified controls framework that efficiently addresses multiple compliance requirements simultaneously, including SOC 2, ISO 27001, HIPAA, GDPR, CCPA, and industry-specific regulations—creating significant operational efficiency by consolidating disparate compliance efforts into a cohesive program that reduces redundant work."
        },
        {
          title: "Enhanced Investor & Board Confidence",
          content: "Demonstrate organizational maturity and risk management excellence to investors, board members, and other stakeholders through achievement of a recognized security certification—providing independent validation of your security governance that inspires confidence, potentially increases company valuation, and demonstrates management commitment to security excellence."
        }
      ]}
      deliverables={[
        {
          title: "Comprehensive SOC 2 Gap Assessment Report",
          description: "Detailed analysis identifying specific control deficiencies across all applicable Trust Services Criteria, with severity ratings, impact assessments, root cause analysis, and prioritized remediation recommendations—providing executive leadership with a clear understanding of your compliance posture and the strategic roadmap to SOC 2 certification."
        },
        {
          title: "Custom SOC 2 Policy & Procedure Suite",
          description: "Complete set of SOC 2-aligned governance documents including information security policy, access control procedures, change management processes, risk assessment methodology, incident response plans, and other required documentation—all customized to your specific technology environment, organizational structure, and operational realities."
        },
        {
          title: "Tailored Controls Implementation Matrix",
          description: "Comprehensive controls framework mapping specific implemented controls to each applicable Trust Services Criteria point, including control descriptions, implementation responsibilities, evidence requirements, testing procedures, and supporting documentation references—creating the core foundation for your SOC 2 compliance program."
        },
        {
          title: "Detailed Implementation Roadmap",
          description: "Structured project plan with precise timelines, resource requirements, dependency mappings, implementation milestones, and responsibility assignments across all phases of SOC 2 implementation—providing clear visibility into the certification journey and ensuring accountability for all stakeholders."
        },
        {
          title: "Automated Evidence Collection System",
          description: "Purpose-built evidence management framework including collection workflows, evidence repositories, calendaring mechanisms, automated reminders, evidence quality standards, and approval processes—creating an efficient, sustainable approach to gathering and maintaining the substantial evidence required for SOC 2 compliance."
        },
        {
          title: "Comprehensive Pre-Audit Readiness Report",
          description: "Thorough pre-audit assessment documenting implementation status for all controls, evidence quality evaluations, remaining gaps, remediation priorities, and certification readiness assessment—providing confidence that you're fully prepared for the formal audit process and minimizing the risk of unexpected findings."
        },
        {
          title: "SOC 2 Type 1 or Type 2 Report",
          description: "Successfully obtained SOC 2 attestation report issued by a reputable CPA firm, validating your compliance with selected Trust Services Criteria and providing independent assurance regarding the design (Type 1) and operating effectiveness (Type 2) of your security controls—creating a valuable business asset for sales, partnerships, and stakeholder confidence."
        },
        {
          title: "Continuous Compliance Program",
          description: "Sustainable, efficient continuous compliance framework including monitoring mechanisms, compliance calendars, control testing schedules, evidence collection workflows, and responsibility assignments—ensuring your SOC 2 compliance is maintained between audit periods and preparing you for successful annual renewals."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Shield */}
          <path d="M300 80 Q380 110 380 200 Q380 290 300 330 Q220 290 220 200 Q220 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Trust Services Criteria */}
          <circle cx="300" cy="160" r="35" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="165" textAnchor="middle" fontSize="12" fill="#00E5FF">Security</text>
          
          <circle cx="240" cy="210" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="240" y="215" textAnchor="middle" fontSize="11" fill="#00E5FF">Availability</text>
          
          <circle cx="270" cy="270" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="270" y="268" textAnchor="middle" fontSize="8" fill="#00E5FF">Processing</text>
          <text x="270" y="278" textAnchor="middle" fontSize="8" fill="#00E5FF">Integrity</text>
          
          <circle cx="330" cy="270" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="330" y="275" textAnchor="middle" fontSize="9" fill="#00E5FF">Confidentiality</text>
          
          <circle cx="360" cy="210" r="30" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="360" y="215" textAnchor="middle" fontSize="11" fill="#00E5FF">Privacy</text>
          
          {/* SOC 2 Process */}
          <rect x="130" y="130" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="150" textAnchor="middle" fontSize="10" fill="#00E5FF">Readiness</text>
          
          <rect x="130" y="180" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Implementation</text>
          
          <rect x="130" y="230" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="250" textAnchor="middle" fontSize="10" fill="#00E5FF">Type 1 Audit</text>
          
          <rect x="130" y="280" width="80" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="170" y="300" textAnchor="middle" fontSize="10" fill="#00E5FF">Type 2 Audit</text>
          
          {/* SOC 2 Report */}
          <rect x="440" y="190" width="70" height="80" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="475" y="230" textAnchor="middle" fontSize="14" fill="#00E5FF">SOC 2</text>
          <text x="475" y="250" textAnchor="middle" fontSize="14" fill="#00E5FF">Report</text>
          
          {/* Connecting Lines */}
          <path d="M130 145 L220 145" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M130 195 L240 195" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M130 245 L265 245" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M130 295 L280 295" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          
          <path d="M380 145 L440 190" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M390 195 L440 215" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M375 245 L440 240" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          <path d="M360 295 L440 270" stroke="#00B2A9" strokeDasharray="5 3" strokeWidth="1"/>
          
          {/* Animated Elements */}
          <circle cx="300" cy="125" r="5" fill="#00E5FF">
            <animate attributeName="cy" values="125;110;125" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="205" r="5" fill="#00E5FF">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        },
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        },
        {
          title: "Cloud Security Assessment",
          link: "/services/cloud-security"
        }
      ]}
    />
  );
};

export default Soc2Page;