import { 
  Cloud, 
  Lock, 
  Shield, 
  FileCheck, 
  Server,
  Database,
  Eye
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const CloudSecurityAssessmentPage = () => {
  return (
    <ServicePageLayout
      title="Cloud Security Assessment"
      category="IT Security Services"
      description="Identify and mitigate cloud-specific security risks with our comprehensive cloud security assessment service, ensuring your cloud infrastructure and data remain protected."
      heroIcon={<Cloud className="h-8 w-8" />}
      overview="Our Cloud Security Assessment service provides a comprehensive evaluation of your cloud environment's security posture across AWS, Azure, Google Cloud, and other platforms. We identify vulnerabilities, configuration weaknesses, compliance gaps, and architectural flaws that could compromise your cloud infrastructure and data. Our cloud security experts employ industry-leading methodologies, automated tools, and manual testing to deliver actionable insights and recommendations that strengthen your cloud security controls, reduce risk exposure, and ensure regulatory compliance without hampering the agility and innovation that cloud platforms enable."
      steps={[
        {
          title: "Scope Definition & Discovery",
          description: "We work with your team to define assessment boundaries, identify critical cloud assets and services, document existing security controls, and gather cloud architecture documentation to ensure comprehensive coverage of your entire cloud environment."
        },
        {
          title: "Cloud Configuration Analysis",
          description: "Our specialists analyze cloud service configurations across compute, storage, network, and IAM layers, identifying security gaps, overly permissive settings, and misconfigurations that create security vulnerabilities or increase your attack surface."
        },
        {
          title: "Identity & Access Management Review",
          description: "We thoroughly evaluate your cloud IAM implementation, examining role definitions, access policies, permission boundaries, authentication mechanisms, and privilege management to detect excessive privileges, inadequate separation of duties, and identity-related security weaknesses."
        },
        {
          title: "Data Protection Assessment",
          description: "Our team assesses your cloud data security practices, examining encryption implementations, key management, data classification, backup procedures, and data lifecycle controls to ensure sensitive information remains protected at rest, in transit, and during processing."
        },
        {
          title: "Network Security Evaluation",
          description: "We analyze your cloud network architecture, segmentation, traffic controls, VPC configurations, and security group rules to identify network-level vulnerabilities, unsecured communication paths, and improper isolation that could enable lateral movement by attackers."
        },
        {
          title: "Compliance & Governance Review",
          description: "Our compliance experts map your cloud environment against relevant regulatory requirements and security frameworks (including CIS, NIST, PCI DSS, and HIPAA), identifying compliance gaps and recommending remediation actions to achieve and maintain compliance."
        },
        {
          title: "Findings Analysis & Prioritization",
          description: "We consolidate assessment findings, prioritize vulnerabilities based on risk level and business impact, and develop a remediation roadmap that addresses critical issues first while optimizing security resource allocation for maximum risk reduction."
        }
      ]}
      benefits={[
        {
          title: "Comprehensive Visibility",
          content: "Gain unprecedented clarity into your cloud security posture across all deployed services, accounts, and regions—identifying hidden security gaps, shadow IT resources, and unexpected vulnerabilities that typical security tools might miss."
        },
        {
          title: "Risk-Based Prioritization",
          content: "Receive expert guidance on addressing cloud security issues in order of business risk, allowing you to focus limited security resources on the vulnerabilities that pose the greatest threat to your organization's most critical assets and operations."
        },
        {
          title: "Regulatory Compliance",
          content: "Align your cloud security controls with industry regulations and frameworks including PCI DSS, HIPAA, GDPR, and others—avoiding costly compliance violations, penalties, and reputational damage associated with security non-compliance."
        },
        {
          title: "Cost Optimization",
          content: "Identify unused or unnecessarily expensive security controls while strengthening overall security posture—preventing security incidents that could result in significant financial and reputational losses that dwarf assessment investments."
        },
        {
          title: "DevSecOps Enablement",
          content: "Receive actionable recommendations for integrating security into your cloud deployment pipeline, shifting security left in your development process and enabling secure, rapid innovation without creating new vulnerabilities."
        },
        {
          title: "Knowledge Transfer",
          content: "Build internal cloud security capabilities through knowledge transfer sessions and detailed documentation, empowering your team with cloud security best practices, threat awareness, and remediating techniques that enhance long-term security resilience."
        }
      ]}
      deliverables={[
        {
          title: "Executive Summary Report",
          description: "Strategic overview of assessment findings, overall cloud security posture, primary risk areas, and high-level recommendations—designed for executive stakeholders who need clear business context without technical details."
        },
        {
          title: "Detailed Technical Report",
          description: "Comprehensive documentation of all identified vulnerabilities, misconfigurations, and security weaknesses with technical evidence, affected cloud resources, exploitability details, and specific remediation steps for each finding."
        },
        {
          title: "Cloud Security Scorecard",
          description: "Quantitative evaluation of your cloud security maturity across key domains (identity, data protection, network, etc.) with comparative benchmarking against industry peers and security best practices."
        },
        {
          title: "Prioritized Remediation Roadmap",
          description: "Actionable, time-based plan for addressing identified vulnerabilities in order of risk impact, with clear ownership assignments, estimated effort levels, and technical implementation guidance for each remediation action."
        },
        {
          title: "Cloud Security Architecture Recommendations",
          description: "Forward-looking architectural guidance for strengthening your cloud security foundation, including reference architectures, security patterns, and design principles tailored to your specific cloud environments and business requirements."
        },
        {
          title: "Compliance Gap Analysis Matrix",
          description: "Detailed mapping of your current cloud environment against applicable regulatory requirements and security frameworks, with clear identification of compliance gaps and specific controls needed for compliance achievement."
        },
        {
          title: "Cloud Security Policy Templates",
          description: "Customizable cloud security policy templates addressing key risk areas including cloud access management, data protection, incident response, and configuration management—accelerating your cloud governance implementation."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cloud Background */}
          <path d="M300 120 Q350 90 400 120 Q450 150 430 200 Q470 230 450 280 Q420 330 350 320 Q320 360 250 330 Q180 340 170 280 Q140 230 170 180 Q160 130 200 110 Q250 90 300 120" fill="#0A1024" stroke="#00E5FF" strokeWidth="2" />
          
          {/* Server Icons */}
          <rect x="220" y="160" width="40" height="60" rx="2" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          <rect x="225" y="170" width="30" height="5" rx="1" fill="#00E5FF" />
          <rect x="225" y="180" width="30" height="5" rx="1" fill="#00E5FF" />
          <rect x="225" y="190" width="30" height="5" rx="1" fill="#00E5FF" />
          
          <rect x="280" y="160" width="40" height="60" rx="2" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          <rect x="285" y="170" width="30" height="5" rx="1" fill="#00E5FF" />
          <rect x="285" y="180" width="30" height="5" rx="1" fill="#00E5FF" />
          <rect x="285" y="190" width="30" height="5" rx="1" fill="#00E5FF" />
          
          <rect x="340" y="160" width="40" height="60" rx="2" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          <rect x="345" y="170" width="30" height="5" rx="1" fill="#00E5FF" />
          <rect x="345" y="180" width="30" height="5" rx="1" fill="#00E5FF" />
          <rect x="345" y="190" width="30" height="5" rx="1" fill="#00E5FF" />
          
          {/* Database */}
          <ellipse cx="250" cy="250" rx="20" ry="10" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          <rect x="230" y="250" width="40" height="30" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          <ellipse cx="250" cy="280" rx="20" ry="10" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          
          <ellipse cx="320" cy="250" rx="20" ry="10" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          <rect x="300" y="250" width="40" height="30" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          <ellipse cx="320" cy="280" rx="20" ry="10" fill="#111" stroke="#00B2A9" strokeWidth="1" />
          
          {/* Lock Icons */}
          <rect x="240" y="140" width="20" height="15" rx="2" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1" />
          <rect x="245" y="130" width="10" height="10" rx="5" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1" />
          
          <rect x="300" y="140" width="20" height="15" rx="2" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1" />
          <rect x="305" y="130" width="10" height="10" rx="5" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1" />
          
          <rect x="360" y="140" width="20" height="15" rx="2" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1" />
          <rect x="365" y="130" width="10" height="10" rx="5" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1" />
          
          {/* Connecting Lines */}
          <line x1="240" y1="230" x2="240" y2="245" stroke="#00E5FF" strokeWidth="1" />
          <line x1="300" y1="230" x2="300" y2="245" stroke="#00E5FF" strokeWidth="1" />
          <line x1="360" y1="230" x2="360" y2="245" stroke="#00E5FF" strokeWidth="1" />
          
          {/* Shield */}
          <path d="M300 300 L330 310 L330 340 L300 360 L270 340 L270 310 Z" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5" />
          <path d="M300 310 L315 315 L315 335 L300 345 L285 335 L285 315 Z" fill="#00B2A9" fillOpacity="0.2" />
          <path d="M300 320 L305 322 L305 330 L300 335 L295 330 L295 322 Z" fill="#00E5FF" fillOpacity="0.5" />
          
          {/* Animated Scan Lines */}
          <line x1="200" y1="140" x2="400" y2="140" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="5,5">
            <animate attributeName="y1" values="140;280;140" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y2" values="140;280;140" dur="3s" repeatCount="indefinite" />
          </line>
          
          <line x1="200" y1="200" x2="400" y2="200" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="5,5">
            <animate attributeName="y1" values="200;340;200" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="y2" values="200;340;200" dur="3s" begin="1s" repeatCount="indefinite" />
          </line>
          
          {/* Security Points */}
          <circle cx="240" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="300" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.2;1" dur="2s" begin="0.7s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="360" cy="180" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.2;1" dur="2s" begin="1.4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="250" cy="260" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.2;1" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="320" cy="260" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.2;1" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Vulnerability Assessment",
          link: "/services/vapt"
        }
      ]}
    />
  );
};

export default CloudSecurityAssessmentPage;