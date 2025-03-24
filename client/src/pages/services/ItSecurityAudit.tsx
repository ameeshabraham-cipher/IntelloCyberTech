import { 
  FileSearch, 
  ShieldCheck, 
  ListChecks, 
  FileText,
  AlertTriangle,
  Check
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const ItSecurityAuditPage = () => {
  return (
    <ServicePageLayout
      title="IT Security Audit"
      category="IT Security & Audit Services"
      description="Identify security gaps, ensure compliance, and strengthen your security posture with our comprehensive IT security audit services."
      heroIcon={<FileSearch className="h-8 w-8" />}
      overview="Our IT Security Audit provides a systematic evaluation of your organization's IT security controls, processes, and technologies against industry standards and best practices. Through a combination of automated tools, manual testing, and expert analysis, we identify security vulnerabilities, compliance gaps, and control weaknesses, delivering actionable recommendations to strengthen your security posture and protect your critical assets."
      steps={[
        {
          title: "Audit Scoping & Planning",
          description: "Collaborative definition of audit scope, objectives, and methodology to align with your business priorities and regulatory requirements."
        },
        {
          title: "Security Documentation Review",
          description: "Thorough examination of security policies, procedures, standards, and guidelines to evaluate governance effectiveness and documentation completeness."
        },
        {
          title: "Technical Control Assessment",
          description: "Detailed evaluation of implemented technical controls across network security, access management, endpoint protection, and data security domains."
        },
        {
          title: "Process & Operational Review",
          description: "Assessment of security operational processes, including incident management, change control, and security monitoring activities."
        },
        {
          title: "Compliance Verification",
          description: "Verification of compliance with applicable regulatory requirements, industry standards, and organizational security policies."
        },
        {
          title: "Vulnerability Identification",
          description: "Discovery of security vulnerabilities and weaknesses through scanning, testing, and expert analysis of your IT environment."
        },
        {
          title: "Remediation Planning",
          description: "Development of prioritized recommendations and a structured remediation roadmap to address identified security issues."
        }
      ]}
      benefits={[
        {
          title: "Comprehensive Security Visibility",
          content: "Gain complete visibility into your security posture, identifying blind spots and vulnerabilities that could put your organization at risk."
        },
        {
          title: "Independent Security Validation",
          content: "Obtain unbiased validation of your security controls and practices from experienced security professionals with diverse industry expertise."
        },
        {
          title: "Regulatory Compliance",
          content: "Verify compliance with industry regulations and standards, reducing the risk of penalties and sanctions for non-compliance."
        },
        {
          title: "Risk Reduction",
          content: "Identify and address security weaknesses before they can be exploited, significantly reducing your exposure to cyber threats and attacks."
        },
        {
          title: "Security Investment Optimization",
          content: "Focus security investments on addressing the most critical gaps and vulnerabilities, maximizing the return on your security budget."
        }
      ]}
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "High-level overview of audit findings, key risks, and strategic recommendations designed for executive stakeholders."
        },
        {
          title: "Detailed Technical Audit Report",
          description: "Comprehensive documentation of all audit findings, including technical details, risk ratings, and supporting evidence."
        },
        {
          title: "Security Control Matrix",
          description: "Detailed mapping of evaluated controls against industry frameworks with assessment ratings and improvement opportunities."
        },
        {
          title: "Vulnerability Register",
          description: "Prioritized inventory of identified vulnerabilities with severity ratings, potential impacts, and remediation guidance."
        },
        {
          title: "Compliance Status Dashboard",
          description: "Visual representation of compliance status across applicable regulatory requirements and industry standards."
        },
        {
          title: "Remediation Roadmap",
          description: "Structured implementation plan with short, medium, and long-term security improvements prioritized by risk reduction value."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Audit Checklist */}
          <rect x="200" y="100" width="200" height="250" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Checklist Lines */}
          <line x1="220" y1="140" x2="380" y2="140" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="220" y1="180" x2="380" y2="180" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="220" y1="220" x2="380" y2="220" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="220" y1="260" x2="380" y2="260" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="220" y1="300" x2="380" y2="300" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          
          {/* Checklist Title */}
          <text x="300" y="125" textAnchor="middle" fontSize="14" fill="#00E5FF">Security Audit</text>
          
          {/* Checklist Items */}
          <rect x="230" y="150" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="315" y="165" textAnchor="middle" fontSize="12" fill="#00E5FF">Network Security</text>
          <path d="M235 160 L245 170 L255 150" stroke="#00B2A9" strokeWidth="1.5" fill="none">
            <animate attributeName="opacity" values="0;1" dur="1s" begin="0.5s" fill="freeze"/>
          </path>
          
          <rect x="230" y="190" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="315" y="205" textAnchor="middle" fontSize="12" fill="#00E5FF">Access Control</text>
          <path d="M235 200 L245 210 L255 190" stroke="#00B2A9" strokeWidth="1.5" fill="none">
            <animate attributeName="opacity" values="0;1" dur="1s" begin="1s" fill="freeze"/>
          </path>
          
          <rect x="230" y="230" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="315" y="245" textAnchor="middle" fontSize="12" fill="#00E5FF">Data Protection</text>
          <path d="M235 240 L245 250 L255 230" stroke="#00B2A9" strokeWidth="1.5" fill="none">
            <animate attributeName="opacity" values="0;1" dur="1s" begin="1.5s" fill="freeze"/>
          </path>
          
          <rect x="230" y="270" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="315" y="285" textAnchor="middle" fontSize="12" fill="#00E5FF">Security Operations</text>
          <path d="M235 280 L245 290 L255 270" stroke="#00B2A9" strokeWidth="1.5" fill="none">
            <animate attributeName="opacity" values="0;1" dur="1s" begin="2s" fill="freeze"/>
          </path>
          
          <rect x="230" y="310" width="20" height="20" rx="3" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="315" y="325" textAnchor="middle" fontSize="12" fill="#00E5FF">Policy & Governance</text>
          <path d="M235 320 L245 330 L255 310" stroke="#00B2A9" strokeWidth="1.5" fill="none">
            <animate attributeName="opacity" values="0;1" dur="1s" begin="2.5s" fill="freeze"/>
          </path>
          
          {/* Audit Elements */}
          <circle cx="140" cy="160" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="140" y="164" textAnchor="middle" fontSize="8" fill="#00E5FF">Technical</text>
          <text x="140" y="174" textAnchor="middle" fontSize="8" fill="#00E5FF">Controls</text>
          
          <circle cx="140" cy="230" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="140" y="234" textAnchor="middle" fontSize="8" fill="#00E5FF">Policy</text>
          <text x="140" y="244" textAnchor="middle" fontSize="8" fill="#00E5FF">Review</text>
          
          <circle cx="140" cy="300" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="140" y="304" textAnchor="middle" fontSize="8" fill="#00E5FF">Process</text>
          <text x="140" y="314" textAnchor="middle" fontSize="8" fill="#00E5FF">Analysis</text>
          
          <circle cx="460" cy="160" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="460" y="164" textAnchor="middle" fontSize="8" fill="#00E5FF">Vulnerability</text>
          <text x="460" y="174" textAnchor="middle" fontSize="8" fill="#00E5FF">Scan</text>
          
          <circle cx="460" cy="230" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="460" y="234" textAnchor="middle" fontSize="8" fill="#00E5FF">Compliance</text>
          <text x="460" y="244" textAnchor="middle" fontSize="8" fill="#00E5FF">Check</text>
          
          <circle cx="460" cy="300" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="460" y="304" textAnchor="middle" fontSize="8" fill="#00E5FF">Risk</text>
          <text x="460" y="314" textAnchor="middle" fontSize="8" fill="#00E5FF">Assessment</text>
          
          {/* Connection Lines */}
          <line x1="165" y1="160" x2="200" y2="160" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="165" y1="230" x2="200" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="165" y1="300" x2="200" y2="300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="160" x2="435" y2="160" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="230" x2="435" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="300" x2="435" y2="300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Animated Elements */}
          <circle cx="300" cy="80" r="5" fill="#00E5FF" fillOpacity="0.8">
            <animate attributeName="cy" values="80;90;80" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <rect x="250" y="60" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="77" textAnchor="middle" fontSize="12" fill="#00E5FF">IT Security Audit</text>
        </svg>
      }
      relatedServices={[
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "Policy Development",
          link: "/services/policy-development"
        }
      ]}
    />
  );
};

export default ItSecurityAuditPage;