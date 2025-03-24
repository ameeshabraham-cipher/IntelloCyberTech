import { 
  UserCog, 
  Shield, 
  BarChart2, 
  Briefcase,
  FileText,
  Users
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const VcisoPage = () => {
  return (
    <ServicePageLayout
      title="Virtual CISO (vCISO) Services"
      category="Cybersecurity Solutions"
      description="Access experienced security leadership without the cost of a full-time executive through our Virtual Chief Information Security Officer services."
      heroIcon={<UserCog className="h-8 w-8" />}
      overview="Our Virtual CISO (vCISO) service provides experienced security leadership and expertise on a flexible, cost-effective basis. Whether you need strategic guidance, program development, or ongoing security oversight, our seasoned security executives work as an extension of your team to establish, maintain, and mature your security program while aligning security investments with your business objectives."
      steps={[
        {
          title: "Security Program Assessment",
          description: "Comprehensive evaluation of your current security posture, capabilities, and maturity level to establish baseline and identify priorities."
        },
        {
          title: "Security Strategy Development",
          description: "Creation of a tailored security strategy and roadmap aligned with your business objectives, risk appetite, and compliance requirements."
        },
        {
          title: "Security Governance Establishment",
          description: "Development of security governance structures, including policies, standards, committee charters, and roles & responsibilities."
        },
        {
          title: "Risk Management Program",
          description: "Implementation of a structured approach to identifying, assessing, and managing information security risks across the organization."
        },
        {
          title: "Security Metrics & Reporting",
          description: "Establishment of key security metrics and executive reporting to provide visibility into security posture and program effectiveness."
        },
        {
          title: "Security Budget Planning",
          description: "Development of security budgets and resource plans that optimize security investments for maximum risk reduction value."
        },
        {
          title: "Executive & Board Engagement",
          description: "Regular executive briefings and board presentations on security strategy, risks, and program status to ensure leadership alignment."
        }
      ]}
      benefits={[
        {
          title: "Executive-Level Expertise",
          content: "Access seasoned security leadership with extensive experience across industries, regulations, and security domains at a fraction of the cost of a full-time CISO."
        },
        {
          title: "Strategic Security Direction",
          content: "Obtain strategic guidance on security priorities, investments, and initiatives aligned with your specific business objectives and risk profile."
        },
        {
          title: "Accelerated Security Maturity",
          content: "Leverage proven methodologies and best practices to rapidly mature your security program without the trial and error of building from scratch."
        },
        {
          title: "Flexible Engagement Model",
          content: "Scale security leadership resources up or down based on your needs, from full program management to advisory support for specific initiatives."
        },
        {
          title: "Objective Security Perspective",
          content: "Gain independent, unbiased recommendations and insights from security experts who bring diverse experience from multiple organizations and industries."
        }
      ]}
      deliverables={[
        {
          title: "Security Program Assessment",
          description: "Detailed evaluation of your current security posture with maturity ratings across key domains and prioritized improvement recommendations."
        },
        {
          title: "Security Strategy & Roadmap",
          description: "Comprehensive security strategy document with multi-year roadmap, key initiatives, resource requirements, and success metrics."
        },
        {
          title: "Security Policies & Standards",
          description: "Complete set of security policies, standards, and procedures tailored to your organization's size, industry, and risk profile."
        },
        {
          title: "Security Metrics Dashboard",
          description: "Executive-level dashboard with key security metrics, risk indicators, and program status for leadership visibility and decision support."
        },
        {
          title: "Risk Assessment & Treatment Plan",
          description: "Structured documentation of information security risks with business impact analysis and prioritized treatment recommendations."
        },
        {
          title: "Executive Briefing Materials",
          description: "Professional presentation materials for executive leadership and board communications on security status, risks, and strategic initiatives."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* CISO Figure */}
          <circle cx="300" cy="150" r="40" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <circle cx="300" cy="130" r="15" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M280 155 Q300 175 320 155" stroke="#00E5FF" strokeWidth="1.5" fill="none"/>
          
          {/* Security Domains */}
          <circle cx="200" cy="240" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="200" y="235" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk</text>
          <text x="200" y="248" textAnchor="middle" fontSize="10" fill="#00E5FF">Management</text>
          
          <circle cx="260" cy="300" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="260" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">Policy &</text>
          <text x="260" y="308" textAnchor="middle" fontSize="10" fill="#00E5FF">Governance</text>
          
          <circle cx="340" cy="300" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="340" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
          <text x="340" y="308" textAnchor="middle" fontSize="10" fill="#00E5FF">Operations</text>
          
          <circle cx="400" cy="240" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="400" y="235" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance</text>
          <text x="400" y="248" textAnchor="middle" fontSize="10" fill="#00E5FF">& Audit</text>
          
          {/* Connection Lines */}
          <line x1="300" y1="190" x2="300" y2="200" stroke="#00E5FF" strokeWidth="1.5"/>
          <line x1="300" y1="200" x2="200" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="200" x2="260" y2="300" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="200" x2="340" y2="300" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="200" x2="400" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Business Elements */}
          <rect x="120" y="100" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="160" y="120" textAnchor="middle" fontSize="10" fill="#00E5FF">Executive Team</text>
          
          <rect x="120" y="140" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="160" y="160" textAnchor="middle" fontSize="10" fill="#00E5FF">Board</text>
          
          <rect x="120" y="180" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="160" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Business Units</text>
          
          <rect x="400" y="100" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="120" textAnchor="middle" fontSize="10" fill="#00E5FF">IT Team</text>
          
          <rect x="400" y="140" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="160" textAnchor="middle" fontSize="10" fill="#00E5FF">DevOps</text>
          
          <rect x="400" y="180" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Operations</text>
          
          {/* Connection Lines to Business */}
          <line x1="200" y1="115" x2="260" y2="140" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="200" y1="155" x2="260" y2="155" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="200" y1="195" x2="260" y2="170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="115" x2="340" y2="140" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="155" x2="340" y2="155" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="195" x2="340" y2="170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Title */}
          <text x="300" y="70" textAnchor="middle" fontSize="18" fill="#00E5FF">Virtual CISO</text>
          
          {/* Security Shield */}
          <path d="M300 340 Q340 350 340 380 Q340 410 300 420 Q260 410 260 380 Q260 350 300 340" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="385" textAnchor="middle" fontSize="12" fill="#00E5FF">Security</text>
          <text x="300" y="400" textAnchor="middle" fontSize="12" fill="#00E5FF">Program</text>
          
          {/* Animated Elements */}
          <circle cx="230" cy="127" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="200;260" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="115;140" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="230" cy="175" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="200;260" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="195;170" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="370" cy="127" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="400;340" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="115;140" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="370" cy="175" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="400;340" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="195;170" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Virtual Connection */}
          <circle cx="300" cy="150" r="50" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="5 3">
            <animate attributeName="r" values="50;55;50" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Policy Development",
          link: "/services/policy-development"
        },
        {
          title: "GRC Automation Platforms",
          link: "/solutions/grc-automation"
        }
      ]}
    />
  );
};

export default VcisoPage;