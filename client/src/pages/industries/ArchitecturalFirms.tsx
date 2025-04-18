import React from 'react';
import IndustryPageLayout from '@/components/IndustryPageLayout';
import { Shield, FileText, Lock, PenTool, Building, HardDrive, Network, Cloud, Layers } from 'lucide-react';

const ArchitecturalFirmsPage = () => {
  return (
    <IndustryPageLayout
      title="Cybersecurity for Architectural Firms"
      subtitle="Protecting Intellectual Property and Design Assets"
      description="Architectural firms create and store valuable intellectual property in the form of designs, plans, and models. Intello provides tailored cybersecurity solutions to protect these digital assets while enabling secure collaboration among project stakeholders."
      
      overview="Architectural firms face unique cybersecurity challenges as they balance the need for creative collaboration with the protection of valuable intellectual property. Our solutions secure critical design assets while enabling the collaborative workflows essential to modern architectural practice."
      
      challenges={[
        {
          title: "Intellectual Property Protection",
          description: "Architectural designs and plans represent significant IP that must be protected from theft or unauthorized access.",
          severity: "high"
        },
        {
          title: "Collaborative Workflows",
          description: "Architectural projects require collaboration among multiple stakeholders, creating complex access management challenges.",
          severity: "medium"
        },
        {
          title: "BIM and 3D Model Security",
          description: "Complex Building Information Modeling (BIM) files and 3D models require specialized security approaches.",
          severity: "high"
        },
        {
          title: "Client Confidentiality",
          description: "Architectural firms often work on confidential or sensitive projects requiring strict information security.",
          severity: "medium"
        },
        {
          title: "Remote Access Security",
          description: "The need for off-site access to large design files creates unique security considerations for architectural firms.",
          severity: "medium"
        }
      ]}
      
      solutions={[
        {
          title: "Intellectual Property Protection",
          description: "Implement comprehensive controls to protect valuable designs and plans from theft, including digital rights management and watermarking.",
          icon: <FileText className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Secure Collaboration Platform",
          description: "Deploy secure project collaboration tools with granular access controls, allowing safe sharing of designs with clients and contractors.",
          icon: <PenTool className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "BIM Security Framework",
          description: "Specialized security controls for Building Information Modeling (BIM) systems, protecting complex 3D models and associated data.",
          icon: <Building className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Secure Cloud Storage",
          description: "Protected cloud storage solutions optimized for large architectural files with encryption, access controls, and audit capabilities.",
          icon: <Cloud className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Device and Endpoint Security",
          description: "Secure workstations, mobile devices, and specialized design hardware used by architectural professionals.",
          icon: <HardDrive className="h-10 w-10 text-[hsl(var(--primary))]" />
        }
      ]}
      
      caseStudy={{
        clientType: "Award-Winning Architectural Design Firm",
        challenge: "A prominent architectural firm experienced unauthorized access to proprietary designs and struggled with securely sharing large project files with clients and contractors.",
        solution: "Intello implemented a comprehensive security program including IP protection controls, secure file sharing platform, and advanced identity management tailored for architectural workflows.",
        results: [
          "100% elimination of unauthorized access to design assets",
          "Secure collaboration enabled across 27 active projects",
          "BIM security strengthened with no impact on design efficiency",
          "Client confidence increased with visible security measures"
        ]
      }}
      
      complianceRequirements={[
        {
          name: "Intellectual Property Protection",
          description: "Legal requirements for protecting proprietary designs, plans, and other creative works.",
          importance: "Essential for preserving the firm's core business assets and competitive advantage."
        },
        {
          name: "Client Confidentiality Agreements",
          description: "Contractual obligations to maintain secrecy about client projects, especially for sensitive developments.",
          importance: "Critical for maintaining client trust and avoiding breach of contract."
        },
        {
          name: "Data Protection Regulations",
          description: "Requirements for protecting personal data of clients, employees, and other stakeholders.",
          importance: "Mandatory for compliance with GDPR and other data protection laws."
        },
        {
          name: "Professional Standards",
          description: "Industry standards and best practices for architectural data security and information handling.",
          importance: "Important for maintaining professional standing and certification."
        },
        {
          name: "Project Security Requirements",
          description: "Specific security requirements for government, healthcare, or critical infrastructure projects.",
          importance: "Essential for qualifying for certain high-security or government projects."
        }
      ]}
      
      statistics={[
        {
          title: "IP Theft Impact",
          value: "$53B",
          context: "annual cost of intellectual property theft across design industries"
        },
        {
          title: "Data Breaches",
          value: "28%",
          context: "of architectural firms reported unauthorized access to design files in the last year"
        },
        {
          title: "File Size Challenges",
          value: "35GB",
          context: "average size of architectural project files requiring specialized secure storage"
        }
      ]}
      
      relatedServices={[
        {
          title: "Intellectual Property Protection",
          link: "/services/ip-protection"
        },
        {
          title: "Secure Collaboration Solutions",
          link: "/services/secure-collaboration"
        },
        {
          title: "Cloud Security for Large Files",
          link: "/services/cloud-security"
        }
      ]}
    />
  );
};

export default ArchitecturalFirmsPage;