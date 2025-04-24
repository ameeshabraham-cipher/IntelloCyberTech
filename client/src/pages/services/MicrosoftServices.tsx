import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Cloud, Monitor, Database, Users, Shield, Mail, FileText, MessageSquare } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const MicrosoftServicesPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Microsoft Services & Solutions in UAE",
    description: "Expert Microsoft services in Dubai and across UAE. Maximize your Microsoft technology investments with our comprehensive implementation, migration, and support services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Microsoft Technology Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations using Microsoft technologies"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What Microsoft services are most valuable for UAE organizations?",
      answer: "UAE organizations benefit from several key Microsoft service areas: 1) Microsoft 365 Implementation - deploying the complete productivity suite with UAE-appropriate configurations for email, collaboration, and document management optimized for regional business practices, 2) Azure Cloud Migration - transitioning workloads to Microsoft's cloud platform with consideration for UAE data residency requirements, regional connectivity, and compliance needs, 3) Microsoft Dynamics 365 Deployment - implementing business applications for CRM, ERP, and operations with UAE-specific business process configurations and local regulatory alignment, 4) SharePoint Solutions - creating document management and intranet platforms adapted for multilingual requirements common in UAE's diverse workforce, 5) Power Platform Development - building custom business applications and automation using low-code tools tailored to UAE business processes and integration needs, 6) Microsoft Security Services - implementing comprehensive protection across Microsoft environments aligned with UAE Information Assurance Standards and cybersecurity frameworks, 7) Teams & Collaboration Solutions - optimizing virtual collaboration tools for UAE's increasingly hybrid and geographically distributed workforce, 8) Identity & Access Management - implementing Azure AD and authentication solutions appropriate for UAE organizations with diverse workforces and regulatory requirements, 9) Windows Virtual Desktop/AVD - providing secure remote work capabilities crucial for UAE business continuity and flexible work arrangements, 10) SQL Server & Database Services - optimizing data platforms for performance, availability, and compliance with UAE data regulations. These services can be customized based on your specific UAE business requirements, industry focus, and existing Microsoft investments."
    },
    {
      question: "What benefits do UAE businesses gain from Microsoft Cloud Solutions?",
      answer: "UAE organizations realize several strategic advantages through Microsoft cloud adoption: 1) Regional Data Residency - Microsoft's UAE data centers ensure data sovereignty compliance with local regulations and improved performance for UAE-based users, 2) Operational Agility - cloud platforms enable UAE businesses to quickly adapt to market changes and scale resources according to regional business fluctuations, 3) Cost Optimization - consumption-based pricing models reduce capital expenditures, particularly valuable given higher infrastructure costs in the UAE market, 4) Remote Work Enablement - secure, accessible cloud resources support UAE's growing remote and hybrid workforce needs across geographically distributed teams, 5) Business Continuity - robust disaster recovery capabilities protect against operational disruptions with backup and failover options within UAE data centers, 6) Security Enhancement - comprehensive Microsoft security frameworks help UAE organizations meet increasingly stringent local cybersecurity requirements, 7) Digital Transformation Acceleration - cloud platforms facilitate innovation and new digital capabilities essential for UAE market competitiveness, 8) Integration Capabilities - seamless connection between business applications streamlines UAE operations and enhances productivity across disparate systems, 9) Reduced IT Management Burden - decreased infrastructure management allows UAE IT teams to focus on strategic initiatives rather than maintenance, 10) Sustainability Alignment - cloud efficiencies support UAE's sustainability initiatives and green technology goals as part of Vision 2030 programs. These benefits combine to deliver significant business value for UAE organizations across industries, with specific advantages based on sector and organizational needs."
    },
    {
      question: "How should UAE organizations approach Microsoft 365 security?",
      answer: "UAE organizations should implement comprehensive Microsoft 365 security through several key approaches: 1) UAE Compliance Baseline - configure security settings to meet UAE Information Assurance Standards, NESA requirements, and industry-specific regulatory frameworks using Microsoft Compliance Manager, 2) Identity Protection - implement strong authentication with multi-factor requirements, conditional access policies, and privileged identity management aligned with UAE security directives, 3) Data Classification & Protection - establish sensitive information policies, data loss prevention rules, and encryption controls based on UAE data protection requirements and organizational data handling policies, 4) Threat Protection - deploy Microsoft Defender capabilities including anti-malware, anti-phishing, and safe attachments with settings optimized for UAE-specific threat landscape, 5) Insider Risk Management - implement controls to detect unusual behavior, data exfiltration, and policy violations with consideration for UAE workforce dynamics and data sensitivity requirements, 6) Cloud App Security - monitor third-party application usage, detect shadow IT, and control cloud application access according to UAE security requirements, 7) Mobile Device Management - secure endpoints through Intune policies appropriate for UAE BYOD practices and organizational device management approaches, 8) Email Security - enhance Exchange Online Protection with advanced configurations to address regional email threats targeting UAE organizations, 9) Ongoing Monitoring - establish Security Information and Event Management (SIEM) integration using Microsoft Sentinel with UAE-specific detection rules and compliance alerting, 10) Security Awareness - provide UAE-appropriate training materials and phishing simulations in relevant languages to build user awareness of security practices. This multi-layered approach ensures comprehensive protection while meeting specific UAE compliance obligations and addressing regional security considerations."
    },
    {
      question: "What are the key considerations for Microsoft Dynamics 365 implementation in UAE?",
      answer: "Implementing Microsoft Dynamics 365 in UAE organizations requires attention to several critical factors: 1) UAE Business Process Alignment - configure business applications to accommodate UAE-specific workflows, approval hierarchies, and operational procedures common in local business culture, 2) Localization Requirements - implement UAE-specific tax rules, financial reporting formats, and compliance documentation for accurate business operations, 3) Multi-Currency Support - configure robust handling of multiple currencies for UAE businesses engaging in regional and international transactions with appropriate exchange rate management, 4) Multi-Language Implementation - deploy interfaces in Arabic, English, and other languages relevant to UAE's diverse workforce with appropriate translation and right-to-left display support, 5) Integration with Government Systems - establish connections with UAE e-government services, regulatory reporting platforms, and compliance systems where required by industry or jurisdiction, 6) UAE Banking & Payment Integration - connect with local payment gateways, banking systems, and financial service providers common in the UAE market, 7) Data Residency Configuration - ensure customer and business data remains in UAE data centers to meet data sovereignty requirements and regulatory compliance obligations, 8) User Adoption Strategy - develop training and change management approaches appropriate for UAE's multicultural workforce with consideration for varying technical proficiency levels, 9) Mobile Optimization - ensure strong mobile experiences for field staff and executives aligned with UAE's mobile-first technology usage patterns, 10) Performance Optimization - tune system performance for reliable operation with consideration for regional connectivity and peak usage patterns common in UAE business environments. Addressing these factors ensures Dynamics 365 implementations deliver maximum business value while meeting UAE-specific operational requirements and compliance obligations."
    },
    {
      question: "How should UAE organizations choose a Microsoft services partner?",
      answer: "UAE organizations should evaluate Microsoft services partners based on several key criteria: 1) UAE Market Experience - demonstrated track record implementing Microsoft solutions in UAE environments with understanding of local business culture and operational requirements, 2) Microsoft Partnership Level - Gold/Silver competency status and specializations relevant to your implementation needs, indicating validated expertise and direct Microsoft support channels, 3) UAE Industry Expertise - experience serving organizations in your specific sector with understanding of relevant regulatory requirements and business processes common in UAE markets, 4) UAE Project References - completed projects of similar scope and complexity for UAE organizations, with verifiable references and demonstrated outcomes, 5) Local Resources - availability of consultants and support staff based in UAE for onsite services, local language support, and alignment with UAE business hours, 6) Technical Depth - certified professionals across relevant Microsoft technologies with appropriate credentials and implementation experience in UAE environments, 7) Implementation Methodology - structured approach to projects with clear phases, deliverables, and governance adapted for UAE business practices and decision processes, 8) Support Capabilities - comprehensive post-implementation support options with appropriate SLAs, escalation procedures, and operational hours aligned with UAE business schedules, 9) Innovation Focus - demonstrated ability to leverage Microsoft's emerging technologies to create business value specific to UAE market opportunities and challenges, 10) Total Value Proposition - balanced consideration of expertise, local presence, implementation approach, and cost appropriate for UAE market conditions and expected business outcomes. Thoroughly evaluating these factors helps ensure selection of a partner capable of delivering successful Microsoft implementations for your specific UAE organization."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Microsoft Services & Solutions in UAE | Expert Implementation & Support"
        description="Expert Microsoft services in Dubai and across UAE. Maximize your Microsoft technology investments with our comprehensive implementation, migration, and support services with 22+ years of experience."
        url="/services/microsoft-services"
        type="website"
      />
      <ServicePageLayout
        title="Microsoft Services & Solutions in UAE | Expert Implementation & Support"
        category="UAE Microsoft Technology Services"
        description="Maximize the value of your Microsoft technology investments with our comprehensive implementation, migration, and support services. We help UAE organizations leverage the full potential of Microsoft's cloud, productivity, and business application platforms."
        heroIcon={<Cloud className="h-8 w-8" />}
        overview="Microsoft technologies form the core of many UAE business operations, but achieving maximum value from these platforms requires specialized expertise and UAE-specific implementation approaches. Our Microsoft Services provide comprehensive support across the entire Microsoft ecosystem—from Microsoft 365 and Azure to Dynamics 365 and Power Platform—tailored specifically for UAE organizational requirements and regional considerations. With Microsoft-certified professionals and deep understanding of UAE business environments, we help your organization implement, migrate, optimize, and support Microsoft solutions that align perfectly with your business objectives and compliance requirements. Whether you're moving to the cloud, enhancing productivity tools, implementing business applications, or strengthening security, our expertise ensures your Microsoft investments deliver maximum business value while addressing UAE-specific considerations including data residency, regulatory compliance, and regional business practices."
        steps={[
          {
            title: "UAE-Specific Microsoft Assessment",
            description: "Evaluate your current Microsoft environment, business requirements, and digital transformation objectives through the lens of UAE-specific considerations, identifying opportunities to enhance productivity, collaboration, and operational efficiency with Microsoft technologies."
          },
          {
            title: "UAE-Appropriate Microsoft Strategy",
            description: "Develop a comprehensive technology roadmap for your Microsoft implementations aligned with UAE business priorities, regulatory requirements, and regional factors, establishing clear objectives and implementation approaches for maximum value realization."
          },
          {
            title: "UAE Microsoft 365 Implementation",
            description: "Deploy and configure the complete Microsoft 365 productivity suite including Exchange, SharePoint, Teams, and Office applications with UAE-specific settings, multi-language support, and appropriate security configurations for your organizational requirements."
          },
          {
            title: "UAE Azure Cloud Migration",
            description: "Transition workloads to Microsoft's cloud platform with methodologies addressing UAE data residency requirements, optimized connectivity to UAE data centers, and configurations aligned with UAE regulatory frameworks and business continuity needs."
          },
          {
            title: "UAE Microsoft Security Enhancement",
            description: "Implement comprehensive security controls across your Microsoft environment including identity protection, threat defense, information protection, and compliance features aligned with UAE Information Assurance Standards and cybersecurity frameworks."
          },
          {
            title: "UAE Dynamics 365 Deployment",
            description: "Implement Microsoft's business applications for customer relationship management, enterprise resource planning, and operations with UAE-specific business process configurations, localizations, and integrations with regional systems."
          },
          {
            title: "UAE SharePoint & Intranet Solutions",
            description: "Create collaborative platforms and document management solutions with UAE-appropriate information architecture, governance frameworks, and multilingual capabilities supporting your organization's knowledge management and collaboration needs."
          },
          {
            title: "UAE Power Platform Development",
            description: "Build custom business applications, workflows, and automation solutions using Microsoft's low-code platform tailored to UAE-specific business processes, approval flows, and integration requirements with existing systems."
          },
          {
            title: "UAE Teams & Collaboration Optimization",
            description: "Enhance virtual collaboration capabilities through Microsoft Teams with meeting solutions, governance frameworks, and adoption programs designed for UAE's increasingly hybrid and geographically distributed workforce challenges."
          },
          {
            title: "UAE SQL Server & Database Optimization",
            description: "Deploy, migrate, and optimize Microsoft database platforms with performance tuning, high availability configurations, and data management practices aligned with UAE data regulations and business continuity requirements."
          },
          {
            title: "UAE Microsoft Managed Services",
            description: "Provide ongoing support, monitoring, and optimization for Microsoft environments through proactive maintenance, user assistance, and continuous improvement services operating during UAE business hours with appropriate language support."
          },
          {
            title: "UAE Microsoft Training & Adoption",
            description: "Develop user competency and technology acceptance through customized training programs, change management approaches, and adoption frameworks tailored to UAE workforce demographics, language requirements, and organizational culture."
          }
        ]}
        benefits={[
          {
            title: "UAE Microsoft Technology Optimization",
            content: "Maximize return on your Microsoft investments through expert implementation, configuration, and customization specifically aligned with UAE business requirements, ensuring technology capabilities directly support your organizational objectives."
          },
          {
            title: "UAE Security & Compliance Assurance",
            content: "Implement Microsoft security best practices with configurations meeting UAE Information Assurance Standards, data protection requirements, and industry regulations, creating a secure technology foundation for your UAE operations."
          },
          {
            title: "UAE User Productivity Enhancement",
            content: "Boost staff efficiency and collaboration through optimized Microsoft tools and platforms adapted for UAE work practices, multi-language requirements, and hybrid work scenarios increasingly common in UAE business environments."
          },
          {
            title: "UAE Digital Transformation Acceleration",
            content: "Leverage Microsoft's comprehensive technology stack to accelerate digital initiatives, automate processes, and enhance customer experiences, ensuring your UAE organization remains competitive in rapidly evolving markets."
          },
          {
            title: "UAE Implementation Risk Reduction",
            content: "Minimize deployment challenges and business disruption through proven methodologies, UAE-specific expertise, and comprehensive project management tailored to local business environments and operational considerations."
          },
          {
            title: "UAE Microsoft Cloud Optimization",
            content: "Leverage Microsoft's UAE data centers for optimal performance, data sovereignty compliance, and enhanced user experience through cloud architectures specifically designed for regional connectivity and business requirements."
          },
          {
            title: "UAE Cost Efficiency Improvement",
            content: "Optimize Microsoft licensing, resource utilization, and operational costs through expert guidance on appropriate plans, consumption management, and efficiency enhancements specifically valuable in the UAE technology market."
          },
          {
            title: "UAE Business Continuity Protection",
            content: "Strengthen operational resilience through properly configured backup, recovery, and high availability solutions designed around UAE business requirements, regulatory expectations, and regional operational risks."
          },
          {
            title: "UAE Technology Integration",
            content: "Create seamless connections between Microsoft platforms and other business systems through integration solutions tailored to UAE business ecosystems, local service providers, and regional technology landscapes."
          },
          {
            title: "UAE Microsoft Expertise Access",
            content: "Leverage our certified Microsoft professionals with UAE-specific implementation experience, eliminating the need to build and maintain specialized technical skills internally while ensuring best practices adapted for local requirements."
          }
        ]}
        deliverables={[
          {
            title: "UAE Microsoft Technology Assessment",
            description: "Comprehensive evaluation of your current Microsoft environment, usage patterns, and improvement opportunities with specific consideration for UAE business requirements, compliance obligations, and regional factors affecting technology implementation."
          },
          {
            title: "UAE Microsoft Implementation Strategy",
            description: "Detailed technology roadmap for your Microsoft environment covering platform selection, deployment approach, migration strategies, and adoption plans tailored to your UAE organization's specific business objectives and operational considerations."
          },
          {
            title: "UAE Microsoft 365 Deployment Plan",
            description: "Structured implementation methodology for Microsoft's productivity platform including tenant configuration, service deployment, security settings, and adoption approach customized for UAE operational requirements and workforce characteristics."
          },
          {
            title: "UAE Azure Architecture Design",
            description: "Technical architecture documentation for Microsoft cloud environments covering infrastructure design, networking configuration, security controls, and operational management with specific consideration for UAE data residency and regulatory requirements."
          },
          {
            title: "UAE Microsoft Security Framework",
            description: "Comprehensive security configuration across Microsoft platforms including identity protection, endpoint security, data protection, and threat defense aligned with UAE security standards, compliance frameworks, and risk management requirements."
          },
          {
            title: "UAE Dynamics 365 Solution Design",
            description: "Detailed business application architecture covering entity models, process flows, integrations, and customizations specifically configured for UAE business operations, regulatory requirements, and local business practices."
          },
          {
            title: "UAE SharePoint Information Architecture",
            description: "Structured design for document management and collaboration platforms including site architecture, permission models, governance frameworks, and retention policies appropriate for UAE business requirements and information management practices."
          },
          {
            title: "UAE Microsoft User Adoption Program",
            description: "Comprehensive change management approach including communication materials, training curriculum, and adoption metrics specifically designed for UAE workforce demographics, language requirements, and organizational culture."
          },
          {
            title: "UAE Microsoft Support Framework",
            description: "Structured support model for Microsoft platforms including service levels, escalation procedures, maintenance schedules, and enhancement processes operating during UAE business hours with appropriate language support options."
          },
          {
            title: "UAE Microsoft Environment Documentation",
            description: "Comprehensive technical documentation covering all implemented Microsoft platforms, configurations, customizations, and operational procedures designed for long-term maintenance and knowledge transfer to UAE support teams."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Microsoft Solutions Framework */}
            <rect x="150" y="100" width="300" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="70" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="90" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="85" x2="400" y2="100" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Microsoft Logo */}
            <rect x="285" y="120" width="30" height="30" rx="0" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.9"/>
            <rect x="287" y="122" width="13" height="13" rx="0" fill="#00E5FF" fillOpacity="0.9"/>
            <rect x="302" y="122" width="13" height="13" rx="0" fill="#00E5FF" fillOpacity="0.8"/>
            <rect x="287" y="137" width="13" height="13" rx="0" fill="#00E5FF" fillOpacity="0.7"/>
            <rect x="302" y="137" width="13" height="13" rx="0" fill="#00E5FF" fillOpacity="0.6"/>
            
            <text x="300" y="170" textAnchor="middle" fontSize="12" fill="#00E5FF">Microsoft Solutions</text>
            
            {/* Microsoft Services */}
            <rect x="180" y="190" width="60" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="210" y="207" textAnchor="middle" fontSize="8" fill="#00E5FF">M365</text>
            
            <rect x="250" y="190" width="60" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="280" y="207" textAnchor="middle" fontSize="8" fill="#00E5FF">Azure</text>
            
            <rect x="320" y="190" width="60" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="350" y="207" textAnchor="middle" fontSize="8" fill="#00E5FF">Dynamics</text>
            
            <rect x="180" y="225" width="60" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="210" y="242" textAnchor="middle" fontSize="8" fill="#00E5FF">SharePoint</text>
            
            <rect x="250" y="225" width="60" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="280" y="242" textAnchor="middle" fontSize="8" fill="#00E5FF">Power Platform</text>
            
            <rect x="320" y="225" width="60" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="350" y="242" textAnchor="middle" fontSize="8" fill="#00E5FF">Teams</text>
            
            {/* Connection Lines */}
            <line x1="300" y1="170" x2="210" y2="190" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="170" x2="280" y2="190" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="170" x2="350" y2="190" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="210" y1="215" x2="210" y2="225" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="280" y1="215" x2="280" y2="225" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="350" y1="215" x2="350" y2="225" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Data Center */}
            <rect x="390" y="130" width="50" height="40" rx="5" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="415" y="145" textAnchor="middle" fontSize="8" fill="#EB3443">UAE</text>
            <text x="415" y="155" textAnchor="middle" fontSize="8" fill="#EB3443">Data Center</text>
            
            <path d="M315 135 L390 150" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Expert Consultant */}
            <circle cx="100" cy="180" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <circle cx="100" cy="170" r="8" fill="none" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M90 185 L110 185" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M85 195 L115 195" stroke="#00B2A9" strokeWidth="1"/>
            <text x="100" y="215" textAnchor="middle" fontSize="10" fill="#00B2A9">Consultant</text>
            
            {/* Implementation Flow */}
            <path d="M125 170 L180 207" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M125 180 L250 207" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M125 190 L320 207" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Solution Documentation */}
            <rect x="220" y="280" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="300" textAnchor="middle" fontSize="12" fill="#00B2A9">Implementation Plan</text>
            
            {/* Connection to Documentation */}
            <path d="M300 250 L300 280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="500" y="140" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="154" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="170" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="184" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            <rect x="500" y="200" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="214" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Microsoft Services</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Cloud Services",
            link: "/services/cloud-services"
          },
          {
            title: "UAE IT Infrastructure",
            link: "/services/infrastructure"
          },
          {
            title: "UAE IT AMC Services",
            link: "/services/it-amc"
          },
          {
            title: "UAE Managed IT Services",
            link: "/services/managed-it"
          },
          {
            title: "UAE IT Security Services",
            link: "/services/it-security-audit"
          },
          {
            title: "UAE Managed IT Projects",
            link: "/services/managed-it-project"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Microsoft Services in UAE FAQs"
        subtitle="Common questions about Microsoft technologies for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default MicrosoftServicesPage;