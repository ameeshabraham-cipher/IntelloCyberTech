import { 
  UserCog, 
  Shield, 
  BarChart2, 
  Briefcase,
  FileText,
  Users
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const VcisoPage = () => {
  return (
    <ServicePageLayout
      title="Virtual CISO (vCISO) Services"
      category="Cybersecurity Solutions"
      description="Access experienced security leadership without the cost of a full-time executive through our Virtual Chief Information Security Officer services."
      heroIcon={<UserCog className="h-8 w-8" />}
      overview="In today's complex threat environment, organizations require strategic security leadership, but many lack the resources for a full-time executive security position or struggle with security leadership turnover. Our Virtual CISO (vCISO) service bridges this gap by providing seasoned, executive-level security leadership on a flexible, cost-effective basis—delivering the strategic vision and operational expertise of a Chief Information Security Officer without the overhead and recruitment challenges. Our vCISO professionals bring decades of cross-industry security leadership experience to serve as your trusted security advisors, whether you need full security program development, targeted initiative leadership, board-level representation, or ongoing security governance. We integrate seamlessly with your executive team, becoming a true extension of your organization to establish, maintain, and mature your security program—ensuring security investments are strategically aligned with business objectives, compliance requirements, and risk management priorities. Our vCISO service evolves with your needs, allowing you to scale security leadership resources as your organization grows, technology landscape changes, or when facing new security challenges, regulatory demands, or strategic shifts."
      steps={[
        {
          title: "Initial Stakeholder Discovery & Business Context",
          description: "We begin by conducting in-depth interviews with key stakeholders across your organization—including executive leadership, IT, legal, compliance, HR, and business unit leaders—to understand your business objectives, risk appetite, industry-specific challenges, compliance obligations, technology landscape, and existing security initiatives, establishing the crucial business context that will guide our security approach."
        },
        {
          title: "Comprehensive Security Program Assessment",
          description: "Our experts conduct a thorough evaluation of your current security program using industry frameworks (NIST CSF, ISO 27001, CIS Controls) to assess capabilities, controls, processes, and maturity across all security domains—establishing your baseline security posture, identifying critical gaps, and providing a clear picture of your current security strengths and weaknesses mapped to your specific business risks."
        },
        {
          title: "Strategic Roadmap & Governance Development",
          description: "Based on the assessment findings and business context, we create a tailored security strategy and multi-year roadmap that aligns security initiatives with your business objectives, risk tolerance, industry requirements, and available resources—establishing the security vision, mission, guiding principles, strategic objectives, key initiatives, and implementation timeline that will guide your security program evolution."
        },
        {
          title: "Policy & Standards Framework Implementation",
          description: "We develop or enhance your security policy architecture with a comprehensive framework of policies, standards, procedures, and guidelines—creating right-sized documentation that establishes security expectations, responsibilities, and requirements while ensuring alignment with relevant regulations, industry frameworks, and business operations to create a solid foundation for your security program."
        },
        {
          title: "Risk Management Program Establishment",
          description: "Our vCISO implements a structured enterprise security risk management program tailored to your organization—including risk assessment methodologies, risk identification processes, impact and likelihood criteria, risk acceptance procedures, and risk treatment approaches—creating a systematic, repeatable approach to identifying, analyzing, addressing, and monitoring security risks across your business."
        },
        {
          title: "Security Controls Implementation Oversight",
          description: "We provide expert guidance and oversight for the implementation of security controls and remediation initiatives—working closely with your IT teams, security staff, and external vendors to execute the security roadmap, address identified gaps, design and deploy security solutions, and ensure security requirements are properly implemented across the organization."
        },
        {
          title: "Metrics Development & Executive Reporting",
          description: "Our vCISO establishes a comprehensive security metrics program with key performance indicators (KPIs) and key risk indicators (KRIs) that demonstrate security program effectiveness and risk posture—creating executive-friendly dashboards and reports that translate technical security data into business-relevant insights for leadership decision-making and program optimization."
        },
        {
          title: "Security Budget & Resource Planning",
          description: "We help develop realistic security budgets and resource plans that optimize your security investments—creating detailed justifications for security expenditures, calculating return on security investment (ROSI), prioritizing initiatives based on risk reduction value, developing staffing models, and establishing the business case for security resources aligned with your organizational constraints and objectives."
        },
        {
          title: "Executive & Board Engagement",
          description: "Our seasoned vCISOs serve as your security voice in executive and board discussions—delivering regular briefings, presentations, and updates on security strategy, risk posture, program status, and industry trends using business language that resonates with leadership while establishing the crucial executive support needed for program success and ensuring security maintains appropriate visibility at the highest levels of the organization."
        },
        {
          title: "Continuous Program Improvement & Maturity Evolution",
          description: "We implement ongoing program review and improvement processes that continuously advance your security maturity—conducting regular program assessments, updating roadmaps based on changing threats and business needs, incorporating lessons learned, benchmarking against industry peers, and ensuring your security program remains adaptive, effective, and aligned with evolving business and risk landscapes."
        }
      ]}
      benefits={[
        {
          title: "Strategic Executive Expertise Without Full-Time Costs",
          content: "Gain immediate access to seasoned, board-ready security leadership with 22+ years of diverse experience across multiple industries, regulations, and security domains at a fraction of the cost of a full-time CISO (typically 30-50% of the total compensation package)—eliminating recruitment challenges, onboarding delays, and the significant overhead costs associated with a permanent executive while still benefiting from strategic security leadership that would otherwise be unattainable for many organizations."
        },
        {
          title: "Accelerated Security Program Maturity",
          content: "Dramatically compress the timeline for establishing or maturing your security program by leveraging our vCISOs' extensive experience, proven methodologies, and battle-tested playbooks—eliminating the costly trial-and-error approach of building a program from scratch and immediately implementing industry best practices, efficient processes, and effective governance structures that would typically take years to develop organically through internal resources alone."
        },
        {
          title: "Truly Business-Aligned Security Strategy",
          content: "Develop a security program precisely calibrated to your specific business needs, industry requirements, risk appetite, and available resources through our business-first security approach—ensuring security initiatives directly support business objectives, resource investments deliver maximum risk reduction value, and security becomes an enabler rather than an obstacle to your operations, growth strategies, and digital transformation initiatives."
        },
        {
          title: "Scalable & Flexible Security Leadership",
          content: "Adjust security leadership resources precisely to match your changing organizational needs with our adaptable engagement model—scaling up during periods of high demand (compliance projects, security incidents, digital transformation, M&A activities) and scaling down during normal operations, providing exactly the right level of security executive support without the constraints of a fixed position and ensuring continuity through leadership transitions."
        },
        {
          title: "Independent, Cross-Industry Security Perspective",
          content: "Benefit from the unbiased viewpoints and diverse experience that comes from our vCISOs' exposure to multiple organizations, industries, and security challenges—bringing fresh perspectives, innovative approaches, and objectivity that internal staff often lack due to organizational blind spots, while incorporating lessons learned and best practices observed across our entire client portfolio to elevate your security program beyond industry norms."
        },
        {
          title: "Enhanced Regulatory Compliance & Audit Readiness",
          content: "Strengthen your compliance posture through our vCISOs' deep understanding of multiple regulatory frameworks (PCI DSS, ISO 27001, SOC 2, HIPAA, GDPR, etc.) and audit processes—implementing efficient, streamlined compliance approaches that satisfy multiple requirements simultaneously, reducing redundant efforts, preparing compelling evidence packages, and effectively communicating compliance status to auditors, regulators, and business partners."
        },
        {
          title: "Improved Board & Executive Communication",
          content: "Transform security reporting and board/executive engagement through our vCISOs' extensive experience communicating with C-suite and board audiences—replacing technical jargon with business-focused metrics, risk narratives, and strategic presentations that clearly articulate security value, justify investments, and enable informed decision-making at the highest levels of your organization."
        },
        {
          title: "Risk-Optimized Security Investment Strategy",
          content: "Develop a precision-targeted security budget and resource allocation strategy that maximizes risk reduction per dollar spent—leveraging our vCISOs' experience to identify high-value security investments, eliminate ineffective controls, optimize existing security resources, and build compelling business cases for security initiatives that align with your organization's financial realities while delivering meaningful security improvements."
        }
      ]}
      deliverables={[
        {
          title: "Comprehensive Security Program Assessment Report",
          description: "Detailed evaluation of your current security posture against industry frameworks (NIST CSF, ISO 27001, CIS Controls) with quantitative maturity ratings across all key security domains—including controls assessment, gap analysis, benchmark comparison against industry peers, identification of critical deficiencies, and detailed, prioritized recommendations for improvement presented in both executive summary and detailed technical formats."
        },
        {
          title: "Strategic Security Roadmap & Program Plan",
          description: "Comprehensive strategic security planning documentation including security vision/mission statements, guiding principles, strategic objectives, three-year maturity roadmap, detailed initiative plans, resource requirements, budget projections, implementation timelines, milestone definitions, and success metrics—providing a complete blueprint for security program development aligned with your business strategy and risk tolerance."
        },
        {
          title: "Customized Security Policy Architecture",
          description: "Complete, right-sized security policy framework tailored to your organization's specific size, industry, risk profile, and compliance requirements—including governance-level policies, domain-specific standards, detailed procedures, implementation guidelines, acceptable use policies, exception processes, and role-specific quick reference guides in formats designed for effective communication and adoption across all organizational levels."
        },
        {
          title: "Business-Aligned Risk Treatment Program",
          description: "Structured enterprise security risk management documentation including risk assessment methodology, risk register templates, risk scoring frameworks, business impact classifications, formal risk acceptance criteria, risk treatment plans for identified high-priority risks, risk monitoring procedures, and tracking mechanisms that enable consistent, repeatable risk management aligned with your broader enterprise risk approach."
        },
        {
          title: "Executive Security Dashboard & KPI Framework",
          description: "Comprehensive security metrics program with executive-level dashboards, operational reports, and visualization tools that present key performance indicators (KPIs) and key risk indicators (KRIs) in business-relevant context—providing leadership with meaningful visibility into security posture, program effectiveness, risk trends, compliance status, and project progress while enabling data-driven security decisions."
        },
        {
          title: "Board & Executive Communication Package",
          description: "Professional, polished communication materials for executive and board engagement, including quarterly board presentation templates, security briefing formats, annual program review documentation, security investment justifications, risk narrative frameworks, and strategic initiative proposals—designed specifically for C-suite and board audiences with appropriate language, visualizations, and business context."
        },
        {
          title: "Security Committee & Governance Structure",
          description: "Complete security governance framework documentation including security steering committee charters, cross-functional working group definitions, RACI matrices for security responsibilities, security roles and job descriptions, decision rights frameworks, escalation paths, and governance meeting templates—establishing the organizational structure needed for effective security program oversight and execution."
        },
        {
          title: "Security Budget & Resource Optimization Plan",
          description: "Detailed security resource planning documentation including itemized security budget recommendations, cost-benefit analyses for key investments, staff augmentation strategies, skill development plans, outsourcing recommendations, technology rationalization guidance, and financial justifications—helping you optimize security spending, prioritize investments, and build compelling business cases for security resources."
        },
        {
          title: "Compliance Program Alignment Framework",
          description: "Streamlined compliance documentation mapping your security controls to multiple regulatory requirements (PCI DSS, ISO 27001, SOC 2, HIPAA, GDPR, etc.)—including control crosswalks, compliance gap assessments, unified control implementation guides, evidence collection procedures, and audit preparation materials that enable efficient satisfaction of multiple compliance obligations through a unified security approach."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* CISO Figure */}
          <circle cx="300" cy="150" r="40" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <circle cx="300" cy="130" r="15" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <path d="M280 155 Q300 175 320 155" stroke="#00E5FF" strokeWidth="1.5" fill="none"/>
          
          {/* Security Domains */}
          <circle cx="200" cy="240" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="200" y="235" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk</text>
          <text x="200" y="248" textAnchor="middle" fontSize="10" fill="#00E5FF">Management</text>
          
          <circle cx="260" cy="300" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="260" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">Policy &</text>
          <text x="260" y="308" textAnchor="middle" fontSize="10" fill="#00E5FF">Governance</text>
          
          <circle cx="340" cy="300" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="340" y="295" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
          <text x="340" y="308" textAnchor="middle" fontSize="10" fill="#00E5FF">Operations</text>
          
          <circle cx="400" cy="240" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="400" y="235" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance</text>
          <text x="400" y="248" textAnchor="middle" fontSize="10" fill="#00E5FF">& Audit</text>
          
          {/* Connection Lines */}
          <line x1="300" y1="190" x2="300" y2="200" stroke="#00E5FF" strokeWidth="1.5"/>
          <line x1="300" y1="200" x2="200" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="200" x2="260" y2="300" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="200" x2="340" y2="300" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="300" y1="200" x2="400" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Business Elements */}
          <rect x="120" y="100" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="160" y="120" textAnchor="middle" fontSize="10" fill="#00E5FF">Executive Team</text>
          
          <rect x="120" y="140" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="160" y="160" textAnchor="middle" fontSize="10" fill="#00E5FF">Board</text>
          
          <rect x="120" y="180" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="160" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Business Units</text>
          
          <rect x="400" y="100" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="120" textAnchor="middle" fontSize="10" fill="#00E5FF">IT Team</text>
          
          <rect x="400" y="140" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="160" textAnchor="middle" fontSize="10" fill="#00E5FF">DevOps</text>
          
          <rect x="400" y="180" width="80" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="200" textAnchor="middle" fontSize="10" fill="#00E5FF">Operations</text>
          
          {/* Connection Lines to Business */}
          <line x1="200" y1="115" x2="260" y2="140" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="200" y1="155" x2="260" y2="155" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="200" y1="195" x2="260" y2="170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="115" x2="340" y2="140" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="155" x2="340" y2="155" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="400" y1="195" x2="340" y2="170" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Title */}
          <text x="300" y="70" textAnchor="middle" fontSize="18" fill="#00E5FF">Virtual CISO</text>
          
          {/* Security Shield */}
          <path d="M300 340 Q340 350 340 380 Q340 410 300 420 Q260 410 260 380 Q260 350 300 340" fill="none" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="385" textAnchor="middle" fontSize="12" fill="#00E5FF">Security</text>
          <text x="300" y="400" textAnchor="middle" fontSize="12" fill="#00E5FF">Program</text>
          
          {/* Animated Elements */}
          <circle cx="230" cy="127" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="200;260" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="115;140" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="230" cy="175" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="200;260" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="195;170" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="370" cy="127" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="400;340" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="115;140" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="370" cy="175" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="400;340" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="195;170" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Virtual Connection */}
          <circle cx="300" cy="150" r="50" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="5 3">
            <animate attributeName="r" values="50;55;50" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "Security Assessment",
          link: "/services/security-assessment"
        },
        {
          title: "Policy Development",
          link: "/services/policy-development"
        },
        {
          title: "GRC Automation Platforms",
          link: "/solutions/grc-automation"
        }
      ]}
    />
  );
};

export default VcisoPage;