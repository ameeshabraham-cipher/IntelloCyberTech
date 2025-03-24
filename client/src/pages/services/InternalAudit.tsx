import { 
  FileSearch, 
  CheckSquare, 
  ClipboardList, 
  BarChart2,
  ArrowRightLeft,
  LineChart
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const InternalAuditPage = () => {
  return (
    <ServicePageLayout
      title="Internal Audit & Gap Analysis"
      category="GRC Services"
      description="Identify compliance and security gaps with our comprehensive internal audit and gap analysis services before they become regulatory issues or vulnerabilities."
      heroIcon={<FileSearch className="h-8 w-8" />}
      overview="Our Internal Audit & Gap Analysis services provide a systematic evaluation of your organization's security controls, compliance practices, and IT operations against industry standards, regulatory requirements, and best practices. Through a detailed assessment methodology, we identify gaps, weaknesses, and improvement opportunities, delivering actionable recommendations that strengthen your security posture and ensure alignment with relevant compliance frameworks."
      steps={[
        {
          title: "Audit Scope & Planning",
          description: "Collaborative definition of the audit scope, objectives, and methodology to ensure alignment with your organizational priorities and compliance requirements."
        },
        {
          title: "Framework Selection",
          description: "Selection of appropriate control frameworks (e.g., ISO 27001, NIST CSF, CIS Controls) to guide the assessment process and provide a structured evaluation approach."
        },
        {
          title: "Documentation Review",
          description: "Thorough examination of existing policies, procedures, standards, and guidelines to evaluate documentation completeness and alignment with selected frameworks."
        },
        {
          title: "Control Assessment",
          description: "Detailed evaluation of implemented controls through interviews, observations, and evidence collection to determine design and operational effectiveness."
        },
        {
          title: "Gap Identification",
          description: "Systematic identification of gaps between current practices and framework requirements, with clear documentation of findings and supporting evidence."
        },
        {
          title: "Risk Evaluation",
          description: "Assessment of identified gaps in terms of risk impact and likelihood to prioritize remediation efforts based on business risk."
        },
        {
          title: "Remediation Planning",
          description: "Development of a structured remediation roadmap with specific recommendations, timelines, and resource requirements to address identified gaps."
        }
      ]}
      benefits={[
        {
          title: "Proactive Risk Management",
          content: "Identify and address security and compliance gaps before they can be exploited or result in regulatory issues and penalties."
        },
        {
          title: "Compliance Readiness",
          content: "Prepare for formal compliance assessments and certifications by identifying and addressing gaps in advance, streamlining the certification process."
        },
        {
          title: "Prioritized Improvements",
          content: "Focus security and compliance investments on the most critical areas through risk-based prioritization of remediation activities."
        },
        {
          title: "Enhanced Governance",
          content: "Strengthen your overall governance, risk, and compliance program with a clear understanding of current maturity and improvement opportunities."
        },
        {
          title: "Objective Assessment",
          content: "Benefit from an independent, unbiased evaluation of your security and compliance posture with fresh perspectives on control effectiveness."
        }
      ]}
      deliverables={[
        {
          title: "Audit Scope & Methodology Document",
          description: "Detailed documentation of the audit scope, objectives, methodology, and the control frameworks used for the assessment."
        },
        {
          title: "Gap Assessment Report",
          description: "Comprehensive report detailing identified gaps, control weaknesses, and compliance deficiencies with supporting evidence and observations."
        },
        {
          title: "Control Maturity Matrix",
          description: "Visual representation of control maturity across different domains with benchmark comparisons against industry standards and best practices."
        },
        {
          title: "Risk-Rated Findings Register",
          description: "Prioritized inventory of audit findings with risk ratings, potential impacts, and clear traceability to framework requirements."
        },
        {
          title: "Compliance Readiness Dashboard",
          description: "Executive-level dashboard showing compliance readiness status across multiple frameworks and regulatory requirements."
        },
        {
          title: "Remediation Roadmap",
          description: "Structured implementation plan with short, medium, and long-term actions prioritized by risk reduction value and implementation complexity."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Audit Checklist */}
          <rect x="180" y="100" width="240" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Document Header */}
          <path d="M180 130 L420 130" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="120" textAnchor="middle" fontSize="14" fill="#00E5FF">Gap Analysis</text>
          
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
          <text x="270" y="157" fontSize="12" fill="#00E5FF">Policy Documentation</text>
          <text x="270" y="187" fontSize="12" fill="#00E5FF">Access Controls</text>
          <text x="270" y="217" fontSize="12" fill="#00E5FF">Incident Response</text>
          <text x="270" y="247" fontSize="12" fill="#00E5FF">Risk Assessment</text>
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
          
          <text x="300" y="370" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance Gap Analysis</text>
          
          {/* Frameworks */}
          <circle cx="130" cy="160" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="130" y="163" textAnchor="middle" fontSize="8" fill="#00E5FF">ISO 27001</text>
          
          <circle cx="130" cy="220" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="130" y="223" textAnchor="middle" fontSize="8" fill="#00E5FF">NIST CSF</text>
          
          <circle cx="130" cy="280" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="130" y="283" textAnchor="middle" fontSize="8" fill="#00E5FF">CIS Controls</text>
          
          {/* Connection Lines */}
          <line x1="155" y1="160" x2="180" y2="160" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="155" y1="220" x2="180" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="155" y1="280" x2="180" y2="280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
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
          <circle cx="170" cy="160" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="155;180" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="170" cy="220" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="155;180" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="170" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="155;180" dur="2.5s" repeatCount="indefinite"/>
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
          <text x="300" y="80" textAnchor="middle" fontSize="16" fill="#00E5FF">Internal Audit & Gap Analysis</text>
        </svg>
      }
      relatedServices={[
        {
          title: "IT Security Audit",
          link: "/services/it-security-audit"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        }
      ]}
    />
  );
};

export default InternalAuditPage;