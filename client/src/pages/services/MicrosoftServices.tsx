import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Box, Cloud, Mail, Database, Users, Shield, Server, Globe, CheckCircle } from 'lucide-react';

const MicrosoftServicesPage = () => {
  return (
    <ServicePageLayout
      title="Microsoft Services"
      category="IT Managed Services"
      description="Our Microsoft Services provide comprehensive planning, implementation, and management of Microsoft technologies including Microsoft 365, Azure, and Windows Server environments. We help you maximize your Microsoft investment through expert configuration, security optimization, and ongoing support."
      heroIcon={<Box className="h-8 w-8" />}
      
      overview="Microsoft technologies form the backbone of many business operations, from productivity and communication tools to critical infrastructure services. Our Microsoft Services deliver expert consulting, implementation, migration, and management for the complete Microsoft ecosystem. Whether you're deploying Microsoft 365, migrating to Azure, or optimizing your on-premise Microsoft infrastructure, our certified specialists ensure you achieve maximum value from your Microsoft investments through proper configuration, security hardening, and ongoing maintenance."
      
      steps={[
        {
          title: "Environment Assessment",
          description: "Evaluate your current Microsoft environment, identify optimization opportunities, and assess security posture."
        },
        {
          title: "Solution Design",
          description: "Design Microsoft solutions aligned with your business requirements, integration needs, and security considerations."
        },
        {
          title: "Implementation Planning",
          description: "Develop detailed migration and implementation plans with minimal disruption to business operations."
        },
        {
          title: "Deployment & Migration",
          description: "Execute implementation with careful data migration, user provisioning, and security configuration."
        },
        {
          title: "Training & Knowledge Transfer",
          description: "Provide user and administrator training to ensure effective adoption and management of Microsoft technologies."
        },
        {
          title: "Ongoing Support & Optimization",
          description: "Deliver continuous management, monitoring, and optimization of your Microsoft environment."
        }
      ]}
      
      benefits={[
        {
          title: "Maximized ROI",
          content: "Ensure you're getting the full value from your Microsoft investments through proper configuration and utilization."
        },
        {
          title: "Enhanced Security",
          content: "Implement Microsoft security best practices and advanced features to protect your data and systems."
        },
        {
          title: "Improved Productivity",
          content: "Optimize Microsoft tools to streamline workflows and enhance collaboration across your organization."
        },
        {
          title: "Reduced Complexity",
          content: "Simplify management of your Microsoft ecosystem with standardized configurations and centralized administration."
        },
        {
          title: "Future-Proofed Environment",
          content: "Keep pace with Microsoft's evolving technology roadmap and prepare for new features and capabilities."
        }
      ]}
      
      deliverables={[
        {
          title: "Microsoft Environment Assessment Report",
          description: "Comprehensive analysis of your current Microsoft ecosystem with detailed recommendations for optimization."
        },
        {
          title: "Implementation Roadmap",
          description: "Detailed plan for deploying or migrating to Microsoft technologies with timelines and resource requirements."
        },
        {
          title: "Security Configuration Documentation",
          description: "Detailed documentation of security settings, policies, and best practices implemented across Microsoft services."
        },
        {
          title: "Migration & Deployment Documentation",
          description: "Comprehensive documentation of the implemented Microsoft environment, including configurations and customizations."
        },
        {
          title: "Administrator & User Training",
          description: "Knowledge transfer sessions and documentation for both end users and IT administrators."
        },
        {
          title: "Support & Maintenance Plan",
          description: "Detailed plan for ongoing management, updates, and support of your Microsoft environment."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Microsoft Logo Center */}
          <rect x="270" y="150" width="60" height="60" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <rect x="270" y="150" width="30" height="30" fill="#00E5FF" fillOpacity="0.5"/>
          <rect x="300" y="150" width="30" height="30" fill="#00E5FF" fillOpacity="0.4"/>
          <rect x="270" y="180" width="30" height="30" fill="#00E5FF" fillOpacity="0.3"/>
          <rect x="300" y="180" width="30" height="30" fill="#00E5FF" fillOpacity="0.2"/>
          
          {/* Microsoft 365 */}
          <circle cx="180" cy="120" r="40" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="125" textAnchor="middle" fontSize="12" fill="#00E5FF">Microsoft 365</text>
          
          {/* Azure */}
          <circle cx="180" cy="240" r="40" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="180" y="245" textAnchor="middle" fontSize="12" fill="#00E5FF">Azure</text>
          
          {/* Windows Server */}
          <circle cx="420" cy="120" r="40" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="420" y="120" textAnchor="middle" fontSize="12" fill="#00E5FF">Windows</text>
          <text x="420" y="135" textAnchor="middle" fontSize="12" fill="#00E5FF">Server</text>
          
          {/* SQL Server */}
          <circle cx="420" cy="240" r="40" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="420" y="240" textAnchor="middle" fontSize="12" fill="#00E5FF">SQL Server</text>
          
          {/* Connection Lines */}
          <line x1="230" y1="180" x2="270" y2="180" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5,3"/>
          <line x1="330" y1="180" x2="370" y2="180" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5,3"/>
          <line x1="300" y1="130" x2="300" y2="150" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5,3"/>
          <line x1="300" y1="210" x2="300" y2="230" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="5,3"/>
          
          {/* M365 Components */}
          <circle cx="150" cy="90" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="150" y="94" textAnchor="middle" fontSize="10" fill="#00B2A9">Teams</text>
          
          <circle cx="180" cy="70" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="180" y="74" textAnchor="middle" fontSize="10" fill="#00B2A9">Exchange</text>
          
          <circle cx="210" cy="90" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="210" y="94" textAnchor="middle" fontSize="10" fill="#00B2A9">SharePoint</text>
          
          {/* Azure Components */}
          <circle cx="150" cy="270" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="150" y="274" textAnchor="middle" fontSize="10" fill="#00B2A9">VMs</text>
          
          <circle cx="180" cy="290" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="180" y="294" textAnchor="middle" fontSize="10" fill="#00B2A9">Storage</text>
          
          <circle cx="210" cy="270" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="210" y="274" textAnchor="middle" fontSize="10" fill="#00B2A9">AD</text>
          
          {/* Windows Server Components */}
          <circle cx="450" cy="90" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="450" y="94" textAnchor="middle" fontSize="10" fill="#00B2A9">AD DS</text>
          
          <circle cx="390" cy="90" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.2"/>
          <text x="390" y="94" textAnchor="middle" fontSize="10" fill="#00B2A9">File Srv</text>
          
          {/* Expert Team */}
          <rect x="250" y="320" width="100" height="40" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <text x="300" y="335" textAnchor="middle" fontSize="10" fill="#EB3443">Microsoft Certified</text>
          <text x="300" y="350" textAnchor="middle" fontSize="10" fill="#EB3443">Specialists</text>
          
          {/* Animated Elements */}
          <circle cx="300" cy="180" r="65" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="65;70;65" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="180" r="80" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.2">
            <animate attributeName="r" values="80;85;80" dur="5s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.2;0.05;0.2" dur="5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Data Flow Animation */}
          <circle cx="230" cy="150" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="180;260;260" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="120;150;150" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="250" cy="270" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="180;260;260" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="240;210;210" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="370" cy="150" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="420;340;340" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="120;150;150" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="350" cy="270" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="420;340;340" dur="4.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="240;210;210" dur="4.5s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;0" dur="4.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Team Connection */}
          <path d="M300 260 L300 320" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
        </svg>
      }
      
      relatedServices={[
        {
          title: "IT Annual Maintenance Contract",
          link: "/services/it-amc"
        },
        {
          title: "Managed IT Project Management",
          link: "/services/managed-it-project"
        },
        {
          title: "Cloud & On-Premise Infrastructure",
          link: "/services/cloud-on-prem-infrastructure"
        }
      ]}
    />
  );
};

export default MicrosoftServicesPage;