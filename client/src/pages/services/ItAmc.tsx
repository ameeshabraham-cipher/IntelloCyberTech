import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Clock, CheckCircle, Settings, HelpCircle, Shield, LineChart, Users, Server } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const ItAmcPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "IT Annual Maintenance Contract (AMC) Services in UAE",
    description: "Expert IT AMC services in Dubai and across UAE. Ensure uninterrupted operations with our comprehensive IT maintenance and support services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "IT Annual Maintenance Contract",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring reliable IT support and maintenance"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is included in an IT Annual Maintenance Contract (AMC) for UAE organizations?",
      answer: "An IT Annual Maintenance Contract (AMC) for UAE organizations typically includes several core components tailored to the UAE business environment: 1) Preventive Maintenance - scheduled system checks, updates, and optimization to prevent issues in UAE's demanding operational environment, 2) Corrective Maintenance - troubleshooting and resolving hardware and software problems with onsite support available across UAE, 3) System Updates & Patching - regular security and feature updates aligned with UAE business hours and operational requirements, 4) IT Helpdesk Support - multi-language technical assistance (English and Arabic) via phone, email, and ticketing systems operating on UAE business schedules, 5) Network Management - monitoring and maintenance of network infrastructure with consideration for UAE connectivity challenges, 6) Security Management - ongoing protection against threats with specific attention to UAE's unique cybersecurity landscape, 7) Backup & Recovery Services - data protection solutions compliant with UAE data sovereignty requirements, 8) Asset Management - tracking hardware and software inventory with UAE compliance documentation, 9) Regular Reporting - performance metrics and service level achievement reports tailored to UAE business requirements, 10) Technology Consultation - strategic guidance for technology decisions in the UAE market. AMC packages can be customized based on your UAE organization's size, industry, technology environment, operational hours, and specific support requirements."
    },
    {
      question: "What are the benefits of an IT AMC for UAE businesses?",
      answer: "UAE businesses gain several critical advantages from IT Annual Maintenance Contracts: 1) Operational Continuity - minimized downtime particularly important in UAE's fast-paced business environment and growing digital economy, 2) Cost Predictability - fixed annual fee structure providing budget certainty without unexpected IT support costs, a key advantage for UAE financial planning, 3) Priority Support - guaranteed response times even during UAE peak business periods when ad-hoc support may be difficult to secure, 4) Proactive Maintenance - prevention of issues before they impact UAE business operations through regular system optimization, 5) Extended Equipment Lifespan - maximized return on IT investments through proper maintenance, particularly valuable given UAE's higher technology procurement costs, 6) Regulatory Compliance - assistance maintaining systems in accordance with UAE data protection and industry regulations, 7) Productivity Enhancement - faster resolution of IT issues allowing UAE staff to focus on core business activities, 8) Technical Expertise Access - specialized skills that may be difficult or expensive to maintain in-house in the UAE IT market, 9) Business Risk Reduction - minimized security vulnerabilities and data loss risks through regular maintenance and updates aligned with UAE threat landscape, 10) Scalability Support - flexible services that can adapt to business growth needs common in UAE's expanding economy. These benefits are particularly valuable for UAE organizations where technology reliability directly impacts customer service, operational efficiency, and competitive advantage in the region."
    },
    {
      question: "How should UAE organizations choose the right IT AMC provider?",
      answer: "UAE organizations should evaluate IT AMC providers based on several key criteria: 1) UAE Market Experience - proven track record supporting organizations in the UAE with understanding of local business culture and operational requirements, 2) Technical Expertise Breadth - certified professionals across technologies relevant to your UAE environment, with appropriate credentials recognized in the UAE market, 3) UAE Geographic Coverage - ability to provide onsite support across your locations in Dubai, Abu Dhabi, Sharjah and other Emirates if required, 4) Industry-Specific Experience - understanding of your sector's unique IT requirements within the UAE regulatory context, 5) Response Time Guarantees - clearly defined SLAs with response times aligned to UAE business hours and critical operation periods, 6) Multi-Language Support - technical assistance available in languages relevant to your UAE workforce (Arabic, English, and other languages common in UAE businesses), 7) Comprehensive Service Scope - coverage for all critical systems and appropriate exclusions clearly defined for UAE environments, 8) Transparent Pricing - clear fee structure without hidden costs, considering UAE market rates and value delivery, 9) Escalation Procedures - defined processes for handling critical issues with UAE-based escalation paths, 10) UAE References - feedback from existing UAE clients in similar industries regarding reliability and service quality, 11) Business Continuity Capabilities - disaster recovery expertise relevant to UAE environmental and operational risks. Thoroughly reviewing these factors helps ensure you select a provider capable of meeting your specific UAE organization's IT maintenance requirements with appropriate regional expertise."
    },
    {
      question: "What service levels should UAE organizations expect from an IT AMC contract?",
      answer: "UAE organizations should expect clearly defined service levels in IT AMC contracts, typically including: 1) Response Time Commitments - guaranteed initial response times categorized by issue severity (critical issues within 15-30 minutes, medium priority within 1-2 hours, low priority within 4-8 hours) during UAE business hours, 2) Resolution Time Objectives - targeted timeframes for issue resolution based on complexity and impact to UAE operations, 3) Service Availability - defined support hours aligned with UAE business operations (standard UAE business hours vs. extended support vs. 24/7 coverage), 4) First-Call Resolution Rate - percentage of issues resolved during initial contact without escalation, 5) Onsite Response Guarantee - timeframe for technicians to reach your UAE locations when physical presence is required, considering UAE traffic and geographic factors, 6) Preventive Maintenance Frequency - scheduled maintenance intervals appropriate for UAE operating conditions including environmental factors, 7) System Uptime Commitment - guaranteed percentage of system availability (typically 99.5-99.9% for standard systems in UAE environments), 8) Escalation Procedures - clearly defined paths with time thresholds for escalating unresolved issues to higher support tiers or management, 9) Reporting Frequency - regular service performance reports (monthly/quarterly) with UAE business impact assessments, 10) Communication Standards - protocols for issue updates, maintenance notifications, and service communications tailored to UAE business needs. These service levels should be documented in a formal Service Level Agreement (SLA) with appropriate remedies if commitments aren't met, designed specifically for UAE operational requirements."
    },
    {
      question: "How does IT AMC support UAE-specific regulatory compliance?",
      answer: "IT AMC services support UAE regulatory compliance through several mechanisms: 1) UAE Information Assurance Standards - maintaining systems in accordance with UAE IA requirements through regular updates, security patches, and configuration management, 2) Data Protection Compliance - ensuring IT systems properly handle personal data in line with UAE Personal Data Protection Law (PDPL) through appropriate access controls and security measures, 3) Industry-Specific Regulations - supporting specialized requirements for UAE regulated sectors like healthcare (DOH standards), finance (UAE Central Bank frameworks), and government entities (UAE federal requirements), 4) Documentation Maintenance - keeping required technical records, change logs, and system documentation updated for UAE regulatory inspections and audits, 5) Security Standards Implementation - maintaining systems according to cybersecurity frameworks required in UAE sectors, including international standards adopted by UAE authorities, 6) Vulnerability Management - regular scanning and remediation of security weaknesses to comply with UAE cybersecurity directives, 7) System Hardening - implementing and maintaining security configurations aligned with UAE-recommended standards, 8) Patch Management - ensuring timely application of security updates to meet UAE compliance requirements, 9) Backup & Recovery Validation - testing data protection mechanisms to ensure compliance with UAE business continuity expectations, 10) Access Control Management - maintaining appropriate user permissions and authentication systems in line with UAE identity and access management requirements. A quality IT AMC provider will stay informed about evolving UAE regulations that impact technology management and incorporate necessary compliance measures into maintenance routines, helping UAE organizations maintain regulatory alignment with minimal additional effort."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="IT Annual Maintenance Contract (AMC) Services in UAE | Reliable IT Support"
        description="Expert IT AMC services in Dubai and across UAE. Ensure uninterrupted operations with our comprehensive IT maintenance and support services with 22+ years of experience."
        url="/services/it-amc"
        type="website"
      />
      <ServicePageLayout
        title="IT Annual Maintenance Contract (AMC) Services in UAE | Reliable IT Support"
        category="UAE IT Managed Services"
        description="Ensure reliable IT operations and minimize costly downtime with our comprehensive IT Annual Maintenance Contract (AMC) services tailored for UAE organizations. We provide proactive maintenance, rapid support, and expert technical assistance for your entire IT infrastructure."
        heroIcon={<Clock className="h-8 w-8" />}
        overview="Technology forms the backbone of modern UAE businesses, but maintaining complex IT environments requires specialized expertise, consistent attention, and rapid response capabilities. Our UAE-focused IT Annual Maintenance Contract (AMC) services provide comprehensive maintenance and support for your entire technology infrastructure through scheduled preventive care, responsive technical assistance, and strategic optimization—all delivered by UAE-based IT professionals who understand your local business environment. We take responsibility for keeping your systems running smoothly so your team can focus on core business activities without disruption from technology issues. With flexible service packages tailored to UAE operational hours, multi-language support options, and coverage for both standard and specialized systems, our IT AMC services ensure your technology remains a business enabler rather than an operational burden. Our 22+ years of experience supporting UAE organizations across industries enables us to deliver reliable IT support that minimizes downtime, extends equipment lifespan, and provides predictable IT maintenance costs for improved business planning."
        steps={[
          {
            title: "UAE-Specific IT Environment Assessment",
            description: "Evaluate your complete technology landscape including hardware, software, networks, and specialized systems to understand your UAE organization's unique IT environment, business requirements, and operational dependencies before designing your AMC solution."
          },
          {
            title: "UAE-Appropriate Service Level Definition",
            description: "Collaboratively establish appropriate support parameters including response times, coverage hours, maintenance intervals, and escalation procedures tailored to your UAE organization's operational needs, business criticality, and industry requirements."
          },
          {
            title: "UAE IT Asset Documentation",
            description: "Create comprehensive inventory and documentation of all maintained systems, applications, and infrastructure components with warranty status, license details, and configuration information specific to your UAE environment for effective support delivery."
          },
          {
            title: "UAE Preventive Maintenance Scheduling",
            description: "Develop customized maintenance calendar with regular system checks, updates, and optimization activities scheduled around your UAE business operations to minimize disruption while ensuring consistent system health and performance."
          },
          {
            title: "UAE IT Support Process Implementation",
            description: "Establish streamlined issue reporting and resolution workflows with appropriate communication channels, ticketing systems, and escalation paths designed specifically for your UAE organization's structure and operational model."
          },
          {
            title: "UAE-Appropriate Network & Infrastructure Monitoring",
            description: "Deploy appropriate monitoring solutions to continuously track network performance, system health, and infrastructure status across your UAE environment, enabling proactive identification of potential issues before they impact operations."
          },
          {
            title: "UAE Scheduled System Updates & Patching",
            description: "Implement regular software updates, security patches, and firmware upgrades according to verified compatibility testing and change management processes appropriate for UAE business environments and operational requirements."
          },
          {
            title: "UAE Multi-Channel Helpdesk Support",
            description: "Provide responsive technical assistance via phone, email, and ticket system with options for both English and Arabic support, operating during UAE business hours with optional extended coverage for critical operations."
          },
          {
            title: "UAE Onsite Technical Assistance",
            description: "Deliver hands-on support at your UAE locations when required for hardware issues, physical infrastructure changes, or complex problems requiring in-person intervention, with guaranteed response times across UAE service areas."
          },
          {
            title: "UAE IT Security Maintenance",
            description: "Maintain security systems including firewall rules, antivirus solutions, and access controls through regular updates, configuration reviews, and vulnerability assessments appropriate for UAE threat landscape and compliance requirements."
          },
          {
            title: "UAE IT Performance Reporting",
            description: "Provide regular reports on system performance, support activities, service level achievement, and maintenance status with metrics relevant to your UAE business operations and technology governance requirements."
          },
          {
            title: "UAE Strategic Technology Consultation",
            description: "Offer ongoing advisory support for technology decisions including upgrade planning, system optimization, and IT strategy development with specific consideration for UAE market conditions, available technologies, and business requirements."
          }
        ]}
        benefits={[
          {
            title: "UAE Business Continuity Assurance",
            content: "Minimize disruptive technology issues and ensure reliable system operation through proactive maintenance and rapid support, reducing costly downtime that impacts UAE customer service delivery, operational efficiency, and business reputation."
          },
          {
            title: "UAE IT Cost Predictability",
            content: "Convert unpredictable break-fix expenses into fixed, budgetable operating costs through comprehensive service coverage, enabling more accurate financial planning and technology budgeting for UAE organizations."
          },
          {
            title: "UAE Priority Support Guarantee",
            content: "Receive assured response times and priority handling for technical issues based on agreed service levels, ensuring critical problems are addressed promptly even during peak demand periods in the UAE IT support market."
          },
          {
            title: "UAE Equipment Lifecycle Extension",
            content: "Maximize return on technology investments through proper maintenance that extends useful equipment life, particularly beneficial given higher technology procurement costs and import considerations in the UAE market."
          },
          {
            title: "UAE Technical Expertise Access",
            content: "Leverage specialized IT skills without maintaining extensive in-house technical teams, accessing diverse expertise calibrated to your specific UAE technology environment without the recruitment challenges of the competitive UAE IT labor market."
          },
          {
            title: "UAE Operational Focus Enhancement",
            content: "Free your team from routine IT maintenance tasks and troubleshooting responsibilities, allowing them to concentrate on core business activities and strategic initiatives that drive UAE business growth and competitive advantage."
          },
          {
            title: "UAE Compliance Support",
            content: "Maintain IT systems in accordance with UAE regulatory requirements through regular updates, security patches, and proper configuration management aligned with relevant UAE compliance frameworks for your industry."
          },
          {
            title: "UAE Technology Risk Reduction",
            content: "Minimize security vulnerabilities, data loss risks, and compatibility issues through systematic maintenance and qualified technical support familiar with the specific threat landscape and technology challenges in the UAE environment."
          },
          {
            title: "UAE Performance Optimization",
            content: "Ensure systems operate at peak efficiency through regular tuning, updates, and expert configurations that maximize technology performance in UAE operating conditions and business usage patterns."
          },
          {
            title: "UAE Business Scalability Support",
            content: "Adapt technology support to changing business needs with flexible service options that can scale with your organization's growth, particularly valuable in the UAE's dynamic and expanding business environment."
          }
        ]}
        deliverables={[
          {
            title: "UAE Service Level Agreement (SLA)",
            description: "Comprehensive contract detailing all support parameters including response times, resolution objectives, service hours, maintenance schedules, escalation procedures, and accountability measures specifically designed for your UAE organization's operational requirements and business priorities."
          },
          {
            title: "UAE IT Asset Inventory",
            description: "Detailed documentation of all maintained hardware, software, and infrastructure components with specifications, warranty status, license information, and support classification, providing complete visibility of your UAE technology environment."
          },
          {
            title: "UAE Maintenance Activity Schedule",
            description: "Customized calendar of all planned preventive maintenance, system updates, security patching, and optimization activities aligned with your UAE business operations and scheduled to minimize operational disruption in your specific industry context."
          },
          {
            title: "UAE Multi-Channel Support System",
            description: "Established technical assistance platforms including phone support, email communication, and ticketing system with appropriate language options and operational hours designed for UAE business needs and user preferences."
          },
          {
            title: "UAE System Performance Reports",
            description: "Regular documentation of system health metrics, performance indicators, and optimization opportunities identified through monitoring and maintenance activities, providing clear visibility into your UAE technology environment status."
          },
          {
            title: "UAE Support Activity Reports",
            description: "Periodic summaries of all support tickets, issue resolutions, maintenance actions, and service requests with detailed metrics on response times, resolution efficiency, and recurring issues identified in your UAE environment."
          },
          {
            title: "UAE Service Level Performance Dashboard",
            description: "Visual representation of support performance against agreed service levels including response time achievement, resolution objectives, maintenance completion, and overall service quality metrics relevant to UAE business operations."
          },
          {
            title: "UAE IT Health Assessment",
            description: "Comprehensive evaluation of your overall technology environment conducted at regular intervals, identifying potential risks, improvement opportunities, and optimization recommendations specific to your UAE technology infrastructure and business requirements."
          },
          {
            title: "UAE Technology Roadmap Guidance",
            description: "Strategic recommendations for system upgrades, technology investments, and infrastructure improvements based on maintenance insights, industry trends, and specific UAE market developments relevant to your organization's technology needs."
          },
          {
            title: "UAE Emergency Response Protocol",
            description: "Documented procedures for handling critical system failures or major incidents including contact information, escalation paths, recovery priorities, and business continuity steps tailored to UAE operational conditions and support availability."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Elements */}
            <rect x="150" y="100" width="300" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="70" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="90" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="85" x2="400" y2="100" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Clock Symbol */}
            <circle cx="300" cy="150" r="30" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <line x1="300" y1="150" x2="300" y2="135" stroke="#00E5FF" strokeWidth="1.5">
              <animateTransform attributeName="transform" type="rotate" from="0 300 150" to="360 300 150" dur="30s" repeatCount="indefinite"/>
            </line>
            <line x1="300" y1="150" x2="315" y2="150" stroke="#00E5FF" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" from="0 300 150" to="360 300 150" dur="3600s" repeatCount="indefinite"/>
            </line>
            <text x="300" y="190" textAnchor="middle" fontSize="12" fill="#00E5FF">AMC</text>
            
            {/* Support Elements */}
            <rect x="180" y="220" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="210" y="240" textAnchor="middle" fontSize="10" fill="#00E5FF">Hardware</text>
            
            <rect x="250" y="220" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="280" y="240" textAnchor="middle" fontSize="10" fill="#00E5FF">Software</text>
            
            <rect x="320" y="220" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="350" y="240" textAnchor="middle" fontSize="10" fill="#00E5FF">Network</text>
            
            <rect x="390" y="220" width="60" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="420" y="240" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
            
            {/* Connection Lines */}
            <line x1="300" y1="180" x2="210" y2="220" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="180" x2="280" y2="220" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="180" x2="350" y2="220" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="300" y1="180" x2="420" y2="220" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Service Levels */}
            <rect x="100" y="150" width="80" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="140" y="164" textAnchor="middle" fontSize="9" fill="#00B2A9">Preventive</text>
            
            <rect x="100" y="180" width="80" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="140" y="194" textAnchor="middle" fontSize="9" fill="#00B2A9">Corrective</text>
            
            <rect x="100" y="210" width="80" height="20" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="140" y="224" textAnchor="middle" fontSize="9" fill="#00B2A9">Predictive</text>
            
            {/* Service Connections */}
            <path d="M180 150 L270 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </path>
            
            <path d="M180 180 L270 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/>
            </path>
            
            <path d="M180 210 L270 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite"/>
            </path>
            
            {/* Help Desk */}
            <rect x="380" y="130" width="60" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="410" y="155" textAnchor="middle" fontSize="10" fill="#00B2A9">Helpdesk</text>
            
            {/* Support Request */}
            <circle cx="360" cy="150" r="3" fill="#EB3443">
              <animate attributeName="cx" values="420;360;330" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* Technician */}
            <circle cx="350" cy="150" r="3" fill="#00B2A9">
              <animate attributeName="cx" values="380;350;340;330" dur="5s" begin="1s" repeatCount="indefinite"/>
            </circle>
            
            {/* SLA Document */}
            <rect x="220" y="300" width="100" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="270" y="325" textAnchor="middle" fontSize="12" fill="#00B2A9">SLA</text>
            
            {/* Connection to SLA */}
            <path d="M300 250 L270 300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Business Hours */}
            <rect x="500" y="150" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="164" textAnchor="middle" fontSize="8" fill="#EB3443">8 AM - 6 PM</text>
            
            <rect x="500" y="180" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="194" textAnchor="middle" fontSize="8" fill="#EB3443">UAE Hours</text>
            
            <rect x="500" y="210" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="224" textAnchor="middle" fontSize="8" fill="#EB3443">Onsite</text>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE IT Annual Maintenance Contract</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Managed IT Services",
            link: "/services/managed-it"
          },
          {
            title: "UAE IT Infrastructure Services",
            link: "/services/infrastructure"
          },
          {
            title: "UAE Managed Security Services",
            link: "/services/managed-security"
          },
          {
            title: "UAE IT Project Management",
            link: "/services/managed-it-project"
          },
          {
            title: "UAE Cloud Services",
            link: "/services/cloud-services"
          },
          {
            title: "UAE Microsoft Services",
            link: "/services/microsoft-services"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="IT AMC Services in UAE FAQs"
        subtitle="Common questions about IT Annual Maintenance Contracts for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default ItAmcPage;