import { 
  BarChart2, 
  AlertOctagon, 
  PieChart, 
  LineChart, 
  Eye,
  ListChecks
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const RiskManagementPage = () => {
  return (
    <SolutionPageLayout
      title="Risk Management Tools"
      category="AI Solutions"
      description="Proactively identify, assess, and mitigate risks with our advanced AI-driven risk management platform designed for the modern enterprise."
      heroIcon={<BarChart2 className="h-8 w-8" />}
      problem="Organizations face increasingly complex risk landscapes with cybersecurity threats, regulatory compliance requirements, operational vulnerabilities, and third-party risks. Traditional risk management approaches are reactive, manual, and siloed, making it difficult to gain a comprehensive view of risk posture and respond effectively to emerging threats."
      solution="Our AI-powered Risk Management Tools provide a comprehensive solution for identifying, assessing, and mitigating risks across your organization. By leveraging advanced analytics, machine learning, and predictive modeling, our platform enables proactive risk management with real-time monitoring, automated assessments, and actionable insights, helping you make informed decisions to protect your business."
      features={[
        {
          icon: <AlertOctagon className="h-6 w-6" />,
          title: "AI Risk Identification",
          description: "Advanced algorithms that continuously scan your environment to identify potential risks before they materialize, including pattern recognition for emerging threats."
        },
        {
          icon: <BarChart2 className="h-6 w-6" />,
          title: "Quantitative Risk Assessment",
          description: "Sophisticated modeling capabilities to quantify risks in financial terms, enabling data-driven prioritization and resource allocation."
        },
        {
          icon: <LineChart className="h-6 w-6" />,
          title: "Predictive Risk Analytics",
          description: "Machine learning models that analyze historical data and current trends to predict future risk scenarios and potential impacts."
        },
        {
          icon: <PieChart className="h-6 w-6" />,
          title: "Risk Visualization Dashboard",
          description: "Interactive dashboards that provide clear visualization of risk posture across different dimensions with drill-down capabilities for detailed analysis."
        },
        {
          icon: <Eye className="h-6 w-6" />,
          title: "Real-time Risk Monitoring",
          description: "Continuous monitoring of key risk indicators with automated alerts when thresholds are exceeded or anomalies are detected."
        },
        {
          icon: <ListChecks className="h-6 w-6" />,
          title: "Treatment Plan Automation",
          description: "Intelligent recommendation engine that suggests optimal risk treatment strategies based on best practices and organizational context."
        }
      ]}
      benefits={[
        {
          title: "Enhanced Risk Visibility",
          description: "Gain a holistic view of your risk landscape with comprehensive dashboards that provide visibility across all risk domains and business units."
        },
        {
          title: "Proactive Risk Management",
          description: "Shift from reactive to proactive risk management by identifying potential issues before they impact your business through predictive analytics."
        },
        {
          title: "Optimized Resource Allocation",
          description: "Focus your resources on the most critical risks through data-driven prioritization, ensuring maximum risk reduction for your investment."
        },
        {
          title: "Accelerated Decision Making",
          description: "Make faster, more informed decisions with real-time risk insights and automated recommendations based on your specific risk profile."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Risk Matrix Background */}
          <rect x="100" y="100" width="400" height="200" rx="8" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Axis Labels */}
          <text x="300" y="320" textAnchor="middle" fontSize="14" fill="#00E5FF">Likelihood</text>
          <text x="80" y="200" textAnchor="middle" fontSize="14" fill="#00E5FF" transform="rotate(-90, 80, 200)">Impact</text>
          
          {/* Grid Lines */}
          <line x1="100" y1="150" x2="500" y2="150" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="100" y1="200" x2="500" y2="200" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="100" y1="250" x2="500" y2="250" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3"/>
          
          <line x1="200" y1="100" x2="200" y2="300" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="300" y1="100" x2="300" y2="300" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="400" y1="100" x2="400" y2="300" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3"/>
          
          {/* Risk Points */}
          <circle cx="150" cy="150" r="8" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1.5">
            <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="250" cy="130" r="12" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1.5">
            <animate attributeName="r" values="12;14;12" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="350" cy="220" r="10" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1.5">
            <animate attributeName="r" values="10;12;10" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="430" cy="180" r="15" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1.5">
            <animate attributeName="r" values="15;17;15" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Predictive Path */}
          <path d="M150 150 Q250 120 350 220 T450 180" stroke="#00B2A9" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
          
          {/* Risk Levels */}
          <rect x="450" y="110" width="40" height="20" rx="4" fill="#00B2A9" fillOpacity="0.2"/>
          <text x="470" y="125" textAnchor="middle" fontSize="10" fill="#00E5FF">Low</text>
          
          <rect x="450" y="140" width="40" height="20" rx="4" fill="#00B2A9" fillOpacity="0.4"/>
          <text x="470" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Medium</text>
          
          <rect x="450" y="170" width="40" height="20" rx="4" fill="#00B2A9" fillOpacity="0.6"/>
          <text x="470" y="185" textAnchor="middle" fontSize="10" fill="#00E5FF">High</text>
          
          <rect x="450" y="200" width="40" height="20" rx="4" fill="#00B2A9" fillOpacity="0.8"/>
          <text x="470" y="215" textAnchor="middle" fontSize="10" fill="#00E5FF">Critical</text>
        </svg>
      }
      relatedSolutions={[
        {
          title: "AI-Driven Compliance Tools",
          link: "/solutions/ai-compliance"
        },
        {
          title: "GRC Automation Platforms",
          link: "/solutions/grc-automation"
        },
        {
          title: "Vulnerability Management",
          link: "/solutions/vulnerability-management"
        }
      ]}
    />
  );
};

export default RiskManagementPage;