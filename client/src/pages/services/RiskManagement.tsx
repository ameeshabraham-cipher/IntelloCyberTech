import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { BarChart2, Shield, AlertTriangle, CheckCircle, Settings, FileText, Target, ArrowDown } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const RiskManagementPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Risk Management Services in UAE",
    description: "Expert risk management services in Dubai and across UAE. Identify, assess, and mitigate organizational risks with our comprehensive risk management solutions with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Enterprise Risk Management",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring effective risk management"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What are the key elements of effective risk management for UAE organizations?",
      answer: "Effective risk management for UAE organizations incorporates several critical elements: 1) UAE-Specific Risk Governance - clear organizational structure with defined roles, responsibilities, and oversight aligned with UAE regulatory expectations and appropriate for UAE business hierarchies, 2) Comprehensive Risk Identification - systematic processes for discovering risks across all business areas with consideration for UAE operational environment, regulatory landscape, and regional factors, 3) Structured Risk Assessment - consistent methodology for analyzing and evaluating risks using standardized criteria appropriate for UAE business contexts and regulatory frameworks, 4) UAE-Appropriate Risk Treatment - well-defined approaches for addressing identified risks including mitigation, transfer, acceptance, or avoidance with consideration for UAE business constraints, 5) UAE Risk Monitoring - continuous observation of risk indicators and control effectiveness with appropriate frequency and methods for UAE operational environments, 6) UAE-Aligned Risk Reporting - clear communication channels and formats for sharing risk information with various stakeholders including UAE executives, boards, and where required, regulatory authorities, 7) Integrated Risk Management - embedding risk considerations into business decisions and operational processes across UAE operations rather than treating risk as a separate function, 8) UAE Risk Culture Development - creating organization-wide awareness and accountability for risk management with approaches suitable for UAE's diverse multinational workforce, 9) UAE Technology Enablement - leveraging appropriate tools to streamline risk management processes with consideration for UAE data residency and compliance requirements, 10) Continuous Improvement - regularly enhancing risk management approaches based on lessons learned, emerging threats, and evolving UAE regulatory expectations. These elements should be adapted to your organization's specific size, industry, and UAE operational context for maximum effectiveness."
    },
    {
      question: "What risk management standards are relevant for UAE organizations?",
      answer: "UAE organizations should consider several key risk management standards and frameworks: 1) UAE National Risk Management Standard - the indigenous risk management methodology under development specifically for UAE public and private sector organizations with local context and regulatory alignment, 2) ISO 31000 - the international risk management standard widely recognized across UAE industries providing structured approach to managing risk with principles, framework, and process guidance, 3) COSO Enterprise Risk Management - comprehensive framework increasingly adopted by UAE organizations aligning strategic planning, operations, reporting, and compliance with risk management practices, 4) UAE Central Bank ERM Framework - specialized risk management requirements for financial institutions operating in the UAE with detailed guidance for banking, insurance, and investment firms, 5) UAE Information Assurance Standards - risk management components specifically addressing information security and technology risks for UAE government entities and critical infrastructure, 6) NESA Risk Management Guidance - specialized approach for cyber risk management in UAE critical information infrastructure with national security considerations, 7) Dubai Government Excellence Program Standards - risk management expectations for Dubai government entities with public sector focus, 8) Sector-Specific Frameworks - specialized risk methodologies for UAE healthcare, energy, transportation, and other regulated sectors, 9) UAE Stock Exchange Requirements - risk disclosure and management expectations for publicly listed companies in UAE financial markets. Organizations should select and adapt appropriate standards based on their industry, regulatory environment, and specific UAE operational context while maintaining alignment with international best practices."
    },
    {
      question: "What are common risk categories UAE organizations should address?",
      answer: "UAE organizations should address several key risk categories in comprehensive risk management programs: 1) UAE Strategic Risks - threats to business objectives, market position, and competitive advantage in the UAE's dynamic economy with consideration for regional expansion and government initiatives, 2) UAE Regulatory Compliance Risks - challenges meeting obligations under UAE federal and emirate-level regulations, including consequences of non-compliance across various regulated sectors, 3) UAE Operational Risks - potential disruptions to core business activities from process failures, system issues, or human errors specific to UAE operational environments, 4) UAE Financial Risks - exposure to market volatility, liquidity constraints, credit defaults, and currency fluctuations with consideration for UAE monetary policy and regional economic factors, 5) UAE Information Technology Risks - vulnerabilities in systems, applications, and infrastructure with specific attention to cybersecurity threats targeting UAE organizations, 6) UAE Supply Chain Risks - potential disruptions in vendor relationships, logistics, and procurement particularly relevant given UAE's import-dependent economy, 7) UAE Workforce Risks - challenges in recruitment, retention, and management of human resources in UAE's competitive labor market with visa and employment considerations, 8) UAE Reputation & Brand Risks - potential damage to organizational image in UAE's relationship-focused business environment where trust and reputation are particularly valuable, 9) UAE Environmental & Sustainability Risks - exposure to climate factors, resource constraints, and environmental compliance requirements increasingly important in UAE's sustainability initiatives, 10) UAE Business Continuity Risks - potential for operational disruptions from environmental conditions, infrastructure failures, or other UAE-specific factors requiring resilience planning. Prioritization of these categories should reflect your organization's specific industry, size, and UAE operational context."
    },
    {
      question: "How can UAE organizations integrate risk management into strategic planning?",
      answer: "UAE organizations can effectively integrate risk management into strategic planning through several key approaches: 1) UAE-Specific Risk Appetite Definition - establishing clear boundaries for acceptable risk taking aligned with UAE business objectives, including quantitative limits and qualitative statements appropriate for UAE market conditions, 2) Strategic Risk Identification - systematically analyzing UAE competitive landscape, market trends, and business environment to identify threats to strategy execution early in planning processes, 3) UAE-Contextualized Scenario Planning - developing alternative future scenarios considering UAE economic factors, regulatory changes, and market developments to test strategic options against potential challenges, 4) Strategic Initiative Risk Assessment - evaluating proposed business initiatives, investments, and expansion plans specifically for UAE-related risk factors before approval and implementation, 5) Key Risk Indicator Alignment - linking performance metrics with risk indicators to provide integrated view of strategic progress and emerging threats in UAE business context, 6) UAE Risk-Based Resource Allocation - directing organizational resources toward opportunities and initiatives based on balanced risk-reward considerations appropriate for UAE market conditions, 7) UAE Board-Level Risk Dialogue - engaging leadership in structured discussions about strategic risks with frameworks appropriate for UAE governance expectations and decision processes, 8) UAE Strategic Risk Monitoring - establishing continuous oversight of risks with potential to impact strategic objectives with appropriate frequency and methods for UAE operational environments, 9) Strategic Risk Reporting - creating meaningful communication about strategic risks for various stakeholders including UAE executives, boards, and investors with appropriate formats and content, 10) UAE Strategy Adjustment Mechanisms - implementing formal processes to modify strategic direction based on significant risk developments in UAE business environment. These approaches create dynamic connection between risk insights and strategic decisions, enhancing organizational resilience in UAE's evolving business landscape."
    },
    {
      question: "How should UAE organizations approach third-party risk management?",
      answer: "UAE organizations should implement comprehensive third-party risk management through several key approaches: 1) UAE Supply Chain Mapping - creating complete inventory of vendors, service providers, and business partners with clear understanding of their roles in your UAE operations and value chain, 2) UAE-Specific Risk Categorization - classifying third parties based on criticality, access to sensitive information, regulatory requirements, and potential impact to UAE operations if disrupted, 3) UAE Due Diligence Process - establishing systematic evaluation of potential partners before engagement, with appropriate depth based on risk tier and consideration for UAE business verification requirements, 4) UAE-Appropriate Contractual Controls - implementing robust agreements with security, compliance, and performance requirements reflecting UAE legal frameworks and business practices, 5) UAE Ongoing Monitoring - establishing continuous oversight of critical third parties through performance metrics, security assessments, and compliance verification appropriate for UAE business relationships, 6) UAE Third-Party Audits - conducting periodic detailed evaluations of high-risk providers with approaches suitable for UAE business culture and relationship expectations, 7) UAE Concentration Risk Analysis - identifying and addressing over-reliance on specific vendors or geographical regions particularly important in UAE's interconnected business ecosystem, 8) UAE Contingency Planning - developing alternative sources and operational continuity strategies for critical third-party services with consideration for UAE market alternatives, 9) UAE Third-Party Incident Management - establishing clear protocols for addressing issues, breaches, or performance failures in third-party relationships with appropriate escalation paths, 10) UAE Supply Chain Resilience - implementing proactive strategies to enhance overall third-party ecosystem stability with approaches suitable for UAE's import-dependent economy. This comprehensive approach addresses the significant third-party dependencies common in UAE business operations while maintaining appropriate oversight and control."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Risk Management Services in UAE | Comprehensive Risk Solutions"
        description="Expert risk management services in Dubai and across UAE. Identify, assess, and mitigate organizational risks with our comprehensive risk management solutions with 22+ years of experience."
        url="/services/risk-management"
        type="website"
      />
      <ServicePageLayout
        title="Risk Management Services in UAE | Comprehensive Risk Solutions"
        category="UAE Governance & Risk Management"
        description="Protect your organization from uncertainties and threats with our comprehensive Risk Management services. We help UAE organizations identify, assess, and mitigate risks across strategic, operational, and compliance domains."
        heroIcon={<BarChart2 className="h-8 w-8" />}
        overview="In today's uncertain business environment, UAE organizations face increasingly complex risks that can impact strategic objectives, operational effectiveness, and regulatory compliance. Our UAE-focused Risk Management services provide comprehensive solutions to identify, assess, and address risks across your entire organization through structured methodologies, practical tools, and expert guidance. We help transform reactive risk management into proactive, integrated approaches that enhance decision-making, improve resilience, and create strategic advantage. With deep understanding of UAE business environments, regulatory landscapes, and regional risk factors, we implement risk management solutions tailored to your specific industry, organizational structure, and risk profile. Whether addressing strategic uncertainties, operational vulnerabilities, compliance obligations, or emerging threats, our expertise ensures your risk management approach delivers maximum value while addressing the specific needs of UAE organizations operating in a dynamic business landscape."
        steps={[
          {
            title: "UAE-Specific Risk Assessment",
            description: "Evaluate your current risk management practices, organizational structure, and control environment through stakeholder interviews and documentation review to understand existing capabilities and improvement opportunities in UAE context."
          },
          {
            title: "UAE Risk Management Framework Development",
            description: "Design comprehensive risk methodology including governance structure, policies, procedures, and assessment criteria aligned with appropriate standards and tailored to your UAE organization's specific industry and operational environment."
          },
          {
            title: "UAE-Focused Risk Identification",
            description: "Facilitate structured workshops and analysis to systematically identify strategic, operational, financial, compliance, and other risks across your UAE organization with consideration for regional business factors and regulatory landscape."
          },
          {
            title: "UAE Risk Assessment Methodology",
            description: "Implement consistent approach for analyzing identified risks using standardized criteria for impact, likelihood, velocity, and other relevant factors, creating unified risk evaluation process appropriate for UAE business context."
          },
          {
            title: "UAE-Appropriate Risk Treatment Planning",
            description: "Develop strategies and action plans for addressing priority risks through appropriate mitigation, transfer, acceptance, or avoidance approaches, with clear ownership, timelines, and resource requirements suitable for UAE implementation."
          },
          {
            title: "UAE Risk Monitoring Implementation",
            description: "Establish key risk indicators, monitoring processes, and early warning mechanisms to track risk levels and control effectiveness with appropriate frequency and methods for UAE operational environments."
          },
          {
            title: "UAE-Aligned Risk Reporting",
            description: "Design comprehensive reporting formats and communication channels for sharing risk information with various stakeholder groups including executives, board members, and operational teams across UAE organizational structure."
          },
          {
            title: "UAE Risk Technology Enablement",
            description: "Evaluate and implement appropriate tools to streamline risk management processes, enhance data analysis, and improve risk visibility across your UAE organization with consideration for data residency and compliance requirements."
          },
          {
            title: "UAE Strategic Risk Integration",
            description: "Incorporate risk considerations into strategic planning, investment decisions, and performance management through appropriate frameworks and processes aligned with UAE business practices and governance expectations."
          },
          {
            title: "UAE Risk Culture Development",
            description: "Implement awareness programs, training initiatives, and communication strategies to build risk-conscious culture across your UAE organization, with approaches appropriate for diverse workforce demographics and organizational structure."
          },
          {
            title: "UAE Third-Party Risk Management",
            description: "Develop comprehensive approach for identifying, assessing, and managing risks associated with vendors, suppliers, and other business partners critical to your UAE operations with appropriate due diligence and monitoring protocols."
          },
          {
            title: "UAE Risk Program Evaluation",
            description: "Establish ongoing assessment process for risk management program effectiveness, integrating feedback, lessons learned, emerging threats, and evolving UAE regulatory expectations into continuous improvement cycle."
          }
        ]}
        benefits={[
          {
            title: "UAE Strategic Decision Enhancement",
            content: "Improve strategic planning and business decisions through systematic consideration of risks and opportunities, providing leadership with clear insights into uncertainties affecting UAE operations and strategic objectives."
          },
          {
            title: "UAE Operational Resilience",
            content: "Strengthen ability to maintain critical functions during disruptions through identification and mitigation of operational vulnerabilities specific to UAE business environments, infrastructure constraints, and regional factors."
          },
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Enhance compliance with UAE regulatory requirements through structured identification and management of compliance risks, reducing potential for violations, penalties, and regulatory interventions across various frameworks."
          },
          {
            title: "UAE Resource Optimization",
            content: "Allocate organizational resources more effectively by focusing investment on highest-priority risks and most effective controls, improving overall efficiency and cost management in UAE operational contexts."
          },
          {
            title: "UAE Crisis Preparedness",
            content: "Develop enhanced readiness for managing unexpected events through improved risk awareness, early identification of emerging threats, and established response capabilities aligned with UAE business continuity expectations."
          },
          {
            title: "UAE Stakeholder Confidence",
            content: "Demonstrate robust governance and risk oversight to UAE customers, investors, regulators, and other stakeholders through transparent risk management practices and evidence-based decision making."
          },
          {
            title: "UAE Performance Improvement",
            content: "Enhance operational performance by reducing unexpected disruptions, optimizing processes, and implementing preventive controls that address vulnerabilities specific to UAE business operations."
          },
          {
            title: "UAE Strategic Advantage",
            content: "Develop competitive differentiation through superior ability to navigate uncertainties, manage challenges, and capitalize on calculated risks in UAE's dynamic business environment and evolving market conditions."
          },
          {
            title: "UAE Risk Transfer Optimization",
            content: "Improve insurance program effectiveness and cost-efficiency through data-driven understanding of risk exposures, enabling more strategic risk transfer decisions and coverage structures appropriate for UAE risk landscape."
          },
          {
            title: "UAE Organizational Alignment",
            content: "Create shared understanding of organizational risk appetite and priorities across UAE business units, functional areas, and management levels, enhancing coordination and consistency in risk-based decisions."
          }
        ]}
        deliverables={[
          {
            title: "UAE Risk Management Assessment Report",
            description: "Comprehensive evaluation of your current risk management practices, capabilities, and maturity with detailed findings and recommendations specifically relevant to your UAE organization's industry, size, and operational environment."
          },
          {
            title: "UAE Risk Management Framework",
            description: "Documented risk methodology including governance structure, roles and responsibilities, policies, procedures, and implementation guidance tailored to your UAE organization's specific requirements and aligned with appropriate standards."
          },
          {
            title: "UAE Enterprise Risk Register",
            description: "Structured inventory of identified risks across strategic, operational, financial, compliance, and other domains with detailed analysis, evaluations, and prioritization based on impact and likelihood in UAE context."
          },
          {
            title: "UAE Risk Assessment Methodology",
            description: "Documented approach for analyzing and evaluating risks including assessment criteria, scoring systems, evaluation matrices, and categorization frameworks adapted for your UAE organization's specific risk profile and industry."
          },
          {
            title: "UAE Risk Treatment Action Plans",
            description: "Detailed strategies for addressing priority risks with specific mitigation activities, responsible owners, implementation timelines, resource requirements, and success measures appropriate for UAE operational environment."
          },
          {
            title: "UAE Risk Monitoring Dashboard",
            description: "Visual representation of key risk indicators, control effectiveness metrics, and risk trends providing real-time visibility into organizational risk posture with formats appropriate for different UAE stakeholder audiences."
          },
          {
            title: "UAE Risk Reporting Templates",
            description: "Standardized formats for communicating risk information to various stakeholders including executive summaries, detailed technical reports, and board presentations designed for UAE organizational structure and governance expectations."
          },
          {
            title: "UAE Third-Party Risk Framework",
            description: "Comprehensive methodology for managing vendor and partner risks including due diligence procedures, assessment questionnaires, monitoring protocols, and escalation processes appropriate for UAE business relationships and supply chain structure."
          },
          {
            title: "UAE Risk Training Materials",
            description: "Educational resources for building risk management awareness and capabilities across your organization including presentation materials, workshops, and reference guides with content relevant to UAE business context and organizational culture."
          },
          {
            title: "UAE Risk Management Implementation Roadmap",
            description: "Strategic plan for enhancing risk management maturity with phased initiatives, resource requirements, milestone definitions, and performance metrics appropriate for UAE implementation constraints and organizational priorities."
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
            
            {/* Risk Heat Map */}
            <rect x="220" y="140" width="160" height="120" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            
            {/* Axes */}
            <line x1="230" y1="250" x2="370" y2="250" stroke="#00E5FF" strokeWidth="1"/>
            <line x1="230" y1="250" x2="230" y2="150" stroke="#00E5FF" strokeWidth="1"/>
            
            <text x="300" y="265" textAnchor="middle" fontSize="8" fill="#00E5FF">Likelihood</text>
            <text x="215" y="200" textAnchor="middle" transform="rotate(-90, 215, 200)" fontSize="8" fill="#00E5FF">Impact</text>
            
            {/* Risk Dots */}
            <circle cx="250" cy="230" r="8" fill="#00B2A9" fillOpacity="0.3" stroke="#00B2A9" strokeWidth="1"/>
            <text x="250" y="233" textAnchor="middle" fontSize="6" fill="#FFFFFF">R1</text>
            
            <circle cx="280" cy="200" r="8" fill="#00B2A9" fillOpacity="0.3" stroke="#00B2A9" strokeWidth="1"/>
            <text x="280" y="203" textAnchor="middle" fontSize="6" fill="#FFFFFF">R2</text>
            
            <circle cx="320" cy="180" r="8" fill="#EB3443" fillOpacity="0.3" stroke="#EB3443" strokeWidth="1"/>
            <text x="320" y="183" textAnchor="middle" fontSize="6" fill="#FFFFFF">R3</text>
            
            <circle cx="350" cy="170" r="8" fill="#EB3443" fillOpacity="0.3" stroke="#EB3443" strokeWidth="1"/>
            <text x="350" y="173" textAnchor="middle" fontSize="6" fill="#FFFFFF">R4</text>
            
            <circle cx="330" cy="220" r="8" fill="#00B2A9" fillOpacity="0.3" stroke="#00B2A9" strokeWidth="1"/>
            <text x="330" y="223" textAnchor="middle" fontSize="6" fill="#FFFFFF">R5</text>
            
            {/* Risk Categories */}
            <rect x="180" y="130" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="197.5" y="140" textAnchor="middle" fontSize="6" fill="#00E5FF">Strategic</text>
            
            <rect x="180" y="150" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="197.5" y="160" textAnchor="middle" fontSize="6" fill="#00E5FF">Financial</text>
            
            <rect x="180" y="170" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="197.5" y="180" textAnchor="middle" fontSize="6" fill="#00E5FF">Operational</text>
            
            <rect x="180" y="190" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="197.5" y="200" textAnchor="middle" fontSize="6" fill="#00E5FF">Compliance</text>
            
            <rect x="180" y="210" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="197.5" y="220" textAnchor="middle" fontSize="6" fill="#00E5FF">Technology</text>
            
            {/* Risk Treatment */}
            <rect x="385" y="140" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="402.5" y="150" textAnchor="middle" fontSize="6" fill="#00E5FF">Mitigate</text>
            
            <rect x="385" y="160" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="402.5" y="170" textAnchor="middle" fontSize="6" fill="#00E5FF">Transfer</text>
            
            <rect x="385" y="180" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="402.5" y="190" textAnchor="middle" fontSize="6" fill="#00E5FF">Accept</text>
            
            <rect x="385" y="200" width="35" height="15" rx="3" fill="#0A1024" stroke="#00E5FF" strokeWidth="0.5"/>
            <text x="402.5" y="210" textAnchor="middle" fontSize="6" fill="#00E5FF">Avoid</text>
            
            {/* Treatment Connection */}
            <path d="M350 170 L385 150" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M320 180 L385 170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            <path d="M330 220 L385 190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="2 1"/>
            
            {/* UAE Risk Types */}
            <rect x="100" y="120" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="130" y="134" textAnchor="middle" fontSize="8" fill="#EB3443">UAE Regulatory</text>
            
            <rect x="100" y="150" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="130" y="164" textAnchor="middle" fontSize="8" fill="#EB3443">UAE Economic</text>
            
            <rect x="100" y="180" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="130" y="194" textAnchor="middle" fontSize="8" fill="#EB3443">UAE Operational</text>
            
            <rect x="100" y="210" width="60" height="20" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="130" y="224" textAnchor="middle" fontSize="8" fill="#EB3443">UAE Cyber</text>
            
            {/* Connection to Matrix */}
            <path d="M160 130 L250 230" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7"/>
            <path d="M160 160 L280 200" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7"/>
            <path d="M160 190 L330 220" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7"/>
            <path d="M160 220 L320 180" stroke="#EB3443" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7"/>
            
            {/* Risk Report */}
            <rect x="220" y="300" width="160" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="300" y="320" textAnchor="middle" fontSize="12" fill="#00B2A9">Risk Report</text>
            
            {/* Connection to Report */}
            <path d="M300 260 L300 300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Main Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Risk Management</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE GRC Automation",
            link: "/services/grc-automation"
          },
          {
            title: "UAE Business Continuity",
            link: "/services/business-continuity"
          },
          {
            title: "UAE Compliance Services",
            link: "/services/compliance"
          },
          {
            title: "UAE Cybersecurity Frameworks",
            link: "/services/cybersecurity-frameworks"
          },
          {
            title: "UAE IT Security Audit",
            link: "/services/it-security-audit"
          },
          {
            title: "UAE Policy Development",
            link: "/services/policy-development"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Risk Management in UAE FAQs"
        subtitle="Common questions about enterprise risk management for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default RiskManagementPage;