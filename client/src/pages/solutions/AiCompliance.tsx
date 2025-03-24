import { 
  Bot, 
  ClipboardCheck, 
  LineChart, 
  Network, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const AiCompliancePage = () => {
  return (
    <SolutionPageLayout
      title="AI-Driven Compliance Tools"
      category="AI Solutions"
      description="Revolutionize your compliance management with advanced AI technology that automates evidence collection, control monitoring, and compliance reporting."
      heroIcon={<Bot className="h-8 w-8" />}
      problem="Traditional compliance management processes are manual, time-consuming, and error-prone. Organizations struggle with collecting evidence, monitoring controls, and keeping up with changing regulations, leading to inefficient resource allocation and increased risk of non-compliance."
      solution="Our AI-Driven Compliance Tools leverage artificial intelligence and machine learning to automate the compliance lifecycle. From automated evidence collection to intelligent control monitoring and dynamic reporting, our platform reduces manual effort, improves accuracy, and provides real-time insights for better decision-making."
      features={[
        {
          icon: <Bot className="h-6 w-6" />,
          title: "Automated Evidence Collection",
          description: "AI-powered agents automatically gather and organize compliance evidence from various systems, eliminating manual collection and reducing human error."
        },
        {
          icon: <ClipboardCheck className="h-6 w-6" />,
          title: "Intelligent Control Monitoring",
          description: "Continuous monitoring of controls with AI-driven analysis to detect gaps, anomalies, and potential compliance issues before they become problems."
        },
        {
          icon: <LineChart className="h-6 w-6" />,
          title: "Dynamic Compliance Dashboard",
          description: "Real-time visualization of compliance status across multiple frameworks with customizable views and drill-down capabilities."
        },
        {
          icon: <Network className="h-6 w-6" />,
          title: "Smart Control Mapping",
          description: "AI algorithms automatically map controls across different regulatory frameworks, eliminating redundancy and streamlining compliance efforts."
        },
        {
          icon: <ShieldCheck className="h-6 w-6" />,
          title: "Predictive Risk Analysis",
          description: "Machine learning models that predict potential compliance risks based on historical data and current control effectiveness."
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Regulatory Change Tracking",
          description: "Automated tracking of regulatory updates with AI-powered impact analysis on your existing compliance program."
        }
      ]}
      benefits={[
        {
          title: "70% Reduction in Manual Effort",
          description: "Dramatically reduce the time spent on manual evidence collection and control monitoring, freeing up your team to focus on strategic activities."
        },
        {
          title: "Near Real-Time Compliance Status",
          description: "Gain immediate visibility into your compliance posture with real-time dashboards and automated status updates."
        },
        {
          title: "Improved Accuracy and Consistency",
          description: "Eliminate human error and ensure consistent application of compliance controls through AI-driven automation."
        },
        {
          title: "Enhanced Audit Readiness",
          description: "Maintain continuous audit readiness with organized evidence repositories and comprehensive audit trails."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Brain Node */}
          <circle cx="300" cy="200" r="60" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <path d="M300 160 L300 240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <path d="M260 200 L340 200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* AI Core */}
          <circle cx="300" cy="200" r="25" fill="#00B2A9" fillOpacity="0.3"/>
          <circle cx="300" cy="200" r="15" fill="#00E5FF" fillOpacity="0.5"/>
          
          {/* Connected Nodes - Compliance Frameworks */}
          <circle cx="150" cy="150" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="150" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">ISO</text>
          
          <circle cx="150" cy="250" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="150" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">SOC 2</text>
          
          <circle cx="450" cy="150" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="450" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">GDPR</text>
          
          <circle cx="450" cy="250" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="450" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
          
          {/* Connecting Lines */}
          <path d="M175 150 L255 175" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M175 250 L255 225" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M425 150 L345 175" stroke="#00B2A9" strokeWidth="1.5"/>
          <path d="M425 250 L345 225" stroke="#00B2A9" strokeWidth="1.5"/>
          
          {/* Animated Data Pulses */}
          <circle cx="215" cy="162.5" r="3" fill="#00E5FF">
            <animate attributeName="cx" from="175" to="255" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" from="150" to="175" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="215" cy="237.5" r="3" fill="#00E5FF">
            <animate attributeName="cx" from="175" to="255" dur="4s" repeatCount="indefinite" />
            <animate attributeName="cy" from="250" to="225" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="385" cy="162.5" r="3" fill="#00E5FF">
            <animate attributeName="cx" from="425" to="345" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="150" to="175" dur="3.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="385" cy="237.5" r="3" fill="#00E5FF">
            <animate attributeName="cx" from="425" to="345" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="250" to="225" dur="4.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      }
      relatedSolutions={[
        {
          title: "GRC Automation Platforms",
          link: "/solutions/grc-automation"
        },
        {
          title: "Risk Management Tools",
          link: "/solutions/risk-management"
        },
        {
          title: "AI for Financial Reconciliation",
          link: "/solutions/ai-financial-reconciliation"
        }
      ]}
    />
  );
};

export default AiCompliancePage;