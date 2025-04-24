import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Server, Cloud, Network, Database, Shield, Monitor, Settings, Workflow } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const InfrastructurePage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Cloud & On-Premises Infrastructure Services in UAE",
    description: "Expert infrastructure services in Dubai and across UAE. Build and optimize secure, resilient technology infrastructure with our comprehensive cloud and on-premises solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "IT Infrastructure Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring reliable technology infrastructure"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What infrastructure services are most important for UAE organizations?",
      answer: "UAE organizations benefit from several critical infrastructure services: 1) Hybrid Cloud Architecture - designing balanced environments leveraging both UAE-based cloud services and on-premises systems to optimize for performance, compliance, and cost efficiency in the UAE's unique regulatory landscape, 2) UAE Data Center Implementation - building secure, efficient on-premises facilities or colocation environments optimized for the UAE's climate, power considerations, and connectivity requirements, 3) Network Infrastructure - implementing reliable, high-performance connectivity solutions appropriate for UAE business locations, including WAN optimization for regional operations and secure international connections, 4) Security Infrastructure - deploying comprehensive protection including firewalls, intrusion detection, and endpoint security aligned with UAE Information Assurance Standards and local threat landscape, 5) Server & Compute Infrastructure - implementing appropriate processing capacity through physical or virtualized servers with consideration for UAE availability requirements and business continuity needs, 6) Storage Solutions - deploying appropriate data storage platforms with data sovereignty configurations that satisfy UAE regulatory requirements while meeting performance needs, 7) Backup & Disaster Recovery - establishing robust data protection and business continuity mechanisms with special consideration for UAE operational risks and recovery requirements, 8) Infrastructure Monitoring - implementing comprehensive visibility across technology environments with proactive alerting aligned with UAE operational hours and support expectations, 9) Identity & Access Infrastructure - deploying authentication and authorization systems that reflect UAE workforce requirements including multi-language support and diverse identity types, 10) Collaboration Infrastructure - establishing communication platforms supporting UAE's multilingual, geographically distributed teams across various connectivity conditions. Each service area can be customized based on your specific UAE organizational requirements, industry focus, and existing technology investments."
    },
    {
      question: "How should UAE organizations approach cloud adoption?",
      answer: "UAE organizations should approach cloud adoption with a structured methodology considering several regional factors: 1) UAE Data Sovereignty Assessment - evaluate which workloads can move to cloud platforms based on data classification, regulatory requirements, and UAE compliance obligations for specific industries, 2) Cloud Provider Selection - evaluate providers with UAE data centers (Microsoft Azure, Amazon AWS, Oracle) against business requirements, available services, performance considerations, and regional support capabilities, 3) UAE-Appropriate Cloud Model - determine optimal approach (public, private, hybrid) based on UAE regulatory landscape, security requirements, and organizational readiness for cloud transformation, 4) Workload Prioritization - identify applications best suited for initial migration based on business impact, technical complexity, and UAE-specific dependencies with legacy systems, 5) UAE Connectivity Planning - assess and enhance network infrastructure with consideration for reliable cloud connectivity, sufficient bandwidth, and optimized routing through UAE internet service providers, 6) UAE Security Framework - establish cloud security controls aligned with UAE Information Assurance Standards and industry-specific requirements across identity, data protection, and threat defense, 7) UAE-Specific Migration Methodology - develop phased approach considering UAE business calendars, operational hours, and minimal disruption requirements for critical services, 8) Operational Readiness - prepare UAE support teams through appropriate training, process adjustments, and knowledge transfer to ensure successful cloud environment management, 9) UAE Cost Management - implement appropriate governance, monitoring, and optimization strategies to control cloud spending with consideration for UAE currency and budget management practices, 10) Hybrid Integration - establish secure, reliable connectivity between cloud platforms and remaining on-premises systems for seamless operations across UAE business environments. This structured approach ensures cloud adoption delivers maximum business value while addressing UAE-specific considerations."
    },
    {
      question: "What are the key considerations for on-premises infrastructure in UAE?",
      answer: "On-premises infrastructure in the UAE requires attention to several regional factors: 1) Environmental Controls - implementing robust cooling, power protection, and dust mitigation strategies to address UAE's challenging climate conditions, particularly during summer months, 2) Power Management - designing reliable power systems with appropriate UPS and generator capacity considering UAE power characteristics and potential interruptions in certain areas, 3) UAE Space Optimization - efficient utilization of facility space given premium real estate costs in UAE business centers, particularly in Dubai and Abu Dhabi commercial districts, 4) Connectivity Diversity - implementing multiple network paths through different UAE providers to ensure business continuity and optimal routing for both local and international traffic, 5) UAE Hardware Procurement - navigating import logistics, warranty considerations, and support arrangements with consideration for UAE equipment availability and lead times, 6) Staffing Requirements - addressing UAE labor market considerations for qualified technical personnel to maintain on-premises infrastructure across required operational hours, 7) UAE Business Continuity - implementing appropriate redundancy, failover capabilities, and disaster recovery mechanisms relevant to UAE operational risks including environmental factors, 8) Physical Security - deploying appropriate access controls, monitoring systems, and security protocols compliant with UAE facility security standards and requirements, 9) Scalability Planning - designing systems with appropriate growth capacity considering UAE business expansion rates and equipment refresh challenges in the region, 10) UAE Compliance Requirements - ensuring facility design and operations adhere to relevant UAE building codes, safety regulations, and industry-specific compliance frameworks. Organizations with continued on-premises infrastructure requirements should address these factors while considering hybrid approaches that leverage UAE cloud capabilities where appropriate for optimum business value."
    },
    {
      question: "What network infrastructure best practices apply to UAE organizations?",
      answer: "UAE network infrastructure should adhere to several best practices considering regional factors: 1) ISP Diversity - implementing connections through multiple UAE providers (Etisalat, du, others) for reliability, with appropriate routing and failover capabilities for business continuity, 2) International Connectivity - establishing optimized routes for critical connections to international locations considering UAE's geographic position and submarine cable availability, 3) Regional Latency Management - designing network architecture to minimize latency for applications accessed across GCC countries with consideration for regional routing characteristics, 4) UAE Bandwidth Planning - provisioning appropriate capacity with consideration for UAE business growth, increasing video usage, and cloud service requirements common in the region, 5) Security Segmentation - implementing network zones and security boundaries aligned with UAE Information Assurance Standards and specific industry regulatory requirements, 6) UAE Wi-Fi Optimization - designing wireless networks with appropriate coverage, capacity, and security for UAE office environments, considering building materials and device density common in modern UAE workplaces, 7) UAE Remote Access Solutions - implementing secure connectivity for the increasingly mobile and remote UAE workforce with appropriate authentication and encryption across various connection types, 8) QoS Implementation - establishing traffic prioritization for critical applications across UAE network infrastructure, particularly for latency-sensitive applications like voice and video increasingly used in UAE business communications, 9) UAE BYOD Considerations - creating appropriate network policies and security controls for personal devices common in UAE's diverse multinational workforce, 10) Monitoring & Visibility - implementing comprehensive network performance monitoring aligned with UAE operational hours and support expectations for rapid problem identification. These practices should be tailored to your specific UAE organization size, industry, locations, and business requirements for optimal performance and reliability."
    },
    {
      question: "How can UAE organizations ensure infrastructure security?",
      answer: "UAE organizations can strengthen infrastructure security through several approaches: 1) UAE Compliance Baseline - implement controls aligned with UAE Information Assurance Standards, NESA requirements for critical infrastructure, and sector-specific frameworks (UAE Central Bank, ADHICS for healthcare, etc.), 2) Defense-in-Depth Strategy - deploy multiple security layers across network boundaries, systems, applications, and data with specific consideration for UAE threat landscape and attack patterns, 3) UAE-Specific Threat Intelligence - incorporate information about threats targeting UAE organizations for enhanced detection rules, security monitoring, and prevention controls appropriate for regional risk profiles, 4) Identity & Access Controls - implement robust authentication and authorization aligned with UAE workforce requirements, including multi-factor authentication and privilege management appropriate for organizational hierarchies, 5) UAE Data Protection - deploy encryption, classification, and data loss prevention with specific consideration for UAE data sovereignty requirements and cross-border data flow restrictions, 6) Secure Configuration Management - maintain hardened system configurations based on international standards (CIS, NIST) enhanced with UAE-specific requirements and vulnerability management practices, 7) UAE Security Monitoring - implement 24x7 detection capabilities with specific focus on UAE business hours and enhanced coverage during critical periods with appropriate Arabic language support where needed, 8) UAE Incident Response - establish clear procedures for addressing security events with defined roles, communication protocols, and escalation paths appropriate for UAE organizational structures, 9) UAE Physical Security Integration - ensure coordination between digital and physical security measures with appropriate controls for facilities and equipment in UAE environments, 10) UAE Security Awareness - develop training and communication programs appropriate for UAE's multicultural workforce with content in relevant languages and cultural contexts. These measures should be continuously updated to address evolving threats and compliance requirements specific to UAE business environments."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Cloud & On-Premises Infrastructure Services in UAE | Technology Foundation"
        description="Expert infrastructure services in Dubai and across UAE. Build and optimize secure, resilient technology infrastructure with our comprehensive cloud and on-premises solutions with 22+ years of experience."
        url="/services/infrastructure"
        type="website"
      />
      <ServicePageLayout
        title="Cloud & On-Premises Infrastructure Services in UAE | Technology Foundation"
        category="UAE IT Infrastructure Services"
        description="Establish a secure, reliable technology foundation for your UAE organization with our comprehensive infrastructure services. We design, implement, and manage both cloud and on-premises environments tailored to your business requirements."
        heroIcon={<Server className="h-8 w-8" />}
        overview="Reliable technology infrastructure forms the essential foundation for UAE business operations, but building and maintaining these environments requires specialized expertise, significant investment, and ongoing management. Our UAE-focused Infrastructure Services provide comprehensive solutions across both cloud and on-premises environments—designing, implementing, and optimizing the technology foundation that powers your business. We combine deep technical knowledge with understanding of UAE business requirements, regulatory considerations, and regional factors to create infrastructure solutions that perfectly balance performance, security, reliability, and cost-efficiency. Whether you're establishing new environments, refreshing aging systems, migrating to cloud platforms, or implementing hybrid architectures, our expertise ensures your technology infrastructure delivers the stability, scalability, and security needed for your UAE organization's success while addressing specific regional considerations including data sovereignty, physical environment challenges, and local business practices."
        steps={[
          {
            title: "UAE Infrastructure Requirements Analysis",
            description: "Assess your current environment, business needs, and operational requirements through detailed discovery sessions, technical evaluation, and stakeholder interviews to establish clear infrastructure objectives aligned with UAE business priorities."
          },
          {
            title: "UAE-Appropriate Architecture Design",
            description: "Develop comprehensive infrastructure architecture balancing cloud and on-premises components with consideration for UAE compliance requirements, operational factors, and business needs, creating detailed technical designs for all infrastructure elements."
          },
          {
            title: "UAE Cloud Platform Implementation",
            description: "Deploy and configure cloud environments in UAE data centers with appropriate service selection, architecture design, security controls, and operational management aligned with your organization's requirements and relevant compliance frameworks."
          },
          {
            title: "UAE On-Premises Infrastructure Deployment",
            description: "Implement server, storage, and network components with proper installation, configuration, and integration services, addressing UAE environmental considerations, operational requirements, and physical infrastructure needs."
          },
          {
            title: "UAE Network Infrastructure Optimization",
            description: "Design and implement reliable connectivity solutions including local and wide area networks, internet access, remote connectivity, and wireless systems with appropriate capacity, redundancy, and security for UAE business environments."
          },
          {
            title: "UAE Infrastructure Security Implementation",
            description: "Deploy comprehensive protection across all infrastructure layers including network security, system hardening, access controls, and monitoring solutions aligned with UAE Information Assurance Standards and relevant regulatory frameworks."
          },
          {
            title: "UAE Data Protection & Availability",
            description: "Implement robust backup, disaster recovery, and high availability solutions with appropriate retention, replication, and recovery capabilities designed around UAE business requirements and compliance obligations."
          },
          {
            title: "UAE Infrastructure Monitoring Implementation",
            description: "Deploy comprehensive visibility and alerting solutions across cloud and on-premises components with appropriate dashboard, notification, and reporting capabilities aligned with UAE operational hours and support expectations."
          },
          {
            title: "UAE Hybrid Integration & Management",
            description: "Establish seamless connectivity, consistent management, and unified operations between cloud and on-premises environments, creating cohesive infrastructure appropriate for UAE hybrid operational requirements."
          },
          {
            title: "UAE Infrastructure Documentation",
            description: "Create comprehensive technical documentation covering architecture, configurations, operational procedures, and recovery processes, providing complete visibility into your infrastructure with appropriate knowledge transfer to UAE technical teams."
          },
          {
            title: "UAE Infrastructure Transition",
            description: "Implement carefully planned cutover procedures from existing to new infrastructure with minimal business disruption, appropriate testing, and verification processes designed around UAE operational schedules and business requirements."
          },
          {
            title: "UAE Infrastructure Managed Services",
            description: "Provide ongoing monitoring, management, and optimization of your technology infrastructure through proactive maintenance, issue resolution, and continuous improvement services aligned with UAE business hours and support expectations."
          }
        ]}
        benefits={[
          {
            title: "UAE Business Reliability Enhancement",
            content: "Establish stable, resilient technology foundation through properly designed infrastructure with appropriate redundancy and availability features, minimizing disruptive outages that impact UAE business operations, customer service, and revenue generation."
          },
          {
            title: "UAE Scalability & Growth Support",
            content: "Create flexible technology environments that can efficiently expand with your UAE business needs without major redesign or disruption, accommodating both planned growth and unexpected capacity requirements common in the UAE's dynamic market."
          },
          {
            title: "UAE Security & Compliance Assurance",
            content: "Implement infrastructure meeting UAE security standards and regulatory requirements through proper architecture, controls, and management practices, reducing risk exposure while satisfying industry and government compliance obligations."
          },
          {
            title: "UAE Infrastructure Cost Optimization",
            content: "Balance capital and operational expenses through appropriate use of cloud and on-premises resources, optimizing UAE technology investments while maintaining performance, reliability, and security appropriate for business requirements."
          },
          {
            title: "UAE Performance Enhancement",
            content: "Improve application responsiveness and system efficiency through properly configured infrastructure components, optimizing user experience for UAE employees, customers, and partners across various connectivity environments."
          },
          {
            title: "UAE Technology Integration",
            content: "Create seamless connections between diverse systems and platforms through properly designed infrastructure integration, enabling consistent data flow and process automation across UAE business operations."
          },
          {
            title: "UAE Operational Efficiency",
            content: "Reduce management complexity and administrative overhead through standardized, well-documented infrastructure with appropriate automation, monitoring, and operational tools suited for UAE IT environments and support teams."
          },
          {
            title: "UAE Business Continuity Protection",
            content: "Strengthen resilience against disruptions through robust backup, recovery, and availability solutions designed specifically for UAE operational risks, business requirements, and compliance obligations."
          },
          {
            title: "UAE Future-Ready Foundation",
            content: "Establish technology base that can readily adopt emerging innovations through modern, flexible infrastructure architecture designed with UAE digital transformation objectives and evolving business requirements in mind."
          },
          {
            title: "UAE Expertise Access",
            content: "Leverage our certified infrastructure professionals with deep UAE implementation experience, eliminating the need to build and maintain specialized technical skills internally while ensuring infrastructure best practices adapted for local requirements."
          }
        ]}
        deliverables={[
          {
            title: "UAE Infrastructure Assessment Report",
            description: "Comprehensive evaluation of your current technology environment, business requirements, and improvement opportunities with specific consideration for UAE operational needs, compliance obligations, and regional factors affecting infrastructure implementation."
          },
          {
            title: "UAE Infrastructure Architecture Design",
            description: "Detailed technical architecture documenting all infrastructure components, relationships, and implementations across network, compute, storage, and security layers with specific attention to UAE requirements, regional considerations, and business objectives."
          },
          {
            title: "UAE Cloud Implementation Plan",
            description: "Structured deployment methodology for cloud environments including platform selection, service configuration, security controls, and operational procedures with specific consideration for UAE data residency, compliance requirements, and regional performance factors."
          },
          {
            title: "UAE Network Design & Configuration",
            description: "Comprehensive network architecture including local and wide-area connectivity, internet access, wireless systems, and security boundaries with detailed implementation specifications appropriate for UAE connectivity options, performance requirements, and operational needs."
          },
          {
            title: "UAE Server & Storage Configuration",
            description: "Detailed specifications for compute and storage infrastructure including hardware selection, virtualization platforms, capacity planning, and performance optimization with consideration for UAE availability requirements and regional implementation factors."
          },
          {
            title: "UAE Security Implementation Framework",
            description: "Comprehensive security architecture across all infrastructure components including network protection, access controls, system hardening, and monitoring solutions aligned with UAE Information Assurance Standards, NESA requirements, and industry-specific compliance frameworks."
          },
          {
            title: "UAE Business Continuity Design",
            description: "Robust data protection and recovery solution including backup methodologies, retention policies, disaster recovery procedures, and high availability configurations appropriate for UAE business continuity requirements and regional operational risks."
          },
          {
            title: "UAE Infrastructure Monitoring Solution",
            description: "Comprehensive visibility and management platform including dashboard configurations, alert definitions, reporting templates, and operational procedures aligned with UAE business hours, support expectations, and management requirements."
          },
          {
            title: "UAE Infrastructure Documentation",
            description: "Complete technical reference covering all implemented components, configurations, management procedures, and recovery processes designed for long-term maintenance and knowledge transfer to UAE technical teams with appropriate detail and clarity."
          },
          {
            title: "UAE Infrastructure Support Framework",
            description: "Structured support model including service levels, management procedures, maintenance schedules, and enhancement processes operating during UAE business hours with appropriate language support and regional considerations for ongoing operations."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hybrid Infrastructure */}
            <rect x="150" y="100" width="300" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="70" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="90" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="85" x2="400" y2="100" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Cloud Section */}
            <path d="M350 160 C370 140, 390 140, 410 160 C430 140, 450 160, 430 180 C450 200, 430 220, 410 200 C390 220, 370 200, 390 180 C370 160, 390 160, 390 180" 
                  fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="400" y="180" textAnchor="middle" fontSize="12" fill="#00E5FF">Cloud</text>
            
            {/* On-Premises Section */}
            <rect x="180" y="150" width="150" height="100" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="255" y="170" textAnchor="middle" fontSize="12" fill="#00E5FF">On-Premises</text>
            
            {/* On-Prem Components */}
            <rect x="190" y="180" width="30" height="40" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="205" y="205" textAnchor="middle" fontSize="7" fill="#00E5FF">Server</text>
            
            <rect x="230" y="180" width="30" height="40" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="245" y="205" textAnchor="middle" fontSize="7" fill="#00E5FF">Storage</text>
            
            <rect x="270" y="180" width="30" height="40" rx="2" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="285" y="205" textAnchor="middle" fontSize="7" fill="#00E5FF">Network</text>
            
            {/* Hybrid Connection */}
            <path d="M330 180 L350 180" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </path>
            
            <circle cx="340" cy="180" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="330;350;330" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* Security Perimeter */}
            <rect x="160" y="120" width="280" height="160" rx="8" fill="none" stroke="#EB3443" strokeWidth="1" strokeDasharray="5 3"/>
            <text x="180" y="135" textAnchor="middle" fontSize="8" fill="#EB3443">Security</text>
            
            {/* Monitoring */}
            <rect x="220" y="240" width="160" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="300" y="254" textAnchor="middle" fontSize="9" fill="#00B2A9">Monitoring & Management</text>
            
            {/* Infrastructure Engineer */}
            <circle cx="100" cy="180" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <circle cx="100" cy="170" r="8" fill="none" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M90 185 L110 185" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M85 195 L115 195" stroke="#00B2A9" strokeWidth="1"/>
            <text x="100" y="215" textAnchor="middle" fontSize="10" fill="#00B2A9">Engineer</text>
            
            {/* Implementation Flow */}
            <path d="M125 170 L180 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M125 180 L370 180" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M125 190 L220 240" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Architecture Document */}
            <rect x="220" y="280" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="300" textAnchor="middle" fontSize="12" fill="#00B2A9">Architecture Design</text>
            
            {/* Connection to Documentation */}
            <path d="M300" y="260" x2="300" y2="280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="500" y="140" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="154" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="170" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="184" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="500" y="200" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="214" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            {/* UAE Data Center */}
            <rect x="500" y="240" width="60" height="30" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="530" y="258" textAnchor="middle" fontSize="8" fill="#00E5FF">UAE Data</text>
            <text x="530" y="268" textAnchor="middle" fontSize="8" fill="#00E5FF">Centers</text>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Infrastructure Services</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE IT AMC Services",
            link: "/services/it-amc"
          },
          {
            title: "UAE Managed IT Services",
            link: "/services/managed-it"
          },
          {
            title: "UAE Microsoft Services",
            link: "/services/microsoft-services"
          },
          {
            title: "UAE Cloud Services",
            link: "/services/cloud-services"
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
        title="IT Infrastructure Services in UAE FAQs"
        subtitle="Common questions about technology infrastructure for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default InfrastructurePage;