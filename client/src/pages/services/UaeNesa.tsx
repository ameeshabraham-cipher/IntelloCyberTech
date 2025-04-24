import { 
  Shield, 
  LockKeyhole, 
  Server, 
  Monitor,
  Settings,
  FileText
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const UaeNesaPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "UAE NESA Compliance Services in Dubai",
    description: "Expert UAE National Electronic Security Authority (NESA) compliance services in Dubai. Achieve regulatory compliance with UAE NESA standards through our comprehensive implementation services.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Compliance Services",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE government entities, critical infrastructure operators, and regulated organizations"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is UAE NESA compliance?",
      answer: "UAE NESA (National Electronic Security Authority) compliance refers to meeting the standards and requirements established by the UAE's cybersecurity regulatory body. NESA has developed the Information Assurance Standards and other frameworks to secure the UAE's critical information infrastructure. These standards are mandatory for government entities and critical infrastructure operators in sectors such as energy, finance, healthcare, telecommunications, and transportation."
    },
    {
      question: "Which organizations in the UAE need to comply with NESA standards?",
      answer: "NESA compliance is mandatory for all UAE federal and local government entities, critical infrastructure operators, and organizations in regulated sectors such as energy, finance, healthcare, telecommunications, transportation, and utilities. Even organizations not directly regulated may need to implement NESA standards when working with government entities or critical infrastructure operators."
    },
    {
      question: "How does NESA compliance differ from ISO 27001?",
      answer: "While NESA standards incorporate elements from international standards like ISO 27001, they include additional UAE-specific requirements and focus areas tailored to the UAE's national security priorities. NESA standards are more prescriptive in certain areas and include specific requirements for protecting critical infrastructure. Organizations with ISO 27001 certification will have a solid foundation but will need to address additional UAE-specific controls to achieve NESA compliance."
    },
    {
      question: "What are the consequences of non-compliance with NESA standards in the UAE?",
      answer: "Non-compliance with NESA standards can result in regulatory penalties, restrictions on operations, exclusion from government contracts and projects, and reputational damage. For critical infrastructure operators, non-compliance may also lead to increased scrutiny from regulatory authorities and potential business disruptions."
    },
    {
      question: "How long does it typically take to achieve NESA compliance in the UAE?",
      answer: "The timeframe for achieving NESA compliance varies based on organizational size, complexity, and existing security maturity, typically ranging from 6-18 months. Our structured approach prioritizes critical requirements to establish a solid compliance foundation while building toward comprehensive implementation. We work with each client to develop a realistic timeline based on their specific circumstances and regulatory deadlines."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="UAE NESA Compliance Services | Dubai Cybersecurity Implementation"
        description="Expert UAE NESA compliance services in Dubai. Achieve regulatory compliance with UAE National Electronic Security Authority standards with our 22+ years of implementation experience."
        url="/services/uae-nesa"
        type="website"
      />
      <ServicePageLayout
        title="UAE NESA Compliance Services | Dubai Cybersecurity Implementation"
        category="UAE GRC Services"
        description="Meet the requirements of the UAE National Electronic Security Authority (NESA) with our comprehensive compliance and implementation services based in Dubai with 22+ years of experience."
        heroIcon={<LockKeyhole className="h-8 w-8" />}
        overview="The UAE National Electronic Security Authority (NESA) has established the Information Assurance Standards to secure UAE's critical information infrastructure. Our Dubai-based NESA compliance services provide a structured approach to implementing these standards, helping government entities and critical infrastructure operators across the UAE meet regulatory requirements while establishing robust cybersecurity practices. With 22+ years of experience in the UAE market, our specialized consultants provide expert guidance through every step of the compliance journey."
        steps={[
          {
            title: "UAE NESA Standard Scoping",
            description: "Identification of applicable NESA standards based on your organization type, sector, and critical information infrastructure classification in the UAE regulatory framework."
          },
          {
            title: "UAE NESA Comprehensive Gap Assessment",
            description: "Detailed evaluation of your current security controls against NESA requirements to identify compliance gaps and implementation priorities tailored to your UAE operations."
          },
          {
            title: "UAE-Specific Asset Classification & Risk Assessment",
            description: "Systematic identification and classification of information assets with comprehensive risk assessment aligned with NESA methodology and UAE national security priorities."
          },
          {
            title: "UAE NESA Compliance Roadmap Development",
            description: "Creation of a detailed implementation plan with prioritized initiatives, resource requirements, and timelines for achieving compliance with UAE regulatory deadlines."
          },
          {
            title: "UAE NESA Security Control Implementation",
            description: "Expert guidance and support from UAE-based consultants for implementing required security controls across technical, administrative, and physical domains."
          },
          {
            title: "UAE NESA Security Documentation & Governance",
            description: "Development of comprehensive security policies, procedures, and governance structures aligned with NESA requirements and UAE regulatory expectations."
          },
          {
            title: "UAE Regulatory Compliance Validation & Reporting",
            description: "Thorough validation of implemented controls with comprehensive documentation for compliance reporting to UAE regulatory authorities in the required formats."
          }
        ]}
        benefits={[
          {
            title: "UAE Regulatory Compliance Assurance",
            content: "Meet mandatory UAE NESA regulatory requirements, avoiding potential penalties and operational disruptions for non-compliance with UAE cybersecurity regulations."
          },
          {
            title: "UAE Critical Infrastructure Protection",
            content: "Implement robust security controls that protect critical national infrastructure in the UAE from cyber threats and attacks targeting essential services."
          },
          {
            title: "UAE-Aligned Security Framework",
            content: "Establish a structured security program aligned with UAE national standards and tailored to your operational context within the UAE regulatory environment."
          },
          {
            title: "UAE Government Contracting Eligibility",
            content: "Demonstrate compliance required for UAE government contracts and participation in critical national projects throughout the Emirates."
          },
          {
            title: "Enhanced UAE-Focused Security Maturity",
            content: "Systematically improve your security posture through implementation of controls based on international best practices and UAE-specific requirements."
          },
          {
            title: "UAE National Security Alignment",
            content: "Contribute to the UAE's national cybersecurity strategy by implementing controls that protect critical sectors and national information assets."
          }
        ]}
        deliverables={[
          {
            title: "UAE NESA Gap Assessment Report",
            description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps according to UAE regulatory expectations and timelines."
          },
          {
            title: "UAE NESA Information Asset Register",
            description: "Comprehensive inventory of information assets with classification levels and security requirements according to NESA standards and UAE security guidelines."
          },
          {
            title: "UAE NESA Security Control Implementation Plan",
            description: "Detailed roadmap for implementing required controls with clear responsibilities, timelines, and resource allocations aligned with UAE regulatory requirements."
          },
          {
            title: "UAE NESA-Aligned Security Policies",
            description: "Complete set of security policies tailored to your organization and aligned with NESA standards and requirements, available in both English and Arabic formats as needed."
          },
          {
            title: "UAE Cybersecurity Risk Register",
            description: "Systematic documentation of identified cybersecurity risks with assessment ratings and treatment plans according to UAE risk management frameworks."
          },
          {
            title: "UAE NESA Compliance Evidence Portfolio",
            description: "Organized collection of documentation and evidence demonstrating compliance with NESA requirements for regulatory reviews by UAE authorities."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* UAE Map Outline */}
            <path d="M300 80 Q380 110 370 200 Q360 290 300 320 Q240 290 230 200 Q220 110 300 80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* UAE Flag Colors */}
            <rect x="275" y="115" width="50" height="8" fill="#00B2A9" fillOpacity="0.5"/>
            <rect x="275" y="123" width="50" height="8" fill="#FFFFFF" fillOpacity="0.2"/>
            <rect x="275" y="131" width="50" height="8" fill="#00B2A9" fillOpacity="0.3"/>
            <rect x="265" y="115" width="10" height="24" fill="#FF0000" fillOpacity="0.3"/>
            
            {/* NESA Shield */}
            <path d="M300 150 Q330 160 330 200 Q330 240 300 260 Q270 240 270 200 Q270 160 300 150" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="210" textAnchor="middle" fontSize="16" fill="#00E5FF">NESA</text>
            
            {/* Critical Infrastructure Elements */}
            <rect x="180" y="160" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="205" y="180" textAnchor="middle" fontSize="9" fill="#00E5FF">Energy</text>
            
            <rect x="180" y="200" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="205" y="220" textAnchor="middle" fontSize="9" fill="#00E5FF">Finance</text>
            
            <rect x="180" y="240" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="205" y="260" textAnchor="middle" fontSize="9" fill="#00E5FF">Health</text>
            
            <rect x="370" y="160" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="395" y="180" textAnchor="middle" fontSize="9" fill="#00E5FF">Telecom</text>
            
            <rect x="370" y="200" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="395" y="220" textAnchor="middle" fontSize="9" fill="#00E5FF">Govt</text>
            
            <rect x="370" y="240" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1"/>
            <text x="395" y="260" textAnchor="middle" fontSize="9" fill="#00E5FF">Transport</text>
            
            {/* Abu Dhabi Element */}
            <rect x="440" y="150" width="60" height="30" rx="5" fill="#0A1024" stroke="#eb3443" strokeWidth="1"/>
            <text x="470" y="165" textAnchor="middle" fontSize="8" fill="#FFFFFF">Abu Dhabi</text>
            <text x="470" y="175" textAnchor="middle" fontSize="8" fill="#FFFFFF">HQ</text>
            
            <line x1="395" y1="165" x2="440" y2="165" stroke="#eb3443" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Connecting Lines */}
            <line x1="230" y1="175" x2="270" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="230" y1="215" x2="270" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="230" y1="255" x2="270" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="370" y1="175" x2="330" y2="190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="370" y1="215" x2="330" y2="210" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="370" y1="255" x2="330" y2="230" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Standards Elements */}
            <circle cx="240" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="240" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">IAF</text>
            
            <circle cx="280" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="280" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">IAS</text>
            
            <circle cx="320" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="320" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">CCS</text>
            
            <circle cx="360" cy="290" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="360" y="294" textAnchor="middle" fontSize="10" fill="#00E5FF">CIIP</text>
            
            {/* Connection to Shield */}
            <line x1="240" y1="275" x2="270" y2="245" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="280" y1="275" x2="285" y2="260" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="320" y1="275" x2="315" y2="260" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="360" y1="275" x2="330" y2="245" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Animated Elements */}
            <circle cx="250" cy="182" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="230;270" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="175;190" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="250" cy="212" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="230;270" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="215;210" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="350" cy="182" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="370;330" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="175;190" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="350" cy="212" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="370;330" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="215;210" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Security Shield Glow */}
            <path d="M300 150 Q330 160 330 200 Q330 240 300 260 Q270 240 270 200 Q270 160 300 150" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite"/>
            </path>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE Information Assurance",
            link: "/services/uae-ia"
          },
          {
            title: "ISO 27001 Certification",
            link: "/services/iso27001"
          },
          {
            title: "Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="UAE NESA Compliance FAQs"
        subtitle="Common questions about NESA compliance in the UAE"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default UaeNesaPage;