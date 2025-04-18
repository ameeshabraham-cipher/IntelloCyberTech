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
      
      overview="Privacy regulations like GDPR, CCPA, and regional PDPA laws have transformed how organizations must handle personal data. Our service provides structured guidance through the complex process of building a compliant privacy program that addresses these requirements. We help you implement practical, sustainable privacy controls that protect personal data while enabling business operations. Our approach balances compliance requirements with operational efficiency, integrating privacy into your processes rather than treating it as a separate function."
      
      benefits={[
        {
          title: "Achieve Multi-Framework Compliance",
          content: "Meet requirements across multiple privacy regulations with an integrated approach that addresses all applicable laws."
        },
        {
          title: "Reduce Privacy Risks",
          content: "Minimize the risk of data breaches, regulatory penalties, and reputation damage through robust privacy controls."
        },
        {
          title: "Enhance Customer Trust",
          content: "Demonstrate your commitment to protecting personal data, building stronger relationships with customers and partners."
        },
        {
          title: "Operationalize Privacy",
          content: "Transform privacy from a compliance exercise into an integrated business function with clear processes and responsibilities."
        },
        {
          title: "Enable International Data Transfers",
          content: "Implement compliant mechanisms for transferring personal data across borders while meeting regulatory requirements."
        }
      ]}
      
      steps={[
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
      
      deliverables={[
        {
          title: "Data Mapping & Inventory",
          description: "Comprehensive identification and categorization of personal data across your organization with visualized data flows and processing activities."
        },
        {
          title: "Privacy Impact Assessments",
          description: "Structured evaluation of data processing activities to identify privacy risks and determine appropriate mitigation measures."
        },
        {
          title: "Privacy Policies & Notices",
          description: "Creation of privacy policies, notices, consent mechanisms, and other documentation required for regulatory compliance."
        },
        {
          title: "Data Subject Rights Procedures",
          description: "Implementation of processes and technologies to fulfill data subject requests for access, deletion, portability, and other rights."
        },
        {
          title: "Third-Party Risk Framework",
          description: "Development of vendor assessment processes, contract clauses, and monitoring controls for data processors and other third parties."
        },
        {
          title: "Privacy Governance Structure",
          description: "Establishment of roles, responsibilities, reporting structures, and oversight mechanisms for ongoing privacy management."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Privacy Shield Background */}
          <rect x="120" y="80" width="360" height="240" rx="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Shield Outline */}
          <path d="M300 110 L390 145 L390 210 C390 270 340 310 300 330 C260 310 210 270 210 210 L210 145 L300 110Z" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Lock Icon */}
          <rect x="270" y="190" width="60" height="50" rx="5" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="300" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M295 180 L305 180" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M300 180 L300 200" stroke="#00E5FF" strokeWidth="1.5"/>
          
          {/* Data Flow Elements */}
          <circle cx="180" cy="150" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Data</text>
          
          <circle cx="420" cy="150" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="420" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">Users</text>
          
          <circle cx="180" cy="250" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">Systems</text>
          
          <circle cx="420" cy="250" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="420" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">Partners</text>
          
          {/* Data Flow Lines */}
          <path d="M180 175 L210 200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M180 225 L210 210" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M420 175 L390 200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M420 225 L390 210" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          
          {/* Regulations */}
          <rect x="150" y="320" width="60" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <text x="180" y="336" textAnchor="middle" fontSize="10" fill="#EB3443">GDPR</text>
          
          <rect x="220" y="320" width="60" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <text x="250" y="336" textAnchor="middle" fontSize="10" fill="#EB3443">CCPA</text>
          
          <rect x="290" y="320" width="60" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <text x="320" y="336" textAnchor="middle" fontSize="10" fill="#EB3443">LGPD</text>
          
          <rect x="360" y="320" width="60" height="25" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <text x="390" y="336" textAnchor="middle" fontSize="10" fill="#EB3443">PDPA</text>
          
          {/* Connection to Privacy Shield */}
          <path d="M180 320 L225 270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M250 320 L250 270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M320 320 L330 270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M390 320 L360 270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          
          {/* Privacy Program Text */}
          <text x="300" y="100" textAnchor="middle" fontSize="14" fill="#00E5FF">PRIVACY COMPLIANCE</text>
          
          {/* Animated Elements */}
          <circle cx="300" cy="215" r="5" fill="#00E5FF" fillOpacity="0.8">
            <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <path d="M210 145 L390 145" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4,2">
            <animate attributeName="stroke-opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      
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