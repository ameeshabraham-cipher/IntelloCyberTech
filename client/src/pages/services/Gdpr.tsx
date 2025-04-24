import { 
  UserCheck, 
  FileText, 
  Lock, 
  ClipboardList,
  Scale,
  AlertTriangle
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';

const GdprPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "GDPR Compliance Services for UAE Businesses",
    description: "GDPR compliance services for UAE businesses handling EU resident data. Assessment, implementation & ongoing compliance support from experienced consultants.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Data Privacy Consultancy",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Organizations processing EU personal data"
    }
  };

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <ServicePageLayout
        title="GDPR Compliance Services for UAE Businesses"
        category="GRC Services"
        description="Expert GDPR compliance services for UAE companies handling EU personal data. Our data privacy specialists help you comply with European regulations while continuing to serve EU customers and partners."
        heroIcon={<UserCheck className="h-8 w-8" />}
        overview="The General Data Protection Regulation (GDPR) represents the world's most comprehensive data protection framework, fundamentally reshaping how organizations worldwide handle personal data of EU residents. Beyond mere regulatory compliance, effective GDPR implementation creates strategic advantage through enhanced data governance and consumer trust. Our GDPR compliance service delivers a structured, risk-based approach that transforms privacy from a compliance burden into a business enabler. We combine technical, procedural, and organizational measures to build a comprehensive data protection program that not only meets current requirements but also adapts to the evolving regulatory landscape, protecting your organization from substantial fines while creating sustainable competitive advantage through demonstrated privacy excellence."
        steps={[
          {
            title: "Comprehensive Data Mapping & Processing Inventory",
            description: "We conduct a thorough discovery and documentation of all personal data processing activities across your entire organization, creating a detailed Article 30-compliant Record of Processing Activities (RoPA) that identifies data flows, processing purposes, legal bases, retention periods, and cross-border transfers—establishing complete visibility and the foundation for your compliance program."
          },
          {
            title: "In-Depth GDPR Gap Assessment",
            description: "Our experts perform a methodical evaluation of your current privacy practices against all relevant GDPR requirements, examining policies, procedures, technical controls, and organizational measures to identify specific compliance gaps, risk exposure points, and prioritized remediation needs tailored to your unique operational environment."
          },
          {
            title: "Strategic Implementation Roadmap",
            description: "We develop a comprehensive, risk-based action plan with clear prioritization of required remediation activities, detailed timelines, resource requirements, and key milestones—creating a strategic implementation path that balances compliance needs with operational realities and business constraints."
          },
          {
            title: "Privacy Program & Governance Implementation",
            description: "Our team designs and implements a complete privacy governance framework including policies, procedures, standards, and organizational structures necessary for sustainable GDPR compliance, with particular attention to Data Protection Officer (DPO) responsibilities, accountability mechanisms, and awareness training for staff at all levels."
          },
          {
            title: "Data Subject Rights Management System",
            description: "We establish efficient, scalable processes for managing the full spectrum of data subject rights—including access, rectification, erasure, restriction, portability, and objection requests—with appropriate verification procedures, response templates, tracking mechanisms, and documentation workflows to ensure timely compliance with GDPR's strict requirements."
          },
          {
            title: "Privacy Impact & Risk Assessment Framework",
            description: "Our consultants implement a comprehensive Data Protection Impact Assessment (DPIA) methodology aligned with regulatory guidance, including risk assessment tools, threshold assessment questionnaires, full DPIA templates, and review processes—enabling your organization to systematically evaluate and mitigate privacy risks for high-risk processing activities."
          },
          {
            title: "Third-Party Risk Management Program",
            description: "We develop robust processor management processes including vendor risk assessment questionnaires, contract review templates, Data Processing Agreement (DPA) frameworks, ongoing monitoring procedures, and audit mechanisms—ensuring that all third parties processing personal data on your behalf meet GDPR requirements and protecting you from liability for processor violations."
          }
        ]}
        benefits={[
          {
            title: "Mitigated Regulatory & Financial Risk",
            content: "Significantly reduce exposure to GDPR's severe penalty regime (up to €20 million or 4% of global annual revenue), supervisory authority investigations, and enforcement actions through implementation of comprehensive, demonstrable privacy controls that minimize non-compliance risk and create defensible documentation of your compliance efforts."
          },
          {
            title: "Enhanced Customer Trust & Brand Loyalty",
            content: "Transform data privacy from a compliance obligation into a powerful market differentiator by demonstrating tangible commitment to protecting personal data in an era of increasing privacy awareness, building deeper trust with customers, strengthening your brand reputation, and creating sustainable competitive advantage."
          },
          {
            title: "Strategic Data Intelligence & Governance",
            content: "Gain unprecedented visibility into your organization's entire data ecosystem through comprehensive data mapping, enabling informed strategic decisions about data utilization, eliminating redundant or unauthorized processing, and creating a foundation for data-driven innovation with privacy by design."
          },
          {
            title: "Operational Efficiency & Process Optimization",
            content: "Achieve significant operational improvements by streamlining how data is collected, processed, shared, and deleted across your organization—eliminating redundancies, reducing storage costs, automating compliance tasks, and creating consistent, efficient processes that reduce administrative burden."
          },
          {
            title: "Global Compliance Readiness",
            content: "Establish a flexible privacy framework that not only meets GDPR requirements but also provides adaptable infrastructure for compliance with emerging global privacy regulations including CCPA/CPRA (California), LGPD (Brazil), PIPL (China), and other evolving requirements—reducing the cost and complexity of addressing fragmented compliance obligations."
          },
          {
            title: "Reduced Security Incident Impact",
            content: "Minimize both the likelihood and impact of data breaches through enhanced security measures, data minimization practices, and well-structured incident response capabilities—significantly reducing breach-related costs (averaging $4.35M per incident) while ensuring rapid, compliant notification to authorities and affected individuals."
          },
          {
            title: "Enhanced Business Agility & Innovation",
            content: "Accelerate digital transformation initiatives and data-driven innovation by establishing clear privacy guardrails, embedding privacy-by-design principles into development processes, and creating frameworks that enable secure data utilization—transforming privacy from an innovation blocker into an enabler."
          }
        ]}
        deliverables={[
          {
            title: "Comprehensive Data Processing Inventory (RoPA)",
            description: "Meticulously documented Article 30-compliant Record of Processing Activities mapping your entire data ecosystem, including detailed data flows, processing purposes, legal bases, data categories, recipients, retention periods, security measures, and cross-border transfers—providing complete visibility and serving as the foundation for your compliance program."
          },
          {
            title: "In-Depth GDPR Gap Assessment Report",
            description: "Comprehensive analysis of your current privacy posture against all relevant GDPR requirements, with detailed compliance scoring, risk-prioritized findings, root cause analysis, remediation recommendations, and a clear implementation roadmap with resource requirements and timelines."
          },
          {
            title: "Complete Privacy Documentation Suite",
            description: "Full set of privacy documentation including external privacy notices (website, customer, employee, cookie, mobile app), internal privacy policies, data retention schedules, consent management frameworks, and legitimate interest assessments—all customized to your specific processing activities and business context."
          },
          {
            title: "Data Subject Rights Management System",
            description: "End-to-end data subject request handling framework including request intake forms, identity verification procedures, processing workflows, response templates, record-keeping mechanisms, and integration guidance for relevant systems—enabling efficient, compliant management of all GDPR individual rights."
          },
          {
            title: "Data Protection Impact Assessment Framework",
            description: "Comprehensive DPIA methodology including screening questionnaires to identify high-risk processing, full assessment templates aligned with regulatory guidance, risk rating criteria, mitigation guidance, and documentation procedures for demonstrating compliance with Article 35 requirements."
          },
          {
            title: "Incident Response & Breach Notification Program",
            description: "Complete breach management system including incident classification criteria, investigation procedures, documentation templates, decision trees for breach notification determination, supervisory authority notification forms, and affected individual communication templates—ensuring preparedness for GDPR's strict 72-hour notification requirement."
          },
          {
            title: "Third-Party Processor Management Toolkit",
            description: "Robust vendor management resources including processor risk assessment questionnaires, GDPR-compliant Data Processing Agreement templates, contract addendum language, ongoing monitoring procedures, and processor audit frameworks—protecting your organization from liability for processor violations."
          },
          {
            title: "Privacy Awareness & Training Program",
            description: "Customized privacy training materials including role-specific modules for general staff, IT personnel, HR teams, marketing departments, and executive leadership—creating organization-wide privacy awareness and ensuring staff understand their specific data protection responsibilities."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Central Data Protection Shield */}
            <path d="M300 80 Q370 110 370 190 Q370 270 300 320 Q230 270 230 190 Q230 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            <path d="M300 100 Q355 125 355 190 Q355 255 300 295 Q245 255 245 190 Q245 125 300 100" fill="none" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Data Subject */}
            <circle cx="180" cy="150" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <circle cx="180" cy="135" r="8" fill="none" stroke="#00E5FF" strokeWidth="1"/>
            <path d="M165 150 Q180 175 195 150" stroke="#00E5FF" strokeWidth="1" fill="none"/>
            
            {/* Controller */}
            <rect x="275" cy="170" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="195" textAnchor="middle" fontSize="10" fill="#00E5FF">Controller</text>
            
            {/* Processor */}
            <rect x="400" cy="150" width="50" height="40" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="425" y="175" textAnchor="middle" fontSize="10" fill="#00E5FF">Processor</text>
            
            {/* Lines connecting entities */}
            <line x1="205" y1="150" x2="275" y2="170" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5 3"/>
            <line x1="325" y1="170" x2="400" y2="150" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5 3"/>
            
            {/* Data flow */}
            <circle cx="240" cy="160" r="5" fill="#EB3443">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="365" cy="160" r="5" fill="#EB3443">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Key GDPR Elements */}
            <circle cx="250" cy="240" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="250" y="243" textAnchor="middle" fontSize="6" fill="#00E5FF">Lawful Basis</text>
            
            <circle cx="300" cy="270" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="300" y="273" textAnchor="middle" fontSize="6" fill="#00E5FF">Data Rights</text>
            
            <circle cx="350" cy="240" r="20" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="350" y="243" textAnchor="middle" fontSize="6" fill="#00E5FF">DPIAs</text>
            
            <circle cx="300" cy="210" r="20" fill="#EB3443" fillOpacity="0.8" stroke="#EB3443" strokeWidth="1"/>
            <text x="300" y="213" textAnchor="middle" fontSize="6" fill="white">GDPR</text>
            
            {/* Connecting elements */}
            <line x1="300" y1="210" x2="250" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="210" x2="300" y2="270" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="210" x2="350" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* EU Symbol */}
            <circle cx="230" cy="100" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="230" y="103" textAnchor="middle" fontSize="10" fill="#00E5FF">EU</text>
            
            {/* Animated pulse */}
            <circle cx="300" cy="190" r="70" stroke="#EB3443" strokeWidth="0.5" fill="none" strokeDasharray="5 5">
              <animate attributeName="r" values="70;80;70" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite"/>
            </circle>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          },
          {
            title: "ISO 27001 Certification",
            link: "/services/iso27001"
          },
          {
            title: "Data Privacy Assessment",
            link: "/services/data-privacy-assessment"
          }
        ]}
      />
    </>
  );
};

export default GdprPage;