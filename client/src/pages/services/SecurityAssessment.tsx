import { 
  ClipboardCheck, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  BarChart2,
  FileText
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const SecurityAssessmentPage = () => {
  return (
    <ServicePageLayout
      title="Security Assessment"
      category="IT Security & Audit Services"
      description="Gain comprehensive visibility into your security posture with our detailed security assessment services targeting technology, people, and processes."
      heroIcon={<ClipboardCheck className="h-8 w-8" />}
      overview="Our Security Assessment provides a holistic evaluation of your organization's security posture across people, processes, and technology dimensions. Using a comprehensive methodology based on industry standards and best practices, we identify security gaps, vulnerabilities, and control weaknesses, delivering actionable recommendations to strengthen your security program and reduce organizational risk."
      steps={[
        {
          title: "Assessment Scoping",
          description: "Collaborative definition of assessment scope, including systems, applications, facilities, and business processes to be evaluated."
        },
        {
          title: "Control Framework Selection",
          description: "Selection of appropriate security frameworks (e.g., NIST CSF, ISO 27001, CIS Controls) to guide the assessment process and provide benchmarking."
        },
        {
          title: "Documentation Review",
          description: "Analysis of existing security policies, procedures, standards, and guidelines to evaluate governance effectiveness and documentation completeness."
        },
        {
          title: "Technical Control Assessment",
          description: "Evaluation of implemented technical controls across network security, access management, endpoint protection, and data security domains."
        },
        {
          title: "Process & Operational Review",
          description: "Review of security operational processes, including incident management, vulnerability management, and security monitoring activities."
        },
        {
          title: "People & Awareness Assessment",
          description: "Evaluation of security awareness, training programs, and organizational security culture to identify human-factor risks."
        },
        {
          title: "Risk Analysis & Reporting",
          description: "Analysis of identified gaps against selected frameworks with risk-based prioritization and detailed remediation recommendations."
        }
      ]}
      benefits={[
        {
          title: "Comprehensive Security Visibility",
          content: "Gain complete visibility into your security posture across people, processes, and technology to understand your overall security maturity level."
        },
        {
          title: "Risk-Based Prioritization",
          content: "Receive prioritized recommendations based on risk impact and implementation complexity to focus resources on the most critical improvements."
        },
        {
          title: "Security Roadmap Development",
          content: "Establish a clear security improvement roadmap with short, medium, and long-term initiatives aligned with business objectives and risk tolerance."
        },
        {
          title: "Framework Alignment",
          content: "Benchmark your security practices against industry standards and best practices to identify gaps and measure progress over time."
        },
        {
          title: "Regulatory Readiness",
          content: "Prepare for regulatory compliance requirements by identifying control gaps and establishing a path to meeting compliance obligations."
        }
      ]}
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "High-level overview of assessment findings, key risks, and strategic recommendations designed for executive stakeholders."
        },
        {
          title: "Detailed Assessment Report",
          description: "Comprehensive documentation of all assessment findings, including technical details, risk ratings, and supporting evidence."
        },
        {
          title: "Security Control Matrix",
          description: "Detailed mapping of evaluated controls against selected frameworks with maturity ratings and improvement opportunities."
        },
        {
          title: "Risk Register",
          description: "Prioritized inventory of identified security risks with severity ratings, potential impacts, and remediation guidance."
        },
        {
          title: "Maturity Scorecard",
          description: "Visual representation of security maturity across different domains, providing benchmarking against industry standards."
        },
        {
          title: "Remediation Roadmap",
          description: "Structured implementation plan with short, medium, and long-term security improvements prioritized by risk reduction value."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Assessment Shield */}
          <path d="M300 100 Q360 120 360 190 Q360 260 300 300 Q240 260 240 190 Q240 120 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Radar Sweep */}
          <circle cx="300" cy="200" r="80" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.2"/>
          <circle cx="300" cy="200" r="60" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3"/>
          <circle cx="300" cy="200" r="40" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.4"/>
          <circle cx="300" cy="200" r="20" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          
          <path d="M300 200 L380 200" stroke="#00B2A9" strokeWidth="1.5" strokeOpacity="0.8">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 300 200"
              to="360 300 200"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Assessment Domains */}
          <rect x="140" y="150" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="175" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">Technology</text>
          
          <rect x="140" y="190" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="175" y="210" textAnchor="middle" fontSize="10" fill="#00E5FF">People</text>
          
          <rect x="140" y="230" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="175" y="250" textAnchor="middle" fontSize="10" fill="#00E5FF">Process</text>
          
          {/* Assessment Elements */}
          <rect x="390" y="150" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="425" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">Controls</text>
          
          <rect x="390" y="190" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="425" y="210" textAnchor="middle" fontSize="10" fill="#00E5FF">Risks</text>
          
          <rect x="390" y="230" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="425" y="250" textAnchor="middle" fontSize="10" fill="#00E5FF">Maturity</text>
          
          {/* Connection Lines */}
          <line x1="210" y1="165" x2="240" y2="165" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="205" x2="240" y2="205" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="245" x2="240" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="165" x2="390" y2="165" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="205" x2="390" y2="205" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="245" x2="390" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Risk Points */}
          <circle cx="290" cy="150" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="330" cy="170" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="270" cy="210" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="310" cy="230" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="290" cy="260" r="5" fill="#FF5252" fillOpacity="0.8"/>
          
          {/* Control Points */}
          <circle cx="290" cy="150" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="330" cy="170" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="270" cy="210" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="310" cy="230" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="290" cy="260" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          
          {/* Maturity Chart */}
          <path d="M240 330 L360 330" stroke="#00B2A9" strokeWidth="1"/>
          <path d="M240 330 L240 370" stroke="#00B2A9" strokeWidth="1"/>
          
          <rect x="250" y="350" width="15" height="20" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="275" y="340" width="15" height="30" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="300" y="355" width="15" height="15" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="325" y="335" width="15" height="35" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          
          <text x="257" y="345" textAnchor="middle" fontSize="6" fill="#00E5FF">T</text>
          <text x="282" y="335" textAnchor="middle" fontSize="6" fill="#00E5FF">P</text>
          <text x="307" y="350" textAnchor="middle" fontSize="6" fill="#00E5FF">P</text>
          <text x="332" y="330" textAnchor="middle" fontSize="6" fill="#00E5FF">G</text>
          
          {/* Title */}
          <text x="300" y="85" textAnchor="middle" fontSize="16" fill="#00E5FF">Security Assessment</text>
          
          {/* Animated Elements */}
          <circle cx="225" cy="165" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="225" cy="205" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="225" cy="245" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="165" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;360" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="205" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;360" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="245" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;360" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "IT Security Audit",
          link: "/services/it-security-audit"
        },
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        }
      ]}
    />
  );
};

export default SecurityAssessmentPage;