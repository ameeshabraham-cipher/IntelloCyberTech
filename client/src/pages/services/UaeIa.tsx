import { 
  Shield, 
  FileCheck, 
  Check, 
  AlertCircle,
  FileText,
  Lock
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const UaeIaPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "UAE Information Assurance Compliance Services",
    description: "Expert UAE Information Assurance compliance services in Dubai. Achieve regulatory compliance with UAE IA standards through our comprehensive implementation services.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Information Assurance Compliance",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE government entities, critical infrastructure, and regulated organizations"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is UAE Information Assurance (IA) compliance?",
      answer: "UAE Information Assurance (IA) is a regulatory framework established by the UAE Telecommunications and Digital Government Regulatory Authority (TDRA) that sets mandatory information security requirements for government entities, critical infrastructure providers, and organizations in regulated sectors operating in the UAE. It establishes controls across governance, risk management, operations, and technical domains to ensure protection of critical information assets."
    },
    {
      question: "Which organizations need to comply with UAE IA regulations?",
      answer: "UAE IA compliance is mandatory for all UAE federal government entities, critical infrastructure providers, and organizations operating in regulated sectors such as banking, healthcare, energy, telecommunications, and transportation. Even if not explicitly required, many organizations in the UAE implement these standards as a demonstration of security commitment and alignment with national standards."
    },
    {
      question: "How does UAE IA relate to other frameworks like ISO 27001?",
      answer: "UAE IA requirements align with and build upon international standards like ISO 27001, but with specific adaptations for the UAE context and regulatory environment. Organizations that have implemented ISO 27001 will find many similarities, but UAE IA includes additional UAE-specific requirements. Our implementation approach leverages existing frameworks while addressing the unique elements of UAE IA regulations."
    },
    {
      question: "What penalties or consequences exist for non-compliance with UAE IA?",
      answer: "Non-compliance with UAE IA regulations can result in regulatory penalties, operational restrictions, reputational damage, and potential exclusion from government contracts or services. For government entities and critical infrastructure providers, compliance is mandatory and regularly assessed by regulatory authorities."
    },
    {
      question: "How long does UAE IA implementation typically take?",
      answer: "The implementation timeframe varies based on organizational size, complexity, and existing security maturity, typically ranging from 4-12 months. Our structured approach prioritizes critical requirements while building a sustainable compliance program that can be maintained and improved over time."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="UAE Information Assurance Compliance Services | Dubai IA Implementation"
        description="Expert UAE Information Assurance compliance services in Dubai. Achieve regulatory compliance with UAE IA standards through our comprehensive implementation services with 22+ years of experience."
        url="/services/uae-ia"
        type="website"
      />
      <ServicePageLayout
        title="UAE Information Assurance Compliance Services | Dubai IA Implementation"
        category="UAE GRC Services"
        description="Achieve compliance with UAE Information Assurance standards and regulations with our comprehensive advisory and implementation services based in Dubai with 22+ years of experience."
        heroIcon={<Shield className="h-8 w-8" />}
        overview="UAE Information Assurance (IA) regulations establish critical security requirements for government entities, critical infrastructure, and organizations operating in key sectors in the UAE. Our Dubai-based UAE IA compliance services provide a structured approach to implementing these requirements, helping you protect sensitive information and critical systems while meeting UAE regulatory obligations. With deep understanding of the UAE regulatory landscape and 22+ years of experience, our specialized team guides organizations through the entire compliance journey, from initial assessment through implementation and ongoing maintenance."
        steps={[
          {
            title: "UAE IA Compliance Gap Assessment",
            description: "Comprehensive evaluation of your current security controls against UAE IA requirements to identify gaps and establish implementation priorities tailored to your UAE operations and regulatory context."
          },
          {
            title: "UAE-Aligned Risk Assessment & Classification",
            description: "Thorough assessment of information assets and systems to determine appropriate classification levels and security requirements according to UAE IA standards and UAE national security guidelines."
          },
          {
            title: "UAE IA Control Implementation Planning",
            description: "Development of a detailed implementation roadmap addressing identified gaps with clear timeline, resource allocation, and alignment with UAE regulatory expectations and deadlines."
          },
          {
            title: "UAE-Compliant Security Architecture Review",
            description: "Evaluation of your current security architecture against IA requirements, with recommendations for necessary enhancements that address UAE-specific considerations and regulatory expectations."
          },
          {
            title: "UAE IA Policy & Procedure Development",
            description: "Creation or updating of security policies and procedures to align with UAE IA standards and your organizational requirements, incorporating both Arabic and English documentation where needed."
          },
          {
            title: "UAE IA Control Implementation Support",
            description: "Expert guidance and practical support for implementing required technical and administrative controls, with UAE-based consultants providing hands-on assistance throughout the implementation process."
          },
          {
            title: "UAE Regulatory Compliance Documentation",
            description: "Development of comprehensive documentation to demonstrate compliance with UAE IA requirements during regulatory assessments, ensuring alignment with UAE regulatory reporting expectations."
          }
        ]}
        benefits={[
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Meet UAE national regulatory requirements for information security, avoiding potential penalties, operational disruptions, and regulatory scrutiny from UAE authorities."
          },
          {
            title: "Enhanced UAE-Focused Security Posture",
            content: "Implement robust security controls that protect your critical information assets and systems from evolving cyber threats targeting UAE organizations and critical infrastructure."
          },
          {
            title: "UAE Government & Critical Infrastructure Readiness",
            content: "Meet the specific information security requirements needed for UAE government entities, critical infrastructure providers, and organizations in regulated sectors operating in the UAE."
          },
          {
            title: "UAE Business Continuity Assurance",
            content: "Enhance your organization's resilience against cyber incidents within the UAE threat landscape through comprehensive protection of critical information assets aligned with national security priorities."
          },
          {
            title: "UAE-Aligned Security Program",
            content: "Establish a comprehensive security program aligned with UAE national standards, regulatory expectations, and international best practices, providing a solid foundation for UAE operations."
          },
          {
            title: "UAE Government Contract Eligibility",
            content: "Meet prerequisite security requirements for participating in UAE government contracts and initiatives that require demonstrable compliance with national information security standards."
          }
        ]}
        deliverables={[
          {
            title: "UAE IA Gap Assessment Report",
            description: "Detailed analysis of compliance gaps with prioritized recommendations for remediation aligned with UAE IA requirements and tailored to your organizational context within the UAE regulatory environment."
          },
          {
            title: "UAE-Aligned Security Control Implementation Plan",
            description: "Comprehensive roadmap for implementing required controls with clear milestones, responsibilities, and resource estimates customized for UAE regulatory timelines and compliance priorities."
          },
          {
            title: "UAE IA Information Security Policies",
            description: "Complete set of security policies aligned with UAE IA requirements and tailored to your organizational context, available in both English and Arabic formats as needed for regulatory compliance."
          },
          {
            title: "UAE Information Asset Classification Framework",
            description: "Structured approach for classifying information assets based on criticality and sensitivity according to UAE standards, with appropriate protection requirements aligned with UAE IA controls."
          },
          {
            title: "UAE-Compliant Security Architecture Recommendations",
            description: "Detailed technical guidance for enhancing security architecture to meet UAE IA requirements and protect critical assets, incorporating UAE-specific security considerations and best practices."
          },
          {
            title: "UAE IA Compliance Evidence Portfolio",
            description: "Organized collection of documentation and evidence demonstrating compliance with UAE IA requirements for regulatory assessments, structured according to UAE regulatory expectations and reporting formats."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* UAE Map Outline */}
            <path d="M300 100 Q370 130 350 200 Q330 270 300 300 Q270 270 250 200 Q230 130 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Flag Colors */}
            <rect x="270" y="130" width="60" height="10" fill="#00B2A9" fillOpacity="0.5"/>
            <rect x="270" y="140" width="60" height="10" fill="#FFFFFF" fillOpacity="0.2"/>
            <rect x="270" y="150" width="60" height="10" fill="#00B2A9" fillOpacity="0.3"/>
            <rect x="260" y="130" width="10" height="30" fill="#FF0000" fillOpacity="0.3"/>
            
            {/* IA Layers */}
            <rect x="250" y="170" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="187" textAnchor="middle" fontSize="12" fill="#00E5FF">Governance</text>
            
            <rect x="250" y="200" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="217" textAnchor="middle" fontSize="12" fill="#00E5FF">Risk</text>
            
            <rect x="250" y="230" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="247" textAnchor="middle" fontSize="12" fill="#00E5FF">Operations</text>
            
            <rect x="250" y="260" width="100" height="25" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="277" textAnchor="middle" fontSize="12" fill="#00E5FF">Technology</text>
            
            {/* Connected Elements */}
            <rect x="150" y="200" width="70" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="185" y="222" textAnchor="middle" fontSize="10" fill="#00E5FF">Controls</text>
            
            <rect x="380" y="200" width="70" height="40" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
            <text x="415" y="222" textAnchor="middle" fontSize="10" fill="#00E5FF">Compliance</text>
            
            {/* Control Categories */}
            <circle cx="185" y="150" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="185" y="154" textAnchor="middle" fontSize="8" fill="#00E5FF">Policy</text>
            
            <circle cx="185" y="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="185" y="184" textAnchor="middle" fontSize="8" fill="#00E5FF">Process</text>
            
            <circle cx="185" y="260" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="185" y="264" textAnchor="middle" fontSize="8" fill="#00E5FF">Technical</text>
            
            <circle cx="415" y="150" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="415" y="154" textAnchor="middle" fontSize="8" fill="#00E5FF">Audit</text>
            
            <circle cx="415" y="260" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="415" y="264" textAnchor="middle" fontSize="8" fill="#00E5FF">Reporting</text>
            
            {/* TDRA Element */}
            <rect x="460" y="160" width="60" height="30" rx="5" fill="#0A1024" stroke="#eb3443" strokeWidth="1"/>
            <text x="490" y="175" textAnchor="middle" fontSize="9" fill="#FFFFFF">TDRA</text>
            <text x="490" y="185" textAnchor="middle" fontSize="7" fill="#FFFFFF">Regulator</text>
            
            <line x1="415" y1="170" x2="460" y2="175" stroke="#eb3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Connection Lines */}
            <line x1="220" y1="220" x2="250" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="350" y1="220" x2="380" y2="220" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="185" y1="165" x2="185" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="185" y1="240" x2="185" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="415" y1="165" x2="415" y2="200" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="415" y1="240" x2="415" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Animated Connecting Elements */}
            <circle cx="235" cy="220" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="220;250" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="365" cy="220" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="350;380" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Shield Glow */}
            <path d="M300 100 Q370 130 350 200 Q330 270 300 300 Q270 270 250 200 Q230 130 300 100" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite"/>
            </path>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE NESA Compliance",
            link: "/services/uae-nesa"
          },
          {
            title: "ISO 27001 Certification",
            link: "/services/iso27001"
          },
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          },
          {
            title: "Security Assessment",
            link: "/services/security-assessment"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="UAE Information Assurance FAQs"
        subtitle="Common questions about UAE IA compliance services"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default UaeIaPage;