import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { BarChart2, Clock, Users, Target, CheckCircle, Workflow, ArrowRight, ClipboardCheck } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const ManagedItProjectPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Managed IT Project Services in UAE",
    description: "Expert managed IT project services in Dubai and across UAE. Successfully deliver technology initiatives with our comprehensive IT project management services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "IT Project Management",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring professional IT project delivery"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What types of IT projects can be managed for UAE organizations?",
      answer: "UAE organizations can benefit from professional management across numerous IT project types: 1) Infrastructure Deployments - implementing new servers, networks, and data centers optimized for UAE's business environment and climate conditions, 2) Cloud Migrations - transitioning from on-premises systems to cloud platforms with consideration for UAE data residency requirements and regional availability zones, 3) Enterprise System Implementations - deploying ERP, CRM, HRMS and other enterprise applications with UAE-specific business process configurations and compliance requirements, 4) Digital Transformation Initiatives - modernizing legacy systems and processes to enhance digital capabilities essential for UAE market competitiveness, 5) Security Enhancement Projects - implementing cybersecurity improvements aligned with UAE Information Assurance Standards and industry regulations, 6) Business Intelligence Implementations - developing analytics capabilities with dashboards relevant to UAE business operations and KPIs, 7) Mobile Application Developments - creating UAE-market specific mobile solutions with appropriate localization and regional service integrations, 8) Workplace Modernization - implementing collaboration tools and digital workplace platforms optimized for UAE's multicultural workforce, 9) IT Infrastructure Refreshes - planning and executing hardware and software upgrades across UAE locations, 10) Disaster Recovery Implementations - establishing business continuity solutions appropriate for UAE operational risks and regulatory requirements. Each project type requires specific expertise tailored to UAE's business environment, regulatory landscape, and regional technology considerations."
    },
    {
      question: "What are the key benefits of professional IT project management for UAE businesses?",
      answer: "UAE businesses gain several strategic advantages through professional IT project management: 1) Project Success Rate Improvement - significantly higher completion rates for technology initiatives through structured methodology and experienced oversight, particularly valuable in the UAE's fast-paced business environment, 2) Risk Mitigation - systematic identification and management of implementation risks specific to UAE technology deployments and business operations, 3) Resource Optimization - efficient utilization of technology investments and human resources, critical in UAE's competitive talent market and higher technology procurement costs, 4) Timeline Adherence - projects delivered on schedule through effective planning, monitoring, and course correction, essential for UAE businesses keeping pace with rapid market evolution, 5) Budget Control - financial discipline preventing cost overruns and ensuring return on technology investments, with appropriate planning for UAE-specific implementation costs, 6) Quality Assurance - consistent delivery of high-quality solutions through structured testing and validation processes aligned with UAE business requirements, 7) Stakeholder Alignment - maintaining executive vision and operational needs alignment through effective communication tailored to UAE organizational cultures, 8) Change Management - smooth user adoption through cultural change management appropriate for UAE's diverse workforce demographics, 9) Knowledge Transfer - ensuring internal teams develop capabilities to maintain new systems, with training approaches suitable for UAE staff development needs, 10) Scalable Implementation - structured approaches that can scale to enterprise-wide deployments across multiple UAE locations while maintaining consistency. Through these benefits, professional project management transforms technology initiatives from potential disruptions into strategic enablers for UAE business growth."
    },
    {
      question: "What project management methodologies work best for UAE IT projects?",
      answer: "Several project management methodologies can be effective for UAE IT projects, with selection depending on project characteristics: 1) Traditional Waterfall - sequential approach beneficial for UAE implementations with clearly defined requirements and regulatory compliance focus, particularly suitable for government, financial, and infrastructure projects with fixed specifications, 2) Agile Methodologies (Scrum/Kanban) - iterative approaches valuable for UAE organizations requiring flexibility and regular stakeholder feedback, adapted to accommodate UAE business formalities and hierarchical decision-making structures, 3) Hybrid Approaches - combining waterfall planning with agile execution to balance structure and flexibility, particularly effective for UAE organizations transitioning from traditional to more adaptive methodologies, 4) PRINCE2 - process-based method familiar in UAE government and regulated sectors, providing strong governance and control gates aligned with UAE public sector expectations, 5) PMI Framework - standardized approach widely recognized in UAE multinational organizations, offering comprehensive governance suitable for complex UAE enterprise projects, 6) PMBOK - comprehensive knowledge base providing guidance for managing projects according to globally recognized standards while adapting processes for UAE business environment, 7) Lean Project Management - efficiency-focused approach reducing waste and streamlining delivery, valuable for UAE cost-optimization initiatives, 8) Critical Chain Project Management - methodology focused on resource constraints and buffers, useful in UAE's competitive resource market with limited specialized expertise. The most effective approach typically involves customizing these methodologies to accommodate UAE business culture, decision-making processes, stakeholder expectations, and regional implementation considerations."
    },
    {
      question: "How should UAE organizations prepare for IT project implementations?",
      answer: "UAE organizations can maximize IT project success through thorough preparation: 1) Clear Business Case Development - establishing measurable objectives and success criteria aligned with UAE strategic priorities and regional market demands, 2) Executive Sponsorship Confirmation - securing active leadership support with appropriate authority in UAE organizational hierarchies to drive decisions and remove obstacles, 3) Stakeholder Mapping - identifying all impacted UAE business units, external partners, and regulatory authorities with appropriate engagement strategies for each, 4) Resource Planning - securing necessary budget, personnel, and technology resources with consideration for UAE market costs and availability constraints, 5) Vendor Selection Due Diligence - thorough evaluation of implementation partners and technology providers with proven UAE market experience and regional support capabilities, 6) Risk Assessment - identifying UAE-specific implementation risks including regulatory compliance, resource availability, cultural factors, and integration challenges, 7) Change Management Strategy - developing approaches for managing organizational change appropriate for UAE's multicultural workforce and business culture, 8) Communication Planning - establishing clear protocols for project updates and issue escalation aligned with UAE business communication expectations, 9) Success Metrics Definition - determining how project outcomes will be measured with relevant indicators for UAE business operations and strategic objectives, 10) Project Governance Structure - establishing decision-making frameworks and approval processes that align with UAE organizational hierarchies and authorization requirements. These preparation steps create a strong foundation for successful technology implementations in the unique UAE business environment."
    },
    {
      question: "What are common challenges in UAE IT projects and how can they be addressed?",
      answer: "UAE IT projects face several distinct challenges that require specific mitigation strategies: 1) Cross-Cultural Team Dynamics - UAE's diverse workforce requires leadership approaches that bridge cultural differences, addressed through cultural awareness training, clear communication protocols, and team building activities that respect cultural diversity, 2) Resource Availability - skilled IT talent shortages in specialized areas require careful resource planning, consideration of remote team options, knowledge transfer programs, and competitive retention strategies for UAE's mobile workforce, 3) Regulatory Compliance - complex UAE regulatory requirements necessitate early compliance assessment, regulatory authority engagement, and documentation protocols that satisfy local requirements, 4) Stakeholder Alignment - hierarchical decision-making structures in many UAE organizations require formal stakeholder management plans, executive engagement strategies, and regular alignment sessions with decision-makers, 5) Vendor Management - coordinating multiple vendors and service providers requires robust governance frameworks, clear accountability mechanisms, and vendor selection criteria that prioritize UAE market experience, 6) Technology Integration - connecting new systems with existing infrastructure demands comprehensive environment analysis, integration testing strategies, and technical architecture reviews before implementation, 7) Language Barriers - multilingual documentation requirements and communication challenges require translation services, bilingual project materials, and communication protocols that accommodate language preferences, 8) Timeline Pressure - ambitious deadlines common in UAE's fast-paced market require realistic scheduling, buffer planning, and transparent progress tracking with early escalation of delays, 9) Scope Management - 'scope creep' amplified by rapid UAE business changes requires formal change control processes, clear requirement documentation, and regular scope validation, 10) Business Continuity - maintaining operations during implementation requires careful cutover planning, phased deployment approaches, and rollback procedures tailored to UAE business hours and operational schedules. Addressing these challenges proactively through structured project management significantly improves implementation success rates in the UAE business environment."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Managed IT Project Services in UAE | Professional Technology Implementation"
        description="Expert managed IT project services in Dubai and across UAE. Successfully deliver technology initiatives with our comprehensive IT project management services with 22+ years of experience."
        url="/services/managed-it-project"
        type="website"
      />
      <ServicePageLayout
        title="Managed IT Project Services in UAE | Professional Technology Implementation"
        category="UAE IT Project Management"
        description="Successfully deliver complex technology initiatives with our comprehensive Managed IT Project services. We provide expert project management, technical implementation, and change management for your UAE organization's critical IT projects."
        heroIcon={<BarChart2 className="h-8 w-8" />}
        overview="Technology implementations are critical to UAE business growth and competitive advantage, but they carry significant risks when not properly managed. Our UAE-focused Managed IT Project services provide comprehensive project management for your organization's technology initiatives—from infrastructure deployments and system implementations to digital transformation and security enhancements. We combine proven project management methodologies with deep technical expertise and understanding of UAE business environments to ensure successful delivery of your IT projects on time, within budget, and according to requirements. Our experienced project managers guide initiatives through each phase—planning, execution, monitoring, and transition—with meticulous attention to UAE-specific considerations including regulatory compliance, local business practices, and regional technology factors. Whether implementing new systems, migrating to cloud platforms, or modernizing legacy applications, our structured approach reduces risks and maximizes business value from your UAE technology investments."
        steps={[
          {
            title: "UAE Business Requirements Analysis",
            description: "Thoroughly assess project objectives, business needs, and success criteria through stakeholder workshops and documentation review, ensuring clear understanding of desired outcomes within the UAE business context before technical planning begins."
          },
          {
            title: "UAE-Specific Project Scoping",
            description: "Define precise project boundaries, deliverables, and acceptance criteria with consideration for UAE regulatory requirements, business practices, and technology constraints, creating a clear framework for implementation planning and execution."
          },
          {
            title: "UAE-Aligned Resource Planning",
            description: "Identify required technical skills, team composition, and implementation partners with consideration for UAE resource availability, scheduling constraints, and specialized expertise requirements for successful project delivery."
          },
          {
            title: "UAE Project Governance Establishment",
            description: "Develop appropriate oversight structures, decision-making frameworks, and escalation paths aligned with UAE organizational hierarchies and business protocols, ensuring clear accountability throughout the project lifecycle."
          },
          {
            title: "UAE-Appropriate Risk Assessment",
            description: "Identify potential implementation challenges, dependencies, and mitigation strategies specific to UAE technology environments, regulatory landscape, and operational contexts through structured risk analysis methodologies."
          },
          {
            title: "UAE Project Schedule Development",
            description: "Create detailed implementation timelines with appropriate milestones, dependencies, and resource allocations considering UAE business calendars, approval cycles, and regional factors affecting project execution."
          },
          {
            title: "UAE-Focused Technical Planning",
            description: "Develop comprehensive technical implementation plans with architecture designs, system specifications, and integration requirements adapted for UAE technology environments, connectivity considerations, and local constraints."
          },
          {
            title: "UAE Quality Assurance Framework",
            description: "Establish testing methodologies, validation protocols, and quality standards aligned with UAE business requirements and regulatory expectations, ensuring delivered solutions meet all functional and compliance criteria."
          },
          {
            title: "UAE-Appropriate Change Management",
            description: "Develop strategies for managing organizational change including communication plans, training approaches, and user adoption tactics tailored to UAE workforce demographics, cultural factors, and business practices."
          },
          {
            title: "UAE Project Execution & Coordination",
            description: "Implement solutions according to approved plans through coordinated technical activities, stakeholder engagement, and progress monitoring using project management methodologies adapted for UAE business environments."
          },
          {
            title: "UAE Regulatory Compliance Verification",
            description: "Ensure implementations meet all applicable UAE regulatory requirements through systematic compliance verification, documentation, and appropriate approvals from relevant authorities before production deployment."
          },
          {
            title: "UAE Business Transition Planning",
            description: "Facilitate smooth transition from project implementation to operational status through knowledge transfer, support handover, and operational readiness verification tailored to UAE business operations and support structures."
          }
        ]}
        benefits={[
          {
            title: "UAE Project Success Assurance",
            content: "Significantly improve technology implementation outcomes through structured methodologies, experienced oversight, and UAE-specific project expertise, reducing the risks of delays, budget overruns, and quality issues common in complex IT initiatives."
          },
          {
            title: "UAE Business Risk Mitigation",
            content: "Proactively identify and address implementation challenges specific to UAE business environments through comprehensive risk management, contingency planning, and expert guidance throughout the project lifecycle."
          },
          {
            title: "UAE Resource Optimization",
            content: "Maximize return on technology investments by ensuring efficient utilization of financial, technical, and human resources throughout implementation, particularly valuable given UAE's competitive resource market and higher implementation costs."
          },
          {
            title: "UAE Schedule Predictability",
            content: "Maintain reliable implementation timelines through effective planning, proactive issue management, and regular progress monitoring aligned with UAE business priorities and operational constraints."
          },
          {
            title: "UAE Stakeholder Alignment",
            content: "Foster clear communication and expectation management across business units, technical teams, and executive leadership through structured engagement appropriate for UAE organizational cultures and decision-making hierarchies."
          },
          {
            title: "UAE Technical Quality Assurance",
            content: "Ensure delivered solutions meet functional requirements and quality standards through comprehensive testing, validation protocols, and quality control processes adapted for UAE technology environments and compliance expectations."
          },
          {
            title: "UAE Change Management Success",
            content: "Enhance user adoption and organizational acceptance through structured change management approaches tailored to UAE workforce demographics, cultural factors, and effective communication strategies for diverse teams."
          },
          {
            title: "UAE Vendor Coordination",
            content: "Effectively manage technology vendors, implementation partners, and service providers through clear expectations, performance monitoring, and accountability frameworks appropriate for UAE business relationships and service standards."
          },
          {
            title: "UAE Implementation Consistency",
            content: "Maintain implementation quality and approach consistency across multiple UAE locations, business units, or deployment phases through standardized methodologies and governance frameworks adapted for regional operations."
          },
          {
            title: "UAE Business Continuity Protection",
            content: "Minimize operational disruption during implementation through careful transition planning, phased deployment approaches, and fallback procedures designed around UAE business hours and operational requirements."
          }
        ]}
        deliverables={[
          {
            title: "UAE Project Charter & Scope Document",
            description: "Comprehensive definition of project objectives, boundaries, deliverables, and success criteria aligned with UAE business requirements and strategic priorities, providing the foundation for all implementation activities and decisions."
          },
          {
            title: "UAE Project Management Plan",
            description: "Detailed implementation roadmap covering schedule, resources, quality management, risk approach, and governance framework tailored to your UAE organization's specific project requirements and operational environment."
          },
          {
            title: "UAE Project Risk Register",
            description: "Structured documentation of potential implementation risks with probability and impact assessments, mitigation strategies, contingency plans, and ownership assignments relevant to UAE business and technology contexts."
          },
          {
            title: "UAE Stakeholder Management Strategy",
            description: "Customized engagement approach for managing relationships with project stakeholders including communication plans, influence strategies, and reporting protocols appropriate for UAE business culture and organizational structures."
          },
          {
            title: "UAE Technical Implementation Roadmap",
            description: "Detailed technology plans covering architecture designs, system configurations, integration requirements, and technical specifications tailored to UAE technology environments and implementation considerations."
          },
          {
            title: "UAE Change Management Framework",
            description: "Comprehensive strategy for managing organizational change including communication materials, training programs, and adoption strategies specifically designed for UAE workforce demographics and business practices."
          },
          {
            title: "UAE Testing & Quality Assurance Plan",
            description: "Structured approach for validating implementation quality through test planning, execution protocols, defect management, and quality verification aligned with UAE business requirements and compliance expectations."
          },
          {
            title: "UAE Project Status Reports",
            description: "Regular updates on implementation progress including milestone achievement, issue tracking, risk status, budget utilization, and upcoming activities presented in formats appropriate for different UAE stakeholder groups."
          },
          {
            title: "UAE Implementation Documentation",
            description: "Comprehensive technical documentation covering system configurations, customizations, integration points, and operational procedures tailored to UAE environments and support requirements for long-term maintenance."
          },
          {
            title: "UAE Project Closure Report",
            description: "Final implementation summary documenting project outcomes, performance against objectives, lessons learned, and transition recommendations with specific relevance to UAE business operations and future technology initiatives."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project Management Elements */}
            <rect x="150" y="100" width="300" height="200" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Element */}
            <rect x="450" y="70" width="50" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="475" y="90" textAnchor="middle" fontSize="10" fill="#00E5FF">UAE</text>
            
            <line x1="450" y1="85" x2="400" y2="100" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Project Timeline */}
            <rect x="180" y="140" width="240" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            
            <circle cx="200" cy="155" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="200" y="158" textAnchor="middle" fontSize="8" fill="#00E5FF">1</text>
            
            <circle cx="250" cy="155" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="250" y="158" textAnchor="middle" fontSize="8" fill="#00E5FF">2</text>
            
            <circle cx="300" cy="155" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="158" textAnchor="middle" fontSize="8" fill="#00E5FF">3</text>
            
            <circle cx="350" cy="155" r="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="350" y="158" textAnchor="middle" fontSize="8" fill="#00E5FF">4</text>
            
            <line x1="210" y1="155" x2="240" y2="155" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="260" y1="155" x2="290" y2="155" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="310" y1="155" x2="340" y2="155" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Progress Indicator */}
            <circle cx="250" cy="155" r="13" fill="none" stroke="#00B2A9" strokeWidth="1.5">
              <animate attributeName="cx" values="200;250;300;350" dur="10s" repeatCount="indefinite"/>
            </circle>
            
            {/* Project Components */}
            <rect x="180" y="190" width="70" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="215" y="207" textAnchor="middle" fontSize="8" fill="#00E5FF">Scope</text>
            
            <rect x="265" y="190" width="70" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="207" textAnchor="middle" fontSize="8" fill="#00E5FF">Schedule</text>
            
            <rect x="350" y="190" width="70" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="385" y="207" textAnchor="middle" fontSize="8" fill="#00E5FF">Resources</text>
            
            <rect x="180" y="230" width="70" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="215" y="247" textAnchor="middle" fontSize="8" fill="#00E5FF">Quality</text>
            
            <rect x="265" y="230" width="70" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="247" textAnchor="middle" fontSize="8" fill="#00E5FF">Risk</text>
            
            <rect x="350" y="230" width="70" height="25" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="385" y="247" textAnchor="middle" fontSize="8" fill="#00E5FF">Change</text>
            
            {/* Project Manager */}
            <circle cx="100" cy="180" r="25" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <circle cx="100" cy="170" r="8" fill="none" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M90 185 L110 185" stroke="#00B2A9" strokeWidth="1"/>
            <path d="M85 195 L115 195" stroke="#00B2A9" strokeWidth="1"/>
            <text x="100" y="215" textAnchor="middle" fontSize="10" fill="#00B2A9">PM</text>
            
            {/* Connection Lines */}
            <path d="M125 170 L180 155" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M125 180 L180 207" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M125 190 L180 247" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Stakeholders */}
            <circle cx="460" cy="180" r="20" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
            <text x="460" y="184" textAnchor="middle" fontSize="10" fill="#EB3443">S</text>
            
            <path d="M440 180 L420 207" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            <path d="M440 180 L420 247" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Project Documentation */}
            <rect x="220" y="280" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="300" textAnchor="middle" fontSize="12" fill="#00B2A9">Project Plan</text>
            
            {/* Connection to Documentation */}
            <path d="M300 255 L300 280" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* UAE Regulatory Elements */}
            <rect x="500" y="140" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="154" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="500" y="170" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="184" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            <rect x="500" y="200" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="530" y="214" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            {/* Project Metrics */}
            <path d="M220 110 L380 110" stroke="#EB3443" strokeWidth="1"/>
            <rect x="220" y="111" width="40" height="15" fill="#EB3443" fillOpacity="0.3"/>
            <rect x="260" y="111" width="60" height="15" fill="#00B2A9" fillOpacity="0.3"/>
            <rect x="320" y="111" width="40" height="15" fill="#00E5FF" fillOpacity="0.3"/>
            <text x="300" y="122" textAnchor="middle" fontSize="8" fill="#FFFFFF">Progress 60%</text>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Managed IT Project</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE IT Infrastructure Services",
            link: "/services/infrastructure"
          },
          {
            title: "UAE Cloud Migration Services",
            link: "/services/cloud-services"
          },
          {
            title: "UAE Digital Transformation",
            link: "/services/digital-transformation"
          },
          {
            title: "UAE Microsoft Services",
            link: "/services/microsoft-services"
          },
          {
            title: "UAE IT Security Services",
            link: "/services/it-security-audit"
          },
          {
            title: "UAE IT AMC Services",
            link: "/services/it-amc"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Managed IT Project Services in UAE FAQs"
        subtitle="Common questions about IT project management for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default ManagedItProjectPage;