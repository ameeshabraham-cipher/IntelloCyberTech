import { 
  ListChecks, 
  ShieldCheck, 
  FileCheck, 
  Users,
  Network,
  Table
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const SecurityAssessmentPage = () => {
  return (
    <ServicePageLayout
      title="Information Security Assessment"
      category="Cybersecurity Services"
      description="Evaluate your organization's security posture with our comprehensive information security assessment to identify risks and prioritize improvements."
      heroIcon={<ListChecks className="h-8 w-8" />}
      overview="Our Information Security Assessment provides a structured evaluation of your organization's security posture across people, process, and technology domains. Using industry-standard frameworks and best practices, we identify security gaps, assess your risk exposure, and develop a prioritized roadmap for security improvements, helping you allocate resources effectively to strengthen your security defenses."
      steps={[
        {
          title: "Assessment Scoping",
          description: "Collaborative definition of assessment scope, objectives, and methodology to align with your business priorities and regulatory requirements."
        },
        {
          title: "Documentation Review",
          description: "Thorough review of existing security policies, procedures, standards, and documentation to evaluate governance effectiveness."
        },
        {
          title: "Technical Controls Review",
          description: "Evaluation of implemented technical security controls across network, systems, applications, and data protection domains."
        },
        {
          title: "Interviews & Observations",
          description: "Structured interviews with key stakeholders and observation of operational practices to assess security awareness and control implementation."
        },
        {
          title: "Gap Analysis",
          description: "Identification of security gaps against selected frameworks (ISO 27001, NIST CSF, CIS Controls) and industry best practices."
        },
        {
          title: "Risk Assessment",
          description: "Evaluation of identified gaps in terms of risk exposure, considering likelihood, impact, and existing mitigating controls."
        },
        {
          title: "Recommendations & Roadmap",
          description: "Development of prioritized recommendations and a phased implementation roadmap to address identified security gaps."
        }
      ]}
      benefits={[
        {
          title: "Comprehensive Security Visibility",
          content: "Gain a holistic view of your security posture across all domains, including strengths, weaknesses, and priority improvement areas."
        },
        {
          title: "Risk-Based Decision Making",
          content: "Make informed security investment decisions based on actual risk exposure rather than perceived threats or vendor pressure."
        },
        {
          title: "Resource Optimization",
          content: "Focus limited security resources on the most critical improvements that deliver the greatest risk reduction for your organization."
        },
        {
          title: "Compliance Readiness",
          content: "Understand your current compliance status against key frameworks and standards, laying groundwork for future certification efforts."
        },
        {
          title: "Executive Security Awareness",
          content: "Enhance leadership understanding of your security posture, challenges, and resource requirements through clear, business-focused reporting."
        }
      ]}
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "Business-focused overview of key findings, risk assessment, and strategic recommendations designed for executive stakeholders."
        },
        {
          title: "Detailed Assessment Report",
          description: "Comprehensive documentation of assessment methodology, findings, and evidence across all evaluated security domains."
        },
        {
          title: "Security Maturity Scorecard",
          description: "Quantitative measurement of your security program maturity across key domains, with comparative industry benchmarking."
        },
        {
          title: "Gap Analysis Matrix",
          description: "Detailed mapping of identified gaps against selected framework requirements with current state assessment."
        },
        {
          title: "Prioritized Remediation Roadmap",
          description: "Structured implementation plan with short, medium, and long-term security improvements prioritized by risk reduction value."
        },
        {
          title: "Security Metrics Dashboard",
          description: "Recommended metrics and KPIs for ongoing measurement of security program effectiveness and improvement tracking."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Security Assessment Radar */}
          <circle cx="300" cy="200" r="120" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3"/>
          <circle cx="300" cy="200" r="90" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="300" cy="200" r="60" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.7"/>
          <circle cx="300" cy="200" r="30" fill="none" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Radar Axes */}
          <line x1="300" y1="80" x2="300" y2="320" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="180" y1="200" x2="420" y2="200" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="214" y1="114" x2="386" y2="286" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="214" y1="286" x2="386" y2="114" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          
          {/* Domain Labels */}
          <text x="300" y="70" textAnchor="middle" fontSize="12" fill="#00E5FF">Governance</text>
          <text x="300" y="335" textAnchor="middle" fontSize="12" fill="#00E5FF">Operations</text>
          <text x="170" y="200" textAnchor="end" fontSize="12" fill="#00E5FF">Technology</text>
          <text x="430" y="200" textAnchor="start" fontSize="12" fill="#00E5FF">People</text>
          <text x="205" y="110" textAnchor="middle" fontSize="12" fill="#00E5FF">Physical</text>
          <text x="395" y="290" textAnchor="middle" fontSize="12" fill="#00E5FF">Data</text>
          <text x="205" y="290" textAnchor="middle" fontSize="12" fill="#00E5FF">Network</text>
          <text x="395" y="110" textAnchor="middle" fontSize="12" fill="#00E5FF">Applications</text>
          
          {/* Maturity Scale */}
          <text x="300" y="140" textAnchor="middle" fontSize="8" fill="#00E5FF">Optimized</text>
          <text x="300" y="170" textAnchor="middle" fontSize="8" fill="#00E5FF">Managed</text>
          <text x="300" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">Defined</text>
          <text x="300" y="230" textAnchor="middle" fontSize="8" fill="#00E5FF">Repeatable</text>
          <text x="300" y="260" textAnchor="middle" fontSize="8" fill="#00E5FF">Initial</text>
          
          {/* Current State Assessment */}
          <path d="M300 110 L350 150 L370 200 L340 260 L300 280 L260 260 L230 200 L250 150 Z" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Assessment Points */}
          <circle cx="300" cy="110" r="5" fill="#00E5FF"/>
          <circle cx="350" cy="150" r="5" fill="#00E5FF"/>
          <circle cx="370" cy="200" r="5" fill="#00E5FF"/>
          <circle cx="340" cy="260" r="5" fill="#00E5FF"/>
          <circle cx="300" cy="280" r="5" fill="#00E5FF"/>
          <circle cx="260" cy="260" r="5" fill="#00E5FF"/>
          <circle cx="230" cy="200" r="5" fill="#00E5FF"/>
          <circle cx="250" cy="150" r="5" fill="#00E5FF"/>
          
          {/* Target State */}
          <path d="M300 90 L365 135 L390 200 L365 265 L300 310 L235 265 L210 200 L235 135 Z" fill="none" stroke="#00B2A9" strokeWidth="1.5" strokeDasharray="5 3"/>
          
          {/* Assessment Elements */}
          <rect x="120" y="130" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="150" y="150" textAnchor="middle" fontSize="8" fill="#00E5FF">Gap Analysis</text>
          
          <rect x="120" y="170" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="150" y="190" textAnchor="middle" fontSize="8" fill="#00E5FF">Risk Assessment</text>
          
          <rect x="120" y="210" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="150" y="230" textAnchor="middle" fontSize="8" fill="#00E5FF">Control Testing</text>
          
          <rect x="120" y="250" width="60" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="150" y="270" textAnchor="middle" fontSize="8" fill="#00E5FF">Recommendations</text>
          
          {/* Animated Scanning */}
          <circle cx="300" cy="200" r="140" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.2">
            <animate attributeName="r" values="140;150;140" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.2;0.1;0.2" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="200" r="5" fill="#00E5FF" fillOpacity="0.5">
            <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "Cloud Security Assessment",
          link: "/services/cloud-security"
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