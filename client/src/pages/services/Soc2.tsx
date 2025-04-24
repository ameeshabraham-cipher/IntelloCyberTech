import { 
  CheckCircle, 
  ClipboardCheck, 
  FileText, 
  Shield,
  Users,
  Clock
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';

const Soc2Page = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "SOC 2 Compliance and Certification Services in UAE",
    description: "Complete SOC 2 compliance services in UAE. Gap assessment, remediation & certification support from experienced auditors in Dubai and Abu Dhabi.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Compliance Consultancy",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "SaaS companies and service organizations seeking SOC 2 compliance"
    }
  };

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <ServicePageLayout
        title="SOC 2 Compliance & Certification in UAE"
        category="GRC Services"
        description="Expert SOC 2 compliance services in Dubai & UAE. From readiness assessment to successful Type I and Type II attestation, our specialized consultants guide you through the entire process."
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
            <text x="300" y="163" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
            
            {/* Other Criteria */}
            <circle cx="255" cy="215" r="25" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1"/>
            <text x="255" y="218" textAnchor="middle" fontSize="8" fill="#00E5FF">Availability</text>
            
            <circle cx="300" cy="250" r="25" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="247" textAnchor="middle" fontSize="8" fill="#00E5FF">Processing</text>
            <text x="300" y="257" textAnchor="middle" fontSize="8" fill="#00E5FF">Integrity</text>
            
            <circle cx="345" cy="215" r="25" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1"/>
            <text x="345" y="218" textAnchor="middle" fontSize="8" fill="#00E5FF">Confidentiality</text>
            
            <circle cx="300" cy="100" r="12" fill="#EB3443" fillOpacity="0.8" stroke="#EB3443" strokeWidth="1"/>
            <text x="300" y="103" textAnchor="middle" fontSize="8" fill="white">SOC 2</text>
            
            {/* Lines */}
            <line x1="300" y1="112" x2="300" y2="125" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="300" y1="195" x2="300" y2="220" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="300" y1="195" x2="255" y2="215" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="300" y1="195" x2="345" y2="215" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Animated Elements */}
            <circle cx="300" cy="160" r="45" fill="none" stroke="#EB3443" strokeWidth="0.5" strokeDasharray="5 3">
              <animate attributeName="r" values="45;50;45" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Document Icons */}
            <rect x="170" cy="150" width="20" height="25" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="175" y1="155" x2="185" y2="155" stroke="#00E5FF" strokeWidth="0.5"/>
            <line x1="175" y1="160" x2="185" y2="160" stroke="#00E5FF" strokeWidth="0.5"/>
            <line x1="175" y1="165" x2="185" y2="165" stroke="#00E5FF" strokeWidth="0.5"/>
            
            <rect x="410" cy="150" width="20" height="25" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="415" y1="155" x2="425" y2="155" stroke="#00E5FF" strokeWidth="0.5"/>
            <line x1="415" y1="160" x2="425" y2="160" stroke="#00E5FF" strokeWidth="0.5"/>
            <line x1="415" y1="165" x2="425" y2="165" stroke="#00E5FF" strokeWidth="0.5"/>
            
            {/* AICPA Label */}
            <rect x="280" y="320" width="40" height="15" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="300" y="330" textAnchor="middle" fontSize="6" fill="#00E5FF">AICPA</text>
            
            {/* Connecting Lines */}
            <line x1="300" y1="275" x2="300" y2="320" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="3 2"/>
            
            {/* Extra Elements */}
            <circle cx="200" cy="270" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="200" y="272" textAnchor="middle" fontSize="6" fill="#00E5FF">Controls</text>
            
            <circle cx="400" cy="270" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="400" y="272" textAnchor="middle" fontSize="6" fill="#00E5FF">Evidence</text>
            
            <line x1="255" y1="240" x2="200" y2="270" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="3 2"/>
            <line x1="345" y1="240" x2="400" y2="270" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="3 2"/>
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
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          }
        ]}
      />
    </>
  );
};

export default Soc2Page;