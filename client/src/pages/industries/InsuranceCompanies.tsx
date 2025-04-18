import React from 'react';
import IndustryPageLayout from '@/components/IndustryPageLayout';
import { Shield, FileText, Lock, Users, Server, AlertTriangle, Database, BarChart3, ClipboardCheck } from 'lucide-react';

const InsuranceCompaniesPage = () => {
  return (
    <IndustryPageLayout
      title="Cybersecurity for Insurance Companies"
      subtitle="Protecting Sensitive Policyholder Data & Claims Processing Systems"
      description="Insurance companies handle vast amounts of sensitive personal, financial, and health data, making them prime targets for cyberattacks. Intello offers comprehensive security solutions designed specifically for the insurance sector's unique challenges and regulatory requirements."
      
      overview="The insurance industry's digital transformation has created new vulnerabilities alongside opportunities. From online policy applications to automated claims processing, each digital touchpoint presents potential security risks. Our specialized solutions protect the entire insurance data lifecycle while ensuring compliance with industry-specific regulations."
      
      challenges={[
        {
          title: "Sensitive Data Protection",
          description: "Insurance companies store large volumes of personal, financial, and in some cases, health data that require robust security controls.",
          severity: "high"
        },
        {
          title: "Legacy System Vulnerabilities",
          description: "Many insurers operate with legacy systems that lack modern security features and are difficult to update or replace.",
          severity: "high"
        },
        {
          title: "Regulatory Compliance",
          description: "The insurance sector faces complex compliance requirements including GDPR, NYDFS, and industry-specific regulations.",
          severity: "high"
        },
        {
          title: "Third-Party Ecosystem Risks",
          description: "Insurers often work with extensive networks of brokers, agents, and service providers, creating additional security challenges.",
          severity: "medium"
        },
        {
          title: "Claims Fraud",
          description: "Digital claims processing systems are vulnerable to sophisticated fraud attempts that can lead to significant financial losses.",
          severity: "medium"
        }
      ]}
      
      solutions={[
        {
          title: "Insurance Data Security Framework",
          description: "Implement a comprehensive security framework specifically designed for insurance data, with enhanced protection for personally identifiable information (PII).",
          icon: <Shield className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Claims Processing Security",
          description: "Secure automated claims systems with fraud detection capabilities, authentication controls, and data validation to prevent unauthorized claims.",
          icon: <FileText className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Regulatory Compliance Automation",
          description: "Deploy solutions that automate compliance with insurance-specific regulations, including data protection, retention, and reporting requirements.",
          icon: <ClipboardCheck className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Secure Agent/Broker Portal",
          description: "Build secure platforms for agent and broker interactions with multi-factor authentication, access controls, and encrypted communications.",
          icon: <Users className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Legacy System Security Enhancement",
          description: "Implement security solutions that protect legacy systems without requiring complete replacement, including API security layers and monitoring.",
          icon: <Server className="h-10 w-10 text-[hsl(var(--primary))]" />
        }
      ]}
      
      caseStudy={{
        clientType: "Regional Insurance Provider",
        challenge: "A mid-sized insurance company struggled with securing their digital transformation initiatives while managing a mix of legacy systems and new cloud-based applications.",
        solution: "Intello deployed a comprehensive security program including data protection controls, API security layer for legacy systems, and a robust identity management solution for their partner network.",
        results: [
          "Achieved compliance with industry regulations across all systems",
          "Security incidents reduced by 73% within the first year",
          "Successfully secured cloud migration of critical insurance applications",
          "Customer portal security enhanced with zero impact on user experience"
        ]
      }}
      
      complianceRequirements={[
        {
          name: "GDPR and Data Protection Laws",
          description: "Regulations governing the collection, processing, and storage of personal data for insurance customers.",
          importance: "Critical for operating in regulated markets and avoiding significant penalties."
        },
        {
          name: "NYDFS Cybersecurity Regulation",
          description: "New York's requirements for financial services companies, including insurance, to maintain cybersecurity programs.",
          importance: "Mandatory for insurers operating in New York and increasingly a model for other regions."
        },
        {
          name: "Insurance Data Security Model Law",
          description: "NAIC model law establishing standards for data security and breach notification in the insurance industry.",
          importance: "Adopted by many states as the standard for insurance data protection."
        },
        {
          name: "Health Insurance Portability and Accountability Act (HIPAA)",
          description: "For health insurers, regulations protecting the privacy and security of health information.",
          importance: "Mandatory for health insurers with significant penalties for non-compliance."
        },
        {
          name: "Payment Card Industry Data Security Standard (PCI DSS)",
          description: "Security standards for organizations that handle credit card information for premium payments.",
          importance: "Required for insurance companies that process credit card payments."
        }
      ]}
      
      statistics={[
        {
          title: "Insurance Data Breaches",
          value: "34%",
          context: "of insurance companies reported a significant data breach in the last three years"
        },
        {
          title: "Cybersecurity Spending",
          value: "13%",
          context: "annual increase in cybersecurity spending by insurance companies"
        },
        {
          title: "Digital Insurance Growth",
          value: "47%",
          context: "of insurance policies are now initiated through digital channels, increasing attack surface"
        }
      ]}
      
      relatedServices={[
        {
          title: "Insurance Compliance Automation",
          link: "/services/insurance-compliance"
        },
        {
          title: "Secure Digital Transformation",
          link: "/services/digital-transformation-security"
        },
        {
          title: "Data Protection Impact Assessment",
          link: "/services/data-protection-assessment"
        }
      ]}
    />
  );
};

export default InsuranceCompaniesPage;