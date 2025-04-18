import React from 'react';
import IndustryPageLayout from '@/components/IndustryPageLayout';
import { Shield, Code, Database, Cloud, Network, Lock, Cpu, Globe, Server } from 'lucide-react';

const TechnologyCompaniesPage = () => {
  return (
    <IndustryPageLayout
      title="Cybersecurity for Technology Companies"
      subtitle="Securing Innovation and Digital Products"
      description="Technology companies face sophisticated cyber threats targeting their intellectual property, customer data, and digital infrastructure. Intello delivers specialized security solutions designed to protect technology companies while supporting rapid innovation and growth."
      
      overview="Technology companies operate in a unique threat landscape, often targeted for their valuable IP, customer data, and strategic position in the digital economy. Our tailored solutions address the specific security needs of software companies, SaaS providers, hardware manufacturers, and technology consultancies."
      
      challenges={[
        {
          title: "Product Security",
          description: "Technology companies must ensure the security of their own products and services, which could affect their customers if compromised.",
          severity: "high"
        },
        {
          title: "Intellectual Property Protection",
          description: "Source code, algorithms, and other digital IP represent core business assets that require robust protection.",
          severity: "high"
        },
        {
          title: "Secure Operations",
          description: "Integrating security throughout technology operations without impeding innovation or speed.",
          severity: "high"
        },
        {
          title: "Supply Chain Security",
          description: "Technology companies must secure complex supply chains that can introduce vulnerabilities through third-party components.",
          severity: "medium"
        },
        {
          title: "Scaling Security",
          description: "Security solutions must scale with rapid business growth while maintaining protection across expanding infrastructure.",
          severity: "medium"
        }
      ]}
      
      solutions={[
        {
          title: "SDLC Security Assessment",
          description: "Evaluate and enhance security practices in the software development lifecycle through assessment of existing processes and security controls.",
          icon: <Code className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Cloud Security Architecture",
          description: "Design and implement secure cloud infrastructure with robust controls for data protection, access management, and compliance.",
          icon: <Cloud className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "API Security Framework",
          description: "Protect critical APIs with comprehensive security controls including authentication, rate limiting, and threat protection.",
          icon: <Network className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Data Protection Strategy",
          description: "Implement advanced data security solutions including encryption, tokenization, and secure access controls for sensitive information.",
          icon: <Database className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Product Security Program",
          description: "Establish a dedicated security program for technology products, ensuring security is built into everything you deliver to customers.",
          icon: <Shield className="h-10 w-10 text-[hsl(var(--primary))]" />
        }
      ]}
      
      caseStudy={{
        clientType: "Enterprise SaaS Provider",
        challenge: "A rapidly growing SaaS company needed to strengthen their product security and achieve compliance certifications to enter enterprise markets without affecting their operational efficiency.",
        solution: "Intello implemented a comprehensive product security program, including security assessment practices, cloud security architecture, and automated compliance controls.",
        results: [
          "Achieved SOC 2 Type II certification in just 4 months",
          "Security vulnerabilities in product reduced by 87%",
          "Successfully entered enterprise market with proven security posture",
          "Security automation integrated into operational processes with minimal impact on business efficiency"
        ]
      }}
      
      complianceRequirements={[
        {
          name: "SOC 2",
          description: "Auditing procedure ensuring service providers securely manage customer data with controls for security, availability, and confidentiality.",
          importance: "Critical for technology companies selling to enterprise customers or handling sensitive data."
        },
        {
          name: "ISO 27001",
          description: "International standard for information security management systems (ISMS) with comprehensive security controls.",
          importance: "Important for demonstrating mature security practices, especially for global operations."
        },
        {
          name: "GDPR and Data Protection",
          description: "Regulations governing how personal data must be collected, processed, and stored securely.",
          importance: "Mandatory for technology companies handling EU citizen data with significant penalties for non-compliance."
        },
        {
          name: "Cloud Security Alliance (CSA)",
          description: "Best practices for secure cloud implementation and service provision.",
          importance: "Important for cloud service providers and SaaS companies to demonstrate security capability."
        },
        {
          name: "Industry-Specific Compliance",
          description: "Additional requirements based on the industries served (healthcare, finance, government, etc.)",
          importance: "Critical for technology companies targeting regulated industries or handling regulated data."
        }
      ]}
      
      statistics={[
        {
          title: "Tech Company Attacks",
          value: "56%",
          context: "of technology companies experienced a significant security incident in the past year"
        },
        {
          title: "Vulnerability Discovery",
          value: "80%",
          context: "of critical vulnerabilities could be prevented with proper security assessments"
        },
        {
          title: "Compliance Impact",
          value: "68%",
          context: "of enterprise deals require security certifications or compliance verification"
        }
      ]}
      
      relatedServices={[
        {
          title: "Product Security Assessment",
          link: "/services/product-security-assessment"
        },
        {
          title: "API Security Assessment",
          link: "/services/api-security"
        },
        {
          title: "Cloud Security Architecture",
          link: "/services/cloud-security"
        }
      ]}
    />
  );
};

export default TechnologyCompaniesPage;