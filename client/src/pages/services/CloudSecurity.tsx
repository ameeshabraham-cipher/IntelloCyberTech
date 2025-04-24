import { 
  Cloud, 
  Lock, 
  ShieldCheck, 
  Database,
  Users,
  Settings
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const CloudSecurityPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "UAE Cloud Security Assessment Services",
    description: "Expert cloud security assessment services in Dubai & UAE. Evaluate and strengthen your cloud environment security posture with our comprehensive assessment services.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cloud Security Assessment",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations using cloud services requiring security assessment"
    }
  };

  // FAQ items for cloud security
  const faqItems = [
    {
      question: "What cloud platforms do your UAE cloud security assessments cover?",
      answer: "Our Dubai-based cloud security assessment services cover all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud, and local UAE cloud providers. We have specific expertise in hybrid cloud environments common in the UAE market."
    },
    {
      question: "How does your cloud security assessment address UAE compliance requirements?",
      answer: "Our cloud security assessments specifically incorporate UAE regulatory requirements including UAE Information Assurance Regulation, UAE Cloud Security Standards, and sector-specific requirements such as the UAE Central Bank regulations for financial services. We ensure your cloud implementations meet local compliance obligations while maintaining global security best practices."
    },
    {
      question: "What specific cloud security risks are most common in the UAE?",
      answer: "Common cloud security risks in UAE organizations include misconfigured access controls, inadequate data sovereignty controls, insufficient logging and monitoring, weak identity management, and lack of encryption for sensitive data. Our assessments specifically target these high-risk areas while comprehensively evaluating your entire cloud security posture."
    },
    {
      question: "How long does a typical cloud security assessment take for UAE organizations?",
      answer: "For UAE organizations, a comprehensive cloud security assessment typically takes 2-4 weeks depending on the environment complexity, number of cloud platforms, and scope of assessment. We work efficiently with minimal disruption to your operations while maintaining assessment thoroughness."
    },
    {
      question: "Do you provide cloud security implementation support after the assessment?",
      answer: "Yes, beyond assessment, our Dubai team provides comprehensive remediation support including cloud security architecture design, security control implementation, cloud security monitoring setup, and ongoing cloud security management services tailored to UAE business requirements."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Cloud Security Assessment Services Dubai | UAE Cloud Protection"
        description="Comprehensive cloud security assessment services in Dubai. Our UAE cloud security experts evaluate AWS, Azure, GCP environments using 22+ years of experience."
        url="/services/cloud-security"
        type="website"
      />
      <ServicePageLayout
        title="Cloud Security Assessment Services Dubai | UAE Cloud Protection"
        category="Cybersecurity Services"
        description="Evaluate and strengthen your cloud environment security with our UAE-focused assessment services designed for AWS, Azure, GCP and regional cloud providers."
        heroIcon={<Cloud className="h-8 w-8" />}
        overview="Our Dubai-based Cloud Security Assessment provides a thorough evaluation of your cloud environment's security posture across infrastructure, applications, data, and governance domains. Leveraging cloud-specific security frameworks and UAE compliance requirements, we identify security gaps, configuration weaknesses, and architectural vulnerabilities that could put your cloud workloads at risk, delivering actionable recommendations to enhance your cloud security posture while ensuring alignment with UAE data sovereignty and regulatory requirements."
        steps={[
          {
            title: "UAE-Focused Cloud Discovery & Inventory",
            description: "Comprehensive discovery of your cloud footprint across global and regional providers, including resource inventory, service utilization, architecture mapping, and data sovereignty considerations specific to UAE deployments."
          },
          {
            title: "Identity & Access Management Review",
            description: "Detailed assessment of IAM configurations, privilege management, role assignments, and authentication controls across cloud services with specific focus on UAE access control requirements and privileged access management best practices."
          },
          {
            title: "Cloud Infrastructure Configuration Analysis",
            description: "Evaluation of cloud infrastructure configurations against security best practices and UAE cloud security standards, including network security, instance hardening, API protection, and perimeter security controls tailored to regional threat landscape."
          },
          {
            title: "UAE Data Protection Assessment",
            description: "Comprehensive review of data protection controls, including encryption implementation, key management, data classification, storage security, and data residence controls to ensure compliance with UAE data protection requirements and cross-border transfer restrictions."
          },
          {
            title: "Security Monitoring & Logging Evaluation",
            description: "Assessment of cloud security monitoring, logging configurations, threat detection capabilities, and incident response readiness with specific focus on meeting UAE logging retention requirements and security monitoring capabilities."
          },
          {
            title: "DevSecOps Integration Review",
            description: "Evaluation of security integration within cloud development and deployment pipelines, including CI/CD security controls, container security, and infrastructure-as-code security validation tailored to your UAE development practices."
          },
          {
            title: "UAE Compliance Mapping Analysis",
            description: "Detailed mapping of cloud controls against UAE regulatory requirements including ISR, NESA, Central Bank regulations, and sector-specific compliance obligations to identify compliance gaps and remediation needs."
          },
          {
            title: "Recommendations & Remediation Planning",
            description: "Development of prioritized security recommendations with detailed remediation guidance specific to your cloud environment and UAE regulatory context, including implementation roadmap and resource requirements."
          }
        ]}
        benefits={[
          {
            title: "Comprehensive UAE Cloud Security Visibility",
            content: "Gain complete visibility into your cloud security posture across all deployed services, resources, and providers with specific insights into UAE compliance status and regional security considerations."
          },
          {
            title: "Reduced Cloud Security Risks",
            content: "Identify and address cloud-specific security risks before they can be exploited, protecting your cloud workloads and data from threats targeting UAE organizations and regional cloud deployments."
          },
          {
            title: "UAE Cloud Security Best Practices",
            content: "Align your cloud configurations with industry best practices, cloud provider security recommendations, and UAE-specific security standards to establish a robust security foundation."
          },
          {
            title: "UAE Regulatory Compliance Readiness",
            content: "Prepare your cloud environment for UAE compliance requirements including Information Security Regulation, NESA standards, Central Bank requirements, and sector-specific obligations relevant to your industry."
          },
          {
            title: "Secure Cloud Architecture for UAE Operations",
            content: "Receive expert guidance on architecting secure cloud environments that balance security, performance, and cost optimization while meeting UAE data residency and sovereignty requirements."
          },
          {
            title: "Enhanced Cloud Operations Security",
            content: "Improve operational security practices for cloud management, maintenance, and governance with controls aligned to UAE business operations and regional security considerations."
          },
          {
            title: "Dubai-Based Expert Support",
            content: "Work with our Dubai-based cloud security specialists who understand the UAE market, regional regulatory landscape, and unique security challenges facing Gulf region organizations using cloud services."
          }
        ]}
        deliverables={[
          {
            title: "UAE-Focused Cloud Security Executive Summary",
            description: "Business-focused overview of key findings, risk assessment, and strategic recommendations for cloud security enhancement with specific UAE regulatory and compliance context for executive stakeholders."
          },
          {
            title: "Detailed Cloud Security Assessment Report",
            description: "Comprehensive documentation of assessment methodology, findings, and evidence across all evaluated cloud security domains with UAE-specific considerations highlighted throughout the analysis."
          },
          {
            title: "UAE Cloud Configuration Review",
            description: "Detailed analysis of cloud service configurations with identified security issues, risks, and recommended secure configurations that address both global cloud security best practices and UAE regulatory requirements."
          },
          {
            title: "UAE Compliance Gap Analysis",
            description: "Thorough analysis of your cloud environment against UAE regulatory requirements with detailed compliance gaps, remediation recommendations, and implementation guidance to achieve compliance."
          },
          {
            title: "Cloud Security Remediation Roadmap",
            description: "Prioritized implementation plan for addressing identified cloud security issues, including quick wins and strategic improvements with timelines, resources, and dependencies clearly defined for UAE implementation."
          },
          {
            title: "UAE-Compliant Cloud Security Architecture",
            description: "Guidance on secure cloud architecture patterns and design considerations specific to your workloads and UAE compliance requirements, including reference architectures and security control frameworks."
          },
          {
            title: "Cloud Security Guidelines & Policies",
            description: "Customized cloud security guidelines and policy recommendations tailored to your organization's cloud usage patterns and aligned with UAE regulatory expectations and compliance requirements."
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
            
            {/* UAE Element */}
            <rect x="450" y="270" width="60" height="30" rx="5" fill="#0A1024" stroke="#eb3443" strokeWidth="1.5"/>
            <text x="480" y="285" textAnchor="middle" fontSize="8" fill="#FFFFFF">UAE</text>
            <text x="480" y="295" textAnchor="middle" fontSize="6" fill="#FFFFFF">Compliance</text>
            
            <line x1="390" y1="275" x2="445" y2="285" stroke="#eb3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
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
          },
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Cloud Security Assessment FAQs"
        subtitle="Common questions about our cloud security services in the UAE"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default CloudSecurityPage;