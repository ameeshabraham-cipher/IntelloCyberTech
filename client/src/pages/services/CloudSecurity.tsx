import { 
  Cloud, 
  Lock, 
  ShieldCheck, 
  Database,
  Users,
  Settings
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const CloudSecurityPage = () => {
  return (
    <ServicePageLayout
      title="Cloud Security Assessment"
      category="Cybersecurity Services"
      description="Evaluate and strengthen your cloud environment's security with our comprehensive assessment services designed for modern cloud architectures."
      heroIcon={<Cloud className="h-8 w-8" />}
      overview="Our Cloud Security Assessment provides a thorough evaluation of your cloud environment's security posture across infrastructure, applications, data, and governance domains. Leveraging cloud-specific security frameworks and best practices, we identify security gaps, configuration weaknesses, and architectural vulnerabilities that could put your cloud workloads at risk, delivering actionable recommendations to enhance your cloud security posture."
      steps={[
        {
          title: "Cloud Discovery & Inventory",
          description: "Comprehensive discovery of your cloud footprint across providers, including resource inventory, service utilization, and architecture mapping."
        },
        {
          title: "Identity & Access Management Review",
          description: "Detailed assessment of IAM configurations, privilege management, role assignments, and authentication controls across cloud services."
        },
        {
          title: "Infrastructure Configuration Analysis",
          description: "Evaluation of cloud infrastructure configurations against security best practices, including network security, instance hardening, and API protection."
        },
        {
          title: "Data Protection Assessment",
          description: "Review of data protection controls, including encryption implementation, key management, data classification, and storage security."
        },
        {
          title: "Security Monitoring & Logging Evaluation",
          description: "Assessment of cloud security monitoring, logging configurations, threat detection capabilities, and incident response readiness."
        },
        {
          title: "DevSecOps Integration Review",
          description: "Evaluation of security integration within cloud development and deployment pipelines, including CI/CD security controls."
        },
        {
          title: "Recommendations & Remediation Planning",
          description: "Development of prioritized security recommendations with detailed remediation guidance specific to your cloud environment."
        }
      ]}
      benefits={[
        {
          title: "Comprehensive Cloud Security Visibility",
          content: "Gain complete visibility into your cloud security posture across all deployed services, resources, and providers."
        },
        {
          title: "Reduced Cloud Security Risks",
          content: "Identify and address cloud-specific security risks before they can be exploited, protecting your cloud workloads and data."
        },
        {
          title: "Cloud Security Best Practices",
          content: "Align your cloud configurations with industry best practices and cloud provider security recommendations."
        },
        {
          title: "Compliance Readiness",
          content: "Prepare your cloud environment for compliance requirements relevant to your industry and regulatory landscape."
        },
        {
          title: "Secure Cloud Architecture",
          content: "Receive expert guidance on architecting secure cloud environments that balance security, performance, and cost optimization."
        }
      ]}
      deliverables={[
        {
          title: "Cloud Security Executive Summary",
          description: "Business-focused overview of key findings, risk assessment, and strategic recommendations for cloud security enhancement."
        },
        {
          title: "Detailed Cloud Security Assessment Report",
          description: "Comprehensive documentation of assessment methodology, findings, and evidence across all evaluated cloud security domains."
        },
        {
          title: "Cloud Configuration Review",
          description: "Detailed analysis of cloud service configurations with identified security issues, risks, and recommended secure configurations."
        },
        {
          title: "Cloud Security Remediation Roadmap",
          description: "Prioritized implementation plan for addressing identified cloud security issues, including quick wins and strategic improvements."
        },
        {
          title: "Cloud Security Architecture Recommendations",
          description: "Guidance on secure cloud architecture patterns and design considerations specific to your workloads and requirements."
        },
        {
          title: "Cloud Security Guidelines",
          description: "Customized cloud security guidelines and policy recommendations tailored to your organization's cloud usage patterns."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Cloud Shape */}
          <path d="M300 120 Q350 100 400 120 Q440 140 440 180 Q440 220 400 240 Q350 260 300 240 Q250 260 200 240 Q160 220 160 180 Q160 140 200 120 Q250 100 300 120" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Cloud Resources */}
          <rect x="220" y="150" width="30" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="235" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">VM</text>
          
          <rect x="260" y="150" width="30" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="275" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">VM</text>
          
          <rect x="300" y="150" width="30" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="315" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">VM</text>
          
          <rect x="340" y="150" width="30" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="355" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">VM</text>
          
          <circle cx="235" cy="200" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="235" y="204" textAnchor="middle" fontSize="9" fill="#00E5FF">DB</text>
          
          <circle cx="275" cy="200" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="275" y="204" textAnchor="middle" fontSize="9" fill="#00E5FF">DB</text>
          
          <rect x="300" y="190" width="70" height="20" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="335" y="204" textAnchor="middle" fontSize="9" fill="#00E5FF">Storage</text>
          
          {/* Security Layer */}
          <path d="M300 120 Q350 100 400 120 Q440 140 440 180 Q440 220 400 240 Q350 260 300 240 Q250 260 200 240 Q160 220 160 180 Q160 140 200 120 Q250 100 300 120" fill="none" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Security Components */}
          <rect x="180" y="260" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="210" y="280" textAnchor="middle" fontSize="9" fill="#00E5FF">IAM</text>
          
          <rect x="270" y="260" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="280" textAnchor="middle" fontSize="9" fill="#00E5FF">Network</text>
          
          <rect x="360" y="260" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="390" y="280" textAnchor="middle" fontSize="9" fill="#00E5FF">Logging</text>
          
          {/* Assessment Components */}
          <rect x="120" y="170" width="60" height="20" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="150" y="184" textAnchor="middle" fontSize="8" fill="#00E5FF">Discovery</text>
          
          <rect x="120" y="200" width="60" height="20" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="150" y="214" textAnchor="middle" fontSize="8" fill="#00E5FF">Assessment</text>
          
          <rect x="120" y="230" width="60" height="20" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="150" y="244" textAnchor="middle" fontSize="8" fill="#00E5FF">Remediation</text>
          
          {/* Assessment Lines */}
          <line x1="120" y1="180" x2="160" y2="180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="120" y1="210" x2="160" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="120" y1="240" x2="160" y2="240" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2"/>
          
          {/* Cloud Shield */}
          <path d="M450 180 Q490 190 490 210 Q490 230 450 240 Q410 230 410 210 Q410 190 450 180" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="450" y="210" textAnchor="middle" fontSize="9" fill="#00E5FF">Security</text>
          <text x="450" y="222" textAnchor="middle" fontSize="9" fill="#00E5FF">Controls</text>
          
          {/* Animated Elements */}
          <circle cx="300" cy="90" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="90;110;90" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="270" r="3" fill="#00E5FF">
            <animate attributeName="cy" values="270;250;270" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="300" r="40" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite"/>
          </circle>
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
          title: "SOC 2 Compliance",
          link: "/services/soc2"
        }
      ]}
    />
  );
};

export default CloudSecurityPage;