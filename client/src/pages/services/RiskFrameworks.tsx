import { 
  BarChart, 
  TrendingUp, 
  Shield, 
  FileText,
  AlertTriangle,
  LineChart
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const RiskFrameworksPage = () => {
  return (
    <ServicePageLayout
      title="Risk Management Frameworks"
      category="GRC Services"
      description="Build a structured approach to managing cybersecurity risks with our comprehensive risk management framework implementation services."
      heroIcon={<BarChart className="h-8 w-8" />}
      overview="Our Risk Management Frameworks service provides expert guidance on selecting, implementing, and operationalizing structured approaches to identifying, assessing, and treating information security and cybersecurity risks. We help you establish a systematic risk management program aligned with industry-recognized frameworks such as NIST RMF, ISO 31000, and FAIR, enabling consistent risk decision-making and effective prioritization of your security investments."
      steps={[
        {
          title: "Framework Selection",
          description: "Expert guidance on selecting the most appropriate risk management framework based on your industry, regulatory requirements, and organizational maturity."
        },
        {
          title: "Program Design",
          description: "Development of a tailored risk management program structure with clear roles, responsibilities, processes, and governance mechanisms."
        },
        {
          title: "Risk Assessment Methodology",
          description: "Design of a comprehensive risk assessment approach including identification, analysis, and evaluation methodologies aligned with your selected framework."
        },
        {
          title: "Risk Treatment Framework",
          description: "Establishment of a structured approach to risk treatment decision-making, including acceptance, mitigation, transfer, and avoidance strategies."
        },
        {
          title: "Tools & Technology Implementation",
          description: "Selection and implementation of risk management tools and technologies to streamline risk assessment, tracking, and reporting processes."
        },
        {
          title: "Metrics & Reporting Design",
          description: "Development of risk metrics, key risk indicators, and reporting frameworks to provide actionable risk intelligence to stakeholders."
        },
        {
          title: "Program Integration",
          description: "Integration of the risk management framework with related functions including compliance management, vendor risk, and enterprise risk management."
        }
      ]}
      benefits={[
        {
          title: "Informed Risk Decision-Making",
          content: "Enable consistent, data-driven risk decisions across your organization through standardized risk assessment and treatment methodologies."
        },
        {
          title: "Strategic Security Investment",
          content: "Allocate security resources more effectively by focusing investments on addressing the risks that pose the greatest threat to your business objectives."
        },
        {
          title: "Regulatory Alignment",
          content: "Meet regulatory expectations for risk management while establishing a program that adapts to evolving compliance requirements."
        },
        {
          title: "Enhanced Risk Communication",
          content: "Improve risk communication with executives, board members, and stakeholders through standardized risk language and consistent reporting."
        },
        {
          title: "Adaptive Security Approach",
          content: "Develop a proactive and adaptable security posture that evolves with changing threat landscapes and business priorities."
        }
      ]}
      deliverables={[
        {
          title: "Risk Management Framework",
          description: "Comprehensive documentation of your risk management approach, including governance structures, processes, and methodologies."
        },
        {
          title: "Risk Assessment Templates",
          description: "Standardized tools and templates for conducting consistent risk assessments across different business areas and technology domains."
        },
        {
          title: "Risk Treatment Guidelines",
          description: "Structured guidance for risk treatment decision-making, including criteria for acceptance, mitigation strategies, and control selection."
        },
        {
          title: "Risk Register & Dashboard",
          description: "Centralized risk tracking system with visualization capabilities to monitor risk status, treatment progress, and risk trends over time."
        },
        {
          title: "Risk Reporting Templates",
          description: "Executive-level and operational risk reporting formats designed to communicate risk information effectively to different stakeholder groups."
        },
        {
          title: "Implementation Roadmap",
          description: "Phased implementation plan with clear milestones, responsibilities, and resource requirements for operationalizing the risk management framework."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Risk Framework */}
          <rect x="180" y="100" width="240" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Framework Grid */}
          <line x1="180" y1="150" x2="420" y2="150" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="180" y1="200" x2="420" y2="200" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="180" y1="250" x2="420" y2="250" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="260" y1="100" x2="260" y2="300" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="340" y1="100" x2="340" y2="300" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          
          {/* Framework Title */}
          <text x="300" y="125" textAnchor="middle" fontSize="14" fill="#00E5FF">Risk Management Framework</text>
          
          {/* Risk Process Components */}
          <text x="220" y="175" textAnchor="middle" fontSize="12" fill="#00E5FF">Identify</text>
          <text x="300" y="175" textAnchor="middle" fontSize="12" fill="#00E5FF">Assess</text>
          <text x="380" y="175" textAnchor="middle" fontSize="12" fill="#00E5FF">Treat</text>
          
          <text x="220" y="225" textAnchor="middle" fontSize="12" fill="#00E5FF">Monitor</text>
          <text x="300" y="225" textAnchor="middle" fontSize="12" fill="#00E5FF">Report</text>
          <text x="380" y="225" textAnchor="middle" fontSize="12" fill="#00E5FF">Govern</text>
          
          <text x="220" y="275" textAnchor="middle" fontSize="12" fill="#00E5FF">Tools</text>
          <text x="300" y="275" textAnchor="middle" fontSize="12" fill="#00E5FF">Metrics</text>
          <text x="380" y="275" textAnchor="middle" fontSize="12" fill="#00E5FF">Integration</text>
          
          {/* Risk Levels */}
          <rect x="450" y="120" width="30" height="30" rx="3" fill="#0A1024" stroke="#FF5252" strokeWidth="1.5"/>
          <text x="465" y="140" textAnchor="middle" fontSize="10" fill="#FF5252">High</text>
          
          <rect x="450" y="160" width="30" height="30" rx="3" fill="#0A1024" stroke="#FFA500" strokeWidth="1.5"/>
          <text x="465" y="180" textAnchor="middle" fontSize="10" fill="#FFA500">Medium</text>
          
          <rect x="450" y="200" width="30" height="30" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="465" y="220" textAnchor="middle" fontSize="10" fill="#00B2A9">Low</text>
          
          {/* Risk Frameworks */}
          <circle cx="120" cy="140" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="120" y="135" textAnchor="middle" fontSize="10" fill="#00E5FF">NIST</text>
          <text x="120" y="145" textAnchor="middle" fontSize="10" fill="#00E5FF">RMF</text>
          
          <circle cx="120" cy="200" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="120" y="195" textAnchor="middle" fontSize="10" fill="#00E5FF">ISO</text>
          <text x="120" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">31000</text>
          
          <circle cx="120" cy="260" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="120" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">FAIR</text>
          <text x="120" y="265" textAnchor="middle" fontSize="10" fill="#00E5FF">Model</text>
          
          {/* Connection Lines */}
          <line x1="145" y1="140" x2="180" y2="140" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="145" y1="200" x2="180" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="145" y1="260" x2="180" y2="260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Risk Matrix */}
          <rect x="220" y="320" width="160" height="60" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          
          <line x1="220" y1="340" x2="380" y2="340" stroke="#00E5FF" strokeWidth="0.5"/>
          <line x1="220" y1="360" x2="380" y2="360" stroke="#00E5FF" strokeWidth="0.5"/>
          <line x1="260" y1="320" x2="260" y2="380" stroke="#00E5FF" strokeWidth="0.5"/>
          <line x1="300" y1="320" x2="300" y2="380" stroke="#00E5FF" strokeWidth="0.5"/>
          <line x1="340" y1="320" x2="340" y2="380" stroke="#00E5FF" strokeWidth="0.5"/>
          
          <circle cx="240" cy="330" r="5" fill="#00B2A9" fillOpacity="0.5"/>
          <circle cx="280" cy="350" r="5" fill="#FFA500" fillOpacity="0.5"/>
          <circle cx="320" cy="330" r="5" fill="#00B2A9" fillOpacity="0.5"/>
          <circle cx="360" cy="370" r="5" fill="#FF5252" fillOpacity="0.5"/>
          
          <text x="300" y="395" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk Matrix</text>
          
          {/* Risk Trends */}
          <path d="M450 320 L450 380 L510 380" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M450 370 L470 350 L490 360 L510 330" stroke="#00B2A9" strokeWidth="1.5"/>
          <circle cx="450" cy="370" r="3" fill="#00B2A9"/>
          <circle cx="470" cy="350" r="3" fill="#00B2A9"/>
          <circle cx="490" cy="360" r="3" fill="#00B2A9"/>
          <circle cx="510" cy="330" r="3" fill="#00B2A9"/>
          
          <text x="480" y="395" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk Trends</text>
          
          {/* Animation Elements */}
          <circle cx="162" cy="140" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="145;180" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="162" cy="200" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="145;180" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="162" cy="260" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="145;180" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          {/* Risk Assessment Flow */}
          <path d="M220 175 L300 175 L380 175" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
          <circle cx="260" cy="175" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="220;380" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          {/* Top Heading */}
          <text x="300" y="80" textAnchor="middle" fontSize="16" fill="#00E5FF">Risk Management Frameworks</text>
        </svg>
      }
      relatedServices={[
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "vCISO Services",
          link: "/services/vciso"
        },
        {
          title: "Risk Management Solutions",
          link: "/solutions/risk-management"
        }
      ]}
    />
  );
};

export default RiskFrameworksPage;