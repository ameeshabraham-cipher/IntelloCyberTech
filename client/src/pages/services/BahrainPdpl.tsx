import { 
  FileText, 
  ShieldCheck, 
  Users, 
  Globe,
  Lock,
  ClipboardList
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const BahrainPdplPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Bahrain PDPL Compliance Services",
    description: "Expert Bahrain Personal Data Protection Law (PDPL) compliance services. Achieve regulatory compliance with Bahrain's data protection law through our comprehensive implementation services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Data Protection Compliance Services",
    areaServed: {
      "@type": "Country",
      name: "Kingdom of Bahrain"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Organizations processing personal data in Bahrain"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is the Bahrain Personal Data Protection Law (PDPL)?",
      answer: "The Bahrain Personal Data Protection Law (PDPL) is comprehensive legislation that regulates the collection, processing, and transfer of personal data in the Kingdom of Bahrain. Enacted in 2018 and fully implemented in 2019, the law establishes rights for data subjects and obligations for organizations that handle personal data. The Bahrain PDPL is enforced by the Personal Data Protection Authority (PDPA) and introduces significant compliance requirements for organizations operating in Bahrain."
    },
    {
      question: "Which organizations need to comply with the Bahrain PDPL?",
      answer: "The Bahrain PDPL applies to all organizations that process personal data in Bahrain, including: 1) Organizations with operations or establishments in Bahrain, 2) Organizations processing data of individuals located in Bahrain, 3) Organizations outside Bahrain that process data through equipment located in Bahrain. The law applies to both public and private sectors and covers all types of personal data processing, with specific provisions for sensitive personal data."
    },
    {
      question: "What are the key requirements of the Bahrain PDPL?",
      answer: "Key requirements include: 1) Establishing a lawful basis for processing personal data, 2) Providing clear privacy notices to data subjects, 3) Implementing appropriate security measures to protect personal data, 4) Honoring data subject rights (access, correction, erasure), 5) Obtaining prior authorization from the Authority for certain processing activities, 6) Appointing a Data Protection Supervisor in certain cases, 7) Implementing data protection by design and default, 8) Obtaining explicit consent for processing sensitive personal data, 9) Reporting data breaches, and 10) Restrictions on cross-border data transfers."
    },
    {
      question: "What are the penalties for non-compliance with the Bahrain PDPL?",
      answer: "Non-compliance with the Bahrain PDPL can result in significant penalties, including: 1) Administrative fines up to 20,000 Bahraini Dinars (approximately $53,000 USD), 2) Criminal penalties including imprisonment for serious violations, 3) Orders to stop processing activities, 4) Public naming of non-compliant organizations, 5) Compensation claims from affected individuals. The Bahrain PDPA has enforcement powers to conduct investigations and issue compliance orders."
    },
    {
      question: "How does the Bahrain PDPL compare to other GCC data protection laws?",
      answer: "The Bahrain PDPL was one of the first comprehensive data protection laws in the GCC region and shares similarities with other GCC data protection laws such as the UAE PDPL and KSA PDPL, but with some distinct requirements: 1) It has a prior authorization regime for certain processing activities, 2) It specifies the role of a Data Protection Supervisor rather than a Data Protection Officer, 3) It has specific requirements for marketing communications, 4) It includes provisions for CCTV monitoring. Organizations operating across the GCC will need to address these specific Bahrain requirements while maintaining a consistent regional approach."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Bahrain PDPL Compliance Services | Bahrain Data Protection"
        description="Expert Bahrain PDPL compliance services. Achieve regulatory compliance with Bahrain's data protection law through our comprehensive implementation services with 22+ years of experience."
        url="/services/bahrain-pdpl"
        type="website"
      />
      <ServicePageLayout
        title="Bahrain PDPL Compliance Services | Bahrain Data Protection"
        category="GCC GRC Services"
        description="Achieve compliance with the Bahrain Personal Data Protection Law (PDPL) through our comprehensive assessment and implementation services tailored for organizations operating in Bahrain. With 22+ years of experience in the GCC region."
        heroIcon={<Globe className="h-8 w-8" />}
        overview="The Bahrain Personal Data Protection Law (PDPL) establishes comprehensive requirements for organizations processing personal data in Bahrain. Our Bahrain PDPL compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping you protect personal data while meeting regulatory obligations in Bahrain. With 22+ years of experience in the GCC region and deep understanding of Bahrain's regulatory landscape, our specialized consultants ensure your organization achieves and maintains compliance with this important legislation."
        steps={[
          {
            title: "Bahrain PDPL Gap Assessment",
            description: "Comprehensive evaluation of your current data protection practices against Bahrain PDPL requirements to identify compliance gaps and priorities specific to Bahrain's regulatory framework."
          },
          {
            title: "Bahrain Data Mapping & Processing Register",
            description: "Thorough discovery and documentation of all personal data processing activities to establish visibility and meet Bahrain PDPL record-keeping requirements and regulatory documentation standards."
          },
          {
            title: "Bahrain PDPL Compliance Program Development",
            description: "Creation of a structured Bahrain PDPL compliance program with clear policies, procedures, and controls tailored to your organization and Bahrain's specific regulatory expectations."
          },
          {
            title: "Bahrain Privacy Governance Framework",
            description: "Establishment of governance structures, including designation of Data Protection Supervisor if required, with clear roles and responsibilities aligned with Bahrain PDPL requirements."
          },
          {
            title: "Bahrain Data Subject Rights Procedures",
            description: "Development of efficient processes for managing data subject access requests and other rights under the Bahrain PDPL, with both Arabic and English language support to meet local requirements."
          },
          {
            title: "Bahrain International Transfer Compliance",
            description: "Implementation of appropriate safeguards for international data transfers in compliance with Bahrain PDPL requirements, including necessary authorizations from the Bahrain PDPA."
          },
          {
            title: "Bahrain PDPL Staff Training & Awareness",
            description: "Customized training for staff to ensure understanding of Bahrain PDPL requirements and compliance responsibilities, tailored to your organization's specific operations in Bahrain."
          }
        ]}
        benefits={[
          {
            title: "Bahrain Regulatory Compliance",
            content: "Achieve and maintain compliance with the Bahrain PDPL, avoiding potential penalties for violations which can reach up to 20,000 Bahraini Dinars, and demonstrating commitment to Bahrain's legal requirements."
          },
          {
            title: "Enhanced Bahrain-Aligned Data Governance",
            content: "Establish robust data governance practices that improve how personal data is managed throughout your organization, aligned with Bahrain's specific regulatory expectations."
          },
          {
            title: "Bahrain Market Trust Building",
            content: "Demonstrate your commitment to data protection, creating trust with customers and partners in the Bahrain market, essential for business relationships in this growing financial hub."
          },
          {
            title: "Bahrain-Compliant Data Strategy",
            content: "Leverage personal data more effectively through clear understanding of lawful processing requirements and limitations specific to Bahrain's regulatory environment."
          },
          {
            title: "GCC Regional Alignment",
            content: "Align your Bahrain operations with broader GCC privacy requirements, creating consistency across regional operations while addressing Bahrain-specific regulatory nuances."
          },
          {
            title: "Bahrain Financial Sector Readiness",
            content: "Meet the specific data protection requirements necessary for financial sector operations in Bahrain, supporting participation in Bahrain's growing fintech and financial services ecosystem."
          }
        ]}
        deliverables={[
          {
            title: "Bahrain PDPL Gap Assessment Report",
            description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps according to Bahrain's regulatory framework and expectations."
          },
          {
            title: "Bahrain PDPL Data Processing Register",
            description: "Comprehensive inventory of personal data processing activities, meeting Bahrain PDPL documentation requirements and prepared for potential regulatory inspection."
          },
          {
            title: "Bahrain-Compliant Privacy Policies & Notices",
            description: "Bahrain PDPL-compliant privacy policies and notices for both internal and external stakeholders, tailored to your specific processing activities and available in both Arabic and English."
          },
          {
            title: "Bahrain PDPL Data Subject Rights Procedures",
            description: "Documented processes and templates for handling data subject requests in compliance with Bahrain PDPL requirements, with clear guidelines for Bahrain-specific response timelines and requirements."
          },
          {
            title: "Bahrain PDPL Data Breach Response Plan",
            description: "Clear procedures for detecting, investigating, and reporting data breaches in accordance with Bahrain PDPL notification requirements to the Bahrain PDPA within required timeframes."
          },
          {
            title: "Bahrain PDPL Implementation Roadmap",
            description: "Structured action plan with clear timelines and responsibilities for achieving and maintaining Bahrain PDPL compliance, aligned with Bahrain regulatory deadlines and business priorities."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bahrain Map Outline */}
            <path d="M320 140 L340 150 L350 180 L340 210 L320 240 L300 260 L280 240 L260 210 L250 180 L260 150 L280 140 Z" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* Bahrain Flag Colors */}
            <rect x="270" y="160" width="60" height="20" fill="#CE1126" fillOpacity="0.3"/>
            <rect x="270" y="180" width="60" height="20" fill="#FFFFFF" fillOpacity="0.2"/>
            
            {/* Bahrain Economic Vision 2030 */}
            <rect x="410" y="230" width="60" height="30" rx="5" fill="#0A1024" stroke="#CE1126" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </rect>
            <text x="440" y="242" textAnchor="middle" fontSize="8" fill="#00E5FF">Economic</text>
            <text x="440" y="252" textAnchor="middle" fontSize="8" fill="#00E5FF">Vision 2030</text>
            
            <line x1="340" y1="230" x2="410" y2="245" stroke="#CE1126" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Data Protection Elements */}
            <circle cx="300" cy="200" r="25" fill="#CE1126" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
            
            {/* Key Compliance Areas */}
            <circle cx="260" cy="180" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="260" y="183" textAnchor="middle" fontSize="6" fill="#00E5FF">Processing</text>
            
            <circle cx="340" cy="180" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="340" y="183" textAnchor="middle" fontSize="6" fill="#00E5FF">Transfers</text>
            
            <circle cx="260" cy="220" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="260" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Rights</text>
            
            <circle cx="340" cy="220" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="340" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Security</text>
            
            <circle cx="300" cy="240" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="243" textAnchor="middle" fontSize="6" fill="#00E5FF">DPS</text>
            
            {/* Connected Elements */}
            <rect x="180" y="150" width="50" height="30" rx="5" fill="#0A1024" stroke="#CE1126" strokeWidth="1.5"/>
            <text x="205" y="170" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Controller</text>
            
            <rect x="180" y="220" width="50" height="30" rx="5" fill="#0A1024" stroke="#CE1126" strokeWidth="1.5"/>
            <text x="205" y="240" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Processor</text>
            
            <rect x="370" y="180" width="60" height="40" rx="5" fill="#0A1024" stroke="#CE1126" strokeWidth="1.5"/>
            <text x="400" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">PDPA Authority</text>
            <text x="400" y="212" textAnchor="middle" fontSize="6" fill="#00E5FF">Bahrain</text>
            
            {/* Connection Lines */}
            <line x1="230" y1="165" x2="260" y2="180" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="230" y1="235" x2="260" y2="220" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="340" y1="180" x2="370" y2="190" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="340" y1="220" x2="370" y2="210" stroke="#CE1126" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Animated Elements */}
            <circle cx="245" cy="173" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="230;260" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="165;180" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="245" cy="227" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="230;260" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="235;220" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="355" cy="185" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="340;370" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="180;190" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="355" cy="215" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="340;370" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="220;210" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* PDPL Shield Glow */}
            <circle cx="300" cy="200" r="30" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="r" values="30;35;30" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite"/>
            </circle>
          </svg>
        }
        relatedServices={[
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          },
          {
            title: "KSA PDPL Compliance",
            link: "/services/ksa-pdpl"
          },
          {
            title: "GDPR Compliance",
            link: "/services/gdpr"
          },
          {
            title: "Data Privacy Framework",
            link: "/services/data-privacy"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Bahrain PDPL Compliance FAQs"
        subtitle="Common questions about Bahrain's data protection law compliance"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default BahrainPdplPage;