import { 
  UserCog, 
  Shield, 
  BarChart2, 
  Briefcase,
  FileText,
  Users
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const VcisoPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Virtual CISO (vCISO) Services in UAE",
    description: "Expert virtual CISO services in Dubai and across UAE. Access experienced security leadership without the cost of a full-time executive with our professional vCISO services tailored for UAE organizations.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Virtual Chief Information Security Officer Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring executive security leadership"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "How do virtual CISO services benefit UAE organizations specifically?",
      answer: "UAE organizations gain several unique benefits from vCISO services: 1) Access to experienced security leadership with knowledge of UAE's specific regulatory landscape including UAE IA Standards, NESA requirements, and sector-specific regulations, 2) Cost efficiency by accessing executive security expertise at a fraction of the cost of a full-time CISO, particularly valuable in the competitive UAE executive market, 3) Flexibility to scale security leadership based on project needs or growth phases, 4) Immediate implementation without lengthy recruitment processes in a region with limited cybersecurity talent, 5) Diverse industry experience bringing best practices from multiple sectors relevant to UAE's diverse economy, 6) Objectivity from an external perspective while understanding UAE's unique business culture, 7) Board-ready guidance for communicating security posture to executive leadership and shareholders, and 8) Bridge solution that can help develop internal security leadership for UAE organizations. These benefits are particularly relevant as UAE organizations rapidly digitize while facing increasing compliance demands."
    },
    {
      question: "What qualifications should a virtual CISO have for UAE organizations?",
      answer: "For UAE organizations, an effective virtual CISO should possess: 1) Deep understanding of UAE regulatory frameworks including UAE IA Standards, NESA, UAE PDPL, and sector-specific requirements, 2) Regional experience with UAE and GCC business practices and security landscape, 3) Industry-relevant security leadership experience in your specific sector (e.g., financial services, healthcare, government), 4) Professional certifications such as CISSP, CISM, and ideally UAE-recognized qualifications, 5) Experience implementing relevant security frameworks including those recognized by UAE authorities, 6) Executive communication skills with cultural sensitivity to UAE business environments, 7) Experience building security programs aligned with UAE compliance requirements, 8) Understanding of UAE's cybersecurity talent landscape and resource constraints, and 9) Ability to bridge international security best practices with UAE-specific requirements. The ideal vCISO should combine global expertise with deep understanding of the UAE's unique security and business environment."
    },
    {
      question: "What industries in the UAE can benefit most from virtual CISO services?",
      answer: "Several UAE industries particularly benefit from vCISO services: 1) Financial Services - banks, insurers, and fintech companies facing Central Bank regulations and international compliance requirements, 2) Healthcare - hospitals and clinics navigating health information protection and UAE regulatory requirements, 3) Government-Related Entities - organizations that must comply with UAE IA regulations but may not need a full-time CISO, 4) Critical Infrastructure - energy, transportation, and utility organizations subject to NESA requirements, 5) Technology Startups - rapidly growing UAE tech companies that need security leadership but can't justify a full-time executive, 6) Education Institutions - universities and schools managing sensitive data with limited security budgets, 7) Retail and Hospitality - organizations processing large volumes of customer data and payment information, 8) Professional Services - law firms, consultancies, and other service providers handling client confidential information. These sectors particularly benefit from the flexibility, expertise, and cost-effectiveness that vCISO services provide in the UAE market."
    },
    {
      question: "How is a virtual CISO engagement typically structured for UAE businesses?",
      answer: "For UAE organizations, vCISO engagements are typically structured in one of these models: 1) Retainer-Based Service - dedicated monthly hours (typically 20-80 hours) with regularly scheduled onsite and virtual meetings, ideal for ongoing security program management, 2) Project-Based Engagement - fixed scope for specific initiatives like security program development, compliance preparation, or security transformation projects with clear deliverables, 3) Interim CISO - full-time temporary leadership during transitions or while recruiting a permanent CISO, typically 3-12 months, 4) Advisory Model - on-call expertise for guidance and oversight with minimal time commitment, suitable for organizations with internal teams needing direction, 5) Hybrid Approach - combining elements of the above based on organizational needs. Engagements typically include regular board/executive reporting, KPI tracking, and clear accountability frameworks. For UAE organizations, we customize the engagement model based on your industry, size, regulatory requirements, and security maturity."
    },
    {
      question: "What key initiatives would a virtual CISO typically lead for a UAE organization?",
      answer: "For UAE organizations, a virtual CISO typically leads several critical initiatives: 1) UAE Regulatory Compliance Programs - implementing controls and processes to meet UAE IA Standards, NESA, UAE PDPL, and sector-specific requirements, 2) Security Program Development - establishing governance structures, policies, and security operating models aligned with UAE business practices, 3) Security Strategy and Roadmap Creation - developing multi-year security plans aligned with UAE organizational objectives and compliance timelines, 4) Risk Assessment and Management - implementing formal risk management processes appropriate for UAE threat landscape, 5) Security Architecture Review and Design - ensuring systems and applications follow security-by-design principles, 6) Security Awareness Programs - developing training customized for UAE workforce with cultural sensitivity, 7) Incident Response Planning - establishing or enhancing capabilities to meet UAE notification requirements, 8) Vendor Security Management - implementing third-party risk programs for UAE supply chain security, 9) Cloud Security Oversight - ensuring secure cloud adoption while meeting UAE data sovereignty requirements, and 10) Security Metrics and Board Reporting - developing executive communication appropriate for UAE leadership structures. The priorities are tailored based on your organization's specific needs, industry, and security maturity."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Virtual CISO (vCISO) Services in UAE | Executive Security Leadership"
        description="Expert virtual CISO services in Dubai and across UAE. Access experienced security leadership without the cost of a full-time executive with our professional vCISO services tailored for UAE organizations."
        url="/services/vciso"
        type="website"
      />
      <ServicePageLayout
        title="Virtual CISO (vCISO) Services in UAE | Executive Security Leadership"
        category="UAE Cybersecurity Leadership"
        description="Access experienced security leadership without the cost of a full-time executive through our Virtual Chief Information Security Officer services tailored for UAE organizations, with deep understanding of UAE regulatory requirements."
        heroIcon={<UserCog className="h-8 w-8" />}
        overview="In today's complex threat environment, UAE organizations require strategic security leadership with understanding of both global security best practices and UAE's unique regulatory landscape, but many lack the resources for a full-time executive security position or struggle with security leadership turnover in a competitive market. Our Dubai-based Virtual CISO (vCISO) service bridges this gap by providing seasoned, executive-level security leadership on a flexible, cost-effective basis—delivering the strategic vision and operational expertise of a Chief Information Security Officer without the overhead and recruitment challenges. Our vCISO professionals bring decades of cross-industry security leadership experience with specific expertise in UAE regulatory requirements including UAE IA Standards, NESA, and sector-specific regulations to serve as your trusted security advisors. Whether you need full security program development aligned with UAE requirements, targeted initiative leadership, board-level representation, or ongoing security governance, we integrate seamlessly with your executive team, becoming a true extension of your organization to establish, maintain, and mature your security program—ensuring security investments are strategically aligned with UAE business objectives, compliance requirements, and risk management priorities. Our vCISO service evolves with your needs, allowing you to scale security leadership resources as your organization grows, technology landscape changes, or when facing new security challenges, regulatory demands, or strategic shifts in the dynamic UAE market."
        steps={[
          {
            title: "UAE Stakeholder Discovery & Business Context",
            description: "We begin by conducting in-depth interviews with key stakeholders across your UAE organization—including executive leadership, IT, legal, compliance, HR, and business unit leaders—to understand your business objectives, risk appetite, UAE industry-specific challenges, UAE compliance obligations, technology landscape, and existing security initiatives, establishing the crucial UAE business context that will guide our security approach."
          },
          {
            title: "UAE-Focused Security Program Assessment",
            description: "Our experts conduct a thorough evaluation of your current security program using industry frameworks (NIST CSF, ISO 27001, UAE IA Standards, NESA) to assess capabilities, controls, processes, and maturity across all security domains—establishing your baseline security posture, identifying critical gaps against UAE requirements, and providing a clear picture of your current security strengths and weaknesses mapped to UAE-specific business risks."
          },
          {
            title: "UAE-Aligned Strategic Roadmap Development",
            description: "Based on the assessment findings and UAE business context, we create a tailored security strategy and multi-year roadmap that aligns security initiatives with your UAE business objectives, risk tolerance, UAE regulatory requirements, and available resources—establishing the security vision, mission, guiding principles, strategic objectives, key initiatives, and implementation timeline that will guide your security program evolution in the UAE context."
          },
          {
            title: "UAE Security Governance Implementation",
            description: "We establish or enhance your security governance frameworks—defining security organizational structure, roles and responsibilities, committee frameworks, decision-making processes, and escalation paths appropriate for UAE organizational hierarchies, while implementing policies, standards, and procedures aligned with UAE regulatory requirements, business needs, and cultural considerations."
          },
          {
            title: "UAE Regulatory Compliance Management",
            description: "Our vCISO expertly navigates the UAE compliance landscape—identifying applicable regulations, mapping requirements to controls, conducting gap assessments, developing compliance roadmaps, managing assessments with UAE authorities, and establishing sustainable compliance management processes to maintain ongoing adherence to UAE IA Standards, NESA, UAE PDPL, and sector-specific requirements."
          },
          {
            title: "UAE-Appropriate Budget & Resource Planning",
            description: "We develop realistic security budgets and resource plans aligned with your UAE business constraints—establishing multi-year investment forecasts, prioritizing initiatives based on risk and compliance requirements, building business cases for key investments, and helping you optimize security spending to maximize risk reduction within UAE market conditions and resource constraints."
          },
          {
            title: "UAE-Focused Security Metrics & Board Reporting",
            description: "We implement comprehensive security metrics and reporting frameworks—establishing key performance indicators, developing executive dashboards, creating board-level security updates, and providing UAE-appropriate security risk reporting that communicates security posture, progress, and needs effectively to leadership within UAE organizational contexts and communication styles."
          },
          {
            title: "UAE Security Program Management",
            description: "Our vCISO provides ongoing leadership of your security program—overseeing implementation of strategic initiatives, managing security projects, coordinating stakeholders across the organization, integrating security with IT and business processes, and ensuring continuous progress against the security roadmap, all while adapting to the evolving UAE threat landscape and business requirements."
          },
          {
            title: "UAE Security Incident Oversight",
            description: "We ensure your organization is prepared for security incidents—developing response plans aligned with UAE requirements, establishing incident management processes, guiding response activities during actual incidents, managing communications with stakeholders and UAE authorities when required, and ensuring appropriate remediation actions to strengthen defenses and meet UAE regulatory expectations."
          },
          {
            title: "UAE Security Team Development",
            description: "Our vCISO helps you build internal security capabilities—defining security team structures appropriate for UAE organizations, creating job descriptions, assisting with recruitment in the UAE market, mentoring security staff, establishing training programs, and developing succession planning to build sustainable security leadership within your organization."
          },
          {
            title: "UAE-Specific Security Technology Advisory",
            description: "We provide vendor-neutral guidance on security technologies—assessing your current security architecture, identifying technology gaps based on UAE threat landscape, developing technology roadmaps, evaluating security solutions, supporting procurement processes, and ensuring technologies work effectively together to provide comprehensive, integrated protection appropriate for UAE business environments."
          },
          {
            title: "UAE Third-Party Security Management",
            description: "We establish structured third-party risk programs—developing vendor security requirements, implementing assessment methodologies, creating contractual security clauses aligned with UAE law, establishing ongoing monitoring processes, and ensuring your UAE supply chain and partners maintain security levels consistent with your requirements and UAE regulatory expectations."
          }
        ]}
        benefits={[
          {
            title: "UAE-Experienced Executive Security Leadership",
            content: "Access seasoned security leaders with extensive experience in the UAE market who understand both global security best practices and the unique aspects of the UAE business, regulatory, and threat environment—providing strategic vision, practical knowledge, and executive presence without the cost of a full-time CISO."
          },
          {
            title: "UAE Cost-Effective Security Expertise",
            content: "Gain experienced CISO capabilities at a fraction of the cost of hiring a full-time executive in the competitive UAE security market—eliminating recruitment expenses, benefits costs, and overhead while accessing world-class security leadership tailored to your specific needs and UAE requirements."
          },
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Navigate the complex UAE regulatory landscape with expert guidance—ensuring your security program effectively addresses requirements from UAE IA Standards, NESA, UAE PDPL, and sector-specific regulations with strategies proven effective for UAE compliance challenges and regulatory interactions."
          },
          {
            title: "UAE-Appropriate Security Strategy",
            content: "Develop a comprehensive security strategy fully aligned with your UAE business objectives, industry context, and risk tolerance—ensuring security initiatives support rather than hinder business goals while addressing UAE-specific threats, regulatory requirements, and business culture."
          },
          {
            title: "UAE Board & Executive Communication",
            content: "Effectively communicate security posture, risks, and needs to your board and executive leadership with UAE-appropriate messaging—translating technical security concepts into business terms and clear risk narratives that resonate with UAE leadership and drive informed decision-making."
          },
          {
            title: "UAE Flexible Security Scaling",
            content: "Scale your security leadership resources up or down based on changing needs in the UAE market—increasing support during critical initiatives, compliance projects, or incidents, and reducing when appropriate without the challenges of hiring or restructuring in the UAE employment environment."
          },
          {
            title: "UAE Objective Security Perspective",
            content: "Benefit from an independent, external viewpoint unencumbered by organizational politics or legacy thinking—bringing fresh perspectives, cross-industry insights, and innovative approaches to your security challenges while still understanding UAE business culture and organizational dynamics."
          },
          {
            title: "UAE Business-Integrated Security",
            content: "Transform security from a technical function to a business enabler in your UAE organization—integrating security into business processes, product development, third-party relationships, and strategic initiatives to create competitive advantage through trust and resilience in the UAE market."
          },
          {
            title: "UAE Accelerated Security Maturity",
            content: "Fast-track your security program development and maturity evolution in alignment with UAE expectations—leveraging our proven methodologies, templates, frameworks, and lessons learned to achieve in months what might otherwise take years to build independently in the UAE environment."
          },
          {
            title: "UAE-Tailored Risk Management",
            content: "Implement effective risk management practices specifically calibrated to the UAE threat landscape and business environment—identifying, assessing, and mitigating security risks with appropriate controls and processes that reflect your UAE organization's specific risk profile and tolerance."
          }
        ]}
        deliverables={[
          {
            title: "UAE-Focused Security Assessment & Gap Analysis",
            description: "Comprehensive evaluation of your current security posture across people, process, and technology domains against industry frameworks and UAE regulatory requirements, with detailed findings, maturity ratings, and prioritized recommendations tailored to your UAE business context and compliance obligations."
          },
          {
            title: "UAE-Aligned Security Strategy & Roadmap",
            description: "Multi-year security strategy and implementation roadmap aligned with your UAE business objectives and compliance timelines, including security vision, mission, principles, strategic objectives, initiatives, resource requirements, and implementation timeline with UAE regulatory milestones and considerations."
          },
          {
            title: "UAE Regulatory Compliance Framework",
            description: "Structured compliance management framework mapping your security controls to applicable UAE regulatory requirements, identifying compliance gaps, providing remediation guidance, and establishing processes for ongoing compliance monitoring and evidence collection appropriate for UAE regulatory interactions."
          },
          {
            title: "UAE Security Governance Structure",
            description: "Comprehensive security governance model including organizational structure, roles and responsibilities, committee frameworks, policies, standards, and procedures adapted for UAE business culture and organizational structures, with appropriate documentation in required languages for UAE implementation."
          },
          {
            title: "UAE-Appropriate Executive Reporting",
            description: "Executive dashboard and reporting templates designed for UAE leadership communication, providing clear visibility into security posture, risks, compliance status, program progress, and key initiatives with appropriate metrics and visualizations that resonate with UAE executive audiences and communication styles."
          },
          {
            title: "UAE Security Budget & Resource Plan",
            description: "Detailed security investment plans including multi-year budget forecasts, resource requirements, initiative prioritization, and cost-benefit analysis aligned with UAE market conditions, local technology and service costs, and available talent resources in the competitive UAE security market."
          },
          {
            title: "UAE-Aligned Incident Response Plan",
            description: "Customized incident response framework including response procedures, roles and responsibilities, communication templates, decision processes, and recovery guidance, with specific attention to UAE notification requirements, authority interactions, and legal considerations during security incidents."
          },
          {
            title: "UAE Security Technology Roadmap",
            description: "Strategic technology plan outlining current and target security architecture, technology capabilities, implementation priorities, and integration requirements appropriate for your UAE business environment, with consideration for local availability, support capabilities, and compatibility with UAE-specific services and systems."
          },
          {
            title: "UAE Third-Party Risk Management Framework",
            description: "Comprehensive vendor security program including assessment methodologies, questionnaires, contractual requirements, monitoring processes, and remediation approaches aligned with UAE legal frameworks and business practices for effective supply chain security management in the UAE context."
          },
          {
            title: "UAE-Focused Risk Assessment",
            description: "Detailed security risk assessment identifying and analyzing threats and vulnerabilities specific to your UAE operations, with risk scenarios, impact analysis, mitigation recommendations, and residual risk determination calibrated to the UAE threat landscape, regulatory environment, and business context."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Executive Figure */}
            <circle cx="300" cy="130" r="30" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            <path d="M290 125 C290 125 295 130 300 130 C305 130 310 125 310 125" stroke="#00E5FF" strokeWidth="1.5" fill="none"/>
            <circle cx="290" cy="120" r="3" fill="#00E5FF"/>
            <circle cx="310" cy="120" r="3" fill="#00E5FF"/>
            
            {/* UAE Element */}
            <rect x="350" y="100" width="60" height="35" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.8"/>
            <text x="380" y="120" textAnchor="middle" fontSize="12" fill="#00E5FF">UAE</text>
            <text x="380" y="130" textAnchor="middle" fontSize="8" fill="#00E5FF">vCISO</text>
            
            <line x1="330" y1="130" x2="350" y2="120" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Executive Body */}
            <path d="M300 160 L300 200" stroke="#00E5FF" strokeWidth="2"/>
            <path d="M300 170 L280 190" stroke="#00E5FF" strokeWidth="2"/>
            <path d="M300 170 L320 190" stroke="#00E5FF" strokeWidth="2"/>
            <path d="M300 200 L290 230" stroke="#00E5FF" strokeWidth="2"/>
            <path d="M300 200 L310 230" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* Security Domains */}
            <circle cx="200" cy="190" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="200" y="185" textAnchor="middle" fontSize="10" fill="#00E5FF">Risk</text>
            <text x="200" y="195" textAnchor="middle" fontSize="10" fill="#00E5FF">Management</text>
            
            <circle cx="200" cy="270" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="200" y="265" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance</text>
            <text x="200" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Program</text>
            
            <circle cx="200" cy="350" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="200" y="345" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
            <text x="200" y="355" textAnchor="middle" fontSize="10" fill="#00E5FF">Operations</text>
            
            <circle cx="400" cy="190" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="400" y="185" textAnchor="middle" fontSize="10" fill="#00E5FF">Security</text>
            <text x="400" y="195" textAnchor="middle" fontSize="10" fill="#00E5FF">Strategy</text>
            
            <circle cx="400" cy="270" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="400" y="265" textAnchor="middle" fontSize="10" fill="#00E5FF">Incident</text>
            <text x="400" y="275" textAnchor="middle" fontSize="10" fill="#00E5FF">Response</text>
            
            <circle cx="400" cy="350" r="30" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="400" y="345" textAnchor="middle" fontSize="10" fill="#00E5FF">Technology</text>
            <text x="400" y="355" textAnchor="middle" fontSize="10" fill="#00E5FF">Advisory</text>
            
            {/* Connection Lines */}
            <line x1="275" y1="185" x2="230" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
            <line x1="275" y1="200" x2="230" y2="270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
            <line x1="290" y1="230" x2="230" y2="320" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
            
            <line x1="325" y1="185" x2="370" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
            <line x1="325" y1="200" x2="370" y2="270" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
            <line x1="310" y1="230" x2="370" y2="320" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
            
            {/* Animated Elements */}
            <circle cx="255" cy="187" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="280;230" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="185;190" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="255" cy="230" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="275;230" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="200;270" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="260" cy="270" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="290;230" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="230;320" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="345" cy="187" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="320;370" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="185;190" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="345" cy="230" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="320;370" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="200;270" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="340" cy="270" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="310;370" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="230;320" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Security Regulations */}
            <rect x="120" cy="190" width="50" height="25" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="145" y="205" textAnchor="middle" fontSize="8" fill="#EB3443">UAE IA</text>
            
            <rect x="120" cy="230" width="50" height="25" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="145" y="245" textAnchor="middle" fontSize="8" fill="#EB3443">NESA</text>
            
            <rect x="120" cy="270" width="50" height="25" rx="3" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
            <text x="145" y="285" textAnchor="middle" fontSize="8" fill="#EB3443">UAE PDPL</text>
            
            {/* Connection to Security Domains */}
            <line x1="170" y1="200" x2="170" y2="200" stroke="#EB3443" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,2"/>
            <line x1="170" y1="240" x2="170" y2="240" stroke="#EB3443" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,2"/>
            <line x1="170" y1="280" x2="170" y2="280" stroke="#EB3443" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,2"/>
            
            {/* Top Title */}
            <text x="300" y="70" textAnchor="middle" fontSize="16" fill="#00E5FF">UAE Virtual CISO Services</text>
            
            {/* Bottom Elements */}
            <rect x="250" y="350" width="100" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="370" textAnchor="middle" fontSize="12" fill="#00E5FF">UAE Leadership</text>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Security Assessment",
            link: "/services/security-assessment"
          },
          {
            title: "UAE Risk Management Frameworks",
            link: "/services/risk-frameworks"
          },
          {
            title: "UAE Information Security Policy Development",
            link: "/services/policy-development"
          },
          {
            title: "UAE Security Awareness Training",
            link: "/services/security-awareness"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Virtual CISO in UAE FAQs"
        subtitle="Common questions about virtual CISO services for UAE organizations"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default VcisoPage;