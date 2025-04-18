import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, FileText, Lock, Users, ClipboardCheck, BookOpen, Database, Network, Eye } from 'lucide-react';

const PrivacyCompliancePage = () => {
  return (
    <ServicePageLayout
      title="Privacy Compliance Implementation"
      category="Governance & Compliance"
      description="Our Privacy Compliance Implementation service helps organizations build comprehensive privacy programs that address regulatory requirements while enhancing customer trust. We guide you through the entire process from assessment to implementation of privacy controls across your data ecosystem."
      heroIcon={<Lock className="h-8 w-8" />}
      
      overview={`
        <p>Privacy regulations like GDPR, CCPA, and regional PDPA laws have transformed how organizations must handle personal data. Our service provides structured guidance through the complex process of building a compliant privacy program that addresses these requirements.</p>
        
        <p>We help you implement practical, sustainable privacy controls that protect personal data while enabling business operations. Our approach balances compliance requirements with operational efficiency, integrating privacy into your processes rather than treating it as a separate function.</p>
      `}
      
      keyBenefits={[
        {
          title: "Achieve Multi-Framework Compliance",
          description: "Meet requirements across multiple privacy regulations with an integrated approach that addresses all applicable laws.",
          icon: <ClipboardCheck className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Reduce Privacy Risks",
          description: "Minimize the risk of data breaches, regulatory penalties, and reputation damage through robust privacy controls.",
          icon: <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Enhance Customer Trust",
          description: "Demonstrate your commitment to protecting personal data, building stronger relationships with customers and partners.",
          icon: <Users className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Operationalize Privacy",
          description: "Transform privacy from a compliance exercise into an integrated business function with clear processes and responsibilities.",
          icon: <BookOpen className="h-6 w-6 text-[hsl(var(--primary))]" />
        }
      ]}
      
      processSteps={[
        {
          title: "Privacy Assessment",
          description: "Evaluate current privacy practices, data handling activities, and compliance gaps against applicable regulations."
        },
        {
          title: "Program Development",
          description: "Design a comprehensive privacy program including governance structure, policies, and controls tailored to your organization."
        },
        {
          title: "Data Mapping & Inventory",
          description: "Create detailed maps of personal data flows, establishing a complete inventory of data processing activities."
        },
        {
          title: "Policy & Procedure Creation",
          description: "Develop privacy policies, consent mechanisms, and operational procedures for handling personal data."
        },
        {
          title: "Implementation Support",
          description: "Guide the deployment of technical controls, process changes, and training programs to operationalize privacy requirements."
        },
        {
          title: "Monitoring & Maintenance",
          description: "Establish ongoing compliance monitoring, incident handling procedures, and program maintenance mechanisms."
        }
      ]}
      
      features={[
        {
          title: "Data Mapping & Inventory",
          description: "Comprehensive identification and categorization of personal data across your organization with visualized data flows and processing activities.",
          icon: <Database className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Privacy Impact Assessments",
          description: "Structured evaluation of data processing activities to identify privacy risks and determine appropriate mitigation measures.",
          icon: <Shield className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Policy & Notice Development",
          description: "Creation of privacy policies, notices, consent mechanisms, and other documentation required for regulatory compliance.",
          icon: <FileText className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Data Subject Rights Management",
          description: "Implementation of processes and technologies to fulfill data subject requests for access, deletion, portability, and other rights.",
          icon: <Users className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Third-Party Risk Management",
          description: "Development of vendor assessment processes, contract clauses, and monitoring controls for data processors and other third parties.",
          icon: <Network className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Privacy Governance Framework",
          description: "Establishment of roles, responsibilities, reporting structures, and oversight mechanisms for ongoing privacy management.",
          icon: <Eye className="h-12 w-12 text-[hsl(var(--primary))]" />
        }
      ]}
      
      faqs={[
        {
          question: "Which privacy regulations does your service address?",
          answer: "Our service covers major global privacy regulations including GDPR (European Union), CCPA/CPRA (California), LGPD (Brazil), PIPL (China), and regional laws like UAE PDPL, KSA PDPL, Bahrain PDPL, and various other data protection laws. We take a harmonized approach that addresses common requirements across frameworks while accounting for region-specific variations."
        },
        {
          question: "How long does it typically take to implement a privacy program?",
          answer: "Implementation timelines vary based on organizational size, complexity, and current maturity level. A baseline program can typically be established in 3-6 months, with more comprehensive implementations taking 6-12 months. We develop phased implementation plans that prioritize high-risk areas and compliance fundamentals while building toward comprehensive coverage."
        },
        {
          question: "How do you adapt privacy programs for specific industries?",
          answer: "We tailor privacy programs to address industry-specific requirements, data types, and processing activities. For example, healthcare organizations need specialized controls for health data, financial institutions require specific safeguards for financial information, and technology companies often need robust frameworks for product privacy. Our approach incorporates industry best practices and regulatory guidance."
        },
        {
          question: "What's your approach to technology implementation for privacy?",
          answer: "We focus on practical solutions that leverage existing technologies where possible while identifying gaps that may require new tools. Our recommendations balance compliance requirements with operational efficiency, considering solutions for data discovery, classification, subject rights management, consent, and monitoring. We remain vendor-neutral while providing guidance on tool selection when needed."
        },
        {
          question: "How do you ensure privacy programs remain up-to-date?",
          answer: "We build sustainability into privacy programs through monitoring mechanisms, periodic reviews, and integration with change management processes. We help establish privacy impact assessment procedures for new initiatives, regular compliance checkpoints, and frameworks for addressing regulatory changes. Optional ongoing advisory services can provide updates on evolving requirements and best practices."
        }
      ]}
      
      cta={{
        title: "Ready to Build Your Privacy Program?",
        subtitle: "Implement comprehensive privacy compliance with expert guidance.",
        buttonText: "Start Your Privacy Journey",
        buttonLink: "/contact"
      }}
      
      relatedServices={[
        {
          title: "Data Protection Impact Assessments",
          link: "/services/data-protection-assessment"
        },
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        },
        {
          title: "Privacy Training & Awareness",
          link: "/services/privacy-training"
        }
      ]}
    />
  );
};

export default PrivacyCompliancePage;