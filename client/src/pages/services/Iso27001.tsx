import { 
  Shield, 
  FileCheck, 
  Users, 
  Clipboard,
  BookOpen,
  Monitor
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const Iso27001Page = () => {
  return (
    <ServicePageLayout
      title="ISO 27001 Certification"
      category="GRC Services"
      description="Achieve ISO 27001 certification with our comprehensive implementation and advisory services, demonstrating your commitment to information security."
      heroIcon={<Shield className="h-8 w-8" />}
      overview="ISO 27001 is the internationally recognized gold standard for information security management systems (ISMS), providing a comprehensive framework for protecting your organization's most valuable asset—information. Our ISO 27001 certification service delivers a strategic, risk-based approach to security that goes beyond technology to address people, processes, and governance. We guide you through the entire certification journey, from initial gap assessment to successful certification, ensuring you not only achieve compliance but also significantly enhance your security posture, build stakeholder trust, and create sustainable competitive advantage through demonstrated security excellence."
      steps={[
        {
          title: "Initial Gap Analysis & Scoping",
          description: "We conduct a comprehensive assessment of your current security posture against all 114 ISO 27001 controls, identifying specific gaps, evaluating maturity levels, and establishing the optimal scope for your ISMS to maximize certification value while minimizing implementation complexity."
        },
        {
          title: "ISMS Framework Development",
          description: "Our experts design a customized Information Security Management System framework tailored to your organization's unique risk profile, business processes, and operational environment—creating a foundation that aligns security with your strategic objectives."
        },
        {
          title: "Risk Assessment & Treatment Planning",
          description: "Using ISO 27005-aligned methodologies, we perform systematic information security risk assessment, creating a comprehensive risk register with clear risk ratings, ownership assignments, and detailed treatment plans that prioritize critical risks for immediate action."
        },
        {
          title: "Security Controls Implementation",
          description: "We collaborate with your team to implement robust technical, administrative, and physical controls across your organization, focusing on practical, sustainable measures that address key risks while minimizing operational disruption and excessive costs."
        },
        {
          title: "Documentation & Process Development",
          description: "Our specialists develop a complete suite of ISO 27001-required documentation including information security policies, procedures, work instructions, and records—creating clear, actionable guidance that drives consistent security practices throughout your organization."
        },
        {
          title: "Internal Audit & Continuous Improvement",
          description: "We establish and execute comprehensive internal audit procedures, management review processes, and performance metrics that validate your ISMS effectiveness, identify improvement opportunities, and foster a culture of ongoing security enhancement."
        },
        {
          title: "Certification Audit Support",
          description: "Our certification experts provide end-to-end support throughout your Stage 1 and Stage 2 certification audits, managing auditor communications, preparing your team through mock audits, addressing audit findings in real-time, and ensuring a smooth path to successful certification."
        }
      ]}
      benefits={[
        {
          title: "Enhanced Security Posture",
          content: "Implement a comprehensive set of security controls based on international best practices that protect your critical information assets, significantly reduce breach likelihood, and establish continuous monitoring capabilities for early threat detection and response."
        },
        {
          title: "Competitive Advantage & Market Access",
          content: "Gain substantial competitive differentiation through certified security excellence, winning more contracts where ISO 27001 is required or preferred (increasingly common in enterprise RFPs), and accessing regulated markets and industries where certification is becoming mandatory."
        },
        {
          title: "Streamlined Regulatory Compliance",
          content: "Meet multiple regulatory and contractual requirements simultaneously through ISO 27001's unified controls framework, creating significant efficiency by reducing duplicate compliance work across GDPR, SOC 2, PCI DSS, HIPAA, and other frameworks with overlapping requirements."
        },
        {
          title: "Operational Excellence & Efficiency",
          content: "Transform your security operations with structured processes, clear responsibilities, and optimized resource allocation—reducing redundancies, eliminating ad-hoc security practices, and integrating security into everyday business operations for minimal disruption."
        },
        {
          title: "Enhanced Stakeholder Trust",
          content: "Build powerful trust relationships with customers, partners, and regulators by obtaining independent verification of your security practices from accredited certification bodies, demonstrating transparency and commitment to security excellence that attracts and retains security-conscious clients."
        },
        {
          title: "Reduced Security Incident Costs",
          content: "Significantly reduce both the likelihood and impact of security incidents through preventative controls and effective response capabilities, avoiding costly breaches that average $4.35 million in direct costs plus immeasurable reputational damage and business disruption."
        }
      ]}
      deliverables={[
        {
          title: "Comprehensive Gap Assessment Report",
          description: "Detailed control-by-control analysis of your current security posture against all 114 ISO 27001 controls, with maturity scoring, compliance heat maps, and clearly prioritized recommendations for addressing critical gaps first."
        },
        {
          title: "Complete ISMS Documentation Suite",
          description: "Fully customized set of ISO 27001-required documentation including information security policy, 18 mandatory procedures, work instructions, forms, and templates—all tailored to your specific organizational context and written in clear, practical language."
        },
        {
          title: "Enterprise Risk Assessment Framework",
          description: "Comprehensive risk management methodology aligned with ISO 27005, including customized risk assessment tools, risk acceptance criteria, detailed risk register with clear ownership assignments, and actionable treatment plans."
        },
        {
          title: "Customized Statement of Applicability",
          description: "Meticulously crafted Statement of Applicability documenting your specific implementation decisions for all 114 Annex A controls, including justifications for control selections, implementation status, and implementation responsibility assignments."
        },
        {
          title: "Detailed Implementation Roadmap",
          description: "Actionable project plan with precise timelines, resource requirements, technical specifications, milestone tracking, and responsibility assignments across all implementation phases—providing clear visibility and accountability."
        },
        {
          title: "Sustainable Internal Audit Program",
          description: "Comprehensive internal audit framework including audit schedules, checklists, methodologies, reporting templates, and training materials—enabling you to maintain ongoing compliance and continual improvement after certification."
        },
        {
          title: "ISO 27001 Certification",
          description: "Successfully achieving ISO 27001 certification from an accredited certification body, with formal certification documentation and digital badge for use in marketing materials, websites, and client communications."
        },
        {
          title: "Post-Certification Support Plan",
          description: "Structured 12-month support program that includes surveillance audit preparation, quarterly check-ins, control effectiveness reviews, and on-demand advisory support to ensure your certified ISMS remains effective and continuously improves."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield Background */}
          <path d="M300 80 Q400 110 400 200 Q400 290 300 340 Q200 290 200 200 Q200 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* PDCA Cycle */}
          <circle cx="300" cy="210" r="100" fill="none" stroke="#00B2A9" strokeWidth="1.5" strokeDasharray="10 5"/>
          
          {/* Quadrants */}
          <path d="M300 210 L300 110 A100 100 0 0 1 400 210 Z" fill="#00B2A9" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M300 210 L400 210 A100 100 0 0 1 300 310 Z" fill="#00B2A9" fillOpacity="0.15" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M300 210 L300 310 A100 100 0 0 1 200 210 Z" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <path d="M300 210 L200 210 A100 100 0 0 1 300 110 Z" fill="#00B2A9" fillOpacity="0.25" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* PDCA Labels */}
          <text x="320" y="155" textAnchor="middle" fontSize="14" fill="#00E5FF">Plan</text>
          <text x="355" y="220" textAnchor="middle" fontSize="14" fill="#00E5FF">Do</text>
          <text x="300" y="265" textAnchor="middle" fontSize="14" fill="#00E5FF">Check</text>
          <text x="245" y="220" textAnchor="middle" fontSize="14" fill="#00E5FF">Act</text>
          
          {/* Center Icon */}
          <circle cx="300" cy="210" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="300" y="215" textAnchor="middle" fontSize="12" fill="#00E5FF">ISMS</text>
          
          {/* Animated Elements */}
          <circle cx="300" cy="110" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="400" cy="210" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="310" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="200" cy="210" r="5" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* ISO 27001 Areas */}
          <circle cx="185" cy="135" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="185" y="140" textAnchor="middle" fontSize="10" fill="#00E5FF">4</text>
          
          <circle cx="225" cy="105" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="225" y="110" textAnchor="middle" fontSize="10" fill="#00E5FF">5</text>
          
          <circle cx="275" cy="95" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="275" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">6</text>
          
          <circle cx="325" cy="95" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="325" y="100" textAnchor="middle" fontSize="10" fill="#00E5FF">7</text>
          
          <circle cx="375" cy="105" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="375" y="110" textAnchor="middle" fontSize="10" fill="#00E5FF">8</text>
          
          <circle cx="415" cy="135" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="415" y="140" textAnchor="middle" fontSize="10" fill="#00E5FF">9</text>
          
          <circle cx="430" cy="180" r="15" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
          <text x="430" y="185" textAnchor="middle" fontSize="10" fill="#00E5FF">10</text>
        </svg>
      }
      relatedServices={[
        {
          title: "SOC 2 Compliance",
          link: "/services/soc2"
        },
        {
          title: "GDPR Compliance",
          link: "/services/gdpr"
        },
        {
          title: "Information Security Assessment",
          link: "/services/security-assessment"
        }
      ]}
    />
  );
};

export default Iso27001Page;