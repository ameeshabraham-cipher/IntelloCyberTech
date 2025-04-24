import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Database, Eye, FileText, Lock, AlertTriangle, Search, Filter } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const DlpPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Data Loss Prevention (DLP) Services in UAE",
    description: "Expert DLP services in Dubai and across UAE. Protect sensitive information from unauthorized access and disclosure with our comprehensive data loss prevention solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Data Protection Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring data protection controls"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What data types should be protected by DLP in UAE organizations?",
      answer: "UAE organizations should prioritize protecting several key data categories through DLP: 1) Personal Data Under UAE PDPL - information about individuals protected under UAE Personal Data Protection Law including identification details, contact information, and other protected elements with specific UAE compliance requirements, 2) Financial Information - payment card data, banking details, investment records, and transaction information subject to UAE Central Bank and other financial regulations, 3) UAE Government Data - information related to government projects, services, and operations with classification according to UAE federal and emirate-level information security requirements, 4) UAE Healthcare Information - patient records, medical history, treatment information, and health data subject to UAE healthcare authority regulations and privacy requirements, 5) UAE Corporate Confidential Information - strategic plans, financial projections, market analyses, and other sensitive business data valuable to UAE organizations' competitive position, 6) Intellectual Property - trade secrets, proprietary algorithms, product designs, and research data representing significant value to UAE organizations in innovation-focused sectors, 7) UAE Customer Information - detailed profiles, purchase history, preference data and other client information maintained by UAE organizations across various industries, 8) Authentication Credentials - usernames, passwords, access tokens, and other security information that could enable unauthorized access to UAE organizational systems, 9) UAE Business Partner Data - information shared by vendors, suppliers, and partners with UAE organizations under confidentiality obligations and contractual protections, 10) UAE Critical Infrastructure Information - technical details about sensitive systems, configurations, and operations related to UAE essential services and infrastructure. Protection priorities should be established based on data sensitivity, regulatory requirements, and business value specific to your UAE organization."
    },
    {
      question: "What are the key components of effective DLP implementation for UAE organizations?",
      answer: "Effective DLP for UAE organizations requires several essential components: 1) UAE-Specific Data Classification Framework - structured categorization of information based on sensitivity, regulatory requirements, and business value with specific consideration for UAE data types and compliance obligations, 2) UAE Data Discovery Capabilities - comprehensive tools for identifying sensitive information across diverse repositories, applications, and endpoints throughout UAE IT environment, 3) UAE-Appropriate Content Analysis - technologies for examining data through keywords, patterns, file attributes, and contextual analysis with sensitivity to languages used in UAE business environments, 4) UAE-Aligned Policy Framework - clearly defined rules determining appropriate handling, transmission, and storage of different data types based on UAE regulatory requirements and organizational policies, 5) UAE Multi-Channel Monitoring - coverage across email, web, endpoints, cloud services, and removable media with appropriate controls for UAE work practices and technology usage patterns, 6) UAE Context-Aware Controls - intelligent protection mechanisms considering user role, location, device, and business purpose when applying restrictions in UAE operational environments, 7) UAE-Appropriate Incident Management - structured processes for addressing policy violations with investigation procedures, response workflows, and escalation paths aligned with UAE organizational structures, 8) UAE User Notification & Education - awareness mechanisms informing users about policy violations with appropriate guidance, combined with training relevant to UAE data handling requirements, 9) UAE Compliance Reporting - documentation capabilities demonstrating protection measures to satisfy UAE regulatory requirements with appropriate evidence for various authorities, 10) UAE Integration Capabilities - connections with identity systems, security tools, and business applications to create unified data protection appropriate for UAE IT ecosystems. These components should be implemented as part of comprehensive data protection strategy tailored to specific UAE organizational requirements and regulatory obligations."
    },
    {
      question: "How should UAE organizations approach cloud DLP challenges?",
      answer: "UAE organizations should address cloud DLP challenges through several strategic approaches: 1) UAE Data Residency Assessment - evaluate where sensitive data resides in cloud services, aligning storage locations with UAE data sovereignty requirements and regulatory obligations for different information types, 2) UAE Cloud Service Risk Analysis - assess security capabilities, compliance certifications, and data protection features of cloud providers against UAE standards before storing sensitive information, 3) UAE-Appropriate Cloud DLP Architecture - implement protection spanning infrastructure-as-service, platform-as-service, and software-as-service environments used in UAE operations, with controls appropriate for each model, 4) UAE Cloud Access Security Brokers (CASB) - deploy intermediary controls providing visibility and protection for cloud services, with policy enforcement aligned with UAE data protection requirements, 5) UAE API-Based Cloud Integration - establish connections with cloud platforms' native security features, enhancing protection through combined capabilities tuned to UAE compliance requirements, 6) UAE Shadow IT Discovery - implement processes for identifying unauthorized cloud services used by UAE employees that may create unmanaged data protection risks, 7) UAE Cloud Data Classification - extend data categorization frameworks to cloud environments, ensuring consistent protection across on-premises and cloud storage used in UAE operations, 8) UAE Cloud Encryption Strategy - implement appropriate cryptographic controls for different cloud deployment models, with key management aligned with UAE compliance requirements and operational needs, 9) UAE Cross-Cloud Monitoring - establish unified visibility across multiple cloud providers used in UAE operations, creating consistent protection regardless of where data resides, 10) UAE Cloud Exit Planning - develop procedures for secure data retrieval when changing providers or returning to on-premises, ensuring protection throughout transition common in UAE's evolving cloud market. This comprehensive approach addresses UAE cloud data protection challenges while enabling organizations to leverage cloud benefits with appropriate security controls."
    },
    {
      question: "How can UAE organizations balance DLP security with business productivity?",
      answer: "UAE organizations can achieve DLP balance through several practical approaches: 1) UAE Risk-Based Implementation - align protection intensity with data sensitivity and business impact, applying appropriate controls based on UAE-specific risk assessment rather than uniform restrictions, 2) UAE User Experience Focus - design controls with minimal disruption to legitimate UAE business processes, focusing on protection that preserves productivity while securing truly sensitive information, 3) UAE Business Process Integration - embed data protection into existing workflows rather than creating separate security steps, making security inherent in how UAE employees naturally work, 4) UAE-Appropriate User Education - develop targeted awareness explaining protection rationale in business terms relevant to UAE organizations, helping users understand why controls exist and how to work effectively within them, 5) UAE Exception Management - implement formal processes for handling legitimate business needs that conflict with standard policies, providing appropriate flexibility within UAE governance frameworks, 6) UAE Self-Service Options - enable users to classify data, check policy compliance, and resolve simple issues independently, reducing friction in UAE business operations while maintaining protection, 7) UAE False Positive Tuning - continuously refine detection accuracy to minimize incorrect blocking of legitimate UAE business communications and data usage, 8) UAE Phased Implementation - gradually introduce controls with appropriate communication and adjustment periods, allowing UAE workforce to adapt to new protection measures, 9) UAE Business Unit Collaboration - involve operational stakeholders in DLP design to ensure controls accommodate actual UAE business requirements and work practices, 10) UAE Productivity Metrics - monitor business impact alongside security metrics, identifying where DLP controls may be creating unnecessary obstacles to UAE business operations. This balanced approach delivers effective data protection while ensuring UAE organizations maintain operational efficiency and competitive capabilities in fast-paced markets."
    },
    {
      question: "What are the regulatory DLP requirements for UAE organizations?",
      answer: "UAE organizations face several key regulatory requirements affecting DLP implementation: 1) UAE Personal Data Protection Law (PDPL) - federal legislation requiring comprehensive protection for personal information with specific controls for data identification, access, transmission, and breach notification with significant penalties for non-compliance, 2) UAE Information Assurance Standards - security controls for government entities and critical infrastructure requiring structured data protection based on classification levels with specific technical and procedural safeguards, 3) UAE Central Bank Consumer Data Protection Regulation - specialized requirements for financial institutions regarding customer information security with explicit DLP expectations for banking, insurance, and investment sectors, 4) UAE Healthcare Data Protection - requirements from Department of Health and other authorities governing patient information security with specific controls for medical data handling, storage, and transmission, 5) DIFC and ADGM Data Protection Regulations - specialized frameworks for financial free zones incorporating European-influenced data protection principles with detailed security requirements for organizations in these jurisdictions, 6) UAE Cybercrime Law - criminalization of unauthorized data access and disclosure creating significant legal liability for inadequate protection of sensitive information, 7) UAE Sector-Specific Regulations - specialized requirements for telecommunications, energy, education, and other regulated industries with additional data protection obligations, 8) UAE Cloud Computing Regulations - emerging standards for data stored in cloud services with specific security and sovereignty requirements affecting how and where UAE organizations can store different data types, 9) UAE Cross-Border Data Transfer Rules - restrictions on moving certain data categories outside UAE territory with compliance requirements for international data sharing, 10) UAE Breach Notification Requirements - mandatory disclosure obligations for data security incidents affecting certain information types with specific timeline and reporting requirements. DLP implementations must be designed to satisfy these diverse requirements based on each UAE organization's specific regulatory landscape."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Data Loss Prevention (DLP) Services in UAE | Data Protection"
        description="Expert DLP services in Dubai and across UAE. Protect sensitive information from unauthorized access and disclosure with our comprehensive data loss prevention solutions with 22+ years of experience."
        url="/services/dlp"
        type="website"
      />
      <ServicePageLayout
        title="Data Loss Prevention (DLP) Services in UAE | Data Protection"
        category="UAE Data Security Services"
        description="Safeguard your organization's sensitive information with our comprehensive Data Loss Prevention services. We help UAE organizations implement effective controls to detect, monitor, and protect critical data from unauthorized access and disclosure."
        heroIcon={<Shield className="h-8 w-8" />}
        overview="As UAE data protection regulations become increasingly stringent and cyber threats more sophisticated, organizations face growing challenges preventing unauthorized disclosure of sensitive information. Our UAE-focused Data Loss Prevention (DLP) services provide comprehensive solutions to identify, monitor, and protect critical data across your entire technology environment through specialized tools, strategic methodologies, and practical implementation guidance. We help transform fragmented data security into cohesive protection strategies that safeguard your most valuable information assets while enabling legitimate business use. With deep understanding of UAE regulatory requirements, business operations, and data security technologies, we implement DLP solutions tailored to your specific industry, data types, and risk profile. Whether protecting personal information under UAE PDPL, financial data, intellectual property, or confidential business information, our expertise ensures your DLP program effectively protects critical data while addressing the specific compliance and operational needs of UAE organizations."
        steps={[
          {
            title: "UAE Data Protection Assessment",
            description: "Evaluate your current data security practices, sensitive information types, and protection requirements through comprehensive discovery and risk analysis specific to UAE business context and regulatory landscape."
          },
          {
            title: "UAE Data Classification Framework",
            description: "Develop structured methodology for categorizing information based on sensitivity, regulatory requirements, and business value, creating foundation for appropriate protection controls across UAE data environment."
          },
          {
            title: "UAE-Specific DLP Requirements",
            description: "Identify applicable data protection regulations, contractual obligations, and organizational policies affecting your UAE operations, mapping specific control requirements for different data types and usage scenarios."
          },
          {
            title: "UAE DLP Architecture Design",
            description: "Create comprehensive technical blueprint for data protection covering networks, endpoints, cloud services, and applications with appropriate controls for UAE operational environment and technology landscape."
          },
          {
            title: "UAE DLP Policy Development",
            description: "Establish detailed rules defining appropriate handling for different data types with specific criteria, conditions, and actions aligned with UAE regulatory requirements and organizational security objectives."
          },
          {
            title: "UAE-Appropriate Content Analysis",
            description: "Implement detection capabilities using keywords, patterns, file attributes, and contextual analysis adapted for UAE business environment with appropriate language support and regional considerations."
          },
          {
            title: "UAE Data Discovery Implementation",
            description: "Deploy scanning capabilities to identify sensitive information across repositories, applications, and endpoints throughout UAE IT environment, creating inventory of protected data locations and access patterns."
          },
          {
            title: "UAE Network DLP Deployment",
            description: "Implement protection for data in motion across email, web, and network communications with appropriate monitoring, filtering, and control mechanisms tuned for UAE business operations and compliance requirements."
          },
          {
            title: "UAE Endpoint DLP Implementation",
            description: "Establish controls on user devices to prevent unauthorized data transfers through portable media, applications, and local storage with appropriate balance between security and usability for UAE workforce."
          },
          {
            title: "UAE Cloud DLP Integration",
            description: "Extend data protection to cloud services used in UAE operations through appropriate connection methods, control mechanisms, and monitoring capabilities addressing specific cloud data security challenges."
          },
          {
            title: "UAE DLP Incident Management",
            description: "Develop structured procedures for addressing policy violations with investigation workflows, response protocols, and remediation processes aligned with UAE organizational structure and incident handling procedures."
          },
          {
            title: "UAE DLP Awareness Program",
            description: "Create targeted education initiatives addressing data protection requirements, user responsibilities, and security procedures with content appropriate for UAE workforce demographics and organizational culture."
          }
        ]}
        benefits={[
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Meet data protection obligations under UAE PDPL, UAE IA Standards, and sector-specific regulations through structured controls demonstrating due diligence in safeguarding sensitive information according to compliance requirements."
          },
          {
            title: "UAE Data Breach Risk Reduction",
            content: "Significantly decrease likelihood of unauthorized disclosure through proactive identification and protection of sensitive information, preventing data leakage incidents that could damage UAE operations and reputation."
          },
          {
            title: "UAE Sensitive Data Visibility",
            content: "Gain comprehensive understanding of where critical information resides across your environment through systematic discovery and classification, creating complete view of sensitive data landscape across UAE operations."
          },
          {
            title: "UAE Intellectual Property Protection",
            content: "Safeguard valuable proprietary information including trade secrets, research data, and strategic plans from unauthorized access or disclosure, preserving competitive advantages in UAE market environments."
          },
          {
            title: "UAE Customer Trust Enhancement",
            content: "Demonstrate commitment to protecting client information through comprehensive safeguards, building confidence among UAE customers increasingly concerned about privacy and data security practices."
          },
          {
            title: "UAE Cloud Security Assurance",
            content: "Extend data protection to cloud services increasingly used by UAE organizations, ensuring appropriate controls for sensitive information regardless of storage location or processing environment."
          },
          {
            title: "UAE Insider Threat Mitigation",
            content: "Address risks from authorized users through appropriate monitoring, alerting, and controls that prevent accidental or deliberate mishandling of sensitive information across UAE operations."
          },
          {
            title: "UAE Data-Centric Security",
            content: "Implement protection that follows information throughout its lifecycle regardless of location or format, ensuring consistent security as data moves across UAE technology environments and business processes."
          },
          {
            title: "UAE Third-Party Risk Reduction",
            content: "Establish appropriate controls for information shared with vendors, partners, and service providers, ensuring protection extends beyond organizational boundaries across UAE business ecosystem."
          },
          {
            title: "UAE Security Awareness Enhancement",
            content: "Build organization-wide understanding of data protection importance through policy education, incident examples, and practical guidance, creating security-conscious culture across UAE workforce."
          }
        ]}
        deliverables={[
          {
            title: "UAE Data Protection Assessment Report",
            description: "Comprehensive evaluation of your current data security practices, sensitive information types, and protection gaps with detailed findings and recommendations specific to UAE regulatory landscape and business environment."
          },
          {
            title: "UAE Data Classification Framework",
            description: "Structured methodology for categorizing information based on sensitivity, regulatory requirements, and business value, with specific categories, definitions, and handling requirements tailored to UAE operational context."
          },
          {
            title: "UAE DLP Requirements Analysis",
            description: "Detailed mapping of applicable regulations, contractual obligations, and organizational policies affecting your UAE operations, with specific control requirements for different data types and protection scenarios."
          },
          {
            title: "UAE DLP Architecture Blueprint",
            description: "Technical design documentation for comprehensive data protection covering network, endpoint, cloud, and application controls with appropriate implementation approach for UAE technology environment."
          },
          {
            title: "UAE DLP Policy Configuration",
            description: "Detailed rule definitions specifying detection criteria, monitoring parameters, and response actions for different data types and security scenarios, appropriately tuned for UAE business operations."
          },
          {
            title: "UAE DLP Implementation Plan",
            description: "Structured deployment strategy with phased approach, resource requirements, milestone definitions, and testing methodologies appropriate for implementing DLP across UAE operations with minimal business disruption."
          },
          {
            title: "UAE Data Discovery Report",
            description: "Comprehensive inventory of sensitive information locations across your environment with risk assessment, access patterns, and protection recommendations providing complete visibility of UAE data landscape."
          },
          {
            title: "UAE DLP Incident Management Playbook",
            description: "Detailed procedures for addressing policy violations including investigation workflows, response protocols, escalation paths, and remediation processes aligned with UAE organizational structure."
          },
          {
            title: "UAE DLP Dashboard & Reporting",
            description: "Visualization and reporting solutions providing actionable intelligence on data protection status, policy violations, remediation activities, and control effectiveness with formats appropriate for different UAE stakeholder audiences."
          },
          {
            title: "UAE DLP Awareness Materials",
            description: "Educational resources addressing data protection requirements with content appropriate for UAE workforce demographics, including presentation materials, user guides, and communication templates in relevant languages."
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
            
            {/* Data Repository */}
            <rect x="250" y="130" width="100" height="60" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="165" textAnchor="middle" fontSize="11" fill="#00E5FF">Data Repository</text>
            
            {/* Data Types */}
            <rect x="260" y="140" width="20" height="10" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="270" y="147" textAnchor="middle" fontSize="5" fill="#EB3443">PII</text>
            
            <rect x="285" y="140" width="20" height="10" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="295" y="147" textAnchor="middle" fontSize="5" fill="#EB3443">Financial</text>
            
            <rect x="310" y="140" width="20" height="10" rx="2" fill="#0A1024" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="320" y="147" textAnchor="middle" fontSize="5" fill="#00B2A9">Corporate</text>
            
            <rect x="260" y="153" width="20" height="10" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="270" y="160" textAnchor="middle" fontSize="5" fill="#EB3443">Medical</text>
            
            <rect x="285" y="153" width="20" height="10" rx="2" fill="#0A1024" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="295" y="160" textAnchor="middle" fontSize="5" fill="#00B2A9">IP</text>
            
            <rect x="310" y="153" width="20" height="10" rx="2" fill="#0A1024" stroke="#00B2A9" strokeWidth="0.5"/>
            <text x="320" y="160" textAnchor="middle" fontSize="5" fill="#00B2A9">Strategic</text>
            
            {/* DLP Components */}
            <rect x="180" y="220" width="240" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            
            <rect x="190" y="225" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="207.5" y="238" textAnchor="middle" fontSize="7" fill="#00E5FF">Discover</text>
            
            <rect x="235" y="225" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="252.5" y="238" textAnchor="middle" fontSize="7" fill="#00E5FF">Monitor</text>
            
            <rect x="280" y="225" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="297.5" y="238" textAnchor="middle" fontSize="7" fill="#00E5FF">Classify</text>
            
            <rect x="325" y="225" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="342.5" y="238" textAnchor="middle" fontSize="7" fill="#00E5FF">Protect</text>
            
            <rect x="370" y="225" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="387.5" y="238" textAnchor="middle" fontSize="7" fill="#00E5FF">Enforce</text>
            
            {/* DLP Analysis Animation */}
            <circle cx="300" cy="170" r="3" fill="#00B2A9">
              <animate attributeName="cy" values="170;190;210;225" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Data Access Channels */}
            <rect x="180" y="170" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="197.5" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Email</text>
            
            <rect x="180" y="195" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="197.5" y="208" textAnchor="middle" fontSize="7" fill="#00E5FF">Web</text>
            
            <rect x="385" y="170" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="402.5" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Cloud</text>
            
            <rect x="385" y="195" width="35" height="20" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="402.5" y="208" textAnchor="middle" fontSize="7" fill="#00E5FF">Devices</text>
            
            {/* Channel Connections */}
            <line x1="215" y1="180" x2="250" y2="160" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 1"/>
            <line x1="215" y1="205" x2="250" y2="170" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 1"/>
            <line x1="385" y1="180" x2="350" y2="160" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 1"/>
            <line x1="385" y1="205" x2="350" y2="170" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 1"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="170" y="115" width="50" height="15" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="195" y="125" textAnchor="middle" fontSize="6" fill="#EB3443">UAE PDPL</text>
            
            <rect x="170" y="133" width="50" height="15" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="195" y="143" textAnchor="middle" fontSize="6" fill="#EB3443">UAE IA</text>
            
            <rect x="170" y="151" width="50" height="15" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="0.5"/>
            <text x="195" y="161" textAnchor="middle" fontSize="6" fill="#EB3443">Central Bank</text>
            
            {/* Blocked Data Flow */}
            <path d="M270 140 C270 120, 240 115, 240 95" stroke="#EB3443" strokeWidth="1" strokeDasharray="2 1"/>
            <circle cx="240" cy="95" r="8" fill="none" stroke="#EB3443" strokeWidth="1"/>
            <line x1="235" y1="90" x2="245" y2="100" stroke="#EB3443" strokeWidth="1"/>
            
            {/* Allowed Data Flow */}
            <path d="M320 140 C320 120, 360 115, 360 95" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <circle cx="360" cy="95" r="8" fill="none" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M355 95 L365 95" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M360 90 L360 100" stroke="#00B2A9" strokeWidth="1"/>
            
            {/* DLP Dashboard */}
            <rect x="220" y="270" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="290" textAnchor="middle" fontSize="11" fill="#00B2A9">DLP Dashboard</text>
            
            {/* Dashboard Connection */}
            <path d="M300 250 L300 270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Data Loss Prevention</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Data Privacy",
            link: "/services/data-privacy"
          },
          {
            title: "UAE Email Security",
            link: "/services/email-security"
          },
          {
            title: "UAE Cloud Security",
            link: "/services/cloud-security"
          },
          {
            title: "UAE Cybersecurity Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE Compliance Services",
            link: "/services/compliance"
          },
          {
            title: "UAE Microsoft 365 Security",
            link: "/services/microsoft-services"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Data Loss Prevention in UAE FAQs"
        subtitle="Common questions about DLP implementation for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default DlpPage;