import { 
  LayoutGrid, 
  FileText, 
  BarChart2, 
  Workflow, 
  Bell,
  Users
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const GrcAutomationPage = () => {
  return (
    <SolutionPageLayout
      title="GRC Automation Platforms"
      category="AI Solutions"
      description="Streamline your Governance, Risk, and Compliance processes with our comprehensive automation platform designed to simplify complex GRC activities."
      heroIcon={<LayoutGrid className="h-8 w-8" />}
      problem="Organizations face increasingly complex governance, risk, and compliance requirements across multiple regulations and standards. Managing these processes manually leads to siloed operations, duplicated efforts, inconsistent data, and inefficient resource allocation, increasing both cost and risk exposure."
      solution="Our GRC Automation Platform provides a unified system to manage governance, risk, and compliance activities across your organization. By centralizing and automating key GRC processes, our platform eliminates manual work, ensures consistency, provides real-time visibility, and enables better decision-making while significantly reducing compliance costs."
      features={[
        {
          icon: <LayoutGrid className="h-6 w-6" />,
          title: "Unified GRC Framework",
          description: "A single integrated platform for managing all aspects of governance, risk, and compliance, eliminating siloed operations."
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: "Automated Policy Management",
          description: "Streamlined creation, review, approval, and distribution of policies with automated version control and attestation tracking."
        },
        {
          icon: <BarChart2 className="h-6 w-6" />,
          title: "Integrated Risk Management",
          description: "Comprehensive risk assessment, monitoring, and mitigation capabilities with customizable risk registers and scoring methodologies."
        },
        {
          icon: <Workflow className="h-6 w-6" />,
          title: "Workflow Automation",
          description: "Configurable workflows that automate routine GRC tasks, approvals, notifications, and escalations to ensure timely completion."
        },
        {
          icon: <Bell className="h-6 w-6" />,
          title: "Intelligent Alerts & Notifications",
          description: "Proactive alerting system that notifies stakeholders of pending tasks, risks, and compliance issues based on predefined thresholds."
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Role-Based Access Control",
          description: "Granular access management ensuring appropriate separation of duties and data access based on user roles and responsibilities."
        }
      ]}
      benefits={[
        {
          title: "60% Reduction in Compliance Costs",
          description: "Significantly reduce the resources required for GRC activities through automation, centralization, and elimination of duplicated efforts."
        },
        {
          title: "Enhanced Decision Making",
          description: "Gain actionable insights through comprehensive dashboards and reports that provide a holistic view of your GRC posture."
        },
        {
          title: "Improved Operational Efficiency",
          description: "Streamline processes, eliminate redundancies, and free up valuable resources to focus on strategic initiatives rather than routine compliance tasks."
        },
        {
          title: "Reduced Risk Exposure",
          description: "Identify, assess, and mitigate risks more effectively through continuous monitoring and automated risk assessment processes."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central GRC Platform Hub */}
          <rect x="250" y="150" width="100" height="100" rx="8" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="300" y="205" textAnchor="middle" fontSize="14" fill="#00E5FF">GRC</text>
          
          {/* Connected Modules */}
          <rect x="100" y="100" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="140" y="135" textAnchor="middle" fontSize="10" fill="#00E5FF">Governance</text>
          
          <rect x="100" y="240" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="140" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk</text>
          
          <rect x="420" y="100" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="460" y="135" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance</text>
          
          <rect x="420" y="240" width="80" height="60" rx="8" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="460" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Reporting</text>
          
          {/* Connecting Lines */}
          <path d="M180 130 L250 180" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M180 270 L250 220" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M420 130 L350 180" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M420 270 L350 220" stroke="#00B2A9" strokeWidth="1.5"/>
          
          {/* Data Flow Animations */}
          <circle cx="200" cy="155" r="4" fill="#00E5FF">
            <animate attributeName="cx" from="180" to="250" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" from="130" to="180" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="200" cy="245" r="4" fill="#00E5FF">
            <animate attributeName="cx" from="180" to="250" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" from="270" to="220" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="400" cy="155" r="4" fill="#00E5FF">
            <animate attributeName="cx" from="420" to="350" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="130" to="180" dur="2.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="400" cy="245" r="4" fill="#00E5FF">
            <animate attributeName="cx" from="420" to="350" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="270" to="220" dur="3.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Orbital Ring */}
          <circle cx="300" cy="200" r="120" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3" strokeOpacity="0.5"/>
        </svg>
      }
      relatedSolutions={[
        {
          title: "AI-Driven Compliance Tools",
          link: "/solutions/ai-compliance"
        },
        {
          title: "Risk Management Tools",
          link: "/solutions/risk-management"
        },
        {
          title: "Vulnerability Management",
          link: "/solutions/vulnerability-management"
        }
      ]}
    />
  );
};

export default GrcAutomationPage;